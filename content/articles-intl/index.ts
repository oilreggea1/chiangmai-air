import type { IntlArticle } from "@/lib/content-types";

import { article as enAirSiangDang } from "./en/air-siang-dang";
import { article as zhAirSiangDang } from "./zh/air-siang-dang";
import { article as enAirTatBoi } from "./en/air-tat-boi";
import { article as zhAirTatBoi } from "./zh/air-tat-boi";
import { article as enNamYaR32R410aR22 } from "./en/nam-ya-r32-r410a-r22";
import { article as zhNamYaR32R410aR22 } from "./zh/nam-ya-r32-r410a-r22";
import { article as enAirPenNamKhaeng } from "./en/air-pen-nam-khaeng";
import { article as zhAirPenNamKhaeng } from "./zh/air-pen-nam-khaeng";
import { article as enAirNamYotKaeYangRai } from "./en/air-nam-yot-kae-yang-rai";
import { article as zhAirNamYotKaeYangRai } from "./zh/air-nam-yot-kae-yang-rai";
import { article as enChekChangLangAir } from "./en/chek-chang-lang-air";
import { article as zhChekChangLangAir } from "./zh/chek-chang-lang-air";
import { article as enRakhaLangAirChiangmai2569 } from "./en/rakha-lang-air-chiangmai-2569";
import { article as zhRakhaLangAirChiangmai2569 } from "./zh/rakha-lang-air-chiangmai-2569";
import { article as enKhopYangSakPhaKhuenRa } from "./en/khop-yang-sak-pha-khuen-ra";
import { article as zhKhopYangSakPhaKhuenRa } from "./zh/khop-yang-sak-pha-khuen-ra";
import { article as enLangKhrueangSakPhaBoiKaeNai } from "./en/lang-khrueang-sak-pha-boi-kae-nai";
import { article as zhLangKhrueangSakPhaBoiKaeNai } from "./zh/lang-khrueang-sak-pha-boi-kae-nai";
import { article as enRakhaSomAir } from "./en/rakha-som-air";
import { article as zhRakhaSomAir } from "./zh/rakha-som-air";

/**
 * บทความแปลอังกฤษ/จีน (29 ก.ย. 2569) เจ้าของสั่งให้เริ่มจากบทความที่คนค้นเยอะสุดใน Search Console
 * ลำดับอ้างอิง (แสดงผล 3 เดือน ถึง 27 ก.ย. 2569): air-siang-dang 2,325 · air-tat-boi 1,947 ·
 * nam-ya-r32-r410a-r22 1,316 · air-pen-nam-khaeng 769 · air-nam-yot-kae-yang-rai 584 ·
 * chek-chang-lang-air 351 · rakha-lang-air-chiangmai-2569 318 · khop-yang-sak-pha-khuen-ra 306 ...
 * เพิ่มบทความ = เพิ่มไฟล์ใน en/ และ zh/ ด้วย slug เดียวกับฉบับไทย แล้ว import เข้าอาร์เรย์ด้านล่าง
 */
export const enArticles: IntlArticle[] = [
  enAirSiangDang,
  enAirTatBoi,
  enNamYaR32R410aR22,
  enAirPenNamKhaeng,
  enAirNamYotKaeYangRai,
  enChekChangLangAir,
  enRakhaLangAirChiangmai2569,
  enKhopYangSakPhaKhuenRa,
  enLangKhrueangSakPhaBoiKaeNai,
  enRakhaSomAir,
];
export const zhArticles: IntlArticle[] = [
  zhAirSiangDang,
  zhAirTatBoi,
  zhNamYaR32R410aR22,
  zhAirPenNamKhaeng,
  zhAirNamYotKaeYangRai,
  zhChekChangLangAir,
  zhRakhaLangAirChiangmai2569,
  zhKhopYangSakPhaKhuenRa,
  zhLangKhrueangSakPhaBoiKaeNai,
  zhRakhaSomAir,
];

export type IntlLang = "en" | "zh-CN";
export const intlArticles = (lang: IntlLang) => (lang === "en" ? enArticles : zhArticles);
export const getIntlArticle = (lang: IntlLang, slug: string) => intlArticles(lang).find((a) => a.slug === slug);

/** ภาษาที่บทความไทย slug นี้มีฉบับแปล ใช้ประกาศ hreflang จากหน้าไทย */
export function translationsOf(slug: string) {
  return {
    en: enArticles.some((a) => a.slug === slug),
    zh: zhArticles.some((a) => a.slug === slug),
  };
}
