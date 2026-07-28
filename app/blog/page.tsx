import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { articles, categories, articlesByCategory } from "@/content/articles";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { IconChevron, IconClock } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";

const title = "คลังความรู้เรื่องแอร์ โดยช่างแอร์เชียงใหม่";
const description =
  "รวมบทความเรื่องแอร์จากช่างจริงในเชียงใหม่ ตั้งแต่แอร์ไม่เย็น น้ำหยด กลิ่นอับ ไปจนถึงราคาล้างแอร์ ฝุ่น PM2.5 หน้าเผา และวิธีดูว่าช่างล้างแอร์ให้จริงหรือไม่";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: `${site.url}/blog`, type: "website" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "คลังความรู้", path: "/blog" },
];

const catColor: Record<string, string> = {
  "ฝุ่น PM2.5": "bg-amber-100 text-amber-800",
  "ปัญหาแอร์": "bg-red-100 text-red-800",
  "ดูแลรักษา": "bg-brand-100 text-brand-800",
  "ราคาและค่าใช้จ่าย": "bg-mint/15 text-emerald-800",
  "เลือกซื้อแอร์": "bg-violet-100 text-violet-800",
};

export default function BlogIndex() {
  const featured = articles[0];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: title,
          description,
          url: `${site.url}/blog`,
          inLanguage: "th-TH",
          publisher: { "@id": `${site.url}/#business` },
          blogPost: articles.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            url: `${site.url}/blog/${a.slug}`,
            datePublished: a.updated,
            dateModified: a.updated,
          })),
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <p className="eyebrow">ผมเขียนเองจากหน้างานจริง</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            คลังความรู้เรื่องแอร์ ฉบับช่างเชียงใหม่
          </h1>
          <p className="lead mt-5">
            ผมเขียนจากสิ่งที่เจอหน้างานจริง ไม่ได้คัดลอกใครมาครับ
            อ่านให้จบก่อนเรียกช่างก็ดี บางเรื่องคุณแก้เองได้และไม่ต้องเสียเงินเลย
          </p>
        </section>
      </div>

      {/* บทความเด่น */}
      <section className="wrap pt-2">
        <Link
          href={`/blog/${featured.slug}`}
          className="card group grid gap-6 overflow-hidden p-6 transition-all hover:shadow-lift sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center"
        >
          <div>
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${catColor[featured.category]}`}>
              {featured.category}
            </span>
            <h2 className="mt-4 text-xl font-extrabold group-hover:text-brand-700 sm:text-2xl">
              {featured.h1}
            </h2>
            <p className="mt-3 text-[15px] leading-8 text-ink-soft">{featured.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              อ่านบทความ
              <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-500 p-6 text-white">
            <p className="text-sm font-semibold text-brand-100">บทความที่คนเชียงใหม่ควรอ่านที่สุด</p>
            <p className="mt-2 text-[15px] leading-8">
              ยังไม่เห็นช่างแอร์เจ้าไหนในเชียงใหม่พูดเรื่องนี้ ทั้งที่เราเจอหน้าเผากันทุกปี
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-brand-100">
              <IconClock className="h-4 w-4" />
              อ่าน {featured.readMins} นาที
            </p>
          </div>
        </Link>
      </section>

      {/* แยกตามหมวด */}
      {categories.map((cat) => {
        const list = articlesByCategory(cat).filter((a) => a.slug !== featured.slug);
        if (!list.length) return null;
        return (
          <section key={cat} className="section pb-0 last:pb-14">
            <div className="wrap">
              <h2 className="h2">{cat}</h2>
              <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/blog/${a.slug}`}
                      className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                    >
                      <span className={`self-start rounded-full px-2.5 py-1 text-[11px] font-bold ${catColor[a.category]}`}>
                        {a.category}
                      </span>
                      <h3 className="mt-3.5 text-base font-bold group-hover:text-brand-700 sm:text-lg">
                        {a.h1}
                      </h3>
                      <p className="mt-2.5 flex-1 text-sm leading-7 text-ink-soft">{a.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-ink-soft">
                        <IconClock className="h-4 w-4" />
                        อ่าน {a.readMins} นาที
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="อ่านแล้วยังไม่แน่ใจ?"
        subtitle="ทักมาเล่าอาการให้ผมฟัง ผมบอกตรง ๆ ว่าต้องเรียกช่างหรือคุณทำเองได้ ถามฟรีไม่คิดเงิน"
      />
    </>
  );
}
