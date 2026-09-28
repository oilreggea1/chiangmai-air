"use client";

import { useMemo, useState } from "react";

/**
 * เครื่องคำนวณขนาด BTU (29 ก.ย. 2569)
 *
 * สูตรและค่าเผื่อตรงกับบทความ /blog/khamnuan-btu ทุกตัว ห้ามเปลี่ยนตัวเลขที่นี่โดยไม่แก้บทความคู่กัน
 * - พื้นที่ (กว้าง × ยาว) × ค่าสัมประสิทธิ์: ห้องนอน 750 (ช่วง 700–800) ห้องนั่งเล่น/ทำงาน 850 (ช่วง 800–900)
 * - ค่าเผื่อใช้ค่ากลางของช่วงในตาราง: แดดบ่าย +12.5% ใต้หลังคา +15% บ้านไม้ +12.5% กระจกบานใหญ่ +15%
 *   เปิดโล่งถึงครัว +15% ฝ้าสูงเกิน 3 ม. +15% คนเกิน 2 คน +600 BTU ต่อคน
 * - ปัดขึ้นเป็นขนาดที่ผลิตจริง 9,000 / 12,000 / 15,000 / 18,000 / 24,000 / 30,000
 */
const SIZES = [9000, 12000, 15000, 18000, 24000, 30000];
type BLang = "th" | "en" | "zh-CN";
const EXTRAS = [
  { key: "sun", pct: 0.125 }, { key: "roof", pct: 0.15 }, { key: "wood", pct: 0.125 },
  { key: "glass", pct: 0.15 }, { key: "kitchen", pct: 0.15 }, { key: "high", pct: 0.15 },
] as const;
/** ข้อความทุกภาษา (หน้าอังกฤษ/จีนใช้ตัวเดียวกัน 29 ก.ย. 2569) สูตรไม่ต่างกันตามภาษา */
const S = {
  th: {
    extras: { sun: "รับแดดบ่าย (ทิศตะวันตกหรือตะวันตกเฉียงใต้)", roof: "ห้องชั้นบนสุดหรือใต้หลังคา", wood: "บ้านไม้เก่า ผนังบาง ไม่มีฉนวน", glass: "กระจกบานใหญ่ ไม่มีม่านหรือฟิล์ม", kitchen: "ห้องนั่งเล่นเปิดโล่งถึงครัว", high: "ฝ้าสูงเกิน 3 เมตร" },
    title: "คำนวณ BTU ห้องของคุณ", w: "กว้าง (เมตร)", l: "ยาว (เมตร)", people: "คนใช้ห้องพร้อมกัน", roomAria: "ลักษณะการใช้ห้อง",
    bed: "ห้องนอน", living: "ห้องนั่งเล่น / ห้องทำงาน", legend: "ลักษณะห้องที่ตรงกับห้องของคุณ", empty: "กรอกความกว้างและความยาวของห้องเป็นเมตร",
    calc: (a: string, b: string) => `ห้อง ${a} ตร.ม. คำนวณได้ประมาณ ${b} BTU`, rec: (b: string) => `แนะนำ ${b} BTU`, big: "ควรใช้แอร์มากกว่าหนึ่งเครื่องหรือระบบที่ใหญ่ขึ้น",
    note: "เป็นตัวเลขตั้งต้นจากสูตรในบทความนี้ หากไม่แน่ใจ ส่งขนาดห้อง ทิศที่รับแดด และรูปห้องมาทาง LINE ได้ ผมประเมินให้โดยไม่มีค่าใช้จ่าย",
  },
  en: {
    extras: { sun: "Gets afternoon sun (west or south-west facing)", roof: "Top floor or directly under the roof", wood: "Old wooden house, thin walls, no insulation", glass: "Large windows without curtains or film", kitchen: "Living room open to the kitchen", high: "Ceiling higher than 3 m" },
    title: "Work out the BTU for your room", w: "Width (m)", l: "Length (m)", people: "People in the room at once", roomAria: "How the room is used",
    bed: "Bedroom", living: "Living room / office", legend: "Tick what applies to your room", empty: "Enter the width and length of the room in metres.",
    calc: (a: string, b: string) => `${a} m² room, works out at about ${b} BTU`, rec: (b: string) => `Recommended: ${b} BTU`, big: "This room needs more than one unit or a larger system",
    note: "A starting figure from the standard sizing formula. If you are unsure, send the room size, which way it faces and a photo on LINE and I will check it at no charge.",
  },
  "zh-CN": {
    extras: { sun: "下午西晒（朝西或西南）", roof: "顶层或屋顶正下方", wood: "老木屋，墙薄无隔热", glass: "大面积玻璃，没有窗帘或贴膜", kitchen: "客厅与厨房开放相连", high: "天花板高于 3 米" },
    title: "计算房间所需 BTU", w: "宽（米）", l: "长（米）", people: "同时在房间的人数", roomAria: "房间用途",
    bed: "卧室", living: "客厅 / 办公室", legend: "勾选符合您房间的情况", empty: "请输入房间的宽和长（米）。",
    calc: (a: string, b: string) => `房间 ${a} 平方米，约需 ${b} BTU`, rec: (b: string) => `建议 ${b} BTU`, big: "这个房间需要不止一台空调或更大的系统",
    note: "这是按常用公式算出的参考值。不确定的话，把房间尺寸、朝向和照片用 LINE 发给我，我免费帮您评估。",
  },
} as const;
const fmt = (n: number) => n.toLocaleString("en-US");

