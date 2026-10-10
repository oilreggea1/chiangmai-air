import type { Metadata } from "next";
import Link from "next/link";
import { site, areas, p } from "@/lib/site";
import { tambonRoman } from "@/lib/intl";
import { condoDirectory, type CondoEntry } from "@/lib/condo-directory";
import { condoBrands, type CondoBrand } from "@/lib/condo-brands";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { Breadcrumbs, CtaBand } from "./Blocks";
import CondoSearch from "./CondoSearch";
import { IconCheck, IconChevron, IconLine, IconPhone, IconPin } from "./Icons";

/**
 * ทำเนียบคอนโดเชียงใหม่ + หน้าคอนโดรายแบรนด์ (29 ก.ย. 2569) ใช้ร่วม 3 ภาษา
 * ไทย: /condo, /condo/[brand] · อังกฤษ/จีน: /en|zh/condo/directory, /en|zh/condo/[brand]
 * เจ้าของขอ "ทุกคอนโดในเชียงใหม่" แต่หน้าแยกทีละอาคารหลายร้อยหน้าที่เนื้อหาเหมือนกันเสี่ยงโดน Google มองเป็นหน้าเกลื่อน
 * จึงรวมทุกโครงการไว้ในทำเนียบหน้าเดียว (ค้นชื่อได้) และทำหน้าเฉพาะเฉพาะแบรนด์ที่มีข้อมูลยืนยันได้พอ
 * ห้ามเขียนว่าเป็นช่างประจำ/พันธมิตรของโครงการ ห้ามแต่งกฎนิติบุคคลรายอาคาร
 */
export type CondoLang = "th" | "en" | "zh-CN";

const PRE: Record<CondoLang, string> = { th: "", en: "/en", "zh-CN": "/zh" };
export const directoryPath = (lang: CondoLang) => (lang === "th" ? "/condo" : `${PRE[lang]}/condo/directory`);
export const brandPath = (lang: CondoLang, slug: string) => (lang === "th" ? `/condo/${slug}` : `${PRE[lang]}/condo/${slug}`);
export const condoPath = (lang: CondoLang, s: string) => `${PRE[lang]}/condo/${s}`;
export const areaPath = (lang: CondoLang, slug: string) => (lang === "th" ? `/area/${slug}` : `${PRE[lang]}/areas/${slug}`);
export const getCondo = (s: string) => condoDirectory.find((c) => c.s === s);

const norm = (x: string) => x.toLowerCase().replace(/condominium|condo|chiang ?mai|the |[^a-z0-9]/g, "");
/** โครงการนี้อยู่ในหน้าแบรนด์ไหน (จับคู่ชื่ออังกฤษ) */
/** ชื่อในทำเนียบที่เขียนต่างจากหน้าแบรนด์ (ตรวจด้วยตาแล้ว) ห้ามจับคู่แบบ "ชื่อคล้าย" เพราะเคยจับ The Infinite ผิดเป็น The Astra Infinite */
const BRAND_ALIAS: Record<string, string> = {
  "The Next 3 Ruamchok (3.1/3.2)": "The Next 3 Ruamchok",
  "The Next Premier": "The Next Premier Ruamchok",
  "Arise Hill": "Arise Hill San Sai",
};
export function brandOf(c: CondoEntry) {
  const k = norm(BRAND_ALIAS[c.en] ?? c.en);
  for (const b of condoBrands) for (const x of b.projects) if (norm(x.en) === k) return { b, x };
  return undefined;
}

/** ชั้น/ปีที่ใช้แสดง: โครงการของแบรนด์ใช้ตัวเลขที่คัดแล้วใน condo-brands (ตัวที่แหล่งขัดกันเว้นว่าง) กันหน้าเว็บขัดกันเอง */
export function factsOf(c: CondoEntry): { f: string | null; y: number | null } {
  const m = brandOf(c);
  return m ? { f: m.x.floors ? String(m.x.floors) : null, y: m.x.year ?? null } : { f: c.f, y: c.y };
}

/** หน้าคอนโดของโครงการในหน้าแบรนด์ (ถ้ามีในทำเนียบ) */
export const condoOfBrandProject = (en: string) => condoDirectory.find((c) => brandOf(c)?.x.en === en);

/** หน้าพื้นที่ของตำบล: หน้าตำบลเดี่ยวก่อน ถ้าไม่มีใช้หน้าที่ครอบตำบลนั้น */
export function areaOfTambon(t: string) {
  return areas.find((a) => a.name === t) ?? areas.find((a) => a.full.includes(`ต.${t}`));
}
const tName = (lang: CondoLang, t: string) => (lang === "th" ? t : tambonRoman[t] ?? t);

