import type { Metadata } from "next";
import Link from "next/link";
import { site, p, services } from "@/lib/site";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconChevron, IconCheck, IconShield, IconWasher } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs, CheckList } from "@/components/Blocks";

/**
 * หน้าราคาล้างเครื่องซักผ้าโดยเฉพาะ (13 ก.ย. 2569)
 *
 * ที่มา: Search Console 1 ส.ค. – 11 ก.ย. 2569 มีคำค้นกลุ่มราคาล้างเครื่องซักผ้า
 * เข้ามารวมกันราว 300 ครั้งต่อเดือน กระจายอยู่หลายสำนวน
 * (ราคาล้างถังเครื่องซักผ้า 109 · ค่าล้างถังเครื่องซักผ้า 72 · ล้างถังเครื่องซักผ้า ราคา 44
 *  ค่าบริการล้างเครื่องซักผ้า 27 · ค่าล้างเครื่องซักผ้า 20 · ราคาล้างเครื่องซักผ้า 10)
 * อันดับเฉลี่ยกระจายตั้งแต่ 3.4 ถึง 19 เพราะยังไม่มีหน้าไหนที่พูดเรื่องราคาโดยตรง
 * ตารางราคาที่มีอยู่เดิมปนอยู่ในหน้า /price ซึ่งพูดทุกบริการพร้อมกัน
 *
 * ตัวเลขทุกตัวดึงจาก p.washer เท่านั้น ห้ามพิมพ์ซ้ำ (ตัวดักราคาใน scripts/check-prices.mjs จะจับได้)
 */

const title = `ราคาล้างเครื่องซักผ้าเชียงใหม่ ฝาบนเริ่ม ${p.washer.topLoad} ฝาหน้าเริ่ม ${p.washer.frontLoad} บาท`;
const description =
  `ราคาล้างถังเครื่องซักผ้าถึงบ้านในเชียงใหม่ ฝาบนเริ่ม ${p.washer.topLoad} บาทตามความจุเครื่อง ฝาหน้าเริ่ม ${p.washer.frontLoad} บาท ถอดถังออกมาล้างทุกชิ้น ใช้เวลาราว 3 ชั่วโมง แจ้งราคาก่อนเริ่มงาน รับประกัน 30 วัน`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ราคาล้างเครื่องซักผ้า", "ราคาล้างถังเครื่องซักผ้า", "ค่าล้างถังเครื่องซักผ้า",
    "ค่าล้างเครื่องซักผ้า", "ล้างเครื่องซักผ้า ราคา", "ล้างถังเครื่องซักผ้า ราคา",
    "ค่าบริการล้างเครื่องซักผ้า", "ราคาล้างเครื่องซักผ้าฝาบน", "ราคาล้างเครื่องซักผ้าฝาหน้า",
    "ล้างเครื่องซักผ้าเชียงใหม่ ราคา",
  ],
  alternates: { canonical: "/price/washing-machine" },
  ...share({ title, description, path: "/price/washing-machine" }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ราคาค่าบริการ", path: "/price" },
  { name: "ราคาล้างเครื่องซักผ้า", path: "/price/washing-machine" },
];

