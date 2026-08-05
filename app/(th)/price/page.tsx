import type { Metadata } from "next";
import Link from "next/link";
import { site, pricing, washCompare, faqs, p } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { serviceIcons, IconCheck, IconX, IconChevron, IconShield } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/Blocks";

const title = `ราคาช่างแอร์เชียงใหม่ ทุกบริการ ล้างแอร์ ${p.wash.std}`;
const description =
  `ราคาช่างแอร์เชียงใหม่ ล้างแอร์ 450-${p.wash.big} บาท Premium Full Wash ${p.wash.premium} บาท ติดตั้ง 3,000-${p.install.relocate} บาท ย้ายแอร์ ${p.install.relocate} บาท ไม่มีค่าเดินทางเพิ่ม โทร 065-365-7673`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/price",
    languages: { "th-TH": "/price", "en-US": "/en/pricing", "zh-CN": "/zh/pricing", "x-default": "/price" },
  },
  openGraph: { title, description, url: `${site.url}/price`, type: "article" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ราคาค่าบริการ", path: "/price" },
];

export default function PricePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <h1 className="text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ราคาช่างแอร์เชียงใหม่ ทุกรายการ
          </h1>
          <p className="lead mt-5">
            ผมระบุราคาทุกรายการไว้ให้พิจารณาก่อนติดต่อ ราคาที่แสดงคือราคาที่ชำระจริง
            ไม่มีค่าเดินทางเพิ่มในเขตพื้นที่ให้บริการ หากหน้างานมีค่าใช้จ่ายเพิ่มเติม ผมแจ้งและขอความเห็นชอบก่อนเสมอ
          </p>
        </section>
      </div>

      <section className="section pt-4">
        <div className="wrap max-w-4xl space-y-8">
          {pricing.map((g) => {
            const Icon = serviceIcons[g.icon as keyof typeof serviceIcons];
            return (
              <div key={g.group} className="card overflow-hidden">
                <h2 className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4 text-lg font-bold sm:px-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  {g.group}
                </h2>
                <ul className="divide-y divide-slate-100">
                  {g.items.map((it) => (
                    <li
                      key={it.label}
                      className={`flex items-center justify-between gap-4 px-5 py-4 sm:px-6 ${
                        "highlight" in it && it.highlight ? "bg-brand-50/50" : ""
                      }`}
                    >
                      <span className="text-[15px] leading-7 text-ink-soft">{it.label}</span>
                      <span className="shrink-0 text-lg font-extrabold text-brand-700">{it.price}</span>
                    </li>
                  ))}
                </ul>
                {g.note && (
                  <p className="flex items-start gap-2.5 border-t border-slate-100 bg-mint/6 px-5 py-4 text-sm text-ink-soft sm:px-6">
                    <IconShield className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                    {g.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap max-w-4xl">
          <h2 className="h2 text-center">ล้างธรรมดา {p.wash.std}.- กับ Premium {p.wash.premium}.- ต่างกันอย่างไร</h2>
          <p className="lead mt-3 text-center">
            ส่วนต่างของราคามาจากจำนวนขั้นตอนและเวลาที่ใช้ต่อเครื่อง
          </p>
          <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">ตารางเปรียบเทียบล้างแอร์ธรรมดากับล้างแอร์พรีเมี่ยม</caption>
              <thead>
                <tr className="bg-slate-50">
                  <th scope="col" className="px-4 py-4 text-sm font-bold sm:px-6">ขั้นตอน</th>
                  <th scope="col" className="px-3 py-4 text-center text-sm font-bold sm:px-6">ล้างธรรมดา</th>
                  <th scope="col" className="bg-brand-600 px-3 py-4 text-center text-sm font-bold text-white sm:px-6">
                    Premium Full Wash
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {washCompare.map((row) => (
                  <tr key={row.step}>
                    <th scope="row" className="px-4 py-4 text-[15px] font-medium sm:px-6">{row.step}</th>
                    <td className="px-3 py-4 text-center text-sm sm:px-6">
                      <Cell value={row.normal} />
                    </td>
                    <td className="bg-brand-50/60 px-3 py-4 text-center text-sm font-semibold sm:px-6">
                      <Cell value={row.premium} highlight />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Link href="/service/lang-air" className="btn-ghost">
              อ่านรายละเอียดบริการล้างแอร์
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">เงื่อนไขการให้บริการ</h2>
          <ul className="mt-6 space-y-4">
            {[
              "ราคาล้างแอร์ติดผนังกับแอร์แขวนและสี่ทิศทางแยกกันคนละตาราง เนื่องจากขั้นตอนและเวลาที่ใช้ต่างกันมาก",
              `ค่าตรวจเช็ค ${p.repair.diagnostic} บาท หักคืนให้จากค่าซ่อมเมื่อตัดสินใจซ่อม`,
              `เติมน้ำยาคิดตามจริงปอนด์ละ ${p.repair.refrigerantPerLb} บาท โดยตรวจวัดให้ลูกค้าดูก่อน และไม่เติมหากไม่พร่อง`,
              "ค่าติดตั้งครอบคลุมอุปกรณ์ระยะมาตรฐาน หากต้องเดินท่อยาวกว่ามาตรฐาน ผมแจ้งค่าส่วนเกินก่อนเริ่มงาน",
              "รับประกันงานล้าง 30 วัน ทุกแบบ (ธรรมดาและพรีเมี่ยม) งานติดตั้งรับประกันสูงสุด 1 ปี",
              "ชำระหลังงานเสร็จและลูกค้าตรวจรับเรียบร้อยแล้ว รับทั้งเงินสดและโอน ไม่มีการเก็บมัดจำล่วงหน้า",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/12 text-mint">
                  <IconCheck className="h-4 w-4" />
                </span>
                <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList items={faqs} />
      <CtaBand
        title="ต้องการทราบราคาที่แน่นอนสำหรับหน้างานของคุณ"
        subtitle="แจ้งจำนวนเครื่อง ขนาด BTU หรืออาการเสียเข้ามา ผมประเมินให้ทันทีโดยไม่คิดค่าใช้จ่าย"
      />
    </>
  );
}

function Cell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (value === true) {
    return (
      <>
        <IconCheck className={`mx-auto h-5 w-5 ${highlight ? "text-brand-600" : "text-mint"}`} />
        <span className="sr-only">มีให้</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <IconX className="mx-auto h-5 w-5 text-slate-300" />
        <span className="sr-only">ไม่มี</span>
      </>
    );
  }
  return <span className={highlight ? "text-brand-800" : "text-ink-soft"}>{value}</span>;
}
