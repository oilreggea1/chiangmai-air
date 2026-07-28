import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, gallery, areas } from "@/lib/site";
import { getArticle } from "@/content/articles";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import {
  IconPhone, IconLine, IconChevron, IconCheck, IconSnow, IconShield, IconClock, IconPin,
} from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/Blocks";

const title = "ล้างแอร์สู้ฝุ่น PM2.5 เชียงใหม่ | แพ็กเกจห้องปลอดฝุ่นก่อนหน้าเผา";
const description =
  "หน้าเผาเชียงใหม่ ก.พ.–เม.ย. ทำให้แอร์ตันเร็วกว่าปกติหลายเท่า แพ็กเกจห้องปลอดฝุ่นเริ่ม 2,000 บาท ล้างแอร์ถอดชิ้นส่วน + อุดรอยรั่วของห้อง จองคิวก่อนคิวเต็ม โทร 065-365-7673";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ล้างแอร์ PM2.5 เชียงใหม่", "ห้องปลอดฝุ่น เชียงใหม่", "หมอกควันเชียงใหม่ แอร์",
    "แอร์กรองฝุ่น PM2.5", "ล้างแอร์ก่อนหน้าเผา เชียงใหม่",
  ],
  alternates: { canonical: "/pm25" },
  openGraph: { title, description, url: `${site.url}/pm25`, type: "article" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ล้างแอร์สู้ฝุ่น PM2.5", path: "/pm25" },
];

const faqs = [
  {
    q: "เปิดแอร์ช่วยกรอง PM2.5 ได้จริงไหม",
    a: "แผ่นกรองที่ติดมากับแอร์กรอง PM2.5 ไม่ได้ครับ มันดักได้แค่ฝุ่นหยาบ แต่แอร์ยังจำเป็นเพราะทำให้คุณปิดห้องได้สนิท ซึ่งเป็นการตัดทางเข้าหลักของฝุ่นจากภายนอก ถ้าจะกรอง PM2.5 จริงต้องใช้เครื่องฟอกอากาศ HEPA ร่วมด้วย",
  },
  {
    q: "ควรล้างแอร์ตอนไหนถึงจะทันหน้าเผา",
    a: "แนะนำให้ล้างใหญ่ช่วงมกราคมถึงต้นกุมภาพันธ์ครับ จะได้เข้าฤดูด้วยคอยล์ที่สะอาด และเป็นช่วงที่คิวช่างยังว่าง ถ้ารอถึงเมษายนคิวจะแน่นทุกร้านในเชียงใหม่",
  },
  {
    q: "ช่วงฝุ่นควรล้างแผ่นกรองบ่อยแค่ไหน",
    a: "ระหว่างเดือนกุมภาพันธ์ถึงเมษายนแนะนำให้ถอดแผ่นกรองมาล้างเองทุก 2–4 สัปดาห์ครับ ทำเองได้ไม่ต้องเรียกช่าง ล้างด้วยน้ำสะอาดแล้วตากให้แห้งสนิทก่อนใส่กลับ",
  },
  {
    q: "ติดแผ่นกรอง PM2.5 เพิ่มในแอร์เองได้ไหม",
    a: "ไม่แนะนำให้แปะเองครับ เพราะแผ่นกรองละเอียดเพิ่มแรงต้านลม ทำให้ลมออกน้อยลงจนคอยล์เย็นเป็นน้ำแข็งและมอเตอร์ทำงานหนักจนเสียเร็ว ควรให้ช่างประเมินก่อนว่ารุ่นของคุณรับได้แค่ไหน",
  },
  {
    q: "แอร์มีกลิ่นอับตอนหน้าเผา แปลว่าอะไร",
    a: "แปลว่าฝุ่นและเขม่าที่เกาะบนคอยล์เจอความชื้นจนเกิดเชื้อราแล้วครับ กรณีนี้ล้างแบบฉีดผ่านไม่หาย ต้องถอดใบพัดกรงกระรอกออกมาล้างแยก ซึ่งคือแพ็กเกจ Premium Full Wash",
  },
  {
    q: "รับงานคาเฟ่ โรงแรม หรือที่พักช่วงหน้าเผาไหม",
    a: "รับครับ ทั้งคาเฟ่ โคเวิร์กกิ้ง โรงแรมเล็ก โฮสเทล และห้องพักให้เช่า ช่วงหน้าเผาเป็นช่วงที่ลูกค้าเลือกร้านและที่พักจากคุณภาพอากาศ เราออกใบกำกับภาษีให้ได้ตามปกติ",
  },
];

