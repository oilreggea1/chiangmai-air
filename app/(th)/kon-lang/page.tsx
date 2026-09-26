import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { beforeAfter } from "@/lib/before-after";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";
import { BeforeAfterGrid } from "@/components/BeforeAfterGrid";

/**
 * หน้ารวมคู่ภาพก่อน–หลังที่ตรวจแล้วว่าเป็นชิ้นเดียวกันทุกคู่ (26 ก.ย. 2569)
 *
 * เหตุผลที่แยกเป็นหน้าของตัวเอง
 * รายงานเคสเล่าเรื่องทั้งงาน ส่วนหน้านี้ตอบคำถามเดียวคือ "ล้างแล้วต่างกันแค่ไหน"
 * คนที่ยังไม่เคยใช้บริการมักอยากเห็นข้อนี้ก่อนอ่านอย่างอื่น
 *
 * ห้ามเพิ่มคู่ใหม่โดยไม่เปิดดูรูปจริง กติกาเต็มอยู่หัวไฟล์ lib/before-after.ts
 */
const title = "รูปก่อน–หลังล้างแอร์ของจริง ทุกคู่เป็นชิ้นเดียวกัน";
const description = `รวมภาพเทียบก่อนล้างและหลังล้างจากหน้างานจริงในเชียงใหม่ ${beforeAfter.length} คู่ ทุกคู่เป็นชิ้นส่วนเดียวกันถ่ายในงานเดียวกัน ไม่ได้จับคู่ข้ามงาน`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kon-lang" },
  ...share({ title, description, path: "/kon-lang" }),
};

export default function KonLangPage() {
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "รูปก่อน–หลัง", path: "/kon-lang" },
  ];
  const ac = beforeAfter.filter((b) => b.serviceSlug === "lang-air");
  const wm = beforeAfter.filter((b) => b.serviceSlug === "lang-washing-machine");
  const other = beforeAfter.filter((b) => !["lang-air", "lang-washing-machine"].includes(b.serviceSlug));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-12">
          <p className="eyebrow">หลักฐานจากหน้างาน</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
            รูปก่อน–หลังของจริง {beforeAfter.length} คู่
          </h1>
          <p className="lead mt-5 max-w-3xl">
            ทุกคู่ในหน้านี้เป็นชิ้นส่วนเดียวกัน ถ่ายก่อนล้างและหลังล้างในงานเดียวกัน
            ผมไล่เปิดดูรูปทีละใบเพื่อยืนยันว่าเป็นชิ้นเดียวกันจริงก่อนนำขึ้น
            คู่ไหนที่พิสูจน์ไม่ได้ว่าเป็นชิ้นเดียวกัน ผมไม่เอาขึ้นเลย
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
          <h2 className="h2">งานล้างแอร์ {ac.length} คู่</h2>
          <p className="lead mt-3 max-w-2xl">คอยล์ร้อน คอยล์เย็น แผ่นกรอง ถาดรับน้ำ และบานสวิง ถ่ายมุมเดิมก่อนและหลังล้าง</p>
          <div className="mt-9">
            <BeforeAfterGrid items={ac} />
          </div>
        </div>
      </section>

      {wm.length > 0 && (
        <section className="section bg-sand">
          <div className="wrap">
            <h2 className="h2">งานถอดล้างเครื่องซักผ้า {wm.length} คู่</h2>
            <p className="lead mt-3 max-w-2xl">ถังชั้นใน ถังชั้นนอก และโครงหลังถังปั่น ซึ่งเป็นจุดที่โปรแกรมล้างถังในตัวเครื่องไปไม่ถึง</p>
            <div className="mt-9">
              <BeforeAfterGrid items={wm} />
            </div>
          </div>
        </section>
      )}

      {other.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2 className="h2">งานติดตั้งและย้ายแอร์ {other.length} คู่</h2>
            <p className="lead mt-3 max-w-2xl">จุดเดิมก่อนลงมือ เทียบกับจุดเดียวกันหลังติดตั้งเสร็จ</p>
            <div className="mt-9">
              <BeforeAfterGrid items={other} />
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="อยากให้แอร์ที่บ้านเป็นแบบภาพขวา"
        subtitle="ส่งรูปแอร์ที่บ้านมาทาง LINE ได้เลย ผมประเมินให้ก่อนโดยไม่คิดค่าใช้จ่าย และแจ้งราคาครบก่อนเริ่มงาน"
      />
    </>
  );
}
