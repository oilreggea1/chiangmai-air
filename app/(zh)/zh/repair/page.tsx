import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos, p, coverage } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconWrench, IconShield, IconClock, IconPin } from "@/components/Icons";
import { RecentJobs } from "@/components/RecentJobs";

/**
 * หน้าซ่อมแอร์ภาษาจีน (24 ก.ย. 2569) คู่กับ /en/repair และ /service/som-air
 * เหตุผล: ฝั่งจีนเดิมมี 6 หน้าและบางมาก (เฉลี่ย 273 คำ) ทำให้แทบไม่ติดผลค้นหา
 * ราคาดึงจาก p เท่านั้น เนื้อหาแปลจากฝั่งไทย ห้ามรับปากเกินที่ฝั่งไทยเขียนไว้
 */
const title = "清迈空调维修 | Pro Fresh Care 上门检测报价";
const description =
  `清迈空调维修，技师 Arm 本人上门。检测费 ${p.repair.diagnostic} 泰铢，确认维修后从维修费里扣除。先测压力和电流并给您看数据，再报价。周一至周六 8:00-18:00。`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/zh/repair",
    languages: { "th-TH": "/service/som-air", "en-US": "/en/repair", "zh-CN": "/zh/repair", "x-default": "/service/som-air" },
  },
  ...share({ title, description, path: `/zh/repair`, locale: "zh_CN", image: heroPhotos.en }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "中文", path: "/zh" },
  { name: "空调维修", path: "/zh/repair" },
];

const symptoms = [
  { t: "出风但不冷", d: "最常见的报修。可能是盘管太脏、冷媒泄漏、电容失效，也可能是压缩机启动不了。这几种维修的价格差很多，所以我一定先测量再报价，不会凭症状猜。" },
  { t: "室内机滴水", d: "多数是排水盘里的污垢堵住了出水口，水积满后从边缘溢出来；也有的是机器没装水平。这两种都不需要换零件就能解决，所以如果有人还没看机器就报换件的价格，请先多问一句。" },
  { t: "开一会儿就自己停", d: "通常是保护装置在起作用：风路受阻、室外机过热，或者控制板有问题。我会先测电流，因为电流能告诉我是机器在硬撑，还是控制端把它切掉了。" },
  { t: "出现以前没有的噪音", d: "咔哒声多半是面板松了或风叶刮到东西。室外机传来的沉闷摩擦声性质不同，要尽早看，继续那样运转可能把小维修拖成换压缩机。" },
  { t: "一开机就有异味", d: "这种味道几乎都来自排水盘和贯流风轮，而不是过滤网。好好清洗一次通常就能解决，如果只需要清洗，我会直接告诉您，不会当成维修来卖。" },
  { t: "显示屏或遥控器出现故障代码", d: "代码能缩小范围，但不能直接指出是哪个零件坏了。我会先读代码，再用实测数据验证，然后才订货，因为同一个代码可能有好几种原因。" },
];

const how = [
  { t: "先告诉我机器的情况", d: "用 LINE 发消息，写清楚品牌、大概用了几年、现在是什么现象。声音问题拍一小段视频比文字描述有用得多。" },
  { t: "我上门实测", d: `测冷媒压力和运行电流，数据当场给您看。检测费 ${p.repair.diagnostic} 泰铢，确认维修后从维修费里扣掉。` },
  { t: "动手前先给价格", d: "零件和工钱合在一起，一个数字。施工中如果发现别的问题，我会先停下来问您，确认后才继续。" },
  { t: "不划算的时候我会直说", d: "维修费超过新机价格的一半左右，我会告诉您不划算，并把可选方案列出来。最后怎么决定由您。" },
];

