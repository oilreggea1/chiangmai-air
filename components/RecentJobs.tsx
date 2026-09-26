import Image from "next/image";
import Link from "next/link";
import { jobs } from "@/lib/jobs";

/**
 * แถบงานล่าสุดสำหรับหน้าภาษาอังกฤษและจีน
 *
 * **แก้ 26 ก.ย. 2569** เดิมโชว์เป็นคู่ก่อน–หลังชิ้นต่อชิ้น
 * เจ้าของตรวจเองแล้วพบว่าจับคู่ผิดเยอะ จึงเลิกจับคู่ทั้งหมด
 * ตอนนี้โชว์เป็นสองแถวต่อหนึ่งงาน แถวบนก่อนล้าง แถวล่างหลังล้าง
 * ไม่ได้อ้างว่ารูปไหนคู่กับรูปไหน จึงไม่มีโอกาสผิด
 */
const L = {
  en: { before: "Before", after: "After", note: "Same job, report in Thai", photos: "photos" },
  "zh-CN": { before: "清洗前", after: "清洗后", note: "同一单工作，泰文记录", photos: "张" },
} as const;

export function RecentJobs({
  lang,
  slugs,
  eyebrow,
  heading,
  lead,
  limit = 3,
  tone = "white",
}: {
  lang: "en" | "zh-CN";
  slugs: string[];
  eyebrow: string;
  heading: string;
  lead: string;
  /** ไม่ได้ใช้แล้ว เก็บไว้ให้หน้าเดิมที่ส่งมาไม่พัง */
  note?: string;
  limit?: number;
  tone?: "white" | "sand";
}) {
  const list = jobs.filter((j) => slugs.includes(j.serviceSlug)).slice(-limit).reverse();
  if (list.length === 0) return null;
  const t = L[lang];
  const locale = lang === "en" ? "en-GB" : "zh-CN";

  return (
    <section className={`section ${tone === "sand" ? "bg-sand" : ""}`} lang={lang}>
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2 mt-4">{heading}</h2>
        <p className="lead mt-3 max-w-2xl">{lead}</p>

        <div className="mt-9 space-y-6">
          {list.map((j) => (
            <article key={j.id} className="card p-5 sm:p-7">
              <p className="text-xs font-bold text-accent">
                {new Date(j.date).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" })} · {t.note}
              </p>
              {(
                [
                  { label: t.before, photos: j.before, dark: true },
                  { label: t.after, photos: j.after, dark: false },
                ] as const
              ).map((row) => (
                <div key={row.label} className="mt-5">
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <span
                      className={
                        row.dark
                          ? "inline-block rounded-lg bg-brand-600 px-2.5 py-1 text-xs text-white"
                          : "inline-block rounded-lg bg-gradient-to-b from-ice to-accent px-2.5 py-1 text-xs text-[#04121F]"
                      }
                    >
                      {row.label}
                    </span>
                    <span className="text-ink-soft">
                      {row.photos.length} {t.photos}
                    </span>
                  </p>
                  <ul className="mt-3 grid grid-cols-4 gap-2">
                    {row.photos.slice(0, 4).map((p) => (
                      <li key={p.src} className="overflow-hidden rounded-xl bg-slate-100">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          width={480}
                          height={480}
                          loading="lazy"
                          sizes="(max-width: 640px) 25vw, 14vw"
                          className="aspect-square w-full object-cover"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href="/kon-lang"
                hrefLang="th"
                className="mt-5 inline-flex text-sm font-semibold text-brand-700 hover:underline"
              >
                {lang === "en" ? "See all jobs" : "查看全部案例"}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
