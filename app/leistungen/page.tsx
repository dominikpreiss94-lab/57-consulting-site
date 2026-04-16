import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardBody, CardPrice } from "@/components/ui/card";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata = {
  title: "Leistungen – 57 Consulting",
  description: "Klare Formate, klare Ergebnisse. Von der Ersteinordnung bis zum produktionsreifen Pilotprojekt."
};

export default function LeistungenPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      <section className="py-16 pb-12 border-b border-border">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
          Leistungen
        </p>
        <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-text max-w-3xl">
          Kein Rahmenvertrag. Klare Formate, klare Ergebnisse.
        </h1>
        <p className="mt-4 text-lg leading-7 text-text-muted max-w-2xl">
          Jedes Format hat einen definierten Scope, ein klares Ergebnis und
          eine transparente Investition. Einstieg an jeder Stelle möglich.
        </p>
      </section>

      <section className="py-12">
        <a href="/angebot/realitaetscheck" className="block">
          <FeatureCard
            title="KI-Realitätscheck + Use-Case-Workshop"
            description="Ein halber bis ganzer Tag: Sichtung der Unternehmenslandschaft, Identifikation konkreter Herausforderungen und Priorisierung der ersten Hebel. Das Ergebnis ist eine belastbare Entscheidungsgrundlage – kein Foliensatz."
            checklist={[
              "Infrastruktur-Mapping: LLMs, APIs, bestehende Systeme",
              "Datenqualitäts-Assessment der relevanten Prozesse",
              "3–5 priorisierte Use Cases mit Aufwandsschätzung",
              "Klare Empfehlung für abgegrenzte Pilotprojekte"
            ]}
            invest="Investition: 1.500 – 3.000 EUR je nach Umfang"
          />
        </a>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <a href="/angebot/impulsvortrag" className="block">
            <Card className="h-full">
              <CardTitle>Impulsvortrag</CardTitle>
              <CardBody>
                45–90 Minuten für Management-Teams und Entscheider. Einordnung der
                LLM-Landschaft, Datenarchitektur-Anforderungen, reale Anwendungsfälle
                – ohne Buzzwords.
              </CardBody>
              <CardPrice>ab 500 EUR</CardPrice>
            </Card>
          </a>
          <a href="/angebot/workshop" className="block">
            <Card className="h-full">
              <CardTitle>Strategie-Workshop</CardTitle>
              <CardBody>
                Arbeitsorientiert: Vom Status Quo zur KI-Roadmap. Datenschichten
                bewerten, Prozesse priorisieren, Architekturentscheidungen treffen.
                Halber oder ganzer Tag.
              </CardBody>
              <CardPrice>1.500 – 3.000 EUR</CardPrice>
            </Card>
          </a>
          <a href="/angebot/pilot" className="block">
            <Card className="h-full">
              <CardTitle>Pilotprojekt</CardTitle>
              <CardBody>
                Eine abgegrenzte Herausforderung, ein messbares Ergebnis.
                API-Integrationen, Daten-Pipelines, Prozessautomatisierung –
                produktionsreif in 2–4 Wochen.
              </CardBody>
              <CardPrice>Auf Anfrage</CardPrice>
            </Card>
          </a>
          <a href="/angebot/sparring" className="block">
            <Card className="h-full">
              <CardTitle>Management-Sparring</CardTitle>
              <CardBody>
                Für Entscheider, die eine fundierte zweite Meinung brauchen.
                Technologie-Bewertung, Vendor-Auswahl, Build-vs-Buy-Entscheidungen.
              </CardBody>
              <CardPrice>300 – 500 EUR / Session</CardPrice>
            </Card>
          </a>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="rounded-xl border border-border bg-bg-card p-10">
          <h2 className="font-display text-xl text-text mb-2">Unsicher, welches Format passt?</h2>
          <p className="text-text-muted mb-6 max-w-lg">
            Unser KI-Check hilft Ihnen in 2 Minuten, den passenden Einstieg zu finden.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/check">KI-Check starten</Button>
            <Button href="/kontakt" variant="ghost">Direkt Kontakt aufnehmen</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