const langs = (slug?: string) => ({
  "th-TH": slug ? `/condo/${slug}` : "/condo",
  "en-US": slug ? `/en/condo/${slug}` : "/en/condo/directory",
  "zh-CN": slug ? `/zh/condo/${slug}` : "/zh/condo/directory",
  "x-default": slug ? `/condo/${slug}` : "/condo",
});

const T = {
  th: {
    home: "หน้าแรก", homePath: "/", hub: "ทำเนียบคอนโดเชียงใหม่", locale: "th_TH",
    dirTitle: `ล้างแอร์คอนโดเชียงใหม่ ค้นชื่อคอนโดของคุณ ${condoDirectory.length} โครงการ`,
    dirDesc: `รายชื่อคอนโดในเขตบริการ ${condoDirectory.length} โครงการ แยกตามตำบล ค้นชื่ออาคารของคุณได้ ล้างแอร์ถึงห้อง ${p.wash.std} บาท 3 เครื่องขึ้นไป ${p.wash.stdBulk} บาท`,
    dirH1: "ล้างแอร์คอนโดเชียงใหม่ ค้นชื่อคอนโดของคุณ",
    dirLead: `รวมคอนโด ${condoDirectory.length} โครงการที่อยู่ในเขตบริการของผม แยกตามตำบล พิมพ์ชื่ออาคารเพื่อค้นหาได้ ทุกโครงการในรายชื่อนี้ผมรับล้าง ซ่อม และติดตั้งแอร์ถึงห้อง ในราคาเดียวกัน ไม่คิดค่าเดินทาง`,
    search: "พิมพ์ชื่อคอนโด เช่น ศุภาลัย ดีคอนโด วันพลัส", empty: "ไม่พบชื่อนี้ในรายชื่อ ส่งชื่ออาคารมาทาง LINE ได้ ผมตรวจให้ว่าอยู่ในเขตบริการหรือไม่",
    brandsH: "หน้าเฉพาะแบรนด์", count: (n: number) => `${n} โครงการ`, areaLink: "ดูหน้าพื้นที่",
    notListed: "ไม่พบอาคารของคุณ? รายชื่อนี้รวบรวมจากข้อมูลประกาศขายสาธารณะ อาจยังไม่ครบทุกอาคาร ส่งชื่ออาคารมาได้ ผมรับงานทุกอาคารในเขตบริการ",
    source: "รวบรวมจากข้อมูลโครงการที่เผยแพร่สาธารณะ (zmyhome, baania, condonayoo, dotproperty, fazwaz และเว็บผู้พัฒนาโครงการ) ตรวจตำบลจากที่อยู่โครงการ ณ ก.ย. 2569 ชื่อโครงการเป็นของเจ้าของโครงการ ร้านไม่ได้เป็นตัวแทนหรือพันธมิตรของโครงการใด",
    line: "ส่งชื่อคอนโดทาง LINE", call: "โทร",
    // หน้าแบรนด์
    bTitle: (b: CondoBrand) => `ล้างแอร์คอนโด${b.th} เชียงใหม่ ถึงห้อง ${p.wash.std} บาท`,
    bDesc: (b: CondoBrand, n: number) => `ล้างแอร์ ซ่อม ติดตั้งแอร์ในคอนโด${b.th} เชียงใหม่ ${n} โครงการ ถึงห้อง ${p.wash.std} บาท หลายห้องในอาคารเดียวกันคิดราคาหลายเครื่อง แจ้งราคาก่อนเริ่มงาน`,
    bH1: (b: CondoBrand) => `ล้างแอร์คอนโด${b.th} เชียงใหม่ ถึงห้อง`,
    bLead: (b: CondoBrand, n: number) => `รวมโครงการคอนโดของ${b.developerTh}ในเชียงใหม่ ${n} โครงการที่อยู่ในเขตบริการของผม พร้อมข้อมูลอาคารที่ควรรู้ก่อนนัดช่าง ผมรับล้าง ซ่อม และติดตั้งแอร์ในห้องชุดทุกโครงการ ราคาเดียวกับทุกพื้นที่ แจ้งราคาก่อนเริ่มงาน`,
    projH: (b: CondoBrand) => `โครงการคอนโด${b.th}ในเชียงใหม่`,
    head: ["โครงการ", "ตำบล", "ถนน", "อาคาร / ห้อง"],
    alt: (t: string) => `บางแหล่งระบุ ต.${t}`,
    bld: (b?: number, u?: number) => [b && `${b} อาคาร`, u && `${u} ห้อง`].filter(Boolean).join(" · ") || "–",
    upcomingH: "โครงการที่ยังไม่แล้วเสร็จ", upcomingNote: "ยังไม่เปิดใช้งาน เมื่อส่งมอบห้องแล้วรับงานได้ตามปกติ",
    typeH: "งานแอร์ในห้องชุดของโครงการเหล่านี้",
    high: () => `อาคารสูง: การขนอุปกรณ์ต้องใช้ลิฟต์ และอาคารลักษณะนี้มักกำหนดช่วงเวลาที่ช่างเข้าทำงานได้ ควรสอบถามนิติบุคคลและแจ้งผมก่อนนัด ผมจะจัดคิวให้ตรงช่วงที่เข้าได้จริง`,
    low: () => `อาคารเตี้ย: มักมีหลายอาคารในโครงการเดียว แจ้งชื่ออาคารและชั้นมาด้วย ผมจะได้เตรียมการขนอุปกรณ์และเวลาให้พอ`,
    common: [
      "ห้องชุดส่วนใหญ่วางคอยล์ร้อนไว้ที่ระเบียงหรือช่องวางเครื่องที่ผนังอาคาร ถ่ายรูปจุดวางคอยล์ร้อนส่งมาก่อนได้ ผมจะเตรียมอุปกรณ์ให้ตรงหน้างาน",
      "ห้องที่ไม่มีระเบียงล้างได้ ผมใช้ถุงรองน้ำคลุมเครื่องล้างในห้อง และปูผ้าใบกันเปื้อน 2 ชั้น",
      `เจ้าของที่ถือหลายห้องในโครงการเดียวกัน ล้างรวมกันในนัดเดียวเข้าเงื่อนไขราคาตั้งแต่ 3 เครื่องขึ้นไป เครื่องละ ${p.wash.stdBulk} บาท`,
    ],
    checkH: "ข้อมูลที่ควรแจ้งก่อนนัด",
    check: ["ชื่อโครงการ อาคาร และชั้น", "เงื่อนไขของนิติบุคคล เช่น เวลาที่ช่างเข้าได้ การลงทะเบียน หรือบัตรลิฟต์", "จำนวนเครื่องและขนาด BTU", "จุดวางคอยล์ร้อน (ระเบียงหรือช่องวางเครื่อง)", "ที่จอดรถสำหรับช่าง"],
    priceH: "ราคา",
    price: [`ล้างแอร์ติดผนัง ${p.wash.std} บาท/เครื่อง`, `ตั้งแต่ 3 เครื่องขึ้นไป ${p.wash.stdBulk} บาท/เครื่อง`, `ถอดล้างทุกชิ้น (Premium Full Wash) ${p.wash.premium} บาท (${p.wash.premiumNote})`, "รับประกันน้ำหยด 30 วัน (ถอดล้าง 60 วัน)"],
    allPrice: "ดูราคาทั้งหมด", allPricePath: "/price",
    faqH: "คำถามที่พบบ่อย",
    faqs: (b: CondoBrand) => [
      { q: `อยู่คอนโด${b.th} ต้องแจ้งนิติบุคคลก่อนหรือไม่?`, a: "ส่วนใหญ่ต้องแจ้งครับ อาคารชุดหลายแห่งกำหนดช่วงเวลาที่ช่างเข้าได้ และบางแห่งต้องลงทะเบียนช่าง รบกวนสอบถามนิติบุคคลของอาคารแล้วแจ้งเงื่อนไขมาก่อนนัด ผมจะจัดคิวให้ตรงช่วงที่เข้าได้จริง" },
      { q: "ห้องปล่อยเช่า เจ้าของไม่อยู่เชียงใหม่ ทำได้หรือไม่?", a: "ได้ครับ นัดผ่านผู้เช่าหรือผู้ดูแลห้องได้ ผมส่งรูปก่อนและหลังล้างให้เจ้าของทาง LINE และออกใบเสร็จหรือใบกำกับภาษีเต็มรูปได้" },
      { q: `ร้านเป็นช่างประจำของโครงการ${b.th}หรือไม่?`, a: "ไม่ใช่ครับ ผมเป็นร้านช่างแอร์อิสระ ไม่ได้เป็นตัวแทนหรือพันธมิตรของผู้พัฒนาโครงการ รับงานในห้องชุดตามที่เจ้าของห้องหรือผู้เช่าเรียก และทำตามกฎของอาคารทุกครั้ง" },
    ],
    otherH: "แบรนด์อื่นและทำเนียบคอนโดทั้งหมด", dirLink: "ทำเนียบคอนโดเชียงใหม่ทั้งหมด",
    srcH: "แหล่งข้อมูลโครงการ", disclaimer: (b: CondoBrand) => `ชื่อโครงการและเครื่องหมายการค้าเป็นของ${b.developerTh} ร้านไม่ได้เป็นตัวแทนหรือพันธมิตร ข้อมูลอาคารรวบรวมจากเว็บผู้พัฒนาและเว็บประกาศขาย ณ ก.ย. 2569 ตัวเลขที่แหล่งระบุไม่ตรงกันเว้นว่างไว้`,
    ctaT: (b: CondoBrand) => `เรียกช่างล้างแอร์คอนโด${b.th}`, ctaS: "ส่งชื่อโครงการ อาคาร ชั้น และจำนวนเครื่องมาทาง LINE ผมแจ้งราคาและคิวว่างให้ก่อนนัด",
  },
  en: {
    home: "English", homePath: "/en", hub: "Chiang Mai condo directory", locale: "en_US",
    dirTitle: "Condo Aircon Cleaning in Chiang Mai: Find Your Building",
    dirDesc: `${condoDirectory.length} condo buildings in my Chiang Mai service area, by sub-district. Find yours. In-room aircon cleaning ${p.wash.std} THB, ${p.wash.stdBulk} THB each for 3+ units.`,
    dirH1: "Condo aircon cleaning in Chiang Mai: find your building",
    dirLead: `${condoDirectory.length} condo buildings inside my service area, grouped by sub-district. Type your building's name to search. I clean, repair and install aircon in rooms in every building listed, at the same price everywhere, with no travel fee.`,
    search: "Type your condo's name, e.g. Supalai, dcondo, One Plus", empty: "Not in the list? Send me the building name on LINE and I'll confirm whether it's inside my area.",
    brandsH: "Developer pages", count: (n: number) => `${n} buildings`, areaLink: "Area page",
    notListed: "Can't find your building? This list is compiled from public property listings and may not include every building. Send me the name; I work in every building inside my service area.",
    source: "Compiled from publicly published project data (zmyhome, baania, condonayoo, dotproperty, fazwaz and developers' sites), with the sub-district checked against each project's address, as of September 2026. Project names belong to their owners; I am not an agent or partner of any project.",
    line: "Send your condo name on LINE", call: "Call",
    bTitle: (b: CondoBrand) => `${b.en} Condo Aircon Cleaning in Chiang Mai`,
    bDesc: (b: CondoBrand, n: number) => `Aircon cleaning, repair and installation in ${n} ${b.en} condo projects in Chiang Mai. In-room cleaning ${p.wash.std} THB; multi-unit rate for several rooms. Price given before I start.`,
    bH1: (b: CondoBrand) => `Aircon cleaning in ${b.en} condos in Chiang Mai`,
    bLead: (b: CondoBrand, n: number) => `The ${n} ${b.developerEn} condo projects in Chiang Mai inside my service area, with the building details worth knowing before you book. I clean, repair and install aircon in rooms in every one of them, at the same price as everywhere else, quoted before I start.`,
    projH: (b: CondoBrand) => `${b.en} condo projects in Chiang Mai`,
    head: ["Project", "Sub-district", "Road", "Buildings / units"],
    alt: (t: string) => `some sources say ${tambonRoman[t] ?? t}`,
    bld: (b?: number, u?: number) => [b && `${b} bldg`, u && `${u} units`].filter(Boolean).join(" · ") || "–",
    upcomingH: "Projects not yet completed", upcomingNote: "Not yet handed over. Once rooms are handed over I take jobs there as usual.",
    typeH: "Aircon work in these buildings",
    high: () => `High-rise buildings: equipment has to go up by lift, and buildings like this usually set the hours when technicians may work. Check with the juristic office and tell me before booking so I can schedule within those hours.`,
    low: () => `Low-rise buildings: projects often have several buildings. Tell me the building and floor so I can plan carrying the equipment and allow enough time.`,
    common: [
      "Most condo rooms have the outdoor unit on the balcony or in a service ledge on the building wall. Send a photo of where yours is and I'll bring the right equipment.",
      "Rooms without a balcony can be cleaned: I use a drainage cover bag around the unit and lay a two-layer protective sheet.",
      `Owners with several rooms in the same project can have them cleaned in one visit at the 3-or-more rate, ${p.wash.stdBulk} THB each.`,
    ],
    checkH: "What to tell me before booking",
    check: ["Project, building and floor", "The juristic office's rules, e.g. technician hours, registration or lift card", "Number of units and their BTU size", "Where the outdoor unit is (balcony or service ledge)", "Parking for the technician"],
    priceH: "Prices",
    price: [`Wall unit cleaning ${p.wash.std} THB per unit`, `3 or more units ${p.wash.stdBulk} THB each`, `Full strip-down (Premium Full Wash) ${p.wash.premium} THB depending on size`, "30-day drip warranty (60 days for the strip-down)"],
    allPrice: "All prices", allPricePath: "/en/pricing",
    faqH: "Common questions",
    faqs: (b: CondoBrand) => [
      { q: `I live in a ${b.en} condo. Do I need to tell the juristic office first?`, a: "Usually, yes. Many condo buildings set the hours when technicians may work, and some require registration. Please check with your building's office and tell me the conditions before booking, and I'll schedule within the hours that actually work." },
      { q: "My room is rented out and I'm not in Chiang Mai. Can you still do it?", a: "Yes. I can arrange it through your tenant or room manager, send you before-and-after photos on LINE, and issue a receipt or full tax invoice." },
      { q: `Are you the official technician for ${b.en}?`, a: "No. I run an independent aircon service and am not an agent or partner of the developer. I work in rooms at the request of owners or tenants and follow the building's rules every time." },
    ],
    otherH: "Other developers and the full directory", dirLink: "Full Chiang Mai condo directory",
    srcH: "Project data sources", disclaimer: (b: CondoBrand) => `Project names and trademarks belong to ${b.developerEn}. I am not an agent or partner. Building details were compiled from the developer's and listing sites as of September 2026; figures the sources disagree on are left blank.`,
    ctaT: (b: CondoBrand) => `Book aircon cleaning in your ${b.en} condo`, ctaS: "Send the project, building, floor and number of units on LINE and I'll give you the price and my next free slot.",
  },
  "zh-CN": {
    home: "中文", homePath: "/zh", hub: "清迈公寓名录", locale: "zh_CN",
    dirTitle: "清迈公寓空调清洗｜查找您的公寓",
    dirDesc: `我服务范围内 ${condoDirectory.length} 个公寓项目，按分区排列，可搜索名称。上门清洗每台 ${p.wash.std} 泰铢，三台以上每台 ${p.wash.stdBulk} 泰铢。`,
    dirH1: "清迈公寓空调清洗：查找您的公寓",
    dirLead: `我服务范围内的 ${condoDirectory.length} 个公寓项目，按分区排列，输入楼盘名称即可搜索。名单中的每个项目我都提供上门清洗、维修和安装空调，各区同一价格，不收路费。`,
    search: "输入公寓名称，例如 Supalai、dcondo、One Plus", empty: "名单里没有？用 LINE 把楼名发给我，我帮您确认是否在服务范围内。",
    brandsH: "开发商专页", count: (n: number) => `${n} 个项目`, areaLink: "分区页面",
    notListed: "找不到您的公寓？本名单整理自公开的房产信息，可能未包含所有楼盘。把楼名发给我，服务范围内的楼盘我都接。",
    source: "整理自公开发布的项目资料（zmyhome、baania、condonayoo、dotproperty、fazwaz 及开发商官网），并按项目地址核对分区，截至 2026 年 9 月。项目名称归各自所有者，本店不是任何项目的代理或合作方。",
    line: "用 LINE 发公寓名称", call: "致电",
    bTitle: (b: CondoBrand) => `清迈 ${b.en} 公寓空调清洗｜上门服务`,
    bDesc: (b: CondoBrand, n: number) => `清迈 ${n} 个 ${b.en} 公寓项目的空调清洗、维修和安装。上门清洗每台 ${p.wash.std} 泰铢，同楼多间可享多台价，开工前报价。`,
    bH1: (b: CondoBrand) => `清迈 ${b.en} 公寓空调上门清洗`,
    bLead: (b: CondoBrand, n: number) => `${b.developerEn} 在清迈、位于我服务范围内的 ${n} 个公寓项目，以及预约前值得了解的楼栋信息。每个项目的房间我都提供空调清洗、维修和安装，价格与其他地区相同，开工前报价。`,
    projH: (b: CondoBrand) => `清迈的 ${b.en} 公寓项目`,
    head: ["项目", "分区", "道路", "栋数 / 户数"],
    alt: (t: string) => `部分资料称 ${tambonRoman[t] ?? t}`,
    bld: (b?: number, u?: number) => [b && `${b} 栋`, u && `${u} 户`].filter(Boolean).join(" · ") || "–",
    upcomingH: "尚未竣工的项目", upcomingNote: "尚未交房，交房后照常接单。",
    typeH: "这些楼盘里的空调工作",
    high: () => `高层楼：设备要靠电梯运送，这类大楼通常规定技师可进入的时段。请先向公寓管理处确认，预约前告诉我，我会把时间排在可进入的时段内。`,
    low: () => `低层楼：一个项目常有好几栋楼。请告诉我楼栋和楼层，方便我安排搬运设备并预留足够时间。`,
    common: [
      "大多数公寓的室外机放在阳台或外墙的设备位上。先拍一张室外机位置的照片发给我，我会带对设备。",
      "没有阳台的房间也能洗：我用接水罩包住室内机清洗，并铺两层防污布。",
      `同一项目有多间房的业主，一次上门一起洗可享三台以上价格，每台 ${p.wash.stdBulk} 泰铢。`,
    ],
    checkH: "预约前请告诉我",
    check: ["项目名称、楼栋和楼层", "公寓管理处的规定，例如技师可进入时间、登记或电梯卡", "空调台数和 BTU 大小", "室外机位置（阳台或设备位）", "技师停车位"],
    priceH: "价格",
    price: [`壁挂机清洗每台 ${p.wash.std} 泰铢`, `三台以上每台 ${p.wash.stdBulk} 泰铢`, `深度拆洗 Premium Full Wash ${p.wash.premium} 泰铢（按机型大小计价）`, "滴水保修 30 天（深度拆洗 60 天）"],
    allPrice: "全部价格", allPricePath: "/zh/pricing",
    faqH: "常见问题",
    faqs: (b: CondoBrand) => [
      { q: `住在 ${b.en} 公寓，需要先通知管理处吗？`, a: "通常需要。很多公寓规定技师可进入的时段，有些还要求登记。请先向所在楼的管理处确认，预约前把条件告诉我，我会排在实际可进入的时段。" },
      { q: "房间出租、业主不在清迈，也能做吗？", a: "可以。可以通过租客或房间管家安排，我会用 LINE 把清洗前后的照片发给业主，并可开收据或正式税务发票。" },
      { q: `你们是 ${b.en} 的指定技师吗？`, a: "不是。我是独立的空调服务店，不是开发商的代理或合作方。我应业主或租客的要求上门，每次都遵守大楼的规定。" },
    ],
    otherH: "其他开发商与完整名录", dirLink: "清迈公寓完整名录",
    srcH: "项目资料来源", disclaimer: (b: CondoBrand) => `项目名称和商标归 ${b.developerEn} 所有，本店不是其代理或合作方。楼栋资料整理自开发商官网和房产网站，截至 2026 年 9 月；各来源不一致的数字留空。`,
    ctaT: (b: CondoBrand) => `预约 ${b.en} 公寓空调清洗`, ctaS: "用 LINE 发来项目、楼栋、楼层和空调台数，我会先告诉您价格和最近的空档。",
  },
} as const;

