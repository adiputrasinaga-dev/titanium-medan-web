import Button from "@/components/common/Button";
import { prefilledWA } from "@/lib/wa";

export default function HowToOrder() {
  const steps = [
    { t: "Chat WA/DM", d: "Sebutkan motor/part/ukuran/warna." },
    { t: "Konfirmasi", d: "Cek stok, estimasi biaya & waktu." },
    { t: "Bayar & Kirim/Pasang", d: "Transaksi aman, opsi pasang/antar." },
  ];
  return (
    <section id="how" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Cara Order</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-white/50 text-sm">Langkah {i + 1}</div>
              <div className="text-white font-semibold mt-1">{s.t}</div>
              <div className="text-white/70 text-sm mt-2">{s.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href={prefilledWA("Halo, saya ingin order titanium/recolor.")} target="_blank">
            <Button>Chat WhatsApp Sekarang</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
