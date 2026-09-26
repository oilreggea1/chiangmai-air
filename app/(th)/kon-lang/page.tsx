import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { jobs, jobPhotoCount } from "@/lib/jobs";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";
import { JobGallery } from "@/components/JobGallery";

/**
 * หน้ารวมรูปงานจริง แยกกองก่อนล้างกับกองหลังล้างของแต่ละงาน
 *
 * เดิมหน้านี้โชว์เป็นคู่ก่อน–หลังชิ้นต่อชิ้น เจ้าของตรวจแล้วพบว่าจับคู่ผิดเยอะ
 * จึงเปลี่ยนมาโชว์เป็นสองกองต่อหนึ่งงาน 26 ก.ย. 2569
 * ห้ามกลับไปทำเป็นคู่ชิ้นต่อชิ้นอีก เว้นแต่เจ้าของสั่งเอง
 */
const totalPhotos = jobs.reduce((n, j) => n + jobPhotoCount(j), 0);
const title = "รูปงานจริง ก่อนล้างและหลังล้าง ทุกงานถ่ายจากหน้างาน";
const description = `รวมรูปจากหน้างานจริงในเชียงใหม่ ${jobs.length} งาน ${totalPhotos} รูป แยกให้ดูชัดว่าก่อนล้างเป็นอย่างไรและหลังล้างเป็นอย่างไร ทั้งงานล้างแอร์และถอดล้างเครื่องซักผ้า`;

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
  const ac = jobs.filter((j) => j.serviceSlug === "lang-air");
  const wm = jobs.filter((j) => j.serviceSlug === "lang-washing-machine");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-12">
          <p className="eyebrow">รูปจากหน้างานจริง</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
            งานจริง {jobs.length} งาน ดูก่อนล้างและหลังล้าง
          </h1>
          <p className="lead mt-5 max-w-3xl">
แต่ละงานลงรูปให้ครบทุกใบที่ถ่ายไว้ เฉลี่ยงานละ 30 รูป
            แยกเป็นกองก่อนล้าง กองระหว่างล้าง และกองหลังล้าง
            จะได้เห็นว่าถอดล้างกันทุกชิ้นส่วนจริง ไม่ได้ฉีดน้ำผ่าน ๆ แล้วจบ
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/case-study" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">
              อ่านรายงานงานเต็มทุกเคส
              <IconChevron className="h-4 w-4" />
            </Link>
            <a href={site.facebook} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">
              ดูรูปต้นฉบับบนเพจ
              <IconChevron className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">งานล้างแอร์ {ac.length} งาน</h2>
          <p className="lead mt-3 max-w-2xl">คอยล์ร้อน คอยล์เย็น แผ่นกรอง ถาดรับน้ำ บานสวิง และชิ้นส่วนที่ถอดออกมาล้างทีละชิ้น</p>
          <div className="mt-9 space-y-6">
            {ac.map((j) => (
              <JobGallery key={j.id} job={j} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="h2">งานถอดล้างเครื่องซักผ้า {wm.length} งาน</h2>
          <p className="lead mt-3 max-w-2xl">
            ถังชั้นใน ถังชั้นนอก ใต้จานซัก และโครงหลังถังปั่น ซึ่งเป็นจุดที่โปรแกรมล้างถังในตัวเครื่องไปไม่ถึง
            เพราะน้ำเข้าไม่ถึงด้านที่มองไม่เห็น
          </p>
          <div className="mt-9 space-y-6">
            {wm.map((j) => (
              <JobGallery key={j.id} job={j} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="อยากให้เครื่องที่บ้านเป็นแบบกองล่าง"
        subtitle="ส่งรูปเครื่องที่บ้านมาทาง LINE ได้เลย ผมประเมินให้ก่อนโดยไม่คิดค่าใช้จ่าย และแจ้งราคาครบก่อนเริ่มงาน"
      />
    </>
  );
}
