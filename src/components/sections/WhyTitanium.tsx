export default function WhyTitanium() {
  const feats = [
    { title: "Ringan & Kuat", desc: "Rasio kekuatan/berat unggul untuk pemakaian harian maupun performa." },
    { title: "Tahan Korosi", desc: "Cocok untuk iklim lembap; warna dan material lebih tahan lama." },
    { title: "Warna Variatif", desc: "Anodizing menghasilkan warna dari lapisan oksida — bukan cat." },
  ];
  return (
    <section id="why" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Kenapa Titanium?</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {feats.map((f) => (
            <div key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
