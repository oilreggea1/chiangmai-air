"use client";

import { useMemo, useState } from "react";
import { IconLine } from "./Icons";

/**
 * เครื่องคิดค่าบริการล่วงหน้า (29 ก.ย. 2569) — ส่วนที่ทำงานในเบราว์เซอร์
 *
 * รับข้อมูลราคาเป็น props จาก lib/calc-rows.ts ซึ่งดึงจาก `p` ใน lib/site.ts
 * ห้าม import lib/site.ts ในไฟล์นี้ เพราะไฟล์นั้นใหญ่มาก (รวมคลังรูป) จะถูกส่งไปเบราว์เซอร์ทั้งก้อน
 *
 * แยกแท็บแอร์/เครื่องซักผ้า และแถวละบรรทัดเดียว (29 ก.ย. 2569)
 * เดิมโชว์ 9 แถวพร้อมกัน ปุ่ม +/- ตกบรรทัดใหม่บนมือถือ เจ้าของบอกว่ายาวมาก
 * จำนวนที่เลือกไว้ในแท็บหนึ่งยังนับรวมในยอดเมื่อสลับไปอีกแท็บ
 */
/** แท็บตามประเภทงาน เจ้าของสั่งให้ระบุชัดว่าเป็นงานล้าง งานติดตั้ง หรืองานซ่อม (29 ก.ย. 2569) */
export type CalcGroup = "wash" | "install" | "repair" | "washer";
const TABS: { key: CalcGroup; label: string }[] = [
  { key: "wash", label: "ล้างแอร์" },
  { key: "install", label: "ติดตั้ง / ย้ายแอร์" },
  { key: "repair", label: "ซ่อมแอร์" },
  { key: "washer", label: "ล้างเครื่องซักผ้า" },
];

export type CalcRow = {
  key: string;
  label: string;
  hint: string;
  /** ชื่อสั้นที่โชว์ในแถว (แท็บบอกประเภทเครื่องอยู่แล้ว) ส่วน label เต็มใช้ในข้อความ LINE */
  short?: string;
  group: CalcGroup;
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
  const tabs = TABS.filter((t) => rows.some((r) => r.group === t.key));
  const [tab, setTab] = useState<CalcGroup>(rows[0]?.group ?? "wash");
  const countIn = (g: CalcGroup) => rows.filter((r) => r.group === g).reduce((n, r) => n + (qty[r.key] ?? 0), 0);
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
    `สอบถามคิวและยืนยันราคา\n${summary.lines.join("\n")}${countIn("repair") > 0 ? "\nอาการที่พบ:" : ""}\nยอดประมาณ ${summary.from ? "เริ่ม " : ""}${total}\n` +
    "วันที่สะดวก:\nพื้นที่ / หมู่บ้าน:";

  return (
    <div className="card p-4 sm:p-7">
      <h3 className="text-lg leading-8 font-bold">คิดค่าบริการล่วงหน้า</h3>
      <p className="mt-1 text-sm leading-6 text-ink-soft">
        เลือกจำนวนเครื่อง ยอดรวมคิดอัตราหลายเครื่องให้อัตโนมัติ ไม่มีค่าเดินทางเพิ่ม
      </p>

      {tabs.length > 1 && (
      <div className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1 sm:grid-cols-4" role="tablist" aria-label="ประเภทงาน">
        {tabs.map(({ key: g, label }) => {
          const n = countIn(g);
          const on = tab === g;
          return (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setTab(g)}
              className={`flex h-10 items-center justify-center gap-1.5 rounded-lg px-1 text-[13px] font-bold sm:text-sm transition-colors ${on ? "bg-white text-ink shadow-sm" : "text-ink-soft hover:text-ink"}`}
            >
              {label}
              {n > 0 && <span className="rounded-full bg-brand-600 px-1.5 text-xs leading-5 text-white">{n}</span>}
            </button>
          );
        })}
      </div>
      )}

      <ul className="mt-2 divide-y divide-slate-100">
        {rows.filter((r) => r.group === tab).map((r) => {
          const q = qty[r.key] ?? 0;
          const price = r.bulkMin && r.bulkUnit
            ? `${fmt(r.unitLo)}.- · ${r.bulkMin} เครื่องขึ้นไป ${fmt(r.bulkUnit)}.-`
            : `${r.from ? "เริ่ม " : ""}${r.unitLo === r.unitHi ? fmt(r.unitLo) : `${fmt(r.unitLo)}–${fmt(r.unitHi)}`}.-`;
          return (
            <li key={r.key} className="flex items-center justify-between gap-2 py-2.5">
              <div className="min-w-0 flex-1">
                <p className="text-[14px] leading-6 font-semibold text-ink sm:text-[15px]">{r.short ?? r.label}</p>
                <p className="text-[13px] leading-5 text-ink-soft">{price}{r.hint && <> · {r.hint}</>}</p>
              </div>
              <div className="flex shrink-0 items-center" role="group" aria-label={`จำนวน${r.label}`}>
                <button type="button" onClick={() => step(r.key, -1)} className="h-10 w-9 rounded-xl border border-slate-200 text-lg font-bold text-ink hover:bg-slate-50 sm:w-10" aria-label="ลดจำนวน">−</button>
                <span className="w-7 text-center text-base font-bold tabular-nums" aria-live="polite">{q}</span>
                <button type="button" onClick={() => step(r.key, 1)} className="h-10 w-9 rounded-xl border border-slate-200 text-lg font-bold text-ink hover:bg-slate-50 sm:w-10" aria-label="เพิ่มจำนวน">+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-3 rounded-2xl bg-brand-50 p-4 sm:p-5">
        {summary.units === 0 ? (
          <p className="text-sm leading-6 text-ink-soft">กด + ที่เครื่องที่ต้องการ ยอดรวมจะขึ้นตรงนี้</p>
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
              {countIn("repair") > 0 && "ค่าซ่อมจริงผมแจ้งหลังตรวจเช็คและก่อนเริ่มซ่อม ค่าตรวจหักคืนเมื่อตกลงซ่อม "}
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
