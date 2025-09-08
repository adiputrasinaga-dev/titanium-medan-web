// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // tambahkan host lain jika perlu
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
