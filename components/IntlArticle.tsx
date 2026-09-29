import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import type { IntlArticle } from "@/lib/content-types";
import { intlArticles, type IntlLang } from "@/content/articles-intl";
import { faqSchema, breadcrumbSchema, jsonLd, PERSON_ID } from "@/lib/schema";
import { share } from "@/lib/seo";
import ArticleBody, { TableOfContents } from "./ArticleBody";
import { IconClock, IconChevron, IconEngineer, IconLine } from "./Icons";
import { intlDate } from "@/lib/intl";

/**
 * หน้าบทความแปลอังกฤษ/จีน และหน้ารวมบทความ (29 ก.ย. 2569)
 * ใช้ ArticleBody ตัวเดียวกับบทความไทย เพื่อให้หน้าตาเหมือนกันทุกภาษา
 * hreflang จับคู่ด้วย slug เดียวกัน: /blog/[slug] ↔ /en/blog/[slug] ↔ /zh/blog/[slug]
 */
const T = {
  en: {
    base: "/en/blog", home: "/en", homeName: "English", hub: "Guides",
    hubTitle: "Aircon & Washing Machine Guides from a Chiang Mai Technician",
    hubDesc: "Practical guides written by Arm, a working aircon technician in Chiang Mai: noises, tripping, refrigerant, ice, water leaks and more.",
    hubH1: "Aircon guides from a working technician",
    hubLead: "Translated from my Thai guides, starting with the questions people in Chiang Mai search for most. Every price quoted is my current published rate.",
    by: "Written by", read: (n: number) => `${n} min read`, updated: "Updated",
    faq: "Frequently asked questions", more: "More guides", intent: "Want a technician to check this?",
    line: "Send a photo or clip on LINE", locale: "en_US", inLang: "en",
    svc: { "som-air": ["/en/repair", "AC repair in Chiang Mai"], "lang-air": ["/en/pricing", "Aircon cleaning prices"], "lang-air-khwaen-cassette": ["/en/pricing", "Cassette and suspended aircon cleaning prices"], "lang-washing-machine": ["/en/washing-machine", "Washing machine cleaning"], "tid-tang-air": ["/en/installation", "Aircon installation"], "yai-air": ["/en/installation", "Installation and relocation"] } as Record<string, [string, string]>,
    read_more: "Read the guide",
  },
  "zh-CN": {
    base: "/zh/blog", home: "/zh", homeName: "中文", hub: "空调知识",
    hubTitle: "清迈空调与洗衣机知识 | 技师 Arm 实战指南",
    hubDesc: "清迈在职空调技师 Arm 撰写的实用指南：异响、跳闸、冷媒、结冰、漏水等常见问题。",
    hubH1: "一线技师写的空调知识",
    hubLead: "由我的泰文文章翻译而来，先从清迈搜索量最高的问题开始。文中价格均为我目前公开的价格。",
    by: "作者", read: (n: number) => `阅读约 ${n} 分钟`, updated: "更新于",
    faq: "常见问题", more: "更多文章", intent: "需要技师上门检查？",
    line: "用 LINE 发照片或视频", locale: "zh_CN", inLang: "zh-CN",
    svc: { "som-air": ["/zh/repair", "清迈空调维修"], "lang-air": ["/zh/pricing", "空调清洗价格"], "lang-air-khwaen-cassette": ["/zh/pricing", "嵌入式与吊顶式空调清洗价格"], "lang-washing-machine": ["/zh/washing-machine", "洗衣机清洗"], "tid-tang-air": ["/zh/installation", "空调安装"], "yai-air": ["/zh/installation", "安装与移机"] } as Record<string, [string, string]>,
    read_more: "阅读全文",
  },
} as const;

const langs = (slug?: string) => ({
  "th-TH": slug ? `/blog/${slug}` : "/blog",
  "en-US": slug ? `/en/blog/${slug}` : "/en/blog",
  "zh-CN": slug ? `/zh/blog/${slug}` : "/zh/blog",
  "x-default": slug ? `/blog/${slug}` : "/blog",
});

export function intlBlogHubMetadata(lang: IntlLang): Metadata {
  const t = T[lang];
  return {
    title: { absolute: t.hubTitle },
    description: t.hubDesc,
    alternates: { canonical: t.base, languages: langs() },
    ...share({ title: t.hubTitle, description: t.hubDesc, path: t.base, locale: t.locale }),
  };
}

