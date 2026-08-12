import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, services } from "@/lib/site";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { faqSchema, breadcrumbSchema, jsonLd, PERSON_ID } from "@/lib/schema";
import { share } from "@/lib/seo";
import ArticleBody, { TableOfContents } from "@/components/ArticleBody";
import { IconClock, IconChevron, IconEngineer } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/Blocks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    // หัวข้อบทความยาวและบรรยายครบในตัวอยู่แล้ว ถ้าต่อท้ายแบรนด์อีก 14 ตัวอักษร
    // Google จะตัดหางทิ้งจนใจความหาย absolute จึงบอกไม่ให้ใช้ template
    title: { absolute: a.title },
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `/blog/${a.slug}` },
    ...share({
      title: a.title,
      description: a.description,
      path: `/blog/${a.slug}`,
      publishedTime: a.updated,
      modifiedTime: a.updated,
      // บทความที่มีภาพนำของตัวเองให้ใช้ภาพนั้น ที่เหลือใช้การ์ดกลาง
      image: a.image,
    }),
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = relatedArticles(a);
  const svc = a.relatedService ? services.find((s) => s.slug === a.relatedService) : undefined;
  const isWashingMachine = a.relatedService === "lang-washing-machine";
  const bookingLineUrl = isWashingMachine ? site.lineUrl2 : site.lineUrl;
  const bookingLineId = isWashingMachine ? site.lineId2 : site.lineId;
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "คลังความรู้", path: "/blog" },
    { name: a.h1, path: `/blog/${a.slug}` },
  ];
  const thaiDate = new Date(a.updated).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(a.faqs))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title,
          description: a.description,
          url: `${site.url}/blog/${a.slug}`,
          mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${a.slug}` },
          datePublished: a.updated,
          dateModified: a.updated,
          inLanguage: "th-TH",
          keywords: a.keywords.join(", "),
          articleSection: a.category,
          ...(a.image ? { image: `${site.url}${a.image.src}` } : {}),
          author: { "@id": PERSON_ID },
          publisher: { "@id": `${site.url}/#business` },
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <header className="wrap max-w-3xl pt-8 pb-12">
          <p className="eyebrow">{a.category}</p>
          <h1 className="mt-5 text-[1.8rem] leading-[1.35] font-extrabold sm:text-[2.3rem]">{a.h1}</h1>
          <p className="lead mt-5">{a.excerpt}</p>
          {a.image && (
            <figure className="mt-7 overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <Image
                src={a.image.src}
                alt={a.image.alt}
                width={1200}
                height={800}
                priority
                sizes="(max-width: 768px) 100vw, 720px"
                className="aspect-[3/2] w-full bg-slate-100 object-cover"
              />
              <figcaption className="bg-white px-4 py-2.5 text-xs leading-5 text-ink-soft">
                {a.image.alt}
              </figcaption>
            </figure>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <IconEngineer className="h-4 w-4 text-brand-600" />
              เขียนโดย {site.leadTech} · {site.name}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconClock className="h-4 w-4 text-brand-600" />
              อ่าน {a.readMins} นาที
            </span>
            <time dateTime={a.updated}>อัปเดต {thaiDate}</time>
          </div>
        </header>
      </div>

      <div className="wrap max-w-3xl pb-4">
        <TableOfContents blocks={a.blocks} />
      </div>

      {/* วาง intent box ก่อนเนื้อหายาว เพื่อให้หน้าความรู้ปิดงานได้โดยไม่สร้าง URL ซ้ำมาแย่งคีย์เวิร์ดกัน */}
      {svc && (
        <section className="wrap max-w-3xl pt-5">
          <div className="card flex flex-col gap-5 border-brand-200 bg-brand-50/70 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-700">ต้องการให้ช่างตรวจอาการนี้?</p>
              <p className="mt-1 text-lg font-bold">{svc.h1}</p>
              <p className="mt-1 text-sm text-ink-soft">{svc.short}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2">
              <Link href={`/service/${svc.slug}`} className="btn-ghost">
                {svc.priceLabel}
                <IconChevron className="h-4 w-4" />
              </Link>
              <a href={bookingLineUrl} target="_blank" rel="noopener" className="btn-line" data-cta="article-intent-line">
                LINE {bookingLineId}
              </a>
            </div>
          </div>
        </section>
      )}

      <article className="wrap max-w-3xl py-8">
        <ArticleBody blocks={a.blocks} lineUrl={bookingLineUrl} lineId={bookingLineId} />
      </article>

      <FaqList items={a.faqs} title="คำถามที่พบบ่อย" />

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2 className="h2">บทความที่เกี่ยวข้อง</h2>
            <ul className="mt-7 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span className="text-xs font-bold text-brand-600">{r.category}</span>
                    <h3 className="mt-2 font-bold group-hover:text-brand-700">{r.h1}</h3>
                    <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{r.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/blog" className="btn-ghost">
                ดูบทความทั้งหมด
                <IconChevron className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="มีคำถามที่บทความยังไม่ตอบ?"
        subtitle="สอบถามเข้ามาได้โดยตรง ผมตอบให้โดยไม่คิดค่าใช้จ่าย และหากยังไม่จำเป็นต้องเรียกช่าง ผมจะแจ้งตามจริง"
        lineUrl={bookingLineUrl}
        lineId={bookingLineId}
      />
    </>
  );
}
