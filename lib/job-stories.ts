import { jobs, type Job } from "./jobs";
import { workCases, type WorkCase } from "./work-cases";
import { caseToJob } from "./case-to-job";
import { caseRelatedJob } from "./case-related-job";
import { thaiDate } from "./lastmod";

/**
 * รูปงานจริงแยกเป็นเรื่องทีละงาน และแยกหมวดแอร์กับเครื่องซักผ้า (29 ก.ย. 2569)
 *
 * เดิมหน้า /kon-lang เรียงหมวดตามจำนวนงาน เครื่องซักผ้ามี 46 งาน แอร์ 13 งาน
 * เครื่องซักผ้าจึงขึ้นก่อนทั้งหน้า เจ้าของกดเข้าไปแล้วเจอแต่งานเครื่องซักผ้า
 * ตอนนี้แอร์ขึ้นก่อนเสมอ และแต่ละงานมีหน้าของตัวเองที่ /kon-lang/[id]
 *
 * เนื้อเรื่องของแต่ละงานใช้ข้อมูลที่ยืนยันได้เท่านั้น คือชื่องานจากโพสต์ส่งงาน วันที่
 * จำนวนรูป และรายงานเคสที่ผูกกับงานนั้นด้วยลายภาพ ห้ามแต่งอาการหรือผลงานเพิ่ม
 */
export type JobGroup = "air" | "washer";

export const groups: Record<JobGroup, { label: string; heading: string; lead: string; service: string }> = {
  air: {
    label: "งานแอร์",
    heading: "งานแอร์",
    lead: "ล้างแอร์ ติดตั้งแอร์ และงานตรวจเช็คซ่อมแอร์ในเชียงใหม่ แต่ละงานมีรูปตั้งแต่สภาพเครื่องตอนผมไปถึงจนถึงตอนทำเสร็จ",
    service: "/service/lang-air",
  },
  washer: {
    label: "งานเครื่องซักผ้า",
    heading: "งานเครื่องซักผ้า",
    lead: "ถอดล้างเครื่องซักผ้าฝาบนและฝาหน้าถึงบ้านในเชียงใหม่ แต่ละงานมีรูปตั้งแต่ก่อนถอดถังจนถึงตอนประกอบกลับเสร็จ",
    service: "/service/lang-washing-machine",
  },
};

export const jobGroup = (j: Job): JobGroup => (j.serviceSlug === "lang-washing-machine" ? "washer" : "air");

/** งานในหมวด เรียงจากงานล่าสุดก่อน */
export function jobsIn(group: JobGroup): Job[] {
  return jobs
    .filter((j) => jobGroup(j) === group)
    .sort((a, b) => (a.date === b.date ? a.id.localeCompare(b.id) : b.date.localeCompare(a.date)));
}

export const getJob = (id: string) => jobs.find((j) => j.id === id);

/** รายงานเคสที่มาจากงานนี้ (จับคู่ด้วยลายภาพ ดู case-to-job.ts และ case-related-job.ts) */
export function casesForJob(id: string): WorkCase[] {
  // เคสที่เล่าทั้งงาน (ขั้นตอนมากกว่า) ขึ้นก่อน เคสที่พูดถึงจุดเดียวตามหลัง
  return workCases
    .filter((c) => caseToJob[c.slug] === id || caseRelatedJob[c.slug] === id)
    .sort((a, b) => b.actions.length - a.actions.length);
}

/**
 * งานที่โชว์บนหน้าแรก เลือกให้เห็นงานคนละแบบ
 * แอร์: ล้างหลายเครื่อง / ติดตั้งพร้อมงานอื่น / ตัดล้างพิเศษ
 * เครื่องซักผ้า: งานล่าสุดที่มีรายงานเคสประกอบ
 */
export const homeFeatured: Record<JobGroup, string[]> = {
  air: ["a10", "a08", "a01"],
  washer: ["59", "60", "58"],
};

/** รูปปกของการ์ด ใช้รูปแรกของกองก่อนทำ เพื่อเล่าว่าเครื่องอยู่ในสภาพไหนตอนผมไปถึง */
export const coverOf = (j: Job) => j.before[0] ?? j.after[0] ?? j.during[0];

/**
 * alt ของรูปงาน (29 ก.ย. 2569) งานเครื่องซักผ้า 912 รูปใน jobs.ts มี alt ว่าง
 * jobs.ts ห้ามแก้มือ จึงเติมตอนแสดงผลจากข้อมูลที่ยืนยันได้ คือชื่องาน วันที่ และกอง
 */
const PHASE = { before: "ก่อน", during: "ระหว่าง", after: "หลัง" } as const;
export function photoAlt(job: Job, phase: keyof typeof PHASE, i: number, alt?: string): string {
  return alt || `${job.summary} ${thaiDate(job.date)} ภาพ${PHASE[phase]}${job.verb} ลำดับที่ ${i + 1}`;
}

const MONTH_SHORT = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
const shortDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTH_SHORT[m - 1]} ${String(y + 543).slice(2)}`;
};

/**
 * ชื่อหน้าและคำอธิบายของหน้างาน ต้องไม่ซ้ำกันเอง (29 ก.ย. 2569)
 * งานวันเดียวกันที่ชื่อเหมือนกัน (เช่น ล้างแอร์ 4 เครื่อง 3 งานในวันเดียว) เติม "ชุดที่ n"
 */
export function jobMeta(job: Job): { title: string; description: string } {
  const same = jobs.filter((j) => j.summary === job.summary && j.date === job.date);
  const nth = same.length > 1 ? ` ชุดที่ ${same.findIndex((j) => j.id === job.id) + 1}` : "";
  const head = job.summary.length > 44 ? job.summary.slice(0, job.summary.lastIndexOf(" ", 44)) : job.summary;
  const title = `${head} ${shortDate(job.date)}${nth}`;
  const counts = [`ก่อน${job.verb} ${job.before.length} รูป`, job.during.length ? `ระหว่าง${job.verb} ${job.during.length} รูป` : "", `หลัง${job.verb} ${job.after.length} รูป`].filter(Boolean).join(" ");
  const description = `${job.summary} ${thaiDate(job.date)}${nth} รูปจากหน้างานจริงในเชียงใหม่ ${counts}`;
  return { title, description };
}
