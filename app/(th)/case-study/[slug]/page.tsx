import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand } from "@/components/Blocks";
import { IconCheck, IconChevron } from "@/components/Icons";
import { breadcrumbSchema, jsonLd, PERSON_ID } from "@/lib/schema";
import { site } from "@/lib/site";
import { getWorkCase, workCases } from "@/lib/work-cases";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return workCases.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getWorkCase((await params).slug);
  if (!item) return {};
  const description = `${item.finding} ดูขั้นตอนการทำงาน ภาพหน้างานจริง และผลหลังดำเนินการโดยช่างอาร์ม`;
  return { title: { absolute: item.title }, description, alternates: { canonical: `/case-study/${item.slug}` }, openGraph: { title: item.title, description, type: "article", url: `${site.url}/case-study/${item.slug}`, images: [item.images[0].src] } };
}

export default async function WorkCasePage({ params }: Props) {
  const item = getWorkCase((await params).slug);
  if (!item) notFound();
  const trail = [{ name: "หน้าแรก", path: "/" }, { name: "Case Study", path: "/case-study" }, { name: item.title, path: `/case-study/${item.slug}` }];
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: item.title, description: item.finding, url: `${site.url}/case-study/${item.slug}`, inLanguage: "th-TH", dateModified: "2026-08-04", author: { "@id": PERSON_ID }, publisher: { "@id": `${site.url}/#business` }, image: item.images.map((image) => `${site.url}${image.src}`), about: { "@type": "Service", name: item.service, url: `${site.url}/service/${item.serviceSlug}` } };
  const equipment = item.equipment
    .replace(/ ไม่ปรากฏยี่ห้อและ BTU$/, "")
    .replace(/ ไม่ปรากฏยี่ห้อชัดเจน$/, "")
    .replace(/ ไม่ปรากฏยี่ห้อเครื่อง$/, "")
    .replace(/ ไม่ปรากฏยี่ห้อเครื่องและ BTU$/, "")
    .replace(/ ไม่ปรากฏยี่ห้อและรุ่น$/, "")
    .replace(/ ไม่ปรากฏยี่ห้อ$/, "");
  const facts = [
    ["พื้นที่ให้บริการ", "จังหวัดเชียงใหม่"],
    ["ประเภทเครื่อง", equipment],
    ["ประเภทงาน", item.service],
    ["ช่วงเวลาผลงาน", "ปี 2569"],
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <header className="wrap max-w-4xl pt-8 pb-12">
          <p className="eyebrow">Case Study · {item.service}</p>
          <h1 className="mt-5 text-[1.8rem] leading-[1.35] font-extrabold sm:text-[2.3rem]">{item.title}</h1>
          <p className="lead mt-5">{item.finding}</p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">ดำเนินงานและตรวจทานรายละเอียดโดยช่างอาร์ม</p>
        </header>
      </div>
      <article className="wrap max-w-4xl py-10">
        <dl className="grid gap-4 sm:grid-cols-2">
          {facts.map(([label, value]) => <div key={label} className="card p-5"><dt className="text-sm font-bold text-brand-700">{label}</dt><dd className="mt-2 text-[15px] leading-7 text-ink-soft">{value}</dd></div>)}
        </dl>
        <section className="mt-12">
          <h2 className="h2">ภาพจากหน้างานจริง</h2>
          <div className={`mt-6 grid gap-6 ${item.images.length > 1 ? "sm:grid-cols-2" : "max-w-2xl"}`}>
            {item.images.map((image) => <figure key={image.src} className="card overflow-hidden"><div className="relative"><Image src={image.src} alt={image.alt} width={1000} height={750} sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[4/3] w-full object-cover" /><span className="absolute top-3 left-3 rounded-full bg-brand-800/90 px-3 py-1 text-xs font-bold text-white">{image.phase}</span></div><figcaption className="p-4 text-sm leading-7 text-ink-soft">{image.alt}</figcaption></figure>)}
          </div>
        </section>
        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div><h2 className="h2">ขั้นตอนการทำงาน</h2><ol className="mt-5 space-y-3">{item.actions.map((action) => <li key={action} className="flex gap-3 text-[15px] leading-8 text-ink-soft"><IconCheck className="mt-1.5 h-5 w-5 shrink-0 text-mint" />{action}</li>)}</ol></div>
          <div><h2 className="h2">ผลหลังดำเนินการ</h2><p className="mt-5 text-[15px] leading-8 text-ink-soft">{item.result}</p><Link href={`/service/${item.serviceSlug}`} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">ดูมาตรฐานบริการ{item.service}<IconChevron className="h-4 w-4" /></Link></div>
        </section>
      </article>
      <CtaBand title={`ต้องการสอบถามงาน${item.service}`} subtitle="ส่งภาพ รุ่นเครื่อง และพื้นที่ทาง LINE เพื่อให้ช่างประเมินจากข้อมูลจริงก่อนนัด" lineUrl={item.serviceSlug === "lang-washing-machine" ? site.lineUrl2 : site.lineUrl} lineId={item.serviceSlug === "lang-washing-machine" ? site.lineId2 : site.lineId} />
    </>
  );
}
