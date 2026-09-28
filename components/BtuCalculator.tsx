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
const EXTRAS = [
  { key: "sun", label: "รับแดดบ่าย (ทิศตะวันตกหรือตะวันตกเฉียงใต้)", pct: 0.125 },
  { key: "roof", label: "ห้องชั้นบนสุดหรือใต้หลังคา", pct: 0.15 },
  { key: "wood", label: "บ้านไม้เก่า ผนังบาง ไม่มีฉนวน", pct: 0.125 },
  { key: "glass", label: "กระจกบานใหญ่ ไม่มีม่านหรือฟิล์ม", pct: 0.15 },
  { key: "kitchen", label: "ห้องนั่งเล่นเปิดโล่งถึงครัว", pct: 0.15 },
  { key: "high", label: "ฝ้าสูงเกิน 3 เมตร", pct: 0.15 },
];
const fmt = (n: number) => n.toLocaleString("en-US");

export function BtuCalculator() {
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
      <p className="text-lg leading-8 font-bold text-ink">คำนวณ BTU ห้องของคุณ</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-semibold text-ink-soft">
          กว้าง (เมตร)
          <input className={`${input} mt-1.5`} inputMode="decimal" value={w} onChange={(e) => setW(e.target.value)} />
        </label>
        <label className="text-sm font-semibold text-ink-soft">
          ยาว (เมตร)
          <input className={`${input} mt-1.5`} inputMode="decimal" value={l} onChange={(e) => setL(e.target.value)} />
        </label>
        <label className="text-sm font-semibold text-ink-soft">
          คนใช้ห้องพร้อมกัน
          <input className={`${input} mt-1.5`} inputMode="numeric" type="number" min={1} max={20} value={people} onChange={(e) => setPeople(Math.max(1, Number(e.target.value) || 1))} />
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label="ลักษณะการใช้ห้อง">
        {([["bed", "ห้องนอน"], ["living", "ห้องนั่งเล่น / ห้องทำงาน"]] as const).map(([k, t]) => (
          <button key={k} type="button" role="radio" aria-checked={room === k} onClick={() => setRoom(k)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${room === k ? "border-brand-600 bg-brand-600 text-white" : "border-slate-200 text-ink"}`}>
            {t}
          </button>
        ))}
      </div>
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-ink-soft">ลักษณะห้องที่ตรงกับห้องของคุณ</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {EXTRAS.map((e) => (
            <label key={e.key} className="flex items-start gap-2.5 rounded-xl border border-slate-100 p-3 text-[15px] leading-6 text-ink">
              <input type="checkbox" className="mt-1 h-4 w-4" checked={!!on[e.key]} onChange={(x) => setOn((o) => ({ ...o, [e.key]: x.target.checked }))} />
              {e.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-5 rounded-2xl bg-brand-50 p-5">
        {r.area <= 0 ? (
          <p className="text-[15px] leading-7 text-ink-soft">กรอกความกว้างและความยาวของห้องเป็นเมตร</p>
        ) : (
          <>
            <p className="text-sm font-semibold text-brand-700">
              ห้อง {r.area.toFixed(1)} ตร.ม. คำนวณได้ประมาณ {fmt(Math.round(r.total / 100) * 100)} BTU
            </p>
            <p className="mt-1 text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] leading-tight font-extrabold text-ink">
              {r.size ? `แนะนำ ${fmt(r.size)} BTU` : "ควรใช้แอร์มากกว่าหนึ่งเครื่องหรือระบบที่ใหญ่ขึ้น"}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              เป็นตัวเลขตั้งต้นจากสูตรในบทความนี้ หากไม่แน่ใจ ส่งขนาดห้อง ทิศที่รับแดด และรูปห้องมาทาง LINE ได้ ผมประเมินให้โดยไม่มีค่าใช้จ่าย
            </p>
          </>
        )}
      </div>
    </div>
  );
}
