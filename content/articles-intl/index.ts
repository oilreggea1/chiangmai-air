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
import { article as enAirMaiYenSaHet } from "./en/air-mai-yen-sa-het";
import { article as zhAirMaiYenSaHet } from "./zh/air-mai-yen-sa-het";
import { article as enSomRueSueMai } from "./en/som-rue-sue-mai";
import { article as zhSomRueSueMai } from "./zh/som-rue-sue-mai";
import { article as enSakPhaFaNaVsFaBon } from "./en/sak-pha-fa-na-vs-fa-bon";
import { article as zhSakPhaFaNaVsFaBon } from "./zh/sak-pha-fa-na-vs-fa-bon";
import { article as enAirMenApChueaRa } from "./en/air-men-ap-chuea-ra";
import { article as zhAirMenApChueaRa } from "./zh/air-men-ap-chuea-ra";
import { article as enAirPleungFai } from "./en/air-pleung-fai";
import { article as zhAirPleungFai } from "./zh/air-pleung-fai";
import { article as enChekChangLangKhrueangSakPha } from "./en/chek-chang-lang-khrueang-sak-pha";
import { article as zhChekChangLangKhrueangSakPha } from "./zh/chek-chang-lang-khrueang-sak-pha";
import { article as enHongPlodFunChiangmai } from "./en/hong-plod-fun-chiangmai";
import { article as zhHongPlodFunChiangmai } from "./zh/hong-plod-fun-chiangmai";
import { article as enInverterVsThammada } from "./en/inverter-vs-thammada";
import { article as zhInverterVsThammada } from "./zh/inverter-vs-thammada";
import { article as enKhaTidTangAirRuamArai } from "./en/kha-tid-tang-air-ruam-arai";
import { article as zhKhaTidTangAirRuamArai } from "./zh/kha-tid-tang-air-ruam-arai";
import { article as enKhamnuanBtu } from "./en/khamnuan-btu";
import { article as zhKhamnuanBtu } from "./zh/khamnuan-btu";
import { article as enLangAirBoiKaeNai } from "./en/lang-air-boi-kae-nai";
import { article as zhLangAirBoiKaeNai } from "./zh/lang-air-boi-kae-nai";
import { article as enLangAirEngDaiMai } from "./en/lang-air-eng-dai-mai";
import { article as zhLangAirEngDaiMai } from "./zh/lang-air-eng-dai-mai";
import { article as enLangAirRanAhanCafe } from "./en/lang-air-ran-ahan-cafe";
import { article as zhLangAirRanAhanCafe } from "./zh/lang-air-ran-ahan-cafe";
import { article as enLangAirThammadaVsPremium } from "./en/lang-air-thammada-vs-premium";
import { article as zhLangAirThammadaVsPremium } from "./zh/lang-air-thammada-vs-premium";
import { article as enLangKhrueangSakPhaEngDaiMai } from "./en/lang-khrueang-sak-pha-eng-dai-mai";
import { article as zhLangKhrueangSakPhaEngDaiMai } from "./zh/lang-khrueang-sak-pha-eng-dai-mai";
import { article as enLangKhrueangSakPhaThuengBan } from "./en/lang-khrueang-sak-pha-thueng-ban";
import { article as zhLangKhrueangSakPhaThuengBan } from "./zh/lang-khrueang-sak-pha-thueng-ban";
import { article as enLangThangSakPha } from "./en/lang-thang-sak-pha";
import { article as zhLangThangSakPha } from "./zh/lang-thang-sak-pha";
import { article as enPm25LangAirChiangmai } from "./en/pm25-lang-air-chiangmai";
import { article as zhPm25LangAirChiangmai } from "./zh/pm25-lang-air-chiangmai";
import { article as enRakhaLangThangSakPha } from "./en/rakha-lang-thang-sak-pha";
import { article as zhRakhaLangThangSakPha } from "./zh/rakha-lang-thang-sak-pha";
import { article as enSueAirOnlineCheckArai } from "./en/sue-air-online-check-arai";
import { article as zhSueAirOnlineCheckArai } from "./zh/sue-air-online-check-arai";
import { article as enYaiAirTongRuArai } from "./en/yai-air-tong-ru-arai";
import { article as zhYaiAirTongRuArai } from "./zh/yai-air-tong-ru-arai";

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
  enAirMaiYenSaHet,
  enSomRueSueMai,
  enSakPhaFaNaVsFaBon,
  enAirMenApChueaRa,
  enAirPleungFai,
  enChekChangLangKhrueangSakPha,
  enHongPlodFunChiangmai,
  enInverterVsThammada,
  enKhaTidTangAirRuamArai,
  enKhamnuanBtu,
  enLangAirBoiKaeNai,
  enLangAirEngDaiMai,
  enLangAirRanAhanCafe,
  enLangAirThammadaVsPremium,
  enLangKhrueangSakPhaEngDaiMai,
  enLangKhrueangSakPhaThuengBan,
  enLangThangSakPha,
  enPm25LangAirChiangmai,
  enRakhaLangThangSakPha,
  enSueAirOnlineCheckArai,
  enYaiAirTongRuArai,
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
  zhAirMaiYenSaHet,
  zhSomRueSueMai,
  zhSakPhaFaNaVsFaBon,
  zhAirMenApChueaRa,
  zhAirPleungFai,
  zhChekChangLangKhrueangSakPha,
  zhHongPlodFunChiangmai,
  zhInverterVsThammada,
  zhKhaTidTangAirRuamArai,
  zhKhamnuanBtu,
  zhLangAirBoiKaeNai,
  zhLangAirEngDaiMai,
  zhLangAirRanAhanCafe,
  zhLangAirThammadaVsPremium,
  zhLangKhrueangSakPhaEngDaiMai,
  zhLangKhrueangSakPhaThuengBan,
  zhLangThangSakPha,
  zhPm25LangAirChiangmai,
  zhRakhaLangThangSakPha,
  zhSueAirOnlineCheckArai,
  zhYaiAirTongRuArai,
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
