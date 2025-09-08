
import Link from "next/link";
import Image from "next/image";
import { listFeaturedProducts } from "@/catalog";
import ProductCard from "@/components/sections/Etalase/ProductCard";

export default function Home() {
  const featured = listFeaturedProducts(8);
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Titanium Medan</h1>
          <p className="mt-3 text-white/80 max-w-2xl">Premium Titanium Parts untuk motor. Estetis, presisi, dan kuat — dengan checkout manual via WhatsApp.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/etalase/honda/vario" className="rounded-xl bg-white text-slate-900 font-semibold px-4 py-2">Masuk ke Etalase</Link>
            <a href="https://www.instagram.com/titaniummedan" target="_blank" className="rounded-xl border border-white/20 px-4 py-2">Instagram</a>
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white">Produk Unggulan</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (<ProductCard key={p.id} p={p} />))}
        </div>
        <div className="mt-6">
          <Link href="/etalase/honda/vario" className="text-sm text-white/80 underline underline-offset-4">Lihat semua</Link>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white">
        <h2 className="text-2xl font-bold">Kenapa Titanium Medan</h2>
        <ul className="mt-3 grid md:grid-cols-3 gap-4 text-white/80 text-sm">
          <li className="rounded-2xl border border-white/10 bg-white/5 p-4">Grade 5 titanium — ringan, kuat, anti karat.</li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-4">Presisi ukuran & aman torsi.</li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-4">Warna anodizing stabil dan matching.</li>
        </ul>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-4 space-y-3 text-white/80 text-sm">
          <details className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer">Apakah warna mudah pudar?</summary>
            <div className="pt-2">Finishing anodizing berkualitas; tetap dianjurkan pembersihan yang tepat.</div>
          </details>
          <details className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer">Apakah aman untuk harian?</summary>
            <div className="pt-2">Ya, selama pemasangan & torsi sesuai standar pabrikan.</div>
          </details>
        </div>
      </section>

      <section id="lokasi" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white">
        <h2 className="text-2xl font-bold">Lokasi & Jam</h2>
        <p className="text-white/80 text-sm mt-2">Jl. Contoh No. 123, Medan — Senin–Sabtu 10.00–18.00.</p>
      </section>
    </main>
  );
}
