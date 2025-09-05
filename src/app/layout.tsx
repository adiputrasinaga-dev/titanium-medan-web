import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Baut Titanium & Recolor Medan | Request Part Custom",
  description: "Spesialis baut titanium & anodizing warna. Custom part & portofolio, order cepat via WhatsApp/DM.",
  openGraph: {
    title: "Baut Titanium & Recolor Medan",
    description: "Custom part & anodizing premium. Konsultasi via WA.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#0B0E12] text-[#E6ECF2]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
