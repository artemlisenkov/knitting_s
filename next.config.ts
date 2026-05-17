import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    localPatterns: [
      {
        pathname: "/catalog/**",
        search: "",
      },
      {
        pathname: "/main/**",
        search: "",
      },
      {
        pathname: "/palette/**",
        search: "",
      },
      {
        pathname: "/ai/**",
        search: "",
      },
      {
        pathname: "/uploads/**",
        search: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    webpackMemoryOptimizations: true,
    serverSourceMaps: false,
  },
  allowedDevOrigins: ['46.101.155.45'],
  productionBrowserSourceMaps: false,
};

export default nextConfig;
