import { p, btu } from "./site";
import type { CalcGroup, CalcLang, CalcRow } from "@/components/PriceCalculator";

/**
 * ข้อมูลแถวของเครื่องคิดค่าบริการ ดึงตัวเลขจาก `p` ที่เดียว (ห้ามพิมพ์ราคาซ้ำ)
 * อัตราหลายเครื่องตามเงื่อนไขร้าน: ติดผนังเล็กตั้งแต่ 3 เครื่อง ติดผนังใหญ่ตั้งแต่ 2 เครื่อง
 *
 * แยกกลุ่มตามประเภทงาน ล้าง / ติดตั้ง–ย้าย / ซ่อม / เครื่องซักผ้า (เจ้าของสั่ง 29 ก.ย. 2569)
 * short = ชื่อที่โชว์ในแถว (แท็บบอกประเภทงานแล้ว) label = ชื่อเต็มที่ส่งเข้า LINE
 * hint = หมายเหตุสั้นต่อท้ายราคา เว้นว่างได้
 */
const num = (s: string) => Number(s.replace(/[^\d]/g, ""));
const range = (s: string): [number, number] => {
  const m = s.split(/[–-]/).map(num);
  return [m[0], m[1] ?? m[0]];
};
const one = (s: string) => ({ unitLo: num(s), unitHi: num(s) });

export function calcRows(only?: CalcGroup, lang: CalcLang = "th"): CalcRow[] {
  const [premLo, premHi] = range(p.wash.premium);
  const rows: CalcRow[] = [
    // ---- ล้างแอร์
    { key: "wallS", group: "wash", label: `ล้างแอร์ติดผนัง ${btu.washStd} BTU`, short: `ติดผนัง ${btu.washStd} BTU`,
      hint: "", ...one(p.wash.std), bulkMin: 3, bulkUnit: num(p.wash.stdBulk) },
    { key: "wallL", group: "wash", label: `ล้างแอร์ติดผนัง ${btu.washBig} BTU`, short: `ติดผนัง ${btu.washBig} BTU`,
      hint: "", ...one(p.wash.big), bulkMin: 2, bulkUnit: num(p.wash.bigBulk) },
    { key: "premium", group: "wash", label: "ล้างแอร์ถอดทุกชิ้นส่วน (Premium Full Wash)", short: "ถอดล้างทุกชิ้น (Premium)",
      hint: p.wash.premiumNote, unitLo: premLo, unitHi: premHi },
    { key: "suspended", group: "wash", label: "ล้างแอร์แขวนใต้ฝ้า", short: "แอร์แขวนใต้ฝ้า", hint: "", ...one(p.wash.suspended), from: true },
    { key: "cassette", group: "wash", label: "ล้างแอร์ 4 ทิศทาง (ฝังฝ้า)", short: "แอร์ 4 ทิศทาง (ฝังฝ้า)", hint: "", ...one(p.wash.cassette), from: true },
    // ---- ติดตั้ง / ย้ายแอร์
    { key: "installS", group: "install", label: `ติดตั้งแอร์ใหม่ ${btu.installSmall} BTU`, short: `ติดตั้งใหม่ ${btu.installSmall} BTU`,
      hint: "รวมขาแขวน ท่อ 4 ม. รางครอบ", ...one(p.install.small) },
    { key: "installL", group: "install", label: `ติดตั้งแอร์ใหม่ ${btu.installLarge} BTU`, short: `ติดตั้งใหม่ ${btu.installLarge} BTU`,
      hint: "รวมขาแขวน ท่อ 4 ม. รางครอบ", ...one(p.install.large) },
    { key: "relocate", group: "install", label: "ย้ายแอร์ ถอดและติดตั้งที่ใหม่", short: "ย้ายแอร์ (ถอด + ติดตั้งที่ใหม่)", hint: "", ...one(p.install.relocate) },
    { key: "removeOnly", group: "install", label: "ถอดแอร์อย่างเดียว", short: "ถอดแอร์อย่างเดียว", hint: "", ...one(p.install.removeOnly) },
    // ---- ซ่อมแอร์ ค่าซ่อมจริงแจ้งหลังตรวจ จึงคิดได้แค่ค่าตรวจเช็ค
    { key: "diagnostic", group: "repair", label: "ตรวจเช็คอาการแอร์เสีย", short: "ตรวจเช็คอาการเสีย",
      hint: "หักคืนเมื่อตกลงซ่อม", ...one(p.repair.diagnostic) },
    // ---- ล้างเครื่องซักผ้า
    { key: "topS", group: "washer", label: "ล้างเครื่องซักผ้าฝาบน ไม่เกิน 15 กก.", short: "ฝาบน ไม่เกิน 15 กก.", hint: "", ...one(p.washer.topLoad) },
    { key: "topM", group: "washer", label: "ล้างเครื่องซักผ้าฝาบน 15.1–19 กก.", short: "ฝาบน 15.1–19 กก.", hint: "", ...one(p.washer.topLoadMid) },
    { key: "topL", group: "washer", label: "ล้างเครื่องซักผ้าฝาบน มากกว่า 19 กก.", short: "ฝาบน มากกว่า 19 กก.", hint: "", ...one(p.washer.topLoadBig) },
    { key: "front", group: "washer", label: "ล้างเครื่องซักผ้าฝาหน้า", short: "ฝาหน้า", hint: "", ...one(p.washer.frontLoad), from: true },
  ];
  const tr = lang === "th" ? undefined : INTL[lang];
  return rows
    .filter((r) => !only || r.group === only)
    .map((r) => (tr && tr[r.key] ? { ...r, label: tr[r.key][0], short: tr[r.key][1], hint: tr[r.key][2] ?? "" } : r));
}

