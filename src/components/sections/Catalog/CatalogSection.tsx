"use client";
import { useMemo, useState } from "react";
import PRODUCTS from "@/data/products.json";
import type { Product } from "@/types/product";
import { prefilledWA } from "@/lib/wa";
import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/cn";
import Button from "@/components/common/Button";
import GradientBorderCard from "@/components/common/GradientBorderCard";
import { useCart } from "@/context/CartContext";

function CatalogToolbar({ q, setQ, category, setCategory }:{ q:string; setQ:(v:string)=>void; category:string; setCategory:(v:string)=>void; }) {
  const cats = ["Semua","Baut","Part Custom","Recolor"];
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-2">
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Cari produk, varian, warna…" className="bg-transparent outline-none text-sm text-white placeholder:text-white/50 min-w-[220px]" />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {cats.map(c=>(
          <button key={c} onClick={()=>setCategory(c)}
            className={cn("px-3 py-1.5 rounded-full text-xs border transition-colors",
              category===c?"border-white/30 bg:white/10 text-white":"border-white/10 bg-white/5 text-white/70 hover:text-white")}>{c}</button>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ p, onOpen }:{ p:Product; onOpen:(p:Product)=>void }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.images[0]} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold leading-tight">{p.title}</h3>
            <p className="text-xs text-white/60 mt-1">{p.category}</p>
          </div>
          {p.variants?.[0] && (
            <div className="text-right">
              <div className="text-sm text-white/90">{formatRupiah(p.variants[0].price)}</div>
              <div className="text-[11px] text-white/50">mulai</div>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button onClick={()=>onOpen(p)} className="text-sm text-white/90 hover:text-white underline underline-offset-4">Lihat Detail</button>
          <a href={prefilledWA(`Halo, saya tertarik dengan ${p.title}. Mohon info ketersediaan dan harga.`)} target="_blank">
            <Button className="px-4 py-2 text-xs">Pesan via WA</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductModal({ p, onClose }:{ p:Product|null; onClose:()=>void }) {
  const [img,setImg] = useState(0);
  const [variant,setVariant] = useState<string|undefined>(undefined);
  const [qty,setQty] = useState(1);
  const { add } = useCart();

  if (!p) return null;
  const selectedVar = p.variants?.find(v=>v.name===variant);
  const price = selectedVar?.price ?? p.variants?.[0]?.price ?? 0;
  const orderMsg = `Halo Titanium Medan, saya ingin order:\n- Produk: ${p.title}\n- Varian: ${variant ?? "(mohon rekomendasi)"}\n- Qty: ${qty}\nTerima kasih.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-5xl rounded-3xl bg-[#0F141A] border border-white/10 overflow-hidden">
        <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={onClose} aria-label="Close">✕</button>
        <div className="grid md:grid-cols-2">
          <div className="p-4 md:p-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <img src={p.images[img]} alt={p.title} className="h-full w-full object-cover" />
            </div>
            <div className="mt-3 flex items-center gap-2 overflow-x-auto">
              {p.images.map((src,i)=>(
                <button key={src} onClick={()=>setImg(i)} className={`h-16 w-20 rounded-lg overflow-hidden border ${i===img?"border-white/60":"border-white/10"}`}>
                  <img src={src} alt="thumb" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">{p.description}</p>
            {p.variants?.length ? (
              <div className="mt-6">
                <div className="text-sm text-white/80 mb-2">Pilih Varian</div>
                <div className="grid grid-cols-2 gap-2">
                  {p.variants.map(v=>(
                    <button key={v.name} onClick={()=>setVariant(v.name)} disabled={v.stock<=0}
                      className={`rounded-xl border px-3 py-2 text-left text-sm ${variant===v.name?"border-white/60 bg-white/10 text-white":"border-white/10 bg-white/5 text-white/80"} ${v.stock<=0?"opacity-50 cursor-not-allowed":""}`}>
                      <div className="font-medium">{v.name}</div>
                      <div className="text-white/60">{formatRupiah(v.price)} • Stok {v.stock}</div>
                    </button>
                  ))}
                </div>
              </div>
            ): null}
            <div className="mt-6 flex items-center gap-3">
              <label className="text-sm text-white/80">Qty</label>
              <input type="number" min={1} value={qty} onChange={(e)=>setQty(Math.max(1, Number(e.target.value)||1))}
                className="w-20 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-white/60">Perkiraan harga</div>
                <div className="text-2xl font-bold text-white">{formatRupiah(price*qty)}</div>
              </div>
              <div className="flex gap-2">
                <a href={prefilledWA(orderMsg)} target="_blank"><Button>Order via WA</Button></a>
                <button onClick={()=>{ add({ id:p.id, title:p.title, variant, qty, price }); onClose(); }} className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold border border-white/10 bg-white/5 text-white hover:text-white/90">+ Keranjang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer() {
  const [open,setOpen] = useState(false);
  const { items, total, remove, clear } = useCart();
  const waText = useMemo(() => {
    const lines = ["Halo Titanium Medan, berikut ringkasan pesanan saya:"];
    items.forEach(it => lines.push(`- ${it.title}${it.variant ? " ("+it.variant+")" : ""} x${it.qty}`));
    lines.push(`Total perkiraan: ${formatRupiah(total)}`);
    return lines.join("\n");
  }, [items,total]);

  return (
    <>
      <button onClick={()=>setOpen(true)} className="fixed bottom-20 right-4 md:right-6 z-40 rounded-full bg-white text-slate-900 shadow-xl px-5 py-3 font-semibold">
        Keranjang ({items.length})
      </button>
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={()=>setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0F141A] border-l border-white/10 p-4 md:p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h4 className="text-white text-xl font-semibold">Keranjang</h4>
              <button onClick={()=>setOpen(false)} className="text-white/70 hover:text-white" aria-label="Close">✕</button>
            </div>
            <div className="mt-4 space-y-3">
              {items.length===0 && <div className="text-white/60 text-sm">Belum ada item.</div>}
              {items.map((it,idx)=>(
                <div key={idx} className="flex items-center justify-between rounded-2xl border border-white/10 bg:white/5 p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{it.title}</div>
                    <div className="text-white/60 text-xs">{it.variant ?? "Varian belum dipilih"} • Qty {it.qty}</div>
                  </div>
                  <button onClick={()=>remove(it.id, it.variant)} className="text-white/60 hover:text-white text-xs">Hapus</button>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex items-center justify-between text-white">
                <span className="text-white/70">Perkiraan total</span>
                <span className="font-semibold">{formatRupiah(total)}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <a href={prefilledWA(waText)} target="_blank" className="flex-1"><Button className="w-full">Checkout via WA</Button></a>
                <button onClick={clear} className="px-4 py-3 rounded-2xl border border:white/10 text-white/80 hover:text-white">Bersihkan</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function CatalogSection() {
  const [q,setQ] = useState(""); const [category,setCategory] = useState("Semua");
  const [modal,setModal] = useState<Product|null>(null);
  const filtered = useMemo(()=> PRODUCTS.filter(p=>p.isActive).filter(p=>{
    const c = category==="Semua" || p.category===category;
    const text = (p.title+" "+p.description+" "+(p.variants?.map(v=>v.name).join(" ")||"")).toLowerCase();
    return c && text.includes(q.toLowerCase());
  }), [q,category]);

  return (
    <section id="catalog" className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Katalog</h2>
          <p className="mt-2 text-white/70 text-sm max-w-prose">Klik “Lihat Detail” untuk varian & estimasi harga.</p>
        </div>
      </div>
      <CatalogToolbar q={q} setQ={setQ} category={category} setCategory={setCategory} />
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <div key={p.id}><ProductCard p={p} onOpen={setModal} /></div>)}
      </div>
      <ProductModal p={modal} onClose={()=>setModal(null)} />
      <CartDrawer />
    </section>
  );
}
