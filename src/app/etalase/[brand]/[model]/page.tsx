// src/app/etalase/[brand]/[model]/page.tsx
import { BRANDS, MODELS, PART_FAMILIES, listProductsForModel, parseFilters, applyFilters, applySort } from "@/catalog";
import type { Brand, Model } from "@/types/catalog";
import FilterBar, { labelPartFamily } from "@/components/sections/Etalase/FilterBar";
import ProductCard from "@/components/sections/Etalase/ProductCard";

type Params = { brand: Brand; model: Model };
type Search = Record<string, string | string[] | undefined>;

export async function generateStaticParams() {
  const out: { brand: Brand; model: Model }[] = [];
  for (const b of BRANDS) for (const m of MODELS[b]) out.push({ brand: b, model: m });
  return out;
}

export default async function EtalaseModelPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search | URLSearchParams>;
}) {
  const { brand, model } = await params;      // ⬅️ WAJIB await
  const sp = await searchParams;              // ⬅️ WAJIB await

  if (!BRANDS.includes(brand)) return <div className="text-white p-10">Brand tidak ditemukan</div>;
  if (!MODELS[brand].includes(model)) return <div className="text-white p-10">Model tidak ditemukan</div>;

  const all = listProductsForModel(brand, model);
  const filters = parseFilters(sp);           // aman utk URLSearchParams/object
  const filtered = applyFilters(all, filters);
  const sorted = applySort(filtered, filters.sort);

  return (
    <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <nav className="text-white/60 text-sm">
          <a href="/">Home</a> <span className="mx-2">/</span>
          <a href="/etalase" className="hover:text-white">Etalase</a> <span className="mx-2">/</span>
          <span className="text-white capitalize">{brand} {model}</span>
        </nav>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-white capitalize">{brand} {model}</h1>
        <p className="mt-2 text-white/70 max-w-prose text-sm">Pilih kategori & filter untuk menampilkan part titanium yang kompatibel.</p>
      </div>

      <FilterBar partFamilies={PART_FAMILIES} />

      <div className="mt-6 flex items-center justify-between">
        <div className="text-white/70 text-sm">
          Menampilkan <span className="text-white font-semibold">{sorted.length}</span> dari {all.length} item
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>

      {sorted.length === 0 && (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70 text-sm">
          Belum ada hasil. Coba reset kategori atau ubah filter.
        </div>
      )}
    </section>
  );
}
