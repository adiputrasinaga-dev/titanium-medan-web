"use client";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  const qs = [
    { q: "Apakah warna gampang pudar?", a: "Warna berasal dari lapisan oksida (anodizing), bukan cat. Tahan lama; hindari abrasif & kimia keras." },
    { q: "Bisa kirim ke luar kota?", a: "Bisa. Gunakan kurir sesuai preferensi. Estimasi waktu tergantung lokasi & antrian." },
    { q: "Ada garansi?", a: "Garansi mengikuti kebijakan toko untuk cacat produksi/finishing. Silakan konsultasikan sebelum transaksi." },
  ];
  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
          {qs.map((item) => (
            <div key={item.q} className="p-4 md:p-6">
              <button onClick={() => setOpen(open === item.q ? null : item.q)} className="w-full text-left text-white flex items-center justify-between gap-4">
                <span className="font-medium">{item.q}</span>
                <span className={`transition-transform ${open === item.q ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === item.q && <p className="mt-3 text-white/70 text-sm">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
