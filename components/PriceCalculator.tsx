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
export type CalcLang = "th" | "en" | "zh-CN";
/** ข้อความของตัวคิดค่าบริการทุกภาษา (หน้าอังกฤษ/จีนใช้ตัวเดียวกัน 29 ก.ย. 2569) */
const S = {
  th: {
    tabs: { wash: "ล้างแอร์", install: "ติดตั้ง / ย้ายแอร์", repair: "ซ่อมแอร์", washer: "ล้างเครื่องซักผ้า" },
    title: "คิดค่าบริการล่วงหน้า", intro: "เลือกจำนวนเครื่อง ยอดรวมคิดอัตราหลายเครื่องให้อัตโนมัติ ไม่มีค่าเดินทางเพิ่ม",
    tabAria: "ประเภทงาน", qtyAria: (l: string) => `จำนวน${l}`, minus: "ลดจำนวน", plus: "เพิ่มจำนวน",
    bulk: (n: number) => `${n} เครื่องขึ้นไป`, from: "เริ่ม ", fromSuf: "", cur: ".-", baht: "บาท", unit: "เครื่อง",
    empty: "กด + ที่เครื่องที่ต้องการ ยอดรวมจะขึ้นตรงนี้", est: (n: number) => `ยอดประมาณ ${n} เครื่อง`,
    noteRange: "บางรายการเป็นราคาเริ่มต้นหรือขึ้นอยู่กับขนาดเครื่อง ผมแจ้งยอดที่แน่นอนให้ทราบก่อนเริ่มงานทุกครั้ง",
    noteFixed: "เป็นราคาที่ชำระจริงในเวลาทำการ ผมยืนยันยอดอีกครั้งก่อนเริ่มงาน",
    noteRepair: "ค่าซ่อมจริงผมแจ้งหลังตรวจเช็คและก่อนเริ่มซ่อม ค่าตรวจหักคืนเมื่อตกลงซ่อม ",
    noteHours: "งานนอกเวลาทำการมีค่าบริการเพิ่มเติม", send: "ส่งรายการนี้ทาง LINE เพื่อจองคิว",
    sendNote: "",
    msgHead: "สอบถามคิวและยืนยันราคา", msgSymptom: "อาการที่พบ:", msgTotal: "ยอดประมาณ", msgTail: "วันที่สะดวก:\nพื้นที่ / หมู่บ้าน:",
  },
  en: {
    tabs: { wash: "Aircon cleaning", install: "Install / move", repair: "Repair", washer: "Washing machine" },
    title: "Work out your price", intro: "Pick how many units you have. Multi-unit rates apply automatically, and there is no travel fee.",
    tabAria: "Type of job", qtyAria: (l: string) => `Number of units: ${l}`, minus: "Fewer", plus: "More",
    bulk: (n: number) => `${n}+ units`, from: "from ", fromSuf: "", cur: " THB", baht: "THB", unit: "unit(s)",
    empty: "Tap + next to a unit type and the total appears here.", est: (n: number) => `Estimate for ${n} unit${n === 1 ? "" : "s"}`,
    noteRange: "Some items are starting prices or depend on the size of the unit. I confirm the exact figure before I start.",
    noteFixed: "This is what you pay during working hours. I confirm it again before I start.",
    noteRepair: "The repair itself is quoted after diagnosis and before any work, and the diagnostic fee comes off the bill if you go ahead. ",
    noteHours: "Work outside working hours carries an extra charge.", send: "Send this list on LINE to book",
    sendNote: "The list is sent in Thai so the booking is handled quickly. Add anything else in English below it.",
    msgHead: "Booking request and price check", msgSymptom: "Problem noticed:", msgTotal: "Estimate", msgTail: "Preferred date:\nArea / building:",
  },
  "zh-CN": {
    tabs: { wash: "空调清洗", install: "安装 / 移机", repair: "维修", washer: "洗衣机清洗" },
    title: "预先估算费用", intro: "选择机器数量，多台价格自动计算，服务范围内不收车费。",
    tabAria: "工作类型", qtyAria: (l: string) => `数量：${l}`, minus: "减少", plus: "增加",
    bulk: (n: number) => `${n} 台以上`, from: "", fromSuf: "起", cur: " 泰铢", baht: "泰铢", unit: "台",
    empty: "点击机器类型旁的 +，总价会显示在这里。", est: (n: number) => `${n} 台的预估费用`,
    noteRange: "部分项目为起价或按机器大小计价，开工前我会确认准确金额。",
    noteFixed: "这是工作时间内的实付价格，开工前我会再确认一次。",
    noteRepair: "维修费用在检测后、开修前报价；决定维修的话检测费从账单中扣除。",
    noteHours: "工作时间以外另收附加费。", send: "用 LINE 发送清单预约",
    sendNote: "清单会以泰文发送，方便尽快安排。其他情况可以在下面用中文补充。",
    msgHead: "预约及确认价格", msgSymptom: "故障情况：", msgTotal: "预估", msgTail: "方便的日期：\n地区 / 楼盘：",
  },
} as const;

