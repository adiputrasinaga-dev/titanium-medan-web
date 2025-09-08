
"use client";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useUI } from "@/context/UIContext";
import { formatRupiah } from "@/lib/format";
import { waLink } from "@/lib/waCart";
import { buildOrderPDF } from "@/lib/pdf";

const WA_PHONE = process.env.NEXT_PUBLIC_WA_NUMBER || "62812XXXXXXX";

export default function CartSheet() {
  const { items, totalPrice, increment, decrement, remove, clear } = useCart();
  const { cartOpen, closeCart } = useUI();

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen]);

  if (!cartOpen) return null;

  const onWA = () => window.open(waLink(items, WA_PHONE), "_blank");
  const onDownload = async () => {
    const blob = await buildOrderPDF(items);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const ts = new Date().toISOString().slice(0,16).replace(/[:T]/g,"-");
    a.href = url; a.download = `Ringkasan-Pesanan-TitaniumMedan-${ts}.pdf`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60" onClick={closeCart} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-950 text-white shadow-2xl border-l border-white/10">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="font-semibold">Keranjang</h3>
          <button onClick={closeCart} className="text-white/60 hover:text-white">✕</button>
        </div>
        <div className="p-4 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {items.length === 0 ? <div className="text-white/60 text-sm">Keranjang masih kosong.</div> : items.map(it => (
            <div key={it.id + (it.variant || '')} className="flex gap-3 items-start border border-white/10 rounded-xl p-3 bg-white/5">
              <div className="flex-1">
                <div className="font-medium leading-tight">{it.title}</div>
                {it.variant && <div className="text-xs text-white/60">Varian: {it.variant}</div>}
                <div className="mt-1 text-sm">{formatRupiah(it.price || 0)}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button className="w-7 h-7 rounded border border-white/10" onClick={() => decrement(it.id, it.variant)}>-</button>
                  <span className="text-sm w-6 text-center">{it.qty}</span>
                  <button className="w-7 h-7 rounded border border-white/10" onClick={() => increment(it.id, it.variant)}>+</button>
                  <button className="ml-auto text-white/60 hover:text-white text-xs underline" onClick={() => remove(it.id, it.variant)}>Hapus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>Subtotal</span>
            <span className="text-white font-semibold">{formatRupiah(totalPrice)}</span>
          </div>
          <div className="text-[11px] text-white/50 mt-1">Belum termasuk ongkir & jasa pasang.</div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button onClick={onWA} className="rounded-xl bg-emerald-500 text-slate-900 font-semibold py-2">Kirim via WA</button>
            <button onClick={onDownload} className="rounded-xl bg-white text-slate-900 font-semibold py-2">Download PDF</button>
          </div>
          {items.length > 0 && <button onClick={clear} className="mt-3 w-full rounded-xl border border-white/10 text-white/70 py-2 text-sm hover:bg-white/5">Kosongkan keranjang</button>}
        </div>
      </div>
    </div>
  );
}
