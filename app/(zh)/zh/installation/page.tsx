import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos, p, btu } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconShield, IconInstall, IconMove } from "@/components/Icons";
import { IntlReels, intlReelSets, reelsByIds } from "@/components/ReelsShowcase";
import { RecentJobs } from "@/components/RecentJobs";

/**
 * หน้าติดตั้งแอร์ภาษาจีน (24 ก.ย. 2569) เนื้อหาคู่กับ /en/installation และ /service/tid-tang-air
 * ตัวเลขทุกตัวจาก p / btu เงื่อนไขประกัน (ซื้อกับเรา 1 ปี / เครื่องลูกค้า 6 เดือน) และท่อ 4 ม. ห้ามแต่งใหม่
 * รูปทุกใบเปิดดูแล้วตามกติกาเจ้าของ (ไม่มีมือ/เล็บที่เห็นคราบ)
 */
const title = "清迈空调安装与移机 | Pro Fresh Care";
const description =
  `清迈空调安装 ${p.install.small} 泰铢起，已含支架、4 米以内铜管和线槽。Lazada、Shopee 或商场购买的机器均可安装。移机 ${p.install.relocate} 泰铢。开工前先报价确认。`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["清迈空调安装", "清迈装空调", "清迈空调移机", "清迈网购空调安装", "清迈空调拆装"],
  alternates: {
    canonical: "/zh/installation",
    languages: { "th-TH": "/service/tid-tang-air", "en-US": "/en/installation", "zh-CN": "/zh/installation", "x-default": "/service/tid-tang-air" },
  },
  ...share({ title, description, path: `/zh/installation`, locale: "zh_CN", image: heroPhotos.enInstall }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "中文", path: "/zh" },
  { name: "安装", path: "/zh/installation" },
];

const included = [
  "室内机壁挂支架，以及室外机的支架或底座",
  "4 米以内的保温铜管和排水管",
  "沿墙裁切安装的线槽，把管路整齐包住",
  "注入冷媒前对管路完整抽真空，每一单都做，没有例外",
  "交付前测试制冷效果、测量电流并检查是否泄漏",
  "教您遥控器的使用方法和日常保养要点",
];

const steps = [
  { t: "先勘察现场", d: "确认室内机位置、室外机放哪里、管路要走多远、电路情况如何。这样才能一开始就给您准确的总价，而不是最后才加钱。" },
  { t: "固定支架与室内机", d: "支架打进能真正承重的结构里，机器调平，让冷凝水顺畅流进排水管，避免日后漏水。" },
  { t: "铺设管路与排水", d: "铜管弯折不打折、全程包保温、外面加线槽。排水管留足坡度。" },
  { t: "系统抽真空", d: "把管路里的空气和水分抽干净，直到压力表稳定保持真空。残留水分是压缩机过早损坏的隐形原因，这一步我从不省略。" },
  { t: "测试并交付", d: "开机测制冷、测电流、查泄漏，然后向您说明遥控器和平时需要留意的地方。" },
];

const faqs = [
  {
    q: `${p.install.small} 泰铢的安装费包含哪些？`,
    a: "包含人工、壁挂支架、4 米以内的保温铜管和排水管，以及同样长度的线槽。如果您家的布局需要更长的管路，我会在开工前先告诉您材料的额外费用，绝不事后加价。",
  },
  {
    q: "我在 Lazada、Shopee 或 TikTok Shop 买的机器，可以帮忙安装吗？",
    a: "可以，现在这类安装占了很大一部分。请用 LINE 把机型和送货日期发给我，我会预留送到之后的时段。安装费和向我购买机器的价格相同。区别在于安装工作的保修期：自备机器 6 个月，向我购买 1 年，因为后者从一开始就由我检查过机器。机器本身的保修由卖家或厂家负责。",
  },
  {
    q: "网店没有附支架，铜管也不够长，怎么办？",
    a: "没关系。有些网店的机器不带支架或者铜管很短。支架和 4 米以内的铜管已经包含在我的价格里，少了支架不会改变您付的金额。",
  },
  {
    q: "我的房间需要多少 BTU？",
    a: `一般来说，12 到 16 平方米的卧室用 ${btu.installSmall} BTU，20 到 30 平方米的客厅用 18,000 到 24,000 BTU。西晒或玻璃多的房间建议加大一档。把房间面积和朝向发给我，我免费帮您计算。`,
  },
  {
    q: "可以连机器一起买吗？",
    a: "可以。我销售主流品牌的新机和检测过的二手机，并由我本人安装。机器价格随机型和当月促销变动，所以在 LINE 上按机型报价。机器和安装都由一个人负责，出了问题不用两边扯皮，安装保修也是 1 年。",
  },
  {
    q: "安装需要多长时间？",
    a: "管路较短的普通壁挂机通常两到三个小时。管路长、室外机位置难或一户多台会更久，报价时我会告诉您预计时间。",
  },
  {
    q: "搬家或换房间，可以帮忙移机吗？",
    a: `可以。移机 ${p.install.relocate} 泰铢，包含拆机、在新位置重新安装，以及重新抽真空。拆管前先把冷媒回收进室外机，大多数情况不需要再花钱加冷媒。只拆不装为 ${p.install.removeOnly} 泰铢。`,
  },
];

const photos = [
  { src: "/work/tid-tang-air-005.jpg", alt: "戴手套的师傅把钢制安装板贴在墙上，标记新室内机的位置" },
  { src: "/work/tid-tang-air-003.jpg", alt: "刚装好的 Hitachi 壁挂机，线槽整齐地从左侧引出" },
  { src: "/work/tid-tang-air-007.jpg", alt: "沿墙顶部安装的米色线槽，包住新装空调的铜管" },
];

