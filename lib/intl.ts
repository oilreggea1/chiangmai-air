import type { Job } from "./jobs";

/**
 * ข้อมูลกลางสำหรับหน้าอังกฤษและจีน (29 ก.ย. 2569)
 *
 * เจ้าของสั่งให้หน้าอังกฤษ/จีนมีข้อมูลและฟังก์ชันเดียวกับหน้าไทย
 * ไฟล์นี้รวมชื่อพื้นที่แบบถอดเสียง ชื่ออำเภอ และตัวแปลชื่องานจากโพสต์ส่งงาน
 * เพื่อไม่ต้องพิมพ์ซ้ำในแต่ละหน้า ตัวเลขราคาต้องดึงจาก `p` เสมอ ห้ามพิมพ์ในไฟล์นี้
 */
export type Lang = "en" | "zh-CN";

/** ชื่อตำบลแบบถอดเสียงตามป้ายทางหลวงและที่อยู่ไปรษณีย์ ใช้ทั้งหน้าอังกฤษและจีน */
export const tambonRoman: Record<string, string> = {
  // เมืองเชียงใหม่
  ท่าศาลา: "Tha Sala", หนองป่าครั่ง: "Nong Pa Khrang", หนองหอย: "Nong Hoi", วัดเกต: "Wat Ket",
  ช้างคลาน: "Chang Khlan", ช้างม่อย: "Chang Moi", ศรีภูมิ: "Si Phum", พระสิงห์: "Phra Sing",
  หายยา: "Hai Ya", ป่าแดด: "Pa Daet", ป่าตัน: "Pa Tan", ฟ้าฮ่าม: "Fa Ham", สันผีเสื้อ: "San Phi Suea",
  ช้างเผือก: "Chang Phueak", สุเทพ: "Suthep", แม่เหียะ: "Mae Hia",
  // สันกำแพง
  สันกำแพง: "San Kamphaeng", ต้นเปา: "Ton Pao", สันกลาง: "San Klang", ทรายมูล: "Sai Mun",
  บวกค้าง: "Buak Khang", แช่ช้าง: "Chae Chang", แม่ปูคา: "Mae Pu Kha",
  // สารภี
  ป่าบง: "Pa Bong", ไชยสถาน: "Chai Sathan", ชมภู: "Chom Phu", สารภี: "Saraphi", ยางเนิ้ง: "Yang Noeng",
  ท่าวังตาล: "Tha Wang Tan", หนองแฝก: "Nong Faek", หนองผึ้ง: "Nong Phueng",
  // ดอยสะเก็ด
  แม่คือ: "Mae Khue", สำราญราษฎร์: "Samran Rat", สันปูเลย: "San Pu Loei", ตลาดใหญ่: "Talat Yai", แม่ฮ้อยเงิน: "Mae Hoi Ngoen",
  // สันทราย
  สันพระเนตร: "San Phra Net", สันทรายหลวง: "San Sai Luang", สันทรายน้อย: "San Sai Noi", สันนาเม็ง: "San Na Meng",
  สันป่าเปา: "San Pa Pao", หนองจ๊อม: "Nong Chom", หนองหาร: "Nong Han", ป่าไผ่: "Pa Phai", หนองแหย่ง: "Nong Yaeng",
  เมืองเล็น: "Mueang Len", แม่แฝก: "Mae Faek", แม่แฝกใหม่: "Mae Faek Mai",
  // หางดง
  สันผักหวาน: "San Phak Wan", บ้านแหวน: "Ban Waen", หนองควาย: "Nong Khwai", หางดง: "Hang Dong",
  // แม่ออน
  ออนเหนือ: "On Nuea", ออนกลาง: "On Klang", บ้านสหกรณ์: "Ban Sahakon",
};

/** ชื่อหน้าพื้นที่ที่ไม่ใช่ชื่อตำบลตรง ๆ */
const areaExtra: Record<string, string> = {
  "ต้นเปา–บ่อสร้าง": "Ton Pao – Bo Sang", "หนองป่าครั่ง–ท่าศาลา": "Nong Pa Khrang – Tha Sala",
  "วัดเกต–ฟ้าฮ่าม": "Wat Ket – Fa Ham", "ช้างคลาน–ไนท์บาซาร์": "Chang Khlan – Night Bazaar",
  "เมืองเชียงใหม่": "Mueang Chiang Mai", "ป่าแดด–หนองหอย": "Pa Daet – Nong Hoi", "นิมมาน–ช้างเผือก": "Nimman – Chang Phueak",
  ดอยสะเก็ด: "Doi Saket", สันทราย: "San Sai", แม่ออน: "Mae On",
};
export const areaRoman = (thai: string) => areaExtra[thai] ?? tambonRoman[thai] ?? thai;

