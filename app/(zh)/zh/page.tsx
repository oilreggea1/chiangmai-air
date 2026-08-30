import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos, coverage, coverageTotal, thumbOf, p, btu } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import {
  IconPhone, IconLine, IconCheck, IconPin, IconSnow, IconWrench, IconInstall, IconMove, IconWasher, IconChevron,
} from "@/components/Icons";

/** ชื่ออำเภอภาษาจีน ให้ลูกค้าจีนอ่านออกโดยไม่ต้องแปลเอง */
const amphoeZh: Record<string, string> = {
  "อ.สันกำแพง": "San Kamphaeng 县",
  "อ.สารภี": "Saraphi 县",
  "อ.เมืองเชียงใหม่": "清迈市区 Mueang Chiang Mai（全部乡）",
  "อ.ดอยสะเก็ด": "Doi Saket 县",
  "อ.สันทราย": "San Sai 县（仅 San Phra Net 乡）",
};

const title = "清迈空调清洗维修 | Pro Fresh Care 泰国清迈";
const description =
  `清迈本地空调清洗、维修、安装、移机及洗衣机内桶清洗。壁挂机清洗每台 ${p.wash.std} 泰铢，三台以上每台 ${p.wash.stdBulk} 泰铢，价格全部公开，开工前先报价。可用 LINE 文字沟通，可开公司抬头收据。`;

export const metadata: Metadata = {
  // absolute กันไม่ให้ template ภาษาไทยจาก layout มาต่อท้าย
  title: { absolute: title },
  description,
  keywords: [
    "清迈空调清洗", "清迈空调维修", "清迈洗空调", "清迈空调安装",
    "清迈洗衣机清洗", "清迈家电清洗", "尼曼路空调清洗",
  ],
  alternates: {
    canonical: "/zh",
    languages: { "th-TH": "/", "en-US": "/en", "zh-CN": "/zh", "x-default": "/" },
  },
  ...share({ title, description, path: `/zh`, type: "website", locale: "zh_CN" }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "中文", path: "/zh" },
];

const servicesZh = [
  {
    icon: IconSnow,
    name: "空调清洗",
    price: `${p.wash.std} 泰铢 · 三台以上 ${p.wash.stdBulk}`,
    desc: `壁挂机常规清洗每台 ${p.wash.std} 泰铢，三台以上每台 ${p.wash.stdBulk} 泰铢。深度拆洗 ${p.wash.premium} 泰铢，按机型大小计价，会把风轮和所有可拆部件取下单独清洗消毒。如果您的机器没有异味且定期清洗，我会告诉您常规清洗就够了。`,
  },
  {
    icon: IconWrench,
    name: "空调维修",
    price: `检测费 ${p.repair.diagnostic} 泰铢`,
    desc: `不制冷、漏水、有异响、频繁停机。检测费 ${p.repair.diagnostic} 泰铢，确定维修后从维修费中扣除。动手之前一定先报价给您确认。`,
  },
  {
    icon: IconInstall,
    name: "新机安装",
    price: `${p.install.small} 泰铢起`,
    desc: `${btu.installSmall} BTU 为 ${p.install.small} 泰铢，${btu.installLarge} BTU 为 ${p.install.large} 泰铢。每次安装都会完整抽真空，这一步决定压缩机的使用寿命。价格已含支架、4 米以内的铜管和线槽。保修最长一年。`,
  },
  {
    icon: IconMove,
    name: "空调移机",
    price: `${p.install.relocate} 泰铢`,
    desc: `搬家或换房间。拆管前会先把冷媒回收进室外机，所以之后不需要重新加冷媒。只拆不装为 ${p.install.removeOnly} 泰铢。`,
  },
  {
    icon: IconSnow,
    name: "吊顶机与嵌入机清洗",
    price: `${p.wash.suspended} 泰铢起`,
    desc: `餐厅、咖啡店和办公室多用吊顶机或嵌入天花板的机型。机器位置高，下方的桌椅设备都要先铺布遮好，所以比壁挂机费时。吊顶机 ${p.wash.suspended} 泰铢起，嵌入机 ${p.wash.cassette} 泰铢起。实际价格看机器大小和天花板高度，我会在开工前先告诉您。`,
  },
  {
    icon: IconInstall,
    name: "销售新机与二手机 · 旧机折抵",
    price: "按机型报价",
    desc: "新机和检测过的二手机都有，含安装。机器和安装由我一人负责，保修同时涵盖机器和安装。机器价格随机型和当期促销变动，所以按机型报价。二手机机身保修 1 个月。旧机也可以折抵，但要先看到实机才能定价。",
  },
  {
    icon: IconWasher,
    name: "洗衣机内桶清洗",
    price: `${p.washer.topLoad} 泰铢起`,
    desc: `把内桶整个拆下来逐件清洗。污垢主要积在内桶外壁，单靠水流碰不到。上开式 ${p.washer.topLoad} 泰铢起按容量计价，前开式 ${p.washer.frontLoad} 泰铢起，因为拆装更复杂。每台约三小时，保修 30 天。`,
  },
];

