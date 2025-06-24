import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all remote images
      },
    ],
  },
  allowedDevOrigins: ["http://192.168.1.16:3000"],
};

export default nextConfig;
