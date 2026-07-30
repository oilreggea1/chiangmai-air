import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { IconPhone, IconLine, IconCheck, IconChevron, IconClock } from "@/components/Icons";

const title = "Aircon Cleaning for Airbnb & Rentals in Chiang Mai | Pro Fresh Care";
const description =
  "Aircon cleaning between guests for Airbnb hosts, villa managers and rental owners in Chiang Mai. Scheduled around turnovers, from 550 THB per wall unit, receipts issued in the company name.";

export const metadata: Metadata = {
  // absolute กันไม่ให้ template ภาษาไทยจาก layout มาต่อท้าย
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/en/airbnb",
    languages: { "en-US": "/en/airbnb" },
  },
  openGraph: { title, description, url: `${site.url}/en/airbnb`, type: "article", locale: "en_US" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
  { name: "Airbnb & rentals", path: "/en/airbnb" },
];

const faqs = [
  {
    q: "Can you work around my check-out and check-in times?",
    a: "Yes, and this is the main thing hosts ask for. Tell me the turnover window and I will schedule inside it. A standard wall unit clean takes 45 to 60 minutes, so a single-bedroom place is usually done well within a normal changeover.",
  },
  {
    q: "I am not in Chiang Mai. Can you deal with my cleaner or caretaker?",
    a: "Yes. Many owners I work for are overseas. Give me the contact for whoever holds the keys, and I will arrange access with them directly and send you photos of the work when it is done.",
  },
  {
    q: "How often should rental units be cleaned?",
    a: "For a property in constant use I suggest every 6 months, and every 3 to 4 months if it has a kitchen in regular use or sits on a busy road. During the burning season from February to April, guests notice air quality most, so a clean in January is worth planning.",
  },
  {
    q: "What does it cost for a whole property?",
    a: "Wall units are 600 THB each, dropping to 550 THB each from three units up, which covers most apartments and villas. Larger 18,001 to 38,000 BTU units are 800 THB, or 700 THB each from two up. Send me the number of units and I will confirm the total before I come.",
  },
  {
    q: "Can I get paperwork for my accounts?",
    a: "I issue receipts in the company name, Cher Solutions Co., Ltd., which most owners and management companies accept as proof of payment. The company is not yet VAT registered, so a full VAT tax invoice is not available. If your accountant requires one, please tell me before booking.",
  },
];

export default function EnAirbnbPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="en">
        <section className="wrap max-w-3xl pt-12 pb-14 text-center">
          <p className="eyebrow justify-center">
            <IconClock className="h-4 w-4" />
            Scheduled around your turnovers
          </p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            Aircon cleaning for Airbnb and rental properties
          </h1>
          <p className="lead mt-5">
            A guest who walks into a room with a musty smell will mention it in the review,
            and that review stays visible far longer than the cost of preventing it.
            I clean between guests, work to your changeover window, and send photos when it is done.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta="en-airbnb-line">
              <IconLine className="h-5 w-5" />
              Message me on LINE
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta="en-airbnb-call">
              <IconPhone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </section>
      </div>

      <section className="section pt-4" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Why rentals need cleaning more often than homes</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
            <p>
              A unit in a home is used by people who have grown used to how it smells.
              A rental is judged fresh by a different person every few days, and they notice
              immediately. The smell itself comes from biological growth on the cold coil and
              the blower wheel, which a wipe-down of the front panel does not reach.
            </p>
            <p>
              The second issue is cost. A blocked coil makes the compressor run longer for the
              same result, so the electricity bill climbs while the room feels less cool.
              On a property running air conditioning most of the day, that difference is not small.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              { k: "45–60 min", v: "per wall unit for a standard clean" },
              { k: "550 THB", v: "each from three units up" },
              { k: "30 days", v: "warranty on the work" },
            ].map((x) => (
              <div key={x.v} className="card p-5">
                <p className="text-xl font-extrabold text-brand-700">{x.k}</p>
                <p className="mt-1 text-sm leading-7 text-ink-soft">{x.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">How it works for absent owners</h2>
          <ul className="mt-6 space-y-3.5">
            {[
              "Send me the number of units, the property type and your turnover window on LINE.",
              "I confirm the total price and the time slot before anything is booked.",
              "I coordinate access directly with your cleaner, caretaker or condo office.",
              "Sheeting goes down before I start, and the room is left as I found it.",
              "You get photos of the work and a receipt in the company name for your records.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Common questions from hosts</h2>
          <div className="mt-7 space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-bold">{f.q}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/en/pricing" className="btn-ghost">
              Full price list
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/en/areas" className="btn-ghost">
              Areas I cover
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/en" className="btn-ghost">
              English home
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
