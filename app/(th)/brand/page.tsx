import type { Metadata } from "next";
import Link from "next/link";
import { p } from "@/lib/site";
import { brands, brandCommon } from "@/lib/brands";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";

const title = "ล้างแอร์ ซ่อมแอร์ ทุกยี่ห้อ เชียงใหม่ ถึงบ้าน";
const description = `รับล้างแอร์และซ่อมแอร์ทุกยี่ห้อในเชียงใหม่ ไดกิ้น มิตซูบิชิ พานาโซนิค แอลจี แคเรียร์ ซัมซุง และอื่น ๆ ราคาเท่ากันทุกยี่ห้อ เครื่องละ ${p.wash.std} บาท`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/brand" },
  ...share({ title, description, path: `/brand`, type: "website" }),
};

export default function BrandIndex() {
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "ยี่ห้อแอร์", path: "/brand" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-14 lg:pb-20">
          <p className="eyebrow">ทุกยี่ห้อ · จ.เชียงใหม่</p>
          <h1 className="mt-5 max-w-3xl text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ล้างแอร์และซ่อมแอร์ทุกยี่ห้อในเชียงใหม่
          </h1>
          <p className="lead mt-5 max-w-3xl">{brandCommon.principle}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-soft">
            ราคาเท่ากันทุกยี่ห้อ สิ่งที่ทำให้ราคาต่างคือชนิดของแอร์ ไม่ใช่ยี่ห้อหรือรุ่น
          </p>
        </section>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/brand/${b.slug}`}
                className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <h2 className="text-lg font-bold">
                  แอร์{b.name}
                  <span className="ml-2 text-sm font-normal text-ink-soft">{b.en}</span>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">{b.note}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-700 group-hover:text-brand-900">
                  ล้างและซ่อมแอร์{b.name}
                  <IconChevron className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-7 text-ink-soft">
            ไม่เจอยี่ห้อของคุณในรายการนี้ก็โทรมาได้ครับ ผมรับงานทุกยี่ห้อ
            รายการด้านบนคือยี่ห้อที่เจอบ่อยที่สุดในเชียงใหม่เท่านั้น
          </p>
        </div>
      </section>

      <CtaBand
        title="ไม่แน่ใจว่าแอร์ที่บ้านเป็นยี่ห้อหรือรุ่นอะไร"
        subtitle="ถ่ายรูปป้ายรุ่นที่ตัวเครื่องส่งมาทาง LINE ได้เลยครับ ป้ายนี้บอกทั้งรุ่นและขนาด BTU ผมดูให้แล้วแจ้งราคากับเวลาที่ต้องใช้ให้ทราบก่อนนัด"
      />
    </>
  );
}
