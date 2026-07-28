import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { repairPricing, symptoms } from "@/lib/repair";
import { getArticle } from "@/content/articles";
import { faqSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { IconPhone, IconLine, IconChevron, IconCheck, IconShield, IconWrench } from "@/components/Icons";
import { CtaBand, FaqList, Breadcrumbs } from "@/components/Blocks";

const title = "ราคาซ่อมแอร์เชียงใหม่ แยกตามอาการ + ค่าตรวจเช็คหักคืนให้";
const description =
  "ราคาซ่อมแอร์เชียงใหม่แบบเปิดเผย ค่าตรวจเช็ค 500 บาทหักคืนให้ถ้าซ่อมกับเรา เติมน้ำยา R32 และ R410A ปอนด์ละ 25 บาท พร้อมคู่มืออาการเสียแต่ละแบบว่าเกิดจากอะไร โทร 065-365-7673";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ราคาซ่อมแอร์เชียงใหม่", "ค่าซ่อมแอร์ เท่าไหร่", "ซ่อมแอร์ราคา",
    "เติมน้ำยาแอร์ R32 ราคา", "ค่าตรวจเช็คแอร์",
  ],
  alternates: { canonical: "/price/repair" },
  openGraph: { title, description, url: `${site.url}/price/repair`, type: "article" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ราคาค่าบริการ", path: "/price" },
  { name: "ราคาซ่อมแอร์", path: "/price/repair" },
];

const faqs = [
  {
    q: "ค่าตรวจเช็ค 500 บาท ต้องจ่ายทุกกรณีไหม",
    a: "จ่ายเฉพาะกรณีที่ตรวจแล้วไม่ได้ซ่อมกับเราครับ ถ้าตัดสินใจซ่อม เราหักค่าตรวจเช็คออกจากค่าซ่อมให้ทั้งจำนวน เท่ากับไม่ได้เสียเพิ่ม",
  },
  {
    q: "ทำไมไม่ลงราคาอะไหล่ทุกตัวไว้เลย",
    a: "เพราะราคาอะไหล่ต่างกันมากตามยี่ห้อและรุ่นครับ คาปาซิเตอร์ของแอร์ธรรมดากับแผงวงจรของแอร์อินเวอร์เตอร์ราคาห่างกันหลายเท่า เราจึงตรวจให้เห็นของจริงก่อนแล้วแจ้งราคาที่แน่นอน ดีกว่าลงตัวเลขลอย ๆ ไว้แล้วมาบวกเพิ่มทีหลัง",
  },
  {
    q: "น้ำยาแอร์ขาด คิดยังไง",
    a: "ตรวจระดับน้ำยาให้ฟรีครับ ถ้าขาดจริงคิดตามจริงปอนด์ละ 25 บาท ทั้ง R32 และ R410A แต่ถ้าน้ำยาไม่ขาด เราไม่เติม เพราะการเติมเกินทำให้แรงดันสูงผิดปกติและคอมเพรสเซอร์พังเร็วขึ้น",
  },
  {
    q: "ถ้าน้ำยารั่ว เติมอย่างเดียวพอไหม",
    a: "ไม่พอครับ น้ำยาแอร์เป็นระบบปิด ถ้าพร่องแปลว่ามีรอยรั่ว การเติมโดยไม่หารอยรั่วคือการละลายเงินทิ้ง เพราะอีกไม่กี่เดือนก็จะกลับมาขาดอีก เราจะหาจุดรั่วให้เจอก่อนแล้วแจ้งค่าซ่อมให้ทราบ",
  },
  {
    q: "ซ่อมแล้วมีรับประกันไหม",
    a: "มีครับ ระยะรับประกันขึ้นกับประเภทงานและอะไหล่ที่เปลี่ยน เราแจ้งให้ทราบพร้อมกับราคาก่อนเริ่มงานเสมอ กรณีน้ำหยดถ้ากลับมาเป็นซ้ำในระยะรับประกัน เรากลับไปดูแลให้ฟรี",
  },
  {
    q: "ซ่อมแอร์เก่ากับซื้อใหม่ อันไหนคุ้มกว่า",
    a: "ขึ้นกับอายุเครื่องและค่าซ่อมครับ ถ้าเครื่องเกิน 10 ปี ใช้น้ำยา R22 ที่หายากขึ้นเรื่อย ๆ และค่าซ่อมเกินครึ่งของราคาเครื่องใหม่ เรามักแนะนำให้เปลี่ยน เราบอกตรง ๆ แม้ว่าการซ่อมจะทำให้เราได้เงินมากกว่าก็ตาม",
  },
];

