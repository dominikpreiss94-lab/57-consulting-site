"use client";

import { useState } from "react";

const navLinks = [
  { href: "/#angebot", label: "Angebot" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/methodik", label: "Vorgehen" },
  { href: "/check", label: "KI-Check" },
  { href: "/#kontakt", label: "Kontakt" }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-[rgba(11,11,11,0.98)] backdrop-blur-xl">
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Menü schließen"
            className="absolute right-6 top-8 flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted hover:text-white cursor-pointer bg-transparent"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl text-text-secondary hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between py-8 pb-6 border-b border-border">
        <div className="font-display text-lg font-bold tracking-tight text-white">
          57<span className="text-orange">.</span> Consulting
        </div>
        <nav className="hidden gap-8 text-sm text-text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Menü öffnen"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted md:hidden cursor-pointer bg-transparent"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
    </>
  );
}
