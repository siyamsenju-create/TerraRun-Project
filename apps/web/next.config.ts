import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@terrarun/shared-types"],
};

export default nextConfig;

