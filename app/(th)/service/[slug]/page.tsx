import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, services, areas, heroPhotos, servicePhotos, caseStudies, p, btu } from "@/lib/site";
import { articles } from "@/content/articles";
import { repairGuides } from "@/lib/repair-guides";
import { serviceSchema, faqSchema, breadcrumbSchema, howToSchema, videoSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { serviceIcons, IconPhone, IconLine, IconChevron, IconPin } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs, CheckList, Steps, CaseStudies } from "@/components/Blocks";
import { reels } from "@/components/ReelsShowcase";
import { ReelCard } from "@/components/ReelCard";
import { lastmodIso, thaiDate, SRC } from "@/lib/lastmod";
import { workCases } from "@/lib/work-cases";

type Props = { params: Promise<{ slug: string }> };

/**
 * คลิปหน้างานล้างแอร์ที่หยิบมาแสดงในหน้าบริการล้างแอร์ (13 ก.ย. 2569)
 *
 * เลือกด้วยรหัสคลิปตรง ๆ ไม่กรองจากชื่อเรื่อง เพราะชื่อคลิปเปลี่ยนได้
 * แล้วรายการจะเงียบ ๆ กลายเป็นว่าง โดยไม่มีอะไรเตือน
 * ถ้าเพิ่มคลิปใหม่ใน ReelsShowcase แล้วอยากให้ขึ้นหน้านี้ ต้องเติมรหัสที่นี่ด้วย
 */
/**
 * สามแบบการล้างที่หน้า /service/lang-air ใช้เทียบให้ลูกค้าเลือก
 * ราคาอ้างจาก p.wash และช่วง BTU อ้างจาก btu เท่านั้น ห้ามพิมพ์ตัวเลขซ้ำที่นี่
 * ประกาศไว้ชุดเดียวเพราะต้องแสดงสองแบบ (การ์ดบนมือถือ ตารางบนจอใหญ่)
 * ถ้าแยกเขียนสองที่ วันหนึ่งจะแก้ที่เดียวแล้วสองฝั่งไม่ตรงกัน
 */
const langAirWashOptions = [
  {
    name: `ล้างมาตรฐาน ติดผนัง ${btu.washStd} BTU`,
    price: `${p.wash.std} บาท`,
    note: `ตั้งแต่ 3 เครื่องขึ้นไป เครื่องละ ${p.wash.stdBulk} บาท`,
    fit: "เครื่องที่ล้างตามรอบปีและยังไม่มีอาการผิดปกติ ล้างคอยล์เย็น คอยล์ร้อน และใบพัดกรงกระรอกด้วยแรงดันน้ำ",
  },
  {
    name: `ล้างมาตรฐาน เครื่องใหญ่ ${btu.washBig} BTU`,
    price: `${p.wash.big} บาท`,
    note: `ตั้งแต่ 2 เครื่องขึ้นไป เครื่องละ ${p.wash.bigBulk} บาท`,
    fit: "ขอบเขตงานเท่าแบบมาตรฐาน แต่ตัวเครื่องใหญ่กว่า จึงใช้เวลาและปริมาณน้ำมากกว่า พบมากในบ้านโถงสูงและร้านค้า",
  },
  {
    name: "ถอดล้างทั้งชุด Premium Full Wash",
    price: `${p.wash.premium} บาท`,
    note: p.wash.premiumNote,
    fit: "เครื่องที่มีกลิ่นอับ มีน้ำหยด หรือไม่ได้ล้างมานาน ถอดชิ้นส่วนลงมาล้างแยกทุกชิ้น รวมถึงถาดน้ำทิ้งและใบพัดที่แรงดันน้ำเข้าไม่ถึงเมื่อยังติดตั้งอยู่",
  },
];

const langAirReelIds = ["3177769309038728", "1284322489799860", "1748747562375875"];
/** คลิปงานติดตั้ง 3 ตัวจากเพจ ใช้กับหน้า /service/tid-tang-air (24 ก.ย. 2569) — หน้านี้เคยไม่มีคลิปเลย
 *  ทั้งที่คลิปติดตั้งอยู่บนหน้าแรกและ /videos ซึ่งเป็นส่วนหนึ่งที่ทำให้ Google เลือกหน้าแรกไปติดคำติดตั้งแทน */
