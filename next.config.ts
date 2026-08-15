import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/allorders',
        destination: '/orders', 
        permanent: true,
      },
    ];
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'ecommerce.routemisr.com', 
    },
      {
        protocol: 'https',
        hostname: 'petapixel.com',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
