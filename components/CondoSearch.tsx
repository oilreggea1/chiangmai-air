"use client";

import { useState } from "react";

/**
 * ช่องค้นหาชื่อคอนโดในหน้าทำเนียบ (29 ก.ย. 2569)
 * รายชื่อทั้งหมดถูกเรนเดอร์จากเซิร์ฟเวอร์อยู่แล้ว (Google อ่านได้ครบ) ตัวนี้แค่ซ่อนแถวที่ไม่ตรงคำค้น
 * แถวต้องมี data-condo="ชื่อไทย ชื่ออังกฤษ ถนน" และกลุ่มตำบลต้องมี data-condo-group
 */
export default function CondoSearch({ placeholder, empty }: { placeholder: string; empty: string }) {
  const [q, setQ] = useState("");
  const [none, setNone] = useState(false);

  function run(v: string) {
    setQ(v);
    const k = v.trim().toLowerCase().replace(/\s+/g, "");
    let shown = 0;
    document.querySelectorAll<HTMLElement>("[data-condo-group]").forEach((g) => {
      let n = 0;
      g.querySelectorAll<HTMLElement>("[data-condo]").forEach((row) => {
        const hit = !k || (row.dataset.condo ?? "").toLowerCase().replace(/\s+/g, "").includes(k);
        row.hidden = !hit;
        if (hit) n++;
      });
      g.hidden = n === 0;
      shown += n;
    });
    setNone(shown === 0);
  }

  return (
    <div className="mt-6">
      <input
        type="search"
        value={q}
        onChange={(e) => run(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
      {none && <p className="mt-3 text-sm text-ink-soft">{empty}</p>}
    </div>
  );
}
