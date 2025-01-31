import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "unsplash.com"],
    formats: ["image/avif", "image/webp"],
    // unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // output: "export",
};

export default nextConfig;
