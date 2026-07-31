import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, portfolio } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";
import { PER_PAGE, pageCount, pageSlice } from "./paging";

/**
 * หน้าผลงานรายหมวด — แยกออกมาจากหน้ารวม เพราะรูปทั้งหมดมีกว่าพันภาพ
 * หมวดที่มีรูปเกิน PER_PAGE จะแบ่งเป็นหน้าย่อยที่ /portfolio/[key]/[page]
 * ไม่งั้น HTML หน้าเดียวจะหนักเกิน 1 MB และ Google เก็บ index ได้ไม่ทั่วถึง
 */
export function generateStaticParams() {
  return portfolio.map((c) => ({ key: c.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  const c = portfolio.find((x) => x.key === key);
  if (!c) return {};
  const title = `${c.label} เชียงใหม่ ภาพผลงานจริง ${c.photos.length} ภาพ`;
  const description = `ภาพหน้างานจริงหมวด${c.label} โดยช่างอาร์ม โปรเฟรชแคร์ ${c.photos.length} ภาพ จากงานที่ผมลงมือทำเอง โทร ${site.phone}`;
  return {
    title,
    description,
    alternates: { canonical: `/portfolio/${c.key}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/portfolio/${c.key}`,
      type: "article",
      images: [{ url: c.photos[0].src }],
    },
  };
}

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const c = portfolio.find((x) => x.key === key);
  if (!c) notFound();

  const photos = pageSlice(c.photos, 1);
  const pages = pageCount(c.photos.length);
  const others = portfolio.filter((x) => x.key !== key);
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "ผลงานที่ผมทำ", path: "/portfolio" },
    { name: c.label, path: `/portfolio/${c.key}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: `${c.label} เชียงใหม่ ภาพผลงานจริง`,
          url: `${site.url}/portfolio/${c.key}`,
          image: photos.map((g) => `${site.url}${g.src}`),
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-12 text-center">
          <p className="eyebrow">ภาพจากหน้างานจริง</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            {c.label}
          </h1>
          <p className="lead mt-5">
            ภาพหน้างานจริงหมวดนี้ {c.photos.length} ภาพ ทุกภาพมาจากงานที่ผมลงมือทำเอง
            {pages > 1 && ` แบ่งแสดงหน้าละ ${PER_PAGE} ภาพ`}
          </p>
        </section>
      </div>

      <section className="section pt-4">
        <div className="wrap">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((g, i) => (
              <li key={g.src} className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={800}
                  priority={i < 4}
                  loading={i < 4 ? undefined : "lazy"}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>

          {pages > 1 && (
            <nav aria-label="หน้าของหมวดนี้" className="mt-9 flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white">1</span>
              {Array.from({ length: pages - 1 }, (_, i) => i + 2).map((n) => (
                <Link
                  key={n}
                  href={`/portfolio/${c.key}/${n}`}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  {n}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="h2">หมวดงานอื่นของผม</h2>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.key}>
                <Link
                  href={`/portfolio/${o.key}`}
                  className="card flex items-center justify-between gap-3 px-5 py-4 transition-all hover:shadow-lift"
                >
                  <span className="font-semibold">{o.label}</span>
                  <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-brand-700">
                    {o.photos.length} ภาพ
                    <IconChevron className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="ต้องการให้เครื่องที่บ้านของคุณอยู่ในสภาพนี้"
        subtitle="ติดต่อจองคิวเข้ามาได้ครับ ผมแจ้งราคาให้ครบถ้วนก่อนเริ่มงานเสมอ"
      />
    </>
  );
}
