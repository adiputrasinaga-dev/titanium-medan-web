"use client";
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="min-h-screen bg-[#0B0E12] text-[#E6ECF2] flex items-center justify-center">
        <div className="text-center space-y-4 px-6">
          <h2 className="text-2xl font-bold">Terjadi kesalahan</h2>
          <p className="text-white/70 break-all">{error.message}</p>
          <button onClick={() => reset()} className="px-4 py-2 rounded-xl bg-white text-slate-900">Coba lagi</button>
        </div>
      </body>
    </html>
  );
}
