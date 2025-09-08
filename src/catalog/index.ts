
import type { Brand, Model, PartFamily, CatalogProduct } from "@/types/catalog";
import data from "@/data/catalog/products.json";

export const BRANDS: Brand[] = ["honda", "yamaha"];
export const MODELS: Record<Brand, Model[]> = {
  honda: ["vario", "beat", "scoopy", "pcx"],
  yamaha: ["nmax", "aerox", "xmax"],
};
export const PART_FAMILIES: PartFamily[] = [
  "baut-cvt","baut-kaliper","disc-rotor","engine-cover",
  "body-fairing","as-roda","banjo-bolt","reservoir-cap","valve-cap","nuts"
];

export type Filters = {
  q?: string;
  partFamily?: PartFamily | "semua";
  thread?: "M5" | "M6" | "M8" | "all";
  color?: "gold" | "bronze" | "purple" | "blue" | "rainbow" | "all";
  stock?: "ready" | "all";
  sort?: "relevance" | "price-asc" | "price-desc" | "newest";
};

const ALL: CatalogProduct[] = (data as unknown as CatalogProduct[]).filter(p => p.isActive);

export function listProductsForModel(brand: Brand, model: Model): CatalogProduct[] {
  return ALL.filter(p => p.compatibility.some(c => c.brand === brand && c.model === model));
}

export function listFeaturedProducts(limit = 8): CatalogProduct[] { return ALL.slice(0, limit); }
export function getProductBySlug(slug: string): CatalogProduct | null { return ALL.find(p => p.slug === slug) || null; }

export function applyFilters(products: CatalogProduct[], f: Filters): CatalogProduct[] {
  let out = products.slice();
  if (f.partFamily && f.partFamily !== "semua") out = out.filter(p => p.partFamily === (f.partFamily as any));
  if (f.q && f.q.trim()) {
    const q = f.q.toLowerCase();
    out = out.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.variants.some(v => (v.head||"").toLowerCase().includes(q))
    );
  }
  if (f.thread && f.thread !== "all") out = out.filter(p => p.variants.some(v => v.thread === f.thread));
  if (f.color && f.color !== "all") out = out.filter(p => p.variants.some(v => v.color === f.color));
  if (f.stock === "ready") out = out.filter(p => p.variants.some(v => v.stock > 0));
  return out;
}

export function applySort(products: CatalogProduct[], sort?: Filters["sort"]): CatalogProduct[] {
  const out = products.slice();
  const minPrice = (p: CatalogProduct) => Math.min(...p.variants.map(v => v.price));
  switch (sort) {
    case "price-asc": return out.sort((a, b) => minPrice(a) - minPrice(b));
    case "price-desc": return out.sort((a, b) => minPrice(b) - minPrice(a));
    case "newest": return out;
    default: return out;
  }
}

export function parseFilters(
  searchParams: URLSearchParams | Record<string, string | string[] | undefined>
): Filters {
  const getAll = (k: string): string[] => {
    // Bentuk URLSearchParams (Next 15)
    if (typeof (searchParams as any)?.get === "function") {
      return (searchParams as URLSearchParams).getAll(k);
    }
    // Bentuk object (kompat server lama / test)
    const v = (searchParams as Record<string, string | string[] | undefined>)[k];
    return Array.isArray(v) ? v : v ? [v] : [];
  };

  const pick = (k: string, fallback: string) => {
    const a = getAll(k);
    return (a[0] ?? fallback);
  };

  return {
    q: pick("q", ""),
    partFamily: pick("cat", "semua") as any,
    thread: pick("thread", "all") as any,
    color: pick("color", "all") as any,
    stock: pick("stock", "ready") as any,
    sort: pick("sort", "relevance") as any,
  };
}
