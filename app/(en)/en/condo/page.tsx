import type { Metadata } from "next";
import Link from "next/link";
import { condoBrands } from "@/lib/condo-brands";
import Image from "next/image";
import { site, heroPhotos, p, btu } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconSnow, IconShield, IconClock } from "@/components/Icons";
import { RecentJobs } from "@/components/RecentJobs";

/**
 * Condo aircon cleaning in English (29 ก.ย. 2569)
 *
 * ทำตามรายงานวิเคราะห์คู่แข่ง: ร้านแอร์ในเชียงใหม่ไม่มีใครทำหน้าอังกฤษสำหรับผู้เช่าคอนโด
 * ผู้เช่าต่างชาติมักต้องล้างแอร์ก่อนคืนห้องหรือตามสัญญาเช่า และต้องการเอกสารให้เจ้าของห้อง
 * ข้อเท็จจริงชุดเดียวกับ /zh/condo และ /customer/condo ราคาดึงจาก p เท่านั้น
 * ห้ามพาดพิงร้านอื่น ห้ามรับปากเรื่องเงินประกันห้องว่าจะได้คืน (ขึ้นกับเจ้าของห้อง)
 */
const title = "Condo Aircon Cleaning Chiang Mai | Move-out & Rental Units";
const description =
  `Condo aircon cleaning in Chiang Mai, ${p.wash.std} THB per wall unit, ${p.wash.stdBulk} THB each from three. No balcony needed, building rules followed.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/en/condo",
    languages: { "th-TH": "/customer/condo", "en-US": "/en/condo", "zh-CN": "/zh/condo", "x-default": "/customer/condo" },
  },
  ...share({ title, description, path: `/en/condo`, locale: "en_US", image: heroPhotos.en }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
  { name: "Condo aircon cleaning", path: "/en/condo" },
];

const points = [
  {
    t: "No balcony? The unit stays on the wall",
    d: "When the indoor unit is inside the room and there is nowhere outside to work, I fit a water-catch bag under the unit and run a hose into a bucket. Water does not reach your floor or walls, and nothing has to be taken down and carried out.",
  },
  {
    t: "Building rules and work hours",
    d: "Most condos set work hours, and some ask for contractors to be registered in advance. Send me your building's rules and I book the slot inside those hours, with whatever details the juristic office asks for.",
  },
  {
    t: "Outdoor units in a service shaft",
    d: "Many Chiang Mai condos keep the outdoor unit in a shared shaft or a narrow back ledge. I check the position first and tell you honestly whether the outdoor unit can be cleaned. Anything I cannot reach is not charged.",
  },
  {
    t: "Several units or several rooms in one visit",
    d: `Landlords with more than one room in the same building pay ${p.wash.stdBulk} THB per unit from three units, and I do them in one visit so tenants are disturbed once. Tell me the number of rooms and when they are free, and I send the total first.`,
  },
];

const prices = [
  { t: `Wall unit ${btu.washStd} BTU`, d: `${p.wash.std} THB per unit, ${p.wash.stdBulk} THB each from three units` },
  { t: `Wall unit ${btu.washBig} BTU`, d: `${p.wash.big} THB per unit, ${p.wash.bigBulk} THB each from two units` },
  { t: "Ceiling-suspended or cassette unit", d: `From ${p.wash.suspended} THB per unit, depending on ceiling height` },
];

const faqs = [
  {
    q: "My lease says the aircon must be cleaned before I move out. Can you do that?",
    a: "Yes. Book a date a few days before your check-out. You receive photos of the cleaned units and a full tax invoice in the company name, Cher Solutions Co., Ltd., which you can pass to your landlord or agent. Whether it settles the clause in your lease is between you and your landlord, so check the wording with them first.",
  },
  {
    q: "The room is small and has no balcony. Is that a problem?",
    a: "No. A water-catch bag goes under the unit and the water runs down a hose into a bucket, so the floor and walls stay dry. This is the normal layout for most condo rooms in Chiang Mai.",
  },
  {
    q: "Do I need to be there?",
    a: "Not necessarily. If you leave a key with the juristic office or a friend, I can come at the agreed time and send you photos when the work is done. For the first visit it helps if you are there, so I can show you the condition of the unit.",
  },
  {
    q: "Can I message you in English?",
    a: "Yes. Written English on LINE works best. Send photos of the unit and the model sticker, the building name and your floor, and I reply with the price and available times.",
  },
  {
    q: "Is there a warranty?",
    a: "Every clean finishes with a disinfectant spray. The warranty against drips is 30 days after a standard clean and 60 days after a full strip-down clean. If the unit drips within that time, I come back and fix it at no charge.",
  },
  {
    q: "When do you work?",
    a: `Monday to Saturday, 8:00 to 18:00. Evenings and Sundays can be booked in advance at an extra charge, which I quote before the booking. Within the service area there is no travel fee.`,
  },
];

export default function EnCondoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="en">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconSnow className="h-4 w-4" />
              Condos and rental units · no balcony needed
            </p>
            <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
              Condo aircon cleaning in Chiang Mai
            </h1>
            <p className="lead mt-5">
              A condo is not a house. The work has to fit the building&apos;s hours, and there is far less room to work in.
              I come prepared for that: a water-catch bag, floor sheets and a short ladder, so the job starts as soon as
              the door opens and the room is left as I found it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="en-condo-line">
                <IconLine className="h-5 w-5" />
                Send photos on LINE
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="en-condo-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              {p.wash.std} THB per wall unit · {p.wash.stdBulk} THB each from three units · 30-day drip warranty · tax invoice available
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={heroPhotos.en.src}
              alt={heroPhotos.en.alt}
              width={900}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[22rem] w-full object-cover sm:h-[27rem]"
            />
          </div>
        </section>
      </div>

      <section className="section" lang="en">
        <div className="wrap">
          <h2 className="h2">What is different about condo jobs</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {points.map((x) => (
              <div key={x.t} className="card p-6">
                <h3 className="font-bold leading-7">{x.t}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">Prices</h2>
            <ul className="mt-7 space-y-4">
              {prices.map((x) => (
                <li key={x.t} className="card p-5">
                  <h3 className="font-bold">{x.t}</h3>
                  <p className="mt-1.5 text-[15px] leading-8 text-ink-soft">{x.d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Link href="/en/pricing" className="btn-ghost">
                Full price list
                <IconChevron className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="h2">What the cleaning includes</h2>
            <ul className="mt-7 space-y-3.5">
              {[
                "Floor sheets and a water-catch bag go on before the unit is touched",
                "Front panel and filters come off and are washed separately",
                "The evaporator coil is rinsed until the water runs clear",
                "The drain tray and drain line are cleaned, the usual source of smells",
                "The outdoor unit is washed too where it can be reached",
                "Everything goes back together and the unit is test-run",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <IconShield className="h-6 w-6 text-brand-600" />
                <p className="mt-3 text-sm leading-7 text-ink-soft">Drip warranty: 30 days for a standard clean, 60 days for a full strip-down. Every clean includes a disinfectant spray.</p>
              </div>
              <div className="card p-5">
                <IconClock className="h-6 w-6 text-brand-600" />
                <p className="mt-3 text-sm leading-7 text-ink-soft">About one hour per unit, and quicker per unit when several are done together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentJobs
        lang="en"
        slugs={["lang-air"]}
        eyebrow="Recent jobs, photographed on site"
        heading="Before and after, from real jobs"
        lead="Photos from real jobs in Chiang Mai, from the condition I found on arrival to the finished result."
      />

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Questions tenants and landlords ask</h2>
          <div className="mt-7 space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-bold">{f.q}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/en" className="btn-ghost">
              English home
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/en/condo/directory" className="btn-ghost">
              Find your condo (directory)
              <IconChevron className="h-4 w-4" />
            </Link>
            {condoBrands.map((b) => (
              <Link key={b.slug} href={`/en/condo/${b.slug}`} className="btn-ghost">
                {`${b.en} condos`}
                <IconChevron className="h-4 w-4" />
              </Link>
            ))}
            <Link href="/en/areas" className="btn-ghost">
              Areas I cover
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