export function BtuCalculator({ lang = "th" }: { lang?: BLang } = {}) {
  const t = S[lang];
  const [w, setW] = useState("3.5");
  const [l, setL] = useState("4");
  const [room, setRoom] = useState<"bed" | "living">("bed");
  const [people, setPeople] = useState(2);
  const [on, setOn] = useState<Record<string, boolean>>({});

  const r = useMemo(() => {
    const area = Math.max(0, Number(w) || 0) * Math.max(0, Number(l) || 0);
    const base = area * (room === "bed" ? 750 : 850);
    const pct = EXTRAS.reduce((s, e) => s + (on[e.key] ? e.pct : 0), 0);
    const total = base * (1 + pct) + Math.max(0, people - 2) * 600;
    const size = SIZES.find((s) => s >= total * 0.97) ?? null;
    return { area, base, pct, total, size };
  }, [w, l, room, people, on]);

  const input = "h-11 w-full rounded-xl border border-slate-200 px-3 text-base font-semibold text-ink";
  return (
    <div className="card not-prose p-5 sm:p-7">
      <p className="text-lg leading-8 font-bold text-ink">{t.title}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-semibold text-ink-soft">
          {t.w}
          <input className={`${input} mt-1.5`} inputMode="decimal" value={w} onChange={(e) => setW(e.target.value)} />
        </label>
        <label className="text-sm font-semibold text-ink-soft">
          {t.l}
          <input className={`${input} mt-1.5`} inputMode="decimal" value={l} onChange={(e) => setL(e.target.value)} />
        </label>
        <label className="text-sm font-semibold text-ink-soft">
          {t.people}
          <input className={`${input} mt-1.5`} inputMode="numeric" type="number" min={1} max={20} value={people} onChange={(e) => setPeople(Math.max(1, Number(e.target.value) || 1))} />
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label={t.roomAria}>
        {([["bed", t.bed], ["living", t.living]] as const).map(([k, label]) => (
          <button key={k} type="button" role="radio" aria-checked={room === k} onClick={() => setRoom(k)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${room === k ? "border-brand-600 bg-brand-600 text-white" : "border-slate-200 text-ink"}`}>
            {label}
          </button>
        ))}
      </div>
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-ink-soft">{t.legend}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {EXTRAS.map((e) => (
            <label key={e.key} className="flex items-start gap-2.5 rounded-xl border border-slate-100 p-3 text-[15px] leading-6 text-ink">
              <input type="checkbox" className="mt-1 h-4 w-4" checked={!!on[e.key]} onChange={(x) => setOn((o) => ({ ...o, [e.key]: x.target.checked }))} />
              {t.extras[e.key]}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-5 rounded-2xl bg-brand-50 p-5">
        {r.area <= 0 ? (
          <p className="text-[15px] leading-7 text-ink-soft">{t.empty}</p>
        ) : (
          <>
            <p className="text-sm font-semibold text-brand-700">
              {t.calc(r.area.toFixed(1), fmt(Math.round(r.total / 100) * 100))}
            </p>
            <p className="mt-1 text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] leading-tight font-extrabold text-ink">
              {r.size ? t.rec(fmt(r.size)) : t.big}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              {t.note}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
