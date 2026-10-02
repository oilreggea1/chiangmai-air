import type { Metadata } from "next";
import Link from "next/link";
import { site, p } from "@/lib/site";
import { tambonRoman } from "@/lib/intl";
import { condoDirectory, type CondoEntry } from "@/lib/condo-directory";
import { areaText } from "@/content/areas-intl";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { Breadcrumbs, CtaBand } from "./Blocks";
import { areaOfTambon, areaPath, brandOf, factsOf, brandPath, condoPath, directoryPath, type CondoLang } from "./CondoPages";
import { IconCheck, IconChevron, IconLine, IconPhone, IconPin } from "./Icons";

/**
 * หน้าคอนโดรายโครงการ /condo/[slug] + /en|zh/condo/[slug] (30 ก.ย. 2569)
 * เจ้าของสั่ง "ทำแบบฉันรับงานแต่ละคอนโดอย่างละเอียด"
 * เขียนได้: ร้านรับงานในโครงการนี้ (จริง เพราะรับทุกอาคารในเขตบริการ), ข้อมูลอาคารที่ตรวจแล้ว,
 *           คำแนะนำที่คำนวณจากข้อเท็จจริงของอาคาร (จำนวนชั้น อายุอาคาร) และสภาพพื้นที่จากหน้าตำบล
 * ห้ามเขียน: เคยเข้างานที่อาคารนี้ / จำนวนงานในอาคาร / กฎนิติบุคคลรายอาคาร / เป็นช่างประจำโครงการ
 * จนกว่าจะมีข้อมูลจริงจากระบบร้านหรือช่างยืนยัน
 */
const NOW = 2026;
const PRE: Record<CondoLang, string> = { th: "", en: "/en", "zh-CN": "/zh" };
export { getCondo } from "./CondoPages";
const firstInt = (f: string | null) => (f ? parseInt(f, 10) : undefined);
const name = (lang: CondoLang, c: CondoEntry) => (lang === "th" ? c.th ?? c.en : c.en);
const tn = (lang: CondoLang, t: string) => (lang === "th" ? `ต.${t}` : tambonRoman[t] ?? t);

