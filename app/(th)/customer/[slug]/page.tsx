import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, areas, pricing, reviews, p } from "@/lib/site";
import { segments } from "@/lib/segments";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { IconCheck, IconChevron, IconClock, IconLine, IconPhone } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs, ReviewCard } from "@/components/Blocks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = segments.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/customer/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url: `${site.url}/customer/${s.slug}`, type: "article" },
  };
}

export default async function SegmentPage({ params }: Props) {
  const { slug } = await params;
  const seg = segments.find((x) => x.slug === slug);
  if (!seg) notFound();

  const others = segments.filter((x) => x.slug !== seg.slug);
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "กลุ่มลูกค้า", path: "/customer" },
    { name: seg.name, path: `/customer/${seg.slug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(seg.faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-14 lg:pb-20">
          <p className="eyebrow">{seg.name} · จ.เชียงใหม่</p>
          <h1 className="mt-5 max-w-3xl text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">{seg.h1}</h1>
          <p className="lead mt-5 max-w-3xl">{seg.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="segment-call">
              <IconPhone className="h-5 w-5" />
              โทร {site.phone}
            </a>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="segment-line">
              <IconLine className="h-5 w-5" />
              แจ้งจำนวนเครื่องทาง LINE
            </a>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-soft">
            <IconClock className="h-5 w-5 text-brand-600" />
            {site.daysLabel} {site.hours}
          </p>
        </section>
      </div>

      {/* เงื่อนไขหน้างานที่ต่างจากบ้านทั่วไป */}
      <section className="section">
        <div className="wrap">
          <h2 className="h2">งาน{seg.name}ต่างจากงานบ้านทั่วไปอย่างไร</h2>
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {seg.points.map((pt) => (
              <div key={pt.t} className="card p-6">
                <h3 className="flex items-start gap-3 text-lg font-bold">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
                  {pt.t}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{pt.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ราคา ดึงจากตารางกลาง ไม่พิมพ์ตัวเลขซ้ำ */}
      <section className="section bg-slate-50">
        <div className="wrap">
          <h2 className="h2">ราคาที่ใช้กับงาน{seg.name}</h2>
          <p className="lead mt-3 max-w-2xl">
            ราคาเดียวกับงานทั่วไป ไม่มีอัตราพิเศษสำหรับลูกค้าธุรกิจที่แพงกว่า
            และไม่คิดค่าเดินทางเพิ่มทุกตำบลที่รับงาน
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
          <Link href="/price" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900">
            ดูตารางราคาทั้งหมด
            <IconChevron className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <FaqList items={seg.faqs} title={`คำถามที่พบบ่อยเรื่อง${seg.keyword.replace("เชียงใหม่", "")}`} />
        </div>
      </section>

      {/* กลุ่มอื่น */}
      <section className="section bg-slate-50">
        <div className="wrap">
          <h2 className="h2">กลุ่มลูกค้าอื่นที่รับงาน</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/customer/${o.slug}`} className="card p-5 transition-all hover:-translate-y-1 hover:shadow-lift">
                <h3 className="font-bold">{o.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{o.keyword}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            รับงานใน {areas.length} โซนทั่วเชียงใหม่{" "}
            <Link href="/area" className="font-semibold text-brand-700 hover:text-brand-900">
              ดูพื้นที่ให้บริการทั้งหมด
            </Link>
          </p>
        </div>
      </section>

      {reviews.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2 className="h2">เสียงจากลูกค้า</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {reviews.slice(0, 3).map((r) => (
                <ReviewCard key={r.name} {...r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`ต้องการล้างแอร์${seg.name}ในเชียงใหม่`}
        subtitle={`แจ้งจำนวนเครื่องกับชนิดของแอร์มาก่อนได้ ผมสรุปยอดรวมและเวลาที่ต้องใช้ให้ทราบก่อนนัด ล้างแอร์ติดผนังเครื่องละ ${p.wash.std} บาท ตั้งแต่ 3 เครื่องขึ้นไปเครื่องละ ${p.wash.stdBulk} บาท`}
      />
    </>
  );
}
