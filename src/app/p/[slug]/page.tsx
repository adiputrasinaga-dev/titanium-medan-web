
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/catalog";
import VariantPicker from "@/components/product/VariantPicker";
import { formatRupiah } from "@/lib/format";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const p = getProductBySlug(params.slug);
  if (!p) return notFound();

  const cheapest = Math.min(...p.variants.map(v => v.price));

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white">
      <nav className="text-white/60 text-sm">
        <Link href="/">Home</Link> <span className="mx-2">/</span>
        <Link href="/etalase" className="hover:text-white">Etalase</Link> <span className="mx-2">/</span>
        <span className="text-white">{p.title}</span>
      </nav>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <div className="relative aspect-[4/3]">
            <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {p.images.slice(0,3).map(src => (
              <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                <Image src={src} alt="thumb" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{p.title}</h1>
          <div className="text-white/70 mt-2">{p.description}</div>
          <div className="mt-3 text-xl font-semibold">
            {formatRupiah(cheapest)} <span className="text-sm text-white/60 font-normal">mulai</span>
          </div>

          <div className="mt-6">
            <VariantPicker product={p} />
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold">Keunggulan</div>
            <ul className="text-sm text-white/80 list-disc pl-5 mt-2 space-y-1">
              <li>Material Titanium Grade 5, ringan & kuat</li>
              <li>Anti karat, finishing warna stabil</li>
              <li>Ukuran presisi, aman torsi</li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold">Spesifikasi</div>
              <div className="text-sm text-white/80 mt-2">Thread: M5–M8 • Kepala: Hex/Button • Grade: G5</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold">Torque (Saran)</div>
              <div className="text-sm text-white/80 mt-2">Ikuti standar pabrikan & gunakan kunci torsi.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
