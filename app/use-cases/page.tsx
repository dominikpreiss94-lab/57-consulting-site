"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { UseCaseFlow } from "@/components/use-case-flow";
import { useCases } from "@/lib/use-cases";

export default function UseCasesPage() {
  const [activeId, setActiveId] = useState(useCases[0].id);
  const active = useCases.find((uc) => uc.id === activeId)!;

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      {/* Hero */}
      <section className="py-16 pb-12 border-b border-border">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
          Use Cases
        </p>
        <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-white max-w-3xl">
          Von der Herausforderung zum messbaren Ergebnis.
        </h1>
        <p className="mt-4 text-lg leading-7 text-text-muted max-w-2xl">
          Jeder Use Case folgt dem gleichen Prinzip: Ausgangslage verstehen,
          Datenschicht aufbauen, KI gezielt einsetzen, Ergebnis messen. Klicken
          Sie sich durch den Prozess.
        </p>
      </section>

      {/* Use Case Selector */}
      <section className="py-12">
        <div className="flex flex-wrap gap-3 mb-10">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveId(uc.id)}
              className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 border ${
                activeId === uc.id
                  ? "bg-orange/10 border-orange/30 text-orange"
                  : "bg-bg-card border-border text-text-muted hover:border-border-hover hover:text-text-secondary"
              }`}
            >
              {uc.title}
            </button>
          ))}
        </div>

        {/* Active Use Case */}
        <div className="mb-8">
          <div className="flex items-baseline gap-4 mb-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              {active.title}
            </h2>
            <span className="rounded-md bg-orange/10 px-3 py-1 text-sm font-semibold text-orange">
              {active.metric.value}
            </span>
          </div>
          <p className="text-text-muted">{active.subtitle}</p>
        </div>

        {/* Flow Visualization */}
        <UseCaseFlow useCase={active} />
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-border">
        <div className="relative overflow-hidden rounded-xl border border-border bg-bg-card p-10">
          <div className="absolute -top-10 -right-10 h-[200px] w-[200px] rounded-full bg-orange-glow blur-[80px]" />
          <h2 className="relative font-display text-xl text-white mb-2">
            Ähnliche Herausforderung?
          </h2>
          <p className="relative text-text-muted mb-6 max-w-lg">
            In 30 Minuten besprechen wir Ihre Situation und schätzen ein, ob
            und wie ein Pilotprojekt aussehen könnte.
          </p>
          <div className="relative flex flex-wrap gap-4">
            <Button href="/#kontakt">Erstgespräch vereinbaren</Button>
            <Button href="/#angebot" variant="ghost">Formate ansehen</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
