import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { angebote } from "@/lib/angebote";

export function generateStaticParams() {
  return angebote.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const angebot = angebote.find((a) => a.slug === params.slug);
  if (!angebot) return {};
  return {
    title: `${angebot.title} – 57 Consulting`,
    description: angebot.subtitle
  };
}

export default async function AngebotPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const angebot = angebote.find((a) => a.slug === slug);
  if (!angebot) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      {/* Hero */}
      <section className="py-16 pb-12 border-b border-border">
        <a href="/#angebot" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-white transition-colors mb-6">
          ← Alle Formate
        </a>
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
          Angebot
        </p>
        <h1 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight text-white max-w-3xl">
          {angebot.title}
        </h1>
        <p className="mt-3 text-lg leading-7 text-text-muted max-w-2xl">
          {angebot.subtitle}
        </p>

        {/* Quick facts */}
        <div className="mt-8 flex flex-wrap gap-4">
          {[
            { label: "Investition", value: angebot.price },
            { label: "Dauer", value: angebot.duration },
            { label: "Teilnehmer", value: angebot.participants },
            { label: "Format", value: angebot.format }
          ].map((fact) => (
            <div key={fact.label} className="rounded-lg border border-border bg-bg-card px-5 py-3">
              <p className="text-[0.65rem] uppercase tracking-widest text-text-muted">{fact.label}</p>
              <p className="text-sm font-semibold text-orange mt-0.5">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Description + Agenda */}
          <div>
            <p className="text-base leading-7 text-text-secondary mb-8">
              {angebot.description}
            </p>

            <h2 className="font-display text-lg font-semibold text-white mb-4">Ablauf</h2>
            <ol className="space-y-3 mb-10">
              {angebot.agenda.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-6">
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-orange/30 bg-orange/10 text-xs font-semibold text-orange">
                    {i + 1}
                  </span>
                  <span className="text-text-secondary pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <h2 className="font-display text-lg font-semibold text-white mb-4">Nächster Schritt</h2>
            <p className="text-sm leading-7 text-text-muted">{angebot.nextStep}</p>
          </div>

          {/* Right: Target Group + Deliverables */}
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">
                Für wen
              </h3>
              <ul className="space-y-2">
                {angebot.targetGroup.map((tg) => (
                  <li
                    key={tg}
                    className="relative pl-4 text-sm text-text-secondary before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange"
                  >
                    {tg}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">
                Ergebnisse
              </h3>
              <ul className="space-y-2">
                {angebot.deliverables.map((d) => (
                  <li
                    key={d}
                    className="relative pl-4 text-sm text-text-secondary before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/#kontakt" className="w-full justify-center">
              Erstgespräch vereinbaren
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
