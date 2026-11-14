import type { Metadata } from "next";
import Link from "next/link";
import { p, btu, coverage } from "@/lib/site";
import { marketPrices } from "@/lib/market-prices";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share, clipDesc } from "@/lib/seo";
import { IconChevron, IconShield } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/Blocks";
import { MarketPrices } from "@/components/MarketPrices";

/**
 * หน้า "ราคาแอร์พร้อมติดตั้ง" (14 พ.ย. 2569)
 * เจ้าของสั่งขายแอร์ใหม่ราคาเดียวกับห้างค้าปลีกรายใหญ่ — ตัวเลขรายรุ่นอยู่ที่ lib/market-prices.ts ที่เดียว
 * ตั้งใจรับคำ "ราคาแอร์พร้อมติดตั้ง เชียงใหม่" / "ร้านแอร์ เชียงใหม่" / "แอร์เชียงใหม่" ที่เว็บเรายังไม่มีหน้าตอบตรง
 * ห้ามเขียนชื่อห้างต้นทาง ห้ามรับปากเรื่องสต็อก ระยะเวลาส่ง หรือเงื่อนไขชำระเงินที่เจ้าของยังไม่ได้ยืนยัน
 */
const fmt = (n: number) => n.toLocaleString("en-US");
const all = marketPrices.flatMap((b) => b.units);
const minPrice = fmt(Math.min(...all.map((u) => u.price)));
const brandCount = new Set(all.map((u) => u.brand)).size;

const title = `ราคาแอร์พร้อมติดตั้ง เชียงใหม่ อินเวอร์เตอร์ เริ่ม ${minPrice} บาท`;
const description = `ราคาแอร์ติดผนังอินเวอร์เตอร์พร้อมติดตั้งในเชียงใหม่ ${all.length} รุ่น ${brandCount} ยี่ห้อ เริ่ม ${minPrice} บาท รวมขาแขวน ท่อไม่เกิน 4 เมตร รางครอบ แวคคั่มครบขั้นตอน งานติดตั้งรับประกัน 1 ปี สั่งรุ่นที่ต้องการทาง LINE ได้ทันที`;

