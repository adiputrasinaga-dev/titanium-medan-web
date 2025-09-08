
"use client";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ item, label = "Tambah", className }: { item: { id: string; title: string; variant?: string | null; price?: number | null }; label?: string; className?: string; }) {
  const { add } = useCart();
  return (
    <button onClick={() => add({ id: item.id, title: item.title, variant: item.variant || null, qty: 1, price: item.price || 0 })} className={className || "rounded-xl bg-white text-slate-900 text-xs font-semibold px-3 py-1.5 hover:opacity-90"}>
      {label}
    </button>
  );
}
