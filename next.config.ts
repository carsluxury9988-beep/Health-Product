import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Required because the site has two root layouts (BM and EN) with different <html lang>.
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The old email-based confirmation pages no longer exist; orders are confirmed on WhatsApp.
      { source: "/pesanan/pengesahan", destination: "/pesanan", permanent: true },
      { source: "/pesanan/pengesahan/:path*", destination: "/pesanan", permanent: true },
      { source: "/en/order/confirmation", destination: "/en/order", permanent: true },
      { source: "/en/order/confirmation/:path*", destination: "/en/order", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
