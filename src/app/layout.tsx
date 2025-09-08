
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSheet from "@/components/cart/CartSheet";
import { UIProvider } from "@/context/UIContext";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Titanium Medan — Premium Titanium Parts",
  description: "Etalase & katalog part titanium untuk motor. Checkout manual via WhatsApp & PDF."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <CartProvider>
          <UIProvider>
            <Navbar />
            {children}
            <Footer />
            <CartSheet />
          </UIProvider>
        </CartProvider>
      </body>
    </html>
  );
}
