import { siteConfig } from "@/config/site";
export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</div>
        <div className="flex items-center gap-4 text-white/70">
          <a href={siteConfig.igUrl} target="_blank" className="hover:text-white text-sm">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
