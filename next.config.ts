import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * เลิกฝัง CSS ลงใน HTML (12 ส.ค. 2569)
   *
   * เดิมเปิด experimental.inlineCss ไว้ตอนที่ CSS ทั้งเว็บมีแค่ 11 KB
   * เหตุผลตอนนั้นถูกต้อง คือตัดการรอโหลดไฟล์ CSS ที่บล็อกการแสดงผล 150–380 ms
   *
   * แต่ตอนนี้ CSS โตเป็น 60 KB และ Next ยังใส่ซ้ำลงใน RSC payload อีกชุด
   * วัดจาก HTML จริงของหน้าแรก: CSS ถูกส่งซ้ำรวม 171 KB ต่อการเปิดหนึ่งหน้า
   * (60 KB ใน <style> + 110 KB ใน payload) ทำให้ HTML บวมเป็น 542 KB
   *
   * วัด A/B ด้วย Lighthouse ฝั่งละ 3 รอบบน build จริง เทียบค่ากลาง:
   *   HTML ที่ส่งจริง  84 KB -> 50 KB   (ลด 40%)
   *   Total Blocking Time  118 -> 68 ms (ลด 42%)
   *   Speed Index    3,106 -> 2,643 ms
   *   LCP            4,941 -> 4,850 ms
   * สองรายการแรกดีขึ้นแน่นอนและไม่แกว่ง ส่วน LCP กับ Speed Index ดีขึ้นในทิศทางเดียวกัน
   * แต่ค่าดิบยังเหลื่อมกันระหว่างรอบ จึงไม่นับเป็นผลที่ยืนยันได้จากการทดสอบนี้
   *
   * ถ้าจะเปิดกลับ ต้องวัด A/B ใหม่ อย่าเปิดเพราะเคยเปิดไว้เฉย ๆ
   */
  images: {
    /**
     * เลิกส่งรูปผ่านตัวแปลงภาพของ Vercel (11 ส.ค. 2569)
     *
     * อาการ: รูปผลงานบนเว็บจริงหายไปเป็นช่อง ๆ บางรูปขึ้นบางรูปไม่ขึ้น
     * สาเหตุ: /_next/image ตอบ HTTP 402 พร้อมหัวข้อ x-vercel-error เป็น
     * OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED แปลว่าโควตาการแปลงภาพของแพ็กเกจหมดแล้ว
     * รูปที่เคยแปลงและยังอยู่ในแคชจึงขึ้นตามปกติ ส่วนรูปที่ยังไม่เคยแปลงกลายเป็นช่องว่าง
     *
     * ทำไมโควตาหมด: โฟลเดอร์ public/work มีรูป 1,215 ไฟล์ และแต่ละไฟล์ถูกขอผ่าน srcset
     * ได้ถึง 8 ความกว้าง หน้าหมวดผลงานหน้าเดียวแสดง 96 ภาพ เมื่อรวมทุกหมวดและหน้าย่อย
     * จำนวนการแปลงจึงเกินโควตารายเดือนไปมาก และจะเกินอีกทุกเดือนถ้าไม่แก้ที่ต้นเหตุ
     *
     * ทำไมปิดได้โดยไม่เสียคุณภาพมาก: รูปในโฟลเดอร์นี้ถูกย่อมาก่อนแล้ว
     * ด้านกว้างอยู่ราว 720–1,108 พิกเซล ขนาดไฟล์กลาง ๆ ราว 116 KB
     * ตัวแปลงภาพจึงช่วยได้ไม่มากเมื่อเทียบกับการที่รูปหายทั้งเว็บ
     * และไฟล์ใน /work มีหัวข้อแคชหนึ่งปีแบบ immutable อยู่แล้ว (ดู headers ด้านล่าง)
     *
     * ที่ยังได้เหมือนเดิม: next/image ยังกำหนดขนาดกันภาพกระโดด (CLS)
     * ยังโหลดแบบ lazy และยังใช้ priority กับรูป LCP ได้ตามปกติ
     * สิ่งที่หายไปคือการแปลงเป็น AVIF/WebP และการย่อตามความกว้างจอเท่านั้น
     *
     * ถ้าจะเปิดกลับ: ต้องอัปเกรดแพ็กเกจ Vercel หรือทำภาพย่อ (thumbnail) ของหน้าผลงาน
     * เก็บไว้ในโปรเจกต์ก่อน แล้วค่อยเปิด ไม่งั้นจะกลับไป 402 เหมือนเดิมภายในเดือนเดียว
     */
    unoptimized: true,
  },
  poweredByHeader: false,
  async redirects() {
    // URL เก่าจาก WordPress ที่ Google อาจเก็บ index ไว้ ต้อง 301 มาหน้าใหม่
    // ไม่งั้นจะกลายเป็น 404 แล้วเสียอันดับที่มีอยู่
    return [
      /**
       * www ตอบ 200 ด้วยเนื้อหาชุดเดียวกับโดเมนหลัก (ตรวจพบ 13 ก.ย. 2569)
       * canonical ชี้กลับโดเมนหลักอยู่แล้ว แต่ canonical เป็นแค่คำแนะนำ
       * 301 ตรง ๆ ชัดกว่าและรวมสัญญาณลิงก์มาที่ที่อยู่เดียว
       */
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--72cahb0jef1en2cxb8ik9a5dn3d.com" }],
        destination: "https://xn--72cahb0jef1en2cxb8ik9a5dn3d.com/:path*",
        permanent: true,
      },

      // เคสนี้มีรูปใบเดียวและเป็นรูปที่เห็นเท้าเปล่า เจ้าของสั่งเอาออก 25 ก.ย. 2569
      // เมื่อไม่มีรูปเหลือเลยจึงเอารายงานออกทั้งเคส แล้วส่งต่อไปหน้ารวมรายงาน
      { source: "/case-study/air-capacitor-measurement", destination: "/case-study", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },

      // หน้าพื้นที่ที่ยกเลิกไปตอนย่อเขตบริการเหลือ 10 กม. (31 ก.ค. 2569)
      // Google เคยเก็บ URL เหล่านี้ไว้แล้ว ถ้าปล่อยเป็น 404 จะเสียสัญญาณที่สะสมมา
      // จึงชี้ไปหน้าที่รับช่วงเนื้อหาต่อจริง ไม่ใช่โยนกลับหน้าแรก
      // /area/san-sai เคย 301 ไป /area/san-phra-net ตอนย่อเขตบริการ
      // เจ้าของเปิดรับ อ.สันทราย ทั้งอำเภอ 24 ก.ย. 2569 จึงเอาออกให้หน้าจริงทำงาน
      // หมายเหตุ: /area/hang-dong เคย 301 ไป /area/mae-hia ตอนย่อเขตบริการ
      // เจ้าของเปิดรับ อ.หางดง ทั้งอำเภออีกครั้ง 24 ก.ย. 2569 จึงเอา redirect ออกให้หน้าจริงทำงาน
      { source: "/area/mae-on", destination: "/area", permanent: true },
      // แม่ริมอยู่นอกรัศมี 10 กม. เช่นเดียวกับแม่ออน แต่ตอนตัดหน้าออกลืมทำ 301 ไว้
      // Search Console จึงรายงานเป็น 404 หนึ่งรายการมาตั้งแต่ 17 ส.ค. 2569 (ตรวจพบ 13 ก.ย.)
      { source: "/area/mae-rim", destination: "/area", permanent: true },

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
          /**
           * ปิดสิทธิ์อุปกรณ์ที่เว็บนี้ไม่ได้ใช้เลย (13 ก.ย. 2569)
           * ถ้ามีสคริปต์แปลกปลอมหลุดเข้ามา จะขอกล้อง ไมค์ หรือตำแหน่งจากผู้ชมไม่ได้
           */
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          /**
           * CSP ชั้นพื้นฐาน (13 ก.ย. 2569)
           *
           * ตั้งเท่าที่หน้าเว็บจริงใช้อยู่: ทรัพยากรทั้งหมดมาจากโดเมนตัวเอง
           * ยกเว้นแผนที่ฝังในหน้า /contact ที่มาจาก maps.google.com
           *
           * ยังต้องเปิด 'unsafe-inline' ให้ script เพราะ Next วาง inline script
           * สำหรับ hydration ทุกหน้า ถ้าจะตัดออกต้องเปลี่ยนไปใช้ nonce ซึ่งบังคับให้
           * ทุกหน้าเป็น dynamic และเสียการ prerender ที่เว็บนี้พึ่งอยู่
           * ที่ได้จริงจากชุดนี้คือ object-src/base-uri/form-action/frame-src
           * ซึ่งปิดช่องยัดปลั๊กอิน เปลี่ยนฐาน URL และส่งฟอร์มออกนอกโดเมน
           */
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "media-src 'self'",
              "font-src 'self' data:",
              "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
              "frame-src https://maps.google.com https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
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
