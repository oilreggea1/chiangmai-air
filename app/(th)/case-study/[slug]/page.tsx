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
import { jobs } from "@/lib/jobs";
import { caseToJob } from "@/lib/case-to-job";

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
          <h1 className="mt-5 text-[clamp(1.95rem,1.3rem+2.4vw,2.85rem)] leading-[1.32] font-extrabold">{item.title}</h1>
          <p className="lead mt-5">{item.finding}</p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">ช่างอาร์มเป็นผู้รับผิดชอบและลงมือทำงานนี้</p>
        </header>
      </div>
      <article className="wrap max-w-4xl py-10">
        <dl className="grid gap-4 sm:grid-cols-2">
          {facts.map(([label, value]) => <div key={label} className="card p-5"><dt className="text-sm font-bold text-brand-700">{label}</dt><dd className="mt-2 text-[15px] leading-7 text-ink-soft">{value}</dd></div>)}
        </dl>
        {/* รูปหน้างานแยกเป็นกอง ก่อนล้าง ระหว่างล้าง หลังล้าง (แก้ 26 ก.ย. 2569)
            เดิมจับคู่รูป "ก่อนทำ" กับ "หลังทำ" ตามลำดับ แล้วเขียนว่าเป็นชิ้นเดียวกัน
            เจ้าของตรวจเองแล้วพบว่าจับคู่ผิดเยอะ เพราะลำดับรูปในเคสไม่ได้เรียงให้ตรงกันจริง
            เลิกจับคู่ถาวร เปลี่ยนเป็นโชว์เป็นกอง ซึ่งไม่ต้องอ้างว่ารูปไหนคู่กับรูปไหน
            ห้ามกลับไปจับคู่ชิ้นต่อชิ้นอีก เว้นแต่เจ้าของสั่งเอง */}
        {(() => {
          /* ถ้าเคสนี้ผูกกับโพสต์ต้นทางได้ ให้ใช้รูปทั้งงานจากโพสต์นั้น ซึ่งมีหลายสิบรูป
             เพราะรูปชุดเดิมในเคสมีแค่ไม่กี่ใบ ทำให้ดูไม่ออกว่าถอดล้างทุกชิ้นส่วนจริง */
          const job = jobs.find((j) => j.id === caseToJob[item.slug]);
          const groups = job
            ? [
                { key: "ก่อนทำ", label: "ก่อนล้าง", chip: "bg-brand-600 text-white", photos: job.before },
                { key: "ระหว่างทำ", label: "ระหว่างล้าง", chip: "bg-brand-200 text-brand-900", photos: job.during },
                { key: "หลังทำ", label: "หลังล้าง", chip: "bg-gradient-to-b from-ice to-accent text-[#04121F]", photos: job.after },
              ].filter((g) => g.photos.length > 0)
            : [
                { key: "ก่อนทำ" as const, label: "ก่อนล้าง", chip: "bg-brand-600 text-white" },
                { key: "ระหว่างทำ" as const, label: "ระหว่างล้าง", chip: "bg-brand-200 text-brand-900" },
                { key: "หลังทำ" as const, label: "หลังล้าง", chip: "bg-gradient-to-b from-ice to-accent text-[#04121F]" },
              ].map((g) => ({ ...g, photos: item.images.filter((i) => i.phase === g.key) }))
               .filter((g) => g.photos.length > 0);
          const total = groups.reduce((n, g) => n + g.photos.length, 0);
          if (groups.length === 0) return null;
          return (
            <section className="mt-12">
              <h2 className="h2">รูปจากหน้างานจริง {total} รูป</h2>
              <p className="lead mt-3">
                แยกให้ดูเป็นกอง กองบนคือสภาพก่อนลงมือ กองล่างคือหลังทำเสร็จ เป็นงานเดียวกันทั้งหมด
              </p>
              <div className="mt-7 space-y-8">
                {groups.map((g) => (
                  <div key={g.key}>
                    <p className="flex flex-wrap items-center gap-2 text-sm font-bold">
                      <span className={`inline-block rounded-lg px-2.5 py-1 text-xs ${g.chip}`}>{g.label}</span>
                      <span className="text-ink-soft">{g.photos.length} รูป</span>
                    </p>
                    <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {g.photos.map((image) => (
                        <li key={image.src} className="card overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={640}
                            height={640}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                            className="aspect-square w-full object-cover"
                          />
                          <p className="p-3 text-xs leading-6 text-ink-soft">{image.alt}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })()}
        {/* สิ่งที่อ่านจากเคสนี้แล้วเอาไปใช้เองได้ (24 ก.ย. 2569)
            เคสที่มีภาพน้อยจะบางเกินไปถ้ามีแต่คำบรรยายภาพ บล็อกนี้จึงเติมความรู้ช่างที่อธิบายสิ่งที่เห็นในภาพ
            ไม่ใช่การเติมรายละเอียดงานที่ไม่มีหลักฐาน */}
        {item.lesson && item.lesson.length > 0 && (
          <section className="mt-12">
            <h2 className="h2">สิ่งที่คุณดูเองได้จากเคสนี้</h2>
            <p className="lead mt-3">ช่างอาร์มอธิบายสิ่งที่เห็นในภาพ เพื่อให้คุณใช้ตัดสินใจกับเครื่องที่บ้านได้เอง</p>
            <div className="mt-7 space-y-4">
              {item.lesson.map((l) => (
                <div key={l.t} className="card p-6">
                  <h3 className="font-bold leading-7">{l.t}</h3>
                  <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{l.d}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div><h2 className="h2">ขั้นตอนการทำงาน</h2><ol className="mt-5 space-y-3">{item.actions.map((action) => <li key={action} className="flex gap-3 text-[15px] leading-8 text-ink-soft"><IconCheck className="mt-1.5 h-5 w-5 shrink-0 text-mint" />{action}</li>)}</ol></div>
          <div><h2 className="h2">ผลหลังดำเนินการ</h2><p className="mt-5 text-[15px] leading-8 text-ink-soft">{item.result}</p><Link href={`/service/${item.serviceSlug}`} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">ดูมาตรฐานบริการ{item.service}<IconChevron className="h-4 w-4" /></Link></div>
        </section>
        {/* เคสใกล้เคียง: บริการเดียวกันก่อน ถ้าไม่พอเติมด้วยเคสล่าสุด ช่วยให้ผู้อ่านเทียบงานหลายเครื่องได้ */}
        {(() => {
          /**
           * หมุนเวียนเคสที่แนะนำตามตำแหน่งของเคสปัจจุบัน (แก้ 24 ก.ย. 2569)
           * เดิมหยิบสามเคสใหม่สุดเสมอ ผลคือเคสเก่ามีลิงก์เข้าแค่จากหน้ารวมหน้าเดียว
           * แบบวนรอบทำให้ทุกเคสได้ลิงก์เข้าใกล้เคียงกัน และผู้อ่านเห็นงานหลากหลายขึ้น
           */
          const pool = workCases.filter((c) => c.slug !== item.slug);
          const same = pool.filter((c) => c.serviceSlug === item.serviceSlug);
          const rest = pool.filter((c) => c.serviceSlug !== item.serviceSlug);
          const ordered = [...same, ...rest];
          const start = workCases.findIndex((c) => c.slug === item.slug);
          const related = ordered.length <= 3 ? ordered : Array.from({ length: 3 }, (_, k) => ordered[(start + 1 + k) % ordered.length]);
          return related.length > 0 ? (
            <section className="mt-12">
              <h2 className="h2">เคสใกล้เคียง</h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-3">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/case-study/${c.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
                      <Image src={c.images[0].src} alt={c.images[0].alt} width={540} height={405} loading="lazy" sizes="(max-width: 640px) 100vw, 30vw" className="aspect-[4/3] w-full object-cover" />
                      <div className="flex flex-1 flex-col p-4">
                        <span className="text-xs font-bold text-brand-600">{c.service}</span>
                        <h3 className="mt-1.5 text-sm font-bold leading-6 group-hover:text-brand-700">{c.title.split(":")[0]}</h3>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/case-study" className="btn-ghost">ดูรีวิวงานจริงทั้งหมด<IconChevron className="h-4 w-4" /></Link>
              </div>
            </section>
          ) : null;
        })()}
      </article>
      <CtaBand title={`ต้องการสอบถามงาน${item.service}`} subtitle="ส่งภาพ รุ่นเครื่อง และพื้นที่เข้ามาทาง LINE ผมประเมินราคาให้ก่อนนัดครับ" lineUrl={item.serviceSlug === "lang-washing-machine" ? site.lineUrl2 : site.lineUrl} lineId={item.serviceSlug === "lang-washing-machine" ? site.lineId2 : site.lineId} />
    </>
  );
}
