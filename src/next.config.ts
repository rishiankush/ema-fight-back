import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/workshops",
        destination: "/programs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