/* ---------------- ทำเนียบ ---------------- */

export function condoDirectoryMetadata(lang: CondoLang): Metadata {
  const t = T[lang];
  return {
    title: { absolute: t.dirTitle },
    description: t.dirDesc,
    alternates: { canonical: directoryPath(lang), languages: langs() },
    ...share({ title: t.dirTitle, description: t.dirDesc, path: directoryPath(lang), locale: t.locale }),
  };
}

function groupsByTambon() {
  const m = new Map<string, typeof condoDirectory>();
  for (const c of condoDirectory) m.set(c.t, [...(m.get(c.t) ?? []), c]);
  return [...m.entries()].sort((a, b) => b[1].length - a[1].length);
}

export function CondoDirectoryView({ lang }: { lang: CondoLang }) {
  const t = T[lang];
  const trail = [
    { name: "หน้าแรก", path: "/" },
    ...(lang === "th" ? [] : [{ name: t.home, path: t.homePath }]),
    { name: t.hub, path: directoryPath(lang) },
  ];
  const htmlLang = lang === "th" ? undefined : lang;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={htmlLang}>
        {lang === "th" && <Breadcrumbs trail={trail} />}
        <header className="wrap max-w-4xl pt-10 pb-8">
          <p className="eyebrow"><IconPin className="h-4 w-4" />{t.hub}</p>
          <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">{t.dirH1}</h1>
          <p className="lead mt-5">{t.dirLead}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`${lang}-condo-dir-line`}><IconLine className="h-5 w-5" />{t.line}</a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta={`${lang}-condo-dir-call`}><IconPhone className="h-5 w-5" />{t.call} {site.phone}</a>
          </div>
          <CondoSearch placeholder={t.search} empty={t.empty} />
        </header>
      </div>

      <section className="wrap max-w-4xl pb-4" lang={htmlLang}>
        <h2 className="h2">{t.brandsH}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {condoBrands.map((b) => (
            <li key={b.slug}>
              <Link href={brandPath(lang, b.slug)} className="card group flex items-center justify-between gap-3 p-5 transition-all hover:shadow-lift">
                <span>
                  <span className="block font-bold group-hover:text-brand-700">{lang === "th" ? b.th : b.en}</span>
                  <span className="text-xs text-ink-soft">{t.count(b.projects.filter((x) => x.status === "built").length)}</span>
                </span>
                <IconChevron className="h-4 w-4 text-brand-700" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section pt-8" lang={htmlLang}>
        <div className="wrap max-w-4xl space-y-8">
          {groupsByTambon().map(([tambon, list]) => {
            const a = areaOfTambon(tambon);
            return (
              <div key={tambon} data-condo-group id={`t-${a?.slug ?? tambon}`} className="card overflow-hidden">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3.5 sm:px-6">
                  <h2 className="text-lg font-bold">{lang === "th" ? `ต.${tambon}` : tName(lang, tambon)} <span className="text-sm font-normal text-ink-soft">· {t.count(list.length)}</span></h2>
                  {a && <Link href={areaPath(lang, a.slug)} className="text-sm font-semibold text-brand-700 hover:underline">{t.areaLink}</Link>}
                </div>
                <ul className="divide-y divide-slate-100">
                  {list.map((c) => (
                    <li key={c.en} data-condo={`${c.th ?? ""} ${c.en} ${c.r ?? ""}`} className="px-5 py-3 sm:px-6">
                      <p className="font-semibold text-ink">
                        <Link href={condoPath(lang, c.s)} className="hover:text-brand-700 hover:underline">{lang === "th" ? c.th ?? c.en : c.en}</Link>
                        {lang === "th" && c.th && c.th !== c.en && <span className="ml-2 text-sm font-normal text-ink-soft" lang="en">{c.en}</span>}
                        {lang !== "th" && c.th && <span className="ml-2 text-sm font-normal text-ink-soft" lang="th">{c.th}</span>}
                      </p>
                      <p className="mt-0.5 text-sm leading-6 text-ink-soft">
                        {(() => { const k = factsOf(c); return [lang === "th" ? c.r : null].filter(Boolean).join(" · "); })()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <p className="text-sm leading-7 text-ink-soft">{t.notListed}</p>
          <p className="text-xs leading-6 text-ink-soft">{t.source}</p>
        </div>
      </section>
    </>
  );
}

/* ---------------- หน้าแบรนด์ ---------------- */

export function condoBrandMetadata(b: CondoBrand, lang: CondoLang): Metadata {
  const t = T[lang];
  const n = b.projects.filter((x) => x.status === "built").length;
  const title = t.bTitle(b), description = t.bDesc(b, n);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: brandPath(lang, b.slug), languages: langs(b.slug) },
    ...share({ title, description, path: brandPath(lang, b.slug), locale: t.locale }),
  };
}

export function CondoBrandView({ b, lang }: { b: CondoBrand; lang: CondoLang }) {
  const t = T[lang];
  const built = b.projects.filter((x) => x.status === "built");
  const upcoming = b.projects.filter((x) => x.status === "upcoming");
  const fl = built.map((x) => x.floors).filter((f): f is number => !!f);
  const hi = fl.filter((f) => f >= 15), lo = fl.filter((f) => f < 15);
  const faqs = t.faqs(b);
  const htmlLang = lang === "th" ? undefined : lang;
  const trail = [
    { name: "หน้าแรก", path: "/" },
    ...(lang === "th" ? [] : [{ name: t.home, path: t.homePath }]),
    { name: t.hub, path: directoryPath(lang) },
    { name: lang === "th" ? b.th : b.en, path: brandPath(lang, b.slug) },
  ];
  const sources = [...new Set(b.projects.flatMap((x) => x.sources))];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={htmlLang}>
        {lang === "th" && <Breadcrumbs trail={trail} />}
        <header className="wrap max-w-4xl pt-10 pb-10">
          <p className="eyebrow"><IconPin className="h-4 w-4" />{t.hub}</p>
          <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">{t.bH1(b)}</h1>
          <p className="lead mt-5">{t.bLead(b, built.length)}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`${lang}-condo-${b.slug}-line`}><IconLine className="h-5 w-5" />{t.line}</a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta={`${lang}-condo-${b.slug}-call`}><IconPhone className="h-5 w-5" />{t.call} {site.phone}</a>
          </div>
        </header>
      </div>

      <section className="section pt-4" lang={htmlLang}>
        <div className="wrap max-w-4xl">
          <h2 className="h2">{t.projH(b)}</h2>
          {/* มือถือเป็นการ์ด จอใหญ่เป็นตาราง (กติกาตารางมือถือของเว็บนี้) */}
          <ul className="mt-6 space-y-3 sm:hidden">
            {built.map((x) => {
              const a = areaOfTambon(x.tambon);
              return (
                <li key={x.en} className="card p-4">
                  <p className="font-bold">{(() => { const c = condoOfBrandProject(x.en); const label = lang === "th" ? x.th : x.en; return c ? <Link href={condoPath(lang, c.s)} className="hover:text-brand-700 hover:underline">{label}</Link> : label; })()}</p>
                  <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
                    <dt className="text-ink-soft">{t.head[1]}</dt>
                    <dd>{a ? <Link href={areaPath(lang, a.slug)} className="text-brand-700 hover:underline">{tName(lang, x.tambon)}</Link> : tName(lang, x.tambon)}{x.tambonAlt && <span className="text-ink-soft"> ({t.alt(x.tambonAlt)})</span>}</dd>
                    <dt className="text-ink-soft">{t.head[2]}</dt><dd>{lang === "th" ? x.road : x.roadEn}</dd>
                    <dt className="text-ink-soft">{t.head[3]}</dt><dd>{t.bld(x.buildings, x.units)}</dd>
                  </dl>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 hidden overflow-x-auto sm:block">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-slate-50 text-sm text-ink-soft">
                <tr>{t.head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {built.map((x) => {
                  const a = areaOfTambon(x.tambon);
                  return (
                    <tr key={x.en}>
                      <td className="px-4 py-3 font-semibold">{(() => { const c = condoOfBrandProject(x.en); const label = lang === "th" ? x.th : x.en; return c ? <Link href={condoPath(lang, c.s)} className="hover:text-brand-700 hover:underline">{label}</Link> : label; })()}</td>
                      <td className="px-4 py-3">{a ? <Link href={areaPath(lang, a.slug)} className="text-brand-700 hover:underline">{tName(lang, x.tambon)}</Link> : tName(lang, x.tambon)}{x.tambonAlt && <span className="block text-xs text-ink-soft">{t.alt(x.tambonAlt)}</span>}</td>
                      <td className="px-4 py-3">{lang === "th" ? x.road : x.roadEn}</td>
                      <td className="px-4 py-3">{t.bld(x.buildings, x.units)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {upcoming.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-bold">{t.upcomingH}</h3>
              <p className="mt-1 text-sm text-ink-soft">{t.upcomingNote}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {upcoming.map((x) => <li key={x.en} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">{lang === "th" ? x.th : x.en} · {tName(lang, x.tambon)}</li>)}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-sand" lang={htmlLang}>
        <div className="wrap max-w-3xl">
          <h2 className="h2">{t.typeH}</h2>
          <ul className="mt-6 space-y-4">
            {hi.length > 0 && <li className="card p-5 text-[15px] leading-8 text-ink-soft"><IconCheck className="mr-2 inline h-5 w-5 text-mint" />{t.high()}</li>}
            {lo.length > 0 && <li className="card p-5 text-[15px] leading-8 text-ink-soft"><IconCheck className="mr-2 inline h-5 w-5 text-mint" />{t.low()}</li>}
            {t.common.map((c) => <li key={c} className="card p-5 text-[15px] leading-8 text-ink-soft"><IconCheck className="mr-2 inline h-5 w-5 text-mint" />{c}</li>)}
          </ul>
        </div>
      </section>

      <section className="section" lang={htmlLang}>
        <div className="wrap grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-bold">{t.checkH}</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-7 text-ink-soft">{t.check.map((c) => <li key={c}>{c}</li>)}</ol>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-bold">{t.priceH}</h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-7 text-ink-soft">{t.price.map((c) => <li key={c}>{c}</li>)}</ul>
            <Link href={t.allPricePath} className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">{t.allPrice}<IconChevron className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang={htmlLang}>
        <div className="wrap max-w-3xl">
          <h2 className="h2">{t.faqH}</h2>
          <div className="mt-7 space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-bold">{f.q}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" lang={htmlLang}>
        <div className="wrap max-w-4xl">
          <h2 className="h2">{t.otherH}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {condoBrands.filter((o) => o.slug !== b.slug).map((o) => (
              <li key={o.slug}><Link href={brandPath(lang, o.slug)} className="card flex items-center justify-between p-5 font-bold hover:shadow-lift">{lang === "th" ? o.th : o.en}<IconChevron className="h-4 w-4 text-brand-700" /></Link></li>
            ))}
            <li><Link href={directoryPath(lang)} className="card flex items-center justify-between p-5 font-bold hover:shadow-lift">{t.dirLink}<IconChevron className="h-4 w-4 text-brand-700" /></Link></li>
          </ul>
          <div className="mt-10">
            <h2 className="text-base font-bold">{t.srcH}</h2>
            <ul className="mt-2 space-y-1 text-xs leading-6 text-ink-soft">
              {sources.map((s) => <li key={s} className="break-all"><a href={s} target="_blank" rel="noopener nofollow" className="hover:underline">{s}</a></li>)}
            </ul>
            <p className="mt-3 text-xs leading-6 text-ink-soft">{t.disclaimer(b)}</p>
          </div>
        </div>
      </section>

      {lang === "th" ? (
        <CtaBand title={t.ctaT(b)} subtitle={t.ctaS} />
      ) : (
        <section className="section bg-gradient-to-b from-brand-50 to-white" lang={htmlLang}>
          <div className="wrap max-w-3xl text-center">
            <h2 className="h2">{t.ctaT(b)}</h2>
            <p className="lead mt-4">{t.ctaS}</p>
            <div className="mt-8 flex justify-center">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`${lang}-condo-${b.slug}-cta`}><IconLine className="h-5 w-5" />{t.line}</a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/** คอนโดในตำบล ใช้แสดงบนหน้าพื้นที่ */
export function condosInArea(full: string, name: string) {
  const tambons = full.startsWith("อ.") ? [] : [...full.matchAll(/ต\.([^\s/]+)/g)].map((m) => m[1]);
  if (tambons.length === 0 && !full.startsWith("อ.")) tambons.push(name);
  return condoDirectory.filter((c) => tambons.includes(c.t));
}
