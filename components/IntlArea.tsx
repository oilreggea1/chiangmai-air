import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, areas, pricing, workingPhotos, p } from "@/lib/site";
import { workCases } from "@/lib/work-cases";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { areaText, areaTexts, type IntlLang } from "@/content/areas-intl";
import { caseText } from "@/content/cases-intl";
import { condosInArea } from "./CondoPages";
import { IconCheck, IconChevron, IconClock, IconLine, IconPhone, IconPin } from "./Icons";

/**
 * หน้าพื้นที่ฉบับอังกฤษ/จีน /en/areas/[slug] และ /zh/areas/[slug] (29 ก.ย. 2569)
 * โครงเดียวกับ app/(th)/area/[slug] เนื้อหาเฉพาะพื้นที่มาจาก content/areas-intl
 * ส่วนที่ไม่ได้แปลจากไทยตรง ๆ (หัวข้อ ปุ่ม คำถามกลาง) อยู่ในพจนานุกรม T ด้านล่าง
 * ห้ามเติมระยะทางเป็นกิโลเมตร และห้ามยืมเคสจากพื้นที่อื่นมาใส่
 */
const T = {
  en: {
    base: "/en/areas", home: "/en", homeName: "English", hub: "Areas", locale: "en_US",
    title: (n: string) => `Aircon Technician in ${n}, Chiang Mai: Cleaning & Repair`,
    shortTitle: (n: string) => `Aircon Technician ${n}, Chiang Mai`,
    desc: (n: string, f: string) => `Aircon cleaning ${p.wash.std} THB, or ${p.wash.stdBulk} THB each for three or more. Repair, installation and washing machine cleaning at home in ${f}. No travel fee.`,
    h1: (n: string) => `Aircon technician in ${n}: cleaning, repair and installation at home`,
    lead: (f: string) => `I clean, repair, install and relocate aircon units and clean washing machines in ${f}. You get the price before I start, and there is no travel fee.`,
    call: "Call", line: "Check a slot on LINE", hours: "Mon–Sat 8am–6pm · outside hours by arrangement, extra fee",
    localH: (n: string) => `What is different about aircon work in ${n}`,
    casesH: (n: string) => `Real jobs in ${n}`, casesLead: "How the units looked when I arrived and when I finished, from jobs in this area.", readCase: "Read the report",
    howH: "How I work here",
    how: [
      "I always give the price before I start, check the unit in front of you, explain the real cause, and do not top up refrigerant unless it is actually low, because overcharging uses more power and shortens the compressor's life.",
      "For every clean I lay a two-layer cover sheet first and leave the area tidy before handing over. Every unit gets a disinfectant spray, with a 30-day warranty against dripping (60 days for the full strip-down clean). If it drips in that time, I come back and fix it free. Repairs carry a 30-day warranty.",
    ],
    base_: "I am based in San Kamphaeng", baseHome: "which is in this same district, so I can reach jobs here fastest.", baseAway: (f: string) => `and work in ${f} regularly.`, landmarks: "Landmarks in this area:",
    priceH: (n: string) => `Prices in ${n}`, priceLead: "The same price in every area I cover, with no travel fee.", allPrices: "See all prices and conditions",
    faqH: (n: string) => `Common questions about aircon service in ${n}`,
    faqs: (n: string, f: string) => [
      { q: `How soon can you come to ${n}?`, a: "Usually within 24 hours, and the same day if I have a slot free. The exception is February to April, when the whole province is busy, so it is best to check a slot in advance by phone or LINE." },
      { q: `Is there a travel fee in ${n}?`, a: `No. ${f} is inside my normal service area, and the price I quote is what you pay.` },
      { q: "Do you clean aircon in condos and dorms here?", a: "Yes: houses, condos, dorms, cafés, restaurants and offices. There is a lower rate when several units are cleaned together." },
    ],
    othersH: "Other areas I cover", ctaH: (n: string) => `Book an aircon technician in ${n}`,
    cta: (f: string, home: boolean) => home ? `I am based in ${f}. Send me the details and I will check my next free slot.` : `I work in ${f} regularly. Send me the details and I will check my next free slot.`,
    thai: "อ่านหน้านี้เป็นภาษาไทย",
    alt: (n: string) => `Aircon technician at work in a customer's home in ${n}, Chiang Mai`,
  },
  "zh-CN": {
    base: "/zh/areas", home: "/zh", homeName: "中文", hub: "服务区域", locale: "zh_CN",
    title: (n: string) => `${n} 空调技师｜清迈上门清洗维修`,
    shortTitle: (n: string) => `${n} 清迈空调技师`,
    desc: (n: string, f: string) => `${f}上门空调清洗每台 ${p.wash.std} 泰铢，三台以上每台 ${p.wash.stdBulk} 泰铢；维修、安装、洗衣机清洗，不收路费。`,
    h1: (n: string) => `${n} 空调技师：上门清洗、维修、安装`,
    lead: (f: string) => `我在 ${f} 提供空调清洗、维修、安装、移机和洗衣机清洗服务。开工前先报价，不收路费。`,
    call: "致电", line: "用 LINE 查空档", hours: "周一至周六 8:00–18:00 · 营业时间外可预约，另收费",
    localH: (n: string) => `${n} 的空调工作有什么不同`,
    casesH: (n: string) => `${n} 的真实案例`, casesLead: "来自这一带的工作：我到达时和完工后机器的样子。", readCase: "阅读报告",
    howH: "我在这里的工作方式",
    how: [
      "我每次都先报价再开工，当面检查机器，说明真正的原因；冷媒不缺就不加，因为加过量会更耗电，也会缩短压缩机寿命。",
      "每次清洗前我都先铺两层防水布，交付前把现场收拾干净。每台都喷消毒剂，并享有 30 天滴水保修（深度拆洗 60 天），期间滴水我免费回来处理。维修保修 30 天。",
    ],
    base_: "我的店在 San Kamphaeng", baseHome: "就在同一个县，所以这里的工作我到得最快。", baseAway: (f: string) => `，经常在 ${f} 接工作。`, landmarks: "这一带的地标：",
    priceH: (n: string) => `${n} 的价格`, priceLead: "服务范围内所有地区同一价格，不收路费。", allPrices: "查看全部价格和条件",
    faqH: (n: string) => `关于 ${n} 空调服务的常见问题`,
    faqs: (n: string, f: string) => [
      { q: `在 ${n} 叫技师，多久能上门？`, a: "一般 24 小时内，有空档当天就能上门。二月到四月全省都很忙，建议提前用电话或 LINE 查询空档。" },
      { q: `在 ${n} 要另收路费吗？`, a: `不收。${f} 在我的正常服务范围内，报的价格就是实际支付的价格。` },
      { q: "这一带的公寓和宿舍也接吗？", a: "接的：住宅、公寓、宿舍、咖啡店、餐厅和办公室都可以。多台一起清洗有优惠价。" },
    ],
    othersH: "其他服务区域", ctaH: (n: string) => `预约 ${n} 空调技师`,
    cta: (f: string, home: boolean) => home ? `我的店就在 ${f}，把情况发给我，我帮您查最近的空档。` : `我经常在 ${f} 接工作，把情况发给我，我帮您查最近的空档。`,
    thai: "อ่านหน้านี้เป็นภาษาไทย",
    alt: (n: string) => `清迈 ${n} 空调技师在客户家中上门清洗空调`,
  },
} as const;

