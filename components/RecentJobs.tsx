import Image from "next/image";
import Link from "next/link";
import { workCases } from "@/lib/work-cases";

/**
 * แถบ "งานล่าสุดจากหน้างานจริง" สำหรับหน้าภาษาอังกฤษ/จีน (24 ก.ย. 2569)
 * ดึงเคสจาก lib/work-cases ตาม serviceSlug ที่ส่งมา เฉพาะเคสที่มีวันจริง เรียงใหม่สุดก่อน
 * การ์ดโชว์รูป "ก่อนทำ" ใบแรกคู่กับ "หลังทำ" ใบสุดท้าย รายงานตัวเต็มเป็นภาษาไทย (ลิงก์ hrefLang="th")
 */
const serviceLabel: Record<"en" | "zh-CN", Record<string, string>> = {
  en: { "lang-air": "Aircon cleaning", "som-air": "Aircon repair", "tid-tang-air": "Installation", "yai-air": "Relocation", "lang-washing-machine": "Washing machine" },
  "zh-CN": { "lang-air": "空调清洗", "som-air": "空调维修", "tid-tang-air": "空调安装", "yai-air": "空调移机", "lang-washing-machine": "洗衣机清洗" },
};

export function RecentJobs({ lang, slugs, eyebrow, heading, lead, note, limit = 6, tone = "white" }: {
  lang: "en" | "zh-CN";
  slugs: string[];
  eyebrow: string;
  heading: string;
  lead: string;
  /** ข้อความใต้การ์ด เช่น "Before and after · report in Thai" */
  note: string;
  limit?: number;
  tone?: "white" | "sand";
}) {
  const jobs = workCases.filter((c) => slugs.includes(c.serviceSlug) && c.date).sort((a, b) => b.date!.localeCompare(a.date!)).slice(0, limit);
  if (jobs.length === 0) return null;
  const locale = lang === "en" ? "en-GB" : "zh-CN";
  return (
    <section className={`section ${tone === "sand" ? "bg-sand" : ""}`} lang={lang}>
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2 mt-4">{heading}</h2>
        <p className="lead mt-3 max-w-2xl">{lead}</p>
        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((c) => {
            const before = c.images.find((i) => i.phase === "ก่อนทำ") ?? c.images[0];
            const after = [...c.images].reverse().find((i) => i.phase === "หลังทำ") ?? c.images[c.images.length - 1];
            return (
              <li key={c.slug}>
                <Link href={`/case-study/${c.slug}`} hrefLang="th" className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
                  <div className="grid grid-cols-2 gap-0.5 bg-slate-200">
                    <Image src={before.src} alt={before.alt} width={540} height={540} loading="lazy" sizes="(max-width: 640px) 50vw, 17vw" className="aspect-square w-full object-cover" />
                    <Image src={after.src} alt={after.alt} width={540} height={540} loading="lazy" sizes="(max-width: 640px) 50vw, 17vw" className="aspect-square w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-brand-600">{new Date(c.date!).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" })} · {serviceLabel[lang][c.serviceSlug] ?? c.service}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{note}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
