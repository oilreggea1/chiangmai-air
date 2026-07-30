import type { Metadata } from "next";
import Image from "next/image";
import { site, gallery, portfolio, portfolioTotal, caseStudies, reviews } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { CtaBand, Breadcrumbs, ReviewCard, CaseStudies } from "@/components/Blocks";

const title = "ผลงานช่างแอร์เชียงใหม่ แยกหมวดงาน ภาพหน้างานจริง";
const description =
  "รวมภาพผลงานจริงของช่างแอร์เชียงใหม่ โปรเฟรชแคร์ แยกหมวดครบทุกประเภทงาน ทั้งล้างแอร์แบบถอดล้าง ติดตั้ง ย้ายแอร์ แอร์แขวน แอร์ฝังฝ้า และล้างถังเครื่องซักผ้า";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title,
    description,
    url: `${site.url}/portfolio`,
    type: "article",
    images: [{ url: gallery[0].src }],
  },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ผลงานของเรา", path: "/portfolio" },
];

export default function Portfolio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: title,
          description,
          url: `${site.url}/portfolio`,
          image: portfolio.flatMap((c) => c.photos).map((g) => `${site.url}${g.src}`),
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <p className="eyebrow">ภาพจากหน้างานจริง</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ภาพผลงานจริง แยกตามประเภทงาน
          </h1>
          <p className="lead mt-5">
            งานล้างแอร์ ติดตั้ง ย้ายแอร์ แอร์แขวน แอร์ฝังฝ้า และล้างถังเครื่องซักผ้า รวม {portfolioTotal} ภาพ
            เลือกหมวดที่ตรงกับเครื่องที่บ้านคุณได้จากด้านล่าง
          </p>
        </section>
      </div>

      {/* สารบัญหมวดงาน — กดแล้วเลื่อนไปที่หมวดนั้น */}
      <section className="section pt-4 pb-0">
        <div className="wrap">
          <nav aria-label="หมวดผลงาน" className="flex flex-wrap gap-2.5">
            {portfolio.map((c) => (
              <a
                key={c.key}
                href={`#${c.key}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                {c.label}
                <span className="ml-1.5 text-xs text-ink-soft/70">{c.photos.length}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {portfolio.map((c, ci) => (
        <section key={c.key} id={c.key} className={`section scroll-mt-24 ${ci % 2 ? "bg-sand" : ""}`}>
          <div className="wrap">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="h2">{c.label}</h2>
              <p className="text-sm text-ink-soft">{c.photos.length} ภาพ</p>
            </div>
            <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {c.photos.map((g, i) => (
                <li key={g.src} className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={800}
                    height={800}
                    priority={ci === 0 && i < 4}
                    loading={ci === 0 && i < 4 ? undefined : "lazy"}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CaseStudies
        items={caseStudies}
        title="สภาพเครื่องตอนผมไปถึง กับตอนทำเสร็จ"
        lead="คราบผงซักฟอกและตะกรันเกาะอยู่ด้านนอกถัง ซึ่งเป็นบริเวณที่มองไม่เห็นขณะเครื่องประกอบอยู่ ผมถ่ายเก็บไว้ทั้งตอนถอดออกมาและตอนประกอบกลับ"
      />

      <section className="section">
        <div className="wrap">
          <h2 className="h2 text-center">เสียงจากลูกค้าที่ใช้บริการจริง</h2>
          <div className="mx-auto mt-9 grid max-w-4xl gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="ต้องการให้เครื่องที่บ้านของคุณอยู่ในสภาพนี้"
        subtitle="ติดต่อจองคิวเข้ามาได้ครับ ผมแจ้งราคาให้ครบถ้วนก่อนเริ่มงานเสมอ"
      />
    </>
  );
}
