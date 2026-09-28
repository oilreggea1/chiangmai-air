import { p, btu } from "./site";
import type { CalcGroup, CalcRow } from "@/components/PriceCalculator";

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

export function calcRows(only?: CalcGroup): CalcRow[] {
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
  return rows.filter((r) => !only || r.group === only);
}
