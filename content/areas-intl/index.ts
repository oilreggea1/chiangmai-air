import type { IntlAreaText } from "@/lib/content-types";
import { part as en1 } from "./en/part1";
import { part as en2 } from "./en/part2";
import { part as en3 } from "./en/part3";
import { part as en4 } from "./en/part4";
import { part as zh1 } from "./zh/part1";
import { part as zh2 } from "./zh/part2";
import { part as zh3 } from "./zh/part3";
import { part as zh4 } from "./zh/part4";

/**
 * หน้าพื้นที่ฉบับอังกฤษ/จีน (29 ก.ย. 2569) แปลจาก areas ใน lib/site.ts ทีละ slug
 * เพิ่มพื้นที่ใหม่ในไทยแล้วต้องเพิ่มคำแปลที่นี่ด้วย ไม่งั้นหน้าต่างประเทศของพื้นที่นั้นจะไม่ถูกสร้าง
 */
const en: Record<string, IntlAreaText> = { ...en1, ...en2, ...en3, ...en4 };
const zh: Record<string, IntlAreaText> = { ...zh1, ...zh2, ...zh3, ...zh4 };

export type IntlLang = "en" | "zh-CN";
export const areaTexts = (lang: IntlLang) => (lang === "en" ? en : zh);
export const areaText = (lang: IntlLang, slug: string): IntlAreaText | undefined => areaTexts(lang)[slug];
/** มีคำแปลครบทั้งสองภาษาหรือไม่ ใช้ตัดสินว่าจะประกาศ hreflang จากหน้าไทย */
export const areaTranslated = (slug: string) => Boolean(en[slug] && zh[slug]);
