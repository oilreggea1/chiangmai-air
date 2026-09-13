"use client";

import { useSyncExternalStore, type ReactNode } from "react";

/** ไม่มีเหตุการณ์ภายนอกให้ตามฟัง เวลาหมดอายุตรวจตอน hydrate ครั้งเดียวพอ */
const noSubscribe = () => () => {};

/**
 * แสดงเนื้อหาเฉพาะช่วงแคมเปญ — หลังเวลาหมดอายุ ซ่อนฝั่งเบราว์เซอร์ทันที
 * (หน้า prerender ล่วงหน้า จึงต้องมีชั้นนี้กันโปรค้างหน้าเว็บระหว่างรอถอดโค้ดจริง)
 *
 * ใช้คู่กับงานถอดโค้ดตามกำหนด ไม่ใช่ตัวแทนการถอด
 * เหตุผล: ชั้นนี้ซ่อนได้เฉพาะสายตาผู้ใช้ ตัว HTML ที่ส่งให้ Googlebot และบอตของ AI
 * ยังมีโปรที่หมดอายุกับ Offer schema ติดอยู่เต็ม ๆ ถ้าไม่ถอดโค้ดออกจริง
 *
 * อ่านค่าเวลาผ่าน useSyncExternalStore เพื่อให้ฝั่งเซิร์ฟเวอร์ได้ false เสมอ
 * (prerender จึงมีเนื้อหาอยู่) แล้วเบราว์เซอร์ค่อยตัดสินตอน hydrate โดยไม่ต้อง setState ใน effect
 */
export default function PromoWindow({ until, children }: { until: string; children: ReactNode }) {
  const deadline = new Date(until).getTime();
  const expired = useSyncExternalStore(
    noSubscribe,
    () => Date.now() > deadline,
    () => false,
  );
  if (expired) return null;
  return <>{children}</>;
}
