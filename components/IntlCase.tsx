import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { workCases, type WorkCase } from "@/lib/work-cases";
import { caseToJob } from "@/lib/case-to-job";
import { caseRelatedJob } from "@/lib/case-related-job";
import { getJob } from "@/lib/job-stories";
import { breadcrumbSchema, jsonLd, PERSON_ID } from "@/lib/schema";
import { lastmodIso, SRC } from "@/lib/lastmod";
import { share } from "@/lib/seo";
import { caseText, type IntlLang } from "@/content/cases-intl";
import { IconCheck, IconChevron, IconLine } from "./Icons";

/**
 * รายงานเคสฉบับอังกฤษ/จีน /en/case-study และ /zh/case-study (29 ก.ย. 2569)
 * โครงตามหน้าไทย app/(th)/case-study แต่ใช้เฉพาะรูปของเคสเอง (images) พร้อม alt ที่แปลแล้ว
 * ส่วนรูปครบทั้งงานให้ลิงก์ไปหน้า /en/work/[id] ซึ่งมีอยู่แล้ว ไม่ยกรูปทั้งงานมาซ้ำ
 * รูปแยกเป็นกองก่อน/ระหว่าง/หลัง ห้ามจับคู่ชิ้นต่อชิ้น (กติกาเดียวกับหน้าไทย)
 */
const T = {
  en: {
    base: "/en/case-study", home: "/en", homeName: "English", hub: "Case reports", locale: "en_US", inLang: "en",
    hubTitle: "Real Aircon & Washing Machine Jobs in Chiang Mai: Case Reports",
    hubDesc: "Case reports from real jobs by Arm, a Chiang Mai aircon technician: what I found, the steps I took and the result, with photos from the job.",
    hubH1: "Case reports from real jobs",
    hubLead: "Aircon cleaning, repair, installation and washing machine cleaning. Each report keeps what the photos show separate from what the customer told me, and anything I could not confirm is marked as not specified.",
    read: "Read the report", by: "Arm, the technician, was responsible for and carried out this job.",
    facts: { region: "Service area", regionV: "Chiang Mai province", equip: "Unit", svc: "Type of work", when: "When", site: "Job location" },
    photosH: (n: number) => `${n} photos from the job`, photosLead: "The unit when I arrived, during the work and when I finished.",
    phase: { "ก่อนทำ": "Before", "ระหว่างทำ": "During", "หลังทำ": "After" } as Record<string, string>, count: (n: number) => `${n} photo${n === 1 ? "" : "s"}`,
    fullJob: "All photos from this visit", fullJobCta: "See the full set",
    lessonH: "What you can check yourself from this case", lessonLead: "Arm explains what the photos show, so you can judge the unit at home yourself.",
    stepsH: "What I did", resultH: "Result",
    relatedH: "Similar cases", allCases: "See all case reports",
    ctaH: "Have a similar problem?", cta: "Send a photo, the model and your area on LINE and I will give you a price before we book.", line: "Message me on LINE",
    svcPage: { "lang-air": "/en/pricing", "som-air": "/en/repair", "tid-tang-air": "/en/installation", "yai-air": "/en/installation", "lang-washing-machine": "/en/washing-machine", "lang-air-khwaen-cassette": "/en/pricing" } as Record<string, string>,
    svcLink: "About this service",
    thai: "อ่านรายงานนี้เป็นภาษาไทย",
  },
  "zh-CN": {
    base: "/zh/case-study", home: "/zh", homeName: "中文", hub: "案例报告", locale: "zh_CN", inLang: "zh-CN",
    hubTitle: "清迈空调与洗衣机真实案例报告｜技师 Arm",
    hubDesc: "清迈空调技师 Arm 的真实工作案例：发现了什么、做了哪些步骤、结果如何，附现场照片。",
    hubH1: "真实工作的案例报告",
    hubLead: "空调清洗、维修、安装和洗衣机清洗。每份报告都把照片能看到的和客户告诉我的分开写，无法确认的内容一律注明未说明。",
    read: "阅读报告", by: "本次工作由技师 Arm 负责并亲自完成。",
    facts: { region: "服务地区", regionV: "清迈府", equip: "机器", svc: "工作类型", when: "时间", site: "现场位置" },
    photosH: (n: number) => `现场照片 ${n} 张`, photosLead: "我到达时、施工中和完工后机器的样子。",
    phase: { "ก่อนทำ": "施工前", "ระหว่างทำ": "施工中", "หลังทำ": "完工后" } as Record<string, string>, count: (n: number) => `${n} 张`,
    fullJob: "这次上门的全部照片", fullJobCta: "查看全部",
    lessonH: "从这个案例您可以自己看出什么", lessonLead: "技师 Arm 解释照片里看到的情况，方便您自己判断家里的机器。",
    stepsH: "工作步骤", resultH: "结果",
    relatedH: "相似案例", allCases: "查看全部案例报告",
    ctaH: "遇到类似问题？", cta: "用 LINE 发照片、型号和所在区域给我，预约前我先报价。", line: "LINE 联系我",
    svcPage: { "lang-air": "/zh/pricing", "som-air": "/zh/repair", "tid-tang-air": "/zh/installation", "yai-air": "/zh/installation", "lang-washing-machine": "/zh/washing-machine", "lang-air-khwaen-cassette": "/zh/pricing" } as Record<string, string>,
    svcLink: "了解这项服务",
    thai: "อ่านรายงานนี้เป็นภาษาไทย",
  },
} as const;

