import type { MetadataRoute } from "next";
import { site, services, areas, portfolio, heroPhotos } from "@/lib/site";
import { articles } from "@/content/articles";
import { repairGuides } from "@/lib/repair-guides";
import { workCases } from "@/lib/work-cases";
import { jobs } from "@/lib/jobs";
import { enArticles, zhArticles } from "@/content/articles-intl";
import { intlAreaSlugs } from "@/components/IntlArea";
import { intlCaseSlugs } from "@/components/IntlCase";
import { condoBrands } from "@/lib/condo-brands";
import { condoDirectory } from "@/lib/condo-directory";
import { condoIndexable } from "@/components/CondoDetail";
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
  "/kon-lang": [SRC.jobs],
  "/en/work": [SRC.jobs],
  "/zh/work": [SRC.jobs],
  "/answers": [SRC.site],
  "/ngueankhai-borikan": [SRC.site],
  "/en/service-terms": [SRC.site],
  "/zh/service-terms": [SRC.site],
  "/en/pricing": [SRC.site],
  "/en/installation": [SRC.site],
  "/en/washing-machine": [SRC.site],
  "/en/repair": [SRC.site],
  "/zh/pricing": [SRC.site],
  "/zh/installation": [SRC.site],
  "/zh/washing-machine": [SRC.site],
  "/zh/areas": [SRC.site],
  "/zh/repair": [SRC.site],
  "/zh/condo": [SRC.site],
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
    // ตารางเงื่อนไขบริการ 3 ภาษา (4 ต.ค. 2569) หน้าที่ AI ใช้เทียบราคา/ประกัน/ค่าเดินทาง
    { path: "/ngueankhai-borikan", priority: 0.9, freq: "monthly" as const },
    { path: "/en/service-terms", priority: 0.7, freq: "monthly" as const },
    { path: "/zh/service-terms", priority: 0.7, freq: "monthly" as const },
    { path: "/case-study", priority: 0.8, freq: "monthly" as const },
    { path: "/kon-lang", priority: 0.8, freq: "monthly" as const },
    { path: "/contact", priority: 0.8, freq: "monthly" as const },
    { path: "/en", priority: 0.7, freq: "monthly" as const },
    { path: "/en/pricing", priority: 0.7, freq: "monthly" as const },
    { path: "/en/areas", priority: 0.6, freq: "monthly" as const },
    { path: "/en/condo", priority: 0.7, freq: "monthly" as const },
    { path: "/en/airbnb", priority: 0.7, freq: "monthly" as const },
    { path: "/en/installation", priority: 0.7, freq: "monthly" as const },
    { path: "/en/washing-machine", priority: 0.7, freq: "monthly" as const },
    { path: "/en/repair", priority: 0.8, freq: "monthly" as const },
    { path: "/en/about", priority: 0.6, freq: "monthly" as const },
    { path: "/en/work", priority: 0.7, freq: "monthly" as const },
    { path: "/en/blog", priority: 0.6, freq: "monthly" as const },
    { path: "/en/case-study", priority: 0.6, freq: "monthly" as const },
    { path: "/zh", priority: 0.7, freq: "monthly" as const },
    { path: "/zh/pricing", priority: 0.7, freq: "monthly" as const },
    { path: "/zh/installation", priority: 0.7, freq: "monthly" as const },
    { path: "/zh/washing-machine", priority: 0.7, freq: "monthly" as const },
    { path: "/zh/about", priority: 0.6, freq: "monthly" as const },
    { path: "/zh/areas", priority: 0.7, freq: "monthly" as const },
    { path: "/zh/repair", priority: 0.8, freq: "monthly" as const },
    { path: "/zh/condo", priority: 0.8, freq: "monthly" as const },
    { path: "/zh/work", priority: 0.7, freq: "monthly" as const },
    { path: "/zh/blog", priority: 0.6, freq: "monthly" as const },
    { path: "/zh/case-study", priority: 0.6, freq: "monthly" as const },
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
    // บทความแปลอังกฤษ/จีน (29 ก.ย. 2569)
    ...[...enArticles.map((a) => ({ a, base: "/en/blog" })), ...zhArticles.map((a) => ({ a, base: "/zh/blog" }))].map(({ a, base }) => ({
      url: `${site.url}${base}/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // ทำเนียบคอนโดและหน้าแบรนด์ 3 ภาษา (29 ก.ย. 2569)
    ...["/condo", "/en/condo/directory", "/zh/condo/directory", ...condoBrands.flatMap((b) => [`/condo/${b.slug}`, `/en/condo/${b.slug}`, `/zh/condo/${b.slug}`]), ...condoDirectory.filter((c) => condoIndexable(c)).map((c) => `/condo/${c.s}`)].map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // รายงานเคสและหน้าพื้นที่ฉบับอังกฤษ/จีน (29 ก.ย. 2569)
    ...(["en", "zh-CN"] as const).flatMap((lang) => {
      const pre = lang === "en" ? "/en" : "/zh";
      return [
        ...intlCaseSlugs(lang).map((slug) => ({
          url: `${site.url}${pre}/case-study/${slug}`,
          lastModified: lastmodOf(SRC.workCases, thPage("/case-study/[slug]")),
          changeFrequency: "yearly" as const,
          priority: 0.5,
        })),
        ...intlAreaSlugs(lang).map((slug) => ({
          url: `${site.url}${pre}/areas/${slug}`,
          lastModified: lastmodOf(SRC.site, thPage("/area/[slug]")),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        })),
      ];
    }),
    // หน้าเรื่องของแต่ละงาน รูปครบทุกใบ (29 ก.ย. 2569)
    ...jobs.map((j) => ({
      url: `${site.url}/kon-lang/${j.id}`,
      lastModified: lastmodOf(SRC.jobs, thPage("/kon-lang/[id]")),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [...j.before, ...j.during, ...j.after].map((x) => `${site.url}${x.src}`),
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
