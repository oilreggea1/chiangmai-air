import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, addressLine, edges, values, brands, gallery, areas, reviews } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import {
  serviceIcons, IconPhone, IconLine, IconChevron, IconCheck, IconPin, IconClock, IconEngineer,
} from "@/components/Icons";
import { CtaBand, Breadcrumbs, ReviewCard } from "@/components/Blocks";

const title = "รู้จักช่างอาร์ม ช่างแอร์เชียงใหม่ สันกำแพง";
const description =
  "ช่างอาร์ม ช่างแอร์เชียงใหม่ ในนามบริษัท เฌอร์ โซลูชั่น จำกัด อยู่ ต.สันกำแพง อ.สันกำแพง ทำงานด้วยหลักบอกราคาก่อนลงมือ ไม่เติมน้ำยาถ้าไม่ขาด รับงานทุกวัน ออกใบกำกับภาษีได้";

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
    title: "แจ้งราคาก่อนเริ่มงานทุกครั้ง",
    detail:
      "ไม่ว่างานขนาดใด ผมแจ้งราคาที่แน่นอนก่อนเริ่มเสมอ หากหน้างานมีค่าใช้จ่ายเพิ่มจากที่ตกลงไว้ ผมจะหยุดและขอความเห็นชอบก่อน ไม่มีการเรียกเก็บเพิ่มโดยไม่แจ้งล่วงหน้า",
  },
  {
    title: "ตรวจวัดน้ำยาก่อนเติมเสมอ",
    detail:
      "การเติมน้ำยาเกินความจำเป็นทำให้แรงดันในระบบสูงผิดปกติและลดอายุคอมเพรสเซอร์ ผมจึงวัดระดับให้ลูกค้าดูต่อหน้า และหากไม่พร่องจะแจ้งให้ทราบว่าไม่จำเป็นต้องเติม",
  },
  {
    title: "แสดงอะไหล่เดิมทุกครั้งที่เปลี่ยน",
    detail:
      "ทุกครั้งที่มีการเปลี่ยนอะไหล่ ผมนำชิ้นเดิมมาแสดงพร้อมอธิบายลักษณะความเสียหาย เพื่อให้ลูกค้าตรวจสอบได้ว่าค่าใช้จ่ายไปกับสิ่งใด",
  },
  {
    title: "ประเมินตามจริงแม้จะเสียงานซ่อม",
    detail:
      "บางกรณีค่าซ่อมสูงเกินครึ่งของราคาเครื่องใหม่ ผมจะแจ้งให้ทราบว่าไม่คุ้มค่า แม้การรับซ่อมจะให้ผลตอบแทนกับผมมากกว่าก็ตาม",
  },
  {
    title: "ดูแลความเรียบร้อยของพื้นที่จนจบงาน",
    detail:
      "ผมปูผ้าใบคลุมหนา 2 ชั้นก่อนเริ่มงานทุกครั้ง และเก็บพื้นที่ให้เรียบร้อยก่อนส่งมอบ ลูกค้าไม่ต้องทำความสะอาดเพิ่มหลังงานเสร็จ",
  },
  {
    title: "รับผิดชอบตามระยะรับประกันจริง",
    detail:
      "หากอาการเดิมเกิดซ้ำภายในระยะรับประกัน ผมกลับไปแก้ไขให้โดยไม่คิดค่าใช้จ่าย และไม่ตีความว่าเป็นคนละอาการเพื่อเลี่ยงความรับผิดชอบ",
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
              {site.address.subDistrict} {site.address.district} จ.{site.address.province}
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
              ผมช่างอาร์ม ช่างผู้รับผิดชอบงานของโปรเฟรชแคร์
            </h1>
            <p className="lead mt-5">
              ผมให้บริการภายใต้ชื่อ โปรเฟรชแคร์ ดำเนินงานในนาม บริษัท เฌอร์ โซลูชั่น จำกัด
              ที่ตั้งอยู่ ต.สันกำแพง อ.สันกำแพง รับล้าง ซ่อม ติดตั้ง และย้ายแอร์ทั่วเชียงใหม่
              ผมทำงานด้วยมาตรฐานเดียวกันทุกงาน ตั้งแต่การแจ้งราคาก่อนเริ่ม
              ไปจนถึงการเก็บพื้นที่ให้เรียบร้อยก่อนส่งมอบ
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
          <h2 className="h2">ผู้ที่จะเข้าปฏิบัติงานที่บ้านคุณ</h2>
          <div className="card mt-6 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                <IconEngineer className="h-7 w-7" />
              </span>
              <div>
                <p className="text-lg font-bold">{site.leadTech}</p>
                <p className="text-sm font-medium text-brand-700">
                  ช่างผู้รับผิดชอบหน้างาน · ประสบการณ์{site.experience}
                </p>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-8 text-ink-soft">
              งานที่ปรากฏในหน้าผลงานนี้ ผมเป็นผู้รับผิดชอบและลงมือทำเอง
              ผมเห็นว่าลูกค้าควรทราบตั้งแต่ต้นว่าใครจะเข้าไปปฏิบัติงานในบ้าน
              และเมื่อต้องเรียกใช้บริการซ้ำหรือเคลมงานในระยะรับประกัน
              ลูกค้าจะได้ติดต่อกับผู้ที่ทราบประวัติของเครื่องนั้นโดยตรง
            </p>
            <p className="mt-4 text-[15px] leading-8 text-ink-soft">
              สองเรื่องที่ลูกค้ากล่าวถึงบ่อยที่สุดคือความสะอาดของงานล้างและความเรียบร้อยของพื้นที่
              กับการแจ้งราคาให้ครบถ้วนก่อนเริ่มงานโดยไม่เรียกเก็บเพิ่มภายหลัง
              ทั้งสองข้อนี้คือมาตรฐานที่ผมรักษาไว้ในทุกงาน ไม่ว่าจะเป็นงานขนาดใดก็ตาม
            </p>
          </div>
        </div>
      </section>

      {/* สัญญา 6 ข้อ */}
      <section className="section bg-sand">
        <div className="wrap max-w-4xl">
          <h2 className="h2">6 ข้อที่ผมสัญญากับลูกค้าทุกคน</h2>
          <p className="lead mt-3">
            ทั้งหกข้อนี้คือเกณฑ์ที่ผมใช้ตัดสินใจขณะปฏิบัติงาน
            โดยเฉพาะในสถานการณ์ที่มีทางเลือกซึ่งให้ผลตอบแทนสูงกว่า
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
          <h2 className="h2">สิ่งที่เราให้ความสำคัญเป็นพิเศษ</h2>
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
          <h2 className="h2 text-center">มาตรฐานการทำงาน</h2>
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
            ยี่ห้อที่รับงานและใช้อะไหล่แท้
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
              { t: "ที่ตั้ง", d: `${site.legalName} · ${addressLine}`, Icon: IconPin },
              { t: "เวลาทำการ", d: `รับงานทุกวัน ${site.hours} · เข้าหน้างานภายใน 24 ชั่วโมง`, Icon: IconClock },
              { t: "ติดต่อ", d: `โทร ${site.phone} · LINE ${site.lineId}`, Icon: IconPhone },
              { t: "เอกสาร", d: "ออกใบกำกับภาษีได้ รองรับลูกค้านิติบุคคลทั้งคาเฟ่ ร้านอาหาร โรงแรม หอพัก และสำนักงาน", Icon: IconCheck },
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
            อ่านบทความความรู้เรื่องแอร์
            <IconChevron className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="h2 text-center">ความเห็นจากลูกค้า</h2>
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
