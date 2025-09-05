import Button from "@/components/common/Button";
import GradientBorderCard from "@/components/common/GradientBorderCard";
import { prefilledWA } from "@/lib/wa";

export default function Services() {
  const items = [
    { title: "Baut Titanium Ready", desc: "Ringan–kuat, tahan korosi, ukuran populer." },
    { title: "Request Part (Custom)", desc: "Sesuai kebutuhan ukuran/benang/finishing." },
    { title: "Recolor / Anodizing", desc: "Warna dari lapisan oksida (interference color)." },
  ];
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-10">Layanan Utama</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <GradientBorderCard key={it.title}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-white/70">{it.desc}</p>
                <div className="mt-6">
                  <a href={prefilledWA(`Halo, saya ingin konsultasi tentang ${it.title}.`)} target="_blank">
                    <Button className="w-full">Konsultasi via WA</Button>
                  </a>
                </div>
              </div>
            </GradientBorderCard>
          ))}
        </div>
      </div>
    </section>
  );
}
