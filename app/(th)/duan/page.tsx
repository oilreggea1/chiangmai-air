import type { Metadata } from "next";
import Link from "next/link";
import { site, p } from "@/lib/site";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconCheck, IconChevron, IconClock, IconLine, IconPhone } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/Blocks";

/**
 * หน้าสำหรับคำค้นตอนร้อนใจ เช่น ช่างแอร์ด่วนเชียงใหม่ หรือ ช่างแอร์วันอาทิตย์
 *
 * กติกาสำคัญของหน้านี้: ห้ามเขียนเกินจากที่รับได้จริง
 * เวลาทำการจริงคือ จันทร์–เสาร์ 08:00–18:00 และวันอาทิตย์หยุด
 * เจ้าของยืนยันเองว่า "ถ้าเร่งด่วนมากให้โทรมา จะหาคิวให้" ซึ่งคือสิ่งที่หน้านี้พูด
 * ไม่เขียนว่ารับ 24 ชั่วโมง ไม่เขียนว่าเปิดทุกวัน และไม่รับปากเวลาที่ทำไม่ได้
 * เพราะคนที่ร้อนใจแล้วโดนเลื่อนจะเสียหายกว่าไม่ได้ลูกค้ารายนั้นตั้งแต่แรก
 */
const title = "ช่างแอร์ด่วนเชียงใหม่ นอกเวลา วันอาทิตย์ โทรถามคิวได้";
const description = `ช่างแอร์ด่วนเชียงใหม่ ปกติเข้าหน้างานได้ภายใน 24 ชั่วโมง รับนัดนอกเวลาทำการได้ วันอาทิตย์หยุดแต่ถ้าเร่งด่วนมากโทรมาได้ ผมจะหาคิวให้`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/duan" },
  ...share({ title, description, path: `/duan` }),
};

const faqs = [
  {
    q: "เรียกช่างแอร์ด่วนในเชียงใหม่ เข้าได้เร็วที่สุดเมื่อไร?",
    a: "ปกติผมเข้าหน้างานได้ภายใน 24 ชั่วโมงครับ และเข้าในวันเดียวกันได้หากคิวว่าง ยกเว้นช่วงกุมภาพันธ์ถึงเมษายนที่คิวแน่นทั้งจังหวัด โทรมาถามคิวได้ครับ ผมแจ้งตามจริงว่าเข้าได้เร็วที่สุดวันใดและเวลาใด และยืนยันเฉพาะคิวที่เข้าได้จริงตั้งแต่ตอนโทร",
  },
  {
    q: "วันอาทิตย์รับงานหรือไม่?",
    a: `เวลาทำการปกติคือ${site.daysLabel} ${site.hours} และวันอาทิตย์ผมหยุด แต่กรณีเร่งด่วนมาก โทรเข้ามาได้ครับ ผมจะพยายามจัดคิวให้`,
  },
  {
    q: "นัดนอกเวลาทำการได้หรือไม่ คิดเพิ่มเท่าไร?",
    a: `${site.afterHours} ผมจะบอกยอดรวมให้ทราบก่อนตกลงนัดเสมอ เพื่อไม่ให้มีตัวเลขใหม่โผล่ตอนจบงาน`,
  },
  {
    q: "แอร์เสียกลางดึก ควรทำอย่างไรก่อนช่างมา?",
    a: "ปิดเบรกเกอร์ของแอร์ก่อนครับ โดยเฉพาะถ้ามีกลิ่นไหม้ มีควัน หรือมีน้ำหยดลงจุดที่มีไฟฟ้า อย่าเปิดเครื่องซ้ำเพื่อลองดูอีก เพราะถ้าเป็นปัญหาทางไฟฟ้าการเปิดซ้ำจะทำให้เสียหายลามกว่าเดิม แล้วโทรหรือส่ง LINE แจ้งอาการไว้ได้ครับ ผมตอบตอนเช้าและจัดคิวให้เป็นลำดับต้น",
  },
  {
    q: "เรียกด่วนคิดค่าบริการแพงกว่าปกติหรือไม่?",
    a: `งานที่เข้าในเวลาทำการปกติคิดราคาเดียวกับงานทั่วไปครับ ล้างแอร์ติดผนังเครื่องละ ${p.wash.std} บาท ค่าตรวจเช็คงานซ่อม ${p.repair.diagnostic} บาทซึ่งหักคืนให้ถ้าตกลงซ่อม ส่วนงานที่ต้องเข้านอกเวลาทำการจะมีค่าบริการเพิ่ม และผมแจ้งราคาก่อนตกลงนัดทุกครั้ง`,
  },
  {
    q: "แจ้งอาการอย่างไรให้ช่างเตรียมของมาได้ตรง?",
    a: "บอกสามอย่างครับ หนึ่งคือยี่ห้อกับรุ่น ถ่ายรูปป้ายที่ตัวเครื่องส่งมาได้ครับ สองคืออาการที่เจอและเริ่มเมื่อไร เช่น ไม่เย็นเลย เย็นแล้วตัด มีน้ำหยด หรือมีเสียงผิดปกติ สามคือถ้ามีรหัสขึ้นบนจอหรือมีไฟกระพริบ ถ่ายวิดีโอตั้งแต่เริ่มรอบมาด้วย สามอย่างนี้ช่วยให้ผมเตรียมอะไหล่ให้ตรงและลดโอกาสที่ต้องกลับไปเบิกของเพิ่ม",
  },
];

