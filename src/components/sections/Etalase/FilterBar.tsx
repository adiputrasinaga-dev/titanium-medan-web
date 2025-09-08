
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PartFamily } from "@/types/catalog";

export default function FilterBar({ partFamilies }: { partFamilies: PartFamily[] }) {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const q = params.get("q") ?? "";
  const cat = (params.get("cat") ?? "semua") as "semua" | PartFamily;
  const thread = (params.get("thread") ?? "all") as "all" | "M5" | "M6" | "M8";
  const color = (params.get("color") ?? "all") as "all" | "gold" | "bronze" | "purple" | "blue" | "rainbow";
  const stock = (params.get("stock") ?? "ready") as "ready" | "all";
  const sort = (params.get("sort") ?? "relevance") as "relevance" | "price-asc" | "price-desc" | "newest";

  const setParam = (k: string, v: string) => {
    const sp = new URLSearchParams(params.toString());
    if (!v || v === "semua" || v === "all" || (k === "q" && !v.trim()) || (k === "sort" && v === "relevance")) sp.delete(k);
    else sp.set(k, v);
    router.replace(`${pathname}?${sp.toString()}`);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-3 md:p-4">
      <div className="grid gap-3 md:grid-cols-6">
        <div className="col-span-2 flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-2">
          <input defaultValue={q} onChange={(e)=> setParam("q", e.target.value)} placeholder="Cari baut/varian/warna…" className="bg-transparent outline-none text-sm text-white placeholder:text-white/50 w-full" />
        </div>

        <div className="flex flex-wrap gap-2">
          <select value={cat} onChange={(e)=> setParam("cat", e.target.value)} className="rounded-xl bg-white/5 border border-white/10 text-sm px-3 py-2 text-white/90">
            <option value="semua">Semua Kategori</option>
            {partFamilies.map(p => <option key={p} value={p}>{labelPartFamily(p as any)}</option>)}
          </select>
        </div>

        <div className="flex flex-wrap gap-2">
          <select value={thread} onChange={(e)=> setParam("thread", e.target.value)} className="rounded-xl bg-white/5 border border-white/10 text-sm px-3 py-2 text-white/90">
            <option value="all">Any Thread</option>
            <option value="M5">M5</option><option value="M6">M6</option><option value="M8">M8</option>
          </select>
          <select value={color} onChange={(e)=> setParam("color", e.target.value)} className="rounded-xl bg-white/5 border border-white/10 text-sm px-3 py-2 text-white/90">
            <option value="all">Any Color</option>
            <option value="gold">gold</option><option value="bronze">bronze</option><option value="purple">purple</option><option value="blue">blue</option><option value="rainbow">rainbow</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-white/70 text-sm">
            <input type="checkbox" className="mr-2 align-middle" checked={stock === "ready"} onChange={(e)=> setParam("stock", e.target.checked ? "ready" : "all")} />
            Stok ready saja
          </label>
        </div>

        <div className="flex items-center gap-2">
          <select value={sort} onChange={(e)=> setParam("sort", e.target.value)} className="rounded-xl bg-white/5 border border-white/10 text-sm px-3 py-2 text-white/90">
            <option value="relevance">Urutkan: Relevansi</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
            <option value="newest">Terbaru</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export function labelPartFamily(p: PartFamily) {
  switch (p) {
    case "baut-cvt": return "Baut CVT";
    case "baut-kaliper": return "Baut Kaliper";
    case "disc-rotor": return "Baut Disc Rotor";
    case "engine-cover": return "Engine Cover / Sensor";
    case "body-fairing": return "Baut Body/Fairing";
    case "as-roda": return "As Roda / Axle Nut";
    case "banjo-bolt": return "Banjo Bolt";
    case "reservoir-cap": return "Reservoir Cap";
    case "valve-cap": return "Valve Cap";
    case "nuts": return "Nuts / King Nut";
  }
}
