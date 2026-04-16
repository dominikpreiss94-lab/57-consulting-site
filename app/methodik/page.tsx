import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";

export default function MethodikPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      {/* Hero */}
      <section className="py-16 pb-12 border-b border-border">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
          Vorgehen
        </p>
        <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-text max-w-3xl">
          Vom Erstgespräch zum produktiven Piloten – in Wochen, nicht Monaten.
        </h1>
        <p className="mt-4 text-lg leading-7 text-text-muted max-w-2xl">
          Unser Vorgehen ist lösungsorientiert und KI-gestützt. Vier Phasen,
          jede mit klarem Ergebnis und transparenter Investition. Einstieg an
          jeder Phase möglich.
        </p>
      </section>

      {/* Prinzipien */}
      <section className="py-12 border-b border-border">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            {
              title: "Partnerschaftlich",
              body: "Auf Augenhöhe, nicht als externer Dienstleister. Wir arbeiten mit Ihrem Team, nicht an ihm vorbei."
            },
            {
              title: "Evidenzbasiert",
              body: "Entscheidungen auf Datenbasis, nicht auf Annahmen. Jede Empfehlung ist nachvollziehbar begründet."
            },
            {
              title: "Umsetzungsstark",
              body: "Wir liefern funktionierende Lösungen, keine Foliensätze. Jede Phase hat ein messbares Ergebnis."
            },
            {
              title: "Transparent",
              body: "Preise, Zeiten und Erwartungen sind von Anfang an klar. Keine versteckten Kosten, keine Open-End-Projekte."
            }
          ].map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-bg-card p-5">
              <p className="text-sm font-semibold text-orange mb-2">{p.title}</p>
              <p className="text-sm leading-6 text-text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <Timeline />
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-border">
        <div className="relative overflow-hidden rounded-xl border border-border bg-bg-card p-10">
          <div className="absolute -bottom-10 -left-10 h-[200px] w-[200px] rounded-full bg-orange-glow blur-[80px]" />
          <h2 className="relative font-display text-xl text-text mb-2">
            Bereit für den ersten Schritt?
          </h2>
          <p className="relative text-text-muted mb-6 max-w-lg">
            30 Minuten Erstgespräch – danach wissen Sie, ob und wie ein
            Pilotprojekt für Ihre Situation aussehen könnte.
          </p>
          <div className="relative flex flex-wrap gap-4">
            <Button href="/#kontakt">Erstgespräch vereinbaren</Button>
            <Button href="/use-cases" variant="ghost">Use Cases ansehen</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
