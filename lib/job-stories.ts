import { jobs, type Job } from "./jobs";
import { workCases, type WorkCase } from "./work-cases";
import { caseToJob } from "./case-to-job";
import { caseRelatedJob } from "./case-related-job";

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
