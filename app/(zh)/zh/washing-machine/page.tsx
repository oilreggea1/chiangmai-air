import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos, p } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconWasher, IconClock } from "@/components/Icons";
import { IntlReels, intlReelSets, reelsByIds } from "@/components/ReelsShowcase";

/**
 * หน้าล้างเครื่องซักผ้าภาษาจีน (24 ก.ย. 2569) คู่กับ /en/washing-machine และ /service/lang-washing-machine
 * ราคาจาก p.washer เท่านั้น จองผ่าน LINE บัญชีงานเครื่องซักผ้า (site.lineUrl2)
 * ภาพก่อน–หลังใช้เฉพาะคู่ที่ยืนยันแล้วว่าเป็นเครื่องเดียวกัน
 */
const title = "清迈洗衣机内桶清洗 | Pro Fresh Care";
const description =
  `清迈上门洗衣机深度清洗：内桶整个拆下，逐件清洗。上开式 ${p.washer.topLoad} 泰铢起，前开式 ${p.washer.frontLoad} 泰铢起，每台约 3 小时，保修 30 天。`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["清迈洗衣机清洗", "清迈洗衣机内桶清洗", "清迈洗衣机拆洗", "清迈滚筒洗衣机霉菌清洗", "清迈洗衣机有异味"],
  alternates: {
    canonical: "/zh/washing-machine",
    languages: { "th-TH": "/service/lang-washing-machine", "en-US": "/en/washing-machine", "zh-CN": "/zh/washing-machine", "x-default": "/service/lang-washing-machine" },
  },
  ...share({ title, description, path: `/zh/washing-machine`, locale: "zh_CN", image: heroPhotos.enWasher }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "中文", path: "/zh" },
  { name: "洗衣机", path: "/zh/washing-machine" },
];

const scope = [
  "上开式（波轮）和前开式（滚筒）都做，拆装方式不同，分开计价",
  "内桶和所有可拆部件全部取出，里外逐件清洗后装回",
  "清洁剂按内桶材质选择，不损伤不锈钢和塑料部件",
  "清理排水管和排水口并检查堵塞，这是排水慢和异味反复的常见原因",
  "拆机前先试机，装回后再试机，原有故障会先告诉您",
  "工作保修 30 天",
];

const steps = [
  { t: "拆机前先试机", d: "先开机检查机器状况。如果有零件已经磨损或损坏，会在动手前告诉您，而不是事后。" },
  { t: "取出内桶和部件", d: "污垢积在内桶外壁和外桶内侧，任何清洗片都碰不到。只有把内桶拆出来才能清理干净。" },
  { t: "排水管和排水口", d: "清理并检查堵塞，因为排水慢和异味回来都从这里开始。" },
  { t: "装回、调平、试机", d: "所有部件装回，机器调平，当着您的面跑一个程序验收。" },
];

const faqs = [
  { q: "真的会把内桶拆出来吗？", a: "会。内桶和周围部件都拆出来单独清洗，然后装回、调平，并当着您的面试机。本页下方的照片就来自这些工作。" },
  { q: "为什么前开式比上开式贵？", a: `结构不同。上开式是竖直的内外桶，可以直接吊出。前开式是横向滚筒，还有门封圈和排水泵滤网，要拆的东西更多。上开式 15 公斤以内 ${p.washer.topLoad} 泰铢，15.1 到 19 公斤 ${p.washer.topLoadMid} 泰铢，更大的 ${p.washer.topLoadBig} 泰铢。前开式 ${p.washer.frontLoad} 泰铢起，大容量机型开工前先确认价格。` },
  { q: "需要多长时间？", a: "每台约 3 小时，因为所有部件都要拆出、清洗、装回，最后还要试机。" },
  { q: "和自己买的洗衣机槽清洁剂有什么区别？", a: "清洁片或清洁液只能接触内桶的内壁。大部分洗涤剂残留和霉菌都在内桶外壁，也就是内桶和外桶之间的缝隙里，只有拆出内桶才能洗干净。" },
  { q: "我住公寓，空间很小，能做吗？", a: `可以。如果现场没有空间拆卸和冲洗部件，我会把机器搬走清洗后送回。这种情况加收 ${p.washer.offsiteSurcharge} 泰铢，预约时会先说明。` },
  { q: "前开式门封圈上的黑霉能洗掉吗？", a: "如果霉菌已经渗进橡胶里，无法恢复如新。用力刷到能去掉的程度会把门封撕裂。开工前我会先让您看实际情况，不会有意外。" },
  { q: "清洗过程中机器坏了怎么办？", a: "拆机前我会先试机，原有的故障会先指出来。我的工作范围是清洗和拆桶。如果机器本身有故障，我会告诉您并建议联系该品牌的售后服务。" },
];

