import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, services, areas, heroPhotos, servicePhotos, caseStudies, p, btu } from "@/lib/site";
import { articles } from "@/content/articles";
import { repairGuides } from "@/lib/repair-guides";
import { serviceSchema, faqSchema, breadcrumbSchema, howToSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { serviceIcons, IconPhone, IconLine, IconChevron, IconPin } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs, CheckList, Steps, CaseStudies } from "@/components/Blocks";

type Props = { params: Promise<{ slug: string }> };

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
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/service/${s.slug}` },
    ...share({ title: s.title, description: s.description, path: `/service/${s.slug}` }),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug);
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

      {/* เทียบก่อน-หลัง เฉพาะบริการที่มีชุดภาพจับคู่ยืนยันแล้ว */}
      {caseStudies.some((c) => c.serviceSlug === s.slug) && (
        <CaseStudies
          items={caseStudies.filter((c) => c.serviceSlug === s.slug)}
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
