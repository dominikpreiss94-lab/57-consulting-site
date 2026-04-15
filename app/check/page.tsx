"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

type Step = "branche" | "groesse" | "status" | "herausforderung" | "ergebnis";

type Answers = {
  branche: string;
  groesse: string;
  status: string;
  herausforderung: string;
};

const branchen = [
  "Produktion & Fertigung",
  "Bau & Immobilien",
  "Handel & Logistik",
  "Dienstleistung & Beratung",
  "IT & Software",
  "Energie & Versorgung",
  "Gesundheit & Soziales",
  "Sonstiges"
];

const groessen = [
  "10–50 Mitarbeitende",
  "50–150 Mitarbeitende",
  "150–500 Mitarbeitende",
  "500+ Mitarbeitende"
];

const statusOptionen = [
  { value: "keine", label: "Noch kein KI-Einsatz", desc: "Wir haben uns noch nicht systematisch mit KI beschäftigt." },
  { value: "experimentell", label: "Experimentell", desc: "Einzelne Mitarbeitende nutzen ChatGPT o.ä., aber unstrukturiert." },
  { value: "piloten", label: "Erste Piloten", desc: "Wir haben erste Projekte gestartet, aber noch keine Skalierung." },
  { value: "produktiv", label: "In Produktion", desc: "KI ist in mindestens einem Prozess produktiv im Einsatz." }
];

const herausforderungen = [
  { value: "strategie", label: "Strategie & Orientierung", desc: "Wir wissen nicht, wo wir anfangen sollen." },
  { value: "daten", label: "Datenqualität & Systeme", desc: "Unsere Daten sind verteilt, inkonsistent oder schwer zugänglich." },
  { value: "prozesse", label: "Prozesse & Automatisierung", desc: "Wir haben repetitive Prozesse, die KI übernehmen könnte." },
  { value: "governance", label: "Governance & Compliance", desc: "Wir brauchen Richtlinien und EU AI Act Konformität." }
];

function getRecommendation(answers: Answers) {
  const { status, herausforderung } = answers;

  if (status === "keine" || status === "experimentell") {
    if (herausforderung === "strategie") {
      return {
        level: "Einstieg",
        title: "Ihr nächster Schritt: KI-Realitätscheck",
        description:
          "Sie stehen am Anfang – das ist die beste Ausgangslage für einen strukturierten Einstieg. Im Realitätscheck identifizieren wir gemeinsam, wo KI für Ihr Unternehmen die größten Hebel hat, und priorisieren 3–5 konkrete Use Cases.",
        format: "KI-Realitätscheck + Use-Case-Workshop",
        price: "1.500 – 3.000 EUR",
        link: "/angebot/realitaetscheck",
        alternativ: { label: "Impulsvortrag", link: "/angebot/impulsvortrag", reason: "Wenn Sie zuerst Ihr Management-Team abholen wollen" }
      };
    }
    if (herausforderung === "governance") {
      return {
        level: "Compliance",
        title: "Ihr nächster Schritt: Compliance-Einordnung",
        description:
          "Der EU AI Act ist seit Februar 2026 in Kraft. Im Realitätscheck inventarisieren wir Ihre aktuelle KI-Nutzung, ordnen Risikoklassen ein und entwickeln einen pragmatischen Governance-Rahmen.",
        format: "KI-Realitätscheck (mit Compliance-Fokus)",
        price: "1.500 – 3.000 EUR",
        link: "/angebot/realitaetscheck",
        alternativ: { label: "Management-Sparring", link: "/angebot/sparring", reason: "Für eine schnelle Einschätzung vorab" }
      };
    }
    return {
      level: "Einstieg",
      title: "Ihr nächster Schritt: Orientierung schaffen",
      description:
        "Bevor Sie in Technologie investieren, brauchen Sie Klarheit über Ihre Datenschichten und Prozesse. Der Realitätscheck schafft die Grundlage für gezielte nächste Schritte.",
      format: "KI-Realitätscheck + Use-Case-Workshop",
      price: "1.500 – 3.000 EUR",
      link: "/angebot/realitaetscheck",
      alternativ: { label: "Strategie-Workshop", link: "/angebot/workshop", reason: "Wenn Sie direkt an einer Roadmap arbeiten wollen" }
    };
  }

  if (status === "piloten") {
    if (herausforderung === "prozesse") {
      return {
        level: "Skalierung",
        title: "Ihr nächster Schritt: Pilotprojekt",
        description:
          "Sie haben erste Erfahrungen – jetzt geht es darum, einen konkreten Prozess End-to-End mit KI zu lösen. In 2–4 Wochen bauen wir eine produktionsreife Lösung mit messbarem ROI.",
        format: "Pilotprojekt",
        price: "Auf Anfrage",
        link: "/angebot/pilot",
        alternativ: { label: "Strategie-Workshop", link: "/angebot/workshop", reason: "Wenn Sie erst priorisieren wollen, welcher Prozess den größten Hebel hat" }
      };
    }
    return {
      level: "Aufbau",
      title: "Ihr nächster Schritt: Strategie-Workshop",
      description:
        "Sie haben erste Piloten, aber es fehlt die Struktur für Skalierung. Im Workshop entwickeln wir Ihre KI-Roadmap: Welche Prozesse zuerst, welche Architekturentscheidungen, welches Budget.",
      format: "Strategie-Workshop",
      price: "1.500 – 3.000 EUR",
      link: "/angebot/workshop",
      alternativ: { label: "Management-Sparring", link: "/angebot/sparring", reason: "Für eine schnelle zweite Meinung zu konkreten Entscheidungen" }
    };
  }

  // produktiv
  return {
    level: "Optimierung",
    title: "Ihr nächster Schritt: Management-Sparring",
    description:
      "Sie setzen KI bereits produktiv ein – jetzt geht es um Optimierung, weitere Use Cases und strategische Entscheidungen. Im Sparring bekommen Sie eine fundierte zweite Meinung zu Technologie-Bewertung, Vendor-Auswahl und Skalierung.",
    format: "Management-Sparring",
    price: "300 – 500 EUR / Session",
    link: "/angebot/sparring",
    alternativ: { label: "Pilotprojekt", link: "/angebot/pilot", reason: "Wenn Sie einen konkreten neuen Prozess automatisieren wollen" }
  };
}

