import Image from "next/image";
import Link from "next/link";
import type { Block } from "@/lib/content-types";
import { site } from "@/lib/site";
import { IconPhone, IconLine, IconCheck, IconShield, IconClock, IconSnow } from "./Icons";

const toneStyle = {
  info: { box: "border-brand-200 bg-brand-50", icon: "text-brand-600", Icon: IconSnow },
  // สีในชุดนี้ถูกใช้กับ <p> หัวกล่องซึ่งเป็น "ข้อความ" ไม่ใช่แค่ไอคอน
  // เกณฑ์จึงเป็น 4.5:1 ของตัวอักษร ไม่ใช่ 3:1 ของกราฟิก (วัดใหม่ 19 ส.ค. 2569)
  //   tip    text-mint      บน mint/8    3.40:1 ตก -> mint-deep 4.97:1
  //   warn   text-amber-600 บน amber-50  3.07:1 ตก -> amber-700 4.84:1
  //   danger text-red-600   บน red-50    4.36:1 ตก -> red-700   5.87:1
  // info (brand-600 บน brand-50) ได้ 7.17:1 อยู่แล้ว ไม่ต้องแก้
  tip: { box: "border-mint/30 bg-mint/8", icon: "text-mint-deep", Icon: IconCheck },
  warn: { box: "border-amber-300 bg-amber-50", icon: "text-amber-700", Icon: IconClock },
  danger: { box: "border-red-300 bg-red-50", icon: "text-red-700", Icon: IconShield },
} as const;

function slugifyHeading(text: string, i: number) {
  return `h-${i}-${text.replace(/[^฀-๿a-zA-Z0-9]+/g, "-").slice(0, 40)}`;
}

export function headingsOf(blocks: Block[]) {
  return blocks
    .map((b, i) => (b.type === "h2" ? { id: b.id ?? slugifyHeading(b.text, i), text: b.text } : null))
    .filter((x): x is { id: string; text: string } => x !== null);
}

export default function ArticleBody({
  blocks,
  lineUrl = site.lineUrl,
  lineId = site.lineId,
}: {
  blocks: Block[];
  lineUrl?: string;
  lineId?: string;
}) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={b.id ?? slugifyHeading(b.text, i)}
                className="scroll-mt-28 pt-4 text-xl font-bold sm:text-2xl"
              >
                {b.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={i} className="pt-2 text-lg font-bold sm:text-xl">
                {b.text}
              </h3>
            );

          case "p":
            return (
              <p key={i} className="text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">
                {b.text}
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    <span className="text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">{it}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {b.items.map((it, n) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
                      {n + 1}
                    </span>
                    <span className="text-[15px] leading-8 text-ink-soft sm:text-base sm:leading-9">{it}</span>
                  </li>
                ))}
              </ol>
            );

          case "steps":
            return (
              <ol key={i} className="relative space-y-6 border-l-2 border-brand-100 pl-8">
                {b.items.map((s, n) => (
                  <li key={s.title} className="relative">
                    <span className="absolute -left-[2.4rem] grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white ring-4 ring-white">
                      {n + 1}
                    </span>
                    <h3 className="text-base font-bold sm:text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-8 text-ink-soft">{s.detail}</p>
                  </li>
                ))}
              </ol>
            );

          case "callout": {
            const t = toneStyle[b.tone];
            return (
              <aside key={i} className={`rounded-2xl border-2 p-5 sm:p-6 ${t.box}`}>
                <p className={`flex items-center gap-2.5 font-bold ${t.icon}`}>
                  <t.Icon className="h-5 w-5 shrink-0" />
                  {b.title}
                </p>
                <p className="mt-2.5 text-[15px] leading-8 text-ink-soft">{b.text}</p>
              </aside>
            );
          }

          case "table":
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
                {/* มือถือ: แถวละการ์ด มีป้ายหัวคอลัมน์กำกับทุกค่า อ่านครบโดยไม่ต้องปัดข้าง */}
                <ul className="divide-y divide-slate-100 bg-white sm:hidden">
                  {b.rows.map((r, n) => (
                    <li key={n} className="px-4 py-3.5">
                      <span className="block text-xs text-ink-soft">{b.head[0]}</span>
                      <span className="mt-0.5 block text-[15px] leading-7 font-medium text-ink">{r[0]}</span>
                      <dl className="mt-2 space-y-1.5">
                        {r.slice(1).map((c, m) => (
                          <div key={m}>
                            <dt className="text-xs text-ink-soft">{b.head[m + 1]}</dt>
                            <dd className="text-[15px] leading-7 text-ink-soft">{c}</dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  ))}
                </ul>

                <div className="hidden overflow-x-auto sm:block">
                <table className="w-full sm:min-w-[32rem] border-collapse text-left">
                  <caption className="sr-only">{b.caption}</caption>
                  <thead>
                    <tr className="bg-slate-50">
                      {b.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3.5 text-sm font-bold sm:px-5">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {b.rows.map((r, n) => (
                      <tr key={n}>
                        {r.map((c, m) => (
                          <td
                            key={m}
                            className={`px-4 py-3.5 text-[15px] leading-7 sm:px-5 ${
                              m === 0 ? "font-medium text-ink" : "text-ink-soft"
                            }`}
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            );

          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-brand-300 bg-sand py-4 pl-5 pr-4 italic">
                <p className="text-[15px] leading-8 text-ink sm:text-base">{b.text}</p>
                {b.cite && <footer className="mt-2 text-sm not-italic text-ink-soft">— {b.cite}</footer>}
              </blockquote>
            );

          case "sources":
            return (
              <aside key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <h2 className="text-lg font-bold">แหล่งอ้างอิงทางการ</h2>
                <ol className="mt-4 space-y-3">
                  {b.items.map((source) => (
                    <li key={source.url} className="text-[15px] leading-7 text-ink-soft">
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 hover:underline">
                        {source.title}
                      </a>
                      <span> — {source.publisher}</span>
                      {source.note && <span className="block text-sm">{source.note}</span>}
                    </li>
                  ))}
                </ol>
              </aside>
            );

          case "image":
            return (
              <figure key={i}>
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={900}
                  height={675}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="w-full rounded-2xl object-cover ring-1 ring-slate-200"
                />
                {b.caption && (
                  <figcaption className="mt-2.5 text-center text-sm text-ink-soft">{b.caption}</figcaption>
                )}
              </figure>
            );

          case "cta":
            return (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-600 p-6 sm:p-7">
                <p className="text-[15px] leading-8 font-semibold text-white sm:text-base">{b.text}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a href={`tel:${site.phoneTel}`} className="btn-call" data-cta="article-call">
                    <IconPhone className="h-5 w-5" />
                    โทร {site.phone}
                  </a>
                  <a href={lineUrl} target="_blank" rel="noopener" className="btn-line" data-cta="article-line">
                    <IconLine className="h-5 w-5" />
                    LINE {lineId}
                  </a>
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}

export function TableOfContents({ blocks }: { blocks: Block[] }) {
  const heads = headingsOf(blocks);
  if (heads.length < 3) return null;
  return (
    <nav aria-label="สารบัญ" className="card bg-sand p-5 sm:p-6">
      <p className="font-bold">ในบทความนี้</p>
      <ol className="mt-3 space-y-2">
        {heads.map((h, i) => (
          <li key={h.id} className="flex gap-2.5 text-[15px] leading-7">
            <span className="shrink-0 font-semibold text-brand-500">{i + 1}.</span>
            <Link href={`#${h.id}`} className="text-ink-soft hover:text-brand-700 hover:underline">
              {h.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
