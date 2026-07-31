import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, services, areas, heroPhotos, servicePhotos, caseStudies } from "@/lib/site";
import { articles } from "@/content/articles";
import { serviceSchema, faqSchema, breadcrumbSchema, howToSchema, jsonLd } from "@/lib/schema";
import { serviceIcons, IconPhone, IconLine, IconChevron, IconPin } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs, CheckList, Steps, CaseStudies } from "@/components/Blocks";

type Props = { params: Promise<{ slug: string }> };

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
    openGraph: {
      title: s.title,
      description: s.description,
      url: `${site.url}/service/${s.slug}`,
      type: "article",
    },
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
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="service-line">
                <IconLine className="h-5 w-5" />
                สอบถามทาง LINE
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              {s.priceLabel} · {site.daysLabel} {site.hours}
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
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
            <Link href="/price" className="btn-ghost mt-6 w-full">
              ดูตารางราคาละเอียดทุกรายการ
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ขั้นตอน */}
      <section className="section bg-sand">
        <div className="wrap max-w-3xl">
          <h2 className="h2">ขั้นตอนการทำงาน</h2>
          <p className="lead mt-3">
            ผมทำตามขั้นตอนเดียวกันในทุกงาน รวมถึงขั้นตอนที่ลูกค้าตรวจสอบได้ยาก เพื่อให้ผลงานคงมาตรฐานเดิมทุกครั้ง
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
            <h2 className="h2">ภาพงาน{s.name}จริง</h2>
            <p className="lead mt-3 max-w-2xl">
              คราบที่เกาะอยู่ในเครื่องส่วนใหญ่อยู่ในจุดที่มองไม่เห็นจนกว่าจะถอดชิ้นส่วนออกมา
              นี่คือลักษณะที่ผมพบบ่อยที่สุดหน้างาน
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {photos.slice(1).map((g) => (
                <div key={g.src} className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={768}
                    height={1024}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-72 w-full object-cover"
                  />
                </div>
              ))}
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
              บทความที่ผมเขียนอธิบายสาเหตุและวิธีตรวจเบื้องต้นด้วยตัวเอง อ่านก่อนเรียกช่างได้ครับ
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
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
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
      />
    </>
  );
}
