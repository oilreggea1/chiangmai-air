import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand } from "@/components/Blocks";
import { IconCheck, IconChevron } from "@/components/Icons";
import { breadcrumbSchema, jsonLd, PERSON_ID } from "@/lib/schema";
import { lastmodIso, SRC } from "@/lib/lastmod";
import { share } from "@/lib/seo";
import { site } from "@/lib/site";
import { getWorkCase, workCases } from "@/lib/work-cases";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return workCases.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getWorkCase((await params).slug);
  if (!item) return {};
  const description = `${item.finding} ดูขั้นตอนการทำงาน ภาพหน้างานจริง และผลหลังดำเนินการโดยช่างอาร์ม`;
  /**
   * ชื่อบนแท็บ/ผลค้นหาต้องสั้นกว่าหัวเรื่องบนหน้า (24 ก.ย. 2569)
   * หัวเรื่องเคสเขียนยาวเพื่อบอกรายละเอียดงาน แต่ Google ตัดทิ้งราว 60 ตัวอักษร
   * จึงตัดเอาเฉพาะส่วนหน้าเครื่องหมาย : ซึ่งเป็นใจความหลัก แล้วเติมท้ายเมื่อสั้นเกินไป
   */
  const head = item.title.split(":")[0].trim();
  /** ส่วนต่อท้ายกันชื่อซ้ำกันเอง เลือกพื้นที่จริงก่อน ถ้าไม่มีค่อยใช้วันที่จากโพสต์ */
  const zone = item.area.includes("ไม่ระบุ") ? "" : item.area.split(" —")[0].trim();
  const tail = zone || item.recorded.replace(/^โพสต์เพจ /, "").replace(/ —.*$/, "");
  const metaTitle = head.length >= 46 ? head : `${head} ${tail}`.slice(0, 60).trim();
  return {
    title: { absolute: metaTitle },
    description,
    alternates: { canonical: `/case-study/${item.slug}` },
    ...share({ title: item.title, description, path: `/case-study/${item.slug}`, image: item.images[0] }),
  };
}

