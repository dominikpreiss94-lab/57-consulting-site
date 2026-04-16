import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Kontakt – 57 Consulting",
  description: "30 Minuten. Ihre Herausforderung. Unsere Einschätzung."
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <Header />

      <section className="py-16 pb-12 border-b border-border">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-orange">
          Kontakt
        </p>
        <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight text-text max-w-3xl">
          30 Minuten. Ihre Herausforderung. Unsere Einschätzung.
        </h1>
        <p className="mt-4 text-lg leading-7 text-text-muted max-w-2xl">
          Nutzen Sie das Formular oder schreiben Sie uns direkt.
          Wir melden uns innerhalb von 24 Stunden.
        </p>
      </section>

      <section className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Direkt erreichen</p>
              <div className="space-y-3">
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
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Adresse</p>
              <p className="text-sm text-text-secondary leading-6">
                {siteConfig.legal}<br />
                {siteConfig.address.street}<br />
                {siteConfig.address.zip} {siteConfig.address.city}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">Nicht sicher, was Sie brauchen?</p>
              <p className="text-sm text-text-secondary">
                Unser KI-Check hilft in 2 Minuten.{" "}
                <a href="/check" className="text-orange hover:text-text transition-colors">Zum KI-Check →</a>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl border border-border bg-bg-card p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
