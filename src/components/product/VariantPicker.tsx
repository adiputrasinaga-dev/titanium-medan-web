
"use client";
import { useState, useMemo } from "react";
import type { CatalogProduct } from "@/types/catalog";
import { useCart } from "@/context/CartContext";
import { formatRupiah } from "@/lib/format";
import { prefilledWA } from "@/lib/wa";

export default function VariantPicker({ product }: { product: CatalogProduct }) {
  const { add } = useCart();
  const variants = product.variants ?? [];
  const [selected, setSelected] = useState(variants[0]?.sku || "");
  const [qty, setQty] = useState(1);

  const v = useMemo(() => variants.find(x => x.sku === selected) ?? variants[0], [variants, selected]);
  const price = (v?.price ?? 0) * qty;

  const waMsg =
    `Halo Titanium Medan, saya ingin order:\n` +
    `- Produk: ${product.title}\n` +
    `- Varian: ${v?.thread || ""}${v?.length ? " x " + v.length + "mm" : ""}${v?.color ? " " + v.color : ""}\n` +
    `- Qty: ${qty}\nTerima kasih.`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      {variants.length > 0 && (
        <div className="mb-4">
          <div className="text-sm text-white/80 mb-2">Pilih Varian</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {variants.map(opt => (
              <button
                key={opt.sku}
                onClick={() => setSelected(opt.sku)}
                disabled={opt.stock <= 0}
                className={`rounded-xl border px-3 py-2 text-left text-sm ${selected === opt.sku ? "border-white/60 bg-white/10 text-white" : "border-white/10 bg-white/5 text-white/80"} ${opt.stock <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="font-medium">{[opt.thread, opt.length ? `x ${opt.length}mm` : "", opt.color].filter(Boolean).join(" ") || "Default"}</div>
                <div className="text-white/60">Rp {(opt.price || 0).toLocaleString("id-ID")} • Stok {opt.stock}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <label className="text-sm text-white/80">Qty</label>
        <input type="number" min={1} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value) || 1))} className="w-20 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-white font-semibold">{formatRupiah(price)}</div>
        <div className="flex gap-2">
          <a href={prefilledWA(waMsg)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold bg-white text-slate-900">Order via WA</a>
          <button onClick={() => add({ id: product.id, title: product.title, variant: [v?.thread, v?.length ? `x ${v.length}mm` : "", v?.color].filter(Boolean).join(" "), qty, price: v?.price })} className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold border border-white/10 bg-white/5 text-white">+ Keranjang</button>
        </div>
      </div>
    </div>
  );
}
