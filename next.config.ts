import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-ott.netshow.me",
        port: "",
        pathname: "/sites/70/media/**",
      },
    ],
  },
};

export default nextConfig;
