
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { CartItem } from "@/context/CartContext";
import { formatRupiah } from "@/lib/format";

export async function buildOrderPDF(items: CartItem[]) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]); // A4
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  let y = 800;

  const draw = (txt: string, x = 40, size = 10) => {
    page.drawText(txt, { x, y, size, font, color: rgb(0, 0, 0) });
    y -= size + 6;
  };

  draw("Titanium Medan — Ringkasan Pesanan (Estimasi)", 40, 14);
  draw(new Date().toLocaleString("id-ID"), 40);
  draw("============================================================", 40);

  items.forEach((it, i) => {
    const line = `${i + 1}) ${it.title}${it.variant ? " (" + it.variant + ")" : ""} x${it.qty}`;
    draw(line, 40, 11);
    const total = (it.price || 0) * (it.qty || 1);
    draw(`   Harga: ${formatRupiah(it.price || 0)}   Total: ${formatRupiah(total)}`, 40, 10);
  });

  draw("------------------------------------------------------------", 40);
  const subtotal = items.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);
  draw(`Subtotal: ${formatRupiah(subtotal)}`, 40, 12);
  draw("Catatan: Belum termasuk ongkir & jasa pasang.", 40, 10);

  const bytes = await pdf.save();
  return new Blob([bytes], { type: "application/pdf" });
}
