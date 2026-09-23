/**
 * สร้าง lib/lastmod.json = วันที่แก้ไขล่าสุดจริงของแต่ละไฟล์ต้นทาง (จาก git)
 * ใช้: node scripts/lastmod.mjs  (รันอัตโนมัติใน npm run build)
 *
 * ทำไมต้องมี (24 ก.ย. 2569): sitemap เดิมประกาศ lastModified = เวลาที่ build ให้ทุก URL
 * แปลว่าทุกครั้งที่ deploy Google เห็นว่า "ทุกหน้าเปลี่ยน" ทั้งที่ไม่ได้แตะ
 * Google จึงเลิกเชื่อค่านี้ทั้งไซต์ และเว็บก็ไม่ได้ประโยชน์จากหน้าที่แก้จริง
 *
 * Vercel build จากไฟล์ที่อัปโหลด ไม่มีโฟลเดอร์ .git จึงต้องคำนวณในเครื่องแล้ว commit JSON ไปด้วย
 * ถ้าไม่มี git (เช่น build บน Vercel) สคริปต์จะข้ามและใช้ JSON เดิมที่ commit ไว้
 */
import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "lib/lastmod.json";
const ROOTS = ["app", "lib", "components", "content"];
// วันที่ตามเวลาไทย ถ้าใช้ toISOString จะได้วัน UTC ซึ่งช้ากว่าไทย 7 ชม.
const today = new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10);

function git(cmd) {
  return execSync(cmd, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}

try {
  git("git rev-parse --is-inside-work-tree");
} catch {
  if (existsSync(OUT)) {
    console.log(`lastmod: ไม่มี git ใช้ ${OUT} เดิม`);
    process.exit(0);
  }
  console.error("lastmod: ไม่มี git และไม่มี lib/lastmod.json — รัน node scripts/lastmod.mjs ในเครื่องแล้ว commit ก่อน");
  process.exit(1);
}

function walk(dir, acc) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(tsx?|mdx?)$/.test(name)) acc.push(p);
  }
  return acc;
}

const files = ROOTS.flatMap((r) => walk(r, []));
// ไฟล์ที่แก้แล้วยังไม่ commit ถือว่าเปลี่ยนวันนี้ เพราะจะถูก commit พร้อม JSON นี้
const dirty = new Set(
  git("git status --porcelain -- " + ROOTS.join(" "))
    .split("\n")
    .filter(Boolean)
    .map((l) => l.slice(3).trim().replace(/^"|"$/g, "")),
);
const dates = {};
for (const f of files) {
  if (dirty.has(f)) { dates[f] = today; continue; }
  const d = git(`git log -1 --format=%cs -- "${f}"`);
  dates[f] = d || today;
}
const sorted = Object.fromEntries(Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)));
const next = JSON.stringify({ generatedAt: today, files: sorted }, null, 2) + "\n";
const prev = existsSync(OUT) ? readFileSync(OUT, "utf8") : "";
// ไม่เขียนทับถ้าวันที่รายไฟล์ไม่เปลี่ยน กันไม่ให้ generatedAt ทำให้ไฟล์ dirty ทุกครั้งที่ build
const same = prev && JSON.stringify(JSON.parse(prev).files) === JSON.stringify(sorted);
if (!same) writeFileSync(OUT, next);
console.log(`lastmod: ${Object.keys(sorted).length} ไฟล์ ${same ? "(ไม่เปลี่ยน)" : "→ " + OUT}`);
