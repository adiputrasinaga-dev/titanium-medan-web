import { prefilledWA } from "@/lib/wa";

export default function StickyWA() {
  return (
    <a
      href={prefilledWA("Halo, saya ingin konsultasi dan order.")}
      target="_blank"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 shadow-2xl px-5 py-3 font-semibold"
    >
      Chat WA
    </a>
  );
}
