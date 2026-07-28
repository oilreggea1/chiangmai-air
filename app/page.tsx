import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  site, services, areas, values, brands, reviews, faqs, washCompare, gallery, edges,
} from "@/lib/site";
import { articles } from "@/content/articles";
import { faqSchema, jsonLd } from "@/lib/schema";
import {
  serviceIcons, IconPhone, IconLine, IconCheck, IconX, IconPin, IconChevron, IconClock, IconShield,
} from "@/components/Icons";
import { CtaBand, FaqList, ReviewCard } from "@/components/Blocks";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand-200/40 blur-3xl"
        />
        <div className="wrap relative grid gap-12 pt-12 pb-16 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pt-20 lg:pb-24">
          <div>
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              ตั้งอยู่ ต.ต้นเปา สันกำแพง · เข้างานไวที่สุดในโซน
            </p>

            <h1 className="mt-5 text-[2rem] leading-[1.25] font-extrabold sm:text-[2.6rem] lg:text-[3.1rem]">
              ช่างแอร์เชียงใหม่ ล้างแอร์ ซ่อมแอร์{" "}
              <span className="text-brand-600">ถึงบ้าน</span>
            </h1>

            <p className="lead mt-5 max-w-xl">
              ล้างสะอาด ซ่อมไว จริงใจ ไม่ทิ้งงาน — เราแจ้งราคาชัดเจนก่อนเริ่มงานทุกครั้ง
              ไม่ยัดเยียดเติมน้ำยาถ้าไม่ขาดจริง และเข้าหน้างานได้ภายใน 24 ชั่วโมง
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn-call px-7 py-4 text-lg" data-cta="hero-call">
                <IconPhone className="h-5 w-5" />
                โทร {site.phone}
              </a>
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noopener"
                className="btn-line px-7 py-4 text-lg"
                data-cta="hero-line"
              >
                <IconLine className="h-5 w-5" />
                จองคิวทาง LINE
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {[
                { k: "550.-", v: "ล้างแอร์เริ่มต้น" },
                { k: "24 ชม.", v: "เข้าหน้างานเร็วสุด" },
                { k: "60 วัน", v: "รับประกันงานล้าง" },
                { k: "12 ยี่ห้อ", v: "อะไหล่แท้ทุกแบรนด์" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl font-extrabold text-brand-700 sm:text-[1.6rem]">{s.k}</dt>
                  <dd className="mt-0.5 text-sm text-ink-soft">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
              <Image
                src={gallery[1].src}
                alt="ช่างแอร์เชียงใหม่กำลังล้างแอร์ถึงบ้านลูกค้า พร้อมปูผ้าใบกันเลอะ"
                width={900}
                height={1200}
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-[24rem] w-full object-cover sm:h-[30rem]"
              />
            </div>
            <div className="card absolute -bottom-5 left-4 flex items-center gap-3 px-4 py-3 sm:left-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint/12 text-mint">
                <IconShield className="h-6 w-6" />
              </span>
              <span className="text-sm leading-tight">
                <strong className="block text-ink">แจ้งราคาก่อนเริ่มงาน</strong>
                <span className="text-ink-soft">ไม่มีบวกเพิ่มทีหลัง</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- บริการ ---------- */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">บริการของเรา</p>
            <h2 className="h2 mt-4">ครบทุกงานแอร์ จบที่ทีมเดียว</h2>
            <p className="lead mt-3">
              ตั้งแต่ล้างประจำปี ซ่อมอาการเสีย ติดตั้งเครื่องใหม่ ไปจนถึงย้ายแอร์ตอนย้ายบ้าน
              เลือกดูรายละเอียดและราคาของแต่ละบริการได้เลย
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
              return (
                <Link
                  key={s.slug}
                  href={`/service/${s.slug}`}
                  className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{s.name}เชียงใหม่</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    {s.priceLabel}
                    <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- คุณค่า ---------- */}
      <section className="section bg-sand">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">ทำไมต้องเรา</p>
            <h2 className="h2 mt-4">คุณค่าที่เรามอบให้ แตกต่างยังไง?</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = serviceIcons[v.icon as keyof typeof serviceIcons];
              return (
                <div key={v.title} className="card p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600/10 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold sm:text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{v.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <h3 className="text-center text-sm font-semibold tracking-wide text-ink-soft uppercase">
              ยี่ห้อที่เราเชี่ยวชาญและใช้อะไหล่แท้
            </h3>
            <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
              {brands.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-soft"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- แบนเนอร์ PM2.5 ---------- */}
      <section className="section pb-0">
        <div className="wrap">
          <Link
            href="/pm25"
            className="group grid gap-6 overflow-hidden rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-7 transition-all hover:shadow-lift sm:p-9 lg:grid-cols-[1.5fr_1fr] lg:items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1.5 text-sm font-semibold text-amber-900 ring-1 ring-amber-200">
                <IconPin className="h-4 w-4" />
                เรื่องที่คนเชียงใหม่ต้องรู้
              </span>
              <h2 className="mt-4 text-xl font-extrabold group-hover:text-brand-700 sm:text-2xl">
                หน้าเผา ก.พ.–เม.ย. ทำให้แอร์คุณตันเร็วกว่าปกติหลายเท่า
              </h2>
              <p className="mt-3 text-[15px] leading-8 text-ink-soft">
                แผ่นกรองที่ติดมากับแอร์กรอง PM2.5 ไม่ได้ แต่แอร์ยังจำเป็นเพราะทำให้คุณปิดห้องได้
                เราสรุปให้ครบว่าควรล้างตอนไหน ล้างแบบไหน และทำห้องปลอดฝุ่นยังไงให้ได้ผลจริง
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700">
                อ่านคู่มือสู้ฝุ่นฉบับเต็ม
                <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <dl className="grid grid-cols-2 gap-4 rounded-2xl bg-white/70 p-5 ring-1 ring-amber-200">
              <div>
                <dt className="text-2xl font-extrabold text-amber-700">6,676</dt>
                <dd className="mt-0.5 text-xs leading-6 text-ink-soft">จุดความร้อนภาคเหนือ ต้นปี 2569</dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-amber-700">+67%</dt>
                <dd className="mt-0.5 text-xs leading-6 text-ink-soft">เพิ่มขึ้นจากช่วงเดียวกันปีก่อน</dd>
              </div>
            </dl>
          </Link>
        </div>
      </section>

      {/* ---------- จุดต่างจากคู่แข่ง ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">เทียบแล้วต่างตรงไหน</p>
            <h2 className="h2 mt-4">4 เรื่องที่ร้านแอร์ทั่วไปในเชียงใหม่ไม่ค่อยทำ</h2>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {edges.map((e) => {
              const Icon = serviceIcons[e.icon as keyof typeof serviceIcons];
              return (
                <div key={e.title} className="card flex gap-4 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold">{e.title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-ink-soft">{e.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/price/repair" className="btn-ghost">
              ดูตารางราคาซ่อมแอร์แบบเปิดเผย
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- เปรียบเทียบการล้าง ---------- */}
      <section className="section" id="compare">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">จุดที่เราต่างจากร้านอื่น</p>
            <h2 className="h2 mt-4">เปรียบเทียบ ล้างธรรมดา vs Premium Full Wash</h2>
            <p className="lead mt-3">
              Premium Full Wash คือการถอดชิ้นส่วนออกมาล้างแยก 100%
              จุดที่ล้างธรรมดาเข้าไม่ถึงคือใบพัดกรงกระรอก ซึ่งเป็นแหล่งสะสมเชื้อราและต้นเหตุของกลิ่นอับ
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                ตารางเปรียบเทียบขั้นตอนและราคาระหว่างการล้างแอร์แบบธรรมดาและแบบพรีเมี่ยม
              </caption>
              <thead>
                <tr className="bg-slate-50">
                  <th scope="col" className="px-4 py-4 text-sm font-bold sm:px-6">ขั้นตอนการล้าง</th>
                  <th scope="col" className="px-3 py-4 text-center text-sm font-bold sm:px-6">ล้างธรรมดา</th>
                  <th scope="col" className="bg-brand-600 px-3 py-4 text-center text-sm font-bold text-white sm:px-6">
                    Premium Full Wash
                    <span className="mt-0.5 block text-[11px] font-medium text-brand-100">
                      เจ้าเดียวในเชียงใหม่
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {washCompare.map((row) => (
                  <tr key={row.step} className="bg-white">
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
              ดูรายละเอียดบริการล้างแอร์ทั้งหมด
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- ราคา ---------- */}
      <section className="section bg-sand" id="price">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">ราคาโปร่งใส</p>
            <h2 className="h2 mt-4">อัตราค่าบริการยอดนิยม</h2>
            <p className="lead mt-3">
              ราคาที่เห็นคือราคาที่จ่ายจริง หากหน้างานมีค่าใช้จ่ายเพิ่ม เราแจ้งให้ทราบก่อนลงมือเสมอ
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "ล้างแอร์ธรรมดา", price: "600", unit: "บาท / เครื่อง",
                note: "9,000–18,000 BTU · รับประกัน 30 วัน",
                feats: ["ล้างฟิลเตอร์และหน้ากาก", "ล้างคอยล์เย็น–คอยล์ร้อน", "ฉีดล้างใบพัดกรงกระรอก", "3 เครื่องขึ้นไปเหลือ 550.-"],
              },
              {
                name: "Premium Full Wash", price: "2,000", unit: "บาท / เครื่อง",
                note: "ถอดล้าง 100% · รับประกัน 60 วัน",
                feats: ["ถอดชิ้นส่วนล้างแยกทุกชิ้น", "ถอดใบพัดกรงกระรอกออกมาล้าง", "ฉีดน้ำยาฆ่าเชื้อโรค", "เหมาะกับบ้านที่มีคนแพ้ฝุ่น"],
                popular: true,
              },
              {
                name: "ติดตั้งแอร์ใหม่", price: "3,000", unit: "บาท เริ่มต้น",
                note: "9k–12k BTU · รับประกันสูงสุด 1 ปี",
                feats: ["แวคคั่มระบบเต็มขั้นตอน", "ขาแขวน ท่อ และรางครอบ", "ตั้งระดับกันน้ำหยด", "18k–24k BTU ราคา 3,500.-"],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`card relative flex flex-col p-6 ${p.popular ? "shadow-lift ring-2 ring-brand-500" : ""}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
                    ลูกค้าเลือกมากที่สุด
                  </span>
                )}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-brand-700">{p.price}</span>
                  <span className="text-sm text-ink-soft">{p.unit}</span>
                </p>
                <p className="mt-1.5 text-xs text-ink-soft">{p.note}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-7 text-ink-soft">
                      <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-mint" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/price" className="btn-ghost">
              ดูตารางราคาทั้งหมด
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- พื้นที่บริการ ---------- */}
      <section className="section" id="area">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              พื้นที่ให้บริการ
            </p>
            <h2 className="h2 mt-4">เราวิ่งงานทั่วเชียงใหม่ เข้าถึงไว</h2>
            <p className="lead mt-3">
              ร้านเราตั้งอยู่ ต.ต้นเปา อ.สันกำแพง จึงเข้างานโซนสันกำแพงและบ่อสร้างได้เร็วที่สุด
              และครอบคลุมอำเภอเมืองเชียงใหม่ หางดง สารภี สันทราย
            </p>
          </div>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/area/${a.slug}`}
                  className="card group flex h-full items-start gap-3 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span>
                    <span className="block font-bold group-hover:text-brand-700">
                      ช่างแอร์{a.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-6 text-ink-soft">{a.full}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- รีวิว ---------- */}
      <section className="section bg-sand">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">เสียงจากลูกค้า</p>
            <h2 className="h2 mt-4">รีวิวจากลูกค้าจริงในเชียงใหม่</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ผลงาน ---------- */}
      <section className="section" id="portfolio">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">ผลงานจริง</p>
            <h2 className="h2 mt-4">ภาพผลงานของพวกเรา</h2>
            <p className="lead mt-3">
              การันตีคุณภาพงานด้วยภาพหน้างานจริง ทั้งล้างแอร์ ซ่อมแอร์ ติดตั้ง และย้ายแอร์
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.slice(0, 8).map((g) => (
              <li key={g.src} className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <Link href="/portfolio" className="btn-ghost">
              ดูผลงานทั้งหมด
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- เนื้อหา SEO ---------- */}
      <section className="section bg-sand">
        <div className="wrap max-w-3xl">
          <h2 className="h2">บริการช่างแอร์เชียงใหม่ โซนต้นเปาและสันกำแพง</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
            <p>
              หากคุณกำลังมองหา <strong className="text-ink">ช่างแอร์สันกำแพง</strong> ที่ตั้งอยู่ในพื้นที่จริง{" "}
              <strong className="text-ink">โปรเฟรชแคร์ (Pro Fresh Care)</strong>{" "}
              พร้อมให้บริการคุณอย่างรวดเร็ว เนื่องจากร้านของเราตั้งอยู่ในเขต ต.ต้นเปา
              ทำให้เราเข้าหน้างานในโซนสันกำแพง บ่อสร้าง และหมู่บ้านซีรีนพาร์คได้ทันที
              ไม่ต้องรอช่างวิ่งข้ามเมืองมาเหมือนร้านที่อยู่ไกล
            </p>
            <p>
              เราเชี่ยวชาญด้านบริการ <strong className="text-ink">Premium Full Wash 2,000 บาท</strong>{" "}
              ซึ่งเป็นการล้างที่ละเอียดที่สุดในเชียงใหม่ ด้วยการถอดชิ้นส่วนทุกชิ้นออกมาล้างแยก
              รวมถึงใบพัดกรงกระรอกที่เป็นจุดสะสมเชื้อรามากที่สุดและเป็นต้นเหตุของกลิ่นอับในห้อง
              ซึ่งการล้างแบบฉีดผ่านทั่วไปเข้าไม่ถึง
            </p>
            <p>
              นอกจากนี้เรายังรองรับงาน{" "}
              <Link href="/area/mueang-chiang-mai" className="font-semibold text-brand-700 hover:underline">
                ล้างแอร์อำเภอเมืองเชียงใหม่
              </Link>{" "}
              ในโซนท่าศาลา หนองป่าครั่ง ป่าแดด และช้างเผือก รวมถึง{" "}
              <Link href="/area/nimman" className="font-semibold text-brand-700 hover:underline">
                คอนโดย่านนิมมาน
              </Link>{" "}
              ด้วยมาตรฐานความซื่อสัตย์ ไม่หลอกเติมน้ำยา และราคายุติธรรมที่สุดในพื้นที่
            </p>
            <p>
              ทุกงานที่เราทำจะแจ้งราคาให้ทราบก่อนลงมือเสมอ ไม่มีการบวกเพิ่มทีหลัง
              หากตรวจแล้วพบว่าไม่จำเป็นต้องซ่อมหรือไม่ต้องเติมน้ำยา เราจะบอกตรง ๆ
              เพราะเราเชื่อว่าลูกค้าที่ไว้ใจจะกลับมาใช้บริการซ้ำและบอกต่อ
              ซึ่งคุ้มกว่าการหลอกขายของครั้งเดียว
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${site.phoneTel}`} className="btn-call" data-cta="seo-call">
              <IconPhone className="h-5 w-5" />
              โทรจองคิว
            </a>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line" data-cta="seo-line">
              <IconLine className="h-5 w-5" />
              LINE จองคิว
            </a>
            <span className="inline-flex items-center gap-2 px-2 text-sm text-ink-soft">
              <IconClock className="h-5 w-5 text-brand-600" />
              เปิดทุกวัน {site.hours}
            </span>
          </div>
        </div>
      </section>

      {/* ---------- บทความ ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">คลังความรู้</p>
            <h2 className="h2 mt-4">อ่านก่อนเรียกช่าง บางเรื่องคุณแก้เองได้</h2>
            <p className="lead mt-3">
              เราเขียนจากสิ่งที่เจอหน้างานจริงในเชียงใหม่ ไม่ใช่บทความคัดลอกทั่วไป
              และบอกตรง ๆ ว่าอาการไหนคุณเช็คเองได้โดยไม่ต้องเสียเงิน
            </p>
          </div>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="text-xs font-bold text-brand-600">{a.category}</span>
                  <h3 className="mt-2 font-bold group-hover:text-brand-700">{a.h1}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{a.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-soft">
                    <IconClock className="h-4 w-4" />
                    อ่าน {a.readMins} นาที
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/blog" className="btn-ghost">
              ดูบทความทั้งหมด {articles.length} เรื่อง
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FaqList items={faqs} title="คำถามที่พบบ่อย" />
      <CtaBand />
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
