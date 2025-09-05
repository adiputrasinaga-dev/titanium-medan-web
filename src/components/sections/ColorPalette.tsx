export default function ColorPalette() {
  const swatches = [
    { name: "Gold", hex: "#C6A66A" },
    { name: "Bronze", hex: "#A6785A" },
    { name: "Purple", hex: "#7A50C8" },
    { name: "Blue", hex: "#3A7BD5" },
    { name: "Rainbow", hex: "linear-gradient(90deg,#C6A66A,#7A50C8,#3A7BD5)" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Varian Warna & Finishing</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {swatches.map((s) => (
            <div key={s.name} className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="h-24 w-full rounded-2xl border border-white/10" style={{ background: s.hex }} title={s.name} />
              <div className="mt-3 text-white text-sm font-medium">{s.name}</div>
              <div className="text-white/60 text-xs">Spektrum warna tergantung ketebalan oksida/volt.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
