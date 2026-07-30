import type { Metadata } from "next";
import Link from "next/link";
import { site, pricing } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { IconPhone, IconLine, IconCheck, IconChevron } from "@/components/Icons";

const title = "Aircon Cleaning Prices in Chiang Mai | Pro Fresh Care";
const description =
  "Full published price list for aircon cleaning, repair, installation and relocation in Chiang Mai. Wall units from 600 THB, deep clean 2,000 THB, cassette units from 1,500 THB. Same price for Thai and foreign customers.";

export const metadata: Metadata = {
  // absolute กันไม่ให้ template ภาษาไทยจาก layout มาต่อท้าย
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/en/pricing",
    languages: { "th-TH": "/price", "en-US": "/en/pricing", "zh-CN": "/zh/pricing" },
  },
  openGraph: { title, description, url: `${site.url}/en/pricing`, type: "article", locale: "en_US" },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
  { name: "Prices", path: "/en/pricing" },
];

const faqs = [
  {
    q: "Do you charge foreigners more than Thai customers?",
    a: "No. The prices on this page are what everyone pays, and they are the same figures published on the Thai version of this site. I quote the full cost before I start work, and I do not add charges afterwards.",
  },
  {
    q: "Is travel to my area included?",
    a: "Yes, inside my service area there is no separate travel fee. That covers all of Mueang Chiang Mai — Nimman, the old city, Santitham and the airport side — plus San Kamphaeng, Saraphi, Doi Saket and San Phra Net. If you are outside it, message me and I will tell you honestly whether I can come and what the travel cost would be.",
  },
  {
    q: "How do I know which type of unit I have?",
    a: "A wall unit is the rectangular one mounted high on a wall. A cassette is the square panel set into the ceiling with air blowing out of four sides. A suspended unit hangs below the ceiling, usually in restaurants and shops. If you are unsure, send me a photo on LINE and I will tell you.",
  },
  {
    q: "Can you give me a receipt for my accounts?",
    a: "I issue receipts in the company name, Cher Solutions Co., Ltd. To be straight with you: the company is not yet VAT registered, so I cannot issue a full VAT tax invoice. If your business needs one to reclaim input VAT, please tell me before booking.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash or Thai bank transfer on completion. I will show you the finished work and confirm the amount matches the quote before payment.",
  },
];

export default function EnPricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="en">
        <section className="wrap max-w-3xl pt-12 pb-14 text-center">
          <p className="eyebrow justify-center">Published prices · no hidden fees</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            Aircon cleaning prices in Chiang Mai
          </h1>
          <p className="lead mt-5">
            Every rate I charge is on this page. It is the same list published on the Thai
            version of this site, and the same price whether you are Thai or foreign.
            I confirm the total with you before I start.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta="en-price-line">
              <IconLine className="h-5 w-5" />
              Get a quote on LINE
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta="en-price-call">
              <IconPhone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </section>
      </div>

      <section className="section pt-4" lang="en">
        <div className="wrap max-w-4xl space-y-6">
          {pricing.map((g) => (
            <div key={g.group} className="card p-6 sm:p-7">
              <h2 className="text-lg font-bold sm:text-xl">{g.group}</h2>
              <ul className="mt-5 divide-y divide-slate-100">
                {g.items.map((it) => (
                  <li key={it.label} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-[15px] leading-7 text-ink-soft">{it.label}</span>
                    <span className="shrink-0 font-bold text-brand-700">{it.price}</span>
                  </li>
                ))}
              </ul>
              {g.note && <p className="mt-4 text-sm leading-7 text-ink-soft">{g.note}</p>}
            </div>
          ))}
          <p className="text-sm leading-7 text-ink-soft">
            Group names and item labels are shown in Thai because those are the exact terms
            I use when quoting. If any line is unclear, message me on LINE and I will explain it in English.
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">What is included in every job</h2>
          <ul className="mt-6 space-y-3.5">
            {[
              "A firm price before I start. If I find something extra on site, I stop and ask you first.",
              "Two layers of sheeting over the floor and furniture, and the area cleaned up before I leave.",
              "Refrigerant measured in front of you. If it is not low, I tell you and I do not top it up.",
              "The old part shown to you whenever something is replaced.",
              "30-day warranty on any clean, and up to 1 year on a new installation.",
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
          <h2 className="h2">Common questions</h2>
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
              Back to English home
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/en/areas" className="btn-ghost">
              Areas I cover
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href="/price" className="btn-ghost" hrefLang="th">
              ดูราคาภาษาไทย
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