const installReelIds = ["1288260533386347", "1261789992704152", "1269611208233633"];

/**
 * งานเครื่องซักผ้ากรองคลิปจาก topic ที่ติดไว้กับคลิปใน ReelsShowcase
 * เพื่อไม่ให้หน้าเครื่องฝาบนขึ้นคลิปเครื่องฝาหน้า ซึ่งเป็นคนละโครงสร้างและคนละราคา
 */
const reelTopicsByService: Record<string, string[]> = {
  "lang-washing-machine": ["washer", "washer-top", "washer-front"],
  "lang-washing-machine-fa-bon": ["washer-top", "washer"],
  "lang-washing-machine-fa-na": ["washer-front", "washer"],
};

/**
 * เคสก่อน–หลังที่หน้านี้ควรแสดง
 * หน้าลูกของงานเครื่องซักผ้าไม่มีเคสเป็นของตัวเอง จึงหยิบเคสของหน้าแม่
 * เฉพาะเคสที่เป็นเครื่องชนิดเดียวกัน เพื่อไม่ให้หน้าฝาบนขึ้นเคสเครื่องฝาหน้า
 */
function casesFor(slug: string) {
  const child: Record<string, "ฝาบน" | "ฝาหน้า"> = {
    "lang-washing-machine-fa-bon": "ฝาบน",
    "lang-washing-machine-fa-na": "ฝาหน้า",
  };
  const machine = child[slug];
  if (machine) {
    return caseStudies.filter((c) => c.serviceSlug === "lang-washing-machine" && c.machine === machine);
  }
  return caseStudies.filter((c) => c.serviceSlug === slug);
}

function reelsFor(slug: string) {
  if (slug === "lang-air") return reels.filter((r) => langAirReelIds.includes(r.id));
  if (slug === "tid-tang-air") return reels.filter((r) => installReelIds.includes(r.id));
  const topics = reelTopicsByService[slug];
  if (!topics) return [];
  // จำกัด 6 คลิปต่อหน้า ที่เหลือดูได้ที่ /videos
  // ถ้าปล่อยขึ้นทั้งหมด หน้าเดียวจะมีการ์ดคลิปสิบกว่าใบและภาพปกโหลดกันยาว
  return reels.filter((r) => r.topic && topics.includes(r.topic)).slice(0, 6);
}

