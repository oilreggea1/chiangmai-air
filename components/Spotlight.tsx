"use client";

import { useCallback } from "react";

/**
 * ไฟส่องตามเมาส์บนการ์ด (25 ก.ย. 2569)
 *
 * ตั้งตัวแปร --mx --my ให้คลาส .spot ใน globals.css ไปวาดวงแสง
 * ใช้ pointer event ตัวเดียวที่ตัวห่อ ไม่ผูกกับการ์ดแต่ละใบ จึงไม่มีผลกับความเร็วหน้า
 * บนมือถือไม่มี pointer แบบ hover เอฟเฟกต์จึงไม่ทำงานเองโดยไม่ต้องเช็ค
 */
export default function Spotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>(".spot");
    if (!t) return;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);
  return (
    <div className={className} onPointerMove={onMove}>
      {children}
    </div>
  );
}
