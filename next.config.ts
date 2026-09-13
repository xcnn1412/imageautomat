import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,

  // Redirect old/broken URLs to homepage (301 permanent)
  redirects: async () => [
    {
      source: '/product-category/:path*',
      destination: '/',
      permanent: true,
    },
    // ponytail: URL เดิม → URL ใหม่ (SEO) — 301 กันลิงก์เก่าและอันดับที่มีอยู่หาย
    { source: '/product/:path*', destination: '/buy-photo-booth/:path*', permanent: true },
    { source: '/software/:path*', destination: '/photo-booth-software/:path*', permanent: true },
    { source: '/oem/:path*', destination: '/oem-photo-booth/:path*', permanent: true },
    { source: '/rental/:path*', destination: '/photo-booth-rental-revenue-share/:path*', permanent: true },
    { source: '/shop/:path*', destination: '/shop-credit-card-payment/:path*', permanent: true },
    { source: '/product', destination: '/buy-photo-booth', permanent: true },
    { source: '/software', destination: '/photo-booth-software', permanent: true },
    { source: '/oem', destination: '/oem-photo-booth', permanent: true },
    { source: '/rental', destination: '/photo-booth-rental-revenue-share', permanent: true },
    { source: '/shop', destination: '/shop-credit-card-payment', permanent: true },
  ],

  turbopack: {
    root: process.cwd(),
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 50, 75, 80],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [{ protocol: 'https', hostname: '**.t3.storageapi.dev' }], // รูปอัปโหลด S3 (Tigris)
  },

  // ponytail: ตั้ง Cache-Control เฉพาะ asset ใน public/ — /_next/static Next จัดการ immutable ให้เองแล้ว (ตั้งซ้ำ = warning + เพี้ยนตอน dev)
  headers: async () => [
    {
      source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|mp4)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};

export default nextConfig;