export type CalcRow = {
  key: string;
  label: string;
  hint: string;
  /** ชื่อไทยของแถว ใช้ในข้อความ LINE จากหน้าอังกฤษ/จีน (แอดมินอ่านไทย) */
  labelTh?: string;
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

export function PriceCalculator({ rows, lineAir, lineWasher, lang = "th" }: { rows: CalcRow[]; lineAir: string; lineWasher: string; lang?: CalcLang }) {
  const t = S[lang];
  const TABS = (Object.keys(t.tabs) as CalcGroup[]).map((key) => ({ key, label: t.tabs[key] }));
  const money = (lo: number, hi: number) => (lo === hi ? `${fmt(lo)} ${t.baht}` : `${fmt(lo)}–${fmt(hi)} ${t.baht}`);
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
      // ข้อความ LINE เป็นภาษาไทยเสมอ แม้ลูกค้ากดจากหน้าอังกฤษ/จีน (เจ้าของสั่ง 29 ก.ย. 2569 ให้แอดมินอ่านได้ทันที)
      const th = S.th;
      const thMoney = uLo === uHi ? `${fmt(uLo * q)} ${th.baht}` : `${fmt(uLo * q)}–${fmt(uHi * q)} ${th.baht}`;
      lines.push(`- ${r.labelTh ?? r.label} ${q} ${th.unit} ≈ ${r.from ? th.from : ""}${thMoney}`);
    }
    return { lo, hi, from, units, lines };
  }, [qty, rows, t]);

  const washerOnly = summary.units > 0 && rows.every((r) => r.group === "washer" || !(qty[r.key] ?? 0));
  const total = money(summary.lo, summary.hi);
  const th = S.th;
  const thTotal = summary.lo === summary.hi ? `${fmt(summary.lo)} ${th.baht}` : `${fmt(summary.lo)}–${fmt(summary.hi)} ${th.baht}`;
  const who = lang === "en" ? " (ลูกค้าจากหน้าภาษาอังกฤษ ตอบเป็นภาษาอังกฤษ)" : lang === "zh-CN" ? " (ลูกค้าจากหน้าภาษาจีน ตอบเป็นภาษาจีน)" : "";
  const message =
    `${th.msgHead}${who}\n${summary.lines.join("\n")}${countIn("repair") > 0 ? `\n${th.msgSymptom}` : ""}\n${th.msgTotal} ${summary.from ? th.from : ""}${thTotal}\n` +
    th.msgTail;

  return (
    <div className="card p-4 sm:p-7">
      <h3 className="text-lg leading-8 font-bold">{t.title}</h3>
      <p className="mt-1 text-sm leading-6 text-ink-soft">
        {t.intro}
      </p>

      {tabs.length > 1 && (
      <div className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1 sm:grid-cols-4" role="tablist" aria-label={t.tabAria}>
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
            ? `${fmt(r.unitLo)}${t.cur} · ${t.bulk(r.bulkMin)} ${fmt(r.bulkUnit)}${t.cur}`
            : `${r.from ? t.from : ""}${r.unitLo === r.unitHi ? fmt(r.unitLo) : `${fmt(r.unitLo)}–${fmt(r.unitHi)}`}${t.cur}${r.from ? t.fromSuf : ""}`;
          return (
            <li key={r.key} className="flex items-center justify-between gap-2 py-2.5">
              <div className="min-w-0 flex-1">
                <p className="text-[14px] leading-6 font-semibold text-ink sm:text-[15px]">{r.short ?? r.label}</p>
                <p className="text-[13px] leading-5 text-ink-soft">{price}{r.hint && <> · {r.hint}</>}</p>
              </div>
              <div className="flex shrink-0 items-center" role="group" aria-label={t.qtyAria(r.label)}>
                <button type="button" onClick={() => step(r.key, -1)} className="h-10 w-9 rounded-xl border border-slate-200 text-lg font-bold text-ink hover:bg-slate-50 sm:w-10" aria-label={t.minus}>−</button>
                <span className="w-7 text-center text-base font-bold tabular-nums" aria-live="polite">{q}</span>
                <button type="button" onClick={() => step(r.key, 1)} className="h-10 w-9 rounded-xl border border-slate-200 text-lg font-bold text-ink hover:bg-slate-50 sm:w-10" aria-label={t.plus}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-3 rounded-2xl bg-brand-50 p-4 sm:p-5">
        {summary.units === 0 ? (
          <p className="text-sm leading-6 text-ink-soft">{t.empty}</p>
        ) : (
          <>
            <p className="text-sm font-semibold text-brand-700">{t.est(summary.units)}</p>
            <p className="mt-1 text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] leading-tight font-extrabold text-ink">
              {summary.from ? t.from : ""}{total}{summary.from ? t.fromSuf : ""}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              {summary.from || summary.lo !== summary.hi
                ? t.noteRange
                : t.noteFixed}{" "}
              {countIn("repair") > 0 && t.noteRepair}
              {t.noteHours}
            </p>
            <a
              href={lineUrl(washerOnly ? lineWasher : lineAir, message)}
              target="_blank"
              rel="noopener"
              className="btn-line mt-4 w-full px-5 py-3.5 sm:w-auto"
              data-cta={`calc-line-${lang === "th" ? "" : lang + "-"}${washerOnly ? "washer" : "air"}`}
            >
              <IconLine className="h-5 w-5" />
              {t.send}
            </a>
            {t.sendNote && <p className="mt-2 text-xs leading-5 text-ink-soft">{t.sendNote}</p>}
          </>
        )}
      </div>
    </div>
  );
}