const T = {
  th: {
    home: "หน้าแรก", homePath: "/", hub: "ทำเนียบคอนโดเชียงใหม่", locale: "th_TH",
    title: (n: string, t: string) => `ล้างแอร์คอนโด ${n} ${t} ถึงห้อง`,
    desc: (n: string, t: string) => `ล้างแอร์ ซ่อม ติดตั้งแอร์ในห้องชุด ${n} ${t} เชียงใหม่ ถึงห้อง ${p.wash.std} บาท 3 เครื่องขึ้นไป ${p.wash.stdBulk} บาท ไม่คิดค่าเดินทาง แจ้งราคาก่อนเริ่มงาน`,
    h1: (n: string) => `ล้างแอร์คอนโด ${n} ถึงห้อง`,
    lead: (n: string, t: string) => `ผมรับล้าง ซ่อม และติดตั้งแอร์ในห้องชุดของ ${n} ซึ่งอยู่ใน ${t} เขตบริการปกติของผม ราคาเดียวกับทุกพื้นที่ ไม่คิดค่าเดินทาง และแจ้งราคาให้ทราบก่อนเริ่มงานทุกครั้ง`,
    line: "ส่งเลขห้องและจำนวนเครื่องทาง LINE", call: "โทร",
    factsH: "ข้อมูลอาคาร", fName: "ชื่อโครงการ", fTambon: "ตำบล", fRoad: "ถนน", fFloors: "จำนวนชั้น", fYear: "ปีที่แล้วเสร็จ", fDev: "ผู้พัฒนาโครงการ",
    yr: (y: number) => `${y + 543} (อายุอาคารราว ${NOW - y} ปี)`, fl: (f: string) => `${f} ชั้น`,
    workH: (n: string) => `งานแอร์ในห้องชุดของ ${n}`,
    high: (f: number) => `อาคารสูง ${f} ชั้น การขนอุปกรณ์ขึ้นห้องต้องใช้ลิฟต์ และอาคารสูงมักกำหนดช่วงเวลาที่ช่างเข้าทำงานได้ ผมจึงขอให้สอบถามนิติบุคคลก่อนนัด แล้วผมจะจัดคิวให้ตรงช่วงที่เข้าได้`,
    mid: (f: number) => `อาคาร ${f} ชั้น แจ้งชั้นและอาคารมาด้วย ผมจะได้เผื่อเวลาขนอุปกรณ์และจัดลำดับห้องให้เสร็จในรอบเดียวหากมีหลายห้อง`,
    low: (f: number) => `อาคาร ${f} ชั้น ห้องชั้นบนที่ไม่มีลิฟต์ต้องหิ้วอุปกรณ์ขึ้นบันได แจ้งชั้นมาก่อนได้ ผมจะเตรียมชุดอุปกรณ์ให้หิ้วได้ในเที่ยวเดียว`,
    old: (a: number) => `อาคารอายุราว ${a} ปี ห้องที่ยังใช้แอร์ชุดเดิมตั้งแต่สร้างเสร็จมักเป็นเครื่องรุ่นเก่า ก่อนนัดถ่ายรูปป้ายข้างคอยล์ร้อนส่งมาได้ ผมจะดูรุ่นและชนิดน้ำยาให้ก่อน และหากเครื่องต้องซ่อมใหญ่ ผมแจ้งให้เทียบกับราคาเครื่องใหม่ตรง ๆ`,
    midAge: (a: number) => `อาคารอายุราว ${a} ปี แอร์ในห้องผ่านการใช้งานมาหลายปีแล้ว ถ้ายังไม่เคยล้างใหญ่เลยหรือเริ่มมีกลิ่นอับ ผมจะดูสภาพแล้วแนะนำว่าล้างธรรมดาพอหรือควรถอดล้าง`,
    newAge: `อาคารยังใหม่ แอร์ที่ติดมากับห้องอาจยังอยู่ในระยะรับประกันของผู้ผลิต ตรวจเงื่อนไขประกันก่อนเรียกช่างภายนอกได้ ส่วนการล้างตามรอบผมทำให้ได้ตามปกติ`,
    common: [
      "คอยล์ร้อนของห้องชุดมักอยู่ที่ระเบียงหรือช่องวางเครื่องที่ผนังอาคาร ถ่ายรูปจุดวางส่งมาก่อนได้ ผมจะเตรียมอุปกรณ์ให้ตรงหน้างาน",
      "ห้องที่ไม่มีระเบียงล้างได้ ผมใช้ถุงรองน้ำคลุมเครื่องและปูผ้าใบกันเปื้อน 2 ชั้น เก็บพื้นที่ให้เรียบร้อยก่อนส่งมอบ",
    ],
    areaH: (t: string) => `สภาพพื้นที่ ${t}`, areaMore: "อ่านเรื่องพื้นที่นี้ต่อ",
    checkH: "ข้อมูลที่ควรแจ้งก่อนนัด",
    check: (n: string) => [`${n} อาคารและชั้น`, "เงื่อนไขของนิติบุคคล เช่น เวลาที่ช่างเข้าได้ การลงทะเบียน หรือบัตรลิฟต์", "จำนวนเครื่องและขนาด BTU", "จุดวางคอยล์ร้อน", "ที่จอดรถสำหรับช่าง"],
    priceH: "ราคา",
    price: [`ล้างแอร์ติดผนัง ${p.wash.std} บาท/เครื่อง`, `ตั้งแต่ 3 เครื่องขึ้นไป ${p.wash.stdBulk} บาท/เครื่อง (รวมหลายห้องในโครงการเดียวกันได้)`, `ถอดล้างทุกชิ้น ${p.wash.premium} บาท (${p.wash.premiumNote})`, `ตรวจเช็คงานซ่อม ${p.repair.diagnostic} บาท หักคืนเมื่อตกลงซ่อม`, "รับประกันน้ำหยด 30 วัน (ถอดล้าง 60 วัน) งานซ่อม 30 วัน"],
    allPrice: "ดูราคาทั้งหมด", allPricePath: "/price",
    faqH: "คำถามที่พบบ่อย",
    faqs: (n: string, t: string) => [
      { q: `${n} อยู่ในเขตบริการหรือไม่ มีค่าเดินทางเพิ่มไหม?`, a: `อยู่ครับ ${t} อยู่ในเขตบริการปกติของผม ราคาเดียวกับทุกพื้นที่ ไม่มีค่าเดินทางเพิ่ม และผมแจ้งยอดรวมให้ทราบก่อนนัดเสมอ` },
      { q: `ล้างแอร์ห้องใน ${n} ต้องแจ้งนิติบุคคลก่อนหรือไม่?`, a: "อาคารชุดส่วนใหญ่ให้แจ้งล่วงหน้า และบางแห่งกำหนดช่วงเวลาที่ช่างเข้าได้หรือต้องลงทะเบียนช่าง รบกวนสอบถามนิติบุคคลของอาคารแล้วแจ้งเงื่อนไขมาก่อนนัด ผมจะจัดคิวให้ตรงช่วงที่เข้าได้จริง" },
      { q: `มีหลายห้องใน ${n} คิดราคาอย่างไร?`, a: `ล้างรวมกันในนัดเดียวตั้งแต่ 3 เครื่องขึ้นไป คิดเครื่องละ ${p.wash.stdBulk} บาท แม้จะอยู่คนละห้องในโครงการเดียวกัน ส่งเลขห้องและจำนวนเครื่องมาได้ ผมสรุปยอดรวมและเวลาที่ต้องใช้ให้ก่อนนัด` },
    ],
    nearH: (t: string) => `คอนโดอื่นใน ${t}`, allDir: "ทำเนียบคอนโดทั้งหมด", brandLink: (b: string) => `คอนโด${b}ทั้งหมดในเชียงใหม่`,
    note: "ข้อมูลอาคารรวบรวมจากข้อมูลโครงการที่เผยแพร่สาธารณะ ตรวจตำบลจากที่อยู่โครงการ ณ ก.ย. 2569 ชื่อโครงการเป็นของเจ้าของโครงการ ร้านไม่ได้เป็นตัวแทนหรือพันธมิตรของโครงการ หากข้อมูลคลาดเคลื่อน แจ้งผมได้ทาง LINE",
    ctaT: (n: string) => `เรียกช่างล้างแอร์ที่ ${n}`, ctaS: "ส่งเลขห้อง ชั้น และจำนวนเครื่องมาทาง LINE ผมแจ้งราคาและคิวว่างให้ก่อนนัดครับ",
  },
  en: {
    home: "English", homePath: "/en", hub: "Chiang Mai condo directory", locale: "en_US",
    title: (n: string, t: string) => `${n} (${t}) Aircon Cleaning, In-Room`,
    desc: (n: string, t: string) => `Aircon cleaning, repair and installation in rooms at ${n}, ${t}, Chiang Mai. ${p.wash.std} THB per unit, ${p.wash.stdBulk} THB each for 3+. No travel fee; price quoted before I start.`,
    h1: (n: string) => `Aircon cleaning in your room at ${n}`,
    lead: (n: string, t: string) => `I clean, repair and install aircon in rooms at ${n}, which is in ${t}, inside my regular service area. Same price as everywhere else, no travel fee, and the price is always quoted before I start.`,
    line: "Send your room number and units on LINE", call: "Call",
    factsH: "Building details", fName: "Project", fTambon: "Sub-district", fRoad: "Road", fFloors: "Floors", fYear: "Completed", fDev: "Developer",
    yr: (y: number) => `${y} (about ${NOW - y} years old)`, fl: (f: string) => `${f} floors`,
    workH: (n: string) => `Aircon work in rooms at ${n}`,
    high: (f: number) => `A ${f}-storey high-rise: equipment goes up by lift, and tall buildings usually set the hours when technicians may work. Please check with the juristic office before booking and I'll schedule within those hours.`,
    mid: (f: number) => `A ${f}-storey building: tell me the building and floor so I can allow time for carrying equipment and, if there are several rooms, finish them all in one visit.`,
    low: (f: number) => `A ${f}-storey building: upper-floor rooms without a lift mean carrying equipment up the stairs. Tell me the floor and I'll pack a kit I can carry in one trip.`,
    old: (a: number) => `The building is about ${a} years old. Rooms still using the original aircon often have older models. Send a photo of the label on the outdoor unit before booking and I'll check the model and refrigerant first; if a unit needs a major repair, I'll tell you straight how it compares with a new one.`,
    midAge: (a: number) => `The building is about ${a} years old, so the aircon has several years of use behind it. If it has never had a deep clean or has started to smell musty, I'll check it and tell you whether a standard clean is enough or a strip-down is worth it.`,
    newAge: "The building is new, so the aircon supplied with the room may still be under the manufacturer's warranty — check its conditions before calling an outside technician. Routine cleaning I can do as usual.",
    common: [
      "In condo rooms the outdoor unit is usually on the balcony or in a service ledge on the building wall. Send a photo of where it is and I'll bring the right equipment.",
      "Rooms without a balcony can be cleaned: I use a drainage cover bag and lay a two-layer protective sheet, and leave the room tidy.",
    ],
    areaH: (t: string) => `About the ${t} area`, areaMore: "More about this area",
    checkH: "What to tell me before booking",
    check: (n: string) => [`${n}: building and floor`, "The juristic office's rules, e.g. technician hours, registration or lift card", "Number of units and BTU size", "Where the outdoor unit is", "Parking for the technician"],
    priceH: "Prices",
    price: [`Wall unit cleaning ${p.wash.std} THB per unit`, `3 or more units ${p.wash.stdBulk} THB each (rooms in the same project can be combined)`, `Full strip-down ${p.wash.premium} THB depending on size`, `Repair diagnostic ${p.repair.diagnostic} THB, credited if you go ahead`, "30-day drip warranty (60 days for the strip-down), 30 days on repairs"],
    allPrice: "All prices", allPricePath: "/en/pricing",
    faqH: "Common questions",
    faqs: (n: string, t: string) => [
      { q: `Is ${n} inside your service area? Is there a travel fee?`, a: `Yes. ${t} is inside my regular service area. Same price as everywhere else, no travel fee, and I give you the total before booking.` },
      { q: `Do I need to tell the juristic office before aircon cleaning at ${n}?`, a: "Most condo buildings ask for advance notice, and some set technician hours or require registration. Please check with your building's office and tell me the conditions before booking; I'll schedule within the hours that work." },
      { q: `I own several rooms at ${n}. How is it priced?`, a: `Cleaning 3 or more units in one visit is ${p.wash.stdBulk} THB each, even across different rooms in the same project. Send the room numbers and units and I'll give you the total and time needed before booking.` },
    ],
    nearH: (t: string) => `Other condos in ${t}`, allDir: "Full condo directory", brandLink: (b: string) => `All ${b} condos in Chiang Mai`,
    note: "Building details were compiled from publicly published project data, with the sub-district checked against the project address, as of September 2026. Project names belong to their owners; I am not an agent or partner of the project. If anything is wrong, let me know on LINE.",
    ctaT: (n: string) => `Book aircon cleaning at ${n}`, ctaS: "Send your room number, floor and number of units on LINE and I'll give you the price and my next free slot.",
  },
  "zh-CN": {
    home: "中文", homePath: "/zh", hub: "清迈公寓名录", locale: "zh_CN",
    title: (n: string, t: string) => `${n}（${t}）空调上门清洗`,
    desc: (n: string, t: string) => `清迈 ${t} ${n} 公寓房间的空调清洗、维修和安装。每台 ${p.wash.std} 泰铢，三台以上每台 ${p.wash.stdBulk} 泰铢，不收路费，开工前报价。`,
    h1: (n: string) => `${n} 公寓空调上门清洗`,
    lead: (n: string, t: string) => `我为 ${n} 的住户提供空调清洗、维修和安装。该项目位于 ${t}，在我的常规服务范围内。价格与其他地区相同，不收路费，每次开工前都会先报价。`,
    line: "用 LINE 发房号和空调台数", call: "致电",
    factsH: "楼栋信息", fName: "项目", fTambon: "分区", fRoad: "道路", fFloors: "层数", fYear: "竣工年份", fDev: "开发商",
    yr: (y: number) => `${y} 年（楼龄约 ${NOW - y} 年）`, fl: (f: string) => `${f} 层`,
    workH: (n: string) => `${n} 房间里的空调工作`,
    high: (f: number) => `${f} 层高楼：设备要用电梯运送，高楼通常规定技师可进入的时段。请先向公寓管理处确认，预约前告诉我，我会排在可进入的时段内。`,
    mid: (f: number) => `${f} 层楼：请告诉我楼栋和楼层，方便我预留搬运设备的时间；如果有好几间房，一次上门全部做完。`,
    low: (f: number) => `${f} 层楼：没有电梯的高楼层需要走楼梯搬设备。请先告诉我楼层，我会准备一趟就能拿上去的工具包。`,
    old: (a: number) => `楼龄约 ${a} 年。仍在使用原装空调的房间，多半是旧型号。预约前可以先拍室外机侧面的铭牌发给我，我先看型号和冷媒种类；如果需要大修，我会直接告诉您和买新机相比是否划算。`,
    midAge: (a: number) => `楼龄约 ${a} 年，房间里的空调已经用了好几年。如果从没做过深度清洗，或开始有霉味，我会先看状况，再告诉您普通清洗是否足够，还是值得拆洗。`,
    newAge: "楼盘较新，随房附带的空调可能仍在厂家保修期内，请先查看保修条件再找外部技师。定期清洗我可以照常为您做。",
    common: [
      "公寓的室外机通常在阳台或外墙设备位。先拍一张位置照片发给我，我会带对设备。",
      "没有阳台的房间也能洗：我用接水罩包住室内机，铺两层防污布，交付前收拾干净。",
    ],
    areaH: (t: string) => `${t} 一带的情况`, areaMore: "了解这一带",
    checkH: "预约前请告诉我",
    check: (n: string) => [`${n} 的楼栋和楼层`, "公寓管理处的规定，例如技师可进入时间、登记或电梯卡", "空调台数和 BTU 大小", "室外机位置", "技师停车位"],
    priceH: "价格",
    price: [`壁挂机清洗每台 ${p.wash.std} 泰铢`, `三台以上每台 ${p.wash.stdBulk} 泰铢（同一项目不同房间可合并计算）`, `深度拆洗 ${p.wash.premium} 泰铢（按机型大小计价）`, `维修检测费 ${p.repair.diagnostic} 泰铢，确认维修后抵扣`, "滴水保修 30 天（深度拆洗 60 天），维修保修 30 天"],
    allPrice: "全部价格", allPricePath: "/zh/pricing",
    faqH: "常见问题",
    faqs: (n: string, t: string) => [
      { q: `${n} 在服务范围内吗？要收路费吗？`, a: `在的。${t} 在我的常规服务范围内，价格与其他地区相同，不收路费，预约前我会先告诉您总价。` },
      { q: `在 ${n} 洗空调，需要先通知管理处吗？`, a: "大多数公寓要求提前通知，有些规定技师可进入的时段或需要登记。请先向所在楼的管理处确认，预约前把条件告诉我，我会排在实际可进入的时段。" },
      { q: `在 ${n} 有好几间房，怎么收费？`, a: `一次上门清洗三台以上，每台 ${p.wash.stdBulk} 泰铢，即使分在同一项目的不同房间也可以。把房号和台数发给我，预约前我会告诉您总价和所需时间。` },
    ],
    nearH: (t: string) => `${t} 的其他公寓`, allDir: "完整公寓名录", brandLink: (b: string) => `清迈全部 ${b} 公寓`,
    note: "楼栋资料整理自公开发布的项目信息，并按项目地址核对分区，截至 2026 年 9 月。项目名称归各自所有者，本店不是该项目的代理或合作方。如资料有误，欢迎用 LINE 告诉我。",
    ctaT: (n: string) => `预约 ${n} 空调清洗`, ctaS: "用 LINE 发来房号、楼层和空调台数，我会先告诉您价格和最近的空档。",
  },
} as const;


