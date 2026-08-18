"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, services } from "@/lib/site";
import { IconPhone, IconMenu, IconClose, IconSnow, IconChevron } from "./Icons";

/**
 * เมนูบนสุดของจอใหญ่
 *
 * ที่มาของโครงนี้ (11 ส.ค. 2569): ของเดิมวางลิงก์ระดับบนไว้ 9 รายการเรียงกันทั้งแถบ
 * พอรวมกับโลโก้และปุ่มโทรแล้วกว้างเกินแถบ ข้อความจึงถูกตัดขึ้นบรรทัดใหม่กลางคำ
 * เช่น "ความ / รู้" และ "คอนโด / หอพัก / โรงแรม" รวมถึงเบอร์โทรที่ถูกหักเป็นสองบรรทัด
 * ซึ่งอ่านยากและทำให้ความสูงของแถบเมนูกระโดดไม่เท่ากันในแต่ละหน้า
 *
 * โครงใหม่ยุบเหลือ 6 รายการระดับบน โดยจัดของที่เหลือเข้าดรอปดาวน์ตามหมวด
 * ทุกลิงก์ที่เคยอยู่บนแถบยังเข้าถึงได้เหมือนเดิม ไม่มีหน้าไหนหลุดจากการเชื่อมโยงภายใน
 * และทุกป้ายถูกบังคับไม่ให้ตัดคำ ปัญหาเดิมจึงเกิดซ้ำไม่ได้แม้จะเพิ่มรายการในอนาคต
 */
type NavItem = { href: string; label: string; hint?: string };
type NavGroup = { id: string; label: string; match: string[]; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    id: "service",
    label: "บริการ",
    match: ["/service", "/brand", "/customer", "/duan"],
    items: [
      ...services.map((s) => ({
        href: `/service/${s.slug}`,
        label: `${s.name}เชียงใหม่`,
        hint: s.priceLabel,
      })),
      { href: "/brand", label: "ล้าง–ซ่อม ทุกยี่ห้อ" },
      { href: "/customer", label: "คอนโด หอพัก โรงแรม" },
      { href: "/duan", label: "เรียกด่วน / นอกเวลา" },
    ],
  },
  {
    id: "price",
    label: "ราคา",
    match: ["/price", "/answers"],
    items: [
      { href: "/price", label: "ตารางราคาทั้งหมด" },
      { href: "/price/repair", label: "ราคาซ่อมแอร์แยกตามอาการ" },
      { href: "/answers", label: "คำตอบเรื่องราคาจากช่าง" },
    ],
  },
  {
    id: "knowledge",
    label: "ความรู้และผลงาน",
    match: ["/blog", "/pm25", "/portfolio", "/case-study"],
    items: [
      { href: "/blog", label: "คลังความรู้เรื่องแอร์" },
      { href: "/pm25", label: "ล้างแอร์สู้ฝุ่น PM2.5" },
      { href: "/portfolio", label: "ภาพผลงานจริง" },
      { href: "/case-study", label: "Case Study งานจริง" },
    ],
  },
];

/** ลิงก์ระดับบนที่ไม่มีเมนูย่อย */
const navLinks: NavItem[] = [
  { href: "/area", label: "พื้นที่บริการ" },
  { href: "/about", label: "รู้จักช่างอาร์ม" },
  { href: "/contact", label: "ติดต่อ" },
];

