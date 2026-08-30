import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, services, areas, reviews, faqs, gallery, edges, heroPhotos, thumbOf, p } from "@/lib/site";
import { articles } from "@/content/articles";
import { faqSchema, jsonLd } from "@/lib/schema";
import {
  serviceIcons, IconPhone, IconLine, IconCheck, IconPin, IconChevron, IconClock, IconShield,
} from "@/components/Icons";
import { CtaBand, FaqList, ReviewCard } from "@/components/Blocks";
import { ReelsShowcase } from "@/components/ReelsShowcase";

const featuredServices = ["lang-air", "som-air", "tid-tang-air", "lang-washing-machine"]
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));
const featuredAreaSlugs = ["san-kamphaeng", "ton-pao", "mueang-chiang-mai", "saraphi", "doi-saket", "san-phra-net"];
const featuredAreas = featuredAreaSlugs
  .map((slug) => areas.find((area) => area.slug === slug))
  .filter((area): area is (typeof areas)[number] => Boolean(area));
// แสดงให้ครบ ไม่ตัดเหลือ 6 ข้อเหมือนเดิม
// คนที่ค้นคำว่า "ช่างแอร์เชียงใหม่" ยังไม่รู้จักใครเลย สิ่งที่เขาอยากรู้คือ
// เลือกช่างอย่างไร ราคาเท่าไร รับประกันไหม ซึ่งเป็นข้อที่เคยถูกตัดทิ้ง
// ชุดนี้ยังไหลเข้า FAQPage schema ที่ AI ดึงไปตอบด้วย
const homeFaqs = faqs;
const homeEdges = edges.map((edge, index) => ({
  ...edge,
  detail: [
    `ตรวจวัดให้ดูก่อนเติม และคิด R32/R22 ปอนด์ละ ${p.repair.refrigerantPerLb} บาทเท่ากัน`,
    `ค่าตรวจเช็ค ${p.repair.diagnostic} บาท และหักคืนเมื่อตัดสินใจซ่อม ดูราคาก่อนได้`,
    "นัดเร่งด่วนนอกเวลาได้ โดยแจ้งค่าบริการเพิ่มก่อนยืนยันคิว",
    "ออกใบเสร็จในนามบริษัท รองรับบ้าน ร้านค้า โรงแรม และสำนักงาน",
  ][index],
}));

