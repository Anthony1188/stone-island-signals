import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/shipping")({
  component: ShippingPage,
  head: () => ({
    meta: [
      { title: "Shipping Protocol — No Location Found" },
      { name: "description", content: "Untracked, encrypted, off-grid delivery. NLF shipping protocol and drop-point network." },
    ],
  }),
});

const ZONES = [
  { code: "ZN-01", region: "Domestic · Continental", window: "3–5 days", method: "Drop-point or doorstep", price: "$12" },
  { code: "ZN-02", region: "Europe · UK", window: "5–8 days", method: "Encrypted courier", price: "$28" },
  { code: "ZN-03", region: "Pacific · Asia", window: "7–11 days", method: "Field-bag transit", price: "$36" },
  { code: "ZN-04", region: "Remainder · Worldwide", window: "10–18 days", method: "Off-grid forward", price: "$48" },
];

function ShippingPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <SiteHeader />

      <main>
        {/* Header band */}
        <section className="bg-black text-white pt-40 pb-24 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <span className="font-mono text-[10px] text-[#C9A87C] uppercase tracking-[0.28em] block mb-6">
              Logistics · Protocol 02
            </span>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tight">
              SHIPPING
              <br />
              <span className="stroke-text">PROTOCOL</span>
            </h1>
            <p className="font-body font-light text-lg text-[#E5E5E5] mt-8 max-w-2xl">
              Every parcel ships untracked by carrier marketing pixels and is routed through anonymized drop points. Coordinates are stripped from invoices.
            </p>
          </div>
        </section>

        {/* Zone table */}
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-[#E5E5E5] pb-6">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">TRANSIT ZONES</h2>
            <span className="font-mono text-[10px] text-[#808080] uppercase tracking-[0.28em]">[ 04 LANES ]</span>
          </div>

          <div className="border-t border-[#E5E5E5]">
            {ZONES.map((z) => (
              <div
                key={z.code}
                className="grid grid-cols-12 gap-4 py-6 border-b border-[#E5E5E5] items-center hover:bg-[#F5F5F5] transition-colors"
              >
                <div className="col-span-12 md:col-span-2 font-mono text-xs text-[#C9A87C] uppercase tracking-[0.28em]">
                  {z.code}
                </div>
                <div className="col-span-12 md:col-span-4 font-display text-xl tracking-[0.06em]">{z.region}</div>
                <div className="col-span-6 md:col-span-2 font-body text-sm text-[#808080]">{z.window}</div>
                <div className="col-span-6 md:col-span-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#808080]">
                  {z.method}
                </div>
                <div className="col-span-12 md:col-span-1 text-right font-mono text-sm font-bold">{z.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Policy cards */}
        <section className="bg-[#F5F5F5] py-24 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "◇ Returns",
                title: "14-DAY RECALL",
                body: "Unworn pieces with tags intact may be returned within 14 days of receipt. Returns ship through the same encrypted lane they arrived on.",
              },
              {
                tag: "◇ Faraday",
                title: "CARE WITH FARADAY LININGS",
                body: "Cold hand wash. Do not iron Faraday-lined panels. Air dry away from direct signal sources. Liner remains active for 3+ years of standard wear.",
              },
              {
                tag: "◇ Drop-Points",
                title: "ANONYMIZED PICKUP",
                body: "Choose any drop-point in the NLF network at checkout. ID is never recorded — pickup is verified by single-use code transmitted at dispatch.",
              },
            ].map((c) => (
              <article key={c.title} className="bg-white border border-[#E5E5E5] p-8 hover:border-black transition-colors">
                <span className="font-mono text-[10px] text-[#C9A87C] uppercase tracking-[0.28em] block mb-6">{c.tag}</span>
                <h3 className="font-display text-2xl tracking-[0.06em] mb-4">{c.title}</h3>
                <p className="font-body text-sm text-[#808080] leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
