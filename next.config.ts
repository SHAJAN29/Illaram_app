import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    typescript: {
      ignoreBuildErrors: false, // enforce strict typing in CI
  }

};

export default nextConfig;
