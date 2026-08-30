"use client";

import { useEffect, useState } from "react";

/**
 * นับถอยหลังถึงเวลาหมดเขตโปรตามแคมเปญ — ใช้คู่กับ PromoWindow ในการ์ดโปรหน้าแรก
 * ฝั่งเซิร์ฟเวอร์เรนเดอร์เป็นขีดไว้ก่อน แล้วค่อยเริ่มเดินเมื่อถึงเบราว์เซอร์ (กัน hydration ไม่ตรง)
 */
export default function PromoCountdown({ until }: { until: string }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(until).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [until]);

  const d = left === null ? null : Math.floor(left / 86_400_000);
  const h = left === null ? null : Math.floor((left % 86_400_000) / 3_600_000);
  const m = left === null ? null : Math.floor((left % 3_600_000) / 60_000);
  const sec = left === null ? null : Math.floor((left % 60_000) / 1000);
  const pad = (n: number | null) => (n === null ? "--" : String(n).padStart(2, "0"));

  const boxes: [string, string][] = [
    [d === null ? "--" : String(d), "วัน"],
    [pad(h), "ชั่วโมง"],
    [pad(m), "นาที"],
    [pad(sec), "วินาที"],
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="text-sm font-semibold text-ink-soft">โปรหมดเขตในอีก</span>
      <div className="flex items-center gap-1.5">
        {boxes.map(([value, label]) => (
          <div key={label} className="min-w-[3.1rem] rounded-lg bg-orange-600 px-2 py-1.5 text-center text-white shadow-sm">
            <div className="text-lg font-extrabold leading-6 tabular-nums">{value}</div>
            <div className="text-[11px] leading-4 text-orange-100">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
