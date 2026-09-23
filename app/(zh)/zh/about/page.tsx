import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos } from "@/lib/site";
import { breadcrumbSchema, jsonLd, PERSON_ID } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconPin, IconClock, IconShield, IconEngineer } from "@/components/Icons";

/**
 * หน้า About ภาษาจีน (24 ก.ย. 2569) คู่กับ /en/about และ /about
 * ข้อมูลบริษัทดึงจาก site ยกเว้นที่อยู่ภาษาอังกฤษ (addressEn) ต้องตรงกับ site.address
 * คำสัญญา 6 ข้อแปลจากหน้าไทย ห้ามเพิ่มคำรับปากที่ฝั่งไทยไม่มี · รูปทุกใบเปิดดูแล้วตามกติกาเจ้าของ
 */
const title = "关于 Arm 与 Pro Fresh Care 清迈 | Cher Solutions Co., Ltd.";
const description =
  "Arm 是 Pro Fresh Care 的技师，每一单都由他本人完成。注册公司 Cher Solutions Co., Ltd.，位于清迈 San Kamphaeng。价格公开，开工前报价，可开增值税发票。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/zh/about",
    languages: { "th-TH": "/about", "en-US": "/en/about", "zh-CN": "/zh/about", "x-default": "/about" },
  },
  ...share({ title, description, path: `/zh/about`, type: "profile", locale: "zh_CN", image: heroPhotos.enAbout }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "中文", path: "/zh" },
  { name: "关于", path: "/zh/about" },
];

const addressEn = "168/14 Moo 12, San Kamphaeng, San Kamphaeng District, Chiang Mai 50130";

const promises = [
  { t: "每次都先报价再动手", d: "无论工作大小，开工前都会给您确定的金额。现场如果有增加项目，我会先停下来问您，确认后才继续。" },
  { t: "加冷媒之前先测量", d: "冷媒加多了会让压力升高，缩短压缩机寿命。我会当着您的面测量，不缺就不加，并如实告诉您。" },
  { t: "换下的零件都给您看", d: "拆下来的旧零件会拿给您看并说明故障原因，让您清楚钱花在了哪里。" },
  { t: "即使做不成这单也说实话", d: "维修费超过新机价格一半时，我会告诉您不划算，并列出可选方案。决定权在您。" },
  { t: "家里保持原样", d: "动手前铺两层防尘布，收工前把现场清理干净，您不需要再做任何清洁。" },
  { t: "保修是真的", d: "保修期内同样的问题再出现，我免费上门处理。" },
];

const facts = [
  { k: "服务品牌", v: "Pro Fresh Care（โปรเฟรชแคร์）" },
  { k: "注册公司", v: site.legalNameEn },
  { k: "税号", v: site.taxId },
  { k: "地址", v: addressEn },
  { k: "营业时间", v: "周一至周六 08:00–18:00，周日休息。非营业时间可另约，加收费用会先报价。" },
  { k: "发票与收据", v: "已登记增值税，可按需开具增值税发票和公司抬头收据。" },
];

const photos = [
  { src: "/work/chang-arm-lang-air-01.jpg", alt: "Arm 站在梯子上打开窗边壁挂机的面板，房间已铺好防尘布" },
  { src: "/work/air-2569-04.jpg", alt: "腰挂工具带的师傅把蓝色接水布撑开围住位置较高的室内机" },
  { src: "/work/air-2569-02.jpg", alt: "身穿 Pro Fresh Care 工作服的师傅打开壁挂机，下方家具铺着条纹防尘布" },
];

