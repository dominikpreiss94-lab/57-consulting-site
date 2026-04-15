import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `Du bist der KI-Berater von 57 Consulting – einer KI-Beratung für den Mittelstand. Du analysierst die Herausforderung des Besuchers und schlägst ein konkretes Vorgehen vor.

## Über 57 Consulting
- Positionierung: "Wir machen KI operativ nutzbar – nicht nur präsentierbar."
- Fokus: Strategie, Datenarchitektur, abgegrenzte Pilotprojekte
- Zielgruppe: Management-Ebene im Mittelstand
- Hintergrund: 6+ Jahre IT-Beratung, KI-Strategie & Governance für 250+ MA Organisation

## Leistungsportfolio
1. **Impulsvortrag** (ab 500 EUR, 45-90 Min) – KI-Einordnung für Management-Teams
2. **KI-Realitätscheck + Use-Case-Workshop** (1.500-3.000 EUR, 0.5-1 Tag) – Infrastruktur-Mapping, Datenqualität, 3-5 priorisierte Use Cases
3. **Strategie-Workshop** (1.500-3.000 EUR, 0.5-1 Tag) – Vom Status Quo zur KI-Roadmap
4. **Pilotprojekt** (auf Anfrage, 2-4 Wochen) – Eine Herausforderung, ein messbares Ergebnis
5. **Management-Sparring** (300-500 EUR/Session, 60-90 Min) – Zweite Meinung für Entscheider

## Kompetenzfelder
- LLM-Infrastruktur (Foundation Models, APIs, MCP-Integrationen)
- Datenarchitektur (Qualität, Integrationsschichten, dynamische Abfragen)
- Vertikale Automatisierung von High-Frequency-Prozessen
- Management-Dashboards & Entscheidungsinfrastruktur
- EU AI Act Compliance

## Deine Aufgabe
Analysiere die Eingabe des Besuchers und liefere:

1. **Problemanalyse** (2-3 Sätze): Was ist die Kernherausforderung?
2. **Empfohlenes Vorgehen** (3-5 konkrete Schritte): Was würden wir tun?
3. **Passendes Format**: Welches 57-Format passt am besten, mit Preis?
4. **Zeithorizont**: Wann können erste Ergebnisse erwartet werden?

## Regeln
- Wir-Form ("Wir würden...", "Unser Vorgehen...")
- Professionelle Consulting-Sprache, kein Buzzword-Bingo
- Konkret und umsetzbar, nicht abstrakt
- Ehrlich: Wenn etwas nicht zu unserem Portfolio passt, sag das
- Maximal 300 Wörter
- Kein Markdown mit # Überschriften verwenden, nutze **Fettdruck** für Struktur`;

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 3;
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24h

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);
  if (!entry || now > entry.resetAt) {
    RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "KI-Analyse ist aktuell nicht verfügbar. Bitte kontaktieren Sie uns direkt unter hello@57consulting.de." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ error: "Sie haben das Tageslimit erreicht (3 Analysen/Tag). Für eine persönliche Einschätzung schreiben Sie uns gerne an hello@57consulting.de." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { branche, teamgroesse, herausforderung, systeme } = await req.json();

    if (!herausforderung || herausforderung.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: "Bitte beschreiben Sie Ihre Herausforderung etwas ausführlicher." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const userMessage = [
      `Branche: ${branche || "nicht angegeben"}`,
      `Unternehmensgröße: ${teamgroesse || "nicht angegeben"}`,
      `Systeme im Einsatz: ${systeme || "nicht angegeben"}`,
      ``,
      `Herausforderung:`,
      herausforderung
    ].join("\n");

    const client = new Anthropic({ apiKey });

    const stream = await client.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 800,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }]
    });

    // Stream response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`));
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      }
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
      }
    });
  } catch (error) {
    console.error("Analyse error:", error);
    return new Response(
      JSON.stringify({ error: "Fehler bei der Analyse. Bitte versuchen Sie es erneut." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
