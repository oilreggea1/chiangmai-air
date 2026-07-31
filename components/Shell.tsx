import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { site } from "@/lib/site";
import { localBusinessSchema, websiteSchema, jsonLd } from "@/lib/schema";
// Vercel Analytics ไม่ใช้คุกกี้และไม่เก็บข้อมูลระบุตัวตน จึงไม่ต้องมีแบนเนอร์ขอความยินยอมตาม PDPA
import { Analytics } from "@vercel/analytics/next";

/**
 * โครงหน้าที่ใช้ร่วมกันของทุกภาษา
 *
 * เว็บมี root layout สามชุด (ไทย อังกฤษ จีน) เพราะ Next ตั้ง <html lang> ได้ที่ root layout
 * เท่านั้น ถ้าใช้ layout เดียวทั้งเว็บ หน้าอังกฤษกับจีนจะถูกประกาศว่าเป็นภาษาไทย
 * ซึ่งขัดกับ hreflang และ og:locale ของตัวเอง
 *
 * ส่วนที่เหมือนกันทุกภาษาอยู่ในไฟล์นี้ที่เดียว เพื่อไม่ให้ทั้งสามชุดค่อย ๆ เพี้ยนออกจากกัน
 */
const thai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-thai",
  display: "swap",
});

/** เมตาที่เหมือนกันทุกภาษา ภาษาแต่ละชุดเอาไปกระจายต่อแล้วเติมส่วนของตัวเอง */
export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: {
    languages: { "th-TH": "/", "en-US": "/en", "zh-CN": "/zh", "x-default": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // เก็บ verification เดิมของ Search Console ไว้ ไม่งั้นต้องยืนยันสิทธิ์ใหม่
  verification: {
    google: "isjs4u6Kgw7maBmLaOhLQc32zpw74pXuOwd5epvip9c",
  },
  other: {
    "geo.region": "TH-50",
    "geo.placename": "Chiang Mai",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export const baseViewport: Viewport = {
  themeColor: "#1c79d8",
  width: "device-width",
  initialScale: 1,
};

/** ข้อความปุ่มข้ามไปเนื้อหาหลัก แปลตามภาษาของหน้า */
const SKIP: Record<string, string> = {
  th: "ข้ามไปยังเนื้อหาหลัก",
  en: "Skip to main content",
  "zh-CN": "跳到主要内容",
};

export function Shell({ lang, children }: { lang: "th" | "en" | "zh-CN"; children: React.ReactNode }) {
  return (
    <html lang={lang} className={thai.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localBusinessSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          {SKIP[lang]}
        </a>
        <Header />
        <main id="main" className="pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCta />
        <Analytics />
      </body>
    </html>
  );
}
