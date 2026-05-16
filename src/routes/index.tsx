import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative border-b hairline overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--artichoke)_18%,transparent),transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-6 pt-20 pb-28">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent ping-dot" />
            COORD · UNKNOWN / FW26 · DROP 01
          </div>

          <h1 className="mt-8 max-w-5xl text-[12vw] leading-[0.86] tracking-[-0.04em] font-display font-medium md:text-[140px]">
            No Location
            <br />
            <span className="text-muted-foreground">Found.</span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-5 md:col-start-1 text-base leading-relaxed text-muted-foreground">
              A four-piece capsule engineered to disappear. Faraday-lined chambers, mycelium leather,
              recycled marine net. Built for moving through coordinates undetected — without
              sacrificing the cut.
            </p>
            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3">
              <Link
                to="/bag"
                className="inline-flex items-center justify-between border hairline px-5 py-4 font-mono text-[11px] uppercase tracking-[0.28em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                <span>Enter the Capsule</span>
                <span>→</span>
              </Link>
              <Link
                to="/shipping"
                className="inline-flex items-center justify-between px-5 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground transition"
              >
                <span>Shipping Protocol</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* HUD strip */}
        <div className="relative border-t hairline">
          <div className="mx-auto max-w-[1400px] px-6 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <span>LAT —— · ——</span>
            <span>LON —— · ——</span>
            <span>SIGNAL · 0 BARS</span>
            <span>UPLINK · DROPPED</span>
            <span className="text-foreground">04 / 04 IN STOCK</span>
          </div>
        </div>
      </section>

      {/* CAPSULE */}
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="flex items-end justify-between border-b hairline pb-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              [INDEX 01] — Capsule
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl tracking-[-0.02em]">Four pieces. No coordinates.</h2>
          </div>
          <div className="hidden md:block font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            FW26 / DROP 01
          </div>
        </div>

        <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.sku}
              className="group relative bg-background p-8 md:p-10 hover:bg-card transition"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                <span>[{String(i + 1).padStart(2, "0")} / 04]</span>
                <span>{p.sku}</span>
              </div>

              {/* product plate */}
              <div className="relative mt-6 aspect-[4/5] overflow-hidden border hairline bg-card">
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--artichoke)_30%,transparent),transparent_70%)]" />
                <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  PLATE · {String(i + 1).padStart(3, "0")}
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  <span className="relative inline-flex h-1 w-1 rounded-full bg-accent ping-dot" />
                  SCANNING
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    {p.category}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  <span>EDGE · SEALED</span>
                  <span>RFID · BLOCKED</span>
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl tracking-tight">{p.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.spec}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    USD
                  </div>
                  <div className="mt-1 text-2xl tracking-tight">${p.price}</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 border hairline px-4 py-3 font-mono text-[10px] uppercase tracking-[0.28em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                  Acquire
                </button>
                <button className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground transition border hairline">
                  Spec ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-24 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            [INDEX 02] — Doctrine
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl md:text-4xl leading-tight tracking-[-0.02em]">
              We build for the people who leave their phone in the car. For long drives, side streets,
              and untraceable afternoons. Off-grid is not a feature — it's the cut.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
