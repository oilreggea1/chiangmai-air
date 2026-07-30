import type { Article, ArticleCategory } from "@/lib/content-types";

import { article as airMaiYen } from "./air-mai-yen-sa-het";
import { article as airMenAp } from "./air-men-ap-chuea-ra";
import { article as airNamYot } from "./air-nam-yot-kae-yang-rai";
import { article as airPenNamKhaeng } from "./air-pen-nam-khaeng";
import { article as airPleungFai } from "./air-pleung-fai";
import { article as airSiangDang } from "./air-siang-dang";
import { article as airTatBoi } from "./air-tat-boi";
import { article as chekChang } from "./chek-chang-lang-air";
import { article as hongPlodFun } from "./hong-plod-fun-chiangmai";
import { article as inverterVs } from "./inverter-vs-thammada";
import { article as khamnuanBtu } from "./khamnuan-btu";
import { article as langAirBoi } from "./lang-air-boi-kae-nai";
import { article as langAirEng } from "./lang-air-eng-dai-mai";
import { article as langAirVsPremium } from "./lang-air-thammada-vs-premium";
import { article as langThangSakPha } from "./lang-thang-sak-pha";
import { article as sakPhaFaNaVsFaBon } from "./sak-pha-fa-na-vs-fa-bon";
import { article as yaiAir } from "./yai-air-tong-ru-arai";
import { article as langAirRanAhan } from "./lang-air-ran-ahan-cafe";
import { article as namYa } from "./nam-ya-r32-r410a-r22";
import { article as pm25 } from "./pm25-lang-air-chiangmai";
import { article as rakhaLangAir } from "./rakha-lang-air-chiangmai-2569";
import { article as rakhaSomAir } from "./rakha-som-air";
import { article as somRueSueMai } from "./som-rue-sue-mai";

/** เรียงตามความสำคัญเชิงกลยุทธ์ ตัวที่เป็นจุดต่างจากคู่แข่งขึ้นก่อน */
export const articles: Article[] = [
  pm25,
  hongPlodFun,
  chekChang,
  rakhaLangAir,
  rakhaSomAir,
  namYa,
  langAirVsPremium,
  langAirBoi,
  langAirEng,
  langThangSakPha,
  sakPhaFaNaVsFaBon,
  langAirRanAhan,
  yaiAir,
  airMaiYen,
  airNamYot,
  airMenAp,
  airSiangDang,
  airTatBoi,
  airPenNamKhaeng,
  airPleungFai,
  khamnuanBtu,
  inverterVs,
  somRueSueMai,
];

export const categories: ArticleCategory[] = [
  "ฝุ่น PM2.5",
  "ปัญหาแอร์",
  "ดูแลรักษา",
  "ราคาและค่าใช้จ่าย",
  "เลือกซื้อแอร์",
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(a: Article) {
  return a.related.map(getArticle).filter((x): x is Article => Boolean(x));
}

export function articlesByCategory(cat: ArticleCategory) {
  return articles.filter((a) => a.category === cat);
}
