import Button from "@/components/common/Button";
import GradientBorderCard, { Pill } from "@/components/common/GradientBorderCard";
import { prefilledWA } from "@/lib/wa";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(58,123,213,.35),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <Pill>Custom Request</Pill>
              <Pill>Recolor/Anodizing</Pill>
              <Pill>Ready to Ship</Pill>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Spesialis Baut Titanium & Recolor — Medan
            </h1>
            <p className="mt-6 text-white/80 max-w-prose">
              Custom part presisi. Warna anodizing premium (bukan cat). Konsultasi cepat via WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={prefilledWA(`Halo ${siteConfig.businessName}, saya ingin konsultasi dan order.`)} target="_blank">
                <Button>Chat WhatsApp</Button>
              </a>
              <a href={siteConfig.igUrl} target="_blank">
                <Button variant="ghost">Lihat Katalog IG →</Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <GradientBorderCard>
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
                  alt="Baut titanium anodized"
                  className="h-full w-full object-cover"
                />
              </div>
            </GradientBorderCard>
          </div>
        </div>
      </div>
    </section>
  );
}
