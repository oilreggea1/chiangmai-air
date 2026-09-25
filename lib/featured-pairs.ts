import { workCases } from "./work-cases";

/**
 * คู่ภาพก่อน–หลังที่คัดมาโชว์หน้าแรก (25 ก.ย. 2569)
 *
 * **ทำไมต้องระบุเลขรูปเอง ห้ามให้โค้ดเดาคู่**
 * ชุดภาพใน work-cases ส่วนใหญ่เรียงเป็น "รูปก่อนทั้งหมด แล้วตามด้วยรูปหลังทั้งหมด"
 * ไม่ได้เรียงสลับเป็นคู่ การหยิบรูปก่อนใบแรกมาคู่กับรูปหลังใบสุดท้ายแบบอัตโนมัติ
 * จึงได้คู่ที่เป็นคนละชิ้นงาน และบางเคสเป็นคนละเครื่องคนละยี่ห้อกันด้วยซ้ำ
 * ซึ่งผิดกติกาของเว็บเองที่เขียนไว้ว่าห้ามจับคู่ภาพข้ามงานเพื่อสร้าง before/after เทียม
 *
 * ทุกคู่ในไฟล์นี้เปิดดูรูปจริงทีละใบแล้วยืนยันด้วยตาว่าเป็นชิ้นเดียวกัน
 * ดูจากลายชิ้นส่วน รอยสกรู พื้นหลัง และมุมกล้องที่ตรงกัน
 * **ถ้าจะเพิ่มคู่ใหม่ ต้องเปิดดูรูปจริงก่อนเสมอ ห้ามเชื่อข้อความ alt**
 * เพราะ alt ของหลายรูปในไฟล์ต้นทางบรรยายไม่ตรงกับภาพ
 *
 * **กับดักที่เคยพลาดมาแล้ว** เลขท้ายชื่อไฟล์เริ่มที่ 01 แต่ beforeIndex/afterIndex เริ่มที่ 0
 * ไฟล์ -02 คือ index 1 เสมอ ตรวจด้วยการดู src ที่ออกมาจริงหลัง build ทุกครั้ง
 *
 * caption คือคำบรรยายที่เขียนใหม่จากสิ่งที่เห็นในภาพจริง ไม่ได้ก๊อป alt มา
 */
export type FeaturedPair = {
  slug: string;
  /** ลำดับรูปในอาร์เรย์ images ของเคสนั้น (เริ่มที่ 0) */
  beforeIndex: number;
  afterIndex: number;
  /** ชิ้นส่วนที่กำลังเทียบ ใช้เป็นหัวการ์ด */
  part: string;
  /** สิ่งที่ภาพคู่นี้บอก เขียนสั้น อ่านจบในบรรทัดเดียว */
  caption: string;
};

/** คู่เด่นใต้ส่วนบริการ ให้เห็นตั้งแต่จอที่สองถึงสาม หนึ่งงานแอร์ หนึ่งงานเครื่องซักผ้า */
export const topPairs: FeaturedPair[] = [
  {
    slug: "mitsubishi-mr-slim-wash-2569-06",
    beforeIndex: 0,
    afterIndex: 4,
    part: "คอยล์ร้อน แอร์ Mitsubishi Mr.Slim",
    caption: "ครีบระบายความร้อนที่ถูกฝุ่นและขุยผ้าอัดจนตัน กับครีบชุดเดียวกันหลังล้าง",
  },
  {
    slug: "mueang-lg-frontload-2569-08",
    beforeIndex: 6,
    afterIndex: 12,
    part: "ถังนอกและขอบยางประตู เครื่องซักผ้าฝาหน้า LG",
    caption: "คราบดำรอบขอบถังและช่องเซ็นเซอร์ กับชิ้นเดียวกันหลังถอดล้าง",
  },
];