function OptionButton({
  selected,
  onClick,
  label,
  desc
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  desc?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full cursor-pointer rounded-xl border p-5 text-left transition-all duration-200 ${
        selected
          ? "border-orange/40 bg-orange/10"
          : "border-border bg-bg-card hover:border-border-hover hover:bg-bg-card-hover"
      }`}
    >
      <p className={`text-sm font-semibold ${selected ? "text-orange" : "text-white"}`}>{label}</p>
      {desc && <p className="mt-1 text-xs leading-5 text-text-muted">{desc}</p>}
    </button>
  );
}

export default function CheckPage() {
  const [step, setStep] = useState<Step>("branche");
  const [answers, setAnswers] = useState<Answers>({
    branche: "",
    groesse: "",
    status: "",
    herausforderung: ""
  });

  const steps: Step[] = ["branche", "groesse", "status", "herausforderung", "ergebnis"];
  const currentIndex = steps.indexOf(step);
  const progress = ((currentIndex + 1) / steps.length) * 100;

  function next() {
    const nextStep = steps[currentIndex + 1];
    if (nextStep) setStep(nextStep);
  }

  function back() {
    const prevStep = steps[currentIndex - 1];
    if (prevStep) setStep(prevStep);
  }

  const canProceed =
    (step === "branche" && answers.branche) ||
    (step === "groesse" && answers.groesse) ||
    (step === "status" && answers.status) ||
    (step === "herausforderung" && answers.herausforderung);

  const recommendation = step === "ergebnis" ? getRecommendation(answers) : null;

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      <section className="py-16 pb-12 border-b border-border">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
          KI-Check
        </p>
        <h1 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white max-w-2xl">
          In 2 Minuten zum passenden Einstieg.
        </h1>
        <p className="mt-3 text-text-muted max-w-lg">
          Vier kurze Fragen – danach wissen Sie, welches Format für Ihre
          Situation am besten passt.
        </p>
      </section>

      <section className="py-12">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="h-1 w-full rounded-full bg-surface">
            <div
              className="h-1 rounded-full bg-orange transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-text-muted">
            {step === "ergebnis" ? "Ihre Empfehlung" : `Frage ${currentIndex + 1} von 4`}
          </p>
        </div>

        <div className="max-w-2xl">
          {/* Step 1: Branche */}
          {step === "branche" && (
            <div>
              <h2 className="font-display text-lg text-white mb-6">In welcher Branche ist Ihr Unternehmen tätig?</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {branchen.map((b) => (
                  <OptionButton
                    key={b}
                    selected={answers.branche === b}
                    onClick={() => setAnswers({ ...answers, branche: b })}
                    label={b}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Größe */}
          {step === "groesse" && (
            <div>
              <h2 className="font-display text-lg text-white mb-6">Wie groß ist Ihr Unternehmen?</h2>
              <div className="grid gap-3">
                {groessen.map((g) => (
                  <OptionButton
                    key={g}
                    selected={answers.groesse === g}
                    onClick={() => setAnswers({ ...answers, groesse: g })}
                    label={g}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 3: KI-Status */}
          {step === "status" && (
            <div>
              <h2 className="font-display text-lg text-white mb-6">Wie weit ist Ihr Unternehmen mit KI?</h2>
              <div className="grid gap-3">
                {statusOptionen.map((s) => (
                  <OptionButton
                    key={s.value}
                    selected={answers.status === s.value}
                    onClick={() => setAnswers({ ...answers, status: s.value })}
                    label={s.label}
                    desc={s.desc}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Herausforderung */}
          {step === "herausforderung" && (
            <div>
              <h2 className="font-display text-lg text-white mb-6">Was ist Ihre größte Herausforderung?</h2>
              <div className="grid gap-3">
                {herausforderungen.map((h) => (
                  <OptionButton
                    key={h.value}
                    selected={answers.herausforderung === h.value}
                    onClick={() => setAnswers({ ...answers, herausforderung: h.value })}
                    label={h.label}
                    desc={h.desc}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {step === "ergebnis" && recommendation && (
            <div>
              <div className="mb-4">
                <span className="rounded-md bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                  {recommendation.level}
                </span>
              </div>
              <h2 className="font-display text-2xl text-white mb-4">
                {recommendation.title}
              </h2>
              <p className="text-base leading-7 text-text-secondary mb-8">
                {recommendation.description}
              </p>

              <div className="rounded-xl border border-border bg-bg-card p-6 mb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {recommendation.format}
                  </h3>
                  <span className="text-sm font-semibold text-orange">{recommendation.price}</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button href={recommendation.link}>Details ansehen</Button>
                  <Button href="/#kontakt" variant="ghost">Erstgespräch vereinbaren</Button>
                </div>
              </div>

              {recommendation.alternativ && (
                <div className="rounded-xl border border-border bg-bg-card p-5">
                  <p className="text-xs text-text-muted mb-2">Alternative</p>
                  <p className="text-sm text-text-secondary">
                    {recommendation.alternativ.reason}?{" "}
                    <a href={recommendation.alternativ.link} className="text-orange hover:text-white transition-colors">
                      {recommendation.alternativ.label} →
                    </a>
                  </p>
                </div>
              )}

              <div className="mt-8 rounded-xl border border-border bg-bg-card p-5">
                <p className="text-xs text-text-muted mb-2">Tiefergehende Analyse gewünscht?</p>
                <p className="text-sm text-text-secondary">
                  Beschreiben Sie Ihre Herausforderung im Detail und erhalten Sie eine
                  KI-gestützte Einschätzung.{" "}
                  <a href="/analyse" className="text-orange hover:text-white transition-colors">
                    Zur KI-Problemanalyse →
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          {step !== "ergebnis" && (
            <div className="mt-8 flex gap-4">
              {currentIndex > 0 && (
                <button
                  onClick={back}
                  className="cursor-pointer rounded-lg border border-border px-6 py-3 text-sm text-text-muted hover:text-white hover:border-border-hover transition-colors bg-transparent"
                >
                  Zurück
                </button>
              )}
              <button
                onClick={next}
                disabled={!canProceed}
                className={`cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                  canProceed
                    ? "bg-orange text-white hover:bg-[#d45a08]"
                    : "bg-surface text-text-muted cursor-not-allowed"
                }`}
              >
                {currentIndex === 3 ? "Empfehlung anzeigen" : "Weiter"}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