export default function ZhInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="zh-CN">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconInstall className="h-4 w-4" />
              新机安装 · 移机 · 网购机器安装
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.35] font-extrabold sm:text-[2.4rem]">
              清迈空调安装，{p.install.small} 泰铢起全包
            </h1>
            <p className="lead mt-5">
              价格已含支架、4 米以内铜管和线槽，注入冷媒前一定完整抽真空。
              您可以自带 Lazada、Shopee、TikTok Shop 或商场购买的机器，也可以向我购买机器并享受更长的保修。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="zh-install-line">
                <IconLine className="h-5 w-5" />
                用 LINE 发送机型
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="zh-install-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">请用 LINE 文字联系，我用翻译软件回复 · 周一至周六 8:00–18:00</p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image src={heroPhotos.enInstall.src} alt="拆封中的全新 Daikin 室内机放在铺好防尘布的地面上，准备安装" width={900} height={1200} priority sizes="(max-width: 1024px) 100vw, 45vw" className="h-[22rem] w-full object-cover sm:h-[27rem]" />
          </div>
        </section>
      </div>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-4xl">
          <h2 className="h2">按机器大小计价</h2>
          <p className="lead mt-3">每台一个价格，已经包含了别处常常另外加收的配件。</p>
          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-2 border-b border-slate-200 bg-brand-50 px-5 py-4 font-bold">
              <span>机器大小</span><span>安装费</span>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
              <span>{btu.installSmall} BTU</span><strong>{p.install.small} 泰铢</strong>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
              <span>{btu.installLarge} BTU</span><strong>{p.install.large} 泰铢</strong>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4" id="relocation">
              <span>移机：拆下并在新位置重新安装</span><strong>{p.install.relocate} 泰铢</strong>
            </div>
            <div className="grid grid-cols-2 px-5 py-4">
              <span>只拆不装</span><strong>{p.install.removeOnly} 泰铢</strong>
            </div>
          </div>
          <p className="mt-4 flex items-start gap-2.5 text-sm leading-7 text-ink-soft">
            <IconShield className="mt-1 h-5 w-5 shrink-0 text-mint" />
            安装工作保修：向我购买机器为 1 年，自备机器为 6 个月。机器本身由厂家或卖家保修。可开具增值税发票。
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">价格包含的内容</h2>
            <ul className="mt-6 space-y-3.5">
              {included.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 sm:p-8">
            <p className="eyebrow">网购了机器？</p>
            <h2 className="mt-3 text-xl font-bold">机器送到之前就可以预约安装</h2>
            <p className="mt-3 text-[15px] leading-8 text-ink-soft">
              把机型和送货日期发给我，我为您预留送达次日的时段。缺支架、铜管短、没有线槽，都不影响价格，因为这些已经包含在内。
            </p>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line mt-6" data-cta="zh-install-online-line">
              <IconLine className="h-5 w-5" />
              LINE {site.lineId}
            </a>
          </div>
        </div>
      </section>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">安装流程</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((x, i) => (
              <li key={x.t} className="card flex items-start gap-4 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-700 text-base font-bold text-white">{i + 1}</span>
                <span>
                  <span className="block font-bold">{x.t}</span>
                  <span className="mt-1 block text-[15px] leading-8 text-ink-soft">{x.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <IntlReels
        lang="zh-CN"
        items={reelsByIds(intlReelSets.install)}
        eyebrow="安装实拍视频"
        heading="看一次完整的安装"
        lead="嵌入式天花板机、壁挂机和高处作业，全部在清迈现场实拍。"
        moreLabel="在 Facebook 查看更多视频"
      />

      <section className="section" lang="zh-CN">
        <div className="wrap">
          <h2 className="h2">近期安装案例</h2>
          <p className="lead mt-3 max-w-2xl">线槽笔直、机器水平，现场不留任何需要您收拾的东西。</p>
          <ul className="mt-9 grid gap-5 sm:grid-cols-3">
            {photos.map((ph) => (
              <li key={ph.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <Image src={ph.src} alt={ph.alt} width={768} height={1024} loading="lazy" sizes="(max-width: 640px) 100vw, 33vw" className="h-72 w-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RecentJobs
        lang="zh-CN"
        slugs={["tid-tang-air", "yai-air"]}
        eyebrow="近期安装与移机实拍"
        heading="从拆箱到上墙"
        lead="2026 年的真实安装与移机案例，注明日期和所在区。报告为泰文，照片展示安装前的墙面和完工后的机器。"
        note="安装前后对比 · 报告为泰文"
        tone="sand"
      />

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">预约前常见问题</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card group px-5 py-4 sm:px-6">
                <summary className="cursor-pointer list-none text-base font-semibold sm:text-lg">{f.q}</summary>
                <p className="mt-3 text-[15px] leading-8 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/zh/pricing" className="btn-ghost">完整价目表<IconChevron className="h-4 w-4" /></Link>
            <Link href="/zh/about" className="btn-ghost">上门的是谁<IconChevron className="h-4 w-4" /></Link>
            <Link href="/en/installation" className="btn-ghost" hrefLang="en">English<IconChevron className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section pt-0" lang="zh-CN">
        <div className="wrap">
          <div className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-14 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">今天就获取安装报价</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-brand-100">
              发送机型、房间面积和准备安装的墙面照片，我会回复确定的价格和最早可上门的时间。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-7 py-4 text-lg" data-cta="zh-install-band-line">
                <IconLine className="h-5 w-5" />
                LINE {site.lineId}
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-7 py-4 text-lg">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-brand-200">
              <IconMove className="h-4 w-4" />
              移机和拆机同样通过 LINE 预约
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
