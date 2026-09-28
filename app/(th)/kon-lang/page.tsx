import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { jobs, jobPhotoCount } from "@/lib/jobs";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";
import { JobStoryCard } from "@/components/JobStoryCard";
import { groups, jobsIn, type JobGroup } from "@/lib/job-stories";

/**
 * หน้ารวมรูปงานจริง แยกหมวดแอร์กับเครื่องซักผ้า แต่ละงานเป็นการ์ดเล่าเรื่อง (29 ก.ย. 2569)
 * รูปครบทุกใบของแต่ละงานอยู่ที่ /kon-lang/[id] แอร์ต้องขึ้นก่อนเสมอ ดู lib/job-stories.ts
 *
 * ประวัติ: หน้านี้เคยแยกกองก่อนล้างกับกองหลังล้างของทุกงานไว้ในหน้าเดียว
 *
 * เดิมหน้านี้โชว์เป็นคู่ก่อน–หลังชิ้นต่อชิ้น เจ้าของตรวจแล้วพบว่าจับคู่ผิดเยอะ
 * จึงเปลี่ยนมาโชว์เป็นสองกองต่อหนึ่งงาน 26 ก.ย. 2569
 * ห้ามกลับไปทำเป็นคู่ชิ้นต่อชิ้นอีก เว้นแต่เจ้าของสั่งเอง
 *
 * งานแอร์ใช้หนึ่งโพสต์ส่งงาน = หนึ่งงาน และใช้ข้อความของร้านเป็นชื่องาน (28 ก.ย. 2569)
 * เดิมให้ AI เขียนบทสรุปเอง ออกมาเป็น "ถอดล้าง" ทั้งที่โพสต์จริงเป็นล้างแบบมาตรฐาน
 * ร้านใช้คำว่าถอดล้าง/ตัดล้างหมายถึงงานพรีเมี่ยม ลูกค้าจึงเข้าใจระดับงานผิด เจ้าของทักมาแล้ว
 * ห้ามเขียนหน้านี้ว่าทุกงานถอดล้างทุกชิ้น งานแอร์ส่วนใหญ่เป็นล้างแบบมาตรฐาน
 */
const totalPhotos = jobs.reduce((n, j) => n + jobPhotoCount(j), 0);
const title = "รูปงานจริง ก่อนล้างและหลังล้าง ทุกงานถ่ายจากหน้างาน";
const description = `ภาพจากหน้างานจริงในเชียงใหม่ ${jobs.length} งาน ${totalPhotos} รูป สภาพเครื่องก่อนทำและหลังทำ จากงานล้างแอร์ ติดตั้งแอร์ และถอดล้างเครื่องซักผ้า`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kon-lang" },
  ...share({ title, description, path: "/kon-lang" }),
};

export default function KonLangPage() {
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "รูปงานก่อน–หลัง", path: "/kon-lang" },
  ];
  // แอร์ขึ้นก่อนเสมอ ไม่เรียงตามจำนวนงาน (เครื่องซักผ้ามีงานมากกว่าจึงเคยดันแอร์ลงไปท้ายหน้า)
  const order: JobGroup[] = ["air", "washer"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-12">
          <p className="eyebrow">รูปจากหน้างานจริง</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
            งานจริง {jobs.length} งาน สภาพเครื่องก่อนและหลังทำงาน
          </h1>
          <p className="lead mt-5 max-w-3xl">
            ภาพทั้งหมดถ่ายจากหน้างานจริงในเชียงใหม่ เลือกดูตามประเภทงาน
            แล้วกดเข้าไปดูแต่ละงานได้ครบทุกรูป ตั้งแต่สภาพเครื่องตอนผมไปถึง ระหว่างทำงาน จนถึงตอนทำเสร็จ
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-2xl">
            {order.map((g) => {
              const list = jobsIn(g);
              return (
                <a key={g} href={`#${g}`} className="card group flex items-center justify-between gap-3 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift">
                  <span>
                    <span className="block text-lg font-bold text-ink">{groups[g].label}</span>
                    <span className="mt-0.5 block text-sm text-ink-soft">
                      {list.length} งาน · {list.reduce((n, j) => n + jobPhotoCount(j), 0)} รูป
                    </span>
                  </span>
                  <IconChevron className="h-5 w-5 rotate-90 text-brand-700" />
                </a>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/case-study" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">
              อ่านรายงานงานเต็มทุกเคส
              <IconChevron className="h-4 w-4" />
            </Link>
            <a href={site.facebook} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">
              ดูรูปเพิ่มเติมบน Facebook
              <IconChevron className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>

      {order.map((g, idx) => {
        const list = jobsIn(g);
        return (
          <section key={g} id={g} className={idx % 2 === 1 ? "section bg-sand" : "section"}>
            <div className="wrap">
              <h2 className="h2">
                {groups[g].heading} {list.length} งาน
              </h2>
              <p className="lead mt-3 max-w-2xl">{groups[g].lead}</p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((j) => (
                  <JobStoryCard key={j.id} job={j} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="ให้เครื่องที่บ้านกลับมาสะอาดแบบนี้"
        subtitle="ส่งรูปเครื่องที่บ้านมาทาง LINE ได้ครับ ผมประเมินให้ก่อนโดยไม่คิดค่าใช้จ่าย และแจ้งราคาครบก่อนเริ่มงาน"
      />
    </>
  );
}
