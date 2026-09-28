import { p } from "./site";
import type { CalcRow } from "@/components/PriceCalculator";

/**
 * ข้อมูลแถวของเครื่องคิดค่าบริการ ดึงตัวเลขจาก `p` ที่เดียว (ห้ามพิมพ์ราคาซ้ำ)
 * อัตราหลายเครื่องตามเงื่อนไขร้าน: ติดผนังเล็กตั้งแต่ 3 เครื่อง ติดผนังใหญ่ตั้งแต่ 2 เครื่อง
 */
const num = (s: string) => Number(s.replace(/[^\d]/g, ""));
const range = (s: string): [number, number] => {
  const m = s.split(/[–-]/).map(num);
  return [m[0], m[1] ?? m[0]];
};

export function calcRows(only?: "air" | "washer"): CalcRow[] {
  const [premLo, premHi] = range(p.wash.premium);
  const rows: CalcRow[] = [
    { key: "wallS", group: "air", label: "แอร์ติดผนัง 9,000–18,000 BTU",
      hint: `ล้างแบบมาตรฐาน เครื่องละ ${p.wash.std} บาท ตั้งแต่ 3 เครื่องขึ้นไปเครื่องละ ${p.wash.stdBulk} บาท`,
      unitLo: num(p.wash.std), unitHi: num(p.wash.std), bulkMin: 3, bulkUnit: num(p.wash.stdBulk) },
    { key: "wallL", group: "air", label: "แอร์ติดผนัง 18,001–36,000 BTU",
      hint: `ล้างแบบมาตรฐาน เครื่องละ ${p.wash.big} บาท ตั้งแต่ 2 เครื่องขึ้นไปเครื่องละ ${p.wash.bigBulk} บาท`,
      unitLo: num(p.wash.big), unitHi: num(p.wash.big), bulkMin: 2, bulkUnit: num(p.wash.bigBulk) },
    { key: "premium", group: "air", label: "ถอดล้างทุกชิ้นส่วน (Premium Full Wash)",
      hint: `เครื่องละ ${p.wash.premium} บาท ${p.wash.premiumNote}`, unitLo: premLo, unitHi: premHi },
    { key: "suspended", group: "air", label: "แอร์แขวนใต้ฝ้า", hint: `เริ่มเครื่องละ ${p.wash.suspended} บาท`,
      unitLo: num(p.wash.suspended), unitHi: num(p.wash.suspended), from: true },
    { key: "cassette", group: "air", label: "แอร์ 4 ทิศทาง (ฝังฝ้า)", hint: `เริ่มเครื่องละ ${p.wash.cassette} บาท`,
      unitLo: num(p.wash.cassette), unitHi: num(p.wash.cassette), from: true },
    { key: "topS", group: "washer", label: "เครื่องซักผ้าฝาบน ไม่เกิน 15 กก.", hint: `ถอดล้างถังทุกชิ้น เครื่องละ ${p.washer.topLoad} บาท`,
      unitLo: num(p.washer.topLoad), unitHi: num(p.washer.topLoad) },
    { key: "topM", group: "washer", label: "เครื่องซักผ้าฝาบน 15.1–19 กก.", hint: `ถอดล้างถังทุกชิ้น เครื่องละ ${p.washer.topLoadMid} บาท`,
      unitLo: num(p.washer.topLoadMid), unitHi: num(p.washer.topLoadMid) },
    { key: "topL", group: "washer", label: "เครื่องซักผ้าฝาบน มากกว่า 19 กก.", hint: `ถอดล้างถังทุกชิ้น เครื่องละ ${p.washer.topLoadBig} บาท`,
      unitLo: num(p.washer.topLoadBig), unitHi: num(p.washer.topLoadBig) },
    { key: "front", group: "washer", label: "เครื่องซักผ้าฝาหน้า", hint: `ถอดล้างถังทุกชิ้น เริ่มเครื่องละ ${p.washer.frontLoad} บาท`,
      unitLo: num(p.washer.frontLoad), unitHi: num(p.washer.frontLoad), from: true },
  ];
  return rows.filter((r) => !only || r.group === only);
}