const points = [
  {
    t: "โทรถามคิวได้ทันที ผมแจ้งตามจริงว่าเข้าได้เร็วที่สุดวันใด",
    d: "ผมยืนยันเฉพาะคิวที่เข้าได้จริงตั้งแต่ตอนโทร หากคิวเต็มจะแจ้งวันที่เข้าได้เร็วที่สุดให้ทราบทันที เพื่อให้คุณวางแผนต่อได้",
  },
  {
    t: "ปกติเข้าหน้างานได้ภายใน 24 ชั่วโมง",
    d: "งานส่วนใหญ่ผมเข้าได้ภายในวันถัดไป และเข้าวันเดียวกันได้หากคิวว่าง ข้อยกเว้นคือช่วงกุมภาพันธ์ถึงเมษายนซึ่งเป็นฤดูที่คิวแน่นทั้งจังหวัด ช่วงนั้นควรเผื่อเวลามากกว่าปกติ",
  },
  {
    t: "นอกเวลาทำการนัดได้ และแจ้งราคาก่อนเสมอ",
    d: "งานที่ต้องเข้าหลัง 18:00 น. หรือก่อน 08:00 น. ผมรับนัดให้ได้โดยมีค่าบริการเพิ่ม และแจ้งยอดรวมให้ทราบก่อนตกลงนัด ไม่มีการเรียกเก็บเพิ่มภายหลัง",
  },
  {
    t: "วันอาทิตย์หยุด แต่เรื่องเร่งด่วนมากโทรมาได้",
    d: "วันอาทิตย์เป็นวันหยุดของผม แต่กรณีเร่งด่วนมาก โทรเข้ามาได้ครับ ผมจะพยายามจัดคิวให้",
  },
];

