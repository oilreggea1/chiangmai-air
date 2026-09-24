import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos } from "@/lib/site";
import { breadcrumbSchema, jsonLd, PERSON_ID } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconPin, IconClock, IconShield, IconEngineer } from "@/components/Icons";

/**
 * หน้า About ภาษาอังกฤษ (24 ก.ย. 2569) — หน้าสร้างความเชื่อถือสำหรับลูกค้าต่างชาติ
 * ข้อมูลบริษัท/เลขผู้เสียภาษี/ที่อยู่/เวลาทำการ ดึงจาก site ทั้งหมด ยกเว้นที่อยู่ภาษาอังกฤษซึ่งเขียนตรงนี้
 * (ต้องตรงกับ site.address: 168/14 หมู่ 12 ต.สันกำแพง อ.สันกำแพง 50130 — ถ้าที่อยู่ไทยเปลี่ยน ต้องแก้ตรงนี้ด้วย)
 * คำสัญญา 6 ข้อแปลจาก app/(th)/about/page.tsx ห้ามเพิ่มคำรับปากที่ฝั่งไทยไม่มี
 * รูปทุกใบเปิดดูแล้ว ไม่มีมือ/เล็บที่เห็นคราบ (กติกาเจ้าของ)
 */
const title = "About Arm and Pro Fresh Care, Chiang Mai";
const description =
  "Arm is the technician who does every Pro Fresh Care job himself. Registered company Cher Solutions Co., Ltd., based in San Kamphaeng, Chiang Mai. Prices published, quote before work, company receipts.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/en/about",
    languages: { "th-TH": "/about", "en-US": "/en/about", "zh-CN": "/zh/about", "x-default": "/about" },
  },
  ...share({ title, description, path: `/en/about`, type: "profile", locale: "en_US", image: heroPhotos.enAbout }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
  { name: "About", path: "/en/about" },
];

const addressEn = "168/14 Moo 12, San Kamphaeng sub-district, San Kamphaeng district, Chiang Mai 50130";

const promises = [
  { t: "The price comes before the work, every time", d: "Whatever the size of the job, you get a firm figure before I start. If something on site adds to it, I stop and ask before carrying on." },
  { t: "Refrigerant is measured before anything is added", d: "Overcharging raises the pressure and shortens the life of the compressor. I check the level in front of you, and if it is not low, I tell you and leave it." },
  { t: "You see the old part whenever one is replaced", d: "The part that came out is shown to you with an explanation of what failed, so you can see what the money went on." },
  { t: "An honest call even when it costs me the job", d: "When a repair would cost more than half the price of a new unit, I say so and lay out the options. The decision stays with you." },
  { t: "Your home is left as I found it", d: "Two layers of sheeting go down before I open anything, and I tidy up before I hand over. There is nothing for you to clean afterwards." },
  { t: "The warranty is real", d: "If the same fault comes back inside the warranty period, I come back and fix it at no charge." },
];

const facts = [
  { k: "Trading name", v: "Pro Fresh Care" },
  { k: "Registered company", v: site.legalNameEn },
  { k: "Tax ID", v: site.taxId },
  { k: "Based in", v: addressEn },
  { k: "Hours", v: "Monday to Saturday, 08:00–18:00. Closed Sunday. Out-of-hours visits by arrangement, with a surcharge quoted first." },
  { k: "Invoices and receipts", v: "VAT registered. Full VAT tax invoices and receipts are issued in the company name on request." },
];

const photos = [
  { src: "/work/chang-arm-lang-air-01.jpg", alt: "Arm on a stepladder opening the front cover of a wall unit beside a window, the room already sheeted" },
  { src: "/work/air-2569-04.jpg", alt: "Technician with a tool belt holding a blue catch sheet up around a high indoor unit before rinsing" },
  { src: "/work/air-2569-02.jpg", alt: "Technician in the Pro Fresh Care team shirt opening a wall unit, with a striped tarpaulin spread over the furniture below" },
];