export function IntlBlogHub({ lang }: { lang: IntlLang }) {
  const t = T[lang];
  const list = intlArticles(lang);
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: t.homeName, path: t.home },
    { name: t.hub, path: t.base },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <section className="wrap max-w-4xl pt-12 pb-10">
          <p className="eyebrow">{t.hub}</p>
          <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">{t.hubH1}</h1>
          <p className="lead mt-5">{t.hubLead}</p>
        </section>
      </div>
      <section className="section pt-2" lang={lang}>
        <div className="wrap max-w-4xl grid gap-5 sm:grid-cols-2">
          {list.map((a) => (
            <Link key={a.slug} href={`${t.base}/${a.slug}`} className="card group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
              {a.image && (
                <Image src={a.image.src} alt={a.image.alt} width={640} height={420} loading="lazy" sizes="(max-width: 640px) 100vw, 50vw" className="aspect-[3/2] w-full object-cover" />
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold text-accent">{a.category}</p>
                <h2 className="mt-2 text-lg leading-[1.45] font-bold text-ink">{a.h1}</h2>
                <p className="mt-2 flex-1 text-[15px] leading-7 text-ink-soft">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  {t.read_more}
                  <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function intlArticleMetadata(a: IntlArticle, lang: IntlLang): Metadata {
  const t = T[lang];
  return {
    title: { absolute: a.title },
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `${t.base}/${a.slug}`, languages: langs(a.slug) },
    ...share({ title: a.title, description: a.description, path: `${t.base}/${a.slug}`, locale: t.locale, publishedTime: a.updated, modifiedTime: a.updated, image: a.image }),
  };
}

export function IntlArticleView({ a, lang }: { a: IntlArticle; lang: IntlLang }) {
  const t = T[lang];
  const others = intlArticles(lang).filter((x) => x.slug !== a.slug).slice(0, 4);
  const svc = a.relatedService ? t.svc[a.relatedService] : undefined;
  const isWasher = a.relatedService === "lang-washing-machine";
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: t.homeName, path: t.home },
    { name: t.hub, path: t.base },
    { name: a.h1, path: `${t.base}/${a.slug}` },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      {a.faqs.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(a.faqs))} />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title,
          description: a.description,
          url: `${site.url}${t.base}/${a.slug}`,
          mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${t.base}/${a.slug}` },
          datePublished: a.updated,
          dateModified: a.updated,
          inLanguage: t.inLang,
          keywords: a.keywords.join(", "),
          articleSection: a.category,
          ...(a.image ? { image: `${site.url}${a.image.src}` } : {}),
          author: { "@id": PERSON_ID },
          publisher: { "@id": `${site.url}/#business` },
        })}
      />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <header className="wrap max-w-3xl pt-12 pb-10">
          <p className="eyebrow">{a.category}</p>
          <h1 className="mt-5 text-[clamp(1.95rem,1.3rem+2.4vw,2.85rem)] leading-[1.32] font-extrabold">{a.h1}</h1>
          <p className="lead mt-5">{a.excerpt}</p>
          {a.image && (
            <figure className="mt-7 overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <Image src={a.image.src} alt={a.image.alt} width={1200} height={800} priority sizes="(max-width: 768px) 100vw, 720px" className="aspect-[3/2] w-full bg-slate-100 object-cover" />
              <figcaption className="bg-white px-4 py-2.5 text-xs leading-5 text-ink-soft">{a.image.alt}</figcaption>
            </figure>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <IconEngineer className="h-4 w-4 text-brand-600" />
              {t.by} Arm · Pro Fresh Care
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconClock className="h-4 w-4 text-brand-600" />
              {t.read(a.readMins)}
            </span>
            <time dateTime={a.updated}>
              {t.updated} {intlDate(a.updated, lang)}
            </time>
          </div>
        </header>
      </div>

      <div className="wrap max-w-3xl pb-4" lang={lang}>
        <TableOfContents blocks={a.blocks} lang={lang} />
      </div>

      {svc && (
        <section className="wrap max-w-3xl pt-5" lang={lang}>
          <div className="card flex flex-col gap-4 border-brand-200 bg-brand-50/70 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-bold">{t.intent}</p>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link href={svc[0]} className="btn-ghost">
                {svc[1]}
                <IconChevron className="h-4 w-4" />
              </Link>
              <a href={isWasher ? site.lineUrl2 : site.lineUrl} target="_blank" rel="noopener" className="btn-line" data-cta={`${lang}-article-intent-line`}>
                <IconLine className="h-5 w-5" />
                {t.line}
              </a>
            </div>
          </div>
        </section>
      )}

      <article className="wrap max-w-3xl pt-8 pb-10" lang={lang}>
        <ArticleBody blocks={a.blocks} lang={lang} lineUrl={isWasher ? site.lineUrl2 : site.lineUrl} lineId={isWasher ? site.lineId2 : site.lineId} />
      </article>

      {a.faqs.length > 0 && (
        <section className="section bg-sand" lang={lang}>
          <div className="wrap max-w-3xl">
            <h2 className="h2">{t.faq}</h2>
            <div className="mt-7 space-y-5">
              {a.faqs.map((f) => (
                <div key={f.q} className="card p-6">
                  <h3 className="font-bold">{f.q}</h3>
                  <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section" lang={lang}>
          <div className="wrap max-w-3xl">
            <h2 className="h2">{t.more}</h2>
            <ul className="mt-6 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`${t.base}/${o.slug}`} className="card group flex items-center justify-between gap-3 p-5 transition-all hover:shadow-lift">
                    <span className="font-semibold text-ink group-hover:text-brand-700">{o.h1}</span>
                    <IconChevron className="h-4 w-4 shrink-0 text-brand-700" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