const faqs = [
  {
    q: "师傅会说中文吗？",
    a: "请用 LINE 文字联系我，我用翻译软件回复您，沟通没有问题。报价、上门时间和工作内容全部用文字确认，双方都留有记录，比电话更清楚。",
  },
  {
    q: "清迈空调清洗多少钱？",
    a: `壁挂机 ${btu.washStd} BTU 每台 ${p.wash.std} 泰铢，三台以上每台 ${p.wash.stdBulk} 泰铢。${btu.washBig} BTU 每台 ${p.wash.big} 泰铢，两台以上每台 ${p.wash.bigBulk} 泰铢。深度拆洗每台 ${p.wash.premium} 泰铢，按机型大小计价。`,
  },
  {
    q: "价格怎么算？",
    a: "所有客户同一个价格。开工前我会把总价报给您确认，完工后按报价付款。",
  },
  {
    q: "清迈的空调多久洗一次？",
    a: "比其他城市要勤一些。二月到四月是烧芭季节，空气中的烟尘比平时多很多，滤网很快就堵。建议一月做一次彻底清洗，季节中每 2–4 周自己冲洗滤网，五六月再洗一次。",
  },
  {
    q: "可以开收据吗？",
    a: "可以。收据抬头为 Cher Solutions Co., Ltd.，可作为付款凭证，餐厅、咖啡店、酒店、民宿和办公室都适用。公司目前尚未登记增值税，因此无法开具增值税发票（ใบกำกับภาษี）。如果贵司报账必须使用增值税发票，请在下单前先告知，以免耽误。"
  },
  {
    q: "公寓和出租房可以做吗？",
    a: "可以。住宅、公寓、宿舍、酒店、餐厅和办公室都做。如果您是房东或民宿业主，需要在客人退房和入住之间清洗，请告诉我房间数量和地址，我会配合您的时间安排。",
  },
];

/**
 * แถบรูปผลงานของหน้าจีน — alt เขียนจากภาพจริงทีละใบเช่นเดียวกับหน้าอังกฤษ
 * เป็นคนละข้อความกับฝั่งอังกฤษ ไม่ใช่การแปลต่อกันมา
 */
const workPhotosZh = [
  {
    src: "/work/air-2569-02.jpg",
    alt: "身穿 Pro Fresh Care 工作服的师傅正在打开壁挂式空调面板，下方家具已经铺好条纹防尘布",
    cap: "动手之前先铺防尘布",
  },
  {
    src: "/work/air-2569-04.jpg",
    alt: "师傅腰挂工具带，把蓝色接水布撑开围住位置较高的室内机，然后才开始冲洗",
    cap: "围上接水布，水不会溅到墙面",
  },
  {
    src: "/work/air-2569-05.jpg",
    alt: "清洗前的室内机内部特写，表面积着一道道发黑的污垢",
    cap: "清洗前内部通常是这个样子",
  },
  {
    src: "/work/air-2569-14.jpg",
    alt: "拆下来的两片空调滤网放在瓷砖地面上，网面上可以看到一层灰色积尘",
    cap: "先把滤网取下来",
  },
  {
    src: "/work/air-2569-22.jpg",
    alt: "拆下的白色塑料面板和出风格栅摆在条纹防尘布上，准备逐件单独清洗",
    cap: "可拆的部件逐件单独清洗",
  },
  {
    src: "/work/air-2569-16.jpg",
    alt: "洗净后的滤网举起对着光，网眼透亮可以直接看穿",
    cap: "同一张滤网洗完之后",
  },
];

