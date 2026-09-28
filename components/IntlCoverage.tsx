import { coverage } from "@/lib/site";
import { type Lang, amphoeName, tambonRoman } from "@/lib/intl";

/**
 * เขตบริการสำหรับหน้าอังกฤษ/จีน แยกกลุ่มตามอำเภอ (29 ก.ย. 2569) ข้อมูลเดียวกับ coverage ของหน้าไทย
 * ชื่อตำบลเป็นอักษรโรมัน withThai = แสดงชื่อไทยตัวเล็กคู่กัน ไว้เทียบกับที่อยู่หรือโชว์คนขับรถ
 * ไม่ลิงก์ไปหน้าโซนภาษาไทย คนอ่านอังกฤษ/จีนกดแล้วจะตกไปหน้าไทยโดยไม่รู้ตัว
 */
export function IntlCoverage({ lang, withThai = false }: { lang: Lang; withThai?: boolean }) {
  const en = lang === "en";
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {coverage.map((c) => (
        <div key={c.amphoe} id={c.amphoe.replace("อ.", "d-")} className="card p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-[15px] font-bold text-ink">{amphoeName[lang][c.amphoe] ?? c.amphoe}</h3>
            <span className="text-xs font-semibold text-brand-700">
              {"all" in c && c.all
                ? en ? "every sub-district" : "全部乡"
                : en ? `${c.tambons.length} sub-district${(c.tambons.length as number) === 1 ? "" : "s"}` : `${c.tambons.length} 个乡`}
            </span>
          </div>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {c.tambons.map((t) => (
              <li key={t} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[13px] leading-5 text-ink-soft">
                {tambonRoman[t] ?? t}
                {withThai && <span className="ml-1 text-[11px] text-ink-soft/70" lang="th">{t}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
