import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardBody } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata = {
  title: "Über uns – 57 Consulting",
  description: "Operativ gebaut, nicht theoretisch beraten. KI-Strategie, Governance und Enablement aus erster Hand."
};

export default function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      {/* Profil */}
      <section className="py-16 pb-12 border-b border-border">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
          Über uns
        </p>
        <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-text max-w-3xl">
          Operativ gebaut, nicht theoretisch beraten.
        </h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[1.05rem] leading-7 text-text-secondary">
              57 Consulting verbindet KI-Strategie mit operativer Umsetzung. Wir
              kommen aus der IT-Beratung, aus Projektmanagement und
              ERP-Transformation – und haben KI dort eingeführt, wo es um echte
              Geschäftsprozesse geht, nicht um Demos.
            </p>
            <p className="mt-4 text-[1.05rem] leading-7 text-text-secondary">
              Unser Hintergrund: Verantwortung für KI-Strategie, Governance und
              Enablement in einem Unternehmen mit über 250 Mitarbeitenden.
              Datenarchitekturen aufgebaut, Pilotgruppen gesteuert, vertikale
              Lösungen bis in die Produktion gebracht.
            </p>
          </div>
          <ul className="list-none space-y-0">
            {[
              "KI-Strategie & Governance für mittelständische Organisationen",
              "LLM-Infrastruktur: Foundation Models, APIs, MCP-Integrationen",
              "Datenarchitektur: Qualität, Integrationsschichten, dynamische Abfragen",
              "Vertikale Automatisierung von High-Frequency-Prozessen",
              "Management-Dashboards & Entscheidungsinfrastruktur",
              "6+ Jahre IT-Beratung, Projektmanagement & ERP-Transformation",
              "M.Sc. Business Consulting & Digital Management"
            ].map((item) => (
              <li
                key={item}
                className="relative border-b border-border py-2.5 pl-5 text-sm text-text-secondary last:border-b-0 before:content-[''] before:absolute before:left-0 before:top-4 before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech-Badges */}
      <section className="py-12 border-b border-border">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
          Technologien, mit denen wir arbeiten
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Claude API", "GPT-4", "Copilot", "MCP-Server", "LangChain",
            "n8n", "Python", "Next.js", "Notion API", "REST / GraphQL"
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-colors hover:border-orange/30 hover:text-orange"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* EU AI Act */}
      <section className="py-12 border-b border-border">
        <SectionHeader
          label="EU AI Act"
          title="Seit Februar 2026 gelten neue Regeln für KI im Unternehmen."
        >
          Der EU AI Act verpflichtet Unternehmen zur KI-Kompetenz und zur
          Dokumentation ihrer KI-Nutzung. Wir helfen bei der Einordnung –
          sachlich, nicht alarmistisch.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <CardTitle>KI-Inventarisierung</CardTitle>
            <CardBody>
              Welche KI-Systeme werden eingesetzt? Welche Risikoklasse?
              Systematische Bestandsaufnahme als Grundlage für Compliance.
            </CardBody>
          </Card>
          <Card>
            <CardTitle>Kompetenznachweis</CardTitle>
            <CardBody>
              Der AI Act fordert KI-Kompetenz. Wir ordnen ein, was das für
              Ihr Unternehmen konkret bedeutet und welche Schritte nötig sind.
            </CardBody>
          </Card>
          <Card>
            <CardTitle>Governance-Rahmen</CardTitle>
            <CardBody>
              Richtlinien für den KI-Einsatz: Wer darf was, unter welchen
              Bedingungen, mit welcher Dokumentation.
            </CardBody>
          </Card>
          <Card>
            <CardTitle>Im Realitätscheck enthalten</CardTitle>
            <CardBody>
              Die Compliance-Dimension ist Bestandteil unseres KI-Realitätschecks
              – kein separates Produkt, sondern integrierte Einordnung.
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="rounded-xl border border-border bg-bg-card p-10">
          <h2 className="font-display text-xl text-text mb-2">Passt das zusammen?</h2>
          <p className="text-text-muted mb-6 max-w-lg">
            30 Minuten reichen, um zu klären ob wir der richtige Partner für
            Ihre Herausforderung sind.
          </p>
          <Button href="/kontakt">Kontakt aufnehmen</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
