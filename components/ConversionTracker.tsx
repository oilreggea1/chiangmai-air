"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics/react";
import { site } from "@/lib/site";

function channelOf(href: string) {
  if (href.startsWith("tel:")) return "phone";
  if (href.includes(site.lineId2)) return "line_washing_machine";
  if (href.includes(site.lineId)) return "line_air";
  return "other";
}

/**
 * เก็บ conversion จาก CTA ทุกปุ่มที่มี data-cta โดยไม่ผูก analytics ไว้กับ UI ทีละจุด
 * เมื่อเพิ่มปุ่มใหม่ แค่ใส่ data-cta ก็ถูกวัดผลอัตโนมัติ
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

      track("Lead Click", {
        channel,
        cta: link.dataset.cta ?? "unknown",
        page: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
