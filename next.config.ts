import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    // URL เก่าจาก WordPress ที่ Google อาจเก็บ index ไว้ ต้อง 301 มาหน้าใหม่
    // ไม่งั้นจะกลายเป็น 404 แล้วเสียอันดับที่มีอยู่
    return [
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        // รูปผลงานไม่เปลี่ยนแล้ว แคชยาวได้เลย ช่วย Core Web Vitals
        source: "/work/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
