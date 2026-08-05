/**
 * บทความเก็บเป็น structured blocks ไม่ใช่ HTML ดิบ
 * เพื่อให้ทุกบทความหน้าตาเหมือนกัน แก้ดีไซน์ที่เดียวได้ทั้งเว็บ
 * และกัน HTML พังแบบเว็บ WordPress เดิมที่ถูกวางโค้ดซ้อนกัน
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; tone: "info" | "warn" | "tip" | "danger"; title: string; text: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "sources"; items: { title: string; publisher: string; url: string; note?: string }[] }
  | { type: "steps"; items: { title: string; detail: string }[] }
  | { type: "cta"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type ArticleCategory =
  | "ปัญหาแอร์"
  | "ดูแลรักษา"
  | "ฝุ่น PM2.5"
  | "ราคาและค่าใช้จ่าย"
  | "เลือกซื้อแอร์"
  | "เครื่องซักผ้า";

export type Article = {
  slug: string;
  title: string;          // <title> — ใส่คีย์เวิร์ด + เชียงใหม่
  h1: string;             // หัวข้อบนหน้า อาจสั้นกว่า title
  description: string;    // meta description 140-160 ตัวอักษร
  category: ArticleCategory;
  updated: string;        // YYYY-MM-DD (ค.ศ.) — ใช้ทำ dateModified schema
  readMins: number;
  /** ภาพนำของบทความ ใช้ทั้งบนหน้าและใน BlogPosting schema ให้ Google Images เก็บ index ได้ */
  image?: { src: string; alt: string };
  excerpt: string;        // สรุป 1-2 ประโยค โชว์ในหน้ารวมบทความ
  keywords: string[];
  blocks: Block[];
  faqs: { q: string; a: string }[];
  related: string[];      // slug บทความที่เกี่ยวข้อง
  relatedService?: string; // slug บริการที่ควรดันต่อ
};
