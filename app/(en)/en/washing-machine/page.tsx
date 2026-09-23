import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos, p } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconWasher, IconClock } from "@/components/Icons";

/**
 * หน้าล้างเครื่องซักผ้าภาษาอังกฤษ (24 ก.ย. 2569)
 * เนื้อหาแปลจากบริการ lang-washing-machine ใน lib/site.ts ราคาจาก p.washer เท่านั้น
 * จองผ่าน LINE บัญชีงานเครื่องซักผ้า (site.lineUrl2) เหมือนหน้าไทย
 * ภาพก่อน–หลังใช้เฉพาะคู่ที่ยืนยันแล้วว่าเป็นเครื่องเดียวกัน (lib/work-cases.ts) ไม่มีมือในภาพ
 */
const title = "Washing Machine Drum Cleaning in Chiang Mai | Pro Fresh Care";
const description =
  `Washing machine deep clean in Chiang Mai: the drum comes out and every part is washed. Top loaders from ${p.washer.topLoad} THB, front loaders from ${p.washer.frontLoad} THB, about 3 hours, 30-day warranty.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "washing machine cleaning Chiang Mai", "washing machine drum clean Chiang Mai", "washer deep clean Chiang Mai",
    "front loader mould cleaning Chiang Mai", "washing machine smells Chiang Mai",
  ],
  alternates: {
    canonical: "/en/washing-machine",
    languages: { "th-TH": "/service/lang-washing-machine", "en-US": "/en/washing-machine", "x-default": "/service/lang-washing-machine" },
  },
  ...share({ title, description, path: `/en/washing-machine`, locale: "en_US", image: heroPhotos.enWasher }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
  { name: "Washing machines", path: "/en/washing-machine" },
];

const scope = [
  "Top loaders and front loaders, priced separately because they come apart differently",
  "Drum and every removable part taken out and washed individually, inside and out, then reassembled",
  "Cleaning agents matched to the material of the drum, so stainless and plastic parts are not damaged",
  "Drain hose and outlet cleaned and checked for blockages, the usual cause of slow draining and smells coming back",
  "Machine tested before I open it and again after reassembly, and any existing fault pointed out to you first",
  "30-day warranty on the work",
];

const steps = [
  { t: "Test before opening", d: "I run the machine and check its condition first. If a part is already worn or broken, you hear about it before I start, not after." },
  { t: "Drum and parts out", d: "The build-up sits on the outside of the inner drum and inside the outer tub, where no cleaning tablet reaches. The only way to get at it is to take the drum out." },
  { t: "Drain hose and outlet", d: "Cleaned and checked for blockages, because that is where slow draining and the smell that comes back start." },
  { t: "Reassemble, level, test", d: "Everything goes back, the machine is levelled, and I run a cycle so you can check it before I leave." },
];

const faqs = [
  {
    q: "Do you really take the drum out?",
    a: "Yes. The drum and the parts around it come out and are washed separately, then the machine is reassembled, levelled and run in front of you. The photos further down this page are from those jobs.",
  },
  {
    q: "Why is a front loader more expensive than a top loader?",
    a: `They are built differently. A top loader has a vertical inner and outer drum that lift out. A front loader has a horizontal drum, a door seal and a pump filter, and getting to the outside of the drum takes more dismantling. Top loaders are ${p.washer.topLoad} THB up to 15 kg, ${p.washer.topLoadMid} THB for 15.1 to 19 kg and ${p.washer.topLoadBig} THB above that. Front loaders start at ${p.washer.frontLoad} THB, and I confirm the exact figure for large machines before I start.`,
  },
  {
    q: "How long does it take?",
    a: "About 3 hours per machine, because everything comes out, gets washed and goes back in with a test run at the end.",
  },
  {
    q: "How is this different from the drum-cleaning tablets I can buy?",
    a: "A tablet or liquid only reaches the inside surface of the inner drum. Most of the detergent residue and mould sits on the outside of that drum, in the gap between the inner and outer tub. That only gets clean when the drum comes out.",
  },
  {
    q: "I live in a condo with very little space. Can you still do it?",
    a: `Yes. If there is no room to dismantle and rinse the parts on site, I take the machine away, clean it and bring it back. That carries a surcharge of ${p.washer.offsiteSurcharge} THB, which I tell you about before we book.`,
  },
  {
    q: "The rubber door seal on my front loader has black mould. Will it come off?",
    a: "If the mould has gone into the rubber itself, it will not come back to new. Scrubbing hard enough to remove it tears the seal. I show you the real condition before I start so there are no surprises.",
  },
  {
    q: "What if something breaks while you are cleaning it?",
    a: "I test the machine before I take it apart, and anything already faulty is pointed out first. My work is the cleaning and the dismantling. If the machine has an underlying fault, I will tell you and suggest the brand's service centre.",
  },
];

const pairs = [
  {
    label: "Top loader, base of the inner drum",
    before: { src: "/work/wm-ba-drumbase-before.webp", alt: "Base of a top-load washing machine drum before cleaning, with brown deposits around the spindle and along the grooves" },
    after: { src: "/work/wm-ba-drumbase-after.webp", alt: "The same drum base after cleaning, the plastic and grooves clearly visible again" },
  },
  {
    label: "Front loader, outer tub",
    before: { src: "/work/wm-ba-fl-tub-before.webp", alt: "Outer tub of a front-load washing machine before cleaning, with brown scale in streaks along the wall and around the heater" },
    after: { src: "/work/wm-ba-fl-tub-after.webp", alt: "The same outer tub after cleaning, scale removed from the wall and around the heater" },
  },
];

export default function EnWashingMachinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="en">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconWasher className="h-4 w-4" />
              Drum out, every part washed, at your home
            </p>
            <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
              Washing machine deep clean in Chiang Mai
            </h1>
            <p className="lead mt-5">
              Detergent residue, softener and lint collect on the outside of the drum, where you cannot see them
              and a cleaning tablet cannot reach. Left long enough it turns into mould, and your clean laundry comes out
              smelling musty. I take the drum out and wash every part, then put it all back and test it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl2} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="en-washer-line">
                <IconLine className="h-5 w-5" />
                Book on LINE {site.lineId2}
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="en-washer-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              Top loaders from {p.washer.topLoad} THB · front loaders from {p.washer.frontLoad} THB · Mon–Sat 8:00–18:00
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-slate-200">
            <Image
              src={heroPhotos.enWasher.src}
              alt={heroPhotos.enWasher.alt}
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
          <h2 className="h2">Prices</h2>
          <p className="lead mt-3">By machine type and capacity. The capacity is printed on the lid or the door.</p>
          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-2 border-b border-slate-200 bg-brand-50 px-5 py-4 font-bold">
              <span>Machine</span><span>Price</span>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
              <span>Top loader, up to 15 kg</span><strong>{p.washer.topLoad} THB</strong>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
              <span>Top loader, 15.1 – 19 kg</span><strong>{p.washer.topLoadMid} THB</strong>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
              <span>Top loader, over 19 kg</span><strong>{p.washer.topLoadBig} THB</strong>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-100 px-5 py-4">
              <span>Front loader</span><strong>from {p.washer.frontLoad} THB</strong>
            </div>
            <div className="grid grid-cols-2 px-5 py-4">
              <span>Taken away and cleaned off-site, when there is no room to work at your place</span><strong>+{p.washer.offsiteSurcharge} THB</strong>
            </div>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-soft">
            <IconClock className="h-5 w-5 text-brand-600" />
            About 3 hours per machine · 30-day warranty on the work
          </p>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap">
          <h2 className="h2">Before and after, same machine</h2>
          <p className="lead mt-3 max-w-2xl">These pairs are from the same machine on the same day. The dirt is on the parts you never see.</p>
          <div className="mt-9 grid gap-8 lg:grid-cols-2">
            {pairs.map((pair) => (
              <figure key={pair.label} className="card overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <span className="absolute z-10 m-3 rounded-full bg-amber-700 px-3 py-1 text-xs font-bold text-white shadow">Before</span>
                    <Image src={pair.before.src} alt={pair.before.alt} width={720} height={540} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <div className="relative">
                    <span className="absolute z-10 m-3 rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white shadow">After</span>
                    <Image src={pair.after.src} alt={pair.after.alt} width={720} height={540} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                  </div>
                </div>
                <figcaption className="px-5 py-3 text-sm font-semibold">{pair.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" lang="en">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">What the job covers</h2>
            <ul className="mt-6 space-y-3.5">
              {scope.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h2">How it goes</h2>
            <ol className="mt-6 space-y-4">
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
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Questions people ask</h2>
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
            <Link href="/en" className="btn-ghost">Aircon services in English<IconChevron className="h-4 w-4" /></Link>
            <Link href="/service/lang-washing-machine" className="btn-ghost" hrefLang="th">หน้าภาษาไทย<IconChevron className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section pt-0" lang="en">
        <div className="wrap">
          <div className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-14 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Send a photo of your machine</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-brand-100">
              A photo of the machine and the capacity label is enough for a firm price. Washing machine bookings go through the second LINE account below.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={site.lineUrl2} target="_blank" rel="noopener" className="btn-line px-7 py-4 text-lg" data-cta="en-washer-band-line">
                <IconLine className="h-5 w-5" />
                LINE {site.lineId2}
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-7 py-4 text-lg">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
