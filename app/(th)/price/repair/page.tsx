import type { Metadata } from "next";
import Link from "next/link";
import { site, p } from "@/lib/site";
import { repairPricing, symptoms } from "@/lib/repair";
import { getArticle } from "@/content/articles";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconChevron, IconCheck, IconShield, IconWrench } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/Blocks";

const title = "ราคาซ่อมแอร์เชียงใหม่ แยกตามอาการที่เสีย";
const description =
  `ราคาซ่อมแอร์เชียงใหม่ โทร 065-365-7673 ค่าตรวจเช็ค ${p.repair.diagnostic} บาท หักคืนให้เมื่อตัดสินใจซ่อม เติมน้ำยา R32 และ R410A ปอนด์ละ ${p.repair.refrigerantPerLb} บาท พร้อมคู่มืออาการเสียแต่ละแบบ`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ราคาซ่อมแอร์เชียงใหม่", "ค่าซ่อมแอร์ เท่าไหร่", "ซ่อมแอร์ราคา",
    "เติมน้ำยาแอร์ R32 ราคา", "ค่าตรวจเช็คแอร์",
  ],
  alternates: { canonical: "/price/repair" },
  ...share({ title, description, path: `/price/repair` }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ราคาค่าบริการ", path: "/price" },
  { name: "ราคาซ่อมแอร์", path: "/price/repair" },
];

const faqs = [
  {
    q: `ค่าตรวจเช็ค ${p.repair.diagnostic} บาท ต้องชำระทุกกรณีหรือไม่`,
    a: "ชำระเฉพาะกรณีที่ตรวจแล้วไม่ได้ซ่อมครับ หากตัดสินใจซ่อม ผมหักคืนให้ทั้งจำนวนจากค่าซ่อม",
  },
  {
    q: "เหตุใดจึงไม่ระบุราคาอะไหล่ไว้ทุกรายการ",
    a: "เนื่องจากอะไหล่แต่ละยี่ห้อและรุ่นมีราคาต่างกันหลายเท่าครับ คาปาซิเตอร์ของแอร์ธรรมดากับแผงวงจรของอินเวอร์เตอร์อยู่คนละระดับราคา ผมจึงตรวจสภาพจริงก่อนแล้วแจ้งราคาที่แน่นอน ซึ่งชัดเจนกว่าการระบุตัวเลขต่ำไว้แล้วเรียกเก็บเพิ่มภายหลัง",
  },
  {
    q: "น้ำยาแอร์พร่อง คิดค่าใช้จ่ายอย่างไร",
    a: `ผมตรวจวัดให้โดยไม่คิดค่าใช้จ่ายครับ หากพร่องจริงคิดตามจริงปอนด์ละ ${p.repair.refrigerantPerLb} บาท ทั้ง R32 และ R410A แต่หากไม่พร่องจะแจ้งให้ทราบและไม่เติม เนื่องจากการเติมเกินทำให้แรงดันสูงผิดปกติและลดอายุคอมเพรสเซอร์`,
  },
  {
    q: "กรณีน้ำยารั่ว เติมเพียงอย่างเดียวเพียงพอหรือไม่",
    a: "ไม่เพียงพอครับ น้ำยาแอร์อยู่ในระบบปิด หากพร่องแสดงว่ามีรอยรั่ว การเติมโดยไม่แก้ไขรอยรั่วทำให้เสียค่าใช้จ่ายซ้ำภายในไม่กี่เดือน ผมจะตรวจหาจุดรั่วให้พบก่อนแล้วแจ้งค่าซ่อมให้ทราบ",
  },
  {
    q: "งานซ่อมมีการรับประกันหรือไม่",
    a: "มีครับ ระยะรับประกันขึ้นกับประเภทงานและอะไหล่ที่เปลี่ยน ผมแจ้งให้ทราบพร้อมราคาก่อนเริ่มงานเสมอ และหากอาการเดิมเกิดซ้ำภายในระยะนั้น ผมกลับไปแก้ไขให้โดยไม่คิดค่าใช้จ่าย",
  },
  {
    q: "ซ่อมเครื่องเดิมกับซื้อเครื่องใหม่ แบบใดคุ้มค่ากว่า",
    a: "ขึ้นกับอายุเครื่องและค่าซ่อมครับ หากเครื่องมีอายุเกิน 10 ปี ใช้น้ำยา R22 ซึ่งหาได้ยากขึ้นเรื่อย ๆ และค่าซ่อมสูงเกินครึ่งของราคาเครื่องใหม่ ผมจะแนะนำให้เปลี่ยนเครื่อง แม้การรับซ่อมจะให้ผลตอบแทนกับผมมากกว่า",
  },
];