const langs = (slug?: string) => ({
  "th-TH": slug ? `/case-study/${slug}` : "/case-study",
  "en-US": slug ? `/en/case-study/${slug}` : "/en/case-study",
  "zh-CN": slug ? `/zh/case-study/${slug}` : "/zh/case-study",
  "x-default": slug ? `/case-study/${slug}` : "/case-study",
});

export const intlCaseSlugs = (lang: IntlLang) => workCases.map((c) => c.slug).filter((s) => caseText(lang, s));
const sorted = () => [...workCases].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

export function intlCaseHubMetadata(lang: IntlLang): Metadata {
  const t = T[lang];
  return {
    title: { absolute: t.hubTitle },
    description: t.hubDesc,
    alternates: { canonical: t.base, languages: langs() },
    ...share({ title: t.hubTitle, description: t.hubDesc, path: t.base, locale: t.locale, image: workCases[0].images[0] }),
  };
}

function CaseCard({ c, lang, small = false }: { c: WorkCase; lang: IntlLang; small?: boolean }) {
  const t = T[lang];
  const ct = caseText(lang, c.slug)!;
  return (
    <Link href={`${t.base}/${c.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
      <Image src={c.images[0].src} alt={ct.alts[0] ?? ct.title} width={720} height={540} loading="lazy" sizes="(max-width: 640px) 100vw, 33vw" className="aspect-[4/3] w-full object-cover" />
      <div className={`flex flex-1 flex-col ${small ? "p-4" : "p-5"}`}>
        <span className="text-xs font-bold text-brand-600">{ct.service}{c.date ? ` · ${ct.recorded}` : ""}</span>
        {small ? (
          <h3 className="mt-1.5 text-sm font-bold leading-6 group-hover:text-brand-700">{ct.title.split(":")[0]}</h3>
        ) : (
          <>
            <h2 className="mt-2 font-bold leading-7 group-hover:text-brand-700">{ct.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{ct.finding}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">{t.read}<IconChevron className="h-4 w-4" /></span>
          </>
        )}
      </div>
    </Link>
  );
}

export function IntlCaseHub({ lang }: { lang: IntlLang }) {
  const t = T[lang];
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: t.homeName, path: t.home },
    { name: t.hub, path: t.base },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <header className="wrap max-w-4xl pt-12 pb-14">
          <p className="eyebrow">{t.hub}</p>
          <h1 className="mt-5 text-[clamp(2.05rem,1.3rem+2.8vw,3.1rem)] leading-[1.3] font-extrabold">{t.hubH1}</h1>
          <p className="lead mt-5">{t.hubLead}</p>
        </header>
      </div>
      <section className="section pt-5" lang={lang}>
        <ul className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted().filter((c) => caseText(lang, c.slug)).map((c) => (
            <li key={c.slug}><CaseCard c={c} lang={lang} /></li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function intlCaseMetadata(c: WorkCase, lang: IntlLang): Metadata {
  const t = T[lang];
  const ct = caseText(lang, c.slug)!;
  const head = ct.title.split(":")[0].trim();
  const title = lang === "en" ? (head.length > 44 ? head : `${head} | Chiang Mai`) : `${head}｜清迈`;
  const description = ct.finding.length > 158 ? `${ct.finding.slice(0, ct.finding.lastIndexOf(" ", 155))}…` : ct.finding;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${t.base}/${c.slug}`, languages: langs(c.slug) },
    ...share({ title: ct.title, description, path: `${t.base}/${c.slug}`, locale: t.locale, image: { src: c.images[0].src, alt: ct.alts[0] ?? ct.title } }),
  };
}

