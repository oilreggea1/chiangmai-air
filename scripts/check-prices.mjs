/**
 * ตัวดักราคาไม่ตรงกัน — รันก่อน build ทุกครั้ง
 *
 * ที่มา: 5 ส.ค. 2569 ราคาล้างแอร์ถูกพิมพ์ซ้ำเป็นข้อความใน 3 ที่ พอแก้ตารางแล้วลืมแก้ที่อื่น
 * ทำให้ AI ดึงราคาผิดไปตอบลูกค้า (หน้า /answers เขียน 9,000–15,000 แต่ตารางเขียน 9,000–12,000)
 *
 * สคริปต์นี้กวาดหาตัวเลขที่ "ดูเหมือนราคา" ในไฟล์เนื้อหา แล้วเทียบกับค่าที่ประกาศไว้ใน p
 * ถ้าเจอตัวเลขที่ไม่อยู่ในรายการ = อาจเป็นราคาเก่าที่ตกค้าง → build ไม่ผ่าน
 *
 * ถ้าเจ้าของเปลี่ยนราคาจริง ให้แก้ที่อ็อบเจกต์ p ใน lib/site.ts แล้วสคริปต์นี้จะยอมเอง
 * ถ้าเป็นตัวเลขที่ไม่ใช่ราคา (เช่น ปี พ.ศ. จำนวนเครื่อง) ให้เพิ่มใน ALLOW ด้านล่าง
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["app", "lib", "components", "content"];
const EXT = /\.(ts|tsx)$/;

/**
 * ดึงค่าราคาที่ประกาศไว้จริงออกจาก lib/site.ts โดยไม่ต้อง import (เลี่ยงปัญหา TS ใน node)
 * เริ่มอ่านตั้งแต่ค่าคงที่ที่ประกาศไว้เหนือ p (เช่น FULL_STRIP_WASH) เพราะ p อ้างถึงค่าพวกนั้น
 * ถ้าอ่านแค่ในบล็อก p จะพลาดราคาที่ประกาศเป็นค่าคงที่ร่วม
 */
function declaredPrices() {
  const src = readFileSync(join(ROOT, "lib/site.ts"), "utf8");
  const from = src.indexOf("const FULL_STRIP_WASH");
  const start = from !== -1 ? from : src.indexOf("export const p = {");
  const block = src.slice(start, src.indexOf("export const btu = {"));
  const out = new Set();
  for (const m of block.matchAll(/"([\d,–\-]+)"/g)) {
    out.add(m[1]);
    // ราคาที่เป็นช่วง เช่น "2,300–2,500" ให้เก็บปลายทั้งสองข้างไว้ด้วย
    for (const part of m[1].split(/[–-]/)) if (part.trim()) out.add(part.trim());
  }
  return out;
}

/** ช่วง BTU ที่ประกาศไว้จริง — ตัดที่ "} as const;" ตัวแรกหลังบล็อก ไม่งั้นจะกวาดของอื่นติดมาด้วย */
function declaredBtu() {
  const src = readFileSync(join(ROOT, "lib/site.ts"), "utf8");
  const from = src.indexOf("export const btu = {");
  const block = src.slice(from, src.indexOf("} as const;", from));
  return new Set([...block.matchAll(/"([\d,–\-\s]+)"/g)].map((m) => m[1].trim()));
}

/**
 * ตัวเลขที่ไม่ใช่ราคา จึงไม่ต้องตรวจ
 * ใส่เหตุผลกำกับทุกตัว เพื่อให้คนอ่านทีหลังรู้ว่าทำไมถึงยกเว้น
 */
