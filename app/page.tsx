import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardIcon, CardTitle, CardBody, CardPrice } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      {/* ── Hero ── */}
      <section className="py-24 pb-20 border-b border-border">
        <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.08] tracking-tight text-white max-w-4xl">
          Wir machen KI <em className="not-italic text-orange">operativ nutzbar</em> –
          nicht nur präsentierbar.
        </h1>
        <p className="mt-6 text-lg leading-7 text-text-muted max-w-2xl">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/analyse">Herausforderung analysieren</Button>
          <Button href="#kontakt" variant="ghost">Erstgespräch vereinbaren</Button>
        </div>
      </section>

      {/* ── Leistungen ── */}
      <section className="py-20 border-b border-border" id="leistungen">
        <SectionHeader
          label="Leistungen"
          title="Drei Ebenen, die zusammengehören."
        >
          Die meisten Unternehmen scheitern nicht an der Technologie. Sie scheitern
          an der Reihenfolge: Strategie vor Tools, Daten vor Prozessen, Piloten vor
          Rollout.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardIcon>I</CardIcon>
            <CardTitle>KI-Strategie &amp; Einordnung</CardTitle>
            <CardBody>
              LLM-Infrastruktur verstehen: Foundation Models, vertikale Lösungen,
              API-Anbindungen. Welche Architektur passt zu welchem Anwendungsfall –
              und wo ist Build vs. Buy die richtige Frage.
            </CardBody>
          </Card>
          <Card>
            <CardIcon>II</CardIcon>
            <CardTitle>Datenschicht &amp; Architektur</CardTitle>
            <CardBody>
              Prozesse sind nur so gut wie die Daten, auf denen sie laufen. Wir
              analysieren Datenqualität, bauen Integrationsschichten und schaffen die
              Grundlage für belastbare KI-Anwendungen.
            </CardBody>
          </Card>
          <Card>
            <CardIcon>III</CardIcon>
            <CardTitle>Vertikale Lösungen &amp; Piloten</CardTitle>
            <CardBody>
              Abgegrenzte Pilotprojekte für konkrete Herausforderungen:
              Automatisierung von High-Frequency-Prozessen, dynamische Abfragen,
              Management-Dashboards – produktionsreif in 2–4 Wochen.
            </CardBody>
          </Card>
        </div>
      </section>

      {/* ── Angebot ── */}
      <section className="py-20 border-b border-border" id="angebot">
        <SectionHeader
          label="Angebot"
          title="Kein Rahmenvertrag. Klare Formate, klare Ergebnisse."
        />
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

      {/* ── Praxis ── */}
      <section className="py-20 border-b border-border" id="praxis">
        <SectionHeader
          label="Aus der Praxis"
          title="Was möglich ist, wenn Strategie und Daten stimmen."
        >
          Vertikale Lösungen, die wir in realen Unternehmensumgebungen gebaut haben.
          Jedes Beispiel basiert auf sauberer Datenarchitektur und abgegrenzten
          Pilotprojekten.{" "}
          <a href="/use-cases" className="text-orange hover:text-white transition-colors">
            Alle Use Cases im Detail →
          </a>
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Automatisierung" value="30 Min → 90 Sek">
            Dokumentenerstellung aus strukturierten Daten. API-Anbindung,
            Template-Engine, vollautomatischer Output.
          </StatCard>
          <StatCard label="Management-Dashboards" value="Echtzeit">
            Daten aus verschiedenen Quellsystemen konsolidiert. Dynamische Abfragen
            über eigene Datenschicht, keine manuellen Reports.
          </StatCard>
          <StatCard label="Ausschreibungsanalyse" value="85% schneller">
            KI-gestützte Dokumentenanalyse, automatisierte Vorrecherche,
            strukturierte Entscheidungsvorlagen für Go/No-Go.
          </StatCard>
          <StatCard label="API & MCP-Integration" value="Live-Daten">
            Systeme verbinden statt Daten kopieren. MCP-Server, API-Gateways,
            dynamische Datenzusammenführung für Entscheidungsprozesse.
          </StatCard>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card>
            <CardTitle>Vertikale Prozessautomatisierung</CardTitle>
            <CardBody>
              High-Frequency-Prozesse identifizieren, End-to-End automatisieren. Von
              der Datenextraktion über die Verarbeitung bis zur strukturierten
              Ausgabe – ohne manuelle Zwischenschritte.
            </CardBody>
          </Card>
          <Card>
            <CardTitle>Eigene Datenschicht aufbauen</CardTitle>
            <CardBody>
              Daten aus CRM, ERP und Fachsystemen in eine kontrollierte Schicht
              zusammenführen. Grundlage für dynamische Abfragen, KI-Anwendungen und
              belastbare Entscheidungen auf Management-Ebene.
            </CardBody>
          </Card>
        </div>
      </section>

      {/* ── EU AI Act ── */}
      <section className="py-20 border-b border-border" id="compliance">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
              EU AI Act
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] tracking-tight text-white">
              Seit Februar 2026 gelten neue Regeln für KI im Unternehmen.
            </h2>
            <p className="mt-4 text-base leading-7 text-text-muted">
              Der EU AI Act verpflichtet Unternehmen zur KI-Kompetenz und zur
              Dokumentation ihrer KI-Nutzung. Wir helfen bei der Einordnung –
              sachlich, nicht alarmistisch.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
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
        </div>
      </section>

      {/* ── Profil ── */}
      <section className="py-20 border-b border-border" id="profil">
        <SectionHeader
          label="Profil"
          title="Operativ gebaut, nicht theoretisch beraten."
        />
        <div className="grid gap-10 lg:grid-cols-2">
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

        {/* Tech-Badges */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
            Technologien, mit denen wir arbeiten
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Claude API",
              "GPT-4",
              "Copilot",
              "MCP-Server",
              "LangChain",
              "n8n",
              "Python",
              "Next.js",
              "Notion API",
              "REST / GraphQL"
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-colors hover:border-orange/30 hover:text-orange"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section className="py-20" id="kontakt">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: Info */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-bg-card p-10">
            <div className="absolute -bottom-16 -left-16 h-[300px] w-[300px] rounded-full bg-orange-glow blur-[100px]" />
            <p className="relative text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
              Kontakt
            </p>
            <h2 className="relative mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.2] text-white">
              30 Minuten. Ihre Herausforderung. Unsere Einschätzung.
            </h2>
            <p className="relative mt-4 text-sm leading-7 text-text-muted">
              Nutzen Sie das Formular oder schreiben Sie uns direkt.
              Wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="relative mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-orange transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 shrink-0"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-orange transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl border border-border bg-bg-card p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
