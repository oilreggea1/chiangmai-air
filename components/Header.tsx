"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, services } from "@/lib/site";
import { IconPhone, IconMenu, IconClose, IconSnow } from "./Icons";

const nav = [
  { href: "/", label: "หน้าแรก" },
  ...services.map((s) => ({ href: `/service/${s.slug}`, label: s.name })),
  { href: "/price", label: "ราคา" },
  { href: "/area", label: "พื้นที่บริการ" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/contact", label: "ติดต่อ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ล็อกสกรอลล์พื้นหลังตอนเมนูมือถือเปิด
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-soft hover:bg-slate-50 hover:text-ink"
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
        <div id="mobile-nav" className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="wrap grid gap-1 py-4" aria-label="เมนูมือถือ">
            {nav.map((n) => (
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
