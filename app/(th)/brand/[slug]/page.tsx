import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, pricing, p } from "@/lib/site";
import { brands, brandCommon, brandFaqs } from "@/lib/brands";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconCheck, IconChevron, IconClock, IconLine, IconPhone } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/Blocks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = brands.find((x) => x.slug === slug);
  if (!b) return {};
  // คนค้นทั้งคำว่าล้างและซ่อมพร้อมชื่อยี่ห้อ หัวข้อจึงต้องมีทั้งสองคำ
  // ชื่อยี่ห้อยาวไม่เท่ากัน จึงเลือกรูปแบบที่ยาวที่สุดเท่าที่ยังอยู่ในกรอบ 60 ตัวอักษร
  const forms = [
    `ล้างแอร์ ซ่อมแอร์${b.name} เชียงใหม่ ถึงบ้าน ${p.wash.std} บาท`,
    `ล้างแอร์ ซ่อมแอร์${b.name} เชียงใหม่ ถึงบ้าน`,
    `ล้างแอร์ ซ่อมแอร์${b.name} เชียงใหม่`,
  ];
  const title = forms.find((t) => t.length <= 60) ?? forms[forms.length - 1];
  // ชื่อยี่ห้อยาวไม่เท่ากัน ถ้าใช้ประโยคเดียวกันหมด ยี่ห้อชื่อยาวจะเกิน 160 ตัวอักษรแล้วโดนตัด
  // จึงเลือกประโยคที่ยาวที่สุดเท่าที่ยังพอดีกรอบ แทนที่จะปล่อยให้ตัดกลางคำ
  const descs = [
    `ล้างแอร์และซ่อมแอร์${b.name} (${b.en}) เชียงใหม่ ถึงบ้าน เครื่องละ ${p.wash.std} บาท 3 เครื่องขึ้นไปเครื่องละ ${p.wash.stdBulk} บาท ตรวจวัดให้ดูก่อนเสนอราคา เติมน้ำยาเฉพาะเมื่อวัดแล้วพร่องจริง`,
    `ล้างแอร์และซ่อมแอร์${b.name} (${b.en}) เชียงใหม่ ถึงบ้าน เครื่องละ ${p.wash.std} บาท 3 เครื่องขึ้นไปเครื่องละ ${p.wash.stdBulk} บาท ตรวจให้ดูก่อนเสนอราคา`,
    `ล้างแอร์และซ่อมแอร์${b.name} เชียงใหม่ ถึงบ้าน เครื่องละ ${p.wash.std} บาท 3 เครื่องขึ้นไปเครื่องละ ${p.wash.stdBulk} บาท ตรวจให้ดูก่อนเสนอราคา`,
  ];
  const description = descs.find((d) => d.length <= 160) ?? descs[descs.length - 1];
  return {
    title,
    description,
    alternates: { canonical: `/brand/${b.slug}` },
    ...share({ title, description, path: `/brand/${b.slug}` }),
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const b = brands.find((x) => x.slug === slug);
  if (!b) notFound();

  const others = brands.filter((x) => x.slug !== b.slug);
  const faqs = brandFaqs(b);
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "ยี่ห้อแอร์", path: "/brand" },
    { name: b.name, path: `/brand/${b.slug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-14 lg:pb-20">
          <p className="eyebrow">
            {b.en} · จ.เชียงใหม่
          </p>
          <h1 className="mt-5 max-w-3xl text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ล้างแอร์และซ่อมแอร์{b.name}เชียงใหม่ ถึงบ้าน
          </h1>
          <p className="lead mt-5 max-w-3xl">{brandCommon.principle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="brand-call">
              <IconPhone className="h-5 w-5" />
              โทร {site.phone}
            </a>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="brand-line">
              <IconLine className="h-5 w-5" />
              ส่งรูปป้ายรุ่นทาง LINE
            </a>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-soft">
            <IconClock className="h-5 w-5 text-brand-600" />
            {site.daysLabel} {site.hours} · {site.closedNote}
          </p>
        </section>
      </div>

      <section className="section">
        <div className="wrap grid gap-5 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="flex items-start gap-3 text-lg font-bold">
              <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              เรื่องที่ต่างเมื่อทำงานกับ{b.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">{b.note}</p>
          </div>
          <div className="card p-6">
            <h2 className="flex items-start gap-3 text-lg font-bold">
              <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              เครื่องยังอยู่ในประกันศูนย์
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">{brandCommon.warranty}</p>
          </div>
          <div className="card p-6">
            <h2 className="flex items-start gap-3 text-lg font-bold">
              <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              ต้องรออะไหล่{b.name}นานหรือไม่
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">{brandCommon.parts}</p>
          </div>
          <div className="card p-6">
            <h2 className="flex items-start gap-3 text-lg font-bold">
              <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              แจ้งอาการอย่างไรให้เตรียมของได้ตรง
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              ถ่ายรูปป้ายรุ่นที่ตัวเครื่องส่งมาก่อนได้ครับ ป้ายนี้บอกทั้งรุ่นและขนาด BTU
              ถ้าเครื่องขึ้นรหัสหรือมีไฟกระพริบ ถ่ายวิดีโอตั้งแต่เริ่มรอบมาด้วยจะดีที่สุด
              ผมจะได้เตรียมอะไหล่กับเครื่องมือให้ตรง และลดโอกาสที่ต้องกลับไปเบิกของเพิ่ม
            </p>
          </div>
        </div>

        {b.errorSlug && (
          <div className="wrap mt-8">
            <Link
              href={`/repair/${b.errorSlug}`}
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900"
            >
              เครื่อง{b.name}ขึ้นรหัสข้อผิดพลาด อ่านวิธีตรวจเบื้องต้น
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>

      <section className="section bg-slate-50">
        <div className="wrap">
          <h2 className="h2">ราคาล้างแอร์{b.name} เท่ากับทุกยี่ห้อ</h2>
          <p className="lead mt-3 max-w-2xl">
            ราคาคิดตามชนิดและขนาดของแอร์ ไม่ใช่ตามยี่ห้อ เพราะขั้นตอนการทำงานเท่ากัน
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="py-3 pr-4 font-bold">รายการ</th>
                  <th className="py-3 pr-4 font-bold">ราคา</th>
                </tr>
              </thead>
              <tbody>
                {pricing.flatMap((g) =>
                  g.items.map((it) => (
                    <tr key={`${g.group}-${it.label}`} className="border-b border-slate-200">
                      <td className="py-3 pr-4">
                        <span className="text-ink-soft">{g.group}</span> · {it.label}
                      </td>
                      <td className="py-3 pr-4 font-semibold text-brand-800">{it.price}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
          <Link href="/price" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900" data-cta="brand-price">
            ดูตารางราคาทั้งหมด
            <IconChevron className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <FaqList items={faqs} title={`คำถามที่พบบ่อยเรื่องแอร์${b.name}`} />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="wrap">
          <h2 className="h2">ยี่ห้ออื่นที่รับงาน</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/brand/${o.slug}`}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-800"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`ต้องการช่างล้างหรือซ่อมแอร์${b.name}ในเชียงใหม่`}
        subtitle={`ถ่ายรูปป้ายรุ่นที่ตัวเครื่องส่งมาก่อนได้ ผมจะได้เตรียมของให้ตรง ล้างแอร์ติดผนังเครื่องละ ${p.wash.std} บาท ค่าตรวจเช็คงานซ่อม ${p.repair.diagnostic} บาท ซึ่งหักคืนให้ถ้าตกลงซ่อม`}
      />
    </>
  );
}
