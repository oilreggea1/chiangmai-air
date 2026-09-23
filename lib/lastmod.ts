/**
 * วันที่แก้ไขล่าสุดจริงของไฟล์ต้นทาง อ่านจาก lib/lastmod.json ที่ scripts/lastmod.mjs สร้างจาก git
 * ใช้กับ sitemap (lastModified) วันที่ "อัปเดตล่าสุด" บนหน้า และ dateModified ใน schema
 * ห้ามใช้ new Date() ตอน build แทน เพราะจะกลายเป็น "ทุกหน้าเปลี่ยนทุกครั้งที่ deploy" ซึ่ง Google ไม่เชื่อ
 */
import data from "./lastmod.json";

const files = data.files as Record<string, string>;

/** ไฟล์ต้นทางที่ใช้บ่อย ตั้งชื่อไว้ที่เดียวกันพิมพ์ path ผิด */
export const SRC = {
  home: "app/(th)/page.tsx",
  site: "lib/site.ts",
  reels: "components/ReelsShowcase.tsx",
  servicePage: "app/(th)/service/[slug]/page.tsx",
  areaPage: "app/(th)/area/[slug]/page.tsx",
  segments: "lib/segments.ts",
  brands: "lib/brands.ts",
  repair: "lib/repair.ts",
  repairGuides: "lib/repair-guides.ts",
  workCases: "lib/work-cases.ts",
} as const;

/** วันที่ล่าสุดในบรรดาไฟล์ที่ให้มา (ISO YYYY-MM-DD) ถ้าไม่รู้จักไฟล์เลย ใช้วันที่สร้าง JSON */
export function lastmodIso(...paths: string[]): string {
  let best = "";
  for (const p of paths) {
    const d = files[p];
    if (d && d > best) best = d;
  }
  return best || data.generatedAt;
}

export function lastmodOf(...paths: string[]): Date {
  return new Date(lastmodIso(...paths));
}

/** วันที่แบบไทย เช่น 24 กันยายน 2569 */
export function thaiDate(iso: string): string {
  return new Date(iso).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" });
}
