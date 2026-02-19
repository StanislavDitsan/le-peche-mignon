import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const configFilePath = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(configFilePath);

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    qualities: [75, 90, 100],
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
