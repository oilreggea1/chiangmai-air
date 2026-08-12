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