/** คู่ในส่วนผลงานพื้นเข้ม แทนกริดรูปเดี่ยวหกรูปแบบเดิม */
export const portfolioPairs: FeaturedPair[] = [
  {
    slug: "beko-premium-strip-wash-2569-06",
    // ไฟล์ -02 กับ -08 ซึ่งคือ index 1 กับ 7 เพราะเลขท้ายไฟล์เริ่มที่ 1 แต่ index เริ่มที่ 0
    beforeIndex: 1,
    afterIndex: 7,
    part: "คอยล์ร้อน แอร์ Beko",
    caption: "ฝุ่นเทาอัดเต็มช่องตะแกรง กับแผงเดียวกันที่ครีบกลับมาโปร่ง",
  },
  {
    slug: "beko-premium-strip-wash-2569-06",
    // ไฟล์ -01 กับ -07
    beforeIndex: 0,
    afterIndex: 6,
    part: "แผ่นกรองอากาศ ชุดเดียวกัน",
    caption: "ตาข่ายที่ทึบจนมองไม่เห็นผ้าใบด้านล่าง กับแผ่นเดิมที่มองทะลุเห็นลายผ้าใบ",
  },
  {
    slug: "mueang-lg-frontload-2569-08",
    beforeIndex: 3,
    afterIndex: 9,
    part: "ผิวนอกถังสเตนเลส เครื่องซักผ้าฝาหน้า LG",
    caption: "ฟิล์มคราบดำคลุมทั้งใบ กับถังใบเดิมที่ผิวกลับมาสะท้อนเงา",
  },
];

/** ดึงข้อมูลเคสและรูปจริงตามคู่ที่ระบุ ถ้าเลขรูปเพี้ยนจะคืน null แทนการหยิบรูปมั่ว */
export function resolvePair(pair: FeaturedPair) {
  const c = workCases.find((w) => w.slug === pair.slug);
  const before = c?.images[pair.beforeIndex];
  const after = c?.images[pair.afterIndex];
  if (!c || !before || !after) return null;
  if (before.phase !== "ก่อนทำ" || after.phase !== "หลังทำ") return null;
  return { ...pair, service: c.service, title: c.title, before, after };
}

/**
 * ทะเบียนคู่ภาพที่ยืนยันด้วยตาแล้วว่าเป็นชิ้นเดียวกัน แยกตามเคส
 *
 * ใช้กับแถบงานล่าสุดของหน้าอังกฤษและจีน ซึ่งเดิมให้โค้ดเดาคู่เอง
 * เคสที่ไม่มีชื่ออยู่ในทะเบียนนี้จะไม่ถูกนำไปโชว์เป็นคู่ก่อน–หลังที่ไหนทั้งสิ้น
 * ยอมโชว์น้อยเคส ดีกว่าโชว์คู่ที่เป็นคนละเครื่อง
 *
 * ตัวเลขคือ index ในอาร์เรย์ images ของเคสนั้น เริ่มที่ 0
 * ชื่อไฟล์ลงท้ายด้วย -01 คือ index 0 เสมอ ระวังสลับ
 */
export const verifiedPairs: Record<string, { before: number; after: number; part: string }[]> = {
  "mitsubishi-mr-slim-wash-2569-06": [{ before: 0, after: 4, part: "คอยล์ร้อน" }],
  "beko-premium-strip-wash-2569-06": [
    { before: 1, after: 7, part: "คอยล์ร้อน" },
    { before: 0, after: 6, part: "แผ่นกรองอากาศ" },
  ],
  "mueang-lg-frontload-2569-08": [
    { before: 6, after: 12, part: "ถังนอกและขอบยางประตู" },
    { before: 3, after: 9, part: "ผิวนอกถังสเตนเลส" },
    { before: 1, after: 2, part: "ฐานถังและขาแขนยึด" },
  ],
  "maejo-topload-2-2569-08": [
    { before: 1, after: 5, part: "ด้านในถังชั้นนอก" },
    { before: 2, after: 6, part: "ขอบปากถัง" },
  ],
  "lg-smart-inverter-topload-2569-07": [{ before: 1, after: 7, part: "ด้านในถังชั้นนอก" }],
};

/** คู่แรกที่ยืนยันแล้วของเคสนั้น คืน null ถ้าเคสนี้ยังไม่มีคู่ที่ตรวจแล้ว */
export function firstVerifiedPair(slug: string) {
  const list = verifiedPairs[slug];
  if (!list || list.length === 0) return null;
  const c = workCases.find((w) => w.slug === slug);
  const before = c?.images[list[0].before];
  const after = c?.images[list[0].after];
  if (!before || !after) return null;
  return { before, after, part: list[0].part };
}
