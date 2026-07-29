import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, services } from "@/lib/site";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
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
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.description,
      url: `${site.url}/blog/${a.slug}`,
      type: "article",
      publishedTime: a.updated,
      modifiedTime: a.updated,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = relatedArticles(a);
  const svc = a.relatedService ? services.find((s) => s.slug === a.relatedService) : undefined;
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
          author: { "@type": "Organization", name: site.name, "@id": `${site.url}/#business` },
          publisher: { "@id": `${site.url}/#business` },
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <header className="wrap max-w-3xl pt-8 pb-12">
          <p className="eyebrow">{a.category}</p>
          <h1 className="mt-5 text-[1.8rem] leading-[1.35] font-extrabold sm:text-[2.3rem]">{a.h1}</h1>
          <p className="lead mt-5">{a.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <IconEngineer className="h-4 w-4 text-brand-600" />
              เขียนโดย {site.leadTech} · {site.shortName}
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

      <article className="wrap max-w-3xl py-8">
        <ArticleBody blocks={a.blocks} />
      </article>

      {/* ดันไปหน้าบริการที่เกี่ยวข้อง */}
      {svc && (
        <section className="wrap max-w-3xl pb-8">
          <Link
            href={`/service/${svc.slug}`}
            className="card group flex flex-col gap-4 p-6 transition-all hover:shadow-lift sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-brand-700">บริการที่เกี่ยวข้อง</p>
              <p className="mt-1 text-lg font-bold group-hover:text-brand-700">{svc.h1}</p>
              <p className="mt-1 text-sm text-ink-soft">{svc.short}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-brand-700">
              {svc.priceLabel}
              <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </section>
      )}

      <FaqList items={a.faqs} title="คำถามที่พบบ่อยจากบทความนี้" />

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
      />
    </>
  );
}
