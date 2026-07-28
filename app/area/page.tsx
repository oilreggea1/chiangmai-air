import type { Metadata } from "next";
import Link from "next/link";
import { site, areas, services } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { IconPin, IconChevron } from "@/components/Icons";
import { CtaBand, Breadcrumbs } from "@/components/Blocks";

const title = "พื้นที่ให้บริการช่างแอร์เชียงใหม่ สันกำแพง ต้นเปา เมืองเชียงใหม่";
const description =
  "ช่างแอร์เชียงใหม่ให้บริการครอบคลุมสันกำแพง ต้นเปา บ่อสร้าง อำเภอเมืองเชียงใหม่ นิมมาน ช้างเผือก หนองป่าครั่ง ท่าศาลา ป่าแดด ช้างคลาน หางดง สารภี และสันทราย ไม่มีค่าเดินทางเพิ่ม";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/area" },
  openGraph: { title, description, url: `${site.url}/area`, type: "article" },
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
            ฐานอยู่ ต.ต้นเปา อ.สันกำแพง
          </p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            พื้นที่ให้บริการช่างแอร์เชียงใหม่
          </h1>
          <p className="lead mt-5">
            ผมวิ่งงานทั้งฝั่งสันกำแพงและอำเภอเมืองเชียงใหม่
            กดเลือกพื้นที่ของคุณเพื่อดูรายละเอียด ราคา และเวลาเข้างานของโซนนั้นได้เลย
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
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <IconPin className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold group-hover:text-brand-700">
                    ช่างแอร์{a.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-ink-soft">{a.full}</p>
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

      <section className="section bg-sand">
        <div className="wrap max-w-3xl">
          <h2 className="h2">ไม่เห็นพื้นที่ของคุณในรายการ?</h2>
          <p className="lead mt-4">
            รายการด้านบนคือโซนที่ผมรับงานบ่อยที่สุด แต่ผมวิ่งทั่วจังหวัดเชียงใหม่ครับ
            ถ้าที่ของคุณไม่อยู่ในรายการ ทักมาถามได้เลย ผมบอกตรง ๆ ว่าไปได้หรือไปไม่ได้
            และถ้ามีค่าเดินทางเพิ่ม ผมบอกให้ทราบก่อนตกลงงานเสมอ
          </p>

          <h3 className="mt-10 text-lg font-bold">งานที่ผมรับทุกพื้นที่</h3>
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