/** เมนูมือถือแสดงทุกอย่างแบบแบน กดง่ายกว่าดรอปดาวน์บนจอเล็ก */
const mobileNav = [
  // ใช้คำที่หน้านั้นตั้งใจติดแทนคำว่า "หน้าแรก" ซึ่งไม่บอกอะไรทั้งกับคนและกับ Google
  { href: "/", label: "ช่างแอร์เชียงใหม่" },
  ...services.map((s) => ({ href: `/service/${s.slug}`, label: `${s.name}เชียงใหม่` })),
  { href: "/price", label: "ราคาค่าบริการ" },
  { href: "/price/repair", label: "ราคาซ่อมแอร์" },
  { href: "/answers", label: "คำตอบจากช่าง" },
  { href: "/pm25", label: "ล้างแอร์สู้ฝุ่น PM2.5" },
  { href: "/blog", label: "คลังความรู้" },
  { href: "/customer", label: "คอนโด หอพัก โรงแรม" },
  { href: "/brand", label: "ล้าง–ซ่อม ทุกยี่ห้อ" },
  { href: "/duan", label: "เรียกด่วน / นอกเวลา" },
  { href: "/area", label: "พื้นที่บริการ" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/case-study", label: "Case Study งานจริง" },
  { href: "/about", label: "รู้จักช่างอาร์ม" },
  { href: "/contact", label: "ติดต่อ" },
  { href: "/en", label: "English" },
  { href: "/zh", label: "中文" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  /** id ของดรอปดาวน์ที่เปิดอยู่ เปิดได้ทีละอันเพื่อไม่ให้เมนูซ้อนทับกัน */
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // ล็อกสกรอลล์พื้นหลังตอนเมนูมือถือเปิด
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // การปิดเมนูตอนเปลี่ยนหน้าทำที่ onClick ของลิงก์แต่ละตัว ไม่ทำใน effect ที่ผูกกับ pathname
  // เพราะการ setState ใน effect ทำให้เกิดการเรนเดอร์ซ้อนรอบโดยไม่จำเป็น

  // กด Escape หรือคลิกนอกแถบเมนูแล้วปิด เป็นสิ่งที่คนคาดหวังจากเมนูแบบนี้
  useEffect(() => {
    if (!openGroup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenGroup(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openGroup]);

  const isActive = (href: string) => pathname === href;
  const groupActive = (g: NavGroup) => g.match.some((m) => pathname.startsWith(m));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        {/*
          ไม่ใส่ aria-label ที่ลิงก์นี้ (18 ส.ค. 2569)

          เดิมใส่ `${site.name} หน้าแรก` ซึ่งไม่ครอบข้อความที่มองเห็นจริง
          ("โปรเฟรชแคร์" + "ช่างแอร์เชียงใหม่ · สันกำแพง") ผิดเกณฑ์ WCAG 2.5.3
          Label in Name — Lighthouse จับเป็น label-content-name-mismatch
          ผลจริงคือคนที่สั่งงานด้วยเสียงพูดตามที่เห็นบนจอแล้วสั่งไม่ติด

          ปล่อยให้ชื่อที่เข้าถึงได้มาจากข้อความในลิงก์เองจึงตรงกันเสมอ
          ถ้าจะใส่กลับ ต้องให้ค่ามีข้อความที่มองเห็นครบทุกคำ ไม่ใช่แค่ชื่อร้าน
        */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/30">
            <IconSnow className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight whitespace-nowrap sm:text-base">
              โปรเฟรชแคร์
            </span>
            <span className="block text-[11px] font-medium whitespace-nowrap text-ink-soft sm:text-xs">
              ช่างแอร์เชียงใหม่ · สันกำแพง
            </span>
          </span>
        </Link>

        <nav ref={navRef} className="hidden items-center gap-0.5 lg:flex" aria-label="เมนูหลัก">
          {navGroups.map((g) => {
            const active = groupActive(g);
            const isOpen = openGroup === g.id;
            return (
              <div
                key={g.id}
                className="relative"
                onMouseEnter={() => setOpenGroup(g.id)}
                onMouseLeave={() => setOpenGroup((cur) => (cur === g.id ? null : cur))}
              >
                <button
                  type="button"
                  onClick={() => setOpenGroup(isOpen ? null : g.id)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-[15px] font-medium whitespace-nowrap transition-colors xl:px-3 ${
                    active ? "bg-brand-50 text-brand-700" : "text-ink-soft hover:bg-slate-50 hover:text-ink"
                  }`}
                >
                  {g.label}
                  <IconChevron className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 w-72 pt-2">
                    <ul className="card overflow-hidden p-1.5 shadow-lift">
                      {g.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpenGroup(null)}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={`block rounded-lg px-3 py-2.5 transition-colors ${
                              isActive(item.href) ? "bg-brand-50 text-brand-700" : "hover:bg-slate-50"
                            }`}
                          >
                            <span className="block text-[15px] font-semibold">{item.label}</span>
                            {item.hint && (
                              <span className="mt-0.5 block text-xs text-ink-soft">{item.hint}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}

          {navLinks.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpenGroup(null)}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`rounded-lg px-2.5 py-2 text-[15px] font-medium whitespace-nowrap transition-colors xl:px-3 ${
                isActive(n.href) ? "bg-brand-50 text-brand-700" : "text-ink-soft hover:bg-slate-50 hover:text-ink"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-call hidden px-3.5 py-2.5 text-[15px] whitespace-nowrap sm:inline-flex xl:px-4"
            data-cta="header-call"
          >
            <IconPhone className="h-5 w-5 shrink-0" />
            {site.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"
        >
          <nav className="wrap grid gap-1 py-4" aria-label="เมนูมือถือ">
            {mobileNav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                // ปิดเมนูตอนกดลิงก์ ไม่งั้นเมนูค้างทับหน้าใหม่
                onClick={() => setOpen(false)}
                aria-current={pathname === n.href ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  pathname === n.href ? "bg-brand-50 text-brand-700" : "text-ink"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneTel}`} className="btn-call mt-2" data-cta="mobile-menu-call">
              <IconPhone className="h-5 w-5" />
              โทร {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
