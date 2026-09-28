import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { jobs, jobPhotoCount, type Job } from "@/lib/jobs";
import { jobGroup, jobsIn, coverOf, type JobGroup } from "@/lib/job-stories";
import { type Lang, intlDate, jobTitle } from "@/lib/intl";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { clipDesc, share } from "@/lib/seo";
import { JobStoryCard } from "./JobStoryCard";
import { JobGallery } from "./JobGallery";
import { IconChevron, IconLine } from "./Icons";

/**
 * หน้ารูปงานจริงภาษาอังกฤษ/จีน (29 ก.ย. 2569) ฉบับเดียวกับ /kon-lang ของไทย
 * แยกหมวดแอร์/เครื่องซักผ้า แอร์ขึ้นก่อน แต่ละงานเป็นการ์ดเรื่อง รูปครบอยู่ในหน้างาน
 *
 * หน้างานรายงาน (/en/work/[id]) ตั้ง noindex,follow เพราะเนื้อหาเป็นรูปล้วน ข้อความน้อย
 * ถ้าให้ Google เก็บทั้ง 118 หน้าจะเป็นหน้าบางจำนวนมาก หน้ารวมคือหน้าที่ต้องการให้ติดอันดับ
 */
const T = {
  en: {
    base: "/en/work", home: "/en", homeName: "English", hubName: "Real jobs",
    title: "Aircon & Washing Machine Cleaning Photos, Chiang Mai",
    desc: (n: number, p: number) => `Before and after photos from ${n} real jobs in Chiang Mai, ${p} photos in total: aircon cleaning, installation and washing machine drum cleaning.`,
    eyebrow: "Photographed on site",
    h1: (n: number) => `${n} real jobs, before and after`,
    lead: "Every photo was taken on the job in Chiang Mai. Pick a category, then open any job to see every photo from the condition I found on arrival to the finished result.",
    groups: { air: "Aircon jobs", washer: "Washing machine jobs" } as Record<JobGroup, string>,
    groupLead: {
      air: "Aircon cleaning, new installations and diagnosis visits around Chiang Mai.",
      washer: "Top and front loaders, drum taken out and every part washed.",
    } as Record<JobGroup, string>,
    count: (n: number, p: number) => `${n} jobs · ${p} photos`,
    all: (g: string, n: number) => `All ${g.toLowerCase()} (${n})`,
    line: "Send a photo of your unit on LINE",
    detailLead: (n: number) => `All ${n} photos from this job, from the condition I found on arrival to the finished result.`,
    next: "Newer job", prev: "Older job", back: (g: string) => `Back to ${g.toLowerCase()}`,
    service: { air: "/en", washer: "/en/washing-machine", install: "/en/installation" },
    serviceLabel: { air: "Aircon cleaning prices", washer: "Washing machine cleaning prices", install: "Installation prices" },
    locale: "en_US",
  },
  "zh-CN": {
    base: "/zh/work", home: "/zh", homeName: "中文", hubName: "现场实拍",
    title: "清迈空调与洗衣机清洗实拍 | 施工前后对比",
    desc: (n: number, p: number) => `清迈 ${n} 单真实工作的施工前后照片，共 ${p} 张：空调清洗、安装和洗衣机拆洗。`,
    eyebrow: "现场实拍",
    h1: (n: number) => `${n} 单真实工作的施工前后`,
    lead: "所有照片都拍摄于清迈的真实施工现场。先选类别，再点开任意一单，查看从到场时的状况到完工的全部照片。",
    groups: { air: "空调工作", washer: "洗衣机工作" } as Record<JobGroup, string>,
    groupLead: {
      air: "清迈各地的空调清洗、新机安装和检测维修。",
      washer: "上开式和前开式，内桶拆出，所有部件逐件清洗。",
    } as Record<JobGroup, string>,
    count: (n: number, p: number) => `${n} 单 · ${p} 张`,
    all: (g: string, n: number) => `全部${g}（${n} 单）`,
    line: "用 LINE 发机器照片",
    detailLead: (n: number) => `这单工作的全部 ${n} 张照片，从到场时的状况到完工。`,
    next: "较新的一单", prev: "较早的一单", back: (g: string) => `返回${g}`,
    service: { air: "/zh", washer: "/zh/washing-machine", install: "/zh/installation" },
    serviceLabel: { air: "空调清洗价格", washer: "洗衣机清洗价格", install: "安装价格" },
    locale: "zh_CN",
  },
} as const;

const ORDER: JobGroup[] = ["air", "washer"];
const totalPhotos = jobs.reduce((n, j) => n + jobPhotoCount(j), 0);

export function workHubMetadata(lang: Lang): Metadata {
  const t = T[lang];
  const description = clipDesc(t.desc(jobs.length, totalPhotos), 170);
  return {
    title: { absolute: t.title },
    description,
    alternates: {
      canonical: t.base,
      languages: { "th-TH": "/kon-lang", "en-US": "/en/work", "zh-CN": "/zh/work", "x-default": "/kon-lang" },
    },
    ...share({ title: t.title, description, path: t.base, locale: t.locale }),
  };
}

