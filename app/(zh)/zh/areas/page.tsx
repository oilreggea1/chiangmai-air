import type { Metadata } from "next";
import Link from "next/link";
import { site, areas, coverage, coverageTotal } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IntlCoverage } from "@/components/IntlCoverage";
import { areaRoman } from "@/lib/intl";
import { IconPhone, IconLine, IconPin, IconChevron } from "@/components/Icons";

/**
 * หน้าพื้นที่บริการภาษาจีน (24 ก.ย. 2569) คู่กับ /en/areas และ /area
 * เดิมฝั่งจีนไม่มีหน้านี้ ทำให้ /area กับ /en/areas ประกาศ hreflang ได้ไม่ครบสามภาษา
 * รายชื่ออำเภอ/ตำบลดึงจาก coverage ที่เดียว ห้ามพิมพ์ซ้ำ
 */
const title = "清迈服务范围 | Pro Fresh Care 空调清洗维修";
const description =
  "覆盖清迈市区与 San Sai 县全部乡，以及 Hang Dong 北部、Mae On 平原、San Kamphaeng、Saraphi、Doi Saket，范围内不收车费。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/zh/areas",
    languages: { "th-TH": "/area", "en-US": "/en/areas", "zh-CN": "/zh/areas", "x-default": "/area" },
  },
  ...share({ title, description, path: `/zh/areas`, locale: "zh_CN" }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "中文", path: "/zh" },
  { name: "服务范围", path: "/zh/areas" },
];


const faqs = [
  { q: "尼曼路和古城在服务范围内吗？", a: "在。两处都属于清迈市区 Mueang Chiang Mai，整个市区我都接，范围内不加收车费。" },
  { q: "我住的区域要加车费吗？", a: "不加。服务范围内所有地方都是同一个价格。如果您在范围之外，请用 LINE 把位置发给我，我会直接告诉您能不能去、车费大约多少。" },
  { q: "需要提前多久预约？", a: "一般 24 小时内可以上门，有空档当天也能到。例外是 2 月到 4 月的烧芭季，全省需求量大，建议提前一周预约。" },
  { q: "公寓和酒店接吗？", a: "接。住宅、公寓、宿舍、酒店、餐厅和办公室都可以。多台一起清洗有优惠价，也能开公司抬头的发票。" },
];

export default function ZhAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="zh-CN">
        <section className="wrap max-w-3xl pt-12 pb-14 text-center">
          <p className="eyebrow justify-center">
            <IconPin className="h-4 w-4" />
            据点在 San Kamphaeng · 清迈东侧
          </p>
          <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
            清迈服务范围
          </h1>
          <p className="lead mt-5">
            我以 San Kamphaeng 为据点，覆盖 {coverage.length} 个县共 {coverageTotal} 个乡。
            清迈市区（Mueang Chiang Mai）和 San Sai 县全部乡都接，Hang Dong 县只接北部靠近市区的乡，
            范围内价格一致，不加收车费。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta="zh-area-line">
              <IconLine className="h-5 w-5" />
              用 LINE 确认我的区域
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta="zh-area-call">
              <IconPhone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </section>
      </div>

      <section className="section pt-4" lang="zh-CN">
        <div className="wrap">
          <h2 className="h2">覆盖的县与乡</h2>
          <p className="lead mt-3">
            泰国地址里的「乡」写作 ตำบล，「县」写作 อำเภอ。
            下面按泰文原名列出，方便您对照自己的地址，或直接把名字给司机看。
          </p>
          <div className="mt-7">
            <IntlCoverage lang="zh-CN" withThai />
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-soft">
            地址不在名单上也可以先问。请用 LINE 把定位发给我，我会直接回复能不能去，以及要不要另外算车费。
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap">
          <h2 className="h2">各区域页面</h2>
          <p className="lead mt-3 max-w-2xl">
            每个区域的空调工作特点、当地常见问题和附近的真实案例。每页都附有泰文版链接，方便转给房东、中介或公寓前台。
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/zh/areas/${a.slug}`}
                  className="card flex items-center justify-between gap-3 px-5 py-4 transition-all hover:shadow-lift"
                >
                  <span className="text-sm font-semibold">{areaRoman(a.name)} <span className="ml-1 text-xs font-normal text-ink-soft" lang="th">{a.name}</span></span>
                </Link>
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
            <Link href="/zh/pricing" className="btn-ghost">
              查看价格
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