export default function ChinesePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 via-white to-white" lang="zh-CN">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              位于 San Kamphaeng · 服务清迈市区全部乡及周边
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.35] font-extrabold sm:text-[2.5rem]">
              清迈空调清洗 · 维修 · 安装
            </h1>
            <p className="lead mt-5">
              我是 Arm，所有工作都由我本人上门完成。每项收费都公开标价，
              开工前先把总价报给您确认，施工前地面和家具铺两层防尘布，
              收工前把现场清理干净。用 LINE 发一张机器照片给我，当天就能给您报价。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="zh-line">
                <IconLine className="h-5 w-5" />
                用 LINE 联系我
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="zh-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              空调服务 LINE {site.lineId} · 洗衣机清洗 LINE {site.lineId2} · 周一至周六 8:00–18:00
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={heroPhotos.en.src}
              alt="清迈空调清洗师傅正在客户家中清洗室外机"
              width={900}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[22rem] w-full object-cover sm:h-[27rem]"
            />
          </div>
        </section>
      </div>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">关于语言沟通</h2>
            <p className="mt-3 text-[15px] leading-8 text-ink-soft">
              我本人不会说中文。请用 LINE 发文字消息给我，我会用翻译软件回复您。
              报价、上门时间和工作范围都用文字写清楚，双方都留有记录，
              比电话沟通更不容易出错。您也可以直接拍照片发给我，
              很多问题看到照片就能先判断个大概。
            </p>
          </div>
        </div>
      </section>

      <section className="section" lang="zh-CN">
        <div className="wrap">
          <h2 className="h2">服务项目与价格</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {servicesZh.map((s) => (
              <div key={s.name} className="card flex flex-col p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/70">
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold">{s.name}</h3>
                  <span className="font-bold text-brand-700">{s.price}</span>
                </div>
                <p className="mt-2.5 flex-1 text-[15px] leading-8 text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/zh/pricing" className="btn-ghost">
              查看完整价目表
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">每一单都包含这些</h2>
          <ul className="mt-6 space-y-3.5">
            {[
              "开工前先报价。现场如果发现额外情况，我会先停下来问您。",
              "地面和家具铺两层防尘布，收工前把现场清理干净。",
              "当着您的面测量冷媒。冷媒不缺就不加，因为加多了会缩短压缩机寿命。",
              "更换任何零件都会把旧件拿给您看。",
              "清洗保修 30 天，新机安装保修最长一年。",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap">
          <h2 className="h2">实际施工照片</h2>
          <p className="lead mt-3 max-w-2xl">
            清迈本地实拍，按施工顺序排列。
          </p>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workPhotosZh.map((ph) => (
              <li key={ph.src} className="card overflow-hidden">
                <Image
                  src={thumbOf(ph.src)}
                  alt={ph.alt}
                  width={480}
                  height={480}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-square w-full bg-slate-100 object-cover"
                />
                <p className="px-4 py-3 text-sm leading-6 text-ink-soft">{ph.cap}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">预约流程</h2>
          <p className="lead mt-3">
            四步完成，不收订金，完工并经您确认之后才付款。
          </p>
          <ol className="mt-8 space-y-4">
            {[
              {
                t: "用 LINE 发照片和所在区域",
                d: "中文发过来就可以。拍一张室内机的照片，说明大概几台、在清迈哪个区域，我就能判断。",
              },
              {
                t: "收到报价和上门时间",
                d: "工作时间内通常几小时内回复。报价含车费，是整单的总价，也是最后实际支付的金额。",
              },
              {
                t: "上门先铺防尘布再动手",
                d: "地面和家具先铺两层。如果现场发现照片上看不到的情况，我会先停下来问您，确认后才继续。",
              },
              {
                t: "完工验收后付款",
                d: "现金或泰国银行转账均可。需要公司抬头收据请提前说明。",
              },
            ].map((x, i) => (
              <li key={x.t} className="card flex items-start gap-4 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-700 text-base font-bold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-bold">{x.t}</span>
                  <span className="mt-1 block text-[15px] leading-8 text-ink-soft">{x.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">服务范围</h2>
          <p className="lead mt-3">
            我以 San Kamphaeng 为据点，覆盖 {coverage.length} 个县共 {coverageTotal} 个乡，
            范围内不加收车费。清迈市区（Mueang Chiang Mai）全部乡都接，包括尼曼路一带、古城、Santitham
            和机场周边；此外还有 San Kamphaeng、Saraphi、Doi Saket，以及 San Sai 的 San Phra Net 乡。
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {coverage.map((c) => (
              <li key={c.amphoe} className="card flex items-center justify-between gap-3 px-5 py-4">
                <span className="text-sm font-semibold">
                  {amphoeZh[c.amphoe] ?? c.amphoe}
                </span>
                <span className="shrink-0 text-xs text-ink-soft">{c.tambons.length} 个乡</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
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
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line" data-cta="zh-faq-line">
              <IconLine className="h-5 w-5" />
              用 LINE 咨询
            </a>
            <Link href="/zh/pricing" className="btn-ghost">
              完整价目表
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/en" className="btn-ghost" hrefLang="en">
              English
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
