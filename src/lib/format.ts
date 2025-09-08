
export function formatRupiah(n: number) {
  try { return n.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }); }
  catch { return `Rp${Math.round(n).toString()}`; }
}
