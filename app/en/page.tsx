import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, gallery, areas } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import {
  IconPhone, IconLine, IconCheck, IconPin, IconClock, IconSnow, IconWrench, IconInstall, IconMove, IconShield,
} from "@/components/Icons";

const title = "Aircon Cleaning & AC Repair in Chiang Mai | Pro Fresh Care";
const description =
  "Air conditioner cleaning, repair, installation and relocation in Chiang Mai. Transparent pricing from 550 THB, same-week booking, open daily 8am-8pm. Condos, villas and Airbnb welcome. Tax invoice available.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "aircon cleaning Chiang Mai", "AC repair Chiang Mai", "air conditioner service Chiang Mai",
    "aircon service Nimman", "AC cleaning San Kamphaeng", "Airbnb aircon Chiang Mai",
  ],
  alternates: { canonical: "/en" },
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
    price: "from 550 THB",
    desc: "Standard clean 600 THB per wall unit (550 THB each for 3+ units). Full strip-down clean 2,000 THB, where we remove the blower wheel and every removable part and disinfect them separately.",
  },
  {
    icon: IconWrench,
    name: "AC repair",
    price: "500 THB diagnostic",
    desc: "Not cooling, water dripping, strange noises, unit cutting out. The 500 THB diagnostic fee is deducted from the repair cost if you go ahead. We quote before we touch anything.",
  },
  {
    icon: IconInstall,
    name: "New installation",
    price: "from 3,000 THB",
    desc: "3,000 THB for 9,000–12,000 BTU, 3,500 THB for 18,000–24,000 BTU. Full vacuum of the line set, no shortcuts. Warranty up to 1 year.",
  },
  {
    icon: IconMove,
    name: "Relocation",
    price: "3,500 THB",
    desc: "Moving house or changing rooms. We pump the refrigerant back into the condenser before disconnecting, so you do not pay for a full recharge afterwards. Removal only is 700 THB.",
  },
];

const faqs = [
  {
    q: "Do you speak English?",
    a: "We can handle bookings, quotes and job details in written English over LINE, which is the easiest way for us to communicate clearly and keep a record of what was agreed. Please message us on LINE rather than calling if you are not comfortable in Thai.",
  },
  {
    q: "How much does aircon cleaning cost in Chiang Mai?",
    a: "Our standard clean is 600 THB per wall-mounted unit for 9,000–18,000 BTU, dropping to 550 THB each when you have three or more units. Larger units at 18,001–38,000 BTU are 800 THB. The full strip-down Premium clean is 2,000 THB per unit.",
  },
  {
    q: "How often should I clean my aircon in Chiang Mai?",
    a: "More often than in most places. During the burning season from February to April the air here carries far more soot and dust than usual, so filters clog quickly. We recommend a full clean in January before the season starts, rinsing the filters yourself every 2–4 weeks through the season, and a second full clean around May or June.",
  },
  {
    q: "Can you issue a tax invoice?",
    a: "Yes. We regularly work with cafés, restaurants, hotels, guesthouses and offices that need proper documentation, and we can issue a tax invoice as normal.",
  },
  {
    q: "Do you work on condos and rental properties?",
    a: "Yes, we do houses, condos, dormitories, hotels, restaurants and offices. If you manage an Airbnb or a rental villa and need units serviced between guests, message us with the number of units and the area and we will work out a schedule.",
  },
  {
    q: "How quickly can you come?",
    a: "Usually within 24 hours, and same day if we have a slot free. We are open every day from 8am to 8pm. The one exception is April, when demand across the whole city peaks — book ahead if you can.",
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
              Based in Ton Pao, San Kamphaeng · serving all of Chiang Mai
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.5rem]">
              Aircon cleaning &amp; AC repair in Chiang Mai
            </h1>
            <p className="lead mt-5">
              Straightforward pricing, published up front. We tell you the cost before we start,
              we do not top up refrigerant that is not actually low, and we sheet the room so your
              floor and furniture stay clean.
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
                Message us on LINE
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="en-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              LINE ID {site.lineId} · open daily 8:00–20:00 · usually on site within 24 hours
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={gallery[2].src}
              alt="Technician cleaning a wall-mounted air conditioner at a customer's home in Chiang Mai"
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
          <h2 className="h2">What we do</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {servicesEn.map((s) => (
              <div key={s.name} className="card flex flex-col p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-700">{s.price}</p>
                <p className="mt-3 flex-1 text-[15px] leading-8 text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-soft">
            Refrigerant top-up is charged at 25 THB per pound for both R32 and R410A, and we check the
            level free of charge first. If it is not low, we will tell you so rather than sell you a refill.
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
              March, and by April — the hottest month, when every technician in the city is booked out —
              it is a bad time to discover the problem. Clean it before the season, not during it.
            </p>
          </div>
          <Link href="/pm25" className="btn-ghost mt-7">
            Read our full guide on aircon and PM2.5 in Chiang Mai (Thai)
          </Link>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Why customers pick us</h2>
          <ul className="mt-7 space-y-4">
            {[
              "Prices published on this site. You know the cost before you call, and we confirm the final figure before we start work.",
              "We do not top up refrigerant unless it is genuinely low. Overcharging a system shortens compressor life, and it is the easiest way for a dishonest technician to pad a bill.",
              "We show you the old parts we removed, and explain what failed and why.",
              "Two layers of drop sheets on every cleaning job. Your floor and furniture stay as they were.",
              "Warranty: 30 days on a standard clean, 60 days on the full strip-down clean, and up to 1 year on installation.",
              "Tax invoices available for businesses.",
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
          <h2 className="h2">Areas we cover</h2>
          <p className="lead mt-3 max-w-2xl">
            We are based in Ton Pao, San Kamphaeng, so the eastern side of the city is fastest for us,
            but we cover the whole of Chiang Mai including the old city, Nimman and the southern suburbs.
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
              Send us the number of units, roughly what size they are, and your area. We will give you
              a price before anyone comes out. LINE is easiest for English.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-7 py-4 text-lg">
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
              Open daily 8:00–20:00
              <IconShield className="ml-3 h-4 w-4" />
              Tax invoice available
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
