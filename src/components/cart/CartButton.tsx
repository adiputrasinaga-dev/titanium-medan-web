
"use client";
import { useCart } from "@/context/CartContext";
import { useUI } from "@/context/UIContext";

export default function CartButton() {
  const { totalItems } = useCart();
  const { openCart } = useUI();
  return (
    <button onClick={openCart} className="relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10">
      <span>🛒</span>
      <span>Keranjang</span>
      {totalItems > 0 && <span className="ml-1 inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-white text-slate-900 text-xs font-bold px-1">{totalItems}</span>}
    </button>
  );
}