export const metadata: Metadata = {
  title,
  description: clipDesc(description),
  keywords: [
    "ราคาแอร์พร้อมติดตั้ง เชียงใหม่", "แอร์พร้อมติดตั้ง เชียงใหม่", "ร้านแอร์ เชียงใหม่",
    "แอร์เชียงใหม่", "ซื้อแอร์ เชียงใหม่", "แอร์อินเวอร์เตอร์ ราคา",
  ],
  alternates: { canonical: "/price/air-install" },
  ...share({ title, description: clipDesc(description), path: "/price/air-install" }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ราคาค่าบริการ", path: "/price" },
  { name: "ราคาแอร์พร้อมติดตั้ง", path: "/price/air-install" },
];

const faqs = [
  {
    q: "ราคาในตารางรวมอะไรบ้าง",
    a: "รวมตัวเครื่องและงานติดตั้งมาตรฐานครับ ได้แก่ ค่าแรงติดตั้ง ขาแขวนคอยล์ร้อน ท่อน้ำยาพร้อมฉนวนไม่เกิน 4 เมตร ท่อน้ำทิ้ง รางครอบ และการแวคคั่มไล่ความชื้นออกจากระบบครบทุกขั้นตอน",
  },
  {
    q: "หน้างานต้องเดินท่อยาวกว่า 4 เมตร คิดอย่างไร",
    a: "ผมวัดระยะจริงที่หน้างานแล้วแจ้งค่าส่วนที่เกินให้ทราบก่อนเริ่มงานครับ ถ้ายังไม่ตกลง ผมจะยังไม่เริ่มงาน",
  },
  {
    q: "รับประกันอย่างไร",
    a: "งานติดตั้งรับประกัน 1 ปี เมื่อซื้อเครื่องกับผม ส่วนตัวเครื่องรับประกันตามเงื่อนไขของผู้ผลิตแต่ละยี่ห้อ",
  },
  {
    q: "ราคาเปลี่ยนบ่อยไหม",
    a: "ราคาแอร์ปรับตามรอบโปรโมชั่นของแต่ละยี่ห้อครับ ผมระบุวันที่ของราคาไว้เหนือตาราง และยืนยันราคาล่าสุดให้ทาง LINE ก่อนสั่งซื้อทุกครั้ง",
  },
  {
    q: "รุ่นที่ต้องการไม่มีในตาราง สั่งได้ไหม",
    a: "สอบถามได้ครับ ส่งชื่อยี่ห้อและรหัสรุ่นมาทาง LINE ผมตรวจราคาและแจ้งกลับ ถ้ายังไม่แน่ใจว่าควรใช้กี่ BTU ส่งขนาดห้องมาให้ผมช่วยคำนวณก่อนได้",
  },
  {
    q: "มีแอร์เก่าอยู่แล้ว รับเทิร์นได้ไหม",
    a: "ได้ครับ ต้องดูเครื่องจริงก่อนจึงตีราคาได้ ส่งรูปเครื่องกับสติกเกอร์รุ่นมาทาง LINE เพื่อประเมินคร่าว ๆ ก่อนได้",
  },
  {
    q: "ซื้อเครื่องมาเองแล้ว ให้มาติดตั้งอย่างเดียวได้ไหม",
    a: `ได้ครับ ไม่ว่าซื้อจากร้านใดหรือสั่งออนไลน์ ${btu.installSmall} BTU จุดละ ${p.install.small} บาท ${btu.installLarge} BTU จุดละ ${p.install.large} บาท รวมขาแขวน ท่อไม่เกิน 4 เมตร และรางครอบเหมือนกัน งานติดตั้งกรณีนี้รับประกัน 6 เดือน`,
  },
  {
    q: "ขอใบกำกับภาษีได้ไหม",
    a: "ได้ครับ ร้านจดทะเบียนภาษีมูลค่าเพิ่มแล้ว ออกใบกำกับภาษีเต็มรูปได้ แจ้งชื่อและเลขประจำตัวผู้เสียภาษีมาก่อนวันติดตั้ง",
  },
];

export default function AirInstallPricePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <p className="eyebrow">
            <IconShield className="h-4 w-4" />
            งานติดตั้งรับประกัน 1 ปี
          </p>
          <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
            ราคาแอร์พร้อมติดตั้ง เชียงใหม่
          </h1>
          <p className="lead mt-5">
            แอร์ติดผนังอินเวอร์เตอร์ {all.length} รุ่น {brandCount} ยี่ห้อ ขนาด 9,000–24,000 BTU เริ่ม {minPrice} บาท
            ราคารวมตัวเครื่องและงานติดตั้งมาตรฐาน ติดตั้งถึงบ้านใน
            <Link href="/area" className="underline underline-offset-2">เขตบริการ {coverage.length} อำเภอ</Link>
          </p>
        </section>
      </div>

      <section className="section pt-4">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ซื้อแอร์พร้อมติดตั้งกับผมได้อะไรบ้าง</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {[
              { t: "ติดตั้งครบในราคาเดียว", d: "ขาแขวน ท่อน้ำยาไม่เกิน 4 เมตร ท่อน้ำทิ้ง รางครอบ และแวคคั่มระบบครบทุกขั้นตอน" },
              { t: "รับประกันงานติดตั้ง 1 ปี", d: "ยาวกว่ากรณีหาเครื่องมาเอง ตัวเครื่องรับประกันตามเงื่อนไขของผู้ผลิต" },
              { t: "ดูแลต่อได้ที่เดียว", d: "ล้าง ซ่อม หรือย้ายแอร์ในภายหลัง ติดต่อช่องทางเดิมได้เลย ไม่ต้องหาช่างใหม่" },
            ].map((x) => (
              <div key={x.t} className="card p-6">
                <p className="font-bold">{x.t}</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketPrices pageLink={false} />

      <section className="section">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ไม่แน่ใจว่าควรใช้กี่ BTU</h2>
          <p className="lead mt-3">
            เครื่องเล็กเกินห้องทำงานหนักและกินไฟ เครื่องใหญ่เกินห้องก็เปลืองเงินโดยไม่จำเป็น
            ส่งขนาดห้องเป็นตารางเมตรและทิศที่รับแดดมาทาง LINE ผมคำนวณให้ก่อนเลือกรุ่น
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service/tid-tang-air" className="btn-ghost">
              ขั้นตอนงานติดตั้งแอร์
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/service/khai-air" className="btn-ghost">
              ร้านแอร์ ใหม่และมือสอง รับเทิร์นเครื่องเก่า
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/customer/ban-mai" className="btn-ghost">
              ติดแอร์บ้านใหม่ทั้งหลัง
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FaqList items={faqs} title="คำถามที่พบบ่อยเรื่องแอร์พร้อมติดตั้ง" />

      <CtaBand
        title="เลือกรุ่นได้แล้ว หรืออยากให้ช่วยเลือก ทักมาทาง LINE ได้ครับ"
        subtitle="แจ้งรุ่นที่สนใจ ขนาดห้อง และพื้นที่ติดตั้ง ผมยืนยันราคาและนัดวันติดตั้งให้"
      />
    </>
  );
}