/** ชื่ออำเภอ ใช้ key แบบ "อ.xxx" ตาม coverage ใน lib/site.ts */
export const amphoeName: Record<Lang, Record<string, string>> = {
  en: {
    "อ.เมืองเชียงใหม่": "Mueang Chiang Mai", "อ.สันทราย": "San Sai", "อ.หางดง": "Hang Dong", "อ.สันกำแพง": "San Kamphaeng",
    "อ.แม่ออน": "Mae On", "อ.สารภี": "Saraphi", "อ.ดอยสะเก็ด": "Doi Saket",
  },
  "zh-CN": {
    "อ.เมืองเชียงใหม่": "清迈市区 Mueang Chiang Mai", "อ.สันทราย": "San Sai 县", "อ.หางดง": "Hang Dong 县", "อ.สันกำแพง": "San Kamphaeng 县",
    "อ.แม่ออน": "Mae On 县", "อ.สารภี": "Saraphi 县", "อ.ดอยสะเก็ด": "Doi Saket 县",
  },
};

const MONTH_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function intlDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split("-").map(Number);
  return lang === "en" ? `${d} ${MONTH_EN[m - 1]} ${y}` : `${y}年${m}月${d}日`;
}

/**
 * ชื่องานภาษาอังกฤษ/จีน แปลจากชื่องานไทยที่มาจากโพสต์ส่งงานของร้าน
 * งานแอร์เขียนมือทีละงาน (มี 13 งาน ข้อความไม่ซ้ำแบบ) งานเครื่องซักผ้าแปลตามรูปแบบ
 * ถ้าเจอชื่อที่ไม่รู้จัก คืนค่า undefined ให้หน้าใช้ชื่อทั่วไปแทน ห้ามเดา
 */
const AIR: Record<string, { en: string; zh: string }> = {
  a01: { en: "Premium strip-down clean, 1 unit, after the owner reported water dripping", zh: "深度拆洗 1 台，客户反映空调滴水" },
  a02: { en: "Standard clean, 3 units at 3 homes", zh: "常规清洗 3 台，分属 3 户" },
  a03: { en: "Standard clean, 3 units", zh: "常规清洗 3 台" },
  a04: { en: "Wall-unit clean, 3 units", zh: "壁挂机清洗 3 台" },
  a05: { en: "Aircon clean, 5 units", zh: "空调清洗 5 台" },
  a06: { en: "Wall-unit clean, 5 units", zh: "壁挂机清洗 5 台" },
  a07: { en: "New installation, 1 unit", zh: "新机安装 1 台" },
  a08: { en: "1 new installation, 1 clean and 1 removal with refrigerant recovered, in one visit", zh: "一次上门：新装 1 台、清洗 1 台、拆机回收冷媒 1 台" },
  a09: { en: "Aircon clean, 3 units", zh: "空调清洗 3 台" },
  a10: { en: "Aircon clean, 4 units", zh: "空调清洗 4 台" },
  a11: { en: "Aircon clean, 4 units", zh: "空调清洗 4 台" },
  a12: { en: "Aircon clean, 4 units", zh: "空调清洗 4 台" },
  a13: { en: "Diagnosis, repair and clean in one visit", zh: "一次上门完成检测、维修和清洗" },
};
export function jobTitle(job: Job, lang: Lang): string {
  const zh = lang === "zh-CN";
  if (AIR[job.id]) return zh ? AIR[job.id].zh : AIR[job.id].en;
  const s = job.summary;
  const two = s.match(/^ถอดล้างเครื่องซักผ้า 2 เครื่อง ฝาหน้า (\S+) และฝาบน (\S+)$/);
  if (two) return zh ? `洗衣机拆洗 2 台：前开式 ${two[1]}、上开式 ${two[2]}` : `Washing machine drum clean, 2 machines: ${two[1]} front loader and ${two[2]} top loader`;
  const m = s.match(/^ถอดล้างเครื่องซักผ้า(ฝาบน|ฝาหน้า|สองถัง)(?: (\S+))?$/);
  if (m) {
    const type = { ฝาบน: zh ? "上开式" : "top loader", ฝาหน้า: zh ? "前开式" : "front loader", สองถัง: zh ? "双缸" : "twin-tub" }[m[1] as "ฝาบน"];
    const brand = m[2] ? ` ${m[2]}` : "";
    return zh ? `洗衣机拆洗，${type}${brand}` : `Washing machine drum clean, ${m[2] ? m[2] + " " : ""}${type}`;
  }
  return zh ? "现场实拍工作" : "Job photographed on site";
}

export const PHASE: Record<Lang, { before: string; during: string; after: string }> = {
  en: { before: "Before", during: "During", after: "After" },
  "zh-CN": { before: "施工前", during: "施工中", after: "施工后" },
};
