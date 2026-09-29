import type { IntlCaseText } from "@/lib/content-types";
import { part as en1 } from "./en/part1";
import { part as en2 } from "./en/part2";
import { part as zh1 } from "./zh/part1";
import { part as zh2 } from "./zh/part2";

/**
 * รายงานเคสฉบับอังกฤษ/จีน (29 ก.ย. 2569) แปลจาก workCases ใน lib/work-cases.ts ทีละ slug
 * รูปใช้ชุดเดียวกับฉบับไทย alts เรียงตาม images ของฉบับไทย
 */
const en: Record<string, IntlCaseText> = { ...en1, ...en2 };
const zh: Record<string, IntlCaseText> = { ...zh1, ...zh2 };

export type IntlLang = "en" | "zh-CN";
export const caseText = (lang: IntlLang, slug: string): IntlCaseText | undefined => (lang === "en" ? en : zh)[slug];
export const caseTranslated = (slug: string) => Boolean(en[slug] && zh[slug]);
