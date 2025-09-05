import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CatalogSection from "@/components/sections/Catalog/CatalogSection";
import WhyTitanium from "@/components/sections/WhyTitanium";
import ColorPalette from "@/components/sections/ColorPalette";
import HowToOrder from "@/components/sections/HowToOrder";
import FAQ from "@/components/sections/FAQ";
import LocationHours from "@/components/sections/LocationHours";
import StickyWA from "@/components/sections/StickyWA";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <CatalogSection />
      <WhyTitanium />
      <ColorPalette />
      <HowToOrder />
      <FAQ />
      <LocationHours />
      <StickyWA />
      <Footer />
    </main>
  );
}
