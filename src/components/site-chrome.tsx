import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 py-6">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="flex items-center gap-6">
          <button className="group flex items-center gap-2 hover:opacity-70 transition-opacity" aria-label="Menu">
            <div className="flex flex-col gap-1.5">
              <span className="w-6 h-px bg-white group-hover:w-8 transition-all duration-300" />
              <span className="w-6 h-px bg-white group-hover:w-4 transition-all duration-300" />
            </div>
          </button>
          <button className="hidden md:flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-[0.28em]">
            Search
          </button>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 group">
          <h1 className="font-display text-3xl md:text-4xl tracking-[0.18em] group-hover:tracking-[0.24em] transition-all duration-500">
            NO LOCATION FOUND
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/shipping" className="hidden md:block font-mono text-[10px] uppercase tracking-[0.28em] opacity-70 hover:opacity-100 transition-opacity">
            Shipping
          </Link>
          <Link to="/bag" className="flex items-center gap-2 group">
            <span className="font-mono text-[10px] opacity-70 group-hover:opacity-100 hidden md:block">[0]</span>
            <span className="font-display text-xl tracking-[0.18em] group-hover:text-[#C9A87C] transition-colors">BAG</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-[0.18em] mb-6">NLF</h2>
            <p className="font-body text-sm text-[#808080] font-light max-w-xs">
              No Location Found. Off-grid garments.<br/>
              Manufactured at undisclosed coordinates. Shipped worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-[#C9A87C] uppercase tracking-[0.28em] mb-6">Capsule</h4>
            <ul className="flex flex-col gap-3 font-body text-sm font-light text-[#E5E5E5]">
              <li><Link to="/" className="hover:text-white hover:underline underline-offset-4 transition-all">FW26 Index</Link></li>
              <li><Link to="/" className="hover:text-white hover:underline underline-offset-4 transition-all">All Pieces</Link></li>
              <li><Link to="/shipping" className="hover:text-white hover:underline underline-offset-4 transition-all">Drop-Point Map</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-[#C9A87C] uppercase tracking-[0.28em] mb-6">Logistics</h4>
            <ul className="flex flex-col gap-3 font-body text-sm font-light text-[#E5E5E5]">
              <li><Link to="/shipping" className="hover:text-white hover:underline underline-offset-4 transition-all">Shipping Protocol</Link></li>
              <li><Link to="/shipping" className="hover:text-white hover:underline underline-offset-4 transition-all">Returns</Link></li>
              <li><Link to="/shipping" className="hover:text-white hover:underline underline-offset-4 transition-all">Faraday Care</Link></li>
              <li><a href="mailto:signal@nolocationfound.xyz" className="hover:text-white hover:underline underline-offset-4 transition-all">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-[#C9A87C] uppercase tracking-[0.28em] mb-6">Channel</h4>
            <div className="flex gap-4">
              {["IG", "TG", "RS"].map((t) => (
                <a key={t} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-[10px] tracking-widest hover:bg-white hover:text-black transition-colors">
                  {t}
                </a>
              ))}
            </div>
            <p className="mt-6 font-mono text-[10px] text-[#808080] uppercase tracking-[0.28em]">
              signal@nolocationfound.xyz
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="font-mono text-[10px] text-[#808080] uppercase tracking-[0.28em]">© 2026 No Location Found. All coordinates withheld.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="font-mono text-[10px] text-[#808080] uppercase tracking-[0.28em] hover:text-white">Privacy</a>
            <a href="#" className="font-mono text-[10px] text-[#808080] uppercase tracking-[0.28em] hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
