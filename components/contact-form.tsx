"use client";

import { useState } from "react";

const formateOptionen = [
  "Realitätscheck",
  "Impulsvortrag",
  "Strategie-Workshop",
  "Pilotprojekt",
  "Management-Sparring"
];

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

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formate, setFormate] = useState<string[]>([]);

  function toggleFormat(f: string) {
    setFormate((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      branche: (form.elements.namedItem("branche") as HTMLSelectElement).value,
      teamgroesse: (form.elements.namedItem("teamgroesse") as HTMLSelectElement).value,
      herausforderung: (form.elements.namedItem("herausforderung") as HTMLTextAreaElement).value,
      formate,
      honeypot: (form.elements.namedItem("website") as HTMLInputElement).value
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-border bg-bg-card p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-400">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-xl text-text mb-2">Nachricht erhalten.</h3>
        <p className="text-text-muted">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-orange placeholder:text-text-muted/50"
            placeholder="Max Mustermann"
          />
        </div>

        {/* Organisation */}
        <div>
          <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
            Organisation
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-orange placeholder:text-text-muted/50"
            placeholder="Ihr Unternehmen"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
          E-Mail <span className="text-orange">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-orange placeholder:text-text-muted/50"
          placeholder="ihre@email.de"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Branche */}
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

        {/* Teamgröße */}
        <div>
          <label htmlFor="teamgroesse" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
            Teamgröße
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

      {/* Herausforderung */}
      <div>
        <label htmlFor="herausforderung" className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
          Ihre Herausforderung <span className="text-orange">*</span>
        </label>
        <textarea
          id="herausforderung"
          name="herausforderung"
          required
          rows={4}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-orange resize-y placeholder:text-text-muted/50"
          placeholder="Beschreiben Sie kurz, wobei wir Ihnen helfen können..."
        />
      </div>

      {/* Formate */}
      <div>
        <p className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
          Interessante Formate
        </p>
        <div className="flex flex-wrap gap-2">
          {formateOptionen.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => toggleFormat(f)}
              className={`cursor-pointer rounded-lg border px-4 py-2 text-sm transition-all ${
                formate.includes(f)
                  ? "border-orange/40 bg-orange/10 text-orange"
                  : "border-border bg-bg-card text-text-muted hover:border-border-hover"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full cursor-pointer rounded-lg py-4 text-sm font-semibold transition-all ${
          status === "sending"
            ? "bg-surface text-text-muted"
            : "bg-orange text-white hover:bg-[#d45a08]"
        }`}
      >
        {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an hello@57consulting.de.</p>
      )}

      <p className="text-xs text-text-muted">
        Nur E-Mail und Herausforderung sind Pflichtfelder. Ihre Daten werden ausschließlich zur
        Bearbeitung Ihrer Anfrage verwendet.{" "}
        <a href="/datenschutz.html" className="text-orange hover:text-text transition-colors">Datenschutz</a>
      </p>
    </form>
  );
}
