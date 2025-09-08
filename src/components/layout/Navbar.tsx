
import Link from "next/link";
import CartButton from "@/components/cart/CartButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-tight">Titanium Medan</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#catalog" className="text-white/80 hover:text-white text-sm">Katalog</Link>
          <Link href="/#why" className="text-white/80 hover:text-white text-sm">Why</Link>
          <Link href="/#faq" className="text-white/80 hover:text-white text-sm">FAQ</Link>
          <Link href="/etalase/honda/vario" className="text-white font-medium text-sm">Etalase</Link>
          <CartButton />
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <Link href="/etalase/honda/vario" className="text-white text-sm">Etalase</Link>
          <CartButton />
        </div>
      </div>
    </header>
  );
}
