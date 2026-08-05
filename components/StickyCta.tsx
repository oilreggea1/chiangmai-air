"use client";

import { site } from "@/lib/site";
import { usePathname } from "next/navigation";
import { IconPhone, IconLine } from "./Icons";

/**
 * แถบโทร/LINE ลอยล่างจอเฉพาะมือถือ — ตัวขับ conversion หลักของเว็บบริการท้องถิ่น
 * ลูกค้าส่วนใหญ่เข้าจากมือถือและตัดสินใจโทรภายใน 30 วินาทีแรก
 */
export default function StickyCta() {
  const pathname = usePathname();
  const isWashingMachine = pathname.includes("/service/lang-washing-machine");
  const lineUrl = isWashingMachine ? site.lineUrl2 : site.lineUrl;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a href={`tel:${site.phoneTel}`} className="btn-call py-3.5" data-cta="sticky-call">
          <IconPhone className="h-5 w-5" />
          โทรเรียกช่าง
        </a>
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener"
          className="btn-line py-3.5"
          data-cta="sticky-line"
        >
          <IconLine className="h-5 w-5" />
          {isWashingMachine ? "LINE ล้างถังซัก" : "LINE งานแอร์"}
        </a>
      </div>
    </div>
  );
}