const calendar = [
  { period: "ม.ค. – ต้น ก.พ.", action: "ล้างใหญ่ก่อนเข้าฤดู", why: "เข้าหน้าเผาด้วยคอยล์สะอาด คิวช่างยังว่าง", tone: "best" },
  { period: "ก.พ. – เม.ย.", action: "ล้างแผ่นกรองเองทุก 2–4 สัปดาห์", why: "ช่วงฝุ่นหนักที่สุด แผ่นกรองตันเร็วกว่าปกติมาก", tone: "peak" },
  { period: "พ.ค. – มิ.ย.", action: "ล้างใหญ่รอบสอง", why: "เคลียร์เขม่าที่สะสมทั้งฤดูก่อนเข้าหน้าฝน", tone: "normal" },
  { period: "ก.ค. – ต.ค.", action: "เฝ้าระวังกลิ่นอับและน้ำหยด", why: "ความชื้นสูง เชื้อราโตเร็วบนคราบที่ค้างอยู่", tone: "normal" },
  { period: "พ.ย. – ธ.ค.", action: "ช่วงเหมาะซ่อมหรือติดตั้ง", why: "ใช้แอร์น้อย คิวว่าง ไม่ต้องรอนาน", tone: "normal" },
];

export default function Pm25Page() {
  const pillar = getArticle("pm25-lang-air-chiangmai");
  const room = getArticle("hong-plod-fun-chiangmai");
  const guides = [pillar, room, getArticle("lang-air-thammada-vs-premium"), getArticle("lang-air-boi-kae-nai")]
    .filter((a) => a !== undefined);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-amber-200/40 blur-3xl"
        />
        <Breadcrumbs trail={trail} />
        <section className="wrap relative grid gap-10 pt-8 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1.5 text-sm font-semibold text-amber-900 ring-1 ring-amber-200">
              <IconPin className="h-4 w-4" />
              เฉพาะคนเชียงใหม่ · ฤดูหมอกควัน ก.พ. – เม.ย.
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.5rem]">
              ล้างแอร์สู้ฝุ่น PM2.5 เชียงใหม่
            </h1>
            <p className="lead mt-5">
              หน้าเผาไม่ได้ทำร้ายแค่ปอดคุณ แต่ทำให้แอร์ในบ้านตันเร็วกว่าปกติหลายเท่า
              พอถึงเมษายนที่ร้อนที่สุด แอร์ที่ตันแล้วจะเย็นไม่ไหว
              และคิวช่างทั้งเมืองก็แน่นจนรอเป็นสัปดาห์
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="pm25-call">
                <IconPhone className="h-5 w-5" />
                จองคิวล่วงหน้า
              </a>
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="pm25-line">
                <IconLine className="h-5 w-5" />
                ปรึกษาทาง LINE
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={gallery[6].src}
              alt="ช่างแอร์เชียงใหม่ถอดล้างคอยล์เย็นที่เต็มไปด้วยฝุ่นและเขม่าจากช่วงหมอกควัน"
              width={900}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[22rem] w-full object-cover sm:h-[27rem]"
            />
          </div>
        </section>
      </div>

      {/* ทำไมเชียงใหม่ต่าง */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">ทำไมแอร์ในเชียงใหม่สกปรกเร็วกว่าที่อื่น</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
            <p>
              เชียงใหม่อยู่ในแอ่งกระทะที่มีภูเขาล้อมรอบ พอถึงหน้าแล้งอากาศเย็นด้านบนจะกดทับอากาศอุ่นด้านล่างไว้
              จนควันลอยออกไปไม่ได้ สื่อเรียกสภาพนี้ว่า <strong className="text-ink">ฝาชีครอบเมือง</strong>{" "}
              ผลคือฝุ่นและเขม่าวนเวียนสะสมอยู่ในเมืองต่อเนื่องเป็นสัปดาห์
            </p>
            <p>
              ศูนย์ภูมิภาคเทคโนโลยีอวกาศและภูมิสารสนเทศ ภาคเหนือ มหาวิทยาลัยเชียงใหม่
              รายงานจุดความร้อนสะสมภาคเหนือช่วงต้นปี 2569 ที่ราว <strong className="text-ink">6,676 จุด</strong>{" "}
              เพิ่มขึ้นราว 67% จากช่วงเดียวกันของปีก่อนที่ราว 3,996 จุด
              นั่นแปลว่าปริมาณเขม่าที่วิ่งผ่านแผ่นกรองแอร์คุณในแต่ละวันก็มากขึ้นตามไปด้วย
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "ลมออกเบาลง", v: "เขม่าเกาะครีบคอยล์จนอากาศผ่านได้น้อย" },
              { k: "ค่าไฟสูงขึ้น", v: "คอมเพรสเซอร์ต้องทำงานนานขึ้นต่อรอบ" },
              { k: "กลิ่นอับตามมา", v: "เขม่าที่ชื้นกลายเป็นแหล่งเพาะเชื้อรา" },
            ].map((x) => (
              <div key={x.k} className="card p-5">
                <p className="font-bold text-ink">{x.k}</p>
                <p className="mt-1.5 text-sm leading-7 text-ink-soft">{x.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ความจริงเรื่องแผ่นกรอง */}
      <section className="section bg-sand">
        <div className="wrap max-w-3xl">
          <h2 className="h2">ความจริงที่ร้านแอร์ส่วนใหญ่ไม่บอก</h2>
          <div className="card mt-6 border-2 border-amber-300 bg-amber-50 p-6 sm:p-7">
            <p className="text-lg font-bold text-amber-900">
              แผ่นกรองที่ติดมากับแอร์ กรอง PM2.5 ไม่ได้
            </p>
            <p className="mt-3 text-[15px] leading-8 text-ink-soft">
              มันถูกออกแบบมาดักฝุ่นหยาบ เศษผม และขนสัตว์ เพื่อไม่ให้คอยล์เย็นตัน
              ไม่ใช่เพื่อดักอนุภาคขนาด 2.5 ไมครอน ใครบอกว่าเปิดแอร์แล้วปลอดภัยจาก PM2.5 อัตโนมัติ คนนั้นเข้าใจผิด
            </p>
          </div>

          <p className="mt-6 text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
            แต่แอร์ยังจำเป็นมาก เพราะการเปิดแอร์บังคับให้คุณปิดประตูหน้าต่าง
            ซึ่งเป็นการตัดทางเข้าหลักของฝุ่นจากภายนอก
            คู่มือห้องปลอดฝุ่นของ สสส. เองก็ระบุการเปิดเครื่องปรับอากาศไว้เป็นหนึ่งในขั้นตอน
            สิ่งที่ต้องทำจึงไม่ใช่เลือกอย่างใดอย่างหนึ่ง แต่ต้องทำครบทั้งสามอย่าง
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { n: "1", t: "ปิดห้องให้สนิท", d: "อุดรอยรั่วรอบวงกบ ใต้ประตู และรูท่อแอร์ที่เจาะทะลุผนัง" },
              { n: "2", t: "แอร์ที่คอยล์สะอาด", d: "ถ้าคอยล์ตัน ลมหมุนเวียนไม่พอ และยังปล่อยสปอร์เชื้อรากลับเข้าห้อง" },
              { n: "3", t: "เครื่องฟอก HEPA", d: "ตัวเดียวที่กรอง PM2.5 ได้จริง วางกลางห้อง ไม่ชิดผนัง" },
            ].map((x) => (
              <div key={x.n} className="card p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {x.n}
                </span>
                <p className="mt-3.5 font-bold">{x.t}</p>
                <p className="mt-1.5 text-sm leading-7 text-ink-soft">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ปฏิทิน */}
      <section className="section">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ปฏิทินดูแลแอร์ ฉบับคนเชียงใหม่</h2>
          <p className="lead mt-3">
            อย่ายึดตัวเลข &ldquo;ทุก 6 เดือน&rdquo; แบบตายตัว ให้จัดรอบตามฤดูจริงของเชียงใหม่จะได้ผลกว่ามาก
          </p>

          <ol className="mt-9 space-y-4">
            {calendar.map((c) => (
              <li
                key={c.period}
                className={`card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6 ${
                  c.tone === "best"
                    ? "border-mint/40 bg-mint/6"
                    : c.tone === "peak"
                      ? "border-amber-300 bg-amber-50"
                      : ""
                }`}
              >
                <span className="w-full shrink-0 font-extrabold text-brand-700 sm:w-40">{c.period}</span>
                <span className="flex-1">
                  <span className="block font-bold">{c.action}</span>
                  <span className="mt-1 block text-sm leading-7 text-ink-soft">{c.why}</span>
                </span>
                {c.tone === "best" && (
                  <span className="shrink-0 self-start rounded-full bg-mint px-3 py-1 text-xs font-bold text-white sm:self-center">
                    ช่วงที่ดีที่สุด
                  </span>
                )}
                {c.tone === "peak" && (
                  <span className="shrink-0 self-start rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white sm:self-center">
                    ช่วงวิกฤต
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="card mt-8 border-2 border-brand-200 bg-brand-50 p-6">
            <p className="flex items-center gap-2.5 font-bold text-brand-800">
              <IconClock className="h-5 w-5" />
              จุดที่คนพลาดบ่อยที่สุด
            </p>
            <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">
              หลายบ้านรอจนแอร์ไม่เย็นแล้วค่อยเรียกช่างในเดือนเมษายน
              ซึ่งเป็นเดือนที่ช่างทุกร้านในเชียงใหม่คิวแน่นที่สุดของปี
              การล้างล่วงหน้าตั้งแต่มกราคมจึงไม่ใช่แค่เรื่องสุขภาพ แต่เป็นเรื่องของการไม่ต้องนั่งร้อนรอคิว
            </p>
          </div>
        </div>
      </section>

      {/* บริการ */}
      <section className="section bg-sand">
        <div className="wrap max-w-4xl">
          <h2 className="h2">เราช่วยอะไรคุณได้บ้างในช่วงนี้</h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="card flex flex-col p-6 sm:p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <IconSnow className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">ล้างใหญ่ก่อนหน้าเผา</h3>
              <p className="mt-2 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-brand-700">600</span>
                <span className="text-sm text-ink-soft">บาท / เครื่อง · 3 เครื่องขึ้นไป 550.-</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {[
                  "ล้างคอยล์เย็นและคอยล์ร้อนด้วยแรงดันน้ำ",
                  "ล้างแผ่นกรองและหน้ากากจนคราบดำออกหมด",
                  "ปูผ้าใบกันเลอะคลุมหนา 2 ชั้น",
                  "รับประกันงานล้าง 30 วัน",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-7 text-ink-soft">
                    <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-mint" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card relative flex flex-col p-6 shadow-lift ring-2 ring-brand-500 sm:p-7">
              <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
                แนะนำสำหรับบ้านที่มีคนแพ้ฝุ่น
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
                <IconShield className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">Premium Full Wash ถอดล้าง 100%</h3>
              <p className="mt-2 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-brand-700">2,000</span>
                <span className="text-sm text-ink-soft">บาท / เครื่อง</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {[
                  "ถอดใบพัดกรงกระรอกออกมาล้างแยก จุดที่เชื้อราสะสมมากที่สุด",
                  "ถอดชิ้นส่วนล้างทุกชิ้น 100%",
                  "ฉีดน้ำยาฆ่าเชื้อโรค",
                  "รับประกันงานล้าง 60 วัน",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-7 text-ink-soft">
                    <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-mint" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card mt-5 overflow-hidden">
            <div className="bg-gradient-to-br from-brand-700 to-brand-600 px-6 py-7 sm:px-8">
              <p className="text-sm font-semibold text-brand-100">บริการเฉพาะของเรา</p>
              <h3 className="mt-1.5 text-xl font-extrabold text-white sm:text-2xl">
                แพ็กเกจห้องปลอดฝุ่น
              </h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">2,000</span>
                <span className="text-brand-100">บาท เริ่มต้น / ห้อง</span>
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-8 text-brand-100">
                ล้างแอร์อย่างเดียวยังไม่พอ ถ้าห้องยังมีรอยรั่วให้ฝุ่นเข้าได้
                แพ็กเกจนี้จัดการทั้งตัวแอร์และตัวห้องไปพร้อมกัน
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <ul className="grid gap-3.5 sm:grid-cols-2">
                {[
                  "ล้างแอร์แบบถอดชิ้นส่วน เคลียร์เขม่าที่สะสมจากหน้าเผา",
                  "ฉีดน้ำยาฆ่าเชื้อโรคที่คอยล์และใบพัด",
                  "ตรวจหารอยรั่วของห้องที่ทำให้ฝุ่นเล็ดลอดเข้ามา",
                  "อุดรูท่อแอร์ที่เจาะทะลุผนัง จุดที่คนลืมบ่อยที่สุด",
                  "ประเมินว่าแอร์รุ่นของคุณรับแผ่นกรองละเอียดได้แค่ไหนโดยไม่ทำให้เครื่องพัง",
                  "แนะนำตำแหน่งวางเครื่องฟอกอากาศให้ทำงานได้เต็มประสิทธิภาพ",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-mint" />
                    <span className="text-[15px] leading-7 text-ink-soft">{f}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-7 text-ink-soft">
                ราคาเริ่มต้นครอบคลุมห้องมาตรฐาน 1 ห้องพร้อมแอร์ 1 เครื่อง
                หากห้องใหญ่กว่าปกติ มีแอร์หลายเครื่อง หรือรอยรั่วต้องแก้เยอะเป็นพิเศษ
                เราแจ้งค่าใช้จ่ายเพิ่มให้ทราบก่อนเริ่มงานเสมอ
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line" data-cta="pm25-room-line">
                  <IconLine className="h-5 w-5" />
                  ส่งรูปห้องมาให้ประเมิน
                </a>
                {room && (
                  <Link href={`/blog/${room.slug}`} className="btn-ghost">
                    อ่านวิธีทำห้องปลอดฝุ่นเอง
                    <IconChevron className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* บทความ */}
      <section className="section">
        <div className="wrap">
          <h2 className="h2">อ่านเพิ่มก่อนตัดสินใจ</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/blog/${g.slug}`}
                  className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="text-xs font-bold text-brand-600">{g.category}</span>
                  <h3 className="mt-2 font-bold group-hover:text-brand-700">{g.h1}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{g.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-soft">
                    <IconClock className="h-4 w-4" />
                    อ่าน {g.readMins} นาที
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList items={faqs} title="คำถามที่พบบ่อยเรื่องฝุ่นกับแอร์" />

      <section className="section pt-0">
        <div className="wrap">
          <p className="text-sm leading-7 text-ink-soft">
            จองคิวล้างแอร์ก่อนหน้าเผาได้ทุกพื้นที่:{" "}
            {areas.map((a, i) => (
              <span key={a.slug}>
                {i > 0 && " · "}
                <Link href={`/area/${a.slug}`} className="text-brand-700 hover:underline">
                  {a.name}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <CtaBand
        title="จองคิวล้างแอร์ก่อนหน้าเผาปีหน้า"
        subtitle="เดือนมกราคมถึงต้นกุมภาพันธ์คือช่วงที่ดีที่สุด คิวยังว่างและคุณจะเข้าฤดูฝุ่นด้วยแอร์ที่สะอาดเต็มประสิทธิภาพ"
      />
    </>
  );
}
