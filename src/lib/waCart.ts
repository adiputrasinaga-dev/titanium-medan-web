
import type { CartItem } from "@/context/CartContext";
import { formatRupiah } from "@/lib/format";

export function buildCartWAMessage(items: CartItem[]) {
  const lines: string[] = [
    "Halo Titanium Medan, saya mau pesan:",
    ...items.map((it, i) => {
      const spec = it.variant ? ` (${it.variant})` : "";
      const lineTotal = (it.price || 0) * (it.qty || 1);
      return `${i + 1}) ${it.title}${spec} x${it.qty} @ ${formatRupiah(it.price || 0)} = ${formatRupiah(lineTotal)}`;
    }),
    "-----------------------------------------",
    `Subtotal: ${formatRupiah(items.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0))}`,
    "Catatan: Harga belum termasuk ongkir & jasa pasang."
  ];
  return lines.join("\n");
}

export function waLink(items: CartItem[], phone?: string) {
  const msg = buildCartWAMessage(items);
  const p = phone || (process.env.NEXT_PUBLIC_WA_NUMBER || "62812XXXXXXX");
  return `https://wa.me/${p}?text=${encodeURIComponent(msg)}`;
}