const langs = (slug: string) => ({
  "th-TH": `/area/${slug}`,
  "en-US": `/en/areas/${slug}`,
  "zh-CN": `/zh/areas/${slug}`,
  "x-default": `/area/${slug}`,
});

/** slug ที่มีคำแปลในภาษานั้น ใช้สร้างหน้าแบบ static */
export const intlAreaSlugs = (lang: IntlLang) => areas.map((a) => a.slug).filter((s) => areaTexts(lang)[s]);

export function intlAreaMetadata(slug: string, lang: IntlLang): Metadata {
  const t = T[lang];
  const x = areaText(lang, slug);
  if (!x) return {};
  const full = t.title(x.name);
  const title = lang === "en" && full.length > 62 ? t.shortTitle(x.name) : full;
  const description = t.desc(x.name, x.full);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${t.base}/${slug}`, languages: langs(slug) },
    ...share({ title, description, path: `${t.base}/${slug}`, locale: t.locale }),
  };
}

export function IntlAreaView({ slug, lang }: { slug: string; lang: IntlLang }) {
  const t = T[lang];
  const x = areaText(lang, slug)!;
  const a = areas.find((y) => y.slug === slug)!;
  const idx = areas.findIndex((y) => y.slug === slug);
  const isHome = slug === "san-kamphaeng";
  const caseBase = lang === "en" ? "/en/case-study" : "/zh/case-study";
  const pricingPath = lang === "en" ? "/en/pricing" : "/zh/pricing";

  // เคสในพื้นที่ ใช้กติกาเดียวกับหน้าไทย: ตำบลใช้ชื่อตำบล อำเภอใช้ชื่ออำเภอ
  const places = a.full.startsWith("อ.")
    ? [a.full.replace(/^อ\./, "").trim()]
    : [...a.full.matchAll(/ต\.([^\s/]+)/g)].map((m) => m[1]);
  const localCases = workCases
    .filter((c) => c.date && c.area !== "เชียงใหม่" && places.some((pl) => c.area.includes(pl)) && caseText(lang, c.slug))
    .sort((m, n) => n.date!.localeCompare(m.date!))
    .slice(0, 4);

  const faqs = [...x.faqs, ...t.faqs(x.name, x.full)];
  const condos = condosInArea(a.full, a.name);
  const groups = pricing.filter((g) => g.icon === "snow" || g.group.startsWith("ซ่อม"));
  const others = areas.filter((o) => o.slug !== slug && areaTexts(lang)[o.slug]);
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: t.homeName, path: t.home },
    { name: t.hub, path: t.base },
    { name: x.name, path: `${t.base}/${slug}` },
  ];
  const photo = workingPhotos[idx % workingPhotos.length];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <section className="wrap grid gap-10 pt-10 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              {x.full}
            </p>
            <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">{t.h1(x.name)}</h1>
            <p className="lead mt-5">
              {x.note} {t.lead(x.full)}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta={`${lang}-area-line`}>
                <IconLine className="h-5 w-5" />
                {t.line}
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta={`${lang}-area-call`}>
                <IconPhone className="h-5 w-5" />
                {t.call} {site.phone}
              </a>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-soft">
              <IconClock className="h-5 w-5 text-brand-600" />
              {t.hours}
            </p>
            <p className="mt-3 text-sm">
              <Link href={`/area/${slug}`} hrefLang="th" lang="th" className="font-semibold text-brand-700 hover:underline">
                {t.thai}
              </Link>
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image src={photo.src} alt={t.alt(x.name)} width={900} height={1200} priority sizes="(max-width: 1024px) 100vw, 45vw" className="h-[22rem] w-full object-cover sm:h-[26rem]" />
          </div>
        </section>
      </div>

      {x.lead && (
        <section className="section" lang={lang}>
          <div className="wrap max-w-3xl">
            <h2 className="h2">{t.localH(x.name)}</h2>
            <p className="lead mt-4">{x.lead}</p>
            <ul className="mt-9 space-y-5">
              {x.points.map((pt) => (
                <li key={pt.t} className="card p-6">
                  <p className="flex items-start gap-2.5 font-bold">
                    <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                    {pt.t}
                  </p>
                  <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{pt.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {condos.length > 0 && (
        <section className="section" lang={lang}>
          <div className="wrap max-w-4xl">
            <h2 className="h2">{lang === "en" ? `Condos in ${x.name} where I clean aircon in-room` : `${x.name} 我可上门清洗空调的公寓`}</h2>
            <p className="lead mt-3">{lang === "en" ? `${condos.length} condo projects in this area. Same price in every building, no travel fee. Tell me the building and floor before booking.` : `这一带共 ${condos.length} 个公寓项目，各楼同一价格，不收路费。预约前请告诉我楼栋和楼层。`}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {condos.map((c) => <li key={c.en}><Link href={`${lang === "en" ? "/en" : "/zh"}/condo/${c.s}`} className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm hover:border-brand-300 hover:text-brand-700">{c.en}</Link></li>)}
            </ul>
            <Link href={`${lang === "en" ? "/en" : "/zh"}/condo/directory#t-${slug}`} className="btn-ghost mt-6" data-cta={`${lang}-area-condo-dir`}>
              {lang === "en" ? "Search all Chiang Mai condos" : "搜索清迈全部公寓"}
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {localCases.length > 0 && (
        <section className="section bg-sand" lang={lang}>
          <div className="wrap">
            <h2 className="h2">{t.casesH(x.name)}</h2>
            <p className="lead mt-3 max-w-2xl">{t.casesLead}</p>
            <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {localCases.map((c) => {
                const ct = caseText(lang, c.slug)!;
                const i = Math.max(0, c.images.findIndex((im) => im.phase === "หลังทำ"));
                return (
                  <li key={c.slug}>
                    <Link href={`${caseBase}/${c.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
                      <Image src={c.images[i].src} alt={ct.alts[i] ?? ct.title} width={600} height={450} loading="lazy" sizes="(max-width: 640px) 100vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                      <div className="flex flex-1 flex-col p-5">
                        <span className="text-xs font-bold text-brand-600">{ct.service} · {ct.recorded}</span>
                        <h3 className="mt-2 font-bold leading-7 group-hover:text-brand-700">{ct.title.split(":")[0]}</h3>
                        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-brand-700">{t.readCase}<IconChevron className="h-4 w-4" /></span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <section className={`section ${localCases.length > 0 ? "" : "bg-sand"}`} lang={lang}>
        <div className="wrap max-w-3xl">
          <h2 className="h2">{t.howH}</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
            <p>
              {t.base_} {isHome ? t.baseHome : t.baseAway(x.full)} {t.landmarks} {x.landmarks.join(" · ")}
            </p>
            {t.how.map((h) => <p key={h}>{h}</p>)}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {x.landmarks.map((l) => (
              <li key={l} className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-800">
                <IconPin className="h-4 w-4 text-brand-500" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang={lang}>
        <div className="wrap max-w-4xl">
          <h2 className="h2">{t.priceH(x.name)}</h2>
          <p className="lead mt-3">{t.priceLead}</p>
          <div className="mt-8 space-y-6">
            {groups.map((g) => (
              <div key={g.group} className="card overflow-hidden">
                <h3 className="border-b border-slate-100 bg-slate-50 px-5 py-3.5 text-base font-bold sm:px-6">{lang === "en" ? g.groupEn : g.groupZh}</h3>
                <ul className="divide-y divide-slate-100">
                  {g.items.map((it) => (
                    <li key={it.label} className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
                      <span className="text-[15px] text-ink-soft">{lang === "en" ? it.labelEn : it.labelZh}</span>
                      <span className="shrink-0 font-bold text-brand-700">{lang === "en" ? it.priceEn : it.priceZh}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href={pricingPath} className="btn-ghost" data-cta={`${lang}-area-price`}>
              {t.allPrices}
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang={lang}>
        <div className="wrap max-w-3xl">
          <h2 className="h2">{t.faqH(x.name)}</h2>
          <div className="mt-7 space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-bold">{f.q}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" lang={lang}>
        <div className="wrap">
          <h2 className="h2">{t.othersH}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => {
              const ot = areaTexts(lang)[o.slug];
              return (
                <li key={o.slug}>
                  <Link href={`${t.base}/${o.slug}`} className="card group flex h-full items-start gap-3 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift">
                    <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <span>
                      <span className="block font-bold group-hover:text-brand-700">{ot.name}</span>
                      <span className="mt-0.5 block text-xs leading-6 text-ink-soft">{ot.full}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-brand-50 to-white" lang={lang}>
        <div className="wrap max-w-3xl text-center">
          <h2 className="h2">{t.ctaH(x.name)}</h2>
          <p className="lead mt-4">{t.cta(x.full, isHome)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`${lang}-area-cta-line`}>
              <IconLine className="h-5 w-5" />
              {t.line}
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta={`${lang}-area-cta-call`}>
              <IconPhone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
