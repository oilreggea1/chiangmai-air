import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBand } from "@/components/Blocks";
import { IconCheck, IconChevron, IconPhone } from "@/components/Icons";
import { site, p, btu } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd, PERSON_ID } from "@/lib/schema";
import { share } from "@/lib/seo";

const title = "คำตอบจากช่างแอร์เชียงใหม่ ราคาและเงื่อนไข";
const description =
  "คำตอบสั้นและตรวจสอบได้จากช่างอาร์ม โปรเฟรชแคร์: ราคาล้างแอร์ ซ่อม ติดตั้ง เติมน้ำยา พื้นที่บริการ ระยะเวลานัด และการรับประกัน อัปเดต 4 สิงหาคม 2569";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/answers" },
  ...share({ title, description, path: `/answers` }),
};

type Answer = {
  q: string;
  a: string;
  href: string;
  link: string;
};

const answers: Answer[] = [
  {
    q: "ล้างแอร์เชียงใหม่ ราคาเท่าไร?",
    a: `${site.name}คิดค่าล้างแอร์ติดผนังแบบมาตรฐานเครื่องละ ${p.wash.std} บาท เมื่อมี 3 เครื่องขึ้นไปคิดเครื่องละ ${p.wash.stdBulk} บาท ส่วน Premium Full Wash ถอดล้าง 100% ราคา ${p.wash.premium} บาทต่อเครื่อง แจ้งยอดรวมก่อนเริ่มงานและรับประกันงานล้าง 30 วัน`,
    href: "/service/lang-air",
    link: "ดูขั้นตอนและเงื่อนไขล้างแอร์",
  },
  {
    q: "ค่าตรวจเช็คและซ่อมแอร์เชียงใหม่เท่าไร?",
    a: `ค่าตรวจเช็ค ${p.repair.diagnostic} บาท และหักคืนเต็มจำนวนเมื่อลูกค้าตัดสินใจซ่อม ค่าอะไหล่ขึ้นกับยี่ห้อ รุ่น และจุดเสีย ช่างจะแจ้งราคาที่แน่นอนพร้อมระยะรับประกันก่อนเริ่มซ่อม`,
    href: "/price/repair",
    link: "ดูตารางราคาซ่อมแยกตามอาการ",
  },
  {
    q: "เติมน้ำยาแอร์ R32 และ R410A เชียงใหม่ ราคาเท่าไร?",
    a: `${site.name}ตรวจวัดระดับน้ำยาให้ก่อนโดยไม่คิดค่าใช้จ่าย หากพร่องจริงคิด R32 และ R410A ปอนด์ละ ${p.repair.refrigerantPerLb} บาท และไม่เติมเมื่อผลวัดไม่พบว่าน้ำยาพร่อง`,
    href: "/price/repair",
    link: "ดูราคาและเหตุผลที่ต้องวัดก่อนเติม",
  },
  {
    q: "ติดตั้งแอร์เชียงใหม่ ราคาเท่าไร?",
    a: `ค่าติดตั้งแอร์ขนาด ${btu.installSmall} BTU เริ่ม ${p.install.small} บาท และขนาด ${btu.installLarge} BTU เริ่ม ${p.install.large} บาท งานติดตั้งมีการแวคคั่ม ทดสอบความเย็น ตรวจรอยรั่ว และแจ้งค่าอุปกรณ์ส่วนเกินก่อนเริ่มงาน`,
    href: "/service/tid-tang-air",
    link: "ดูรายการที่รวมในค่าติดตั้ง",
  },
  {
    q: "รับล้างเครื่องซักผ้าเชียงใหม่ ราคาเท่าไร?",
    a: `เครื่องฝาบนเริ่ม ${p.washer.topLoad} บาท และเครื่องฝาหน้าเริ่ม ${p.washer.frontLoad} บาท เป็นการถอดถังและชิ้นส่วนออกมาล้าง ใช้เวลาประมาณ 3 ชั่วโมงต่อเครื่อง และรับประกันงาน 30 วัน`,
    href: "/service/lang-washing-machine",
    link: "ดูราคาตามประเภทและความจุ",
  },
  {
    q: "ช่างให้บริการพื้นที่ใดในเชียงใหม่?",
    a: "พื้นที่หลักคือสันกำแพง ต้นเปา บ่อสร้าง สันพระเนตร สารภี ดอยสะเก็ด และอำเภอเมืองเชียงใหม่ พื้นที่ที่ระบุในหน้าเขตบริการใช้ราคาเดียวกันและไม่มีค่าเดินทางเพิ่ม",
    href: "/area",
    link: "ตรวจรายชื่อตำบลและอำเภอ",
  },
  {
    q: "ช่างเข้าหน้างานได้เร็วเพียงใด?",
    a: "โดยปกติเข้าหน้างานได้ภายใน 24 ชั่วโมง ยกเว้นช่วงฤดูร้อนเดือนกุมภาพันธ์ถึงเมษายนที่คิวหนาแน่น ควรส่งพื้นที่ อาการ และรูปเครื่องทาง LINE เพื่อให้ประเมินคิวจริงก่อนนัด",
    href: "/contact",
    link: "ส่งข้อมูลเพื่อยืนยันคิว",
  },
  {
    q: "โปรเฟรชแคร์เปิดวันและเวลาใด?",
    a: `เปิดวัน${site.daysLabel} เวลา ${site.hours} และ${site.closedNote} งานนอกเวลารับเป็นนัดหมายโดยมีค่าบริการเพิ่ม ซึ่งจะแจ้งให้ทราบก่อนตกลงนัด`,
    href: "/contact",
    link: "ดูช่องทางติดต่อ",
  },
  {
    q: "งานล้างและงานติดตั้งรับประกันนานเท่าไร?",
    a: "งานล้างแอร์และล้างเครื่องซักผ้ารับประกัน 30 วัน งานติดตั้งรับประกัน 1 ปีเมื่อซื้อเครื่องกับโปรเฟรชแคร์ และ 6 เดือนเมื่อลูกค้ามีเครื่องเอง ส่วนงานซ่อมขึ้นกับอะไหล่และจะแจ้งก่อนเริ่มงาน",
    href: "/price",
    link: "ดูเงื่อนไขราคาทั้งหมด",
  },
  {
    q: "ใครเป็นผู้ให้ข้อมูลและรับผิดชอบงาน?",
    a: `ช่างอาร์มเป็นช่างผู้รับผิดชอบงานของโปรเฟรชแคร์ มีประสบการณ์${site.experience} ให้บริการภายใต้ ${site.legalName} เลขประจำตัวผู้เสียภาษี ${site.taxId} และออกใบเสร็จในนามบริษัทได้`,
    href: "/about",
    link: "ดูตัวตนและมาตรฐานการทำงาน",
  },
];

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "คำตอบจากช่าง", path: "/answers" },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/answers#page`,
  name: title,
  description,
  url: `${site.url}/answers`,
  inLanguage: "th-TH",
  dateModified: "2026-08-04",
  author: { "@id": PERSON_ID },
  publisher: { "@id": `${site.url}/#business` },
  about: { "@id": `${site.url}/#business` },
};