export default function DuanPage() {
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "ช่างแอร์ด่วน", path: "/duan" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-14 lg:pb-20">
          <p className="eyebrow">งานเร่งด่วน · จ.เชียงใหม่</p>
          <h1 className="mt-5 max-w-3xl text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ช่างแอร์ด่วนเชียงใหม่ โทรถามคิวได้ทันที
          </h1>
          <p className="lead mt-5 max-w-3xl">
            ปกติผมเข้าหน้างานได้ภายใน 24 ชั่วโมง และเข้าวันเดียวกันได้หากคิวว่าง
            โทรมาถามได้ทันที ผมแจ้งตามจริงว่าเข้าได้เร็วที่สุดวันใด
            หากเข้าไม่ได้ ผมจะแจ้งให้ทราบทันที เพื่อให้คุณวางแผนหาทางแก้ได้ทันเวลา
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="duan-call">
              <IconPhone className="h-5 w-5" />
              โทรถามคิว {site.phone}
            </a>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="duan-line">
              <IconLine className="h-5 w-5" />
              ส่งอาการทาง LINE
            </a>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-soft">
            <IconClock className="h-5 w-5 text-brand-600" />
            เวลาทำการ {site.daysLabel} {site.hours} · {site.closedNote}
          </p>
        </section>
      </div>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">เรียกด่วนแล้วได้อะไรบ้าง</h2>
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {points.map((pt) => (
              <div key={pt.t} className="card p-6">
                <h3 className="flex items-start gap-3 text-lg font-bold">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
                  {pt.t}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{pt.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* สิ่งที่ทำได้เองระหว่างรอ ซึ่งเป็นเหตุผลที่คนกดเข้าหน้านี้ตอนตีสอง */}
      <section className="section bg-slate-50">
        <div className="wrap">
          <h2 className="h2">ระหว่างรอช่าง ทำอะไรได้บ้าง</h2>
          <div className="mt-8 space-y-5">
            <div className="card p-6">
              <h3 className="text-lg font-bold">มีกลิ่นไหม้ มีควัน หรือน้ำหยดลงจุดที่มีไฟ</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">
                ปิดเบรกเกอร์ของแอร์ทันทีและอย่าเปิดซ้ำเพื่อลองดูอีก
                ถ้าเป็นปัญหาทางไฟฟ้า การเปิดซ้ำจะทำให้ความเสียหายลามกว่าเดิมและค่าซ่อมสูงขึ้นมาก
                เรื่องนี้สำคัญกว่าการรีบให้ช่างมา
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold">ไม่เย็นเลย แต่เครื่องยังทำงานปกติ</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">
                ลองถอดแผ่นกรองออกมาดูก่อนได้ครับ ถ้าฝุ่นอัดจนมองไม่เห็นแสงลอด
                นั่นอาจเป็นสาเหตุหลักและแก้ได้ด้วยการล้าง ไม่ใช่การซ่อม
                ลองดูคอยล์ร้อนนอกบ้านด้วยว่าพัดลมยังหมุนอยู่หรือไม่ ข้อมูลนี้ช่วยให้ผมเตรียมของได้ตรงขึ้น
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold">มีน้ำหยดจากตัวเครื่องในห้อง</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">
                ปิดเครื่องแล้วรองภาชนะไว้ก่อนครับ อาการนี้ส่วนใหญ่มาจากท่อน้ำทิ้งอุดตัน
                ซึ่งไม่ใช่เรื่องฉุกเฉินที่ต้องเรียกกลางดึก และแก้ได้โดยไม่ต้องรื้อเครื่อง
                รอให้ช่างเข้าในเวลาทำการปกติจะประหยัดกว่า
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/blog/air-mai-yen-sa-het" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900">
              อ่านเรื่องแอร์ไม่เย็น 10 สาเหตุ
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/price/repair" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900" data-cta="duan-price-repair">
              ดูราคาซ่อมแยกตามอาการ
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <FaqList items={faqs} title="คำถามที่พบบ่อยเรื่องเรียกช่างด่วน" />
        </div>
      </section>

      <CtaBand
        title="ต้องการช่างแอร์ด่วนในเชียงใหม่"
        subtitle={`โทรถามคิวได้ทันที ผมแจ้งตามจริงว่าเข้าได้เร็วที่สุดวันใด ค่าตรวจเช็ค ${p.repair.diagnostic} บาท ซึ่งหักคืนให้ถ้าตกลงซ่อม และแจ้งราคาครบก่อนเริ่มงานเสมอ`}
      />
    </>
  );
}
