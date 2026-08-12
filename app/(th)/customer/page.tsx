import type { Metadata } from "next";
import Link from "next/link";
import { areas, p } from "@/lib/site";
import { segments } from "@/lib/segments";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";

const title = "ล้างแอร์คอนโด หอพัก โรงแรม ออฟฟิศ เชียงใหม่";
const description = `รับล้างแอร์คอนโด หอพัก โรงแรม ออฟฟิศ ร้านอาหาร และโรงงานทั่วเชียงใหม่ ตั้งแต่ 3 เครื่องขึ้นไปเครื่องละ ${p.wash.stdBulk} บาท เข้าทีเดียวจบ สรุปยอดรวมให้ทราบก่อนนัด`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/customer" },
  ...share({ title, description, path: `/customer`, type: "website" }),
};

export default function CustomerIndex() {
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "กลุ่มลูกค้า", path: "/customer" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-14 lg:pb-20">
          <p className="eyebrow">งานหลายเครื่อง · จ.เชียงใหม่</p>
          <h1 className="mt-5 max-w-3xl text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ล้างแอร์คอนโด หอพัก โรงแรม และออฟฟิศในเชียงใหม่
          </h1>
          <p className="lead mt-5 max-w-3xl">
            งานที่มีแอร์หลายเครื่องมีเงื่อนไขต่างจากบ้านเดี่ยว ทั้งช่วงเวลาที่เข้าทำงานได้
            การประสานกับนิติบุคคลหรือผู้เช่า และเอกสารที่ต้องใช้ลงบัญชี
            หน้าด้านล่างแยกตามกลุ่ม เพื่อให้เห็นเงื่อนไขจริงก่อนตัดสินใจเรียก
          </p>
        </section>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s) => (
              <Link
                key={s.slug}
                href={`/customer/${s.slug}`}
                className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <h2 className="text-lg font-bold">{s.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-700 group-hover:text-brand-900">
                  ดูเงื่อนไขงาน{s.name}
                  <IconChevron className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-sm leading-7 text-ink-soft">
            รับงานใน {areas.length} โซนทั่วเชียงใหม่ ไม่คิดค่าเดินทางเพิ่ม{" "}
            <Link href="/area" className="font-semibold text-brand-700 hover:text-brand-900">
              ดูพื้นที่ให้บริการทั้งหมด
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="มีแอร์หลายเครื่องที่ต้องล้าง"
        subtitle={`แจ้งจำนวนเครื่องกับชนิดของแอร์มาก่อนได้ ผมสรุปยอดรวมและเวลาที่ต้องใช้ให้ทราบก่อนนัด ตั้งแต่ 3 เครื่องขึ้นไปคิดเครื่องละ ${p.wash.stdBulk} บาท จากปกติเครื่องละ ${p.wash.std} บาท`}
      />
    </>
  );
}
