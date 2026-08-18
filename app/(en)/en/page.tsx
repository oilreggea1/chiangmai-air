import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, areas, heroPhotos, p, btu } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import {
  IconPhone, IconLine, IconCheck, IconPin, IconClock, IconSnow, IconWrench, IconInstall, IconMove, IconWasher, IconShield,
} from "@/components/Icons";

const title = "Aircon Cleaning & AC Repair in Chiang Mai | Pro Fresh Care";
const description =
  `Aircon cleaning and AC repair in Chiang Mai by Arm, a local technician. ${p.wash.std} THB per wall unit, ${p.wash.stdBulk} THB each for three or more. Open Mon-Sat 8am-6pm.`;

export const metadata: Metadata = {
  // absolute กันไม่ให้ template ภาษาไทยจาก layout มาต่อท้าย
  title: { absolute: title },
  description,
  keywords: [
    "aircon cleaning Chiang Mai", "AC repair Chiang Mai", "air conditioner service Chiang Mai",
    "aircon service Nimman", "AC cleaning San Kamphaeng", "Airbnb aircon Chiang Mai",
  ],
  alternates: {
    canonical: "/en",
    languages: { "th-TH": "/", "en-US": "/en", "zh-CN": "/zh", "x-default": "/" },
  },
  ...share({ title, description, path: `/en`, type: "website", locale: "en_US" }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
];

const servicesEn = [
  {
    icon: IconSnow,
    name: "Aircon cleaning",
    price: `${p.wash.std} THB · ${p.wash.stdBulk} for 3+`,
    desc: `Standard clean ${p.wash.std} THB per wall unit, or ${p.wash.stdBulk} THB each for three or more. The full strip-down clean is ${p.wash.premium} THB depending on size — I take out the blower wheel and every removable part, wash them separately and disinfect them. If your unit has no smell and gets cleaned regularly, I will tell you the standard clean is enough.`,
  },
  {
    icon: IconWrench,
    name: "AC repair",
    price: `${p.repair.diagnostic} THB diagnostic`,
    desc: `Not cooling, water dripping, strange noises, unit cutting out. I charge ${p.repair.diagnostic} THB to diagnose it, and I take that off the bill if you go ahead with the repair. I quote you before I touch anything.`,
  },
  {
    icon: IconInstall,
    name: "New installation",
    price: `from ${p.install.small} THB`,
    desc: `${p.install.small} THB for ${btu.installSmall} BTU, ${p.install.large} THB for ${btu.installLarge} BTU. I vacuum the line set properly every time — it is the step nobody can see and the one that kills compressors when it gets skipped. Warranty up to 1 year.`,
  },
  {
    icon: IconMove,
    name: "Relocation",
    price: `${p.install.relocate} THB`,
    desc: `Moving house or changing rooms. I pump the refrigerant back into the condenser before disconnecting, so you are not paying for a full recharge afterwards. Removal only is ${p.install.removeOnly} THB.`,
  },
  {
    icon: IconSnow,
    name: "Suspended and ceiling units",
    price: `from ${p.wash.suspended} THB`,
    desc: `Restaurants, cafés and offices usually have units suspended below the ceiling or recessed into it. They sit high up and everything below has to be sheeted off first, so they take longer than a wall unit. Suspended units from ${p.wash.suspended} THB, ceiling-recessed from ${p.wash.cassette} THB. The final price depends on the size of the unit and how high the ceiling is, and I tell you before I start.`,
  },
  {
    icon: IconInstall,
    name: "Buying a unit and trade-ins",
    price: "quoted per model",
    desc: "I sell both new and checked second-hand units, fitted. Buying and fitting from one person means that if something goes wrong later there is no argument about whether it is the unit or the installation. Unit prices depend on the model and the promotion running at the time, so I quote per model. Second-hand units carry a 1 month warranty on the unit itself. I also take your old unit in part-exchange, but I have to see it before I can put a price on it.",
  },
  {
    icon: IconWasher,
    name: "Washing machine drum clean",
    price: `from ${p.washer.topLoad} THB`,
    desc: `I take the drum out and wash every removable part, rather than pouring cleaner in and running a cycle — the build-up sits on the outside of the drum where a cycle cannot reach. Top loaders start at ${p.washer.topLoad} THB and go by capacity; front loaders start at ${p.washer.frontLoad} THB because they are more involved to strip down. Around three hours per machine, 30-day warranty.`,
  },
];

const faqs = [
  {
    q: "Do you speak English?",
    a: "I work in written English on LINE, using a translation app. Bookings, quotes and job details all go through smoothly that way, and you keep a written record of what was agreed. Short, plain sentences come through most accurately — if a reply reads oddly, say so and I will put it another way. LINE works far better than a phone call, so please message rather than ring.",
  },
  {
    q: "How much does aircon cleaning cost in Chiang Mai?",
    a: `My standard clean is ${p.wash.std} THB per wall-mounted unit for ${btu.washStd} BTU, dropping to ${p.wash.stdBulk} THB each when you have three or more. Larger units at ${btu.washBig} BTU are ${p.wash.big} THB, or ${p.wash.bigBulk} THB each from two up. The full strip-down clean is ${p.wash.premium} THB per unit depending on size.`,
  },
  {
    q: "How often should I clean my aircon in Chiang Mai?",
    a: "More often than in most places, unfortunately. During the burning season from February to April the air here carries far more soot than usual and filters clog fast. I suggest a full clean in January before the season starts, rinsing the filters yourself every 2–4 weeks through it, and a second full clean around May or June.",
  },
  {
    q: "Can you give me a receipt for my accounts?",
    a: "Yes. Receipts are issued in the company name, Cher Solutions Co., Ltd., and serve as proof of payment for cafés, restaurants, hotels, guesthouses and offices. The company is not VAT registered, so a full VAT tax invoice is not available. If your business needs one to reclaim input VAT, please tell me before booking so you are not caught out.",
  },
  {
    q: "Do you work on condos and rental properties?",
    a: "Yes — houses, condos, dormitories, hotels, restaurants and offices. If you manage an Airbnb or a rental villa and need units serviced between guests, message me with the number of units and the area and we can work out a schedule that fits your turnovers.",
  },
  {
    q: "How quickly can you come?",
    a: "Usually within 24 hours, and the same day if I have a slot free. I work Monday to Saturday, 8am to 6pm, and can take bookings outside those hours for an additional fee. The one exception is April, when the whole city wants a technician at once — book ahead if you can.",
  },
];

export default function EnglishPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 via-white to-white" lang="en">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconPin className="h-4 w-4" />
              Arm · based in San Kamphaeng · working across Chiang Mai
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.5rem]">
              Aircon cleaning &amp; AC repair in Chiang Mai
            </h1>
            <p className="lead mt-5">
              I am Arm, and I do the work myself. Every rate is published, you get the full cost
              before I start, and the floor and furniture are sheeted before anything comes apart.
              Send me a photo on LINE and you will have a price the same day.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noopener"
                className="btn-line px-6 py-3.5 text-lg"
                data-cta="en-line"
              >
                <IconLine className="h-5 w-5" />
                Message me on LINE
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="en-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              AC service LINE {site.lineId} · washing machine cleaning LINE {site.lineId2} · Mon–Sat 8:00–18:00
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
          <h2 className="h2">What I do</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {servicesEn.map((s) => (
              <div key={s.name} className="card flex flex-col p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/70">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-700">{s.price}</p>
                <p className="mt-3 flex-1 text-[15px] leading-8 text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-soft">
            Refrigerant is {p.repair.refrigerantPerLb} THB per pound for both R32 and R410A. The level is measured in front of you
            at no charge first, so you can see whether a top-up is needed before you pay for one.
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">The burning season matters more than you think</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
            <p>
              If you are new to Chiang Mai, the months from February to April are the hard part of the
              year. The city sits in a bowl ringed by mountains, and in the dry season a layer of warm
              air traps smoke from agricultural burning over the valley for weeks at a time.
            </p>
            <p>
              Two things follow from that. First, the filter that came with your air conditioner does
              not stop PM2.5 — it is designed to catch coarse dust and protect the coil, not fine
              particulates. What your aircon actually does for you is let you keep the room sealed,
              which is what really keeps the outdoor air out. Pair it with a HEPA purifier for the room
              you sleep in.
            </p>
            <p>
              Second, soot clogs coils fast. A unit that was fine in January can be blowing weakly by
              March, and April — the hottest month, when every technician in the city is booked out —
              is a bad time to discover that. Get it cleaned before the season, not during it.
            </p>
          </div>
          <Link href="/pm25" className="btn-ghost mt-7">
            Read my full guide on aircon and PM2.5 in Chiang Mai (Thai)
          </Link>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Why people call me back</h2>
          <ul className="mt-7 space-y-4">
            {[
              "Every rate is published, so you know the cost before you call. I confirm the exact figure with you before I start, and it does not change afterwards.",
              "Refrigerant is measured in front of you. A system that is not low does not get topped up, because overcharging one shortens the life of the compressor.",
              "Old parts come back to you with an explanation of what failed. Where a repair costs more than the unit is worth, I will tell you that and leave the decision with you.",
              "Two layers of drop sheets on every cleaning job. Floor and furniture stay as they were.",
              "Warranty: 30 days on any clean, standard or full strip-down, and up to 1 year on installation.",
              "Receipts issued in the company name, Cher Solutions Co., Ltd. The company is not VAT registered, so a VAT tax invoice is not available.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/12 text-mint">
                  <IconCheck className="h-4 w-4" />
                </span>
                <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">What happens when you book</h2>
          <p className="lead mt-3">
            Four steps, no deposit, and nothing is charged until the work is finished and you have seen it.
          </p>
          <ol className="mt-8 space-y-4">
            {[
              {
                t: "Send a photo and your area",
                d: "On LINE, in English. A photo of the indoor unit, roughly how many you have, and the district you are in is enough for me to work from.",
              },
              {
                t: "You get a price and a time",
                d: "Usually within a few hours during working hours. The figure covers the whole job, travel included, and it is what you pay at the end.",
              },
              {
                t: "I come and lay the sheets first",
                d: "Two layers over floor and furniture before anything is opened. If I find something the photo did not show, I stop and ask you before carrying on.",
              },
              {
                t: "Pay when it is done",
                d: "Cash or Thai bank transfer once you have seen the finished work. Receipt in the company name on request.",
              },
            ].map((x, i) => (
              <li key={x.t} className="card flex items-start gap-4 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-700 text-base font-bold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-bold">{x.t}</span>
                  <span className="mt-1 block text-[15px] leading-8 text-ink-soft">{x.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap">
          <h2 className="h2">Areas I cover</h2>
          <p className="lead mt-3 max-w-2xl">
            I am based in San Kamphaeng, so the eastern side of the city is quickest for me.
            I cover every sub-district of Mueang Chiang Mai — the old city, Nimman, Santitham and
            the airport side — plus San Kamphaeng, Saraphi, Doi Saket and San Phra Net.
          </p>
          {/*
            การ์ดพื้นที่เคยลิงก์ไป /area/[slug] ซึ่งเป็นหน้าภาษาไทยล้วน (แก้ 19 ส.ค. 2569)
            คนอ่านภาษาอังกฤษกดจากหน้านี้แล้วตกไปอยู่หน้าไทยโดยไม่มีอะไรเตือน
            จึงเปลี่ยนเป็นรายการที่กดไม่ได้ แล้วส่งต่อไป /en/areas ซึ่งเป็นภาษาอังกฤษ
            และมีบล็อกลิงก์หน้าโซนภาษาไทยกำกับไว้ให้เลือกเองอยู่แล้ว
          */}
          {/*
            ชื่อพื้นที่บนหน้านี้ต้องเป็นอักษรละติน ไม่ใช่อักษรไทย
            ของเดิมดึง a.name ซึ่งเป็นภาษาไทย คนอ่านอังกฤษจึงเห็นเป็นตัวอักษรที่อ่านไม่ออก
            slug เป็นคำอ่านแบบละตินอยู่แล้ว จึงแปลงเป็นชื่อที่อ่านออกได้โดยไม่ต้องเก็บข้อมูลซ้ำ
            ถ้าวันไหนอยากได้ชื่อที่สะกดเป๊ะกว่านี้ ให้เพิ่มฟิลด์ nameEn ใน areas แล้วใช้แทน
          */}
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <li key={a.slug} className="card flex h-full items-start gap-3 p-5">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <span className="text-sm">
                  <span className="block font-bold">
                    {a.slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-soft" lang="th">{a.name}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Link href="/en/areas" className="btn-ghost" data-cta="en-areas">
              See the full list of districts and sub-districts
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">More in English</h2>
          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/en/pricing", t: "Full price list", d: "Every service, published up front" },
              { href: "/en/areas", t: "Areas I cover", d: "District and sub-district list" },
              { href: "/en/airbnb", t: "Airbnb and rentals", d: "Cleaning between guests" },
            ].map((x) => (
              <li key={x.href}>
                <Link
                  href={x.href}
                  className="card flex h-full flex-col justify-between gap-2 p-5 transition-all hover:shadow-lift"
                >
                  <span className="font-bold">{x.t}</span>
                  <span className="text-sm text-ink-soft">{x.d}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Frequently asked questions</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card group px-5 py-4 sm:px-6">
                <summary className="cursor-pointer list-none text-base font-semibold sm:text-lg">
                  {f.q}
                </summary>
                <p className="mt-3 text-[15px] leading-8 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0" lang="en">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-14 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Get a quote today</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-brand-100">
              Send me the number of units, roughly what size they are, and your area. I will give you
              a price before anyone comes out. LINE is easiest for English.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" data-cta="en-band-line" className="btn-line px-7 py-4 text-lg">
                <IconLine className="h-5 w-5" />
                LINE {site.lineId}
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-7 py-4 text-lg">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-brand-200">
              <IconClock className="h-4 w-4" />
              Mon–Sat 8:00–18:00 · closed Sunday
              <IconShield className="ml-3 h-4 w-4" />
              Company receipt available
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
