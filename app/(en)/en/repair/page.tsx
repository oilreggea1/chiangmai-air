import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, heroPhotos, p, coverage } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { IconPhone, IconLine, IconCheck, IconChevron, IconWrench, IconShield, IconClock, IconPin } from "@/components/Icons";
import { RecentJobs } from "@/components/RecentJobs";

/**
 * หน้าซ่อมแอร์ภาษาอังกฤษ (24 ก.ย. 2569)
 *
 * เหตุผลที่ทำหน้านี้: Search Console 28 วันบอกว่าหน้า /en ติดคำ
 * "air conditioner repair" "hvac repair near me" "aircon repair near me" อยู่แล้ว
 * แต่ไม่มีคลิก เพราะผู้ค้นไม่รู้ว่าเป็นร้านในเชียงใหม่ และไม่มีหน้าซ่อมโดยเฉพาะให้ลง
 * หน้านี้จึงตอบคำว่า repair ตรง ๆ พร้อมบอกพื้นที่ตั้งแต่บรรทัดแรก
 * ราคาดึงจาก p เท่านั้น ห้ามพิมพ์ตัวเลขซ้ำ · เนื้อหาแปลจาก /service/som-air ห้ามรับปากเกินฝั่งไทย
 */
const title = "Air Conditioner Repair in Chiang Mai | Pro Fresh Care";
const description =
  `AC repair in Chiang Mai by Arm, a local technician. Diagnostic ${p.repair.diagnostic} THB, refunded if you go ahead with the repair. Gauges and current readings shown to you before any quote. Mon-Sat 8am-6pm.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "air conditioner repair Chiang Mai", "AC repair Chiang Mai", "aircon repair Chiang Mai",
    "hvac repair Chiang Mai", "aircon repair near me Chiang Mai", "air conditioner not cooling Chiang Mai",
    "aircon water leaking Chiang Mai", "aircon gas refill Chiang Mai",
  ],
  alternates: {
    canonical: "/en/repair",
    languages: { "th-TH": "/service/som-air", "en-US": "/en/repair", "x-default": "/service/som-air" },
  },
  ...share({ title, description, path: `/en/repair`, locale: "en_US", image: heroPhotos.en }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "English", path: "/en" },
  { name: "Repair", path: "/en/repair" },
];

const symptoms = [
  {
    t: "Blowing air but not cold",
    d: "The most common call I get. It can be a dirty coil, a refrigerant leak, a failed capacitor or a compressor that is no longer starting. These are very different repairs at very different prices, so I measure before I quote rather than guessing from the symptom.",
  },
  {
    t: "Water dripping from the indoor unit",
    d: "Usually the drain is blocked by the sludge that builds up in the tray, and the water backs up over the edge. Sometimes the unit is simply not level. Both are fixable without new parts, so be careful with anyone who quotes a part replacement before looking.",
  },
  {
    t: "Unit runs then stops by itself",
    d: "Often a protection cut-out doing its job: restricted airflow, an overheating outdoor unit, or a control board fault. I check the current draw first, because that tells me whether the machine is straining or the control side is cutting it.",
  },
  {
    t: "Noise or vibration that is new",
    d: "A rattle is usually a loose panel or a fan blade catching. A deeper grinding sound from the outdoor unit is a different matter and needs looking at soon, because running it that way can turn a small repair into a compressor replacement.",
  },
  {
    t: "Smell when the air comes on",
    d: "That smell almost always comes from the drain tray and the blower wheel rather than the filter. A proper clean usually solves it, and I will tell you if that is all it needs instead of selling you a repair.",
  },
  {
    t: "Error code on the display or remote",
    d: "Codes narrow things down but they do not name the part. I read the code, then verify it with actual measurements before ordering anything, because the same code can come from several causes.",
  },
];

const how = [
  { t: "Tell me what it is doing", d: "Send a message on LINE with the brand, roughly how old it is, and what you are seeing or hearing. A short video of the sound helps more than a description." },
  { t: "I measure on site", d: `I check refrigerant pressure and current draw and show you the readings. The diagnostic is ${p.repair.diagnostic} THB and it comes off the bill if you go ahead with the repair.` },
  { t: "You get the price before I start", d: "Parts and labour together, as one number. If something else turns up while I am working, I stop and ask you before continuing." },
  { t: "I tell you when it is not worth it", d: "If the repair costs more than about half the price of a new unit, I say so and lay out your options. It is your decision, not mine." },
];

const faqs = [
  {
    q: "Do you come out the same day?",
    a: "Usually within 24 hours, and the same day if a slot is free. February to April is burning season and demand is high across the whole province, so booking a few days ahead is safer then.",
  },
  {
    q: "How much is a call-out?",
    a: `The diagnostic is ${p.repair.diagnostic} THB and it is refunded against the repair if you decide to go ahead. There is no separate travel fee anywhere in my service area.`,
  },
  {
    q: "My aircon needs gas every year. Is that normal?",
    a: "No. A sealed system does not lose refrigerant on its own, so needing a top-up every year means there is a leak somewhere. I measure the pressure and look for the leak before adding anything, because topping it up without finding the leak just means paying for gas again next year.",
  },
  {
    q: "How much is refrigerant?",
    a: `R32 and R410A are ${p.repair.refrigerantPerLb} THB per pound, charged by what actually goes in. I measure in front of you first, and if the system is not low I will tell you and not add any.`,
  },
  {
    q: "Do you speak English?",
    a: "Written English on LINE works best. I can follow a conversation on site well enough for the work, and photos and readings close the gap for anything technical.",
  },
  {
    q: "Is there a warranty on the repair?",
    a: "Yes. If the same fault comes back I return and look at it again. I can also issue a receipt in the company name, Cher Solutions Co., Ltd., if you need it for an expense claim.",
  },
  {
    q: "Do you repair washing machines too?",
    a: "No. For washing machines I only do the deep clean, where the drum comes out and every part is washed. I do not replace washing machine parts, and I will say so rather than take the job.",
  },
];

const includes = [
  "Refrigerant pressure measured and shown to you, not guessed from how cold the air feels",
  "Current draw checked on the compressor and the fan before any part is named",
  "Old parts handed to you with the reason they failed",
  "One price covering parts and labour, agreed before work starts",
  "A straight answer when a repair is not worth the money",
  "Receipt in the company name if you need one",
];

export default function EnRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <div className="bg-gradient-to-b from-brand-50 to-white" lang="en">
        <section className="wrap grid gap-10 pt-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
          <div>
            <p className="eyebrow">
              <IconWrench className="h-4 w-4" />
              Measured first, quoted second
            </p>
            <h1 className="mt-5 text-[clamp(2.05rem,1.35rem+2.6vw,3rem)] leading-[1.3] font-extrabold">
              Air conditioner repair in Chiang Mai
            </h1>
            <p className="lead mt-5">
              If you searched for aircon repair near you and landed here, I am based in San Kamphaeng
              on the east side of Chiang Mai and cover the city and the districts around it. I am Arm,
              the technician who actually does the work. I measure the system and show you the readings
              before I give you a price, and I will tell you when a repair is not worth paying for.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5 text-lg" data-cta="en-repair-line">
                <IconLine className="h-5 w-5" />
                Describe the fault on LINE
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5 text-lg" data-cta="en-repair-call">
                <IconPhone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              Diagnostic {p.repair.diagnostic} THB, refunded against the repair · R32 and R410A {p.repair.refrigerantPerLb} THB per pound · Mon–Sat 8:00–20:00, Sunday by advance booking
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
          <h2 className="h2">What is it doing?</h2>
          <p className="lead mt-3 max-w-2xl">
            The same symptom can come from several different faults, which is why I measure rather than
            quote from a description. Here is what each one usually means.
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((s) => (
              <div key={s.t} className="card p-6">
                <h3 className="font-bold leading-7">{s.t}</h3>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand" lang="en">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">How a repair goes</h2>
            <ol className="mt-7 space-y-5">
              {how.map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-bold">{s.t}</h3>
                    <p className="mt-1.5 text-[15px] leading-8 text-ink-soft">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="h2">What you get either way</h2>
            <ul className="mt-7 space-y-3.5">
              {includes.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-[15px] leading-8 text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <IconShield className="h-6 w-6 text-brand-600" />
                <p className="mt-3 text-sm leading-7 text-ink-soft">Repairs are backed up. If the same fault returns I come back and look at it again.</p>
              </div>
              <div className="card p-5">
                <IconClock className="h-6 w-6 text-brand-600" />
                <p className="mt-3 text-sm leading-7 text-ink-soft">Usually on site within 24 hours. Same day when a slot is free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentJobs
        lang="en"
        slugs={["som-air", "lang-air"]}
        eyebrow="Recent repair and service jobs"
        heading="What the work actually looks like"
        lead="Each report follows one machine from the first photo to the last, with the real date and district. The write-ups are in Thai, but the photos show the condition before and after."
        note="Before and after · report in Thai"
      />

      <section className="section bg-sand" lang="en">
        <div className="wrap max-w-3xl">
          <h2 className="h2">Where I work</h2>
          <p className="lead mt-3">
            Based in San Kamphaeng, covering {coverage.length} districts around Chiang Mai. Mueang Chiang Mai,
            Hang Dong and San Sai are covered in full, including Nimman, the old city, Santitham and the Mae Jo area.
            The price is the same everywhere I cover, with no travel surcharge.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/en/areas" className="btn-ghost">
              <IconPin className="h-4 w-4" />
              See the full area list
            </Link>
            <Link href="/en/pricing" className="btn-ghost">
              Prices for every service
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
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
            <Link href="/en/installation" className="btn-ghost">
              Installation and relocation
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