export const metadata: Metadata = {
  // ต้องใส่ languages ซ้ำตรงนี้ด้วย เพราะ Next merge alternates แบบตื้น
  // ถ้าใส่แค่ canonical จะไปทับ languages ที่ตั้งไว้ใน layout จนหน้าแรกไม่มี hreflang เลย
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
      "en-US": "/en",
      "zh-CN": "/zh",
      "x-default": "/",
    },
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(homeFaqs))} />

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
              ที่ตั้ง ต.สันกำแพง · รับงานสันกำแพง สารภี เมืองเชียงใหม่ ดอยสะเก็ด
            </p>

            <h1 className="mt-5 text-[2rem] leading-[1.25] font-extrabold sm:text-[2.6rem] lg:text-[3.1rem]">
              ช่างแอร์เชียงใหม่ ล้างแอร์ ซ่อมแอร์{" "}
              <span className="text-accent">ถึงบ้าน</span>
            </h1>

            <p className="lead mt-5 max-w-xl">
              ผมช่างอาร์ม ช่างผู้รับผิดชอบงานของโปรเฟรชแคร์ รับล้างแอร์ ซ่อมแอร์ ติดตั้ง ย้ายแอร์
              และล้างเครื่องซักผ้าทั่วเชียงใหม่ ผมแจ้งราคาให้ครบก่อนเริ่มงานทุกครั้ง ตรวจวัดน้ำยาให้ดูก่อนเติม
              และหากการซ่อมไม่คุ้มกับอายุเครื่อง ผมจะแจ้งตามจริง
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn-call px-7 py-4 text-lg" data-cta="hero-call">
                <IconPhone className="h-5 w-5" />
                โทรถามคิววันนี้
              </a>
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noopener"
                className="btn-line px-7 py-4 text-lg"
                data-cta="hero-line"
              >
                <IconLine className="h-5 w-5" />
                ส่งรูปให้ช่างประเมินฟรี
              </a>
            </div>

            <p className="mt-3 max-w-xl text-sm leading-6 text-ink-soft">
              ส่งรูปแอร์หรือคลิปอาการ พร้อมแจ้งจำนวนเครื่องและพื้นที่ให้บริการ
              ผมประเมินเบื้องต้นให้ฟรี ยังไม่ต้องจองก็สอบถามได้
            </p>
            <ul className="mt-4 flex max-w-xl flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-brand-700">
              <li>✓ แจ้งราคาก่อนทำ</li>
              <li>✓ ไม่มีค่าเดินทางเพิ่มในพื้นที่บริการ</li>
              <li>✓ รับประกันงานล้าง 30 วัน</li>
            </ul>

            <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {[
                {
                  k: `เริ่ม ${p.wash.stdBulk}.-`,
                  v: `เมื่อใช้บริการตั้งแต่ 3 เครื่องขึ้นไป · เครื่องเดียว ${p.wash.std}.-`,
                },
                { k: "24 ชม.", v: "ปกติเข้าหน้างานได้ใน 24 ชม. ยกเว้นช่วง ก.พ.–เม.ย. ที่คิวแน่นทั้งจังหวัด" },
                { k: "30 วัน", v: "รับประกันงานล้าง" },
                { k: "ทุกยี่ห้อหลัก", v: "รับล้างและซ่อมแบรนด์ที่จำหน่ายในไทย" },
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
                src={heroPhotos.home.src}
                alt="ช่างแอร์เชียงใหม่กำลังล้างแอร์ถึงบ้านลูกค้า พร้อมปูผ้าใบคลุมพื้นที่โดยรอบ"
                width={900}
                height={1200}
                // รูปนี้คือ LCP ของหน้าแรก คือสิ่งที่ Google จับเวลาว่าหน้าโหลดเสร็จเมื่อไร
                // ของเดิมตั้ง loading="lazy" กับ fetchPriority="low" ซึ่งสั่งให้เบราว์เซอร์
                // ถ่วงรูปที่สำคัญที่สุดไว้ท้ายคิว ทำให้ LCP ช้ากว่าหน้าอื่นที่ใช้ priority ราว 1-2 วินาที
                //
                // เคยลองเปลี่ยนเป็น preload เฉพาะจอใหญ่ (18 ส.ค. 2569) เพราะบนมือถือ
                // Lighthouse บอกว่า LCP เป็นย่อหน้าข้อความ ไม่ใช่รูปนี้ จึงคิดว่า preload เสียเปล่า
                // วัดจริง 3 รอบต่อฝั่งแล้วกลับแย่ลง: LCP มือถือ 3,456 -> 4,524 ms (แกว่ง ±311)
                // คะแนนดิบ 89/92/89 -> 78/81/81 ไม่ทับกันเลย จึงถอนกลับมาใช้ priority
                // ห้ามลองซ้ำโดยไม่วัด ต่อให้เหตุผลบนกระดาษดูเข้าท่าแค่ไหน
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
                <span className="text-ink-soft">หากหน้างานมีรายการเพิ่ม ผมหยุดถามก่อน</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- บริการ ---------- */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">งานที่ผมรับ</p>
            <h2 className="h2 mt-4">ดูแลงานแอร์และเครื่องซักผ้าถึงบ้าน</h2>
            <p className="lead mt-3">
              ตั้งแต่การล้างแอร์ประจำปี ซ่อมอาการเสีย ติดตั้งเครื่องใหม่ ย้ายแอร์
              ไปจนถึงการถอดล้างถังเครื่องซักผ้า ผมระบุราคาไว้ในแต่ละหน้าเพื่อให้พิจารณาได้ก่อนติดต่อ
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => {
              const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
              return (
                <Link
                  key={s.slug}
                  href={`/service/${s.slug}`}
                  className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/70 transition-all group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white group-hover:ring-brand-700">
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
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/price" className="btn-ghost" data-cta="home-price-all">
              ดูบริการและราคาทั้งหมด
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/duan" className="btn-ghost" data-cta="home-duan">
              ต้องการช่างด่วนหรือนอกเวลา
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- รีวิว ---------- */}
      <section className="section bg-sand">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">ลูกค้าใช้บริการจริง</p>
            <h2 className="h2 mt-4">ความเห็นจากลูกค้าในเชียงใหม่</h2>
            <p className="lead mt-3">
              รีวิวจากลูกค้าที่เรียกช่างอาร์มไปดูแลแอร์ถึงบ้าน พร้อมภาพและวิดีโอผลงานจริงให้ตรวจสอบก่อนจอง
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={site.facebook} target="_blank" rel="noopener" className="btn-ghost">
              ดูผลงานจริงบน Facebook
              <IconChevron className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- ผลงาน ---------- */}
      <section className="section band-dark" id="portfolio">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">ผลงานจริง</p>
            <h2 className="h2 mt-4">ดูงานก่อนตัดสินใจ</h2>
            <p className="lead mt-3">ภาพจากหน้างานจริงในเชียงใหม่ ตั้งแต่ปูผ้าใบจนถึงชิ้นส่วนที่ถอดล้าง</p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.slice(0, 6).map((g) => (
              <li key={g.src} className="overflow-hidden rounded-xl bg-brand-800 ring-1 ring-white/15">
                <Image
                  // กริดสี่เหลี่ยมแบบเดียวกับหน้าผลงาน จึงใช้ภาพย่อชุดเดียวกัน
                  // ดูเหตุผลใน thumbOf ที่ lib/site.ts
                  src={thumbOf(g.src)}
                  alt={g.alt}
                  width={480}
                  height={480}
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

      {/* ---------- จุดต่างจากคู่แข่ง ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">เทียบแล้วต่างอย่างไร</p>
            <h2 className="h2 mt-4">4 เรื่องที่ผมให้ความสำคัญเป็นพิเศษ</h2>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {homeEdges.map((e) => {
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
            <Link href="/price/repair" className="btn-ghost" data-cta="home-price-repair">
              ดูตารางราคาซ่อมแอร์แบบเปิดเผย
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
              ราคาที่แสดงคือราคาที่ชำระจริง หากหน้างานมีค่าใช้จ่ายเพิ่มเติม ผมแจ้งให้ทราบและขอความเห็นชอบก่อนเสมอ
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "ล้างแอร์ธรรมดา", price: p.wash.std, unit: "บาท / เครื่อง",
                note: "9,000–18,000 BTU · รับประกัน 30 วัน",
                feats: ["ล้างฟิลเตอร์และหน้ากาก", "ล้างคอยล์เย็น–คอยล์ร้อน", "ฉีดล้างใบพัดกรงกระรอก", `3 เครื่องขึ้นไป เครื่องละ ${p.wash.stdBulk}.-`],
              },
              {
                // ราคานี้เคยพิมพ์ไว้ตรง ๆ ว่า 2,000 แล้วค้างเมื่อเจ้าของปรับราคา 5 ส.ค. 2569
                // ตัวดักราคาจับไม่ได้เพราะคำว่า "บาท" อยู่คนละฟิลด์ ตอนนี้ดึงจาก p แล้ว
                name: "Premium Full Wash", price: p.wash.premium, unit: "บาท / เครื่อง",
                note: `ถอดล้าง 100% · ${p.wash.premiumNote} · รับประกัน 30 วัน`,
                feats: [
                  "ถอดชิ้นส่วนล้างแยกทุกชิ้น",
                  "ถอดใบพัดกรงกระรอกออกมาล้าง",
                  "ฉีดน้ำยาทำความสะอาดคอยล์ ช่วยลดคราบและกลิ่นอับ",
                  "เหมาะกับเครื่องที่มีกลิ่นอับหรือไม่ได้ถอดล้างมานาน",
                ],
                popular: true,
              },
              {
                name: "ติดตั้งแอร์ใหม่", price: p.install.small, unit: "บาท เริ่มต้น",
                note: "9k–12k BTU · รับประกันสูงสุด 1 ปี",
                feats: ["แวคคั่มระบบเต็มขั้นตอน", "ขาแขวน ท่อ และรางครอบ", "ตั้งระดับกันน้ำหยด", `18k–24k BTU ราคา ${p.install.large}.-`],
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

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/price" className="btn-ghost" data-cta="home-price-table">
              ดูตารางราคาทั้งหมด
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/answers" className="btn-ghost">
              ดูคำตอบราคาและเงื่อนไขจากช่าง
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
            <h2 className="h2 mt-4">พื้นที่ให้บริการ</h2>
            <p className="lead mt-3">
              รับงานสันกำแพง สารภี เมืองเชียงใหม่ ดอยสะเก็ด และ ต.สันพระเนตร อ.สันทราย
              โดยอำเภอเมืองเชียงใหม่รับทุกตำบล ส่วนอำเภออื่นรับเฉพาะพื้นที่ในระยะบริการ
              ราคาเดียวกันและไม่มีค่าเดินทางเพิ่ม
            </p>
          </div>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAreas.map((a) => (
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
          <div className="mt-8">
            <Link href="/area" className="btn-ghost">
              ดูพื้นที่ให้บริการทั้งหมด
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ReelsShowcase limit={3} />

      {/* ---------- เนื้อหา SEO ---------- */}
      <section className="section bg-sand">
        <div className="wrap max-w-3xl">
          <h2 className="h2">ช่างแอร์เชียงใหม่ โซนสันกำแพงและต้นเปา</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
            <p>
              หากคุณกำลังมองหา <strong className="text-ink">ช่างแอร์สันกำแพง</strong> ที่ตั้งอยู่ในพื้นที่จริง{" "}
              <strong className="text-ink">โปรเฟรชแคร์ (Pro Fresh Care)</strong>{" "}
              คือผมเองครับ ที่ตั้งของผมอยู่ในเขต ต.สันกำแพง จึงเข้าถึงหน้างานโซนสันกำแพง ต้นเปา บ่อสร้าง
              และหมู่บ้านซีรีนพาร์คได้รวดเร็ว คุณจึงไม่ต้องรอช่างเดินทางข้ามเมือง
            </p>
            <p>
              นอกจากพื้นที่นี้ ผมยังรับงาน{" "}
              <Link href="/area/mueang-chiang-mai" className="font-semibold text-brand-700 hover:underline">
                ล้างแอร์อำเภอเมืองเชียงใหม่
              </Link>{" "}
              ในโซนท่าศาลา หนองป่าครั่ง ป่าแดด และช้างเผือก รวมถึง{" "}
              <Link href="/area/nimman" className="font-semibold text-brand-700 hover:underline">
                คอนโดย่านนิมมาน
              </Link>{" "}
              โดยคิดอัตราเดียวกันทุกพื้นที่ ไม่มีค่าเดินทางเพิ่ม
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${site.phoneTel}`} className="btn-call" data-cta="seo-call">
              <IconPhone className="h-5 w-5" />
              โทรถามคิววันนี้
            </a>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line" data-cta="seo-line">
              <IconLine className="h-5 w-5" />
              LINE ส่งรูปประเมินฟรี
            </a>
            <span className="inline-flex items-center gap-2 px-2 text-sm text-ink-soft">
              <IconClock className="h-5 w-5 text-brand-600" />
              {site.daysLabel} {site.hours} · {site.closedNote}
            </span>
          </div>
        </div>
      </section>

      {/* ---------- บทความ ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">คลังความรู้</p>
            <h2 className="h2 mt-4">ความรู้เรื่องแอร์ที่ควรทราบก่อนเรียกช่าง</h2>
            <p className="lead mt-3">
              ผมเรียบเรียงจากงานที่รับจริงในเชียงใหม่ และระบุไว้ชัดเจนว่าอาการใดที่คุณตรวจสอบหรือแก้ไขเองได้
              โดยไม่ต้องเรียกช่าง
            </p>
          </div>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
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

      <FaqList items={homeFaqs} title="คำถามที่พบบ่อย" />
      <CtaBand />
    </>
  );
}
