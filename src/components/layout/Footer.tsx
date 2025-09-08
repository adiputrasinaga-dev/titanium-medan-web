
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">Titanium Medan</div>
            <p className="text-white/70 mt-2">Premium Titanium Parts</p>
            <div className="mt-3 text-white/80 text-sm">
              <div>Jl. Contoh No. 123, Medan</div>
              <div className="mt-1">WA: +62812XXXXXXX</div>
              <div>Email: hello@titanium-medan.id</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Jam Operasional</div>
            <ul className="text-white/70 text-sm space-y-1">
              <li className="flex justify-between"><span>Senin–Jumat</span><span>10.00–18.00</span></li>
              <li className="flex justify-between"><span>Sabtu</span><span>10.00–16.00</span></li>
              <li className="flex justify-between"><span>Minggu</span><span>Tutup</span></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Marketplace</div>
            <ul className="text-white/70 text-sm space-y-1">
              <li><a className="underline" href="https://www.tokopedia.com/" target="_blank">Tokopedia</a></li>
              <li><a className="underline" href="https://shopee.co.id/" target="_blank">Shopee</a></li>
              <li><a className="underline" href="https://www.bukalapak.com/" target="_blank">Bukalapak</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Kebijakan & Bantuan</div>
            <ul className="text-white/70 text-sm space-y-1">
              <li><a className="underline" href="/warranty">Warranty</a></li>
              <li><a className="underline" href="/refund-returns">Refund & Return</a></li>
              <li><a className="underline" href="/reseller">Reseller</a></li>
              <li><a className="underline" href="/track-order">Track Order</a></li>
              <li><a className="underline" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Titanium Medan.</div>
      </div>
    </footer>
  );
}
