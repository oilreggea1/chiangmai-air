import type { MetadataRoute } from "next";
import { site, services, areas, portfolio, heroPhotos } from "@/lib/site";
import { articles } from "@/content/articles";
import { repairGuides } from "@/lib/repair-guides";
import { workCases } from "@/lib/work-cases";
import { segments } from "@/lib/segments";
import { brands } from "@/lib/brands";
import { lastmodOf, SRC } from "@/lib/lastmod";

/**
 * lastModified ต้องเป็นวันที่แก้ไขจริง (24 ก.ย. 2569)
 * เดิมใส่ new Date() ตอน build ให้ทุก URL = บอก Google ว่าทั้ง 140 หน้าเปลี่ยนทุกครั้งที่ deploy
 * Google ระบุชัดว่าถ้า lastmod ไม่ตรงกับการเปลี่ยนแปลงจริง จะเลิกใช้ค่านี้ทั้งไซต์
 * ตอนนี้ดึงจาก lib/lastmod.json (git log ของไฟล์ต้นทางแต่ละหน้า) ผ่าน lastmodOf()
 */
function thPage(path: string) {
  return `app/(th)${path}/page.tsx`;
}
/** ไฟล์ข้อมูลเพิ่มเติมที่หน้านั้นดึงมาแสดง นอกจากไฟล์หน้าเอง */
const extraSources: Record<string, string[]> = {
  "/": [SRC.site, SRC.reels],
  "/price": [SRC.site],
  "/price/repair": [SRC.repair, SRC.site],
  "/price/washing-machine": [SRC.site],
  "/area": [SRC.site],
  "/customer": [SRC.segments],
  "/brand": [SRC.brands],
  "/portfolio": [SRC.site],
  "/videos": [SRC.reels],
  "/case-study": [SRC.workCases],
  "/answers": [SRC.site],
};
function staticLastmod(path: string) {
  const page = path.startsWith("/en") ? `app/(en)${path}/page.tsx` : path.startsWith("/zh") ? `app/(zh)${path}/page.tsx` : thPage(path);
  return lastmodOf(page, ...(extraSources[path] ?? []));
}
const latestArticle = articles.map((a) => a.updated).sort().at(-1) ?? "";

export default function sitemap(): MetadataRoute.Sitemap {

  const staticPages = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/price", priority: 0.9, freq: "monthly" as const },
    { path: "/price/repair", priority: 0.9, freq: "monthly" as const },
    { path: "/price/washing-machine", priority: 0.9, freq: "monthly" as const },
    { path: "/pm25", priority: 0.9, freq: "monthly" as const },
    { path: "/blog", priority: 0.8, freq: "weekly" as const },
    { path: "/area", priority: 0.8, freq: "monthly" as const },
    { path: "/customer", priority: 0.9, freq: "monthly" as const },
    { path: "/brand", priority: 0.9, freq: "monthly" as const },
    { path: "/duan", priority: 0.9, freq: "monthly" as const },
    { path: "/about", priority: 0.7, freq: "monthly" as const },
    { path: "/portfolio", priority: 0.7, freq: "monthly" as const },
    { path: "/videos", priority: 0.7, freq: "monthly" as const },
    { path: "/answers", priority: 0.9, freq: "monthly" as const },
    { path: "/case-study", priority: 0.8, freq: "monthly" as const },
    { path: "/contact", priority: 0.8, freq: "monthly" as const },
    { path: "/en", priority: 0.7, freq: "monthly" as const },
    { path: "/en/pricing", priority: 0.7, freq: "monthly" as const },
    { path: "/en/areas", priority: 0.6, freq: "monthly" as const },
    { path: "/en/airbnb", priority: 0.7, freq: "monthly" as const },
    { path: "/zh", priority: 0.7, freq: "monthly" as const },
    { path: "/zh/pricing", priority: 0.7, freq: "monthly" as const },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: p.path === "/blog" ? new Date(latestArticle) : staticLastmod(p.path),
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...brands.map((b) => ({
      url: `${site.url}/brand/${b.slug}`,
      lastModified: lastmodOf(SRC.brands, thPage("/brand/[slug]")),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...segments.map((s) => ({
      url: `${site.url}/customer/${s.slug}`,
      lastModified: lastmodOf(SRC.segments, thPage("/customer/[slug]")),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...services.map((s) => ({
      url: `${site.url}/service/${s.slug}`,
      lastModified: lastmodOf(SRC.site, SRC.servicePage),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: heroPhotos.service[s.slug] ? [`${site.url}${heroPhotos.service[s.slug].src}`] : undefined,
    })),
    ...repairGuides.map((guide) => ({
      url: `${site.url}/repair/${guide.slug}`,
      lastModified: lastmodOf(SRC.repairGuides, thPage("/repair/[slug]")),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...workCases.map((item) => ({
      url: `${site.url}/case-study/${item.slug}`,
      lastModified: lastmodOf(SRC.workCases, thPage("/case-study/[slug]")),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: item.images.map((image) => `${site.url}${image.src}`),
    })),
    // หน้าหมวดผลงาน ประกาศรูปในหน้าให้ Google Images เก็บ index ได้ตรงหน้า
    // หน้าแรกของหมวดแสดง 96 ภาพ จึงประกาศเท่าที่แสดงจริง ไม่ประกาศเกินสิ่งที่อยู่บนหน้า
    ...portfolio.map((c) => ({
      url: `${site.url}/portfolio/${c.key}`,
      lastModified: lastmodOf(SRC.site, thPage("/portfolio/[key]")),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: c.photos.slice(0, 96).map((g) => `${site.url}${g.src}`),
    })),
    ...areas.map((a) => ({
      url: `${site.url}/area/${a.slug}`,
      lastModified: lastmodOf(SRC.site, SRC.areaPage),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/blog/${a.slug}`,
      // ใช้วันที่ล่าสุดระหว่างที่ผู้เขียนระบุ (updated) กับวันที่ไฟล์ถูกแก้จริงใน git
      lastModified: new Date([a.updated, lastmodOf(`content/articles/${a.slug}.ts`).toISOString().slice(0, 10)].sort().at(-1)!),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: a.image ? [`${site.url}${a.image.src}`] : undefined,
    })),
  ];
}
