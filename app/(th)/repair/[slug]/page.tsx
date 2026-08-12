import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, p } from "@/lib/site";
import { repairGuides } from "@/lib/repair-guides";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/Blocks";
import { IconCheck, IconChevron, IconLine, IconPhone, IconShield } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return repairGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = repairGuides.find((item) => item.slug === slug);
  if (!guide) return {};
  return {
    // หัวข้อคู่มือซ่อมยาวและบรรยายอาการครบในตัว ไม่ต้องต่อท้ายแบรนด์ให้โดนตัด
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: `/repair/${guide.slug}` },
    ...share({ title: guide.title, description: guide.description, path: `/repair/${guide.slug}` }),
  };
}

export default async function RepairGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = repairGuides.find((item) => item.slug === slug);
  if (!guide) notFound();
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "ซ่อมแอร์เชียงใหม่", path: "/service/som-air" },
    { name: guide.brand ? `Error Code ${guide.brand}` : "ซ่อมแอร์อินเวอร์เตอร์", path: `/repair/${guide.slug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(guide.faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-4xl pt-8 pb-16">
          <p className="eyebrow">ตรวจตามรุ่นจริง · ไม่เดาเปลี่ยนอะไหล่</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">{guide.h1}</h1>
          <p className="lead mt-5 max-w-3xl">{guide.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5"><IconPhone className="h-5 w-5" />โทร {site.phone}</a>
            <a href={site.lineUrl} target="_blank" rel="noopener" data-cta="repair-photo-line" className="btn-line px-6 py-3.5"><IconLine className="h-5 w-5" />ส่งรูปทาง LINE {site.lineId}</a>
          </div>
        </section>
      </div>

      <section className="section pt-5">
        <div className="wrap grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="h2">สิ่งที่ต้องตรวจให้ครบก่อนสรุปสาเหตุ</h2>
            <p className="mt-4 text-[15px] leading-8 text-ink-soft">{guide.brandNote}</p>
            <ul className="mt-7 space-y-4">
              {guide.checks.map((check) => <li key={check} className="flex gap-3"><IconCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600" /><span className="leading-7">{check}</span></li>)}
            </ul>
          </div>
          <aside className="card bg-sand p-6 sm:p-8">
            <p className="flex items-center gap-2 font-bold"><IconShield className="h-5 w-5 text-brand-600" />เงื่อนไขค่าตรวจ</p>
            <p className="mt-4 text-4xl font-extrabold text-brand-700">{p.repair.diagnostic} บาท</p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">หักคืนเต็มจำนวนเมื่อตัดสินใจซ่อม แจ้งราคาอะไหล่และระยะรับประกันก่อนเริ่มงาน</p>
            <Link href="/price/repair" className="btn-ghost mt-6 w-full" data-cta="repair-price">ดูราคาซ่อมแอร์<IconChevron className="h-4 w-4" /></Link>
          </aside>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ขั้นตอนเมื่อแอร์แจ้ง Error Code</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["บันทึกรหัสและรุ่นเครื่อง", "ตรวจไฟและสายสื่อสาร", "วัดอุปกรณ์ที่เกี่ยวข้อง", "เสนอราคาและทดสอบหลังซ่อม"].map((step, i) => (
              <div key={step} className="card p-5"><span className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 font-bold text-white">{i + 1}</span><h3 className="mt-4 font-bold leading-7">{step}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <FaqList items={guide.faqs} title={`คำถามที่พบบ่อยเรื่อง${guide.brand ? ` Error Code ${guide.brand}` : "ซ่อมแอร์อินเวอร์เตอร์"}`} />
      <CtaBand title="ส่งรูป Error Code และรุ่นเครื่องให้ผมตรวจเบื้องต้น" subtitle="ถ่ายให้เห็นหน้าจอหรือไฟกระพริบ พร้อมสติกเกอร์รุ่นตัวในและตัวนอก ผมใช้ข้อมูลนี้เตรียมเครื่องมือให้ตรงงาน" />
    </>
  );
}