const urgencyStyle = {
  ด่วน: "bg-red-100 text-red-800",
  ควรรีบ: "bg-amber-100 text-amber-800",
  รอได้: "bg-slate-100 text-slate-700",
} as const;

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
            ร้านแอร์ในเชียงใหม่ส่วนใหญ่ไม่ลงราคาซ่อมไว้เลย
          </p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ราคาซ่อมแอร์เชียงใหม่ แบบเปิดเผย
          </h1>
          <p className="lead mt-5">
            เวลาแอร์เสีย สิ่งที่คนอยากรู้ที่สุดคือ &ldquo;จะโดนเท่าไหร่&rdquo;
            แต่เว็บร้านแอร์ส่วนใหญ่ให้โทรถามอย่างเดียว
            หน้านี้เราเปิดโครงสร้างค่าใช้จ่ายทั้งหมดให้ดูก่อนตัดสินใจโทร
          </p>
        </section>
      </div>

      {/* หลักการคิดเงิน */}
      <section className="section pt-4">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ค่าซ่อมแอร์ประกอบด้วยอะไรบ้าง</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {[
              { t: "ค่าตรวจเช็ค", d: "ค่าวินิจฉัยหาสาเหตุที่แท้จริง 500 บาท และหักคืนให้ถ้าซ่อมกับเรา" },
              { t: "ค่าแรงซ่อม", d: "ขึ้นกับความยากของงาน เช่น เปลี่ยนคาปาซิเตอร์ง่ายกว่าเชื่อมท่อรั่วมาก" },
              { t: "ค่าอะไหล่", d: "ตามจริงของแต่ละยี่ห้อและรุ่น เราให้ดูของเก่าที่ถอดออกมาทุกครั้ง" },
            ].map((x) => (
              <div key={x.t} className="card p-6">
                <p className="font-bold">{x.t}</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            {repairPricing.map((g) => (
              <div key={g.group} className="card overflow-hidden">
                <h3 className="border-b border-slate-100 bg-slate-50 px-5 py-4 text-base font-bold sm:px-6">
                  {g.group}
                </h3>
                <ul className="divide-y divide-slate-100">
                  {g.items.map((it) => (
                    <li key={it.job} className="flex items-start justify-between gap-4 px-5 py-4 sm:px-6">
                      <span>
                        <span className="block text-[15px] leading-7 text-ink">{it.job}</span>
                        {it.note && (
                          <span className="mt-0.5 block text-xs leading-6 text-ink-soft">{it.note}</span>
                        )}
                      </span>
                      <span
                        className={`shrink-0 font-bold ${
                          it.price ? "text-brand-700" : "text-sm font-medium text-ink-soft"
                        }`}
                      >
                        {it.price ?? "แจ้งราคาก่อนซ่อม"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card mt-6 border-2 border-mint/40 bg-mint/6 p-6">
            <p className="flex items-center gap-2.5 font-bold text-emerald-800">
              <IconShield className="h-5 w-5" />
              ทำไมค่าอะไหล่ถึงไม่ลงตัวเลขตายตัว
            </p>
            <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">
              เพราะอะไหล่ต่างยี่ห้อต่างรุ่นราคาห่างกันหลายเท่า
              การลงตัวเลขลอย ๆ ไว้แล้วมาบวกเพิ่มหน้างานคือสิ่งที่เราไม่ทำ
              เราตรวจให้คุณเห็นของจริง อธิบายว่าเสียตรงไหน แล้วแจ้งราคาที่แน่นอนก่อนลงมือทุกครั้ง
              ถ้าคุณไม่โอเคกับราคา จ่ายแค่ค่าตรวจเช็คแล้วจบได้เลย ไม่มีการกดดัน
            </p>
          </div>
        </div>
      </section>

      {/* อาการ */}
      <section className="section bg-sand">
        <div className="wrap max-w-4xl">
          <h2 className="h2">แอร์คุณเป็นอาการไหน</h2>
          <p className="lead mt-3">
            กดดูอาการที่ตรงกับแอร์ของคุณ เราแจกแจงสาเหตุที่เป็นไปได้ทั้งหมด
            และบอกด้วยว่าอันไหนคุณเช็คเองได้ก่อนโดยไม่ต้องเสียเงิน
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
                          {c.diy ? "เช็คเองได้" : "ต้องใช้ช่าง"}
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

      {/* กันโดนบวก */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">6 คำถามที่ควรถามช่างก่อนตกลงซ่อม</h2>
          <p className="lead mt-3">
            ถามครบ 6 ข้อนี้กับช่างเจ้าไหนก็ได้ ไม่จำเป็นต้องเป็นเรา
            เพราะช่างที่ทำงานตรงไปตรงมาจะตอบได้หมดโดยไม่ลังเล
          </p>
          <ol className="mt-7 space-y-4">
            {[
              "สาเหตุที่แท้จริงคืออะไร และขอดูจุดที่เสียได้ไหม",
              "ราคารวมทั้งหมดเท่าไหร่ แยกเป็นค่าแรงกับค่าอะไหล่เท่าไหร่",
              "อะไหล่ที่ใช้เป็นของแท้หรือเทียบ และรับประกันกี่วัน",
              "ขอดูอะไหล่เก่าที่ถอดออกมาได้ไหม",
              "ถ้าซ่อมแล้วอาการเดิมกลับมา จะรับผิดชอบยังไง",
              "น้ำยาที่จะเติมคือชนิดไหน และวัดแล้วขาดจริงเท่าไหร่",
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
              โทรเล่าอาการ {site.phone}
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
        title="ไม่แน่ใจว่าแอร์เป็นอะไร?"
        subtitle="ถ่ายคลิปตอนเปิดแอร์ส่งมาทาง LINE ได้เลย หลายเคสเราดูออกตั้งแต่ยังไม่ถึงหน้างาน และบอกช่วงราคาคร่าว ๆ ให้ก่อนได้"
      />
    </>
  );
}
