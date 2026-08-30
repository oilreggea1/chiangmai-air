"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * แสดงเนื้อหาเฉพาะช่วงแคมเปญ — หลังเวลาหมดอายุ ซ่อนฝั่งเบราว์เซอร์ทันที
 * (หน้า prerender ล่วงหน้า จึงต้องมีชั้นนี้กันโปรค้างหน้าเว็บระหว่างรอถอดโค้ดจริง)
 * ใช้คู่กับงานถอดโค้ดตามกำหนด ไม่ใช่ตัวแทนการถอด
 */
export default function PromoWindow({ until, children }: { until: string; children: ReactNode }) {
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    if (Date.now() > new Date(until).getTime()) setExpired(true);
  }, [until]);
  if (expired) return null;
  return <>{children}</>;
}