const urgencyStyle = {
  ด่วน: "bg-red-100 text-red-800",
  ควรรีบ: "bg-amber-100 text-amber-800",
  รอได้: "bg-slate-100 text-slate-700",
} as const;

/** "-" = อะไหล่ชิ้นนี้ไม่มีในเครื่องแบบนั้น / null = ต้องดูรุ่นก่อนถึงบอกราคาได้ */
function PriceCell({ value }: { value: string | null | "-" }) {
  if (value === "-") {
    return (
      <>
        <span aria-hidden="true" className="text-slate-300">–</span>
        <span className="sr-only">ไม่มีอะไหล่ชิ้นนี้ในเครื่องประเภทนี้</span>
      </>
    );
  }
  if (value === null) {
    return <span className="text-xs leading-6 text-ink-soft">ประเมินตามรุ่น</span>;
  }
  return <span className="text-[15px] font-bold whitespace-nowrap text-brand-700">{value}</span>;
}

export default function RepairPricePage() {
  const symptomArticles: Record<string, string> = {
    "air-mai-yen": "air-mai-yen-sa-het",
    "air-nam-yot": "air-nam-yot-kae-yang-rai",
    "air-men-ap": "air-men-ap-chuea-ra",
    "air-siang-dang": "air-siang-dang",
    "air-tat-boi": "air-tat-boi",
  };
  const priceGuide = getArticle("rakha-som-air");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <p className="eyebrow">
            <IconWrench className="h-4 w-4" />
            ราคางานซ่อมเป็นข้อมูลที่หาได้ยากในตลาด
          </p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ราคาซ่อมแอร์เชียงใหม่ แบบเปิดเผย
          </h1>
          <p className="lead mt-5">
            สิ่งที่ลูกค้าต้องการทราบมากที่สุดเมื่อแอร์เสียคือค่าใช้จ่ายที่จะเกิดขึ้น
            แต่ราคางานซ่อมเป็นข้อมูลที่หาได้ยากบนเว็บของผู้ให้บริการทั่วไป
            ผมจึงเปิดโครงสร้างค่าใช้จ่ายทั้งหมดไว้ให้พิจารณาก่อนติดต่อ
          </p>
        </section>
      </div>

      {/* หลักการคิดเงิน */}
      <section className="section pt-4">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ค่าซ่อมแอร์ประกอบด้วยอะไรบ้าง</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {[
              { t: "ค่าตรวจเช็ค", d: `ค่าวินิจฉัยหาสาเหตุ ${p.wash.std} บาท และหักคืนให้จากค่าซ่อมเมื่อตัดสินใจซ่อม` },
              { t: "ค่าแรงซ่อม", d: "ขึ้นกับความยากของงาน เช่น การเปลี่ยนคาปาซิเตอร์ง่ายกว่าการเชื่อมท่อรั่วอย่างมาก" },
              { t: "ค่าอะไหล่", d: "คิดตามจริงของแต่ละยี่ห้อและรุ่น พร้อมแสดงอะไหล่เดิมที่ถอดออกมาทุกครั้ง" },
            ].map((x) => (
              <div key={x.t} className="card p-6">
                <p className="font-bold">{x.t}</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="card mt-8 border-2 border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="flex items-center gap-2.5 font-bold text-amber-900">
              <IconShield className="h-5 w-5 shrink-0" />
              ตัวเลขในตารางรวมค่าแรงและค่าอะไหล่แล้ว
            </p>
            <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">
              ราคาระบุเป็นช่วง เนื่องจากอะไหล่แต่ละยี่ห้อและรุ่นมีราคาต่างกัน
              ผมตรวจสภาพเครื่องให้เห็นก่อน แล้วแจ้งราคาที่แน่นอนให้ยืนยันก่อนเริ่มงานทุกครั้ง
              หากไม่ประสงค์จะซ่อม ชำระเพียงค่าตรวจเช็คแล้วจบงานได้ทันทีครับ
            </p>
          </div>

          <div className="mt-6 space-y-6">
            {repairPricing.map((g) => (
              <div key={g.group} className="card overflow-hidden">
                <div className="border-b border-slate-100 bg-slate-50 px-5 py-4 sm:px-6">
                  <h3 className="text-base font-bold">{g.group}</h3>
                  {g.intro && (
                    <p className="mt-1.5 text-sm leading-7 text-ink-soft">{g.intro}</p>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[34rem] border-collapse text-left">
                    <caption className="sr-only">ช่วงราคาประเมินของ{g.group}</caption>
                    <thead>
                      <tr className="border-b border-slate-100 text-xs">
                        <th scope="col" className="px-5 py-3 font-bold sm:px-6">รายการ</th>
                        <th scope="col" className="px-3 py-3 text-right font-bold sm:px-4">แอร์ธรรมดา</th>
                        <th scope="col" className="px-3 py-3 text-right font-bold sm:px-4">แอร์อินเวอร์เตอร์</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {g.items.map((it) => (
                        <tr key={it.job}>
                          <th scope="row" className="px-5 py-4 font-normal sm:px-6">
                            <span className="block text-[15px] leading-7 font-medium text-ink">{it.job}</span>
                            {it.note && (
                              <span className="mt-0.5 block text-xs leading-6 text-ink-soft">{it.note}</span>
                            )}
                          </th>
                          <td className="px-3 py-4 text-right align-top sm:px-4">
                            <PriceCell value={it.std} />
                          </td>
                          <td className="px-3 py-4 text-right align-top sm:px-4">
                            <PriceCell value={it.inv} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-6 border-2 border-mint/40 bg-mint/6 p-6">
            <p className="flex items-center gap-2.5 font-bold text-emerald-800">
              <IconShield className="h-5 w-5 shrink-0" />
              แอร์อินเวอร์เตอร์ไม่มีอะไหล่บางชิ้น
            </p>
            <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">
              แอร์อินเวอร์เตอร์ไม่มีคาปาซิเตอร์คอมเพรสเซอร์และไม่มีแมกเนติก
              เพราะใช้แผงวงจรควบคุมความเร็วคอมเพรสเซอร์แทน
              ช่องที่ขีด (–) ในตารางจึงเป็นอะไหล่ที่เครื่องประเภทนั้นไม่มีติดตั้งอยู่
            </p>
          </div>
        </div>
      </section>

      {/* อาการ */}
      <section className="section bg-sand">
        <div className="wrap max-w-4xl">
          <h2 className="h2">แอร์ของคุณมีอาการใด</h2>
          <p className="lead mt-3">
            เลือกอาการที่ตรงกับเครื่องของคุณ ผมแจกแจงสาเหตุที่เป็นไปได้ไว้ทั้งหมด
            พร้อมระบุว่าข้อใดที่คุณตรวจสอบเองได้ก่อนโดยไม่มีค่าใช้จ่าย
          </p>

          <div className="mt-9 space-y-4">
            {symptoms.map((s) => (
              <details key={s.slug} className="card group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 sm:px-6">
                  <span>
                    <span className="flex flex-wrap items-center gap-2.5">
                      <span className="text-base font-bold sm:text-lg">{s.name}</span>
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${urgencyStyle[s.urgency]}`}>
                        {s.urgency}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm leading-7 text-ink-soft">{s.short}</span>
                  </span>
                  <IconChevron className="mt-1.5 h-5 w-5 shrink-0 text-brand-500 transition-transform group-open:rotate-90" />
                </summary>

                <div className="border-t border-slate-100 px-5 py-5 sm:px-6">
                  <p className="text-sm font-semibold text-ink">สาเหตุที่เป็นไปได้</p>
                  <ul className="mt-3 space-y-3.5">
                    {s.causes.map((c) => (
                      <li key={c.cause} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                            c.diy ? "bg-mint/15 text-emerald-800" : "bg-brand-50 text-brand-700"
                          }`}
                        >
                          {c.diy ? "ตรวจสอบเองได้" : "ต้องใช้ช่าง"}
                        </span>
                        <span>
                          <span className="block text-[15px] font-medium text-ink">{c.cause}</span>
                          <span className="mt-0.5 block text-sm leading-7 text-ink-soft">{c.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  {symptomArticles[s.slug] && (
                    <Link
                      href={`/blog/${symptomArticles[s.slug]}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
                    >
                      อ่านบทความเต็มเรื่อง{s.name}
                      <IconChevron className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* คำถามที่ควรถามก่อนตกลงราคา */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">6 ข้อที่ควรสอบถามก่อนตกลงราคา</h2>
          <p className="lead mt-3">
            คำถามชุดนี้ใช้ได้กับผู้ให้บริการรายใดก็ตาม ไม่จำเป็นต้องเป็นผม
            ผู้ที่ทำงานตามมาตรฐานจะตอบได้ครบทุกข้อ และผมยินดีให้ลูกค้าใช้ตรวจสอบผมด้วยเช่นกัน
          </p>
          <ol className="mt-7 space-y-4">
            {[
              "สาเหตุที่แท้จริงคืออะไร และขอตรวจดูจุดที่ชำรุดได้หรือไม่",
              "ราคารวมทั้งหมดเท่าใด แยกเป็นค่าแรงและค่าอะไหล่อย่างละเท่าใด",
              "อะไหล่ที่ใช้เป็นของแท้หรือของเทียบ และรับประกันกี่วัน",
              "ขอตรวจดูอะไหล่เดิมที่ถอดออกมาได้หรือไม่",
              "หากอาการเดิมเกิดซ้ำ มีเงื่อนไขการรับผิดชอบอย่างไร",
              "น้ำยาที่จะเติมเป็นชนิดใด และผลการวัดระบุว่าพร่องเท่าใด",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/12 text-mint">
                  <IconCheck className="h-4 w-4" />
                </span>
                <span className="text-[15px] leading-8 text-ink-soft">{q}</span>
              </li>
            ))}
          </ol>

          {priceGuide && (
            <Link
              href={`/blog/${priceGuide.slug}`}
              className="card group mt-8 flex items-center justify-between gap-4 p-5 transition-all hover:shadow-lift"
            >
              <span>
                <span className="block text-sm font-semibold text-brand-700">อ่านต่อ</span>
                <span className="mt-0.5 block font-bold group-hover:text-brand-700">{priceGuide.h1}</span>
              </span>
              <IconChevron className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-hover:translate-x-1" />
            </Link>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phoneTel}`} className="btn-call" data-cta="repair-call">
              <IconPhone className="h-5 w-5" />
              โทรแจ้งอาการ {site.phone}
            </a>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line" data-cta="repair-line">
              <IconLine className="h-5 w-5" />
              ส่งคลิปอาการทาง LINE
            </a>
          </div>
        </div>
      </section>

      <FaqList items={faqs} title="คำถามที่พบบ่อยเรื่องค่าซ่อม" />

      <CtaBand
        title="ไม่แน่ใจว่าแอร์มีอาการอะไร ส่งคลิปมาให้ผมดูก่อนได้ครับ"
        subtitle="ถ่ายคลิปขณะเปิดเครื่องส่งมาทาง LINE ได้ หลายกรณีผมประเมินได้ตั้งแต่ก่อนถึงหน้างาน และแจ้งช่วงราคาเบื้องต้นให้ทราบก่อน"
      />
    </>
  );
}