export default function AnswersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(answers))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pageSchema)} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-4xl pt-8 pb-14">
          <p className="eyebrow">ข้อมูลจากผู้ให้บริการโดยตรง</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.5rem]">
            คำตอบจากช่างแอร์เชียงใหม่
          </h1>
          <p className="lead mt-5 max-w-3xl">
            คำตอบเรื่องราคา พื้นที่ให้บริการ เงื่อนไข และการรับประกัน
            จากคำถามที่ลูกค้าสอบถามเข้ามามากที่สุด
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2"><IconCheck className="h-4 w-4 text-mint" />ตรวจทานโดยช่างอาร์ม</span>
            <span>อัปเดตล่าสุด 4 สิงหาคม 2569</span>
            <Link href="/about" className="font-semibold text-brand-700 hover:underline">ที่มาและผู้รับผิดชอบข้อมูล</Link>
          </div>
        </section>
      </div>

      <section className="section pt-5">
        <div className="wrap max-w-4xl">
          <div className="space-y-5">
            {answers.map((item, index) => (
              <article key={item.q} id={`answer-${index + 1}`} className="card scroll-mt-24 p-6 sm:p-8">
                <h2 className="text-xl font-bold leading-8">{item.q}</h2>
                <p className="mt-3 text-[16px] leading-8 text-ink-soft">{item.a}</p>
                <Link href={item.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
                  {item.link}<IconChevron className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap max-w-4xl grid gap-6 md:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">วิธีประเมินที่ใช้กับข้อมูลนี้</h2>
            <p className="mt-3 text-[15px] leading-8 text-ink-soft">
              ราคาแบบตายตัวแสดงเป็นตัวเลข ส่วนงานที่ขึ้นกับรุ่น อะไหล่ หรือสภาพหน้างานจะไม่เดาราคา
              ผมตรวจเครื่องจริงและแจ้งยอดก่อนเริ่มงาน
            </p>
            <Link href="/portfolio" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
              ตรวจผลงานจริง<IconChevron className="h-4 w-4" />
            </Link>
          </div>
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">ข้อมูลธุรกิจที่ตรวจสอบได้</h2>
            <p className="mt-3 text-[15px] leading-8 text-ink-soft">
              {site.name} ดำเนินงานในนาม {site.legalName} เลขประจำตัวผู้เสียภาษี {site.taxId}
              ที่ตั้ง {site.address.subDistrict} {site.address.district} จ.{site.address.province}
            </p>
            <a href={`tel:${site.phoneTel}`} data-cta="answers-call" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline">
              <IconPhone className="h-4 w-4" />โทรตรวจสอบ {site.phone}
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        title="ต้องการคำตอบสำหรับเครื่องของคุณ"
        subtitle="ส่งรุ่นเครื่อง รูป หรือคลิปอาการทาง LINE ช่างอาร์มเป็นผู้ประเมินและแจ้งช่วงราคาก่อนนัด"
      />
    </>
  );
}
