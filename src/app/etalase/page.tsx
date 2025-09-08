
import Link from "next/link";
import Image from "next/image";
import { listFeaturedProducts, PART_FAMILIES } from "@/catalog";

export default function EtalaseLandingPage() {
  const featured = listFeaturedProducts(8);
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Etalase</h1>
          <p className="mt-3 text-white/80 max-w-2xl">Jelajahi part titanium berdasarkan kategori dan model motor.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/etalase/honda/vario" className="rounded-xl bg-white text-slate-900 font-semibold px-4 py-2">Mulai dari Honda Vario</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white">Kategori Populer</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PART_FAMILIES.map((cat) => (
            <Link key={cat} href={`/etalase/honda/vario?cat=${cat}`} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/90 hover:bg-white/10">
              {label(cat)}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function label(k: string) {
  switch(k) {
    case "baut-cvt": return "Baut CVT";
    case "baut-kaliper": return "Baut Kaliper";
    case "disc-rotor": return "Disc Rotor";
    case "engine-cover": return "Engine Cover";
    case "body-fairing": return "Body/Fairing";
    case "as-roda": return "As Roda / Axle Nut";
    case "banjo-bolt": return "Banjo Bolt";
    case "reservoir-cap": return "Reservoir Cap";
    case "valve-cap": return "Valve Cap";
    case "nuts": return "Nuts / Aksesoris";
    default: return k;
  }
}
