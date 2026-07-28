import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { site } from "@/lib/site";
import { localBusinessSchema, websiteSchema, jsonLd } from "@/lib/schema";

const thai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ช่างแอร์เชียงใหม่ ล้างแอร์ ซ่อมแอร์ ถึงบ้าน | โปรเฟรชแคร์ 065-365-7673",
    template: "%s | ช่างแอร์เชียงใหม่ โปรเฟรชแคร์",
  },
  description:
    "ช่างแอร์เชียงใหม่ ล้างแอร์เริ่ม 550 บาท ซ่อมแอร์ด่วน 24 ชม. ติดตั้งและย้ายแอร์ถึงบ้าน ครอบคลุมสันกำแพง ต้นเปา และอำเภอเมืองเชียงใหม่ แจ้งราคาก่อนเริ่มงาน รับประกันผลงาน โทร 065-365-7673",
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "ช่างแอร์เชียงใหม่", "ล้างแอร์เชียงใหม่", "ซ่อมแอร์เชียงใหม่",
    "ติดตั้งแอร์เชียงใหม่", "ย้ายแอร์เชียงใหม่", "ช่างแอร์สันกำแพง",
    "ล้างแอร์ใกล้ฉัน", "ช่างแอร์ต้นเปา", "ล้างแอร์คอนโดเชียงใหม่",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: site.name,
    url: site.url,
    title: "ช่างแอร์เชียงใหม่ ล้างแอร์ ซ่อมแอร์ ถึงบ้าน | โปรเฟรชแคร์",
    description:
      "ล้างแอร์เริ่ม 550 บาท ซ่อมแอร์ด่วนภายใน 24 ชม. ติดตั้งและย้ายแอร์ทั่วเชียงใหม่ แจ้งราคาชัดเจนก่อนเริ่มงาน",
  },
  twitter: {
    card: "summary_large_image",
    title: "ช่างแอร์เชียงใหม่ ล้างแอร์ ซ่อมแอร์ ถึงบ้าน",
    description: "ล้างแอร์เริ่ม 550 บาท ซ่อมแอร์ด่วน 24 ชม. ทั่วเชียงใหม่",
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

export const viewport: Viewport = {
  themeColor: "#1c79d8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={thai.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localBusinessSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <Header />
        <main id="main" className="pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
