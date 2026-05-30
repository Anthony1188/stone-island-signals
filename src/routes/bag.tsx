import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/bag")({
  component: BagPage,
  head: () => ({
    meta: [
      { title: "Bag — No Location Found" },
      { name: "description", content: "Your bag at No Location Found. Encrypted checkout, untracked shipping." },
    ],
  }),
});

function BagPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <SiteHeader />

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[#E5E5E5] pb-8">
          <div>
            <span className="font-mono text-[10px] text-[#808080] uppercase tracking-[0.28em] block mb-2">
              Checkpoint · 03
            </span>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight">YOUR BAG</h1>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#808080]">[ 0 ITEMS ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 border border-[#E5E5E5] p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
            <span className="font-mono text-[10px] text-[#C9A87C] uppercase tracking-[0.28em] mb-4">SIGNAL · EMPTY</span>
            <h2 className="font-display text-4xl tracking-[0.06em] mb-4">NO COORDINATES STORED</h2>
            <p className="font-body text-[#808080] max-w-md mb-8">
              You haven't picked up any pieces yet. The FW26 capsule is four items deep — each engineered to drop your signal.
            </p>
            <Link
              to="/"
              className="bg-black text-white font-display text-xl tracking-[0.18em] px-8 py-4 hover:bg-[#C9A87C] transition-colors duration-300"
            >
              ENTER THE CAPSULE
            </Link>
          </div>

          <aside className="border border-[#E5E5E5] p-8 h-fit">
            <h3 className="font-display text-2xl tracking-[0.18em] mb-6">SUMMARY</h3>
            <dl className="space-y-4 font-mono text-xs uppercase tracking-widest">
              {[
                ["Subtotal", "$0.00"],
                ["Shipping", "—"],
                ["Tax", "—"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-[#808080]">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              <div className="flex justify-between border-t border-[#E5E5E5] pt-4 text-black">
                <dt className="font-display text-lg tracking-[0.18em]">TOTAL</dt>
                <dd className="font-mono text-sm font-bold">$0.00</dd>
              </div>
            </dl>
            <button
              disabled
              className="mt-8 w-full bg-[#F5F5F5] text-[#808080] font-display text-xl tracking-[0.18em] py-4 cursor-not-allowed"
            >
              CHECKOUT
            </button>
            <p className="mt-4 font-mono text-[10px] text-[#808080] uppercase tracking-widest text-center">
              Add a piece to continue
            </p>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
