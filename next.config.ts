import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    typescript: {
      ignoreBuildErrors: false, // enforce strict typing in CI
  },
   images: {
    domains: [
      'images.pexels.com',   // If you're still using Pexels too
      'cdn.pixabay.com' ,
      'images.unsplash.com'     // ✅ Add Pixabay here
    ],
  },

};

export default nextConfig;
