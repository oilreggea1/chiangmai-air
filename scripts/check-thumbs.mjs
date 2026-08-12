/**
 * ตัวดักภาพย่อหาย — รันก่อน build ทุกครั้ง
 *
 * ที่มา: หน้าหมวดผลงานแสดงภาพย่อที่สร้างไว้ล่วงหน้าใน public/work/thumb
 * ไม่ได้แปลงภาพตอนมีคนเข้าเว็บ (เหตุผลอยู่ใน scripts/make-thumbs.py และ next.config.ts)
 *
 * ถ้าเพิ่มรูปใหม่ใน portfolio แล้วลืมรัน make-thumbs.py
 * รูปนั้นจะกลายเป็นช่องว่างบนเว็บจริงโดยไม่มีอะไรเตือน ซึ่งเป็นอาการเดียวกับ
 * ตอนที่โควตาแปลงภาพของ Vercel หมดเมื่อ 11 ส.ค. 2569 และกว่าจะรู้ก็ต่อเมื่อเจ้าของเห็นเอง
 *
 * สคริปต์นี้เทียบรายชื่อไฟล์ในบล็อก portfolio ของ lib/site.ts กับไฟล์ในโฟลเดอร์ภาพย่อ
 * ขาดแม้แต่ไฟล์เดียวให้ build ไม่ผ่าน
 *
 * วิธีแก้เมื่อ build ไม่ผ่าน:  python3 scripts/make-thumbs.py
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const src = readFileSync(join(ROOT, "lib/site.ts"), "utf8");

/** ต้องให้ตรงกับ GRID_BLOCKS ใน scripts/make-thumbs.py ถ้าแก้ที่นั่นต้องแก้ที่นี่ด้วย */
const GRID_BLOCKS = [
  ["export const portfolio: PortfolioCategory[] = [", "export const portfolioTotal"],
  ["export const gallery = [", "export type CaseStudy"],
];

const found = [];
for (const [begin, finish] of GRID_BLOCKS) {
  const start = src.indexOf(begin);
  const end = src.indexOf(finish, start);
  if (start === -1 || end === -1) {
    console.error(`check-thumbs: หาบล็อก "${begin}" ใน lib/site.ts ไม่เจอ`);
    process.exit(1);
  }
  for (const m of src.slice(start, end).matchAll(/src: "(\/work\/[^"]+)"/g)) found.push(m[1]);
}

const sources = [...new Set(found)];

/** ต้องให้ตรงกับ thumbOf() ใน lib/site.ts เป๊ะ ๆ ถ้าแก้ที่นั่นต้องแก้ที่นี่ด้วย */
const thumbOf = (s) => `/work/thumb/${s.split("/").pop().replace(/\.[^.]+$/, "")}.webp`;

const missing = sources.filter((s) => !existsSync(join(ROOT, "public", thumbOf(s))));

if (missing.length) {
  console.error(`\nภาพย่อหาย ${missing.length} ไฟล์ จากทั้งหมด ${sources.length} ไฟล์`);
  for (const m of missing.slice(0, 15)) console.error(`  ขาด  public${thumbOf(m)}   (ต้นฉบับ ${m})`);
  if (missing.length > 15) console.error(`  ...และอีก ${missing.length - 15} ไฟล์`);
  console.error(`\nแก้ด้วยคำสั่ง:  python3 scripts/make-thumbs.py\n`);
  process.exit(1);
}

console.log(`ภาพย่อครบ ${sources.length} ไฟล์`);
