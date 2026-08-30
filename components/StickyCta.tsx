"use client";

import { site } from "@/lib/site";
import { usePathname } from "next/navigation";
import { IconPhone, IconLine } from "./Icons";

/**
 * แถบโทร/LINE ลอยล่างจอเฉพาะมือถือ — ตัวขับ conversion หลักของเว็บบริการท้องถิ่น
 * ลูกค้าส่วนใหญ่เข้าจากมือถือและตัดสินใจโทรภายใน 30 วินาทีแรก
 */
export default function StickyCta({ lang = "th" }: { lang?: "th" | "en" | "zh-CN" }) {
  const pathname = usePathname();
  // ป้ายปุ่มตามภาษาของหน้า ของเดิมเป็นภาษาไทยทุกภาษา (19 ส.ค. 2569)
  const label = {
    th: { call: "โทรถามคิว", air: "LINE ประเมินฟรี", washer: "LINE ประเมินฟรี" },
    en: { call: "Call now", air: "LINE · aircon", washer: "LINE · washer" },
    "zh-CN": { call: "立即致电", air: "LINE 空调", washer: "LINE 洗衣机" },
  }[lang];
  const isWashingMachine = pathname.includes("/service/lang-washing-machine");
  const lineUrl = isWashingMachine ? site.lineUrl2 : site.lineUrl;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a href={`tel:${site.phoneTel}`} className="btn-call gap-1.5 whitespace-nowrap px-2 py-3.5 text-[15px]" data-cta="sticky-call">
          <IconPhone className="h-5 w-5" />
          {label.call}
        </a>
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener"
          className="btn-line gap-1.5 whitespace-nowrap px-2 py-3.5 text-[15px]"
          data-cta="sticky-line"
        >
          <IconLine className="h-5 w-5" />
          {isWashingMachine ? label.washer : label.air}
        </a>
      </div>
    </div>
  );
}
