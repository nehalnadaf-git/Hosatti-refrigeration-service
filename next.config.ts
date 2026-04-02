// next.config.ts
import type { NextConfig } from "next";

// PWA is only applied in production to avoid dev server issues
const isDev = process.env.NODE_ENV === "development";

async function getConfig(): Promise<NextConfig> {
  const baseConfig: NextConfig = {
    // Image optimization
    images: {
      formats: ["image/avif", "image/webp"],
      deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 31536000,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "hosatti.com",
        },
      ],
    },

    // Security + performance headers
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "X-XSS-Protection", value: "1; mode=block" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=(self)",
            },
          ],
        },
        {
          source: "/sw.js",
          headers: [
            { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
            { key: "Service-Worker-Allowed", value: "/" },
          ],
        },
      ];
    },

    compress: true,
  };

  if (isDev) {
    return baseConfig;
  }

  // Only wrap with PWA in production builds
  const withPWA = (await import("@ducanh2912/next-pwa")).default;
  return withPWA({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    disable: false,
    workboxOptions: {
      disableDevLogs: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "google-fonts-cache",
            expiration: { maxEntries: 10, maxAgeSeconds: 365 * 24 * 60 * 60 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif|ico)$/i,
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "image-cache",
            expiration: { maxEntries: 64, maxAgeSeconds: 30 * 24 * 60 * 60 },
          },
        },
      ],
    },
  })(baseConfig);
}

export default getConfig();
