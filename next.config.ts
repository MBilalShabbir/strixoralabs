import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  // experimental.optimizeCss requires the `critters` package.
  // Enable with: npm install critters
  // experimental: { optimizeCss: true },
};

export default nextConfig;
