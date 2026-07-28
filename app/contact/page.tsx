import type { Metadata } from "next";
import Link from "next/link";
import { site, areas, services, faqs } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { IconPhone, IconLine, IconPin, IconClock, IconChevron } from "@/components/Icons";
import { FaqList, Breadcrumbs } from "@/components/Blocks";

const title = "ติดต่อช่างแอร์เชียงใหม่ โทร 065-365-7673 | โปรเฟรชแคร์ สันกำแพง";
const description =
  "ติดต่อช่างแอร์เชียงใหม่ โปรเฟรชแคร์ โทร 065-365-7673 หรือ LINE @794xvrnm เปิดบริการทุกวัน 08:00-20:00 น. ตั้งอยู่ ต.ต้นเปา อ.สันกำแพง จ.เชียงใหม่";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: `${site.url}/contact`, type: "article" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ติดต่อเรา", path: "/contact" },
];

const mapQuery = encodeURIComponent("ต้นเปา สันกำแพง เชียงใหม่");

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <h1 className="text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ติดต่อช่างแอร์เชียงใหม่
          </h1>
          <p className="lead mt-5">
            โทรหรือทัก LINE มาได้เลย เราตอบเร็วในเวลาทำการ
            แจ้งอาการเสีย จำนวนเครื่อง หรือขนาด BTU มาได้ เราประเมินราคาให้ฟรีก่อนตัดสินใจ
          </p>
        </section>
      </div>

      <section className="section pt-4">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="card group flex flex-col items-center p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lift"
            data-cta="contact-call"
          >
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/25">
              <IconPhone className="h-8 w-8" />
            </span>
            <h2 className="mt-5 text-lg font-bold">โทรเรียกช่างทันที</h2>
            <p className="mt-2 text-3xl font-extrabold text-accent">{site.phone}</p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              เหมาะกับงานด่วน แอร์เสียกะทันหัน หรืออยากคุยรายละเอียดกับช่างโดยตรง
            </p>
          </a>

          <a
            href={site.lineUrl}
            target="_blank"
            rel="noopener"
            className="card group flex flex-col items-center p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lift"
            data-cta="contact-line"
          >
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#06C755] text-white shadow-lg shadow-[#06C755]/25">
              <IconLine className="h-8 w-8" />
            </span>
            <h2 className="mt-5 text-lg font-bold">แชททาง LINE</h2>
            <p className="mt-2 text-3xl font-extrabold text-[#06C755]">{site.lineId}</p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              ส่งรูปแอร์หรือรูปอาการเสียมาให้ดูก่อนได้ เราประเมินราคาคร่าว ๆ ให้ทางแชท
            </p>
          </a>
        </div>
      </section>

      <section className="section bg-sand pt-4">
        <div className="wrap grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="h2">ข้อมูลร้าน</h2>
            <dl className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <dt className="font-bold">ที่ตั้ง</dt>
                  <dd className="mt-1 text-[15px] leading-7 text-ink-soft">
                    {site.address.street} {site.address.district}
                    <br />
                    จ.{site.address.province} {site.address.postalCode}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <dt className="font-bold">เวลาทำการ</dt>
                  <dd className="mt-1 text-[15px] leading-7 text-ink-soft">
                    เปิดทุกวัน {site.hours}
                    <br />
                    เข้าหน้างานได้ภายใน 24 ชั่วโมง
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <dt className="font-bold">ช่องทางติดต่อ</dt>
                  <dd className="mt-1 text-[15px] leading-7 text-ink-soft">
                    โทร {site.phone}
                    <br />
                    LINE {site.lineId}
                    <br />
                    <a href={site.facebook} target="_blank" rel="noopener" className="font-semibold text-brand-700 hover:underline">
                      Facebook เพจของเรา
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <iframe
              title="แผนที่ที่ตั้งร้านช่างแอร์เชียงใหม่ ต.ต้นเปา อ.สันกำแพง"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=13&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full border-0 lg:h-full lg:min-h-[24rem]"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">แจ้งอะไรมาบ้างจะได้ราคาเร็วที่สุด</h2>
          <ol className="mt-6 space-y-4">
            {[
              "บริการที่ต้องการ — ล้าง ซ่อม ติดตั้ง หรือย้ายแอร์",
              "จำนวนเครื่องและขนาด BTU (ดูได้จากสติกเกอร์ข้างเครื่อง หรือถ่ายรูปมาให้ดูก็ได้)",
              "ประเภทแอร์ — ติดผนัง แขวน ตู้ตั้ง หรือสี่ทิศทาง",
              "อาการที่เจอ ถ้าเป็นงานซ่อม เช่น ไม่เย็น น้ำหยด มีเสียงดัง ไฟกระพริบ",
              "พื้นที่ของคุณ เช่น สันกำแพง นิมมาน หางดง เพื่อเช็คคิวช่างในโซนนั้น",
            ].map((t, i) => (
              <li key={t} className="flex items-start gap-3.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/service/${s.slug}`}
                className="card flex items-center justify-between gap-3 px-5 py-4 transition-all hover:shadow-lift"
              >
                <span className="font-semibold">{s.name}เชียงใหม่</span>
                <IconChevron className="h-4 w-4 shrink-0 text-brand-500" />
              </Link>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-ink-soft">
            พื้นที่ให้บริการ:{" "}
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

      <FaqList items={faqs} />
    </>
  );
}