/**
 * ชื่อแถวภาษาอังกฤษ/จีน [label ที่ส่งเข้า LINE, ชื่อสั้นในแถว, หมายเหตุ]
 * ขนาด BTU ดึงจาก btu เหมือนฝั่งไทย ห้ามพิมพ์ตัวเลขเอง
 */
const INTL: Record<"en" | "zh-CN", Record<string, [string, string, string?]>> = {
  en: {
    wallS: [`Aircon clean, wall unit ${btu.washStd} BTU`, `Wall unit ${btu.washStd} BTU`],
    wallL: [`Aircon clean, wall unit ${btu.washBig} BTU`, `Wall unit ${btu.washBig} BTU`],
    premium: ["Full strip-down clean (Premium Full Wash)", "Full strip-down clean (Premium)", "depends on BTU size"],
    suspended: ["Aircon clean, suspended ceiling unit", "Suspended ceiling unit"],
    cassette: ["Aircon clean, four-way ceiling cassette", "Four-way ceiling cassette"],
    installS: [`New installation ${btu.installSmall} BTU`, `New install ${btu.installSmall} BTU`, "bracket, 4 m pipe, trunking included"],
    installL: [`New installation ${btu.installLarge} BTU`, `New install ${btu.installLarge} BTU`, "bracket, 4 m pipe, trunking included"],
    relocate: ["Relocation, remove and refit elsewhere", "Relocation (remove + refit)"],
    removeOnly: ["Removal only", "Removal only"],
    diagnostic: ["Aircon fault diagnosis", "Fault diagnosis", "credited if you go ahead"],
    topS: ["Washing machine clean, top loader up to 15 kg", "Top loader up to 15 kg"],
    topM: ["Washing machine clean, top loader 15.1–19 kg", "Top loader 15.1–19 kg"],
    topL: ["Washing machine clean, top loader over 19 kg", "Top loader over 19 kg"],
    front: ["Washing machine clean, front loader", "Front loader"],
  },
  "zh-CN": {
    wallS: [`空调清洗，壁挂机 ${btu.washStd} BTU`, `壁挂机 ${btu.washStd} BTU`],
    wallL: [`空调清洗，壁挂机 ${btu.washBig} BTU`, `壁挂机 ${btu.washBig} BTU`],
    premium: ["深度拆洗（Premium Full Wash）", "深度拆洗（Premium）", "按 BTU 大小计价"],
    suspended: ["空调清洗，吊顶机", "吊顶机"],
    cassette: ["空调清洗，四面出风嵌入机", "四面出风嵌入机"],
    installS: [`新机安装 ${btu.installSmall} BTU`, `新机安装 ${btu.installSmall} BTU`, "含支架、4 米铜管、线槽"],
    installL: [`新机安装 ${btu.installLarge} BTU`, `新机安装 ${btu.installLarge} BTU`, "含支架、4 米铜管、线槽"],
    relocate: ["移机，拆下并在新位置安装", "移机（拆 + 装）"],
    removeOnly: ["仅拆机", "仅拆机"],
    diagnostic: ["空调故障检测", "故障检测", "决定维修则抵扣"],
    topS: ["洗衣机清洗，上开式 15 公斤以下", "上开式 15 公斤以下"],
    topM: ["洗衣机清洗，上开式 15.1–19 公斤", "上开式 15.1–19 公斤"],
    topL: ["洗衣机清洗，上开式 19 公斤以上", "上开式 19 公斤以上"],
    front: ["洗衣机清洗，前开式", "前开式"],
  },
};
