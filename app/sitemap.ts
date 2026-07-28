import type { MetadataRoute } from "next";
import { site, services, areas } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/price", priority: 0.9, freq: "monthly" as const },
    { path: "/area", priority: 0.8, freq: "monthly" as const },
    { path: "/portfolio", priority: 0.7, freq: "monthly" as const },
    { path: "/contact", priority: 0.8, freq: "monthly" as const },
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
    ...areas.map((a) => ({
      url: `${site.url}/area/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
