import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { IconPhone, IconLine, IconChevron, IconStar, IconCheck } from "./Icons";

/** แถบ CTA ปิดท้ายทุกหน้า */
export function CtaBand({
  title = "ต้องการช่างแอร์ในเชียงใหม่",
  subtitle = "แจ้งอาการหรือรายละเอียดงานเข้ามาได้ ผมประเมินเบื้องต้นให้โดยไม่คิดค่าใช้จ่าย และแจ้งราคาให้ครบถ้วนก่อนเริ่มงานเสมอ",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-brand-100">{subtitle}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn-call px-7 py-4 text-lg" data-cta="band-call">
                <IconPhone className="h-5 w-5" />
                โทร {site.phone}
              </a>
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noopener"
                className="btn-line px-7 py-4 text-lg"
                data-cta="band-line"
              >
                <IconLine className="h-5 w-5" />
                LINE {site.lineId}
              </a>
            </div>
            <p className="mt-6 text-sm text-brand-200">
              {site.daysLabel} {site.hours} · เข้าหน้างานภายใน 24 ชั่วโมง
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="เส้นทางนำทาง" className="wrap pt-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
        {trail.map((t, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={t.path} className="flex items-center gap-1.5">
              {i > 0 && <IconChevron className="h-3.5 w-3.5 text-slate-300" />}
              {last ? (
                <span className="font-medium text-ink" aria-current="page">{t.name}</span>
              ) : (
                <Link href={t.path} className="hover:text-brand-700 hover:underline">{t.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function FaqList({
  items,
  title = "คำถามที่พบบ่อย",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="section bg-sand" id="faq">
      <div className="wrap max-w-3xl">
        <h2 className="h2 text-center">{title}</h2>
        <div className="mt-8 space-y-3">
          {items.map((f) => (
            <details key={f.q} className="card group px-5 py-4 open:shadow-lift sm:px-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold sm:text-lg">
                {f.q}
                <IconChevron className="mt-1 h-5 w-5 shrink-0 text-brand-500 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-[15px] leading-8 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewCard({
  name,
  location,
  rating,
  text,
}: {
  name: string;
  location: string;
  rating: number;
  text: string;
}) {
  return (
    <figure className="card flex h-full flex-col p-6">
      <div className="flex gap-0.5 text-amber-400" aria-label={`ให้คะแนน ${rating} จาก 5 ดาว`}>
        {Array.from({ length: rating }, (_, i) => (
          <IconStar key={i} className="h-5 w-5" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-8 text-ink">
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm">
        <span className="font-semibold text-ink">{name}</span>
        <span className="block text-ink-soft">{location}</span>
      </figcaption>
    </figure>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/12 text-mint">
            <IconCheck className="h-4 w-4" />
          </span>
          <span className="text-[15px] leading-8 text-ink-soft">{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ steps }: { steps: { title: string; detail: string }[] }) {
  return (
    <ol className="relative space-y-6 border-l-2 border-brand-100 pl-8">
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <span className="absolute -left-[2.4rem] grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white ring-4 ring-white">
            {i + 1}
          </span>
          <h3 className="text-base font-bold sm:text-lg">{s.title}</h3>
          <p className="mt-1.5 text-[15px] leading-8 text-ink-soft">{s.detail}</p>
        </li>
      ))}
    </ol>
  );
}

import type { CaseStudy } from "@/lib/site";

/**
 * เคสงานจริง — ภาพก่อน/หลังของเครื่องเดียวกัน พร้อมเล่าว่างานนี้ทำอะไรบ้าง
 * บังคับสัดส่วนภาพ 4:3 เท่ากันทั้งสองฝั่ง เพื่อให้เทียบกันได้ตรง ๆ
 */
export function CaseStudies({
  items,
  title,
  lead,
}: {
  items: CaseStudy[];
  title: string;
  lead: string;
}) {
  return (
    <section className="section bg-sand">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">เคสงานจริง</p>
          <h2 className="h2 mt-4">{title}</h2>
          <p className="lead mt-3">{lead}</p>
        </div>

        <div className="mt-10 space-y-10">
          {items.map((c, idx) => (
            <article key={c.slug} className="card overflow-hidden">
              <div className="border-b border-slate-200 bg-white px-5 py-5 sm:px-7">
                <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-brand-700">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-600 text-xs text-white">
                    {idx + 1}
                  </span>
                  {c.service}
                </p>
                <h3 className="mt-2.5 text-lg font-bold sm:text-xl">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-ink-soft">{c.context}</p>
              </div>

              <div className="grid gap-4 px-5 py-6 sm:grid-cols-2 sm:px-7">
                {([
                  { k: "ก่อนล้าง", img: c.before, bad: true },
                  { k: "หลังล้าง", img: c.after, bad: false },
                ] as const).map((col) => (
                  <figure key={col.k} className="m-0">
                    <div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200">
                      <Image
                        src={col.img.src}
                        alt={col.img.alt}
                        width={900}
                        height={900}
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, 45vw"
                        className="aspect-4/3 w-full object-cover"
                      />
                      <span
                        className={`absolute top-3 left-3 rounded-full px-3 py-1 text-sm font-bold text-white ${
                          col.bad ? "bg-accent" : "bg-mint"
                        }`}
                      >
                        {col.k}
                      </span>
                    </div>
                    <figcaption className="mt-2.5 text-sm leading-6 text-ink-soft">
                      {col.img.note}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="grid gap-6 border-t border-slate-200 bg-white px-5 py-6 sm:px-7 lg:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <p className="text-sm font-bold tracking-wide text-ink uppercase">
                    งานนี้ทำอะไรบ้าง
                  </p>
                  <ol className="mt-4 space-y-3">
                    {c.work.map((w, i) => (
                      <li key={w} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                          {i + 1}
                        </span>
                        <span className="text-[15px] leading-7 text-ink-soft">{w}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <dl className="grid grid-cols-2 gap-4 self-start rounded-xl bg-sand p-5 lg:grid-cols-1">
                  {c.facts.map((f) => (
                    <div key={f.label}>
                      <dt className="text-xs font-semibold tracking-wide text-ink-soft uppercase">
                        {f.label}
                      </dt>
                      <dd className="mt-1 text-[15px] font-bold text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
