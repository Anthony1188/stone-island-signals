import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/bag")({
  head: () => ({
    meta: [
      { title: "Bag — No Location Found" },
      { name: "description", content: "Your off-grid acquisition queue." },
      { property: "og:title", content: "Bag — No Location Found" },
      { property: "og:description", content: "Your off-grid acquisition queue." },
    ],
  }),
  component: BagPage,
});

function BagPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          [INDEX 03] — Bag
        </div>
        <h1 className="mt-4 text-5xl md:text-7xl tracking-[-0.03em]">Acquisition queue.</h1>

        <div className="mt-16 border-y hairline">
          <div className="grid gap-px bg-border">
            <div className="bg-background px-8 py-20 text-center">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent ping-dot" />
                BAG · EMPTY · 0 ITEMS
              </div>
              <p className="mt-6 text-muted-foreground max-w-md mx-auto">
                Nothing in the queue. Return to the capsule to acquire pieces from FW26 Drop 01.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-3 border hairline px-6 py-3 font-mono text-[10px] uppercase tracking-[0.28em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                ← Back to Capsule
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border hairline">
          {[
            ["Subtotal", "$0.00"],
            ["Shipping", "—"],
            ["Tax", "—"],
            ["Total", "$0.00"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {k}
              </div>
              <div className="mt-2 text-xl tracking-tight">{v}</div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