const ALLOW = new Set([
  "100",   // ถอดล้าง 100%
  "300",   // ราคาคู่แข่งที่ยกมาเปรียบเทียบในคำถาม ไม่ใช่ราคาเรา
  "30",    // รับประกัน 30 วัน
  "24",    // ภายใน 24 ชั่วโมง
  "12",    // หมู่ที่ 12
  "15",    // ความจุ 15 กิโลกรัม
  "19",    // ความจุ 19 กิโลกรัม
  "2569", "2026", "2025", // ปี
  "50130", // รหัสไปรษณีย์

  // ── ราคาตลาด/คู่แข่ง ที่บทความยกมาเปรียบเทียบโดยเจตนา ไม่ใช่ราคาของเรา ──
  // ห้ามเปลี่ยนตัวเลขกลุ่มนี้ให้ดึงจาก p เด็ดขาด เพราะไม่ใช่ราคาที่เราคิด
  "300",   // ราคาล้างแอร์ต่ำผิดปกติที่พบในโฆษณา ใช้อธิบายว่าลดขั้นตอนใดออก
  "350",   // ราคาคู่แข่งในตัวอย่างคำนวณเทียบ 3 เครื่อง
  "400",   // เกณฑ์ราคาที่มักไม่รวมใบพัด/ถาดน้ำทิ้ง
  "650",   // ปลายบนของช่วงราคาตลาดล้างแอร์ติดผนัง
  "900",   // ปลายล่างของช่วงราคาตลาดแอร์แขวน
  "1,050", // ยอดรวมตัวอย่าง 350 × 3 เครื่อง
  "1,350", // ยอดรวมตัวอย่าง 450 × 3 เครื่อง
  "1,800", // ปลายบนของช่วงราคาตลาดแอร์ 4 ทิศทาง
  "2,500", // ปลายบนของช่วงราคาตลาดงานย้ายแอร์
  "75",    // ราคาตลาดน้ำยา R410A ต่อปอนด์ ใช้เทียบกับที่เราคิด 25 บาท
]);

/**
 * เลขในหัวข้อที่ไม่ใช่ราคา เช่น ปี พ.ศ. หรือรุ่นน้ำยาแอร์
 * รายการนี้ต้องสั้นที่สุด ถ้ามีใครอยากเพิ่มราคาเข้ามาตรงนี้แปลว่ากำลังจะทำผิด
 */
const ALLOW_TITLE_NUMBERS = new Set([
  "2569", "2570",       // ปี พ.ศ. ในหัวข้อบทความราคา
  "2568",               // ปีก่อนหน้า ใช้อ้างถึงราคาปีที่แล้ว
  "410", "1000",        // ชื่อน้ำยา R410A / R1000 ที่ตัวเลขติดมากับรหัสรุ่น
  "2.5",                // PM2.5
]);

/**
 * ช่วง BTU ที่ไม่ได้ผูกกับราคาติดตั้ง จึงไม่ต้องตรงกับ btu
 * ใส่เหตุผลกำกับทุกตัว เพื่อไม่ให้มีใครเผลอเอาราคาเก่ามาซ่อนไว้ตรงนี้
 */
const ALLOW_BTU = new Set([
  "9,000–24,000",  // ช่วงสรุปรวมใน meta description ครอบทั้งสองเรต ไม่ใช่ช่วงราคาเดี่ยว
  "12–16",         // ขนาดห้องเป็น ตร.ม. ไม่ใช่ BTU
  "20–30",         // ขนาดห้องเป็น ตร.ม. ไม่ใช่ BTU

  // ── ตารางเลือกขนาดแอร์ตามพื้นที่ห้อง (บทความ khamnuan-btu) ไม่เกี่ยวกับราคา ──
  "12,000–15,000", "18,000–20,000", "20,000–24,000",
  "24,000–30,000", "30,000–32,000", "14,400–15,000",

  // ── ช่วงย่อยของเรตล้างแอร์ ที่บทความแจกแจงละเอียดกว่าตารางหลัก ──
  // 12,001–18,000 อยู่ในเรตเดียวกับ 9,000–18,000 อยู่แล้ว บทความอธิบายว่าไม่คิดเพิ่ม
  "12,001–18,000",
]);

/**
 * ช่วง BTU ที่ยกเว้นได้ "เฉพาะเมื่ออยู่ในบริบทแนะนำขนาดห้อง" เท่านั้น
 *
 * 18,000–24,000 เป็นทั้งคำแนะนำเลือกขนาดตามพื้นที่ห้อง และเคยเป็นเรตราคาติดตั้งเก่า
 * ตอนแรกใส่ไว้ใน ALLOW_BTU แบบเหมารวม ทำให้บทความที่ยังใช้เป็นเรตราคาเก่าหลุดรอดไป 5 จุด
 * จึงต้องยกเว้นเฉพาะบรรทัดที่พูดถึงพื้นที่ห้อง (ตร.ม.) ไม่ใช่ทุกบรรทัด
 */
