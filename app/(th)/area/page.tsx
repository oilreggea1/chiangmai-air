import type { Metadata } from "next";
import Link from "next/link";
import { areas, services, coverage, coverageTotal } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPin, IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";

const title = "พื้นที่ให้บริการช่างแอร์เชียงใหม่ 5 อำเภอ";
const description =
  "ช่างแอร์เชียงใหม่ รับงาน อ.สันกำแพง อ.สารภี อ.เมืองเชียงใหม่ (ทุกตำบล) อ.ดอยสะเก็ด และ ต.สันพระเนตร อ.สันทราย ไม่คิดค่าเดินทางเพิ่ม";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/area",
    languages: { "th-TH": "/area", "en-US": "/en/areas", "x-default": "/area" },
  },
  ...share({ title, description, path: `/area` }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "พื้นที่ให้บริการ", path: "/area" },
];

export default function AreaIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <p className="eyebrow">
            <IconPin className="h-4 w-4" />
            ที่ตั้ง ต.สันกำแพง อ.สันกำแพง
          </p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            พื้นที่ให้บริการช่างแอร์เชียงใหม่
          </h1>
          <p className="lead mt-5">
            ผมรับงานในอำเภอสันกำแพง สารภี เมืองเชียงใหม่ ดอยสะเก็ด และ ต.สันพระเนตร อ.สันทราย
            รวม {coverage.length} อำเภอ {coverageTotal} ตำบล โดยไม่คิดค่าเดินทางเพิ่ม
            สำหรับอำเภอเมืองเชียงใหม่ผมรับทุกตำบล ส่วนอำเภออื่นรับเฉพาะตำบลที่อยู่ในระยะให้บริการ
            เลือกโซนของคุณเพื่อดูรายละเอียด หรือดูรายชื่อตำบลทั้งหมดที่ด้านล่าง
          </p>
        </section>
      </div>

      <section className="section pt-4">
        <div className="wrap">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/area/${a.slug}`}
                  className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/70 transition-all group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white group-hover:ring-brand-700">
                    <IconPin className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold group-hover:text-brand-700">
                    ช่างแอร์{a.name}
                  </h2>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm font-medium text-ink-soft">
                    {a.full}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">{a.note}</p>
                  <p className="mt-4 text-xs leading-6 text-ink-soft">
                    ครอบคลุม: {a.landmarks.join(" · ")}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    ดูรายละเอียดโซนนี้
                    <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* รายชื่อตำบลครบ — หน้าเดียวจบ ไม่แตกเป็นหน้าละตำบล */}
      <section className="section bg-sand" id="tambon">
        <div className="wrap max-w-4xl">
          <h2 className="h2">รายชื่อตำบลในเขตให้บริการ</h2>
          <p className="lead mt-3">
            ค้นหาชื่อตำบลของคุณในรายการนี้ หากปรากฏอยู่ในรายการแสดงว่าอยู่ในเขตให้บริการ คิดราคาเดียวกันทุกพื้นที่
          </p>

          <div className="mt-9 space-y-4">
            {coverage.map((c) => (
              <div key={c.amphoe} className="card overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3.5 sm:px-6">
                  <h3 className="text-base font-bold">{c.amphoe}</h3>
                  <span className="text-sm font-semibold text-brand-700">
                    {c.tambons.length} ตำบล
                  </span>
                </div>
                <div className="px-5 py-4 sm:px-6">
                  <ul className="flex flex-wrap gap-2">
                    {c.tambons.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-brand-100 bg-brand-50/60 px-3 py-1 text-sm font-medium text-brand-800"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  {"all" in c && c.all && (
                    <p className="mt-3.5 text-xs leading-6 text-ink-soft">
                      อำเภอนี้ผมรับทุกตำบล
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-6 border-2 border-brand-200 bg-brand-50 p-5 sm:p-6">
            <p className="flex items-center gap-2.5 font-bold text-brand-800">
              <IconPin className="h-5 w-5 shrink-0" />
              ตำบลอื่นนอกเหนือจากนี้ เรียกได้หรือไม่
            </p>
            <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">
              ตำบลเหล่านี้ผมเข้าถึงได้โดยไม่คิดค่าเดินทางเพิ่ม
              ส่วนตำบลอื่นที่ไกลออกไปผมยังรับงานได้ แต่อาจมีค่าเดินทางตามระยะ
              หากที่ตั้งของคุณไม่ได้ระบุไว้ สอบถามเข้ามาได้ครับ
              ผมแจ้งตามจริงว่าไปได้หรือไม่ และมีค่าเดินทางเพิ่มเท่าใดก่อนตกลงนัด
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">หากไม่พบพื้นที่ของคุณในรายการ สอบถามเข้ามาได้ครับ</h2>
          <p className="lead mt-4">
            สอบถามเข้ามาได้ครับ ผมจะแจ้งตามจริงว่าสามารถให้บริการได้หรือไม่
            กรณีที่ให้บริการได้แต่มีค่าเดินทางเพิ่ม ผมแจ้งให้ทราบก่อนตกลงงานเสมอ
            และหากระยะทางไกลจนไม่คุ้มค่าใช้จ่ายสำหรับคุณ ผมจะแจ้งตามจริงเช่นกัน
          </p>

          <h3 className="mt-10 text-lg font-bold">บริการที่ครอบคลุมทุกพื้นที่</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/service/${s.slug}`}
                  className="card flex items-center justify-between gap-3 px-5 py-4 transition-all hover:shadow-lift"
                >
                  <span className="font-semibold">{s.name}เชียงใหม่</span>
                  <span className="shrink-0 text-sm font-bold text-brand-700">{s.priceLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