/**
 * หน้ารายโครงการที่ให้ Google เก็บ (เจ้าของเลือก 2 ต.ค. 2569)
 * ตรวจแล้วข้อความเฉพาะของแต่ละหน้ามีราว 15% ที่เหลือเป็นโครงเดียวกัน 316 × 3 ภาษา ≈ 950 หน้า
 * มากกว่าหน้าจริงทั้งเว็บ เสี่ยงโดนมองเป็นเนื้อหาสร้างจำนวนมากแล้วฉุดอันดับหน้าบริการ
 * จึงเก็บเฉพาะหน้าไทยที่มีข้อมูลอาคารครบ (ชื่อไทย ถนน ปีที่สร้าง จำนวนชั้น)
 * ที่เหลือยังเปิดดูได้และลิงก์ไปต่อได้ตามปกติ แค่ตั้ง noindex และไม่อยู่ใน sitemap
 */
export function condoIndexable(c: CondoEntry, lang: CondoLang = "th") {
  const f = factsOf(c);
  return lang === "th" && !!c.th && !!c.r && !!f.f && !!f.y;
}

export function condoDetailMetadata(c: CondoEntry, lang: CondoLang): Metadata {
  const t = T[lang];
  const title = t.title(name(lang, c), tn(lang, c.t)), description = t.desc(name(lang, c), tn(lang, c.t));
  return {
    title: { absolute: title },
    description,
    // ไม่ประกาศ hreflang แล้ว เพราะฉบับอังกฤษ/จีนเป็น noindex ทั้งหมด ประกาศคู่ภาษาไปหาหน้า noindex จะขัดกันเอง
    alternates: { canonical: condoPath(lang, c.s) },
    ...(condoIndexable(c, lang) ? {} : { robots: { index: false, follow: true } }),
    ...share({ title, description, path: condoPath(lang, c.s), locale: t.locale }),
  };
}

