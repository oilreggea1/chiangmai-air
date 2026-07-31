import type { MetadataRoute } from "next";
import { site, services, areas, portfolio } from "@/lib/site";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/price", priority: 0.9, freq: "monthly" as const },
    { path: "/price/repair", priority: 0.9, freq: "monthly" as const },
    { path: "/pm25", priority: 0.9, freq: "monthly" as const },
    { path: "/blog", priority: 0.8, freq: "weekly" as const },
    { path: "/area", priority: 0.8, freq: "monthly" as const },
    { path: "/about", priority: 0.7, freq: "monthly" as const },
    { path: "/portfolio", priority: 0.7, freq: "monthly" as const },
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
    ...services.map((s) => ({
      url: `${site.url}/service/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...portfolio.map((c) => ({
      url: `${site.url}/portfolio/${c.key}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
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
    })),
  ];
}
