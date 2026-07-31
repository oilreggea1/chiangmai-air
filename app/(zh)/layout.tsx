import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Shell, baseMetadata, baseViewport } from "@/components/Shell";
import { site } from "@/lib/site";

/** root layout ของหน้าภาษาจีน แยกออกมาเพื่อให้ <html lang> เป็น zh-CN ไม่ใช่ th */
export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "清迈空调清洗维修 | Pro Fresh Care 泰国清迈",
    template: "%s | Pro Fresh Care 清迈",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: site.legalNameEn,
    url: `${site.url}/zh`,
  },
};

export const viewport: Viewport = baseViewport;

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="zh-CN">{children}</Shell>;
}
