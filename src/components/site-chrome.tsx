import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent ping-dot" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground">
            No Location Found
          </span>
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground transition">[01] Capsule</Link>
          <Link to="/shipping" className="hover:text-foreground transition">[02] Shipping</Link>
          <Link to="/bag" className="hover:text-foreground transition">[03] Bag</Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:inline">
            SIG · WEAK
          </span>
          <Link
            to="/bag"
            className="border hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-foreground hover:bg-foreground hover:text-background transition"
          >
            Bag (0)
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t hairline mt-32">
      <div className="mx-auto max-w-[1400px] px-6 py-12 grid gap-10 md:grid-cols-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        <div>
          <div className="text-foreground mb-3">NLF / FW26</div>
          <div>Off-grid garments.<br/>Manufactured in undisclosed coordinates.</div>
        </div>
        <div>
          <div className="text-foreground mb-3">[A] Capsule</div>
          <Link to="/" className="block hover:text-foreground">Index</Link>
          <Link to="/shipping" className="block hover:text-foreground">Logistics</Link>
        </div>
        <div>
          <div className="text-foreground mb-3">[B] Contact</div>
          <div>signal@nolocationfound.xyz</div>
        </div>
        <div className="md:text-right">
          <div className="text-foreground mb-3">[C] Status</div>
          <div className="inline-flex items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent ping-dot" />
            Network · Down
          </div>
        </div>
      </div>
    </footer>
  );
}
