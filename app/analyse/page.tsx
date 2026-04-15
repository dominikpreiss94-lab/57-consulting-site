"use client";

import { useState, useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

type Phase = "input" | "analysing" | "result";

const branchenOptionen = [
  "Produktion & Fertigung",
  "Bau & Immobilien",
  "Handel & Logistik",
  "Dienstleistung & Beratung",
  "IT & Software",
  "Energie & Versorgung",
  "Gesundheit & Soziales",
  "Sonstiges"
];

export default function AnalysePage() {
  const [phase, setPhase] = useState<Phase>("input");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPhase("analysing");
    setResult("");
    setError("");

    const form = e.currentTarget;
    const data = {
      branche: (form.elements.namedItem("branche") as HTMLSelectElement).value,
      teamgroesse: (form.elements.namedItem("teamgroesse") as HTMLSelectElement).value,
      systeme: (form.elements.namedItem("systeme") as HTMLInputElement).value,
      herausforderung: (form.elements.namedItem("herausforderung") as HTMLTextAreaElement).value
    };

    try {
      const res = await fetch("/api/analyse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        const errData = await res.json();
        setError(errData.error || "Fehler bei der Analyse.");
        setPhase("input");
        return;
      }

      setPhase("result");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        setError("Streaming nicht verfügbar.");
        setPhase("input");
        return;
      }

      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const payload = line.slice(6);
            if (payload === "[DONE]") break;
            try {
              const parsed = JSON.parse(payload);
              if (parsed.text) {
                setResult((prev) => prev + parsed.text);
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      }
    } catch {
      setError("Netzwerkfehler. Bitte versuchen Sie es erneut.");
      setPhase("input");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      {/* Hero */}
      <section className="py-16 pb-12 border-b border-border">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
          KI-Problemanalyse
        </p>
        <h1 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white max-w-3xl">
          Beschreiben Sie Ihre Herausforderung – wir analysieren das Vorgehen.
        </h1>
        <p className="mt-3 text-text-muted max-w-xl">
          Unsere KI analysiert Ihre Situation und schlägt ein konkretes Vorgehen
          vor, zugeschnitten auf unser Leistungsportfolio. Keine generischen
          Tipps, sondern eine individuelle Einschätzung.
        </p>
      </section>

      <section className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left: Input Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="branche" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                    Branche
                  </label>
                  <select
                    id="branche"
                    name="branche"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-orange"
                  >
                    <option value="">Bitte wählen</option>
                    {branchenOptionen.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="teamgroesse" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                    Unternehmensgröße
                  </label>
                  <select
                    id="teamgroesse"
                    name="teamgroesse"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-orange"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="10-50">10–50 Mitarbeitende</option>
                    <option value="50-150">50–150 Mitarbeitende</option>
                    <option value="150-500">150–500 Mitarbeitende</option>
                    <option value="500+">500+ Mitarbeitende</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="systeme" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                  Systeme im Einsatz
                </label>
                <input
                  type="text"
                  id="systeme"
                  name="systeme"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-orange placeholder:text-text-muted/50"
                  placeholder="z.B. SAP, Salesforce, Notion, Excel..."
                />
              </div>

              <div>
                <label htmlFor="herausforderung" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                  Ihre Herausforderung <span className="text-orange">*</span>
                </label>
                <textarea
                  id="herausforderung"
                  name="herausforderung"
                  required
                  minLength={10}
                  rows={6}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-orange resize-y placeholder:text-text-muted/50"
                  placeholder="Beschreiben Sie Ihre Situation möglichst konkret: Welcher Prozess, welches Problem, was haben Sie bereits versucht..."
                />
              </div>

              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={phase === "analysing"}
                className={`w-full cursor-pointer rounded-lg py-4 text-sm font-semibold transition-all ${
                  phase === "analysing"
                    ? "bg-surface text-text-muted"
                    : "bg-orange text-white hover:bg-[#d45a08]"
                }`}
              >
                {phase === "analysing" ? "Analyse läuft..." : "Vorgehen analysieren"}
              </button>

              <p className="text-xs text-text-muted">
                Max. 3 Analysen pro Tag. Ihre Eingaben werden nicht gespeichert.
              </p>
            </form>
          </div>

          {/* Right: Result */}
          <div ref={resultRef}>
            {phase === "input" && (
              <div className="rounded-xl border border-border border-dashed bg-bg-card p-10 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-orange">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm text-text-muted">
                    Beschreiben Sie Ihre Herausforderung links –<br />
                    hier erscheint Ihre individuelle Analyse.
                  </p>
                </div>
              </div>
            )}

            {phase === "analysing" && !result && (
              <div className="rounded-xl border border-orange/20 bg-bg-card p-10 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-orange border-t-transparent" />
                  <p className="text-sm text-text-muted">Analyse Ihrer Herausforderung...</p>
                </div>
              </div>
            )}

            {(phase === "result" || result) && (
              <div className="rounded-xl border border-orange/20 bg-bg-card p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-4">
                  Unsere Einschätzung
                </p>
                <div className="text-sm leading-7 text-text-secondary whitespace-pre-wrap">
                  {result}
                  {phase === "analysing" && <span className="inline-block w-2 h-4 bg-orange animate-pulse ml-0.5" />}
                </div>

                {phase === "result" && result && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-text-muted mb-4">
                      Diese Einschätzung basiert auf Ihrer Beschreibung. In einem
                      persönlichen Gespräch können wir deutlich tiefer einsteigen.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button href="/#kontakt">Erstgespräch vereinbaren</Button>
                      <button
                        onClick={() => { setPhase("input"); setResult(""); }}
                        className="cursor-pointer rounded-lg border border-border px-6 py-3 text-sm text-text-muted hover:text-white hover:border-border-hover transition-colors bg-transparent"
                      >
                        Neue Analyse
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