export default async function WorkCasePage({ params }: Props) {
  const item = getWorkCase((await params).slug);
  if (!item) notFound();
  const trail = [{ name: "หน้าแรก", path: "/" }, { name: "รีวิวงานจริง", path: "/case-study" }, { name: item.title, path: `/case-study/${item.slug}` }];
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: item.title, description: item.finding, url: `${site.url}/case-study/${item.slug}`, inLanguage: "th-TH", ...(item.date ? { datePublished: item.date } : {}), dateModified: lastmodIso(SRC.workCases), author: { "@id": PERSON_ID }, publisher: { "@id": `${site.url}/#business` }, image: item.images.map((image) => `${site.url}${image.src}`), about: { "@type": "Service", name: item.service, url: `${site.url}/service/${item.serviceSlug}` } };
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
    ["ช่วงเวลาผลงาน", item.date ? item.recorded : "ปี 2569"],
    ...(item.area && !item.area.startsWith("ไม่ระบุ") ? [["พื้นที่หน้างาน", item.area]] : []),
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <header className="wrap max-w-4xl pt-8 pb-12">
          <p className="eyebrow">รีวิวงานจริง · {item.service}</p>
          <h1 className="mt-5 text-[1.8rem] leading-[1.35] font-extrabold sm:text-[2.3rem]">{item.title}</h1>
          <p className="lead mt-5">{item.finding}</p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">ช่างอาร์มเป็นผู้รับผิดชอบและลงมือทำงานนี้</p>
        </header>
      </div>
      <article className="wrap max-w-4xl py-10">
        <dl className="grid gap-4 sm:grid-cols-2">
          {facts.map(([label, value]) => <div key={label} className="card p-5"><dt className="text-sm font-bold text-brand-700">{label}</dt><dd className="mt-2 text-[15px] leading-7 text-ink-soft">{value}</dd></div>)}
        </dl>
        {/* เทียบก่อน–หลังเป็นคู่ (24 ก.ย. 2569 เจ้าของขอให้เห็นชัด): จับคู่รูป "ก่อนทำ" กับ "หลังทำ" ตามลำดับที่เขียนไว้ใน work-cases
            ผู้เขียนเคสต้องเรียงรูปก่อน/หลังให้ตำแหน่ง i ตรงกัน (เช่น ถังนอกก่อน ↔ ถังนอกหลัง) รูปที่เหลือแสดงในแกลเลอรีด้านล่าง */}
        {(() => {
          const before = item.images.filter((i) => i.phase === "ก่อนทำ");
          const after = item.images.filter((i) => i.phase === "หลังทำ");
          const pairs = Array.from({ length: Math.min(before.length, after.length) }, (_, i) => [before[i], after[i]] as const);
          const paired = new Set(pairs.flat().map((i) => i.src));
          const rest = item.images.filter((i) => !paired.has(i.src));
          return (
            <>
              {pairs.length > 0 && (
                <section className="mt-12">
                  <h2 className="h2">เทียบก่อน–หลัง จุดต่อจุด</h2>
                  <p className="lead mt-3">ซ้ายคือสภาพตอนถอดออกมา ขวาคือชิ้นเดียวกันหลังล้างเสร็จ</p>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    {pairs.map(([b, a], i) => (
                      <figure key={b.src} className="card overflow-hidden">
                        <div className="grid grid-cols-2 gap-0.5 bg-slate-200">
                          <div className="relative bg-white"><Image src={b.src} alt={b.alt} width={800} height={800} sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-square w-full object-cover" /><span className="absolute top-3 left-3 rounded-full bg-amber-700/90 px-3 py-1 text-xs font-bold text-white">ก่อน</span></div>
                          <div className="relative bg-white"><Image src={a.src} alt={a.alt} width={800} height={800} sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-square w-full object-cover" /><span className="absolute top-3 left-3 rounded-full bg-emerald-700/90 px-3 py-1 text-xs font-bold text-white">หลัง</span></div>
                        </div>
                        <figcaption className="grid grid-cols-2 gap-3 p-4 text-xs leading-6 text-ink-soft"><span>{i + 1}. {b.alt}</span><span>{a.alt}</span></figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}
              {rest.length > 0 && (
                <section className="mt-12">
                  <h2 className="h2">{pairs.length > 0 ? "ภาพอื่นจากหน้างาน" : "ภาพจากหน้างานจริง"}</h2>
                  <div className={`mt-6 grid gap-6 ${rest.length > 1 ? "sm:grid-cols-2" : "max-w-2xl"}`}>
                    {rest.map((image) => <figure key={image.src} className="card overflow-hidden"><div className="relative"><Image src={image.src} alt={image.alt} width={1000} height={750} sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[4/3] w-full object-cover" /><span className="absolute top-3 left-3 rounded-full bg-brand-800/90 px-3 py-1 text-xs font-bold text-white">{image.phase}</span></div><figcaption className="p-4 text-sm leading-7 text-ink-soft">{image.alt}</figcaption></figure>)}
                  </div>
                </section>
              )}
            </>
          );
        })()}
        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div><h2 className="h2">ขั้นตอนการทำงาน</h2><ol className="mt-5 space-y-3">{item.actions.map((action) => <li key={action} className="flex gap-3 text-[15px] leading-8 text-ink-soft"><IconCheck className="mt-1.5 h-5 w-5 shrink-0 text-mint" />{action}</li>)}</ol></div>
          <div><h2 className="h2">ผลหลังดำเนินการ</h2><p className="mt-5 text-[15px] leading-8 text-ink-soft">{item.result}</p><Link href={`/service/${item.serviceSlug}`} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">ดูมาตรฐานบริการ{item.service}<IconChevron className="h-4 w-4" /></Link></div>
        </section>
      </article>
      <CtaBand title={`ต้องการสอบถามงาน${item.service}`} subtitle="ส่งภาพ รุ่นเครื่อง และพื้นที่เข้ามาทาง LINE ผมประเมินราคาให้ก่อนนัดครับ" lineUrl={item.serviceSlug === "lang-washing-machine" ? site.lineUrl2 : site.lineUrl} lineId={item.serviceSlug === "lang-washing-machine" ? site.lineId2 : site.lineId} />
    </>
  );
}
