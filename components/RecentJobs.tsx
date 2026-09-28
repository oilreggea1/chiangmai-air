import Link from "next/link";
import { jobs } from "@/lib/jobs";
import { JobStoryCard } from "./JobStoryCard";

/**
 * แถบงานล่าสุดสำหรับหน้าภาษาอังกฤษและจีน
 *
 * **แก้ 26 ก.ย. 2569** เดิมโชว์เป็นคู่ก่อน–หลังชิ้นต่อชิ้น
 * เจ้าของตรวจเองแล้วพบว่าจับคู่ผิดเยอะ จึงเลิกจับคู่ทั้งหมด
 * ตอนนี้โชว์เป็นสองแถวต่อหนึ่งงาน แถวบนก่อนล้าง แถวล่างหลังล้าง
 * ไม่ได้อ้างว่ารูปไหนคู่กับรูปไหน จึงไม่มีโอกาสผิด
 *
 * **แก้ 29 ก.ย. 2569** เปลี่ยนเป็นการ์ดเรื่องทีละงาน (เหมือนหน้าไทย) ลิงก์ไปหน้า /en/work และ /zh/work
 */

export function RecentJobs({
  lang,
  slugs,
  eyebrow,
  heading,
  lead,
  limit = 3,
  tone = "white",
}: {
  lang: "en" | "zh-CN";
  slugs: string[];
  eyebrow: string;
  heading: string;
  lead: string;
  /** ไม่ได้ใช้แล้ว เก็บไว้ให้หน้าเดิมที่ส่งมาไม่พัง */
  note?: string;
  limit?: number;
  tone?: "white" | "sand";
}) {
  // งานล่าสุดก่อน ตามวันที่จริง (เดิมใช้ลำดับในไฟล์ ซึ่งไม่ได้เรียงตามวัน)
  const list = jobs
    .filter((j) => slugs.includes(j.serviceSlug))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
  if (list.length === 0) return null;
  const group = slugs.includes("lang-washing-machine") && !slugs.some((x) => x !== "lang-washing-machine") ? "washer" : "air";
  const base = lang === "en" ? "/en/work" : "/zh/work";

  return (
    <section className={`section ${tone === "sand" ? "bg-sand" : ""}`} lang={lang}>
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2 mt-4">{heading}</h2>
        <p className="lead mt-3 max-w-2xl">{lead}</p>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((j) => (
            <JobStoryCard key={j.id} job={j} lang={lang} />
          ))}
        </div>
        <div className="mt-8">
          <Link href={`${base}#${group}`} className="btn-ghost">
            {lang === "en" ? "See every job, before and after" : "查看全部施工前后实拍"}
          </Link>
        </div>
      </div>
    </section>
  );
}
