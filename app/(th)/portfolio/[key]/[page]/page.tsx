import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, portfolio } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";
import { PhotoGrid } from "../PhotoGrid";
import { PER_PAGE, pageCount, pageSlice } from "../paging";

/** หน้าย่อยที่ 2 เป็นต้นไปของหมวดที่มีรูปเกิน PER_PAGE — หน้าแรกอยู่ที่ /portfolio/[key] */
export function generateStaticParams() {
  return portfolio.flatMap((c) =>
    Array.from({ length: pageCount(c.photos.length) - 1 }, (_, i) => ({
      key: c.key,
      page: String(i + 2),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string; page: string }>;
}): Promise<Metadata> {
  const { key, page } = await params;
  const c = portfolio.find((x) => x.key === key);
  const n = Number(page);
  if (!c || !Number.isInteger(n)) return {};
  const title = `${c.label} เชียงใหม่ ภาพผลงานจริง หน้า ${n}`;
  const description = `ภาพหน้างานจริงหมวด${c.label} หน้า ${n} จากทั้งหมด ${pageCount(c.photos.length)} หน้า โดยช่างอาร์ม โปรเฟรชแคร์ โทร ${site.phone}`;
  return {
    title,
    description,
    alternates: { canonical: `/portfolio/${c.key}/${n}` },
    // หน้าย่อยไม่ต้องแข่งอันดับกับหน้าแรกของหมวด แต่ยังให้ Google ตามลิงก์ต่อได้
    robots: { index: false, follow: true },
  };
}

export default async function PortfolioCategoryPagedPage({
  params,
}: {
  params: Promise<{ key: string; page: string }>;
}) {
  const { key, page } = await params;
  const c = portfolio.find((x) => x.key === key);
  const n = Number(page);
  if (!c || !Number.isInteger(n) || n < 2 || n > pageCount(c.photos.length)) notFound();

  const photos = pageSlice(c.photos, n);
  const pages = pageCount(c.photos.length);
  const isWasherCategory = c.key === "wm-top" || c.key === "wm-front";
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "ผลงานที่ผมทำ", path: "/portfolio" },
    { name: c.label, path: `/portfolio/${c.key}` },
    { name: `หน้า ${n}`, path: `/portfolio/${c.key}/${n}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-12 text-center">
          <p className="eyebrow">ภาพจากหน้างานจริง</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            {c.label} หน้า {n}
          </h1>
          <p className="lead mt-5">
            ภาพที่ {(n - 1) * PER_PAGE + 1} ถึง {Math.min(n * PER_PAGE, c.photos.length)} จากทั้งหมด{" "}
            {c.photos.length} ภาพในหมวดนี้
          </p>
        </section>
      </div>

      <section className="section pt-4">
        <div className="wrap">
          <PhotoGrid photos={photos} />

          <nav aria-label="หน้าของหมวดนี้" className="mt-9 flex flex-wrap items-center gap-2">
            {Array.from({ length: pages }, (_, i) => i + 1).map((p) =>
              p === n ? (
                <span key={p} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white">
                  {p}
                </span>
              ) : (
                <Link
                  key={p}
                  href={p === 1 ? `/portfolio/${c.key}` : `/portfolio/${c.key}/${p}`}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  {p}
                </Link>
              ),
            )}
          </nav>
        </div>
      </section>

      <CtaBand
        title="ต้องการให้เครื่องที่บ้านของคุณอยู่ในสภาพนี้"
        subtitle="ติดต่อจองคิวเข้ามาได้ครับ แจ้งรุ่นเครื่องและพื้นที่ ผมประเมินราคาให้ก่อนนัด"
        lineUrl={isWasherCategory ? site.lineUrl2 : site.lineUrl}
        lineId={isWasherCategory ? site.lineId2 : site.lineId}
      />
    </>
  );
}
