import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // /leads เป็นหน้าสถิติภายในของเจ้าของร้าน ไม่ควรอยู่ในผลค้นหา
      // หน้านั้นตั้ง noindex ไว้ด้วย ตรงนี้กันอีกชั้นไม่ให้ถูก crawl ตั้งแต่แรก
      { userAgent: "*", allow: "/", disallow: "/leads" },
      // ประกาศให้ชัดเจนตามคู่มือ Publisher ของ OpenAI แม้กฎ * ด้านบนอนุญาตอยู่แล้ว
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
    ],
    sitemap: [`${site.url}/sitemap.xml`, `${site.url}/video-sitemap.xml`],
    host: site.url,
  };
}
