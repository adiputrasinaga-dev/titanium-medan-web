
import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "@/types/catalog";
import AddToCartButton from "@/components/cart/AddToCartButton";

export default function ProductCard({ p }: { p: CatalogProduct }) {
  const firstVar = p.variants[0];
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image src={p.images[0]} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold leading-tight">{p.title}</h3>
            <div className="text-xs text-white/60 mt-1">Rp {(firstVar.price || 0).toLocaleString("id-ID")}</div>
          </div>
          <AddToCartButton item={{ id: p.id, title: p.title, variant: firstVar.sku, price: firstVar.price }} />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Link href={`/p/${p.slug}`} className="text-sm text-white/90 hover:text-white underline underline-offset-4">Lihat Detail</Link>
          <span className="text-[11px] text-white/50">{p.variants.some(v=>v.stock>0) ? "Ready" : "Pre-Order"}</span>
        </div>
      </div>
    </div>
  );
}