export function WorkHub({ lang }: { lang: Lang }) {
  const t = T[lang];
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: t.homeName, path: t.home },
    { name: t.hubName, path: t.base },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <section className="wrap pt-12 pb-12">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">{t.h1(jobs.length)}</h1>
          <p className="lead mt-5 max-w-3xl">{t.lead}</p>
          <div className="mt-8 grid gap-3 sm:max-w-2xl sm:grid-cols-2">
            {ORDER.map((g) => {
              const list = jobsIn(g);
              return (
                <a key={g} href={`#${g}`} className="card group flex items-center justify-between gap-3 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift">
                  <span>
                    <span className="block text-lg font-bold text-ink">{t.groups[g]}</span>
                    <span className="mt-0.5 block text-sm text-ink-soft">{t.count(list.length, list.reduce((n, j) => n + jobPhotoCount(j), 0))}</span>
                  </span>
                  <IconChevron className="h-5 w-5 rotate-90 text-brand-700" />
                </a>
              );
            })}
          </div>
        </section>
      </div>
      {ORDER.map((g, idx) => {
        const list = jobsIn(g);
        return (
          <section key={g} id={g} className={idx % 2 === 1 ? "section bg-sand" : "section"} lang={lang}>
            <div className="wrap">
              <h2 className="h2">{t.groups[g]} · {list.length}</h2>
              <p className="lead mt-3 max-w-2xl">{t.groupLead[g]}</p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((j) => <JobStoryCard key={j.id} job={j} lang={lang} />)}
              </div>
            </div>
          </section>
        );
      })}
      <section className="section pt-0" lang={lang}>
        <div className="wrap text-center">
          <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`${lang}-work-line`}>
            <IconLine className="h-5 w-5" />
            {t.line}
          </a>
        </div>
      </section>
    </>
  );
}

export function workDetailMetadata(job: Job, lang: Lang): Metadata {
  const t = T[lang];
  const same = jobs.filter((j) => j.summary === job.summary && j.date === job.date);
  const nth = same.length > 1 ? (lang === "en" ? ` (${same.findIndex((j) => j.id === job.id) + 1})` : `（${same.findIndex((j) => j.id === job.id) + 1}）`) : "";
  const zh = lang === "zh-CN";
  const title = `${jobTitle(job, lang)}${zh ? "，" : ", "}${intlDate(job.date, lang)}${nth}`;
  const description = clipDesc(`${title}${zh ? "。" : ". "}${t.detailLead(jobPhotoCount(job))}`, 170);
  return {
    title: { absolute: title },
    description,
    robots: { index: false, follow: true },
    // หน้านี้ noindex จึงไม่ประกาศ hreflang (ประกาศคู่ภาษากับหน้าที่ไม่ให้เก็บดัชนีไม่มีประโยชน์)
    alternates: { canonical: `${t.base}/${job.id}` },
    ...share({ title, description, path: `${t.base}/${job.id}`, locale: t.locale, image: { src: coverOf(job).src, alt: title } }),
  };
}

export function WorkDetail({ job, lang }: { job: Job; lang: Lang }) {
  const t = T[lang];
  const g = jobGroup(job);
  const list = jobsIn(g);
  const at = list.findIndex((j) => j.id === job.id);
  const newer = at > 0 ? list[at - 1] : undefined;
  const older = at < list.length - 1 ? list[at + 1] : undefined;
  const svcKey = job.serviceSlug === "tid-tang-air" ? "install" : g;
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: t.homeName, path: t.home },
    { name: t.hubName, path: t.base },
    { name: jobTitle(job, lang), path: `${t.base}/${job.id}` },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <div className="bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <section className="wrap pt-12 pb-10">
          <p className="eyebrow">{t.groups[g]} · {intlDate(job.date, lang)}</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(1.8rem,1.25rem+2.2vw,2.6rem)] leading-[1.35] font-extrabold">{jobTitle(job, lang)}</h1>
          <p className="lead mt-5 max-w-3xl">{t.detailLead(jobPhotoCount(job))}</p>
        </section>
      </div>
      <section className="section pt-2" lang={lang}>
        <div className="wrap">
          <JobGallery job={job} lang={lang} />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {newer ? (
              <Link href={`${t.base}/${newer.id}`} className="card group p-5 transition-all hover:shadow-lift">
                <span className="block text-xs font-bold text-accent">{t.next} · {intlDate(newer.date, lang)}</span>
                <span className="mt-1 block font-semibold text-ink group-hover:underline">{jobTitle(newer, lang)}</span>
              </Link>
            ) : <span />}
            {older && (
              <Link href={`${t.base}/${older.id}`} className="card group p-5 text-right transition-all hover:shadow-lift">
                <span className="block text-xs font-bold text-accent">{t.prev} · {intlDate(older.date, lang)}</span>
                <span className="mt-1 block font-semibold text-ink group-hover:underline">{jobTitle(older, lang)}</span>
              </Link>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`${t.base}#${g}`} className="btn-ghost">
              {t.back(t.groups[g])}
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href={t.service[svcKey]} className="btn-ghost">
              {t.serviceLabel[svcKey]}
              <IconChevron className="h-4 w-4" />
            </Link>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line" data-cta={`${lang}-work-detail-line`}>
              <IconLine className="h-5 w-5" />
              {t.line}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
