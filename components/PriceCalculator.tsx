"use client";

import { useMemo, useState } from "react";
import { IconLine } from "./Icons";

/**
 * เครื่องคิดค่าบริการล่วงหน้า (29 ก.ย. 2569) — ส่วนที่ทำงานในเบราว์เซอร์
 *
 * รับข้อมูลราคาเป็น props จาก lib/calc-rows.ts ซึ่งดึงจาก `p` ใน lib/site.ts
 * ห้าม import lib/site.ts ในไฟล์นี้ เพราะไฟล์นั้นใหญ่มาก (รวมคลังรูป) จะถูกส่งไปเบราว์เซอร์ทั้งก้อน
 */
export type CalcRow = {
  key: string;
  label: string;
  hint: string;
  group: "air" | "washer";
  unitLo: number;
  unitHi: number;
  /** อัตราหลายเครื่อง: เมื่อจำนวนถึง bulkMin ใช้ bulkUnit ทุกเครื่อง */
  bulkMin?: number;
  bulkUnit?: number;
  from?: boolean;
};

const fmt = (n: number) => n.toLocaleString("en-US");
const lineUrl = (id: string, msg: string) =>
  `https://line.me/R/oaMessage/${encodeURIComponent(id)}/?${encodeURIComponent(msg)}`;

export function PriceCalculator({ rows, lineAir, lineWasher }: { rows: CalcRow[]; lineAir: string; lineWasher: string }) {
  const [qty, setQty] = useState<Record<string, number>>({});
  const step = (k: string, d: number) => setQty((q) => ({ ...q, [k]: Math.max(0, Math.min(50, (q[k] ?? 0) + d)) }));

  const summary = useMemo(() => {
    let lo = 0, hi = 0, from = false, units = 0;
    const lines: string[] = [];
    for (const r of rows) {
      const q = qty[r.key] ?? 0;
      if (!q) continue;
      const bulk = r.bulkMin && r.bulkUnit && q >= r.bulkMin;
      const uLo = bulk ? r.bulkUnit! : r.unitLo;
      const uHi = bulk ? r.bulkUnit! : r.unitHi;
      lo += uLo * q; hi += uHi * q; units += q;
      if (r.from) from = true;
      const money = uLo === uHi ? `${fmt(uLo * q)} บาท` : `${fmt(uLo * q)}–${fmt(uHi * q)} บาท`;
      lines.push(`- ${r.label} ${q} เครื่อง ≈ ${r.from ? "เริ่ม " : ""}${money}`);
    }
    return { lo, hi, from, units, lines };
  }, [qty, rows]);

  const washerOnly = summary.units > 0 && rows.every((r) => r.group === "washer" || !(qty[r.key] ?? 0));
  const total = summary.lo === summary.hi ? `${fmt(summary.lo)} บาท` : `${fmt(summary.lo)}–${fmt(summary.hi)} บาท`;
  const message =
    `สอบถามคิวและยืนยันราคา\n${summary.lines.join("\n")}\nยอดประมาณ ${summary.from ? "เริ่ม " : ""}${total}\n` +
    "วันที่สะดวก:\nพื้นที่ / หมู่บ้าน:";

  return (
    <div className="card p-5 sm:p-7">
      <h3 className="text-lg leading-8 font-bold">คิดค่าบริการล่วงหน้า</h3>
      <p className="mt-1.5 text-[15px] leading-7 text-ink-soft">
        เลือกชนิดเครื่องและจำนวน ยอดรวมคิดอัตราหลายเครื่องให้อัตโนมัติ ไม่มีค่าเดินทางเพิ่มในพื้นที่บริการ
      </p>

      <ul className="mt-5 divide-y divide-slate-100">
        {rows.map((r) => {
          const q = qty[r.key] ?? 0;
          return (
            <li key={r.key} className="flex flex-wrap items-center justify-between gap-3 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink">{r.label}</p>
                <p className="text-sm leading-6 text-ink-soft">{r.hint}</p>
              </div>
              <div className="flex items-center gap-2" role="group" aria-label={`จำนวน${r.label}`}>
                <button type="button" onClick={() => step(r.key, -1)} className="h-10 w-10 rounded-xl border border-slate-200 text-lg font-bold text-ink hover:bg-slate-50" aria-label="ลดจำนวน">−</button>
                <span className="w-8 text-center text-lg font-bold tabular-nums" aria-live="polite">{q}</span>
                <button type="button" onClick={() => step(r.key, 1)} className="h-10 w-10 rounded-xl border border-slate-200 text-lg font-bold text-ink hover:bg-slate-50" aria-label="เพิ่มจำนวน">+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 rounded-2xl bg-brand-50 p-5">
        {summary.units === 0 ? (
          <p className="text-[15px] leading-7 text-ink-soft">เลือกจำนวนเครื่องด้านบนเพื่อดูยอดรวม</p>
        ) : (
          <>
            <p className="text-sm font-semibold text-brand-700">ยอดประมาณ {summary.units} เครื่อง</p>
            <p className="mt-1 text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] leading-tight font-extrabold text-ink">
              {summary.from ? "เริ่ม " : ""}{total}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              {summary.from || summary.lo !== summary.hi
                ? "บางรายการเป็นราคาเริ่มต้นหรือขึ้นอยู่กับขนาดเครื่อง ผมแจ้งยอดที่แน่นอนให้ทราบก่อนเริ่มงานทุกครั้ง"
                : "เป็นราคาที่ชำระจริงในเวลาทำการ ผมยืนยันยอดอีกครั้งก่อนเริ่มงาน"}{" "}
              งานนอกเวลาทำการมีค่าบริการเพิ่มเติม
            </p>
            <a
              href={lineUrl(washerOnly ? lineWasher : lineAir, message)}
              target="_blank"
              rel="noopener"
              className="btn-line mt-4 w-full px-5 py-3.5 sm:w-auto"
              data-cta={`calc-line-${washerOnly ? "washer" : "air"}`}
            >
              <IconLine className="h-5 w-5" />
              ส่งรายการนี้ทาง LINE เพื่อจองคิว
            </a>
          </>
        )}
      </div>
    </div>
  );
}
