import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Shell, baseMetadata, baseViewport } from "@/components/Shell";
import { site } from "@/lib/site";

/** root layout ของหน้าภาษาอังกฤษ แยกออกมาเพื่อให้ <html lang> เป็น en ไม่ใช่ th */
export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "Aircon Cleaning & AC Repair in Chiang Mai | Pro Fresh Care",
    template: "%s | Pro Fresh Care Chiang Mai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.legalNameEn,
    url: `${site.url}/en`,
  },
};

export const viewport: Viewport = baseViewport;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