/** แถวราคา ประกาศชุดเดียวเพราะต้องแสดงสองแบบ การ์ดบนมือถือและตารางบนจอใหญ่ */
const rows = [
  {
    job: "เครื่องฝาบน ความจุไม่เกิน 15 กิโลกรัม",
    note: "ครอบคลุมเครื่องขนาดที่ใช้กันมากที่สุดตามบ้าน",
    price: `${p.washer.topLoad} บาท`,
  },
  {
    job: "เครื่องฝาบน ความจุ 15.1 ถึง 19 กิโลกรัม",
    note: "ถังใหญ่ขึ้น ใช้เวลาถอดและล้างนานกว่า",
    price: `${p.washer.topLoadMid} บาท`,
  },
  {
    job: "เครื่องฝาบน ความจุมากกว่า 19 กิโลกรัม",
    note: "เครื่องขนาดใหญ่ที่พบในหอพักและบ้านที่ซักผ้าจำนวนมาก",
    price: `${p.washer.topLoadBig} บาท`,
  },
  {
    job: "เครื่องฝาหน้า ทุกความจุ",
    note: "ต้องถอดขอบยางประตู ช่องจ่ายน้ำยา และตัวกรองปั๊มน้ำทิ้งเพิ่ม เครื่องความจุสูงประเมินหน้างานก่อนแจ้งราคา",
    price: `เริ่ม ${p.washer.frontLoad} บาท`,
  },
  {
    job: "ขนเครื่องออกไปล้างนอกสถานที่",
    note: "ใช้เมื่อพื้นที่รอบเครื่องไม่พอให้ถอดถังออกมาวาง คิดเพิ่มจากค่าล้างตามชนิดเครื่อง",
    price: `เพิ่ม ${p.washer.offsiteSurcharge} บาท`,
  },
];

const included = [
  "ถอดถังและชิ้นส่วนออกมาล้างแยกทุกชิ้น ทั้งด้านในและด้านนอกถัง",
  "ล้างช่องจ่ายน้ำยา กรองเศษใยผ้า และท่อน้ำทิ้ง พร้อมตรวจการอุดตัน",
  "ประกอบกลับ ตั้งระดับเครื่อง และเดินเครื่องทดสอบให้ตรวจรับก่อนส่งมอบ",
  "ไม่มีค่าเดินทางเพิ่มในพื้นที่บริการ",
  "รับประกันงาน 30 วัน สำหรับความเสียหายที่เกิดจากการทำงานของช่าง",
];

const faqs = [
  {
    q: "ล้างเครื่องซักผ้าราคาเท่าใดในเชียงใหม่",
    a: `เครื่องฝาบนเริ่มที่ ${p.washer.topLoad} บาทสำหรับความจุไม่เกิน 15 กิโลกรัม ${p.washer.topLoadMid} บาทสำหรับ 15.1 ถึง 19 กิโลกรัม และ ${p.washer.topLoadBig} บาทสำหรับความจุมากกว่านั้น ส่วนเครื่องฝาหน้าเริ่มที่ ${p.washer.frontLoad} บาทครับ ราคานี้เป็นราคาที่ชำระจริง ไม่มีค่าเดินทางเพิ่มในพื้นที่บริการ`,
  },
  {
    q: "เหตุใดเครื่องฝาหน้าจึงคิดราคาสูงกว่าฝาบน",
    a: "เพราะโครงสร้างต่างกันครับ เครื่องฝาหน้าวางถังในแนวนอนและมีแผ่นถ่วงน้ำหนักคอนกรีตยึดอยู่กับถัง การถอดจึงต้องรื้อชิ้นส่วนตามลำดับและใช้แรงมากกว่า อีกทั้งยังมีขอบยางประตู ช่องจ่ายน้ำยา และตัวกรองปั๊มน้ำทิ้งที่ต้องถอดล้างเพิ่ม ซึ่งเครื่องฝาบนไม่มี",
  },
  {
    q: "ราคานี้รวมค่าอะไหล่ด้วยหรือไม่",
    a: "ไม่รวมครับ ค่าบริการที่ระบุคือค่าล้างทั้งหมด หากพบว่าอะไหล่ชำรุดอยู่เดิม เช่น ขอบยางประตูฉีกหรือลูกปืนมีเสียงผิดปกติ ผมแจ้งให้ทราบตอนถอดพร้อมค่าใช้จ่าย แล้วให้คุณตัดสินใจก่อนดำเนินการ",
  },
  {
    q: "มีค่าใช้จ่ายเพิ่มในกรณีใดบ้าง",
    a: `มีกรณีเดียวคือเมื่อพื้นที่หน้างานไม่พอให้ถอดถังออกมาวาง ซึ่งต้องขนเครื่องออกไปล้างนอกสถานที่แล้วนำกลับมาติดตั้งคืน คิดเพิ่ม ${p.washer.offsiteSurcharge} บาทครับ ส่งภาพจุดที่ตั้งเครื่องมาทาง LINE ก่อนได้ ผมประเมินให้ว่าจำเป็นหรือไม่`,
  },
  {
    q: "ล้างเครื่องซักผ้าใช้เวลานานเท่าใด",
    a: "ประมาณ 3 ชั่วโมงต่อเครื่องครับ เนื่องจากเป็นการถอดชิ้นส่วนออกมาล้างแยกทั้งหมด แล้วประกอบกลับพร้อมเดินเครื่องทดสอบหนึ่งรอบ",
  },
  {
    q: "ควรล้างเครื่องซักผ้าทุกกี่เดือน",
    a: "บ้านที่ซักทุกวันแนะนำให้ล้างปีละครั้งครับ ส่วนหอพักหรือบ้านที่ใช้เครื่องหลายรอบต่อวันจะสะสมคราบเร็วกว่า อาจต้องล้างทุก 6 ถึง 8 เดือน สัญญาณที่ชัดที่สุดคือมีเศษสีดำติดออกมากับเสื้อผ้า หรือเปิดฝาแล้วได้กลิ่นอับทั้งที่เพิ่งซักเสร็จ",
  },
];

