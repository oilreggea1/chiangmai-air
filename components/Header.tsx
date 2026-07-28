"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, services } from "@/lib/site";
import { IconPhone, IconMenu, IconClose, IconSnow, IconChevron } from "./Icons";

/** เมนูบนสุด — บริการทั้ง 4 ยุบเป็นดรอปดาวน์ ไม่งั้นแถบเมนูล้นจอ 1024px */
const desktopNav = [
  { href: "/price", label: "ราคา" },
  { href: "/pm25", label: "สู้ฝุ่น PM2.5" },
  { href: "/blog", label: "ความรู้" },
  { href: "/area", label: "พื้นที่บริการ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อ" },
];

/** เมนูมือถือแสดงทุกอย่างแบบแบน กดง่ายกว่าดรอปดาวน์บนจอเล็ก */
const mobileNav = [
  { href: "/", label: "หน้าแรก" },
  ...services.map((s) => ({ href: `/service/${s.slug}`, label: `${s.name}เชียงใหม่` })),
  { href: "/price", label: "ราคาค่าบริการ" },
  { href: "/price/repair", label: "ราคาซ่อมแอร์" },
  { href: "/pm25", label: "ล้างแอร์สู้ฝุ่น PM2.5" },
  { href: "/blog", label: "คลังความรู้" },
  { href: "/area", label: "พื้นที่บริการ" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อ" },
  { href: "/en", label: "English" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const pathname = usePathname();

  // ล็อกสกรอลล์พื้นหลังตอนเมนูมือถือเปิด
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onService = pathname.startsWith("/service");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} หน้าแรก`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/30">
            <IconSnow className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight sm:text-base">
              ช่างแอร์เชียงใหม่
            </span>
            <span className="block text-[11px] font-medium text-ink-soft sm:text-xs">
              โปรเฟรชแคร์ · สันกำแพง
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="เมนูหลัก">
          {/* ดรอปดาวน์บริการ — เปิดด้วย hover และ focus เพื่อให้ใช้คีย์บอร์ดได้ */}
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSvcOpen((v) => !v)}
              aria-expanded={svcOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                onService ? "bg-brand-50 text-brand-700" : "text-ink-soft hover:bg-slate-50 hover:text-ink"
              }`}
            >
              บริการ
              <IconChevron className={`h-3.5 w-3.5 transition-transform ${svcOpen ? "rotate-90" : ""}`} />
            </button>

            {svcOpen && (
              <div className="absolute top-full left-0 w-64 pt-2">
                <ul className="card overflow-hidden p-1.5 shadow-lift">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/service/${s.slug}`}
                        onClick={() => setSvcOpen(false)}
                        className={`block rounded-lg px-3 py-2.5 transition-colors ${
                          pathname === `/service/${s.slug}`
                            ? "bg-brand-50 text-brand-700"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <span className="block text-[15px] font-semibold">{s.name}เชียงใหม่</span>
                        <span className="mt-0.5 block text-xs text-ink-soft">{s.priceLabel}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {desktopNav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                  active ? "bg-brand-50 text-brand-700" : "text-ink-soft hover:bg-slate-50 hover:text-ink"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-call hidden px-4 py-2.5 text-[15px] sm:inline-flex"
            data-cta="header-call"
          >
            <IconPhone className="h-5 w-5" />
            {site.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-ink lg:hidden"
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
