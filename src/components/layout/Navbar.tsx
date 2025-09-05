"use client";
import { useState } from "react";
import Button from "@/components/common/Button";
import { prefilledWA } from "@/lib/wa";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [{href:"#services",label:"Layanan"},{href:"#catalog",label:"Katalog"},{href:"#why",label:"Kenapa Titanium"},{href:"#how",label:"Cara Order"},{href:"#faq",label:"FAQ"},{href:"#contact",label:"Kontak"}];
  return (
    <div className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold tracking-tight">{siteConfig.businessName}</a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {nav.map(i=> <a key={i.href} href={i.href} className="hover:text-white">{i.label}</a>)}
          <a href={prefilledWA("Halo, saya tertarik dengan produk/layanan titanium.")} target="_blank">
            <Button><span>Chat WhatsApp</span></Button>
          </a>
        </div>
        <button className="md:hidden text-white/80" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 text-white/80 space-y-2">
          {nav.map(i=> <a key={i.href} href={i.href} onClick={()=>setOpen(false)} className="block">{i.label}</a>)}
          <a href={prefilledWA("Halo, saya tertarik dengan produk/layanan titanium.")} target="_blank" className="block">
            <Button className="w-full">Chat WhatsApp</Button>
          </a>
        </div>
      )}
    </div>
  );
}