export default function WashingMachinePricePage() {
  const children = services.filter((s) => s.slug.startsWith("lang-washing-machine-"));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <p className="eyebrow">
            <IconWasher className="h-4 w-4" />
            รู้ค่าใช้จ่ายก่อนเรียกช่าง
          </p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ราคาล้างเครื่องซักผ้าเชียงใหม่ คิดตามชนิดเครื่องและความจุ
          </h1>
          <p className="lead mt-5">
            ผมล้างแบบถอดถังออกมาล้างทุกชิ้น ไม่ใช่การเทน้ำยาลงไปแล้วปั่น
            ค่าบริการจึงคิดตามโครงสร้างเครื่องที่ต้องถอด เครื่องฝาบนเริ่ม {p.washer.topLoad} บาท
            เครื่องฝาหน้าเริ่ม {p.washer.frontLoad} บาท ถึงบ้านทุกตำบลใน
            <Link href="/area" className="underline underline-offset-2">เขตบริการ 5 อำเภอ</Link>
          </p>
        </section>
      </div>

      {/* ราคาคิดจากอะไร */}
      <section className="section pt-4">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ค่าล้างเครื่องซักผ้าคิดจากอะไร</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {[
              { t: "ชนิดของเครื่อง", d: "ฝาบนกับฝาหน้าถอดคนละวิธีและมีจุดที่ต้องล้างไม่เท่ากัน จึงคิดคนละเรต" },
              { t: "ความจุถัง", d: "ถังยิ่งใหญ่ ชิ้นส่วนยิ่งหนักและใช้เวลาถอดประกอบนานขึ้น เรตฝาบนจึงแบ่งตามกิโลกรัม" },
              { t: "พื้นที่หน้างาน", d: `หากรอบเครื่องไม่พอให้ถอดถังออกมาวาง ต้องขนออกไปล้างนอกสถานที่ คิดเพิ่ม ${p.washer.offsiteSurcharge} บาท` },
            ].map((x) => (
              <div key={x.t} className="card p-6">
                <p className="font-bold">{x.t}</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{x.d}</p>
              </div>
            ))}
          </div>

          {/* มือถือ: แถวละการ์ด อ่านราคาได้ครบโดยไม่ต้องปัดข้าง */}
          <ul className="mt-9 space-y-4 sm:hidden">
            {rows.map((r) => (
              <li key={r.job} className="card p-5">
                <p className="text-[15px] font-bold leading-7">{r.job}</p>
                <p className="mt-1.5 text-2xl font-extrabold text-brand-700">{r.price}</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{r.note}</p>
              </li>
            ))}
          </ul>

          <div className="card mt-9 hidden overflow-x-auto sm:block">
            <table className="w-full sm:min-w-[34rem] border-collapse text-left">
              <caption className="px-5 pt-5 text-left text-sm text-ink-soft sm:px-6">
                ราคาล้างเครื่องซักผ้าถึงบ้าน แยกตามชนิดเครื่องและความจุ
              </caption>
              <thead>
                <tr className="border-b border-slate-100 text-xs">
                  <th scope="col" className="px-5 py-3 font-bold sm:px-6">รายการ</th>
                  <th scope="col" className="px-4 py-3 text-right font-bold">ค่าบริการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r) => (
                  <tr key={r.job}>
                    <th scope="row" className="px-5 py-4 font-normal sm:px-6">
                      <span className="block text-[15px] leading-7 font-medium text-ink">{r.job}</span>
                      <span className="mt-0.5 block text-xs leading-6 text-ink-soft">{r.note}</span>
                    </th>
                    <td className="px-4 py-4 text-right align-top">
                      <span className="text-[15px] font-bold whitespace-nowrap text-brand-700">{r.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card mt-8 border-2 border-brand-200 bg-brand-50/60 p-5 sm:p-6">
            <p className="flex items-center gap-2.5 font-bold text-brand-800">
              <IconShield className="h-5 w-5 shrink-0" />
              ราคาที่แสดงคือราคาที่ชำระจริง
            </p>
            <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">
              ผมแจ้งราคาก่อนเริ่มงานทุกครั้ง หากเปิดเครื่องแล้วพบรายการที่ต้องทำเพิ่ม
              ผมหยุดถามก่อนเสมอ และหากคุณไม่ประสงค์ทำต่อ สามารถจบงานได้โดยไม่มีค่าใช้จ่ายส่วนนั้น
            </p>
          </div>
        </div>
      </section>

      {/* รวมอะไรบ้าง + ทางไปหน้าชนิดเครื่อง */}
      <section className="section bg-sand">
        <div className="wrap grid max-w-4xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">ค่าบริการนี้รวมอะไรบ้าง</h2>
            <div className="mt-6">
              <CheckList items={included} />
            </div>
          </div>
          <div>
            <h2 className="h2">ดูขั้นตอนของเครื่องแต่ละชนิด</h2>
            <p className="mt-4 text-[15px] leading-8 text-ink-soft">
              จุดที่คราบสะสมและวิธีถอดของเครื่องสองชนิดนี้ต่างกันทั้งหมด
              เลือกชนิดที่ตรงกับเครื่องของคุณเพื่อดูรายละเอียดงาน
            </p>
            <div className="mt-6 grid gap-4">
              {children.map((c) => (
                <Link
                  key={c.slug}
                  href={`/service/${c.slug}`}
                  className="card group flex items-center justify-between gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  data-cta={`wm-price-${c.slug}`}
                >
                  <span>
                    <span className="block font-bold">{c.name}เชียงใหม่</span>
                    <span className="mt-1 block text-sm leading-7 text-ink-soft">{c.short}</span>
                  </span>
                  <IconChevron className="h-5 w-5 shrink-0 text-brand-700 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
              <Link
                href="/service/lang-washing-machine"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
                data-cta="wm-price-hub"
              >
                <IconCheck className="h-4 w-4" />
                ดูภาพรวมบริการล้างเครื่องซักผ้าทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">คำถามที่พบบ่อยเรื่องราคาล้างเครื่องซักผ้า</h2>
          <div className="mt-7">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="ต้องการทราบราคาของเครื่องที่บ้านคุณ"
        subtitle={`ส่งภาพเครื่องและรุ่นมาทาง LINE หรือโทร ${site.phone} ผมประเมินและแจ้งราคาให้ทราบก่อนตัดสินใจ`}
      />
    </>
  );
}
