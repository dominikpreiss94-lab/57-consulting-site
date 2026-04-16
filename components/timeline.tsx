"use client";

import { useState } from "react";

type Phase = {
  number: string;
  title: string;
  duration57: string;
  durationClassic: string;
  price: string;
  description: string;
  deliverables: string[];
  tools: string[];
};

const phases: Phase[] = [
  {
    number: "01",
    title: "Erstgespräch",
    duration57: "30 Minuten",
    durationClassic: "–",
    price: "Kostenfrei",
    description:
      "Wir verstehen Ihre Herausforderung, prüfen den Fit und schätzen ein, ob und wie wir helfen können. Kein Pitch, kein Verkaufsgespräch.",
    deliverables: [
      "Einschätzung der Ausgangslage",
      "Empfehlung für nächsten Schritt",
      "Ehrliches Feedback zum KI-Potenzial"
    ],
    tools: []
  },
  {
    number: "02",
    title: "Realitätscheck",
    duration57: "0.5–1 Tag",
    durationClassic: "2–4 Wochen",
    price: "1.500 – 3.000 EUR",
    description:
      "Sichtung der Unternehmenslandschaft: Welche Systeme, welche Daten, welche Prozesse. Identifikation konkreter Hebel und Priorisierung der ersten Use Cases.",
    deliverables: [
      "Infrastruktur-Mapping (LLMs, APIs, Systeme)",
      "Datenqualitäts-Assessment",
      "3–5 priorisierte Use Cases mit Aufwandsschätzung",
      "Klare Empfehlung für Pilotprojekte"
    ],
    tools: ["KI-gestützte Systemanalyse", "Use-Case-Scoring", "Daten-Audit"]
  },
  {
    number: "03",
    title: "Pilotprojekt",
    duration57: "2–4 Wochen",
    durationClassic: "3–6 Monate",
    price: "Auf Anfrage",
    description:
      "Eine abgegrenzte Herausforderung, ein messbares Ergebnis. Wir bauen die Lösung, nicht das Konzept – produktionsreif und dokumentiert.",
    deliverables: [
      "Funktionsfähiger Prototyp / MVP",
      "API-Integrationen und Daten-Pipelines",
      "Dokumentation und Übergabe",
      "Messbarer ROI"
    ],
    tools: ["LLM-APIs", "MCP-Server", "Automatisierungs-Pipelines", "Custom Code"]
  },
  {
    number: "04",
    title: "Skalierung",
    duration57: "Fortlaufend",
    durationClassic: "–",
    price: "Management-Sparring: 300–500 EUR / Session",
    description:
      "Vom erfolgreichen Piloten zum Rollout: Weitere Use Cases identifizieren, Governance aufbauen, Teams befähigen. Einstieg an dieser Phase jederzeit möglich.",
    deliverables: [
      "Rollout-Planung für weitere Use Cases",
      "KI-Governance und Richtlinien",
      "Team-Enablement und Wissenstransfer",
      "Laufendes Sparring bei Bedarf"
    ],
    tools: ["Governance-Frameworks", "Schulungsformate", "Performance-Monitoring"]
  }
];

function PhaseCard({ phase, isOpen, onToggle }: { phase: Phase; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="relative pl-10 md:pl-14">
      {/* Timeline dot + line */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div
          className={`h-7 w-7 rounded-full border-2 flex items-center justify-center text-[0.6rem] font-bold transition-all duration-300 ${
            isOpen
              ? "border-orange bg-orange/10 text-orange"
              : "border-border bg-bg-card text-text-muted"
          }`}
        >
          {phase.number}
        </div>
        <div className="w-px flex-1 bg-border min-h-[2rem]" />
      </div>

      <button
        onClick={onToggle}
        className="w-full cursor-pointer text-left rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-bg-card-hover mb-6"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-text">{phase.title}</h3>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-orange font-semibold">{phase.duration57}</span>
            {phase.durationClassic !== "–" && (
              <span className="text-text-muted line-through">{phase.durationClassic}</span>
            )}
          </div>
        </div>

        {/* Price */}
        <p className="mt-1 text-sm text-orange/70">{phase.price}</p>

        {/* Expandable content */}
        <div
          className={`overflow-hidden transition-all duration-400 ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm leading-7 text-text-muted mb-4">{phase.description}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                Deliverables
              </p>
              <ul className="space-y-1.5">
                {phase.deliverables.map((d) => (
                  <li
                    key={d}
                    className="relative pl-4 text-sm text-text-secondary before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            {phase.tools.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                  KI-Tools & Methoden
                </p>
                <div className="flex flex-wrap gap-2">
                  {phase.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface px-3 py-1 text-xs text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Toggle indicator */}
        <div className="mt-3 text-xs text-text-muted">
          {isOpen ? "Weniger anzeigen ↑" : "Details anzeigen ↓"}
        </div>
      </button>
    </div>
  );
}

export function Timeline() {
  const [openIndex, setOpenIndex] = useState(1); // Realitätscheck default open

  return (
    <div>
      {phases.map((phase, i) => (
        <PhaseCard
          key={phase.number}
          phase={phase}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}

      {/* Comparison table */}
      <div className="mt-8 rounded-xl border border-border bg-bg-card p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
          Zeitvergleich: 57 Consulting vs. klassisches Vorgehen
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left font-medium text-text-muted">Phase</th>
                <th className="pb-3 text-left font-medium text-orange">57 Consulting</th>
                <th className="pb-3 text-left font-medium text-text-muted">Klassisch</th>
              </tr>
            </thead>
            <tbody>
              {phases.filter((p) => p.durationClassic !== "–").map((phase) => (
                <tr key={phase.number} className="border-b border-border last:border-b-0">
                  <td className="py-3 text-text-secondary">{phase.title}</td>
                  <td className="py-3 font-semibold text-orange">{phase.duration57}</td>
                  <td className="py-3 text-text-muted line-through">{phase.durationClassic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
