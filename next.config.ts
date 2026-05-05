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
    // Serve original static assets directly to avoid Vercel Image Optimization reads.
    unoptimized: true,
  },
  allowedDevOrigins: ["http://192.168.1.16:3000"],
};

export default nextConfig;
