import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // ประกาศให้ชัดเจนตามคู่มือ Publisher ของ OpenAI แม้กฎ * ด้านบนอนุญาตอยู่แล้ว
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
    ],
    sitemap: [`${site.url}/sitemap.xml`, `${site.url}/video-sitemap.xml`],
    host: site.url,
  };
}