export default function EnAboutPage() {
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
          url: `${site.url}/en/about`,
          inLanguage: "en",
          mainEntity: { "@id": `${site.url}/#business` },
          about: { "@id": PERSON_ID },
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="en">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              San Kamphaeng, Chiang Mai
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
              I am Arm. When you book Pro Fresh Care, I am the one who turns up.
            </h1>
            <p className="lead mt-5">
              Pro Fresh Care is the trading name of {site.legalNameEn}, a registered Thai company based in San Kamphaeng
              on the east side of Chiang Mai. I clean, repair, install and relocate air conditioners across the city,
              and I strip and wash washing machines. Every job is quoted before it starts and I do the work myself,
              so the person you message is the person who knows your unit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="en-about-line">
                <IconLine className="h-5 w-5" />
                Message me on LINE
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="en-about-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={heroPhotos.enAbout.src}
              alt={heroPhotos.enAbout.alt}
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
        <div className="wrap max-w-4xl">
          <h2 className="h2">Company details</h2>
          <p className="lead mt-3">The details a landlord, condo office or accountant usually asks for.</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k} className="card p-5">
                <dt className="text-xs font-bold tracking-wide text-brand-700 uppercase">{f.k}</dt>
                <dd className="mt-1.5 text-[15px] leading-7 text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Who will be in your home</h2>
          <div className="card mt-6 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                <IconEngineer className="h-7 w-7" />
              </span>
              <div>
                <p className="text-lg font-bold">Arm</p>
                <p className="text-sm font-medium text-brand-700">Technician in charge of every job · more than 5 years in the trade</p>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-8 text-ink-soft">
              I think you should know from the start who is coming into your home, and that when you need the same unit
              looked at again, or a warranty call, you reach the person who remembers it. That is why I do not send someone else.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-ink-soft">
              Two things matter most to me on every job: a clean result with the room left tidy, and a complete price before
              I start. If the job grows on site, I stop and ask first.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-ink-soft">
              I work in written English on LINE using a translation app. Short, plain sentences come through best, and you
              keep a written record of what was agreed. Messaging works far better than a phone call for English.
            </p>
          </div>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap max-w-4xl">
          <h2 className="h2">Six things I promise every customer</h2>
          <p className="lead mt-3">These are the rules I decide by when I am standing in your home.</p>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2">
            {promises.map((x) => (
              <li key={x.t} className="card p-6">
                <p className="flex items-start gap-2.5 font-bold">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  {x.t}
                </p>
                <p className="mt-2.5 text-sm leading-7 text-ink-soft">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap">
          <h2 className="h2">On the job</h2>
          <p className="lead mt-3 max-w-2xl">Uniform, sheets down first, and the room handed back the way it was.</p>
          <ul className="mt-9 grid gap-5 sm:grid-cols-3">
            {photos.map((ph) => (
              <li key={ph.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <Image src={ph.src} alt={ph.alt} width={768} height={1024} loading="lazy" sizes="(max-width: 640px) 100vw, 33vw" className="h-72 w-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">How to reach me</h2>
          <ul className="mt-7 space-y-4">
            <li className="card flex items-start gap-4 p-5">
              <IconLine className="mt-0.5 h-6 w-6 shrink-0 text-[#06C755]" />
              <span>
                <span className="block font-bold">LINE, air conditioning: {site.lineId}</span>
                <span className="mt-1 block text-sm leading-7 text-ink-soft">Cleaning, repairs, installation, relocation. Send a photo of the unit, how many you have, and your area.</span>
              </span>
            </li>
            <li className="card flex items-start gap-4 p-5">
              <IconLine className="mt-0.5 h-6 w-6 shrink-0 text-[#06C755]" />
              <span>
                <span className="block font-bold">LINE, washing machines: {site.lineId2}</span>
                <span className="mt-1 block text-sm leading-7 text-ink-soft">Drum cleaning is booked through this second account.</span>
              </span>
            </li>
            <li className="card flex items-start gap-4 p-5">
              <IconPhone className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" />
              <span>
                <span className="block font-bold">{site.phone} · {site.phone2}</span>
                <span className="mt-1 block text-sm leading-7 text-ink-soft">Phone calls are in Thai. For English, please message instead.</span>
              </span>
            </li>
            <li className="card flex items-start gap-4 p-5">
              <IconClock className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" />
              <span>
                <span className="block font-bold">Monday to Saturday, 08:00–18:00</span>
                <span className="mt-1 block text-sm leading-7 text-ink-soft">Closed Sunday. Usually on site within 24 hours, except February to April when the whole city is booking at once.</span>
              </span>
            </li>
          </ul>
          <p className="mt-6 flex items-start gap-2.5 text-sm leading-7 text-ink-soft">
            <IconShield className="mt-1 h-5 w-5 shrink-0 text-mint" />
            No deposit. You pay in cash or by Thai bank transfer after you have seen the finished work.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/en" className="btn-ghost">Services in English<IconChevron className="h-4 w-4" /></Link>
            <Link href="/en/pricing" className="btn-ghost">Full price list<IconChevron className="h-4 w-4" /></Link>
            <Link href="/about" className="btn-ghost" hrefLang="th">หน้าภาษาไทย<IconChevron className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
