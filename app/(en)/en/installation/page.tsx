import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos, p, btu } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconShield, IconInstall, IconMove } from "@/components/Icons";
import { IntlReels, intlReelSets, reelsByIds } from "@/components/ReelsShowcase";
import { RecentJobs } from "@/components/RecentJobs";

/**
 * หน้าติดตั้งแอร์ภาษาอังกฤษ (24 ก.ย. 2569)
 * เจ้าของแจ้งว่าลูกค้าต่างชาติติดต่อเข้ามามาก และกลุ่มนี้มักซื้อเครื่องจาก Lazada/Shopee มาเอง
 * ตัวเลขทุกตัวดึงจาก p / btu เท่านั้น เงื่อนไขประกัน (ซื้อกับเรา 1 ปี / เครื่องลูกค้า 6 เดือน) และท่อ 4 ม.
 * เป็นเงื่อนไขที่เจ้าของยืนยัน 30 ส.ค. 2569 ห้ามแต่งใหม่
 * รูปทุกใบเปิดดูแล้ว ไม่มีมือ/เล็บที่เห็นคราบ (กติกาเจ้าของ 24 ก.ย. 2569)
 */
const title = "Aircon Installation in Chiang Mai | Pro Fresh Care";
const description =
  `Air conditioner installation in Chiang Mai from ${p.install.small} THB, including the wall bracket, up to 4 m of piping and trunking. Units bought on Lazada, Shopee or in-store are welcome. Relocation ${p.install.relocate} THB.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "aircon installation Chiang Mai", "air conditioner installation Chiang Mai", "AC installation Chiang Mai",
    "install aircon bought on Lazada Chiang Mai", "aircon relocation Chiang Mai", "move air conditioner Chiang Mai",
  ],
  alternates: {
    canonical: "/en/installation",
    languages: { "th-TH": "/service/tid-tang-air", "en-US": "/en/installation", "zh-CN": "/zh/installation", "x-default": "/service/tid-tang-air" },
  },
  ...share({ title, description, path: `/en/installation`, locale: "en_US", image: heroPhotos.enInstall }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
  { name: "Installation", path: "/en/installation" },
];

const included = [
  "Wall bracket for the indoor unit and a stand or bracket for the outdoor unit",
  "Insulated refrigerant piping up to 4 m, plus the drain line",
  "Trunking to cover the pipe run, cut and fitted neatly along the wall",
  "Full vacuum of the line set before the refrigerant is released, on every job without exception",
  "Cooling test, current draw check and leak check before I hand over",
  "A walk-through of the remote and the basic care the unit needs",
];

const steps = [
  { t: "Survey first", d: "I look at where the indoor unit will sit, where the outdoor unit can go, how far the pipe has to run and what the electrical supply looks like. That is how I can give you a firm price up front rather than a surprise at the end." },
  { t: "Bracket and indoor unit", d: "The bracket goes into structure that can actually carry the weight, and the unit is levelled so condensate runs to the drain instead of dripping later." },
  { t: "Piping and drain", d: "Pipes are bent without kinks, insulated the whole way and covered with trunking. The drain line gets a proper fall." },
  { t: "Vacuum the system", d: "Air and moisture are pulled out of the line set until the gauge holds a proper vacuum. Moisture left in the system is the quiet reason compressors fail early, so I do not skip this." },
  { t: "Test and hand over", d: "I run the unit, measure the cooling and the current, check for leaks, then show you the remote and what to keep an eye on." },
];

const faqs = [
  {
    q: `What does the ${p.install.small} THB installation price include?`,
    a: `Labour, the wall bracket, insulated refrigerant piping and the drain line up to 4 m, and trunking over the same length. If your layout needs a longer pipe run I tell you the extra material cost before I start, never afterwards.`,
  },
  {
    q: "I bought my unit on Lazada, Shopee or TikTok Shop. Will you install it?",
    a: "Yes, and this is now a large share of the installations I do. Send me the model and the delivery date on LINE and I will book a slot around when it arrives. The installation price is the same as for a unit bought from me. The difference is the warranty on the installation work: 6 months when you supply the unit, 1 year when you buy it from me, because in that case I checked the unit myself from the start. The unit itself stays under the seller's or manufacturer's warranty either way.",
  },
  {
    q: "The online seller did not include a bracket or enough pipe. Is that a problem?",
    a: "No. Some online listings ship without a bracket or with a short pipe. The bracket and up to 4 m of pipe are already inside my price, so a missing bracket does not change what you pay.",
  },
  {
    q: "How many BTU do I need for my room?",
    a: `As a rule of thumb, a bedroom of 12 to 16 square metres needs ${btu.installSmall} BTU and a living room of 20 to 30 square metres needs 18,000 to 24,000 BTU. A room that takes the afternoon sun or has a lot of glass should go up a size. Send me the room size and which way it faces and I will work it out for you at no charge.`,
  },
  {
    q: "Can you supply the unit as well?",
    a: "Yes. I sell new units from the main brands and checked second-hand units, and I fit them myself. Unit prices depend on the model and the promotion running that month, so I quote per model on LINE. Buying and installing from one place means there is one person responsible if anything goes wrong, and the installation warranty is 1 year.",
  },
  {
    q: "How long does an installation take?",
    a: "A straightforward wall unit with a short pipe run is usually two to three hours. Longer runs, a difficult outdoor position or several units in one house take longer, and I tell you the expected time when I quote.",
  },
  {
    q: "Do you move existing units to a new house or a different room?",
    a: `Yes. Relocation is ${p.install.relocate} THB for removing the unit and installing it again in the new spot, including a fresh vacuum of the system. I pump the refrigerant back into the outdoor unit before disconnecting, so in most cases you do not pay for a recharge. Removal on its own, with no reinstallation, is ${p.install.removeOnly} THB.`,
  },
];

const photos = [
  { src: "/work/tid-tang-air-005.jpg", alt: "Technician in gloves holding the steel mounting plate against the wall to mark the position of a new indoor unit" },
  { src: "/work/tid-tang-air-003.jpg", alt: "Newly installed Hitachi wall unit on a plain wall with the pipe trunking running neatly out to the left" },
  { src: "/work/tid-tang-air-007.jpg", alt: "Cream-coloured trunking fitted along the top of a wall, covering the refrigerant pipe run from a new installation" },
];

export default function EnInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="en">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconInstall className="h-4 w-4" />
              New installation · relocation · units bought online
            </p>
            <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
              Aircon installation in Chiang Mai, from {p.install.small} THB all-in
            </h1>
            <p className="lead mt-5">
              The price covers the bracket, up to 4 m of piping and the trunking, and every
              system is vacuumed properly before the refrigerant goes in. Bring your own unit from
              Lazada, Shopee, TikTok Shop or a showroom, or buy one from me and get the longer warranty.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="en-install-line">
                <IconLine className="h-5 w-5" />
                Send the model on LINE
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="en-install-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              Written English on LINE works best · Mon–Sat 8:00–18:00
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={heroPhotos.enInstall.src}
              alt={heroPhotos.enInstall.alt}
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
          <h2 className="h2">Installation prices by unit size</h2>
          <p className="lead mt-3">One price per unit, and it already includes the parts most installers add on afterwards.</p>
          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-2 border-b border-slate-200 bg-brand-50 px-5 py-4 font-bold">
              <span>Unit size</span><span>Installation</span>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
              <span>{btu.installSmall} BTU</span><strong>{p.install.small} THB</strong>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
              <span>{btu.installLarge} BTU</span><strong>{p.install.large} THB</strong>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4" id="relocation">
              <span>Relocation: remove and reinstall in the new spot</span><strong>{p.install.relocate} THB</strong>
            </div>
            <div className="grid grid-cols-2 px-5 py-4">
              <span>Removal only, no reinstallation</span><strong>{p.install.removeOnly} THB</strong>
            </div>
          </div>
          <p className="mt-4 flex items-start gap-2.5 text-sm leading-7 text-ink-soft">
            <IconShield className="mt-1 h-5 w-5 shrink-0 text-mint" />
            Warranty on the installation work: 1 year when you buy the unit from me, 6 months when you supply your own unit.
            The unit itself is covered by the manufacturer or the seller.
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">What the price includes</h2>
            <ul className="mt-6 space-y-3.5">
              {included.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 sm:p-8">
            <p className="eyebrow">Bought your unit online?</p>
            <h2 className="mt-3 text-xl font-bold">Book the installation before it arrives</h2>
            <p className="mt-3 text-[15px] leading-8 text-ink-soft">
              Send me the model number and the delivery date and I will hold a slot for the day after it lands.
              Missing bracket, short pipe, no trunking in the box — none of that changes the price, because those parts are already in it.
            </p>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line mt-6" data-cta="en-install-online-line">
              <IconLine className="h-5 w-5" />
              LINE {site.lineId}
            </a>
          </div>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">How the installation goes</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((x, i) => (
              <li key={x.t} className="card flex items-start gap-4 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-700 text-base font-bold text-white">{i + 1}</span>
                <span>
                  <span className="block font-bold">{x.t}</span>
                  <span className="mt-1 block text-[15px] leading-8 text-ink-soft">{x.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <IntlReels
        lang="en"
        items={reelsByIds(intlReelSets.install)}
        eyebrow="Video from real installations"
        heading="See an installation from start to finish"
        lead="Ceiling cassettes, wall units and work at height, filmed on site in Chiang Mai."
        moreLabel="More videos on Facebook"
      />

      <section className="section" lang="en">
        <div className="wrap">
          <h2 className="h2">Recent installations</h2>
          <p className="lead mt-3 max-w-2xl">Straight trunking, level units, nothing left for you to tidy.</p>
          <ul className="mt-9 grid gap-5 sm:grid-cols-3">
            {photos.map((ph) => (
              <li key={ph.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <Image src={ph.src} alt={ph.alt} width={768} height={1024} loading="lazy" sizes="(max-width: 640px) 100vw, 33vw" className="h-72 w-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RecentJobs
        lang="en"
        slugs={["tid-tang-air", "yai-air"]}
        eyebrow="Recent installations and relocations"
        heading="From the box to the wall"
        lead="Real installation and relocation jobs from 2026, with the date and district. The write-ups are in Thai, but the photos show the wall before and the finished unit after."
        note="Before and after · report in Thai"
        tone="sand"
      />

      <section className="section" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Questions people ask before booking</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card group px-5 py-4 sm:px-6">
                <summary className="cursor-pointer list-none text-base font-semibold sm:text-lg">{f.q}</summary>
                <p className="mt-3 text-[15px] leading-8 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/en/pricing" className="btn-ghost">Full price list<IconChevron className="h-4 w-4" /></Link>
            <Link href="/en/about" className="btn-ghost">Who will come to your home<IconChevron className="h-4 w-4" /></Link>
            <Link href="/service/tid-tang-air" className="btn-ghost" hrefLang="th">หน้าภาษาไทย<IconChevron className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section pt-0" lang="en">
        <div className="wrap">
          <div className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-14 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Get an installation price today</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-brand-100">
              Send the model, the room size and a photo of the wall where the unit will go. I reply with a firm price and the earliest slot.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-7 py-4 text-lg" data-cta="en-install-band-line">
                <IconLine className="h-5 w-5" />
                LINE {site.lineId}
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-7 py-4 text-lg">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-brand-200">
              <IconMove className="h-4 w-4" />
              Relocations and removals booked the same way
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
