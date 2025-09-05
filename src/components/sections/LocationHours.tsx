import Button from "@/components/common/Button";
import GradientBorderCard from "@/components/common/GradientBorderCard";

export default function LocationHours() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Lokasi & Jam Operasional</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-white/60 text-sm">Lokasi</div>
                <div className="text-white mt-1">Medan (isi alamat detail/pin GMaps)</div>
                <div className="mt-3">
                  <a href="https://maps.google.com" target="_blank">
                    <Button variant="ghost">Buka di Google Maps</Button>
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-white/60 text-sm">Jam Operasional</div>
                <div className="text-white mt-1">Sen–Kam 13:00–21:30</div>
                <div className="text-white">Jumat 14:00–21:30</div>
              </div>
            </div>
          </div>
          <div>
            <GradientBorderCard>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?q=80&w=1600&auto=format&fit=crop" alt="Lokasi bengkel" className="h-full w-full object-cover" />
              </div>
            </GradientBorderCard>
          </div>
        </div>
      </div>
    </section>
  );
}
