"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

function channelOf(href: string) {
  if (href.startsWith("tel:")) return "phone";
  if (href.includes(site.lineId2)) return "line_washing_machine";
  if (href.includes(site.lineId)) return "line_air";
  // ลิงก์ไปหน้าราคา นับแยกเป็นความสนใจ ยังไม่ใช่การติดต่อ (ดู CONTACT_CHANNELS ใน lib/leads.ts)
  // เทียบจาก pathname เพราะ a.href ที่อ่านจาก DOM เป็น URL เต็มเสมอ
  // และเพื่อไม่ให้ลิงก์ภายนอกที่บังเอิญมีคำว่า price ในเส้นทางหลุดเข้ามา
  try {
    const { origin, pathname } = new URL(href);
    if (origin === window.location.origin) {
      if (/^\/price(\/|$)/.test(pathname)) return "price_view";
      // หน้ากลุ่มงานติดตั้ง — นับเป็นความสนใจงานติดตั้ง (เจ้าของกำลังดันงานติดตั้ง 30 ส.ค. 2569)
      if (/^\/(service\/(tid-tang-air|khai-air)|customer\/(ban-mai|sue-air-online))(\/|$)/.test(pathname)) return "install_view";
      // โปสเตอร์โปรตามแคมเปญ
      if (pathname.startsWith("/promo/")) return "promo_view";
    }
  } catch {
    // href ที่แปลงเป็น URL ไม่ได้ ไม่ต้องนับ ปล่อยให้ตกไป other
  }
  return "other";
}

/**
 * เก็บ conversion จาก CTA ทุกปุ่มที่มี data-cta โดยไม่ผูก analytics ไว้กับ UI ทีละจุด
 * เมื่อเพิ่มปุ่มใหม่ แค่ใส่ data-cta ก็ถูกวัดผลอัตโนมัติ
 *
 * เดิมส่งเข้า Vercel Analytics ด้วย track() แต่บัญชีอยู่แผน Hobby ซึ่งไม่รองรับ custom event
 * ข้อมูลจึงถูกทิ้งทั้งหมดโดยไม่มีสัญญาณเตือน ตอนนี้ส่งเข้า /api/lead-click แล้วเก็บลง Neon เอง
 */
export default function ConversionTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[data-cta]");
      if (!link) return;

      const channel = channelOf(link.href);
      if (channel === "other") return;

      const payload = JSON.stringify({
        channel,
        cta: link.dataset.cta ?? "unknown",
        page: window.location.pathname,
      });

      // sendBeacon ส่งได้แม้เบราว์เซอร์กำลังจะออกจากหน้าไปเปิดแอปโทรศัพท์หรือ LINE
      // ถ้าใช้ fetch ธรรมดา คำขอมักถูกยกเลิกกลางทางแล้วยอดจะหายไป
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/lead-click", new Blob([payload], { type: "application/json" }));
        return;
      }
      fetch("/api/lead-click", {
        method: "POST",
        body: payload,
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      }).catch(() => {
        // เงียบไว้ ห้ามให้การเก็บสถิติไปกระทบการกดปุ่มของลูกค้า
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
