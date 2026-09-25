import { site } from "./site";

/**
 * ลิงก์เปิดแชท LINE พร้อมข้อความตั้งต้นในช่องพิมพ์
 *
 * รูปแบบ https://line.me/R/oaMessage/<LINE ID>/?<ข้อความ>
 * ต้องเข้ารหัสทั้ง id (เครื่องหมาย @ เป็น %40) และตัวข้อความ
 * ผู้ใช้ยังแก้ข้อความได้ก่อนกดส่ง ไม่ใช่การส่งอัตโนมัติ
 *
 * ข้อความตั้งต้นทำเป็นแบบฟอร์มเว้นช่องให้เติม เพราะคนที่ทักเข้ามาตอนดึก
 * มักพิมพ์แค่ "สนใจครับ" แล้วต้องถามกลับอีกสามรอบกว่าจะจองคิวได้จริง
 */
export function lineBookUrl(message: string, lineId: string = site.lineId) {
  return `https://line.me/R/oaMessage/${encodeURIComponent(lineId)}/?${encodeURIComponent(message)}`;
}

const tail = "งานที่ต้องการ (ล้าง / ซ่อม / ติดตั้ง / ย้าย):\nจำนวนเครื่อง:\nพื้นที่ / หมู่บ้าน:";

export const bookEveningMessage = `ขอจองคิวช่วงเย็นหลังเลิกงาน\nวันที่สะดวก:\nช่วงเวลา: 17:00 – 20:00 น.\n${tail}`;

export const bookSundayMessage = `ขอจองคิววันอาทิตย์ล่วงหน้า\nวันอาทิตย์ที่สะดวก:\nช่วงเวลา:\n${tail}`;

export const bookEveningUrl = lineBookUrl(bookEveningMessage);
export const bookSundayUrl = lineBookUrl(bookSundayMessage);

/** บัญชี LINE ล้างถังเครื่องซักผ้าเป็นคนละบัญชี จึงต้องมีลิงก์แยก */
export const bookEveningUrlWasher = lineBookUrl(bookEveningMessage, site.lineId2);
export const bookSundayUrlWasher = lineBookUrl(bookSundayMessage, site.lineId2);

/**
 * ฉบับอังกฤษและจีน ใช้ในฟุตเตอร์ของสองภาษานั้น
 * เขียนเป็นแบบฟอร์มเหมือนฉบับไทย เพราะลูกค้าต่างชาติมักทักมาเป็นประโยคเดียวเช่นกัน
 */
const tailEn = "Job (clean / repair / install / move):\nNumber of units:\nArea or village:";
const tailZh = "服务项目（清洗 / 维修 / 安装 / 移机）：\n台数：\n地址或小区：";

export const bookEveningUrlEn = lineBookUrl(
  `I would like to book an evening slot after work\nPreferred date:\nTime: 17:00 - 20:00\n${tailEn}`,
);
export const bookSundayUrlEn = lineBookUrl(
  `I would like to book a Sunday slot in advance\nPreferred Sunday:\nTime:\n${tailEn}`,
);
export const bookEveningUrlZh = lineBookUrl(
  `我想预约下班后的时段\n希望日期：\n时间：17:00 - 20:00\n${tailZh}`,
);
export const bookSundayUrlZh = lineBookUrl(
  `我想提前预约周日的时段\n希望的周日：\n时间：\n${tailZh}`,
);
