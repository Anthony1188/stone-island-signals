import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "No Location Found — FW26 Off-Grid Capsule" },
      {
        name: "description",
        content:
          "Four off-grid garments engineered to drop your signal. Recycled marine net, Faraday-lined chain mesh, mycelium leather, and tactical coastal weave.",
      },
    ],
  }),
});

const PRODUCT_IMAGES: Record<string, string> = {
  "GHST-NET-01":
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1600&auto=format&fit=crop",
  "FRG-CHN-02":
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1600&auto=format&fit=crop",
  "SLK-MYL-03":
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1600&auto=format&fit=crop",
  "WST-ALB-04":
    "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1600&auto=format&fit=crop",
};

const TAGS: Record<string, string> = {
  "GHST-NET-01": "New",
  "FRG-CHN-02": "Restock",
  "SLK-MYL-03": "Limited",
  "WST-ALB-04": "New",
};

function HomePage() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <header className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale"
            alt="Off-grid corridor"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <p className="font-mono text-xs md:text-sm text-[#C9A87C] tracking-[0.28em] mb-4 md:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            FW26 · COORDINATES WITHHELD
          </p>

          <h2
            className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight mb-6 md:mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            NO LOCATION
            <br />
            <span className="stroke-text">FOUND</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="#capsule"
              className="group relative px-8 py-3 overflow-hidden border border-white/20 hover:border-[#C9A87C] transition-colors duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-[#C9A87C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative font-display text-xl tracking-[0.18em] z-10 group-hover:text-black transition-colors">
                ENTER THE CAPSULE
              </span>
            </a>

            <Link to="/shipping" className="group flex items-center gap-3 hover:opacity-70 transition-opacity">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A87C] transition-colors font-mono text-xs">
                ▸
              </div>
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase">Drop-Point Map</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 mix-blend-difference">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em]">Descend</span>
          <div className="w-px h-12 bg-white/50" />
        </div>
      </header>

      {/* MARQUEE */}
      <div className="bg-[#2C2C2C] text-white py-3 overflow-hidden whitespace-nowrap border-b border-white/10">
        <div className="inline-flex animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-display text-2xl tracking-[0.18em] mx-8">OFF-GRID GARMENTS</span>
              <span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
              <span className="font-display text-2xl tracking-[0.18em] mx-8">SIGNAL · WEAK</span>
              <span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
              <span className="font-display text-2xl tracking-[0.18em] mx-8">COORDINATES WITHHELD</span>
              <span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
              <span className="font-display text-2xl tracking-[0.18em] mx-8">NO LOCATION FOUND · FW26</span>
              <span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
            </span>
          ))}
        </div>
      </div>

      {/* FEATURED GRID */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
          <div className="relative group h-[400px] md:h-full w-full overflow-hidden bg-[#E5E5E5]">
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1887&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              alt="Outerwear"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
              <div>
                <h3 className="font-display text-4xl md:text-5xl text-white tracking-tight mb-2">SHELLS</h3>
                <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-[0.28em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Signal-blocking outer layer
                </p>
              </div>
              <span className="w-12 h-12 bg-white text-black flex items-center justify-center font-mono opacity-0 group-hover:opacity-100 transition-all duration-300">
                ↗
              </span>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative group h-[300px] md:h-full w-full overflow-hidden bg-[#2C2C2C]">
              <img
                src="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=2070&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                alt="Utility"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[#C9A87C] text-8xl opacity-10">UTL</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <h3 className="font-display text-3xl text-white tracking-[0.18em]">UTILITY</h3>
                <span className="font-mono text-[10px] text-[#C9A87C]">[ 02 ]</span>
              </div>
            </div>

            <div className="relative group h-[300px] md:h-full w-full overflow-hidden bg-[#E5E5E5]">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                alt="Drop"
              />
              <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-black text-8xl opacity-5">DROP</span>
              </div>
              <div className="absolute top-6 right-6 font-mono text-[10px] text-[#C9A87C] bg-black px-2 py-1 uppercase tracking-[0.28em]">
                Just Dropped
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-3xl text-black tracking-[0.18em]">CAPSULE 01</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[80px] z-40 bg-white/90 backdrop-blur-md border-y border-[#E5E5E5] py-4 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
            <button className="font-mono text-[10px] uppercase tracking-[0.28em] text-black border-b border-black pb-1">All Pieces</button>
            <button className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#808080] hover:text-black transition-colors pb-1">Outerwear</button>
            <button className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#808080] hover:text-black transition-colors pb-1">Bottoms</button>
            <button className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#808080] hover:text-black transition-colors pb-1">Accessories</button>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-4 h-4 border border-[#808080] group-hover:border-black transition-colors">
                <input type="checkbox" className="peer appearance-none w-full h-full checked:bg-black" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#808080] group-hover:text-black">In Stock</span>
            </label>
            <button className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-black">
              Filter ⇅
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section id="capsule" className="py-12 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-mono text-[10px] text-[#808080] uppercase tracking-[0.28em] block mb-2">
              FW26 · Foundation Capsule
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-black tracking-tight">LATEST COORDINATES</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] border-b border-transparent hover:border-black transition-all pb-1">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((p) => (
            <div key={p.sku} className="group cursor-pointer">
              <div className="relative w-full aspect-[3/4] bg-[#F5F5F5] mb-4 overflow-hidden">
                <img
                  src={PRODUCT_IMAGES[p.sku]}
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  alt={p.shortName}
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <button className="w-full bg-black text-white font-display text-xl tracking-[0.18em] py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#2C2C2C]">
                    ACQUIRE
                  </button>
                </div>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#C9A87C] text-white font-mono text-[10px] px-2 py-1 uppercase tracking-wider">
                    {TAGS[p.sku]}
                  </span>
                  <span className="bg-black text-white font-mono text-[10px] px-2 py-1 uppercase tracking-wider">
                    {p.sku}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-xl tracking-wide group-hover:text-[#808080] transition-colors uppercase">
                    {p.shortName}
                  </h3>
                  <p className="font-body font-light text-sm text-[#808080] mt-1">{p.category}</p>
                </div>
                <span className="font-mono text-sm font-bold">${p.price}</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="w-4 h-4 rounded-full bg-black border border-transparent hover:scale-110 transition-transform" />
                <button className="w-4 h-4 rounded-full bg-[#2C2C2C] border border-transparent hover:scale-110 transition-transform" />
                <button className="w-4 h-4 rounded-full bg-[#C9A87C] border border-transparent hover:scale-110 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-black text-white py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A87C] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="font-mono text-[10px] text-[#C9A87C] tracking-[0.28em] uppercase block mb-8">
              ◇ Manifesto · 001
            </span>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-8">
              ENGINEERED TO
              <br />
              <span className="text-[#808080]">DROP YOUR</span>
              <br />
              SIGNAL.
            </h2>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 w-full max-w-md">
                <span className="w-8 h-8 flex items-center justify-center bg-white text-black font-mono text-xs">▶</span>
                <div className="flex-1 h-px bg-white/20 relative">
                  <div className="absolute left-0 top-0 h-full w-[30%] bg-[#C9A87C]" />
                </div>
                <span className="font-mono text-[10px] text-white/60">01:24 · FIELD AUDIO</span>
              </div>
            </div>
          </div>

          <div className="border-l border-white/20 pl-8 md:pl-16">
            <p className="font-body font-light text-lg md:text-xl text-[#E5E5E5] leading-relaxed mb-8">
              No Location Found dresses you to disappear. Each piece is built from reclaimed material and lined to interrupt the network — high-end utility for moving through the city untracked, untagged, and unbothered.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-2xl tracking-[0.18em] mb-2 text-[#C9A87C]">RECLAIMED</h4>
                <p className="font-mono text-[10px] text-white/50 leading-relaxed uppercase tracking-widest">
                  Marine net, mycelium leather, e-waste hardware. Nothing virgin.
                </p>
              </div>
              <div>
                <h4 className="font-display text-2xl tracking-[0.18em] mb-2 text-[#C9A87C]">UNDETECTED</h4>
                <p className="font-mono text-[10px] text-white/50 leading-relaxed uppercase tracking-widest">
                  Faraday-lined pockets engineered to neutralize every ping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOOKBOOK */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#2C2C2C]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 grayscale mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
          <div className="flex justify-between items-start">
            <div className="bg-black/80 backdrop-blur-sm text-white p-6 border border-white/10 max-w-sm">
              <span className="font-mono text-[10px] text-[#C9A87C] uppercase tracking-[0.28em] mb-2 block">
                FIELD STUDY · ZN-03
              </span>
              <h3 className="font-display text-3xl mb-4 tracking-[0.06em]">THE GHOST CORRIDOR</h3>
              <p className="font-body text-sm font-light text-gray-300 mb-6">
                Off the grid, off the map. Documented at a coordinate we refuse to share.
              </p>
              <a href="#" className="font-mono text-[10px] uppercase tracking-[0.28em] underline underline-offset-4 hover:text-[#C9A87C] transition-colors">
                Open the Lookbook →
              </a>
            </div>
          </div>

          <div className="self-end flex gap-4">
            <button className="w-12 h-12 border border-white/30 text-white flex items-center justify-center font-mono hover:bg-white hover:text-black transition-all">←</button>
            <button className="w-12 h-12 border border-white/30 text-white flex items-center justify-center font-mono hover:bg-white hover:text-black transition-all">→</button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 border-t border-[#E5E5E5] bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4">JOIN THE BLACKOUT</h2>
          <p className="font-body text-[#808080] mb-10">
            Encrypted drops, advance coordinates, and field audio. No tracking pixels, no resale.
          </p>

          <form className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="ENCRYPTED EMAIL"
                className="w-full bg-[#F5F5F5] border border-transparent focus:border-black p-4 font-mono text-xs outline-none transition-all placeholder:text-[#808080] placeholder:tracking-[0.28em] uppercase"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white font-display text-xl tracking-[0.18em] px-8 py-4 hover:bg-[#C9A87C] transition-colors duration-300"
            >
              TRANSMIT
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-3 h-3 border border-[#808080] relative">
                <input type="checkbox" className="peer appearance-none w-full h-full checked:bg-black" />
              </div>
              <span className="font-mono text-[10px] text-[#808080] uppercase tracking-widest">
                I consent to receive encrypted transmissions
              </span>
            </label>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
