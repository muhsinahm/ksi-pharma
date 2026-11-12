import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats (AVIF/WebP) automatically for product images.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
