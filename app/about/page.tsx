import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, edges, values, brands, gallery, areas, reviews } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import {
  serviceIcons, IconPhone, IconLine, IconChevron, IconCheck, IconPin, IconClock, IconEngineer,
} from "@/components/Icons";
import { CtaBand, Breadcrumbs, ReviewCard } from "@/components/Blocks";

const title = "รู้จักช่างอาร์ม ช่างแอร์เชียงใหม่ ต้นเปา สันกำแพง";
const description =
  "ช่างอาร์ม ช่างแอร์เชียงใหม่ อยู่ ต.ต้นเปา อ.สันกำแพง ทำงานด้วยหลักบอกราคาก่อนลงมือ ไม่เติมน้ำยาถ้าไม่ขาด รับงานทุกวัน 08:00-20:00 น. ออกใบกำกับภาษีได้";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: `${site.url}/about`, type: "profile" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "รู้จักช่างอาร์ม", path: "/about" },
];

const promises = [
  {
    title: "ผมบอกราคาก่อนลงมือทุกครั้ง",
    detail:
      "งานเล็กงานใหญ่ผมบอกราคาที่แน่นอนก่อนเริ่มเสมอ ถ้าหน้างานมีค่าใช้จ่ายเพิ่มจากที่คุยไว้ ผมหยุดถามคุณก่อน ไม่บวกเงียบ ๆ แล้วมาเรียกเก็บตอนจบ",
  },
  {
    title: "น้ำยาไม่ขาด ผมไม่เติม",
    detail:
      "การเติมน้ำยาเกินความจำเป็นคือวิธีทำเงินที่ง่ายที่สุดในวงการนี้ และเป็นสิ่งที่ทำให้แอร์ลูกค้าพังเร็วขึ้น ผมวัดให้ดูต่อหน้า ถ้าไม่ขาดผมก็บอกว่าไม่ต้องเติม",
  },
  {
    title: "ผมให้ดูของเก่าที่ถอดออกมา",
    detail:
      "ทุกครั้งที่เปลี่ยนอะไหล่ ผมเอาของเก่ามาให้ดูและอธิบายว่ามันเสียยังไง คุณมีสิทธิ์รู้ว่าจ่ายเงินไปกับอะไร",
  },
  {
    title: "ถ้าซ่อมไม่คุ้ม ผมบอกตรง ๆ",
    detail:
      "บางเคสค่าซ่อมเกินครึ่งของราคาเครื่องใหม่ ผมจะบอกคุณว่าไม่คุ้ม ทั้งที่การรับซ่อมทำให้ผมได้เงินมากกว่า",
  },
  {
    title: "ล้างเสร็จบ้านต้องเหมือนเดิม",
    detail:
      "ผมปูผ้าใบคลุมหนา 2 ชั้นก่อนเริ่มงานทุกครั้ง และเก็บกวาดให้เรียบร้อยก่อนกลับ คุณไม่ควรต้องมาตามเช็ดพื้นหลังช่างกลับ",
  },
  {
    title: "รับประกันแล้วผมกลับมาดูจริง",
    detail:
      "ถ้าอาการเดิมกลับมาในระยะรับประกัน ผมกลับไปดูให้ฟรี ไม่บ่ายเบี่ยง ไม่โยนว่าเป็นคนละอาการ",
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
          url: `${site.url}/about`,
          mainEntity: { "@id": `${site.url}/#business` },
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap grid gap-10 pt-8 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              {site.address.street} {site.address.district} จ.{site.address.province}
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
              สวัสดีครับ ผมช่างอาร์ม
            </h1>
            <p className="lead mt-5">
              ผมทำงานในชื่อ โปรเฟรชแคร์ (Pro Fresh Care) อยู่ที่ ต.ต้นเปา อ.สันกำแพง
              รับล้าง ซ่อม ติดตั้ง และย้ายแอร์ทั่วเชียงใหม่
              ผมไม่ได้อยากเป็นร้านที่ใหญ่ที่สุดในเมืองนี้ครับ ผมแค่อยากเป็นช่างที่คุณกล้าแนะนำต่อให้เพื่อนบ้าน
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta="about-call">
                <IconPhone className="h-5 w-5" />
                โทร {site.phone}
              </a>
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta="about-line">
                <IconLine className="h-5 w-5" />
                ทัก LINE
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={gallery[3].src}
              alt={`${site.leadTech} ช่างแอร์เชียงใหม่ โปรเฟรชแคร์ ขณะทำงานที่บ้านลูกค้า`}
              width={900}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[22rem] w-full object-cover sm:h-[26rem]"
            />
          </div>
        </section>
      </div>

      {/* ช่างอาร์ม */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">ใครจะมาที่บ้านคุณ</h2>
          <div className="card mt-6 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                <IconEngineer className="h-7 w-7" />
              </span>
              <div>
                <p className="text-lg font-bold">{site.leadTech}</p>
                <p className="text-sm font-medium text-brand-700">คนที่จะไปหาคุณเอง</p>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-8 text-ink-soft">
              งานเกือบทั้งหมดที่คุณเห็นในหน้าผลงาน ผมลงมือทำเองครับ
              ผมอยากให้คุณรู้ตั้งแต่แรกว่าใครจะเข้ามาในบ้าน ไม่ใช่ส่งใครก็ไม่รู้ไปแล้วจบกันไป
              เพราะเวลาคุณต้องเรียกซ้ำหรือเคลมงานในระยะรับประกัน
              คุณจะได้คุยกับคนเดิมที่จำได้ว่าแอร์ตัวนั้นเคยเป็นอะไรมา
            </p>
            <p className="mt-4 text-[15px] leading-8 text-ink-soft">
              สองเรื่องที่ลูกค้าพูดถึงบ่อยที่สุดคือ งานล้างที่สะอาดจริงแล้วห้องไม่เลอะ
              กับการบอกราคาให้ครบก่อนทำโดยไม่บวกเพิ่มทีหลัง
              สองอย่างนี้แหละครับที่ผมตั้งใจรักษาไว้ทุกงาน ไม่ว่างานนั้นจะเล็กแค่ไหน
            </p>
          </div>
        </div>
      </section>

      {/* สัญญา 6 ข้อ */}
      <section className="section bg-sand">
        <div className="wrap max-w-4xl">
          <h2 className="h2">6 ข้อที่ผมสัญญากับลูกค้าทุกคน</h2>
          <p className="lead mt-3">
            นี่ไม่ใช่คำโฆษณาครับ แต่เป็นเกณฑ์ที่ผมใช้ตัดสินใจจริงตอนอยู่หน้างาน
            โดยเฉพาะเวลาที่มีทางเลือกซึ่งทำเงินได้มากกว่าวางอยู่ตรงหน้า
          </p>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2">
            {promises.map((p) => (
              <li key={p.title} className="card p-6">
                <p className="flex items-start gap-2.5 font-bold">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  {p.title}
                </p>
                <p className="mt-2.5 text-sm leading-7 text-ink-soft">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* จุดต่าง */}
      <section className="section">
        <div className="wrap max-w-4xl">
          <h2 className="h2">ผมต่างจากร้านแอร์ทั่วไปยังไง</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {edges.map((e) => {
              const Icon = serviceIcons[e.icon as keyof typeof serviceIcons];
              return (
                <div key={e.title} className="card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold">{e.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{e.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ค่านิยม + แบรนด์ */}
      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="h2 text-center">มาตรฐานที่ผมยึด</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = serviceIcons[v.icon as keyof typeof serviceIcons];
              return (
                <div key={v.title} className="card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600/10 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{v.detail}</p>
                </div>
              );
            })}
          </div>

          <h3 className="mt-12 text-center text-sm font-semibold tracking-wide text-ink-soft uppercase">
            ยี่ห้อที่ผมรับงานและใช้อะไหล่แท้
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
      </section>

      {/* ข้อมูลร้าน */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h2">ข้อมูลติดต่อ</h2>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              { t: "ที่ตั้ง", d: `${site.address.street} ${site.address.district} จ.${site.address.province} ${site.address.postalCode}`, Icon: IconPin },
              { t: "เวลาทำการ", d: `ผมรับงานทุกวัน ${site.hours} · เข้าหน้างานได้ภายใน 24 ชม.`, Icon: IconClock },
              { t: "ติดต่อ", d: `โทร ${site.phone} · LINE ${site.lineId}`, Icon: IconPhone },
              { t: "เอกสาร", d: "ผมออกใบกำกับภาษีให้ได้ รับงานคาเฟ่ ร้านอาหาร โรงแรม หอพัก และออฟฟิศ", Icon: IconCheck },
            ].map((x) => (
              <div key={x.t} className="card flex items-start gap-3 p-5">
                <x.Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="font-bold">{x.t}</dt>
                  <dd className="mt-1 text-sm leading-7 text-ink-soft">{x.d}</dd>
                </div>
              </div>
            ))}
          </dl>

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

          <Link href="/blog" className="btn-ghost mt-8">
            อ่านบทความที่ผมเขียนเอง
            <IconChevron className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="h2 text-center">ลูกค้าเขาพูดถึงผมยังไง</h2>
          <div className="mx-auto mt-9 grid max-w-4xl gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