export function CondoDetailView({ c, lang }: { c: CondoEntry; lang: CondoLang }) {
  const t = T[lang];
  const n = name(lang, c), tt = tn(lang, c.t);
  const a = areaOfTambon(c.t);
  const localLead = a ? (lang === "th" ? ("local" in a && a.local ? a.local.lead : undefined) : areaText(lang, a.slug)?.lead) : undefined;
  const br = brandOf(c);
  const k = factsOf(c);
  const f = firstInt(k.f);
  const age = k.y ? NOW - k.y : undefined;
  const work: string[] = [];
  if (f) work.push(f >= 15 ? t.high(f) : f >= 6 ? t.mid(f) : t.low(f));
  if (age !== undefined) work.push(age >= 12 ? t.old(age) : age >= 5 ? t.midAge(age) : t.newAge);
  work.push(...t.common);
  const near = condoDirectory.filter((x) => x.t === c.t && x.s !== c.s).slice(0, 12);
  const faqs = t.faqs(n, tt);
  const htmlLang = lang === "th" ? undefined : lang;
  const trail = [
    { name: "หน้าแรก", path: "/" },
    ...(lang === "th" ? [] : [{ name: t.home, path: t.homePath }]),
    { name: t.hub, path: directoryPath(lang) },
    { name: n, path: condoPath(lang, c.s) },
  ];
  const facts: [string, React.ReactNode][] = [
    [t.fName, <>{n}{lang === "th" && c.th && c.th !== c.en && <span className="block text-sm text-ink-soft" lang="en">{c.en}</span>}{lang !== "th" && c.th && <span className="block text-sm text-ink-soft" lang="th">{c.th}</span>}</>],
    [t.fTambon, a ? <Link href={areaPath(lang, a.slug)} className="text-brand-700 hover:underline">{tt}</Link> : tt],
    // อังกฤษ/จีนแสดงถนนเฉพาะที่มีชื่ออังกฤษที่คัดแล้ว (โครงการแบรนด์) ชื่อถนนภาษาไทยคนต่างชาติอ่านไม่ได้
    ...(lang === "th" ? (c.r ? [[t.fRoad, c.r] as [string, React.ReactNode]] : []) : br ? [[t.fRoad, br.x.roadEn] as [string, React.ReactNode]] : []),
    ...(k.f ? [[t.fFloors, t.fl(k.f)] as [string, React.ReactNode]] : []),
    ...(k.y ? [[t.fYear, t.yr(k.y)] as [string, React.ReactNode]] : []),
    ...(br ? [[t.fDev, <Link key="d" href={brandPath(lang, br.b.slug)} className="text-brand-700 hover:underline">{lang === "th" ? br.b.developerTh : br.b.developerEn}</Link>] as [string, React.ReactNode]] : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={htmlLang}>
        {lang === "th" && <Breadcrumbs trail={trail} />}
        <header className="wrap max-w-4xl pt-10 pb-10">
          <p className="eyebrow"><IconPin className="h-4 w-4" />{tt} · {lang === "th" ? "เชียงใหม่" : lang === "en" ? "Chiang Mai" : "清迈"}</p>
          <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">{t.h1(n)}</h1>
          <p className="lead mt-5">{t.lead(n, tt)}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`${lang}-condo-page-line`}><IconLine className="h-5 w-5" />{t.line}</a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta={`${lang}-condo-page-call`}><IconPhone className="h-5 w-5" />{t.call} {site.phone}</a>
          </div>
        </header>
      </div>

      <section className="section pt-4" lang={htmlLang}>
        <div className="wrap max-w-4xl">
          <h2 className="h2">{t.factsH}</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {facts.map(([k, v]) => (
              <div key={k} className="card p-5">
                <dt className="text-sm font-bold text-brand-700">{k}</dt>
                <dd className="mt-2 text-[15px] leading-7 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-sand" lang={htmlLang}>
        <div className="wrap max-w-3xl">
          <h2 className="h2">{t.workH(n)}</h2>
          <ul className="mt-6 space-y-4">
            {work.map((w) => <li key={w} className="card flex gap-3 p-5 text-[15px] leading-8 text-ink-soft"><IconCheck className="mt-1.5 h-5 w-5 shrink-0 text-mint" />{w}</li>)}
          </ul>
        </div>
      </section>

      {localLead && a && (
        <section className="section" lang={htmlLang}>
          <div className="wrap max-w-3xl">
            <h2 className="h2">{t.areaH(tt)}</h2>
            <p className="lead mt-4">{localLead}</p>
            <Link href={areaPath(lang, a.slug)} className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">{t.areaMore}<IconChevron className="h-4 w-4" /></Link>
          </div>
        </section>
      )}

      <section className="section" lang={htmlLang}>
        <div className="wrap grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-bold">{t.checkH}</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-7 text-ink-soft">{t.check(n).map((x) => <li key={x}>{x}</li>)}</ol>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-bold">{t.priceH}</h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-7 text-ink-soft">{t.price.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link href={t.allPricePath} className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">{t.allPrice}<IconChevron className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang={htmlLang}>
        <div className="wrap max-w-3xl">
          <h2 className="h2">{t.faqH}</h2>
          <div className="mt-7 space-y-5">
            {faqs.map((q) => (
              <div key={q.q} className="card p-6">
                <h3 className="font-bold">{q.q}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{q.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" lang={htmlLang}>
        <div className="wrap max-w-4xl">
          {near.length > 0 && (
            <>
              <h2 className="h2">{t.nearH(tt)}</h2>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {near.map((x) => (
                  <li key={x.s}><Link href={condoPath(lang, x.s)} className="card flex items-center justify-between gap-2 px-4 py-3 text-sm font-semibold hover:shadow-lift">{name(lang, x)}<IconChevron className="h-4 w-4 shrink-0 text-brand-700" /></Link></li>
                ))}
              </ul>
            </>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`${directoryPath(lang)}#t-${a?.slug ?? ""}`} className="btn-ghost">{t.allDir}<IconChevron className="h-4 w-4" /></Link>
            {br && <Link href={brandPath(lang, br.b.slug)} className="btn-ghost">{t.brandLink(lang === "th" ? br.b.th : br.b.en)}<IconChevron className="h-4 w-4" /></Link>}
          </div>
          <p className="mt-8 text-xs leading-6 text-ink-soft">{t.note}</p>
        </div>
      </section>

      {lang === "th" ? (
        <CtaBand title={t.ctaT(n)} subtitle={t.ctaS} />
      ) : (
        <section className="section bg-gradient-to-b from-brand-50 to-white" lang={htmlLang}>
          <div className="wrap max-w-3xl text-center">
            <h2 className="h2">{t.ctaT(n)}</h2>
            <p className="lead mt-4">{t.ctaS}</p>
            <div className="mt-8 flex justify-center">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`${lang}-condo-page-cta`}><IconLine className="h-5 w-5" />{t.line}</a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
