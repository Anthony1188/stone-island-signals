import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping Protocol — No Location Found" },
      { name: "description", content: "Logistics, lead times, and delivery protocol for the NLF FW26 capsule." },
      { property: "og:title", content: "Shipping Protocol — No Location Found" },
      { property: "og:description", content: "Logistics, lead times, and delivery protocol for the NLF FW26 capsule." },
    ],
  }),
  component: ShippingPage,
});

const ROWS: { code: string; zone: string; window: string; carrier: string; note: string }[] = [
  { code: "ZN-01", zone: "Domestic · US", window: "3–5 days", carrier: "Ground · Discreet", note: "Tracking provided via burner link." },
  { code: "ZN-02", zone: "Canada / Mexico", window: "5–8 days", carrier: "Cross-border · Standard", note: "Duties calculated at handoff." },
  { code: "ZN-03", zone: "EU + UK", window: "6–9 days", carrier: "Air · Untracked options", note: "Faraday-safe packaging on request." },
  { code: "ZN-04", zone: "Worldwide", window: "8–14 days", carrier: "Air · Coordinates flexible", note: "Drop-point delivery available." },
];

function ShippingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          [INDEX 02] — Logistics
        </div>
        <h1 className="mt-4 text-5xl md:text-7xl tracking-[-0.03em]">Shipping protocol.</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Every piece ships in opaque, signal-resistant packaging. No branding on the exterior, no
          itemized invoice on the label. Your address stays with the carrier — never the network.
        </p>

        <div className="mt-14 border hairline">
          <div className="grid grid-cols-12 gap-px bg-border font-mono text-[10px] uppercase tracking-[0.28em]">
            <div className="col-span-2 bg-background px-5 py-4 text-muted-foreground">Code</div>
            <div className="col-span-3 bg-background px-5 py-4 text-muted-foreground">Zone</div>
            <div className="col-span-2 bg-background px-5 py-4 text-muted-foreground">Window</div>
            <div className="col-span-2 bg-background px-5 py-4 text-muted-foreground">Carrier</div>
            <div className="col-span-3 bg-background px-5 py-4 text-muted-foreground">Note</div>
            {ROWS.map((r) => (
              <div key={r.code} className="contents">
                <div className="col-span-2 bg-background px-5 py-5 text-foreground">{r.code}</div>
                <div className="col-span-3 bg-background px-5 py-5 text-foreground normal-case tracking-normal text-sm font-display">{r.zone}</div>
                <div className="col-span-2 bg-background px-5 py-5 text-foreground">{r.window}</div>
                <div className="col-span-2 bg-background px-5 py-5 text-muted-foreground">{r.carrier}</div>
                <div className="col-span-3 bg-background px-5 py-5 text-muted-foreground normal-case tracking-normal text-sm font-display">{r.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-3 border hairline">
          {[
            ["Returns", "14 days. Untouched. Packaging intact."],
            ["Faraday Option", "+$12 — Signal-blocking inner sleeve."],
            ["Drop-Point", "Available worldwide on request."],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{k}</div>
              <div className="mt-3 text-base">{v}</div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
