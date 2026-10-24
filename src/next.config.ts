import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/workshops",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/founder",
        destination: "/master-bs-handa",
        permanent: true,
      },
      {
        source: "/classes",
        destination: "/training-centres",
        permanent: true,
      },
      {
        source: "/women-fight-back",
        destination: "/programs/women",
        permanent: true,
      },
      {
        source: "/women-self-defense",
        destination: "/programs/women",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