const faqs = [
  { q: "当天能上门吗？", a: "一般 24 小时内可以到，有空档当天也能来。例外是 2 月到 4 月的烧芭季，全省需求量大，那段时间建议提前几天预约。" },
  { q: "上门费怎么算？", a: `检测费 ${p.repair.diagnostic} 泰铢，确认维修后从维修费里扣除。服务范围内不另外收车费。` },
  { q: "空调每年都要加冷媒，正常吗？", a: "不正常。空调是密闭系统，不漏就不会自己少。每年都要加，说明某处在漏。我会先测压力再找漏点，不找漏点直接加，等于每年都在重复付冷媒的钱。" },
  { q: "冷媒多少钱？", a: `R32 和 R410A 每磅 ${p.repair.refrigerantPerLb} 泰铢，按实际加进去的量算。我会当着您的面先测，不缺就不加，并如实告诉您。` },
  { q: "语言不通怎么办？", a: "用 LINE 打中文发给我最方便，我这边会翻译后回复。现场沟通靠照片和仪表读数补足，技术上的事看数据比听解释更清楚。" },
  { q: "维修有保障吗？", a: "有。同样的故障再出现，我会再回来看。需要报销的话，可以开公司抬头（Cher Solutions Co., Ltd.）的收据。" },
  { q: "洗衣机也修吗？", a: "不修。洗衣机我只做拆桶清洗，把内桶拆出来逐件清洗。我不换洗衣机零件，遇到要换件的情况会直接说明，不接这个活。" },
];

const includes = [
  "当场测冷媒压力并给您看，不靠手感判断",
  "测压缩机和风机的运行电流，再决定是哪个零件的问题",
  "拆下来的旧零件交给您，并说明为什么坏",
  "零件加工钱一个总价，动手前先谈好",
  "不值得修的时候直说，不劝您花这笔钱",
  "需要报销可以开公司抬头的收据",
];

export default function ZhRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="zh-CN">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconWrench className="h-4 w-4" />
              先测量，后报价
            </p>
            <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
              清迈空调维修
            </h1>
            <p className="lead mt-5">
              我是 Arm，据点在清迈东侧的 San Kamphaeng，上门的就是我本人，不是派单给别人。
              到现场我会先测冷媒压力和运行电流，把数据给您看，再报价格。
              如果修下来不划算，我也会直接告诉您，而不是先修了再说。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="zh-repair-line">
                <IconLine className="h-5 w-5" />
                用 LINE 描述故障
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="zh-repair-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              检测费 {p.repair.diagnostic} 泰铢（确认维修后扣除）· R32 与 R410A 每磅 {p.repair.refrigerantPerLb} 泰铢 · 周一至周六 8:00–18:00
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={heroPhotos.en.src}
              alt={heroPhotos.en.alt}
              width={900}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[22rem] w-full object-cover sm:h-[27rem]"
            />
          </div>
        </section>
      </div>

      <section className="section" lang="zh-CN">
        <div className="wrap">
          <h2 className="h2">您的空调现在是什么情况？</h2>
          <p className="lead mt-3 max-w-2xl">
            同一个现象可能对应好几种故障，这就是为什么我先测量而不是听描述就报价。下面是每种现象通常代表什么。
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((s) => (
              <div key={s.t} className="card p-6">
                <h3 className="font-bold leading-7">{s.t}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">维修流程</h2>
            <ol className="mt-7 space-y-5">
              {how.map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-bold">{s.t}</h3>
                    <p className="mt-1.5 text-[15px] leading-8 text-ink-soft">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="h2">无论修不修，您都会得到这些</h2>
            <ul className="mt-7 space-y-3.5">
              {includes.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <IconShield className="h-6 w-6 text-brand-600" />
                <p className="mt-3 text-sm leading-7 text-ink-soft">同样的故障再出现，我会再回来看，不另外收上门费。</p>
              </div>
              <div className="card p-5">
                <IconClock className="h-6 w-6 text-brand-600" />
                <p className="mt-3 text-sm leading-7 text-ink-soft">一般 24 小时内到场，有空档当天也能来。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentJobs
        lang="zh-CN"
        slugs={["som-air", "lang-air"]}
        eyebrow="近期维修与清洗实拍"
        heading="实际施工是什么样子"
        lead="每份报告都跟踪同一台机器，从第一张照片到最后一张，并注明日期和所在区。报告为泰文，照片直接看得出施工前后的差别。"
        note="施工前后对比 · 报告为泰文"
      />

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">服务范围</h2>
          <p className="lead mt-3">
            据点在 San Kamphaeng，覆盖清迈周边 {coverage.length} 个县。
            清迈市区（Mueang Chiang Mai）、Hang Dong 县和 San Sai 县全部乡都接，
            包括尼曼路、古城、Santitham 和 Mae Jo 湄州一带。范围内价格一致，不加收车费。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/zh/areas" className="btn-ghost">
              <IconPin className="h-4 w-4" />
              查看完整乡名单
            </Link>
            <Link href="/zh/pricing" className="btn-ghost">
              查看全部价格
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
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
            <Link href="/zh/installation" className="btn-ghost">
              空调安装与移机
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
