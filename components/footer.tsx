export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border pb-10 pt-6 text-sm text-text-muted">
      <span>57 Consulting</span>
      <div className="flex gap-6">
        <a href="/impressum" className="transition-colors hover:text-white">
          Impressum
        </a>
        <a href="/datenschutz" className="transition-colors hover:text-white">
          Datenschutz
        </a>
      </div>
    </footer>
  );
}