const pairs = [
  {
    label: "上开式，内桶底座",
    before: { src: "/work/wm-ba-drumbase-before.webp", alt: "清洗前的上开式洗衣机内桶底座，转轴周围和凹槽里有棕色沉积物" },
    after: { src: "/work/wm-ba-drumbase-after.webp", alt: "清洗后的同一底座，塑料和凹槽重新清晰可见" },
  },
  {
    label: "前开式，外桶",
    before: { src: "/work/wm-ba-fl-tub-before.webp", alt: "清洗前的前开式洗衣机外桶，桶壁和加热管周围有一道道棕色水垢" },
    after: { src: "/work/wm-ba-fl-tub-after.webp", alt: "清洗后的同一外桶，桶壁和加热管周围的水垢已清除" },
  },
];

export default function ZhWashingMachinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="zh-CN">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconWasher className="h-4 w-4" />
              拆出内桶，逐件清洗，上门服务
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.35] font-extrabold sm:text-[2.4rem]">清迈洗衣机深度清洗</h1>
            <p className="lead mt-5">
              洗涤剂残留、柔顺剂和棉絮都积在内桶外壁，您看不到，清洁片也碰不到。时间久了长霉，洗好的衣服反而有霉味。
              我把内桶拆出来，逐件清洗，再装回去试机。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl2} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="zh-washer-line">
                <IconLine className="h-5 w-5" />
                LINE 预约 {site.lineId2}
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="zh-washer-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">上开式 {p.washer.topLoad} 泰铢起 · 前开式 {p.washer.frontLoad} 泰铢起 · 周一至周六 8:00–18:00</p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image src={heroPhotos.enWasher.src} alt="从上开式洗衣机取出的不锈钢内桶放在地上准备清洗" width={900} height={1200} priority sizes="(max-width: 1024px) 100vw, 45vw" className="h-[22rem] w-full object-cover sm:h-[27rem]" />
          </div>
        </section>
      </div>

      <section className="section" lang="zh-CN">
        <div className="wrap max-w-4xl">
          <h2 className="h2">价格</h2>
          <p className="lead mt-3">按机型和容量计价，容量印在机盖或机门上。</p>
          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-2 border-b border-slate-200 bg-brand-50 px-5 py-4 font-bold">
              <span>机型</span><span>价格</span>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4"><span>上开式，15 公斤以内</span><strong>{p.washer.topLoad} 泰铢</strong></div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4"><span>上开式，15.1 – 19 公斤</span><strong>{p.washer.topLoadMid} 泰铢</strong></div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4"><span>上开式，19 公斤以上</span><strong>{p.washer.topLoadBig} 泰铢</strong></div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4"><span>前开式</span><strong>{p.washer.frontLoad} 泰铢起</strong></div>
            <div className="grid grid-cols-2 px-5 py-4"><span>现场没有空间时，搬走清洗后送回</span><strong>+{p.washer.offsiteSurcharge} 泰铢</strong></div>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-soft">
            <IconClock className="h-5 w-5 text-brand-600" />
            每台约 3 小时 · 工作保修 30 天 · 可开具增值税发票
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap">
          <h2 className="h2">同一台机器，清洗前后</h2>
          <p className="lead mt-3 max-w-2xl">以下每组都是同一台机器同一天拍的。脏的地方正是您平时看不到的部件。</p>
          <div className="mt-9 grid gap-8 lg:grid-cols-2">
            {pairs.map((pair) => (
              <figure key={pair.label} className="card overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <span className="absolute z-10 m-3 rounded-full bg-amber-700 px-3 py-1 text-xs font-bold text-white shadow">清洗前</span>
                    <Image src={pair.before.src} alt={pair.before.alt} width={720} height={540} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <div className="relative">
                    <span className="absolute z-10 m-3 rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white shadow">清洗后</span>
                    <Image src={pair.after.src} alt={pair.after.alt} width={720} height={540} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                  </div>
                </div>
                <figcaption className="px-5 py-3 text-sm font-semibold">{pair.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <IntlReels
        lang="zh-CN"
        items={reelsByIds(intlReelSets.washer)}
        eyebrow="施工实拍视频"
        heading="看看内桶是怎么拆出来的"
        lead="六段来自清迈洗衣机清洗现场的短视频，从吊出内桶到刷洗完成。"
        moreLabel="在 Facebook 查看更多视频"
      />

      <section className="section" lang="zh-CN">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">工作内容</h2>
            <ul className="mt-6 space-y-3.5">
              {scope.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h2">流程</h2>
            <ol className="mt-6 space-y-4">
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
        </div>
      </section>

      <section className="section bg-sand" lang="zh-CN">
        <div className="wrap max-w-3xl">
          <h2 className="h2">常见问题</h2>
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
            <Link href="/zh" className="btn-ghost">空调服务<IconChevron className="h-4 w-4" /></Link>
            <Link href="/en/washing-machine" className="btn-ghost" hrefLang="en">English<IconChevron className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section pt-0" lang="zh-CN">
        <div className="wrap">
          <div className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-14 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">发一张您洗衣机的照片</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-brand-100">
              一张机器照片加上容量标签，就足够给您确定的价格。洗衣机预约请使用下面这个 LINE 账号。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={site.lineUrl2} target="_blank" rel="noopener" className="btn-line px-7 py-4 text-lg" data-cta="zh-washer-band-line">
                <IconLine className="h-5 w-5" />
                LINE {site.lineId2}
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-7 py-4 text-lg">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