const ALLOW_BTU_IF_ROOM_CONTEXT = new Set(["18,000–24,000"]);

/**
 * ไฟล์ที่มีตารางราคาเป็นของตัวเองอยู่แล้ว จึงไม่ต้องเทียบกับ p
 * lib/repair.ts = ราคาค่าซ่อม/อะไหล่แยกตามอาการ เป็นคนละชุดกับราคาบริการหลัก
 * และเป็นแหล่งอ้างอิงเดียวของตัวเองอยู่แล้ว (ไม่ได้ถูกพิมพ์ซ้ำที่อื่น)
 */
const SKIP_FILES = new Set(["lib/repair.ts", "lib/repair-guides.ts"]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (name === "node_modules" || name === ".next") continue;
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXT.test(name)) out.push(full);
  }
  return out;
}

const prices = declaredPrices();
const btus = declaredBtu();
const problems = [];

for (const dir of SCAN_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    const rel = relative(ROOT, file);
    if (SKIP_FILES.has(rel)) continue;
    const lines = readFileSync(file, "utf8").split("\n");

    // ข้ามเฉพาะ "บล็อกนิยาม" ของ p กับ btu เท่านั้น
    // ระวัง: เคยตั้งขอบล่างผิดเป็นบรรทัดของ pricing ซึ่งอยู่ท้ายไฟล์
    // ทำให้ข้าม services ทั้งก้อน แล้ว priceFrom/priceTo ที่ผิดหลุดรอดไปได้
    // ขอบล่างที่ถูกคือจุดเริ่มของ site ซึ่งอยู่ถัดจากบล็อกนิยามพอดี
    let defStart = -1, defEnd = -1;
    if (rel === "lib/site.ts") {
      defStart = lines.findIndex((l) => l.includes("const FULL_STRIP_WASH"));
      if (defStart === -1) defStart = lines.findIndex((l) => l.includes("export const p = {"));
      defEnd = lines.findIndex((l) => l.includes("export const site = {"));
    }

    lines.forEach((line, i) => {
      if (defStart !== -1 && i >= defStart && i < defEnd) return;
      if (rel.includes("check-prices")) return;

      // priceFrom / priceTo เป็นตัวเลขล้วน ไม่มี "บาท" ต่อท้าย จึงไม่เข้าเงื่อนไขด้านล่าง
      // แต่ค่าพวกนี้ไหลเข้า JSON-LD ที่ส่งให้ Google โดยตรง ถ้าไม่ตรงกับหน้าเว็บจะเสียความน่าเชื่อถือ
      // เคยหลุดมาแล้ว 5 ส.ค. 2569: หน้าเว็บขึ้น 2,300–2,500 แต่ schema ยังส่ง maxPrice 2000
      for (const m of line.matchAll(/price(?:From|To):\s*(\d+)/g)) {
        const plain = m[1];                                   // 2500
        const comma = Number(plain).toLocaleString("en-US");  // 2,500
        const inRange = [...prices].some((v) => v.split(/[–-]/).map((x) => x.trim()).includes(comma));
        if (prices.has(comma) || inRange || ALLOW.has(comma)) continue;
        problems.push(`${rel}:${i + 1}  ${m[0]} ไม่ตรงกับราคาใดใน p — ค่านี้ส่งเข้า JSON-LD ให้ Google`);
      }

      // ตัวเลขที่ตามด้วย "บาท" หรือ ".-" = ราคาแน่นอน
      for (const m of line.matchAll(/([\d,]+)\s*(?:บาท|\.-|THB)/g)) {
        const n = m[1];
        if (prices.has(n) || ALLOW.has(n)) continue;
        problems.push(`${rel}:${i + 1}  ราคา "${n}" ไม่ตรงกับค่าใดใน p — ${line.trim().slice(0, 90)}`);
      }

      // ตัวเลขในหัวข้อ (title / h1) ที่ไม่มีคำว่า "บาท" ต่อท้าย
      //
      // เคยหลุดมาแล้ว 5 ส.ค. 2569: หัวข้อบทความเขียนว่า "ล้างแอร์ธรรมดา 500 กับถอดล้าง 2,000"
      // ซึ่งเป็นราคาเก่า แต่เงื่อนไขด้านบนไม่จับเพราะไม่มีคำว่า "บาท"
      // หัวข้อคือสิ่งที่คนเห็นในผลค้นหา ถ้าราคาผิดคือทำให้ลูกค้าคลิกเข้ามาด้วยความคาดหวังผิด
      // จับเฉพาะเลขที่มีลูกน้ำหรือสามหลักขึ้นไป เพื่อไม่ให้ไปโดนปี พ.ศ. หรือจำนวนข้อ
      if (/^\s*(?:title|h1):/.test(line)) {
        for (const m of line.matchAll(/(?<![\d,.])(\d{1,3},\d{3}|\d{3,4})(?![\d,.])/g)) {
          const n = m[1];
          const inRange = [...prices].some((v) => v.split(/[–-]/).map((x) => x.trim()).includes(n));
          if (prices.has(n) || inRange || ALLOW.has(n) || ALLOW_TITLE_NUMBERS.has(n)) continue;
          problems.push(`${rel}:${i + 1}  เลข "${n}" ในหัวข้อไม่ตรงกับราคาใดใน p — ${line.trim().slice(0, 90)}`);
        }
      }

      // ฟิลด์ราคาที่หน่วยอยู่คนละบรรทัด เช่น price: "2,000" กับ unit: "บาท / เครื่อง"
      //
      // เคยหลุดมาแล้ว 6 ส.ค. 2569: การ์ดราคาหน้าแรกเขียน price: "2,000" ไว้ตรง ๆ
      // แล้วค้างเมื่อเจ้าของปรับราคาถอดล้างเป็น 2,300-2,500
      // เงื่อนไขด้านบนจับไม่ได้เพราะคำว่า "บาท" ไม่ได้อยู่ติดกับตัวเลข
      // เจ้าของเป็นคนทักเองว่าราคาไม่ตรง ซึ่งแปลว่าตัวดักพลาดไปหนึ่งรอบเต็ม
      for (const m of line.matchAll(/\bprice:\s*["`']([\d,]+)["`']/g)) {
        const n = m[1];
        const inRange = [...prices].some((v) => v.split(/[–-]/).map((x) => x.trim()).includes(n));
        if (prices.has(n) || inRange || ALLOW.has(n)) continue;
        problems.push(`${rel}:${i + 1}  ราคา "${n}" ในฟิลด์ price ไม่ตรงกับค่าใดใน p — ${line.trim().slice(0, 90)}`);
      }

      // ช่วง BTU ที่พิมพ์เป็นข้อความ
      for (const m of line.matchAll(/([\d,]+\s*[–-]\s*[\d,]+)\s*BTU/g)) {
        const range = m[1].replace(/\s/g, "").replace("-", "–");
        const roomContext = /ตร\.ม\.|ตารางเมตร|ขนาดห้อง/.test(line);
        const ok =
          [...btus].some((b) => b.replace(/\s/g, "") === range) ||
          ALLOW_BTU.has(range) ||
          (ALLOW_BTU_IF_ROOM_CONTEXT.has(range) && roomContext);
        if (ok) continue;
        problems.push(`${rel}:${i + 1}  ช่วง BTU "${m[1].trim()}" ไม่ตรงกับค่าใดใน btu — ${line.trim().slice(0, 90)}`);
      }
    });
  }
}

if (problems.length) {
  console.error("\n❌ พบราคา/ช่วง BTU ที่ไม่ตรงกับ lib/site.ts\n");
  for (const p of problems) console.error("   " + p);
  console.error(`\n   รวม ${problems.length} จุด`);
  console.error("   แก้ที่อ็อบเจกต์ p / btu ใน lib/site.ts แล้วให้หน้าอื่นดึงไปใช้ ห้ามพิมพ์ตัวเลขซ้ำ");
  console.error("   ถ้าเป็นตัวเลขที่ไม่ใช่ราคา ให้เพิ่มใน ALLOW ของ scripts/check-prices.mjs พร้อมเหตุผล\n");
  process.exit(1);
}

console.log(`✅ ราคาตรงกันทุกจุด (ตรวจ ${prices.size} ราคา, ${btus.size} ช่วง BTU)`);
