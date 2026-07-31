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

      // หน้าพื้นที่ที่ยกเลิกไปตอนย่อเขตบริการเหลือ 10 กม. (31 ก.ค. 2569)
      // Google เคยเก็บ URL เหล่านี้ไว้แล้ว ถ้าปล่อยเป็น 404 จะเสียสัญญาณที่สะสมมา
      // จึงชี้ไปหน้าที่รับช่วงเนื้อหาต่อจริง ไม่ใช่โยนกลับหน้าแรก
      { source: "/area/san-sai", destination: "/area/san-phra-net", permanent: true },
      { source: "/area/hang-dong", destination: "/area/mae-hia", permanent: true },
      { source: "/area/mae-on", destination: "/area", permanent: true },

      // หมวดผลงานที่ตัดออกเพราะเจ้าของไม่ได้รับซ่อมเครื่องซักผ้า รับเฉพาะงานล้าง
      { source: "/portfolio/wm-repair", destination: "/portfolio/wm-top", permanent: true },
      { source: "/portfolio/wm-repair/:page", destination: "/portfolio/wm-top", permanent: true },
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
