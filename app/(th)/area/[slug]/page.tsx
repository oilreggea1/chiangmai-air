import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, areas, services, pricing, reviews, workingPhotos, p } from "@/lib/site";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { clipDesc, share } from "@/lib/seo";
import { IconCheck, IconChevron, IconClock, IconLine, IconPhone, IconPin, serviceIcons } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs, ReviewCard } from "@/components/Blocks";
import { workCases } from "@/lib/work-cases";
import { areaTranslated } from "@/content/areas-intl";
import { condosInArea } from "@/components/CondoPages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) return {};
  // คนค้นด้วย "ช่างแอร์ + ชื่อตำบล" และมักมีคำว่าเชียงใหม่พ่วงมาด้วย
  // จึงใส่คำว่าเชียงใหม่ลงในหัวข้อ ยกเว้นตำบลที่ชื่อมีคำนี้อยู่แล้ว
  // แล้วเลือกท่อนท้ายที่ยาวที่สุดเท่าที่ยังอยู่ในกรอบ 60 ตัวอักษรที่ Google แสดงจริง
  const head = `ช่างแอร์${a.name}${a.name.includes("เชียงใหม่") ? "" : " เชียงใหม่"}`;
  const tails = ["ล้างแอร์ ซ่อมแอร์ ถึงบ้าน", "ล้างแอร์ ซ่อมแอร์", "ล้างแอร์"];
  const title = tails.map((t) => `${head} ${t}`).find((t) => t.length <= 60) ?? head;
  // ราคาต้องดึงจาก p เสมอ ของเดิมพิมพ์ 500/450 ไว้ตรง ๆ ซึ่งจะค้างถ้าเจ้าของปรับราคา
  // และตัดเบอร์โทรออก เพราะอยู่กลางคำอธิบายแล้วกินที่ โดยไม่ได้ทำให้คนคลิกเพิ่ม
  // ชื่อตำบลบางแห่งยาว ถ้าใช้ประโยคเดียวกันหมดจะเกิน 160 ตัวอักษรที่ Google แสดง
  // จึงตัดท่อนท้ายออกเมื่อชื่อยาว แทนที่จะปล่อยให้โดนตัดกลางประโยค
  const descTail = a.name.length > 14 ? "" : " ไม่คิดค่าเดินทางเพิ่ม";
  const description = `ช่างแอร์${a.name} ล้างแอร์ ${p.wash.std} บาท 3 เครื่องขึ้นไปเครื่องละ ${p.wash.stdBulk} บาท ซ่อม ติดตั้ง ย้ายแอร์ถึงบ้านใน ${a.full}${descTail}`;
  return {
    title,
    description: clipDesc(description),
    alternates: {
      canonical: `/area/${a.slug}`,
      // ประกาศคู่ภาษาเฉพาะพื้นที่ที่มีคำแปลครบ (content/areas-intl)
      ...(areaTranslated(a.slug)
        ? { languages: { "th-TH": `/area/${a.slug}`, "en-US": `/en/areas/${a.slug}`, "zh-CN": `/zh/areas/${a.slug}`, "x-default": `/area/${a.slug}` } }
        : {}),
    },
    ...share({ title, description, path: `/area/${a.slug}` }),
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) notFound();

  const others = areas.filter((x) => x.slug !== a.slug);
  /**
   * งานจริงในพื้นที่นี้ (29 ก.ย. 2569) ดึงเฉพาะเคสที่ช่อง area ระบุชื่อตำบลหรืออำเภอของหน้านี้จริง
   * พื้นที่ของเคสมาจากแท็กสถานที่ในโพสต์ส่งงาน ห้ามยืมเคสจากพื้นที่อื่นมาใส่ ตำบลที่ยังไม่มีงานให้ซ่อนกล่อง
   */
  // หน้าตำบลใช้เฉพาะชื่อตำบล (ห้ามใช้ชื่ออำเภอ ไม่งั้นเคสที่ระบุแค่อำเภอจะถูกเข้าใจว่าเป็นงานในตำบลนี้)
  // หน้าอำเภอใช้ชื่ออำเภอ
  const places = a.full.startsWith("อ.")
    ? [a.full.replace(/^อ\./, "").trim()]
    : [...a.full.matchAll(/ต\.([^\s/]+)/g)].map((m) => m[1]);
  const localCases = workCases
    .filter((c) => c.date && c.area !== "เชียงใหม่" && places.some((pl) => c.area.includes(pl)))
    .sort((x, y) => y.date!.localeCompare(x.date!))
    .slice(0, 4);
  const idx = areas.findIndex((x) => x.slug === a.slug);
  const condos = condosInArea(a.full, a.name);
  // หน้าอำเภอบ้านตัวเอง ห้ามเขียนว่า "อยู่ไม่ไกลจาก" เพราะร้านตั้งอยู่ในอำเภอนั้นเอง
  const isHomeArea = a.slug === "san-kamphaeng";
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "พื้นที่ให้บริการ", path: "/area" },
    { name: `ช่างแอร์${a.name}`, path: `/area/${a.slug}` },
  ];

  // FAQ เฉพาะโซนมาก่อน แล้วตามด้วยคำถามกลางที่ใช้ร่วมทุกโซน
  // เดิมทั้งสี่ข้อเป็นเทมเพลตเดียวกันสลับแค่ชื่อตำบล ซึ่ง Google อ่านเป็นเนื้อหาซ้ำ
  const localFaqs = "local" in a && a.local && "faqs" in a.local ? a.local.faqs : [];
  const areaFaqs = [
    ...localFaqs,
    {
      q: `เรียกช่างแอร์${a.name} ใช้เวลากี่วันจึงได้คิว?`,
      a: "ปกติผมเข้าหน้างานได้ภายใน 24 ชั่วโมงครับ และเข้าในวันเดียวกันได้หากคิวว่าง ยกเว้นช่วง ก.พ.–เม.ย. ที่คิวแน่นทั้งจังหวัด แนะนำให้สอบถามคิวล่วงหน้าทางโทรศัพท์หรือ LINE",
    },
    {
      q: `กรณีอยู่ใน ${a.name} มีค่าเดินทางเพิ่มหรือไม่?`,
      a: `ไม่มีครับ ${a.full} อยู่ในเขตให้บริการปกติ ราคาที่ระบุไว้คือราคาที่ชำระจริง`,
    },
    {
      q: "รับล้างแอร์คอนโดและหอพักในพื้นที่นี้หรือไม่?",
      a: "รับครับ ทั้งบ้านพักอาศัย คอนโด หอพัก ร้านกาแฟ ร้านอาหาร และสำนักงาน กรณีล้างหลายเครื่องมีอัตราพิเศษให้",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(areaFaqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap grid gap-10 pt-8 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              {a.full} จ.เชียงใหม่
            </p>
            <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
              ช่างแอร์{a.name} ล้างแอร์ ซ่อมแอร์ ถึงบ้าน
            </h1>
            <p className="lead mt-5">
              {a.note} ผมรับล้างแอร์ ซ่อมแอร์ ติดตั้ง ย้ายแอร์ และล้างเครื่องซักผ้าใน {a.full}{" "}
              แจ้งราคาก่อนเริ่มงาน และไม่คิดค่าเดินทางเพิ่ม
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="area-call">
                <IconPhone className="h-5 w-5" />
                โทร {site.phone}
              </a>
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="area-line">
                <IconLine className="h-5 w-5" />
                สอบถามคิวทาง LINE
              </a>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-soft">
              <IconClock className="h-5 w-5 text-brand-600" />
              {site.daysLabel} {site.hours} · {site.sundayShort}
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={workingPhotos[idx % workingPhotos.length].src}
              alt={`ช่างแอร์${a.name} กำลังให้บริการล้างแอร์ถึงบ้านลูกค้าใน ${a.full}`}
              width={900}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[22rem] w-full object-cover sm:h-[26rem]"
            />
          </div>
        </section>
      </div>

      {/* บริการในพื้นที่ */}
      <section className="section">
        <div className="wrap">
          <h2 className="h2">บริการช่างแอร์ที่รับใน {a.name}</h2>
          <p className="lead mt-3 max-w-2xl">
            ทุกบริการครอบคลุม {a.full} ในอัตราเดียวกับพื้นที่อื่น ไม่มีค่าเดินทางเพิ่ม
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
              return (
                <Link
                  key={s.slug}
                  href={`/service/${s.slug}`}
                  className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/70 transition-all group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white group-hover:ring-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{s.name}{a.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    {s.priceLabel}
                    <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* เนื้อหาเฉพาะพื้นที่ */}
      <section className="section bg-sand">
        <div className="wrap max-w-3xl">
          <h2 className="h2">วิธีทำงานของผมในพื้นที่นี้</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
            <p>
              ที่ตั้งของผมอยู่ที่ <strong className="text-ink">ต.สันกำแพง อ.สันกำแพง</strong>{" "}
              {isHomeArea
                ? "ซึ่งอยู่ในอำเภอเดียวกับพื้นที่นี้ ผมจึงเข้าถึงหน้างานได้เร็วที่สุด"
                : `และรับงานใน ${a.full} เป็นประจำ`}
              {" "}จุดสังเกตในพื้นที่นี้ ได้แก่ {a.landmarks.join(" · ")}
            </p>
            <p>
              ผม<strong className="text-ink">แจ้งราคาก่อนเริ่มงานทุกครั้ง</strong>{" "}
              ตรวจให้ลูกค้าดูต่อหน้า อธิบายสาเหตุที่แท้จริง และไม่เติมน้ำยาหากไม่พร่อง
              เนื่องจากการเติมเกินทำให้ใช้ไฟมากขึ้นและลดอายุคอมเพรสเซอร์
            </p>
            <p>
              งานล้างทุกครั้งผมปูผ้าใบคลุมหนา 2 ชั้นก่อนเริ่ม และเก็บพื้นที่ให้เรียบร้อยก่อนส่งมอบ
              ฉีดน้ำยาฆ่าเชื้อให้ทุกเครื่อง และรับประกันน้ำหยด 30 วัน (งานถอดล้างพิเศษ 60 วัน)
              หากน้ำหยดในระยะดังกล่าว ผมกลับไปแก้ไขให้โดยไม่คิดค่าใช้จ่าย
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {a.landmarks.map((l) => (
              <li
                key={l}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-800"
              >
                <IconPin className="h-4 w-4 text-brand-500" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* เนื้อหาเฉพาะพื้นที่ เขียนจากข้อเท็จจริงของตัวพื้นที่ ไม่ใช่คำอ้างเรื่องลูกค้า */}
      {"local" in a && a.local && (
        <section className="section">
          <div className="wrap max-w-3xl">
            <h2 className="h2">งานแอร์ใน{a.name} มีอะไรที่ต่างจากพื้นที่อื่น</h2>
            <p className="lead mt-4">{a.local.lead}</p>
            <ul className="mt-9 space-y-5">
              {a.local.points.map((pt) => (
                <li key={pt.t} className="card p-6">
                  <p className="flex items-start gap-2.5 font-bold">
                    <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                    {pt.t}
                  </p>
                  <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{pt.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* คอนโดในตำบลนี้ (29 ก.ย. 2569) รายชื่อจากทำเนียบ lib/condo-directory.ts */}
      {condos.length > 0 && (
        <section className="section">
          <div className="wrap max-w-4xl">
            <h2 className="h2">คอนโดใน{a.name}ที่ผมรับล้างแอร์ถึงห้อง</h2>
            <p className="lead mt-3">{condos.length} โครงการในพื้นที่นี้ ทุกอาคารราคาเดียวกัน ไม่คิดค่าเดินทาง แจ้งชื่ออาคารและชั้นมาก่อนนัดได้</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {condos.map((c) => (
                <li key={c.en} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm">{c.th ?? c.en}</li>
              ))}
            </ul>
            <Link href={`/condo#t-${a.slug}`} className="btn-ghost mt-6" data-cta="area-condo-dir">
              ค้นชื่อคอนโดทั้งหมดในเชียงใหม่
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {localCases.length > 0 && (
        <section className="section bg-sand">
          <div className="wrap">
            <h2 className="h2">งานจริงใน{a.name}</h2>
            <p className="lead mt-3 max-w-2xl">สภาพเครื่องตอนผมไปถึงและตอนทำเสร็จ จากงานในพื้นที่นี้</p>
            <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {localCases.map((c) => {
                const img = c.images.find((i) => i.phase === "หลังทำ") ?? c.images[0];
                return (
                  <li key={c.slug}>
                    <Link href={`/case-study/${c.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
                      <Image src={img.src} alt={img.alt} width={600} height={450} loading="lazy" sizes="(max-width: 640px) 100vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                      <div className="flex flex-1 flex-col p-5">
                        <span className="text-xs font-bold text-brand-600">{c.service} · {c.recorded}</span>
                        <h3 className="mt-2 font-bold leading-7 group-hover:text-brand-700">{c.title.split(":")[0]}</h3>
                        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-brand-700">อ่านรายงาน<IconChevron className="h-4 w-4" /></span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* ราคา */}
      <section className="section">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ราคาช่างแอร์{a.name}</h2>
          <p className="lead mt-3">
            ราคาเดียวกันทุกพื้นที่ในเขตบริการ ไม่มีค่าเดินทางเพิ่มเติม
          </p>
          <div className="mt-8 space-y-6">
            {pricing.map((g) => (
              <div key={g.group} className="card overflow-hidden">
                <h3 className="border-b border-slate-100 bg-slate-50 px-5 py-3.5 text-base font-bold sm:px-6">
                  {g.group}
                </h3>
                <ul className="divide-y divide-slate-100">
                  {g.items.map((it) => (
                    <li key={it.label} className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
                      <span className="text-[15px] text-ink-soft">{it.label}</span>
                      <span className="shrink-0 font-bold text-brand-700">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/price" className="btn-ghost" data-cta="area-price">
              ดูเงื่อนไขและรายละเอียดราคาทั้งหมด
              <IconChevron className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              ย้ายเข้าบ้านใหม่ หรือซื้อแอร์ออนไลน์มาแล้ว ผมรับติดตั้งในโซนนี้ด้วย —{" "}
              <Link href="/customer/ban-mai" className="font-semibold text-brand-700 hover:underline" data-cta="area-ban-mai">
                ติดตั้งแอร์บ้านใหม่ทั้งหลัง
              </Link>{" "}
              ·{" "}
              <Link href="/customer/sue-air-online" className="font-semibold text-brand-700 hover:underline" data-cta="area-air-online">
                รับติดตั้งแอร์ที่ซื้อมาเอง
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="h2 text-center">ความเห็นจากลูกค้า</h2>
          <div className="mx-auto mt-9 grid max-w-4xl gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      <FaqList items={areaFaqs} title={`คำถามที่พบบ่อยเรื่องช่างแอร์${a.name}`} />

      {/* พื้นที่อื่น */}
      <section className="section">
        <div className="wrap">
          <h2 className="h2">พื้นที่ใกล้เคียงที่ให้บริการ</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/area/${o.slug}`}
                  className="card group flex h-full items-start gap-3 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span>
                    <span className="block font-bold group-hover:text-brand-700">ช่างแอร์{o.name}</span>
                    <span className="mt-0.5 block text-xs leading-6 text-ink-soft">{o.full}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`เรียกช่างแอร์${a.name}วันนี้`}
        subtitle={
          isHomeArea
            ? `ที่ตั้งของผมอยู่ใน ${a.full} ส่งรายละเอียดเข้ามาเพื่อตรวจสอบคิวว่างก่อนนัดหมายได้ครับ`
            : `ผมรับงานใน ${a.full} เป็นประจำ ส่งรายละเอียดเข้ามาเพื่อตรวจสอบคิวว่างก่อนนัดหมายได้ครับ`
        }
      />
    </>
  );
}