const washerPhotoStage: Record<string, "ก่อนล้าง" | "ระหว่างถอดล้าง" | "หลังล้างสะอาด"> = {
  "/work/washer-front-deep-clean-01.webp": "หลังล้างสะอาด",
  "/work/washer-front-deep-clean-02.webp": "ระหว่างถอดล้าง",
  "/work/washer-front-deep-clean-03.webp": "ระหว่างถอดล้าง",
  "/work/washer-front-deep-clean-04.webp": "ก่อนล้าง",
  "/work/washer-front-deep-clean-05.webp": "ระหว่างถอดล้าง",
  "/work/washer-top-deep-clean-01.webp": "หลังล้างสะอาด",
  "/work/washer-top-deep-clean-02.webp": "หลังล้างสะอาด",
  "/work/washer-top-deep-clean-03.webp": "ระหว่างถอดล้าง",
  "/work/washer-top-deep-clean-04.webp": "ก่อนล้าง",
  "/work/washer-top-deep-clean-05.webp": "หลังล้างสะอาด",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  // หน้าบริการที่มีฉบับอังกฤษ (24 ก.ย. 2569) ประกาศ hreflang คู่กัน ที่เหลือมีแค่ไทย
  const enPath: Record<string, string> = { "tid-tang-air": "/en/installation", "lang-washing-machine": "/en/washing-machine" };
  const zhPath: Record<string, string> = { "tid-tang-air": "/zh/installation", "lang-washing-machine": "/zh/washing-machine" };
  const en = enPath[s.slug];
  const zh = zhPath[s.slug];
  return {
    title: s.title,
    description: s.description,
    alternates: {
      canonical: `/service/${s.slug}`,
      ...(en ? { languages: { "th-TH": `/service/${s.slug}`, "en-US": en, ...(zh ? { "zh-CN": zh } : {}), "x-default": `/service/${s.slug}` } } : {}),
    },
    ...share({ title: s.title, description: s.description, path: `/service/${s.slug}` }),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug);
  const serviceReels = reelsFor(s.slug);
  const serviceCases = casesFor(s.slug);
  // บทความที่ผูกกับบริการนี้ไว้ หน้าบริการเป็นหน้าที่แข็งที่สุดของเว็บ
  // ถ้าไม่ลิงก์ออกไป บทความจะได้ลิงก์ภายในจากหน้ารวมบทความอย่างเดียว
  const guides = articles.filter((x) => x.relatedService === s.slug).slice(0, 4);
  // บริการที่มีภาพงานของตัวเองใช้ชุดนั้น ที่เหลือหยิบจากคลังภาพงานแอร์
  const photos = servicePhotos[s.slug];
  // ภาพหลักกำหนดไว้ต่อบริการ ไม่สุ่มจาก gallery เพราะเคยได้ภาพที่ไม่ตรงหัวข้อ
  const hero = photos?.[0] ??
    heroPhotos.service[s.slug] ?? {
      src: "/work/pf-lang-premium-01.jpg",
      alt: `${s.name}เชียงใหม่ ผลงานจริงของช่างโปรเฟรชแคร์`,
    };
  const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
  const isWashingMachine = s.slug === "lang-washing-machine";
  const bookingLineUrl = isWashingMachine ? site.lineUrl2 : site.lineUrl;
  const bookingLineId = isWashingMachine ? site.lineId2 : site.lineId;
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: `${s.name}เชียงใหม่`, path: `/service/${s.slug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema(s.slug))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(s.faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(howToSchema(s))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap grid gap-10 pt-8 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
              <Icon className="h-7 w-7" />
            </span>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
              {s.h1}
            </h1>
            <p className="lead mt-5">{s.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="service-call">
                <IconPhone className="h-5 w-5" />
                โทร {site.phone}
              </a>
              <a href={bookingLineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="service-line">
                <IconLine className="h-5 w-5" />
                LINE {bookingLineId}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              {s.priceLabel} · {site.daysLabel} {site.hours}
            </p>
            {/* วันที่จริงจาก git ของไฟล์ข้อมูลบริการ ไม่ใช่วันที่ build — ให้ทั้งลูกค้าและ Google เห็นว่าราคายังดูแลอยู่ */}
            <p className="mt-1.5 text-xs text-ink-soft">
              ราคาและเงื่อนไขในหน้านี้อัปเดตล่าสุด{" "}
              <time dateTime={lastmodIso(SRC.site)}>{thaiDate(lastmodIso(SRC.site))}</time>
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            {isWashingMachine && washerPhotoStage[hero.src] && (
              <span className="absolute z-10 m-4 rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white shadow">
                {washerPhotoStage[hero.src]}
              </span>
            )}
            <Image
              src={hero.src}
              alt={hero.alt}
              width={900}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[22rem] w-full object-cover sm:h-[26rem]"
            />
          </div>
        </section>
      </div>

      {s.slug === "lang-air" && (
        <section className="section bg-brand-50/70">
          <div className="wrap max-w-4xl">
            <h2 className="h2">รับล้างแอร์ถึงบ้านโซนไหนบ้างในเชียงใหม่</h2>
            <p className="lead mt-4">
              ผมรับงานถึงบ้านในอำเภอเมืองเชียงใหม่ สันกำแพง สารภี ดอยสะเก็ด
              และ ต.สันพระเนตร อ.สันทราย เลือกพื้นที่ด้านล่างเพื่อดูรายละเอียดและโซนใกล้เคียง
              หรือส่งตำแหน่งทาง LINE เพื่อให้ผมเช็กคิวและเวลาเดินทางได้ทันที
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {areas.slice(0, 8).map((area) => (
                <Link key={area.slug} href={`/area/${area.slug}`} className="btn-ghost">
                  ช่างแอร์{area.name}
                </Link>
              ))}
            </div>
            <a
              href={site.lineUrl}
              target="_blank"
              rel="noopener"
              className="btn-line mt-7 px-6 py-3.5"
              data-cta="near-me-line"
            >
              <IconLine className="h-5 w-5" />
              ส่งตำแหน่งทาง LINE {site.lineId}
            </a>
          </div>
        </section>
      )}

      {/* หน้าแม่ล้างเครื่องซักผ้า: แยกทางไปหน้าลูกตามชนิดเครื่อง
          วางไว้ต้นหน้าเพราะสิ่งแรกที่ลูกค้ารู้คือเครื่องที่บ้านเป็นฝาบนหรือฝาหน้า
          ราคาและขอบเขตงานของสองชนิดนี้ต่างกันจริง จึงไม่ควรให้อ่านรวมกันทั้งหน้า */}
      {s.slug === "lang-washing-machine" && (
        <section className="section bg-brand-50/70">
          <div className="wrap max-w-4xl">
            <h2 className="h2">เครื่องที่บ้านคุณเป็นแบบใด</h2>
            <p className="lead mt-4">
              เครื่องฝาบนกับฝาหน้าสะสมคราบคนละจุดและถอดล้างคนละวิธี
              เลือกชนิดที่ตรงกับเครื่องของคุณเพื่อดูขั้นตอนและราคาของแบบนั้นโดยเฉพาะ
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {services
                .filter((x) => x.slug.startsWith("lang-washing-machine-"))
                .map((child) => (
                  <Link
                    key={child.slug}
                    href={`/service/${child.slug}`}
                    className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                    data-cta={`washer-child-${child.slug}`}
                  >
                    <h3 className="text-lg font-bold">{child.name}เชียงใหม่</h3>
                    <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{child.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      ดูขั้นตอนและราคา
                      <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* ตารางเทียบแบบการล้าง — เฉพาะหน้าล้างแอร์
          ตัวเลขทุกตัวดึงจาก p.wash และ btu ห้ามพิมพ์ซ้ำ (ตัวดักราคาใน scripts/check-prices.mjs จะจับได้) */}
      {s.slug === "lang-air" && (
        <section className="section">
          <div className="wrap max-w-4xl">
            <h2 className="h2">เลือกแบบการล้างให้ตรงกับเครื่องที่บ้านคุณ</h2>
            <p className="lead mt-4">
              ผมแบ่งงานล้างออกเป็นสามแบบตามขนาดเครื่องและสภาพที่พบหน้างาน
              หากคุณไม่แน่ใจว่าเครื่องของคุณควรใช้แบบใด ส่งภาพเครื่องมาทาง LINE ได้
              ผมประเมินให้ก่อนโดยไม่มีค่าใช้จ่าย
            </p>

            {/* มือถือ: แถวละการ์ด อ่านราคาได้ครบโดยไม่ต้องปัดข้าง */}
            <ul className="mt-8 space-y-4 sm:hidden">
              {langAirWashOptions.map((o) => (
                <li key={o.name} className="card p-5">
                  <h3 className="text-[15px] font-bold leading-7">{o.name}</h3>
                  <p className="mt-2 text-2xl font-extrabold text-brand-700">{o.price}</p>
                  <p className="text-xs leading-6 text-ink-soft">{o.note}</p>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">{o.fit}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 hidden overflow-x-auto sm:block">
              <table className="w-full sm:min-w-[34rem] border-collapse text-left text-[15px]">
                <caption className="sr-only">เปรียบเทียบแบบการล้างแอร์สามแบบและราคา</caption>
                <thead>
                  <tr className="border-b-2 border-brand-200 bg-brand-50/60">
                    <th scope="col" className="p-3 font-bold">แบบการล้าง</th>
                    <th scope="col" className="p-3 font-bold">ราคา</th>
                    <th scope="col" className="p-3 font-bold">เหมาะกับเครื่องแบบใด</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 align-top">
                  {langAirWashOptions.map((o) => (
                    <tr key={o.name}>
                      <th scope="row" className="p-3 font-semibold">{o.name}</th>
                      <td className="p-3 font-bold text-brand-700">
                        {o.price}
                        <span className="block text-sm font-normal text-ink-soft">{o.note}</span>
                      </td>
                      <td className="p-3 font-normal text-ink-soft">{o.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-sm leading-7 text-ink-soft">
              ราคาทั้งสามแบบเป็นราคาที่ชำระจริง ไม่มีค่าเดินทางเพิ่มในพื้นที่บริการ
              และผมแจ้งราคาก่อนเริ่มงานทุกครั้ง หากพบรายการที่ต้องทำเพิ่มหน้างาน ผมหยุดถามก่อน
            </p>
          </div>
        </section>
      )}

      {/* คลิปหน้างานของบริการนี้ — หน้าอื่นไม่มีชุดเดียวกัน จึงเป็นเนื้อหาเฉพาะของหน้านี้ */}
      {serviceReels.length > 0 && (
        <section className="section bg-sand">
          <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(videoSchema(serviceReels))} />
          <div className="wrap">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">คลิปจากหน้างาน</p>
              <h2 className="h2 mt-4">ดูขั้นตอน{s.name}จากงานจริงในเชียงใหม่</h2>
              <p className="lead mt-3">
                {s.slug === "lang-air"
                  ? "ตั้งแต่การฉีดล้างคอยล์ไปจนถึงชิ้นส่วนที่ถอดลงมาล้างแยกในแบบถอดล้างทั้งชุด"
                  : s.slug === "tid-tang-air"
                    ? "ตั้งแต่เจาะยึดขาแขวน เดินท่อในรางครอบ ไปจนถึงงานติดตั้งบนที่สูงและแอร์ฝังฝ้า"
                    : "ตั้งแต่ตอนถอดถังออกจากเครื่อง ไปจนถึงสภาพชิ้นส่วนที่ล้างเสร็จแล้ว"}
              </p>
            </div>
            <ul className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviceReels.map((reel, i) => (
                <ReelCard key={reel.id} id={reel.id} title={reel.title} eager={i === 0} />
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link href="/videos" className="btn-ghost" data-cta={`${s.slug}-videos`}>
                ดูคลิปงานอื่นทั้งหมด
                <IconChevron className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* สิ่งที่ได้รับ */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">ขอบเขตงานที่ครอบคลุม</h2>
            <div className="mt-6">
              <CheckList items={s.bullets} />
            </div>
          </div>

          <div className="card bg-sand p-6 sm:p-8">
            <h2 className="text-xl font-bold">ราคา{s.name}เชียงใหม่</h2>
            <p className="mt-2 text-sm text-ink-soft">
              ราคานี้คือราคาที่ชำระจริง ไม่มีค่าเดินทางเพิ่มในเขตพื้นที่ให้บริการ
            </p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-brand-700">
                {s.priceFrom.toLocaleString("th-TH")}
              </span>
              <span className="text-base text-ink-soft">บาท เริ่มต้น</span>
            </p>
            <Link href="/price" className="btn-ghost mt-6 w-full" data-cta="service-price">
              ดูตารางราคาละเอียดทุกรายการ
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {s.slug === "tid-tang-air" && (
        <section className="section bg-sand">
          <div className="wrap max-w-4xl">
            <h2 className="h2">ราคาติดตั้งแอร์เชียงใหม่ตามขนาดเครื่อง</h2>
            <p className="lead mt-3">
              รับติดตั้งทั้งเครื่องที่ซื้อกับผม และเครื่องใหม่ที่คุณซื้อจาก Shopee, Lazada
              หรือร้านอื่น โดยสำรวจตำแหน่งและแจ้งค่าอุปกรณ์ส่วนเกินก่อนเริ่มงาน
            </p>
            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-2 border-b border-slate-200 bg-brand-50 px-5 py-4 font-bold">
                <span>ขนาดเครื่อง</span><span>ค่าติดตั้งเริ่มต้น</span>
              </div>
              <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
                <span>{btu.installSmall} BTU</span><strong>{p.install.small} บาท</strong>
              </div>
              <div className="grid grid-cols-2 px-5 py-4">
                <span>{btu.installLarge} BTU</span><strong>{p.install.large} บาท</strong>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              ทุกงานมีการแวคคั่มระบบ ทดสอบความเย็น ตรวจรอยรั่ว และรับประกันงานติดตั้ง
              6 เดือนสำหรับเครื่องที่ลูกค้ามีเอง หรือ 1 ปีเมื่อซื้อเครื่องกับผม
            </p>

            {/* สามทางเข้าของงานติดตั้ง หน้านี้เป็นหน้าแม่ของกลุ่มคำติดตั้ง จึงต้องเป็นจุดแยกทางเอง
                ไม่ปล่อยให้หน้าแรกเป็นคนแยกทาง (เหตุผลดูที่ installReelIds ด้านบน) */}
            <h3 className="mt-8 text-lg font-bold">งานติดตั้งของคุณเป็นแบบไหน</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <Link href="/customer/sue-air-online" className="card group flex flex-col p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift" data-cta="install-online">
                <span className="font-bold group-hover:text-brand-700">ซื้อเครื่องจาก Shopee Lazada TikTok มาเอง</span>
                <span className="mt-2 flex-1 text-sm leading-7 text-ink-soft">แจ้งรุ่นและวันของถึง ผมจองคิวให้ตรงวัน ค่าติดตั้งอัตราเดียวกัน</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">ดูเงื่อนไข<IconChevron className="h-4 w-4" /></span>
              </Link>
              <Link href="/customer/ban-mai" className="card group flex flex-col p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift" data-cta="install-ban-mai">
                <span className="font-bold group-hover:text-brand-700">บ้านใหม่ ติดหลายห้องพร้อมกัน</span>
                <span className="mt-2 flex-1 text-sm leading-7 text-ink-soft">สำรวจทั้งหลังในนัดเดียว วางแนวท่อและตำแหน่งคอยล์ร้อนก่อนย้ายเข้า</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">ดูรายละเอียด<IconChevron className="h-4 w-4" /></span>
              </Link>
              <Link href="/service/khai-air" className="card group flex flex-col p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift" data-cta="install-khai-air">
                <span className="font-bold group-hover:text-brand-700">ยังไม่มีเครื่อง ซื้อพร้อมติดตั้ง</span>
                <span className="mt-2 flex-1 text-sm leading-7 text-ink-soft">เครื่องใหม่และมือสองสภาพดี รับเทิร์นเครื่องเก่า ประกันงานติดตั้ง 1 ปี</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">ดูตัวเลือก<IconChevron className="h-4 w-4" /></span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {s.slug === "som-air" && (
        <section className="section bg-sand">
          <div className="wrap">
            <h2 className="h2">คู่มือซ่อมแอร์อินเวอร์เตอร์และ Error Code แยกยี่ห้อ</h2>
            <p className="lead mt-3 max-w-3xl">
              เลือกประเภทเครื่องหรือยี่ห้อเพื่อดูข้อมูลที่ควรเตรียมก่อนเรียกช่าง การส่งรหัสพร้อมรุ่นเต็มช่วยให้ผมเตรียมอะไหล่มาตรงรุ่นและตรวจได้เร็วขึ้น
              ถ้าแอร์เสียแบบรอไม่ได้ ดูเงื่อนไขการเข้าหน้างานเร่งด่วนและนอกเวลาทำการได้ที่
              <Link href="/duan" className="ml-1 font-semibold text-brand-700 hover:underline">
                หน้าเรียกช่างด่วน
              </Link>
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repairGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/repair/${guide.slug}`} className="card group flex h-full items-center justify-between gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift">
                    <span className="font-semibold leading-7">{guide.brand ? `Error Code ${guide.brand}` : "ซ่อมแอร์อินเวอร์เตอร์เชียงใหม่"}</span>
                    <IconChevron className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {s.slug === "lang-washing-machine" && (
        <section className="section bg-sand">
          <div className="wrap max-w-4xl">
            <h2 className="h2">ราคาช่างล้างเครื่องซักผ้าถึงบ้าน</h2>
            <p className="lead mt-3">
              เป็นการถอดถังและชิ้นส่วนออกมาล้าง ไม่ใช่การใส่น้ำยาลงเครื่องแล้วปั่น
              ใช้เวลาประมาณ 3 ชั่วโมงต่อเครื่อง และรับประกันงาน 30 วัน
            </p>
            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-2 border-b border-slate-200 bg-brand-50 px-5 py-4 font-bold">
                <span>ประเภทและความจุ</span><span>ราคาเริ่มต้น</span>
              </div>
              <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
                <span>ฝาบน ไม่เกิน 15 กก.</span><strong>999 บาท</strong>
              </div>
              <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
                <span>ฝาบน 15.1–19 กก.</span><strong>1,200 บาท</strong>
              </div>
              <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
                <span>ฝาบน มากกว่า 19 กก.</span><strong>{p.washer.topLoadBig} บาท</strong>
              </div>
              <div className="grid grid-cols-2 px-5 py-4">
                <span>เครื่องฝาหน้า</span><strong>เริ่ม 1,299 บาท</strong>
              </div>
            </div>
            <a href={site.lineUrl2} target="_blank" rel="noopener" className="btn-line mt-7 px-6 py-3.5" data-cta="washer-price-line">
              <IconLine className="h-5 w-5" />
              ส่งรูปเครื่องทาง LINE {site.lineId2}
            </a>
          </div>
        </section>
      )}

      {/* ขั้นตอน */}
      <section className="section bg-sand">
        <div className="wrap max-w-3xl">
          <h2 className="h2">ขั้นตอนการทำงาน</h2>
          <p className="lead mt-3">
            ขั้นตอนการทำงานที่ผมใช้กับทุกงาน
          </p>
          <div className="mt-9">
            <Steps steps={s.steps} />
          </div>
        </div>
      </section>

      {/* รายงานงานจริงจากโพสต์เพจ (24 ก.ย. 2569) ทุกบริการที่มีเคสวันจริง เรียงวันที่ใหม่สุดก่อน
          แต่ละเคส = หนึ่งโพสต์ = เครื่องเดียวกันตลอด มีวันที่และพื้นที่จริงจากโพสต์ */}
      {(() => {
        const base = s.slug.startsWith("lang-washing-machine") ? "lang-washing-machine" : s.slug;
        const jobs = workCases.filter((c) => c.serviceSlug === base && c.date).sort((a, b) => b.date!.localeCompare(a.date!)).slice(0, 6);
        return jobs.length > 0 ? (
          <section className="section bg-sand">
            <div className="wrap">
              <p className="eyebrow">งานล่าสุดจากหน้างานจริง</p>
              <h2 className="h2 mt-4">รายงานงาน{s.name}ทีละเครื่อง พร้อมวันที่และพื้นที่</h2>
              <p className="lead mt-3 max-w-2xl">ทุกเคสเป็นเครื่องเดียวกันตั้งแต่รูปแรกจนรูปสุดท้าย มีภาพก่อนทำและหลังทำเทียบชิ้นต่อชิ้น ผมเขียนเฉพาะสิ่งที่เห็นในรูป ไม่เติมอาการที่ไม่มีบันทึก</p>
              <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/case-study/${c.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
                      <Image src={c.images[1]?.src ?? c.images[0].src} alt={c.images[1]?.alt ?? c.images[0].alt} width={720} height={540} loading="lazy" sizes="(max-width: 640px) 100vw, 33vw" className="aspect-[4/3] w-full object-cover" />
                      <div className="flex flex-1 flex-col p-5">
                        <span className="text-xs font-bold text-brand-600">{c.recorded} · {c.area}</span>
                        <h3 className="mt-2 font-bold leading-7 group-hover:text-brand-700">{c.title}</h3>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">อ่านรายงาน<IconChevron className="h-4 w-4" /></span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/case-study" className="btn-ghost">ดูรีวิวงานจริงทั้งหมด<IconChevron className="h-4 w-4" /></Link>
              </div>
            </div>
          </section>
        ) : null;
      })()}

      {/* เทียบก่อน-หลัง เฉพาะบริการที่มีชุดภาพจับคู่ยืนยันแล้ว */}
      {serviceCases.length > 0 && (
        <CaseStudies
          items={serviceCases}
          title={`งาน${s.name}ที่ผมทำมา`}
          lead="สภาพเครื่องตอนผมถอดออกมา และสภาพหลังประกอบกลับ"
        />
      )}

      {/* ภาพงานจริงเฉพาะบริการนี้ */}
      {photos && photos.length > 1 && (
        <section className="section">
          <div className="wrap">
            <h2 className="h2">ภาพงาน{s.name}</h2>
            <p className="lead mt-3 max-w-2xl">
              คราบที่เกาะอยู่ในเครื่องส่วนใหญ่อยู่ในจุดที่มองไม่เห็นจนกว่าจะถอดชิ้นส่วนออกมา
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {photos.slice(1).map((g) => {
                const stage = isWashingMachine ? washerPhotoStage[g.src] : undefined;
                const stageColor = stage === "หลังล้างสะอาด"
                  ? "bg-emerald-700"
                  : stage === "ก่อนล้าง"
                    ? "bg-amber-700"
                    : "bg-brand-700";

                return (
                <figure key={g.src} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                  {stage && (
                    <span className={`absolute z-10 m-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow ${stageColor}`}>
                      {stage}
                    </span>
                  )}
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={768}
                    height={1024}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-72 w-full object-cover"
                  />
                </figure>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* พื้นที่ */}
      <section className="section">
        <div className="wrap">
          <h2 className="h2">
            <IconPin className="mr-2 inline h-6 w-6 text-brand-500" />
            พื้นที่ที่รับงาน{s.name}
          </h2>
          <p className="lead mt-3 max-w-2xl">
            ผมรับงาน{s.name}ทั่วเชียงใหม่ เลือกพื้นที่ของคุณเพื่อดูรายละเอียดและระยะเวลาเข้าหน้างาน
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/area/${a.slug}`}
                  className="card group flex h-full items-center gap-3 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <IconPin className="h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm font-semibold group-hover:text-brand-700">
                    {s.name}{a.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="section bg-sand">
          <div className="wrap">
            <h2 className="h2">อ่านเพิ่มเติมก่อนตัดสินใจเรื่อง{s.name}</h2>
            <p className="lead mt-3 max-w-2xl">
              อาการหลายอย่างตรวจเองได้ก่อนเรียกช่าง อ่านวิธีตรวจเบื้องต้นได้ครับ
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/blog/${g.slug}`}
                  className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="text-xs font-semibold text-brand-600">{g.category}</span>
                  <h3 className="mt-2 font-bold leading-8 group-hover:text-brand-700">{g.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{g.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    อ่านบทความ
                    <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqList items={s.faqs} title={`คำถามที่พบบ่อยเรื่อง${s.name}`} />

      {/* บริการอื่น */}
      <section className="section">
        <div className="wrap">
          <h2 className="h2">บริการอื่นที่เกี่ยวข้อง</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => {
              const OIcon = serviceIcons[o.icon as keyof typeof serviceIcons];
              return (
                <Link
                  key={o.slug}
                  href={`/service/${o.slug}`}
                  className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/70 transition-all group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white group-hover:ring-brand-700">
                    <OIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold">{o.name}เชียงใหม่</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{o.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    อ่านต่อ
                    <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title={`ต้องการช่าง${s.name}ในเชียงใหม่?`}
        subtitle="แจ้งอาการหรือจำนวนเครื่องเข้ามา ผมประเมินราคาให้ทันทีโดยไม่คิดค่าใช้จ่าย"
        lineUrl={bookingLineUrl}
        lineId={bookingLineId}
      />
    </>
  );
}
