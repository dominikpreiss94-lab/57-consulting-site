import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      {/* ── Hero ── */}
      <section className="py-24 pb-20 border-b border-border">
        <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.08] tracking-tight text-text max-w-4xl">
          Wir machen KI <em className="not-italic text-orange">operativ nutzbar</em> –
          nicht nur präsentierbar.
        </h1>
        <p className="mt-6 text-lg leading-7 text-text-muted max-w-2xl">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/analyse">Herausforderung analysieren</Button>
          <Button href="/kontakt" variant="ghost">Erstgespräch vereinbaren</Button>
        </div>
      </section>

      {/* ── Drei Säulen ── */}
      <section className="py-20 border-b border-border">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange mb-8">
          Was wir tun
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              number: "I",
              title: "KI-Strategie & Einordnung",
              body: "Welche Architektur passt zu welchem Anwendungsfall – und wo ist Build vs. Buy die richtige Frage.",
              link: "/leistungen"
            },
            {
              number: "II",
              title: "Datenschicht & Architektur",
              body: "Datenqualität analysieren, Integrationsschichten bauen, Grundlage für belastbare KI-Anwendungen schaffen.",
              link: "/use-cases"
            },
            {
              number: "III",
              title: "Vertikale Lösungen & Piloten",
              body: "Abgegrenzte Pilotprojekte für konkrete Herausforderungen – produktionsreif in 2–4 Wochen.",
              link: "/methodik"
            }
          ].map((pillar) => (
            <a
              key={pillar.number}
              href={pillar.link}
              className="group rounded-xl border border-border bg-bg-card p-7 transition-all duration-250 hover:border-border-hover hover:bg-bg-card-hover"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-soft text-orange text-sm font-semibold mb-5">
                {pillar.number}
              </span>
              <h3 className="text-[1.05rem] font-semibold text-text mb-2 group-hover:text-orange transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm leading-7 text-text-muted">{pillar.body}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.2] text-text">
            Herausforderung? Wir schätzen ein.
          </h2>
          <p className="mt-4 text-text-muted">
            Beschreiben Sie Ihre Situation – unsere KI analysiert das Vorgehen.
            Oder vereinbaren Sie direkt ein Erstgespräch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button href="/analyse">KI-Analyse starten</Button>
            <Button href="/kontakt" variant="ghost">Kontakt aufnehmen</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