export default function ZhAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
          url: `${site.url}/zh/about`,
          inLanguage: "zh-CN",
          mainEntity: { "@id": `${site.url}/#business` },
          about: { "@id": PERSON_ID },
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="zh-CN">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              清迈 San Kamphaeng
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.35] font-extrabold sm:text-[2.4rem]">
              我是 Arm。您预约 Pro Fresh Care，上门的就是我本人。
            </h1>
            <p className="lead mt-5">
              Pro Fresh Care 是 {site.legalNameEn} 的服务品牌，公司注册在清迈东侧的 San Kamphaeng。
              我在清迈全城提供空调清洗、维修、安装和移机服务，也拆洗洗衣机。每一单开工前先报价，工作由我本人完成，
              所以您在 LINE 上联系的人，就是了解您机器情况的人。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="zh-about-line">
                <IconLine className="h-5 w-5" />
                用 LINE 联系我
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="zh-about-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image src={heroPhotos.enAbout.src} alt="Pro Fresh Care 的技师 Arm 正用射钉枪把线槽固定到墙上，下方家具已盖好" width={900} height={1200} priority sizes="(max-width: 1024px) 100vw, 45vw" className="h-[22rem] w-full object-cover sm:h-[27rem]" />
          </div>
        </section>
      </div>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-4xl">
          <h2 className="h2">公司资料</h2>
          <p className="lead mt-3">房东、物业或会计通常会问到的信息。</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k} className="card p-5">
                <dt className="text-xs font-bold tracking-wide text-brand-700 uppercase">{f.k}</dt>
                <dd className="mt-1.5 text-[15px] leading-7 text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">上门的是谁</h2>
          <div className="card mt-6 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                <IconEngineer className="h-7 w-7" />
              </span>
              <div>
                <p className="text-lg font-bold">Arm</p>
                <p className="text-sm font-medium text-brand-700">每一单的负责技师 · 从业超过 5 年</p>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-8 text-ink-soft">
              我认为您应该一开始就知道进您家门的是谁；以后同一台机器需要再看，或者保修上门，找到的也是记得它情况的人。所以我不派别人来。
            </p>
            <p className="mt-4 text-[15px] leading-8 text-ink-soft">
              每一单我最看重两件事：清洗效果干净、现场收拾整齐，以及开工前把价格说完整。现场需要增加项目，一定先停下来问您。
            </p>
            <p className="mt-4 text-[15px] leading-8 text-ink-soft">
              我本人不会说中文，在 LINE 上用翻译软件与您文字沟通。句子简短明了最容易传达准确，而且双方都留有书面记录。文字沟通比打电话有效得多。
            </p>
          </div>
        </div>
      </section>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-4xl">
          <h2 className="h2">我对每位客户的六个承诺</h2>
          <p className="lead mt-3">这是我站在您家里做决定时遵守的规则。</p>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2">
            {promises.map((x) => (
              <li key={x.t} className="card p-6">
                <p className="flex items-start gap-2.5 font-bold">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  {x.t}
                </p>
                <p className="mt-2.5 text-sm leading-7 text-ink-soft">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap">
          <h2 className="h2">工作中</h2>
          <p className="lead mt-3 max-w-2xl">统一工作服，先铺防尘布，收工后房间恢复原样。</p>
          <ul className="mt-9 grid gap-5 sm:grid-cols-3">
            {photos.map((ph) => (
              <li key={ph.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <Image src={ph.src} alt={ph.alt} width={768} height={1024} loading="lazy" sizes="(max-width: 640px) 100vw, 33vw" className="h-72 w-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">联系方式</h2>
          <ul className="mt-7 space-y-4">
            <li className="card flex items-start gap-4 p-5">
              <IconLine className="mt-0.5 h-6 w-6 shrink-0 text-[#06C755]" />
              <span>
                <span className="block font-bold">LINE 空调服务：{site.lineId}</span>
                <span className="mt-1 block text-sm leading-7 text-ink-soft">清洗、维修、安装、移机。发一张机器照片、大概几台和所在区域即可。</span>
              </span>
            </li>
            <li className="card flex items-start gap-4 p-5">
              <IconLine className="mt-0.5 h-6 w-6 shrink-0 text-[#06C755]" />
              <span>
                <span className="block font-bold">LINE 洗衣机清洗：{site.lineId2}</span>
                <span className="mt-1 block text-sm leading-7 text-ink-soft">洗衣机内桶清洗请通过这个账号预约。</span>
              </span>
            </li>
            <li className="card flex items-start gap-4 p-5">
              <IconPhone className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" />
              <span>
                <span className="block font-bold">{site.phone} · {site.phone2}</span>
                <span className="mt-1 block text-sm leading-7 text-ink-soft">电话只能用泰语沟通，中文请使用 LINE 文字。</span>
              </span>
            </li>
            <li className="card flex items-start gap-4 p-5">
              <IconClock className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" />
              <span>
                <span className="block font-bold">周一至周六 08:00–18:00</span>
                <span className="mt-1 block text-sm leading-7 text-ink-soft">周日休息。通常 24 小时内可上门，二月至四月烧芭季节全城预约集中，请提前预约。</span>
              </span>
            </li>
          </ul>
          <p className="mt-6 flex items-start gap-2.5 text-sm leading-7 text-ink-soft">
            <IconShield className="mt-1 h-5 w-5 shrink-0 text-mint" />
            不收订金。完工验收后以现金或泰国银行转账付款。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/zh" className="btn-ghost">中文首页<IconChevron className="h-4 w-4" /></Link>
            <Link href="/zh/pricing" className="btn-ghost">完整价目表<IconChevron className="h-4 w-4" /></Link>
            <Link href="/en/about" className="btn-ghost" hrefLang="en">English<IconChevron className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
