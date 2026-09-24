import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos, p, btu } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconSnow, IconShield, IconClock } from "@/components/Icons";
import { RecentJobs } from "@/components/RecentJobs";

/**
 * หน้าล้างแอร์คอนโดภาษาจีน (24 ก.ย. 2569) แปลจาก segment "condo" ใน lib/segments.ts
 * ลูกค้าจีนในเชียงใหม่ส่วนใหญ่อยู่คอนโด จึงเป็นหน้าที่ตรงกับความต้องการมากที่สุดของภาษานี้
 * ราคาดึงจาก p เท่านั้น ห้ามพิมพ์ตัวเลขซ้ำ
 */
const title = "清迈公寓空调清洗 | 上门清洗，无阳台也能做";
const description =
  `清迈公寓空调上门清洗，每台 ${p.wash.std} 泰铢，三台以上每台 ${p.wash.stdBulk} 泰铢。没有阳台的房间也能做，用接水袋防止溅水。可配合物业规定的施工时段。`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/zh/condo",
    languages: { "th-TH": "/customer/condo", "en-US": "/en", "zh-CN": "/zh/condo", "x-default": "/customer/condo" },
  },
  ...share({ title, description, path: `/zh/condo`, locale: "zh_CN", image: heroPhotos.en }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "中文", path: "/zh" },
  { name: "公寓空调清洗", path: "/zh/condo" },
];

const points = [
  {
    t: "没有阳台的房间也能清洗，不用把机器拆下来",
    d: "室内机装在房间里、外面又没有阳台可以放东西的户型，我会用接水袋罩在机器下方，再接一根管子把水引到桶里。水不会溅到地板和墙上，再窄的房间也能做，不需要把机器拆下来搬走。",
  },
  {
    t: "配合物业规定的时间进场",
    d: "大多数公寓规定了施工时段，有些还要提前登记。您把楼里的规定告诉我，我会把档期排在能进场的时间，并准备好物业要的资料，不会白跑一趟。",
  },
  {
    t: "室外机在管道井里，先看能做到什么程度",
    d: "清迈不少公寓把室外机放在公共管道井或很窄的后阳台，有的只能从公共区域进去。我会先看位置，再如实告诉您能全做还是只能做一部分，做不到的部分不收钱。",
  },
  {
    t: "多套房一起洗，一次做完",
    d: `同一栋楼里有多套房的房东，三台以上按每台 ${p.wash.stdBulk} 泰铢计算，而且我一次进场做完，不用分几天排期影响租客。把房间数量和空房时间告诉我，我先把总价算给您。`,
  },
];

const prices = [
  { t: `壁挂机 ${btu.washStd} BTU`, d: `每台 ${p.wash.std} 泰铢，三台以上每台 ${p.wash.stdBulk} 泰铢` },
  { t: `壁挂机 ${btu.washBig} BTU`, d: `每台 ${p.wash.big} 泰铢，两台以上每台 ${p.wash.bigBulk} 泰铢` },
  { t: "吊顶机 / 嵌入式天花板机", d: `每台 ${p.wash.suspended} 泰铢起，需要看现场高度` },
];

const faqs = [
  { q: "房间很小，没有阳台，也能洗吗？", a: "能。我用接水袋罩住机器下方，水顺着管子流进桶里，地板和墙都不会湿。清迈的公寓我做得很多，这种户型是常态。" },
  { q: "需要我本人在场吗？", a: "不一定。如果您把钥匙交给物业或朋友，我可以按约定时间进场，做完拍照片发给您。不过第一次还是建议您在场，方便当面说明机器的情况。" },
  { q: "物业要提前登记，怎么办？", a: "把楼里的要求发给我，我会配合登记并提供需要的资料。您也可以直接把我的电话给物业，我来跟他们对接施工时间。" },
  { q: "多久洗一次比较合适？", a: "看房间的环境。靠马路、靠工地或全天开机的房间要勤一些；高楼层、开得少的房间可以拉长。我会在现场看过滤网和盘管的实际情况，再告诉您多久一次合适，不会让您洗得比需要的更勤。" },
  { q: "可以开发票吗？", a: "可以。能开公司抬头（Cher Solutions Co., Ltd.）的收据，需要报销或给房东做账都用得上。" },
  { q: "洗完有保障吗？", a: "清洗保修 30 天。如果同样的问题在这段时间里回来，我会再上门处理，不另外收费。" },
];

export default function ZhCondoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="zh-CN">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconSnow className="h-4 w-4" />
              上门到房间 · 无阳台也能做
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
              清迈公寓空调清洗
            </h1>
            <p className="lead mt-5">
              公寓和独栋不一样，要配合物业的时间，进场空间也小得多。
              我在清迈的公寓做这类活很多年，接水袋、垫布和短梯都是按这种条件准备的，
              进门就能开工，做完把现场恢复原样。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="zh-condo-line">
                <IconLine className="h-5 w-5" />
                用 LINE 发房间照片
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="zh-condo-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              每台 {p.wash.std} 泰铢 · 三台以上每台 {p.wash.stdBulk} 泰铢 · 清洗保修 30 天
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
          <h2 className="h2">公寓这类活，难的地方在哪里</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {points.map((x) => (
              <div key={x.t} className="card p-6">
                <h3 className="font-bold leading-7">{x.t}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">价格</h2>
            <ul className="mt-7 space-y-4">
              {prices.map((x) => (
                <li key={x.t} className="card p-5">
                  <h3 className="font-bold">{x.t}</h3>
                  <p className="mt-1.5 text-[15px] leading-8 text-ink-soft">{x.d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Link href="/zh/pricing" className="btn-ghost">
                查看完整价目表
                <IconChevron className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="h2">清洗包含哪些步骤</h2>
            <ul className="mt-7 space-y-3.5">
              {[
                "先铺垫布、装接水袋，再动机器，避免污水滴到地板",
                "拆下面板和过滤网，拿到水边逐件清洗",
                "冲洗蒸发器盘管，直到流出来的水变清为止",
                "清洗排水盘和排水管，这是异味的主要来源",
                "能进场的情况下，室外机冷凝器也一起冲洗",
                "装回去后试机，量出风温度给您看",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <IconShield className="h-6 w-6 text-brand-600" />
                <p className="mt-3 text-sm leading-7 text-ink-soft">清洗保修 30 天，同样的问题回来我再上门。</p>
              </div>
              <div className="card p-5">
                <IconClock className="h-6 w-6 text-brand-600" />
                <p className="mt-3 text-sm leading-7 text-ink-soft">一台约 1 小时，多台连着做会更快。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentJobs
        lang="zh-CN"
        slugs={["lang-air"]}
        eyebrow="近期清洗实拍"
        heading="清洗前后，逐个部件对比"
        lead="每份报告都跟踪同一台机器，注明施工日期和所在区。报告为泰文，照片一看便知。"
        note="清洗前后对比 · 报告为泰文"
      />

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
            <Link href="/zh/areas" className="btn-ghost">
              服务范围
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
