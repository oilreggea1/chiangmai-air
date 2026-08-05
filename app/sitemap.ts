import type { MetadataRoute } from "next";
import { site, services, areas, portfolio, heroPhotos } from "@/lib/site";
import { articles } from "@/content/articles";
import { repairGuides } from "@/lib/repair-guides";
import { workCases } from "@/lib/work-cases";
import { segments } from "@/lib/segments";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/price", priority: 0.9, freq: "monthly" as const },
    { path: "/price/repair", priority: 0.9, freq: "monthly" as const },
    { path: "/pm25", priority: 0.9, freq: "monthly" as const },
    { path: "/blog", priority: 0.8, freq: "weekly" as const },
    { path: "/area", priority: 0.8, freq: "monthly" as const },
    { path: "/customer", priority: 0.9, freq: "monthly" as const },
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
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...segments.map((s) => ({
      url: `${site.url}/customer/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...services.map((s) => ({
      url: `${site.url}/service/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: heroPhotos.service[s.slug] ? [`${site.url}${heroPhotos.service[s.slug].src}`] : undefined,
    })),
    ...repairGuides.map((guide) => ({
      url: `${site.url}/repair/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...workCases.map((item) => ({
      url: `${site.url}/case-study/${item.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: item.images.map((image) => `${site.url}${image.src}`),
    })),
    // หน้าหมวดผลงาน ประกาศรูปในหน้าให้ Google Images เก็บ index ได้ตรงหน้า
    // หน้าแรกของหมวดแสดง 96 ภาพ จึงประกาศเท่าที่แสดงจริง ไม่ประกาศเกินสิ่งที่อยู่บนหน้า
    ...portfolio.map((c) => ({
      url: `${site.url}/portfolio/${c.key}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: c.photos.slice(0, 96).map((g) => `${site.url}${g.src}`),
    })),
    ...areas.map((a) => ({
      url: `${site.url}/area/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/blog/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: a.image ? [`${site.url}${a.image.src}`] : undefined,
    })),
  ];
}
