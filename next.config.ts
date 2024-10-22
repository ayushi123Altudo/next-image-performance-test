import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'afl-delivery.stylelabs.cloud',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
