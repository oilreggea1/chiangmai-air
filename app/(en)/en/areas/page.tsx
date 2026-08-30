import type { Metadata } from "next";
import Link from "next/link";
import { site, areas, coverage, coverageTotal } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconPin, IconChevron } from "@/components/Icons";

const title = "Areas I Cover in Chiang Mai | Pro Fresh Care";
const description =
  "Aircon service around San Kamphaeng, covering Mueang Chiang Mai — Nimman, old city, Santitham — plus Saraphi, Doi Saket and San Phra Net. No travel fee.";

export const metadata: Metadata = {
  // absolute กันไม่ให้ template ภาษาไทยจาก layout มาต่อท้าย
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/en/areas",
    languages: { "th-TH": "/area", "en-US": "/en/areas", "x-default": "/area" },
  },
  ...share({ title, description, path: `/en/areas`, locale: "en_US" }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
  { name: "Areas", path: "/en/areas" },
];

/** ชื่ออำเภอภาษาอังกฤษ ใช้คำที่ชาวต่างชาติในเชียงใหม่ใช้กันจริง */
const amphoeEn: Record<string, string> = {
  "อ.สันกำแพง": "San Kamphaeng",
  "อ.สารภี": "Saraphi",
  "อ.เมืองเชียงใหม่": "Mueang Chiang Mai (city, Nimman, old town, Santitham)",
  "อ.ดอยสะเก็ด": "Doi Saket",
  "อ.สันทราย": "San Sai (San Phra Net sub-district only)",
};

const faqs = [
  {
    q: "Do you cover Nimman and the old city?",
    a: "Yes. Both are inside Mueang Chiang Mai district, which is fully within my service area, and there is no travel surcharge.",
  },
  {
    q: "Is there a travel fee for my area?",
    a: "No. Every area I cover is charged at the same rate. If you are outside the area, message me and I will tell you what is possible and what the travel cost would be.",
  },
  {
    q: "How far in advance should I book?",
    a: "Usually I can come within 24 hours, and the same day if a slot is free. The exception is February to April, the burning season, when demand is high across the whole province and booking a week ahead is safer.",
  },
  {
    q: "I am outside these areas. Can you still come?",
    a: "Message me on LINE with your location. If it is slightly outside I will tell you what is possible, and if it is too far I will say so right away.",
  },
];

export default function EnAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="en">
        <section className="wrap max-w-3xl pt-12 pb-14 text-center">
          <p className="eyebrow justify-center">
            <IconPin className="h-4 w-4" />
            Based in San Kamphaeng · east side of Chiang Mai
          </p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            Areas I cover in Chiang Mai
          </h1>
          <p className="lead mt-5">
            I work across {coverage.length} districts and {coverageTotal} sub-districts around
            San Kamphaeng, including all of Mueang Chiang Mai. Every area I cover is charged
            at the same rate, with no travel surcharge.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta="en-area-line">
              <IconLine className="h-5 w-5" />
              Check my area on LINE
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta="en-area-call">
              <IconPhone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </section>
      </div>

      <section className="section pt-4" lang="en">
        <div className="wrap max-w-4xl">
          <h2 className="h2">Districts covered</h2>
          <div className="mt-7 space-y-4">
            {coverage.map((c) => (
              <div key={c.amphoe} className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold">{amphoeEn[c.amphoe] ?? c.amphoe}</h3>
                  <span className="text-sm font-semibold text-brand-700">
                    {c.tambons.length} sub-district{c.tambons.length === 1 ? "" : "s"}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-soft">
                  <span className="font-semibold text-ink">Sub-districts covered:</span>{" "}
                  {c.tambons.join(" · ")}
                </p>
                {"all" in c && c.all && (
                  <p className="mt-2 text-sm leading-7 text-ink-soft">
                    I cover every sub-district in this district.
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-soft">
            Match the Thai sub-district names against your address, or show one to a driver. If your address is not on the list, message me — I will
            tell you what is possible and what the travel cost would be.
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap">
          <h2 className="h2">Zone pages in Thai</h2>
          <p className="lead mt-3 max-w-2xl">
            Send a zone link to a Thai-speaking landlord, agent or condo office —
            each one carries the local detail in Thai.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/area/${a.slug}`}
                  hrefLang="th"
                  className="card flex items-center justify-between gap-3 px-5 py-4 transition-all hover:shadow-lift"
                >
                  <span className="text-sm font-semibold">{a.name}</span>
                </Link>
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
            <Link href="/en/pricing" className="btn-ghost">
              See prices
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
