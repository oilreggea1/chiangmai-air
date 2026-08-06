import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, areas, heroPhotos, p, btu } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
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
  openGraph: { title, description, url: `${site.url}/en`, type: "website", locale: "en_US" },
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
    a: "I handle bookings, quotes and job details in written English over LINE. It is the clearest way for both of us and it keeps a record of what was agreed. If you are not comfortable in Thai, please message me on LINE rather than calling.",
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
    a: "I issue receipts in the company name, Cher Solutions Co., Ltd., which work as proof of payment for cafés, restaurants, hotels, guesthouses and offices. To be straight with you: the company is not yet VAT registered, so I cannot issue a full VAT tax invoice. If your business needs one to reclaim input VAT, please tell me before booking.",
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
              I am Arm, and I do the work myself. My prices are published up front,
              I tell you the cost before I start, I do not top up refrigerant that is not actually low,
              and I sheet the room so your floor and furniture stay exactly as they were.
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
            Refrigerant top-up is {p.repair.refrigerantPerLb} THB per pound for both R32 and R410A, and I check the level free
            of charge first. If it is not actually low, I will tell you so rather than sell you a refill.
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
              "Prices are published on this site. You know roughly what it costs before you call, and I confirm the exact figure before I start.",
              "I do not top up refrigerant unless it is genuinely low. Overcharging a system shortens compressor life, and it is the easiest way for a dishonest technician to pad a bill.",
              "I show you the old parts I removed and explain what failed and why. And if a repair is not worth the money, I say so — even though I earn more if you let me do it.",
              "Two layers of drop sheets on every cleaning job. Your floor and furniture stay as they were.",
              "Warranty: 30 days on any clean, standard or full strip-down, and up to 1 year on installation.",
              "Receipts issued in the company name. Not VAT registered, so no VAT tax invoice yet.",
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

      <section className="section bg-sand" lang="en">
        <div className="wrap">
          <h2 className="h2">Areas I cover</h2>
          <p className="lead mt-3 max-w-2xl">
            I am based in San Kamphaeng, so the eastern side of the city is quickest for me.
            I cover every sub-district of Mueang Chiang Mai — the old city, Nimman, Santitham and
            the airport side — plus San Kamphaeng, Saraphi, Doi Saket and San Phra Net.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/area/${a.slug}`}
                  className="card flex h-full items-start gap-3 p-5 transition-all hover:shadow-lift"
                >
                  <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm">
                    <span className="block font-bold">{a.name}</span>
                    <span className="mt-0.5 block text-xs text-ink-soft">{a.landmarks[0]}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
