export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-4xl font-bold">Halaman tidak ditemukan</h1>
        <p className="text-white/70 mt-2">Periksa URL atau kembali ke beranda.</p>
        <a href="/" className="inline-block mt-6 px-4 py-2 rounded-xl bg-white text-slate-900">Kembali</a>
      </div>
    </div>
  );
}
