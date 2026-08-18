import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, portfolio, portfolioTotal, caseStudies, reviews, thumbOf } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs, ReviewCard, CaseStudies } from "@/components/Blocks";

const title = "ผลงานช่างแอร์เชียงใหม่ ภาพหน้างานจริง";
const description =
  "รวมภาพผลงานจริงของช่างแอร์เชียงใหม่ โปรเฟรชแคร์ แยกหมวดครบทุกประเภทงาน ทั้งล้างแอร์แบบถอดล้าง ติดตั้ง ย้ายแอร์ แอร์แขวน แอร์ฝังฝ้า และล้างเครื่องซักผ้า";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  ...share({ title, description, path: "/portfolio", image: portfolio[0].photos[0] }),
};

/** จำนวนภาพตัวอย่างต่อหมวดบนหน้ารวม */
const PREVIEW = 8;

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ผลงานที่ผมทำ", path: "/portfolio" },
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
          image: portfolio.flatMap((c) => c.photos.slice(0, PREVIEW)).map((g) => `${site.url}${g.src}`),
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
          <Link
            href="/case-study"
            className="mt-7 inline-flex rounded-xl bg-brand-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-800"
          >
            อ่านรายงานงานจริงแบบก่อน–ระหว่าง–หลัง
          </Link>
        </section>
      </div>

      {/* สารบัญหมวดงาน — กดแล้วเลื่อนไปที่หมวดนั้น */}
      <section className="section pt-4 pb-0">
        <div className="wrap">
          <nav aria-label="หมวดผลงาน" className="flex flex-wrap gap-2.5">
            {portfolio.map((c) => (
              <Link
                key={c.key}
                href={`/portfolio/${c.key}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                {c.label}
                <span className="ml-1.5 text-xs text-ink-soft">{c.photos.length}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* หน้ารวมโชว์ตัวอย่างหมวดละ 8 ภาพ ที่เหลืออยู่ในหน้าของหมวดนั้น */}
      {portfolio.map((c, ci) => (
        <section key={c.key} id={c.key} className={`section scroll-mt-24 ${ci % 2 ? "bg-sand" : ""}`}>
          <div className="wrap">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="h2">{c.label}</h2>
              <p className="text-sm text-ink-soft">{c.photos.length} ภาพ</p>
            </div>
            <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {c.photos.slice(0, PREVIEW).map((g, i) => (
                <li key={g.src} className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
                  <Image
                    // ภาพย่อ 480×480 ที่สร้างไว้ล่วงหน้า ดูเหตุผลใน thumbOf ที่ lib/site.ts
                    src={thumbOf(g.src)}
                    alt={g.alt}
                    width={480}
                    height={480}
                    priority={ci === 0 && i < 4}
                    loading={ci === 0 && i < 4 ? undefined : "lazy"}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </li>
              ))}
            </ul>
            {c.photos.length > PREVIEW && (
              <Link
                href={`/portfolio/${c.key}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
              >
                ดู{c.label}ทั้งหมด {c.photos.length} ภาพ
                <IconChevron className="h-4 w-4" />
              </Link>
            )}
          </div>
        </section>
      ))}

      <CaseStudies
        items={caseStudies}
        title="สภาพเครื่องตอนผมไปถึง กับตอนทำเสร็จ"
        lead="คราบผงซักฟอกและตะกรันเกาะอยู่ด้านนอกถัง ซึ่งเป็นบริเวณที่มองไม่เห็นขณะเครื่องประกอบอยู่"
      />

      <section className="section">
        <div className="wrap">
          <h2 className="h2 text-center">ความเห็นจากลูกค้า</h2>
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