export function IntlCaseView({ c, lang }: { c: WorkCase; lang: IntlLang }) {
  const t = T[lang];
  const ct = caseText(lang, c.slug)!;
  const isWasher = c.serviceSlug === "lang-washing-machine";
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: t.homeName, path: t.home },
    { name: t.hub, path: t.base },
    { name: ct.title.split(":")[0], path: `${t.base}/${c.slug}` },
  ];
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: ct.title, description: ct.finding,
    url: `${site.url}${t.base}/${c.slug}`, inLanguage: t.inLang,
    ...(c.date ? { datePublished: c.date } : {}), dateModified: lastmodIso(SRC.workCases),
    author: { "@id": PERSON_ID }, publisher: { "@id": `${site.url}/#business` },
    image: c.images.map((im) => `${site.url}${im.src}`),
  };
  const facts: [string, string][] = [
    [t.facts.region, t.facts.regionV],
    [t.facts.equip, ct.equipment],
    [t.facts.svc, ct.service],
    [t.facts.when, ct.recorded],
    ...(c.area && c.area !== "เชียงใหม่" ? [[t.facts.site, ct.area] as [string, string]] : []),
  ];
  const groups = (["ก่อนทำ", "ระหว่างทำ", "หลังทำ"] as const)
    .map((k) => ({ k, photos: c.images.map((im, i) => ({ ...im, alt: ct.alts[i] ?? ct.title })).filter((im) => im.phase === k) }))
    .filter((g) => g.photos.length > 0);
  const total = groups.reduce((n, g) => n + g.photos.length, 0);
  const job = getJob(caseToJob[c.slug] ?? caseRelatedJob[c.slug] ?? "");
  const workBase = lang === "en" ? "/en/work" : "/zh/work";

  // เคสใกล้เคียง หมุนเวียนตามตำแหน่งเคสปัจจุบัน เหมือนหน้าไทย
  const pool = workCases.filter((x) => x.slug !== c.slug && caseText(lang, x.slug));
  const ordered = [...pool.filter((x) => x.serviceSlug === c.serviceSlug), ...pool.filter((x) => x.serviceSlug !== c.serviceSlug)];
  const start = workCases.findIndex((x) => x.slug === c.slug);
  const related = ordered.length <= 3 ? ordered : Array.from({ length: 3 }, (_, k) => ordered[(start + 1 + k) % ordered.length]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <header className="wrap max-w-4xl pt-12 pb-12">
          <p className="eyebrow">{t.hub} · {ct.service}</p>
          <h1 className="mt-5 text-[clamp(1.95rem,1.3rem+2.4vw,2.85rem)] leading-[1.32] font-extrabold">{ct.title}</h1>
          <p className="lead mt-5">{ct.finding}</p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">{t.by}</p>
          <p className="mt-2 text-sm">
            <Link href={`/case-study/${c.slug}`} hrefLang="th" lang="th" className="font-semibold text-brand-700 hover:underline">{t.thai}</Link>
          </p>
        </header>
      </div>
      <article className="wrap max-w-4xl py-10" lang={lang}>
        <dl className="grid gap-4 sm:grid-cols-2">
          {facts.map(([label, value]) => (
            <div key={label} className="card p-5">
              <dt className="text-sm font-bold text-brand-700">{label}</dt>
              <dd className="mt-2 text-[15px] leading-7 text-ink-soft">{value}</dd>
            </div>
          ))}
        </dl>

        {groups.length > 0 && (
          <section className="mt-12">
            <h2 className="h2">{t.photosH(total)}</h2>
            <p className="lead mt-3">{t.photosLead}</p>
            <div className="mt-7 space-y-8">
              {groups.map((g) => (
                <div key={g.k}>
                  <p className="flex flex-wrap items-center gap-2 text-sm font-bold">
                    <span className={`inline-block rounded-lg px-2.5 py-1 text-xs ${g.k === "ก่อนทำ" ? "bg-brand-600 text-white" : g.k === "ระหว่างทำ" ? "bg-brand-200 text-brand-900" : "bg-gradient-to-b from-ice to-accent text-[#04121F]"}`}>{t.phase[g.k]}</span>
                    <span className="text-ink-soft">{t.count(g.photos.length)}</span>
                  </p>
                  <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {g.photos.map((im) => (
                      <li key={im.src} className="card overflow-hidden">
                        <Image src={im.src} alt={im.alt} width={640} height={640} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw" className="aspect-square w-full object-cover" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {job && (
          <Link href={`${workBase}/${job.id}`} className="card group mt-10 flex flex-wrap items-center justify-between gap-4 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lift">
            <span className="block text-lg leading-[1.5] font-bold text-ink">{t.fullJob}</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-brand-700 group-hover:underline">
              {t.fullJobCta}
              <IconChevron className="h-4 w-4" />
            </span>
          </Link>
        )}

        {ct.lesson && ct.lesson.length > 0 && (
          <section className="mt-12">
            <h2 className="h2">{t.lessonH}</h2>
            <p className="lead mt-3">{t.lessonLead}</p>
            <div className="mt-7 space-y-4">
              {ct.lesson.map((l) => (
                <div key={l.t} className="card p-6">
                  <h3 className="font-bold leading-7">{l.t}</h3>
                  <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{l.d}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="h2">{t.stepsH}</h2>
            <ol className="mt-5 space-y-3">
              {ct.actions.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] leading-8 text-ink-soft">
                  <IconCheck className="mt-1.5 h-5 w-5 shrink-0 text-mint" />
                  {a}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="h2">{t.resultH}</h2>
            <p className="mt-5 text-[15px] leading-8 text-ink-soft">{ct.result}</p>
            {t.svcPage[c.serviceSlug] && (
              <Link href={t.svcPage[c.serviceSlug]} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">
                {t.svcLink}
                <IconChevron className="h-4 w-4" />
              </Link>
            )}
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="h2">{t.relatedH}</h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((x) => <li key={x.slug}><CaseCard c={x} lang={lang} small /></li>)}
            </ul>
            <div className="mt-6">
              <Link href={t.base} className="btn-ghost">{t.allCases}<IconChevron className="h-4 w-4" /></Link>
            </div>
          </section>
        )}
      </article>

      <section className="section bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <div className="wrap max-w-3xl text-center">
          <h2 className="h2">{t.ctaH}</h2>
          <p className="lead mt-4">{t.cta}</p>
          <div className="mt-8 flex justify-center">
            <a href={isWasher ? site.lineUrl2 : site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`${lang}-case-line`}>
              <IconLine className="h-5 w-5" />
              {t.line}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
