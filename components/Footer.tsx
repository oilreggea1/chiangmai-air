import Link from "next/link";
import { site, services, areas } from "@/lib/site";
import { IconPhone, IconLine, IconPin, IconClock, IconSnow } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear() + 543; // พ.ศ.

  return (
    <footer className="mt-4 border-t border-slate-200 bg-sand">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <IconSnow className="h-6 w-6" />
            </span>
            <span className="text-base font-extrabold">ช่างแอร์เชียงใหม่</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            {site.legalName} — ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ และย้ายแอร์ถึงบ้านทั่วเชียงใหม่
            แจ้งราคาชัดเจนก่อนเริ่มงาน รับประกันผลงานทุกครั้ง
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline"
          >
            ติดตามผลงานบน Facebook →
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">บริการของเรา</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/service/${s.slug}`} className="text-ink-soft hover:text-brand-700 hover:underline">
                  {s.h1.split(" ").slice(0, 2).join(" ")}เชียงใหม่
                </Link>
              </li>
            ))}
            <li>
              <Link href="/price" className="text-ink-soft hover:text-brand-700 hover:underline">
                ตารางราคาทั้งหมด
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-ink-soft hover:text-brand-700 hover:underline">
                ภาพผลงานจริง
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">พื้นที่ให้บริการ</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/area/${a.slug}`} className="text-ink-soft hover:text-brand-700 hover:underline">
                  ช่างแอร์{a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">ติดต่อเรา</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`} className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.lineUrl} target="_blank" rel="noopener" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconLine className="mt-0.5 h-5 w-5 shrink-0 text-[#06C755]" />
                LINE {site.lineId}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-ink-soft">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              เปิดบริการทุกวัน {site.hours}
            </li>
            <li className="flex items-start gap-2.5 text-ink-soft">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>
                {site.address.street} {site.address.district}
                <br />
                จ.{site.address.province} {site.address.postalCode}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name} · {site.displayUrl}</p>
          <p>ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ ย้ายแอร์ เชียงใหม่ · สันกำแพง · ต้นเปา</p>
        </div>
      </div>
    </footer>
  );
}
