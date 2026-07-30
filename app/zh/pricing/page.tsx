import type { Metadata } from "next";
import Link from "next/link";
import { site, pricing } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { IconPhone, IconLine, IconCheck, IconChevron } from "@/components/Icons";

const title = "清迈空调清洗价格表 | Pro Fresh Care";
const description =
  "清迈空调清洗、维修、安装、移机及洗衣机清洗完整价目表。壁挂机 550 泰铢起，深度拆洗 2,000 泰铢，吊顶机 1,300 泰铢起。中国客户与泰国客户同价，开工前先报价。";

export const metadata: Metadata = {
  // absolute กันไม่ให้ template ภาษาไทยจาก layout มาต่อท้าย
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/zh/pricing",
    languages: { "th-TH": "/price", "en-US": "/en/pricing", "zh-CN": "/zh/pricing" },
  },
  openGraph: { title, description, url: `${site.url}/zh/pricing`, type: "article", locale: "zh_CN" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "中文", path: "/zh" },
  { name: "价格", path: "/zh/pricing" },
];

/** ชื่อกลุ่มราคาแปลจีน แผงราคาดึงจาก pricing ตัวเดียวกับหน้าไทย ตัวเลขจึงตรงกันเสมอ */
const groupZh: Record<string, string> = {
  "ล้างแอร์ติดผนัง": "壁挂式空调清洗",
  "ล้างแอร์แขวนและแอร์ 4 ทิศทาง": "吊顶机与四面出风嵌入机清洗",
  "ติดตั้งแอร์ใหม่": "新机安装",
  "ซ่อมและบริการอื่น ๆ": "维修及其他服务",
  "แพ็กเกจห้องปลอดฝุ่น PM2.5": "PM2.5 防尘房套餐",
  "ล้างเครื่องซักผ้า ฝาบน": "上开式洗衣机清洗",
  "ล้างเครื่องซักผ้า ฝาหน้า": "前开式洗衣机清洗",
};

const faqs = [
  {
    q: "中国客户的价格和泰国客户一样吗？",
    a: "完全一样。这一页的数字和泰文价格页是同一份数据，改一处两边同时变，不存在两套价格。开工前我会把总价写给您确认。",
  },
  {
    q: "价格里包含上门费吗？",
    a: "包含。服务范围内不另收车费，也就是 San Kamphaeng 周边约 20 公里，含尼曼路、古城、Santitham、Hang Dong、Saraphi、San Sai 和 Doi Saket。",
  },
  {
    q: "怎么知道我家是哪种机型？",
    a: "壁挂机是挂在墙上的长方形室内机；四面出风嵌入机是嵌在天花板里、四边出风的方形面板；吊顶机是吊在天花板下方的长条机，餐厅和商铺常见。不确定的话拍张照片用 LINE 发给我，我看一眼就能告诉您。",
  },
  {
    q: "怎么付款？",
    a: "现金或泰国银行转账，完工后付。付款前我会先带您看完成的情况，确认金额和报价一致。",
  },
];

export default function ZhPricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="zh-CN">
        <section className="wrap max-w-3xl pt-12 pb-14 text-center">
          <p className="eyebrow justify-center">价格全部公开 · 不加价</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.35] font-extrabold sm:text-[2.4rem]">
            清迈空调清洗价格表
          </h1>
          <p className="lead mt-5">
            下面是我全部的收费标准，和泰文页面上的数字完全一致。
            中国客户与泰国客户同价，开工前我会把总价告诉您确认。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta="zh-price-line">
              <IconLine className="h-5 w-5" />
              用 LINE 询价
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta="zh-price-call">
              <IconPhone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </section>
      </div>

      <section className="section pt-4" lang="zh-CN">
        <div className="wrap max-w-4xl space-y-6">
          {pricing.map((g) => (
            <div key={g.group} className="card p-6 sm:p-7">
              <h2 className="text-lg font-bold sm:text-xl">
                {groupZh[g.group] ?? g.group}
                <span className="ml-2 text-sm font-normal text-ink-soft">{g.group}</span>
              </h2>
              <ul className="mt-5 divide-y divide-slate-100">
                {g.items.map((it) => (
                  <li key={it.label} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-[15px] leading-7 text-ink-soft">{it.label}</span>
                    <span className="shrink-0 font-bold text-brand-700">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm leading-7 text-ink-soft">
            项目名称保留泰文，是因为这就是我报价时使用的原始说法。
            任何一行看不懂，用 LINE 拍照或直接问我，我会用中文解释。
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">每一单都包含这些</h2>
          <ul className="mt-6 space-y-3.5">
            {[
              "开工前先报价，事后不加钱。",
              "地面和家具铺两层防尘布，收工前清理现场。",
              "当着您的面量冷媒，不缺就不加。",
              "更换零件会把旧件拿给您看。",
              "清洗保修 30 天，新机安装保修最长一年。",
              "可开公司抬头收据。公司尚未登记增值税，暂无法开具增值税发票。",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">常见问题</h2>
          <div className="mt-7 space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-bold">{f.q}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/zh" className="btn-ghost">
              返回中文首页
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/price" className="btn-ghost" hrefLang="th">
              ดูราคาภาษาไทย
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
