import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tanosagroup.co.za' }],
        destination: 'https://www.tanosagroup.com/:path*',
        permanent: true,
      },
    ]
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
