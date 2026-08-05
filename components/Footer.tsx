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
            ผมช่างอาร์ม รับล้างแอร์ ซ่อมแอร์ ติดตั้ง ย้ายแอร์ และล้างเครื่องซักผ้าถึงบ้านทั่วเชียงใหม่
            ดูราคา ขั้นตอน และหลักฐานผลงานจริงได้ก่อนติดต่อ
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline"
          >
            ดูผลงานเพิ่มเติมบน Facebook →
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">งานที่ผมรับ</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/service/${s.slug}`} className="text-ink-soft hover:text-brand-700 hover:underline">
                  {s.name}เชียงใหม่
                </Link>
              </li>
            ))}
            <li>
              <Link href="/price" className="text-ink-soft hover:text-brand-700 hover:underline">
                ตารางราคาทั้งหมด
              </Link>
            </li>
            <li>
              <Link href="/price/repair" className="text-ink-soft hover:text-brand-700 hover:underline">
                ราคาซ่อมแอร์แยกตามอาการ
              </Link>
            </li>
            <li>
              <Link href="/pm25" className="text-ink-soft hover:text-brand-700 hover:underline">
                ล้างแอร์สู้ฝุ่น PM2.5
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-ink-soft hover:text-brand-700 hover:underline">
                ภาพผลงานจริง
              </Link>
            </li>
            <li>
              <Link href="/case-study" className="text-ink-soft hover:text-brand-700 hover:underline">
                Case Study รายงานงานจริง
              </Link>
            </li>
          </ul>

          <h2 className="mt-8 text-sm font-bold tracking-wide text-ink uppercase">อื่น ๆ</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/answers" className="text-ink-soft hover:text-brand-700 hover:underline">
                คำตอบราคาและบริการจากช่าง
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ink-soft hover:text-brand-700 hover:underline">
                คลังความรู้เรื่องแอร์
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ink-soft hover:text-brand-700 hover:underline">
                รู้จักช่างอาร์ม
              </Link>
            </li>
            <li>
              <Link href="/en" className="text-ink-soft hover:text-brand-700 hover:underline">
                English
              </Link>
            </li>
            <li>
              <Link href="/zh" className="text-ink-soft hover:text-brand-700 hover:underline">
                中文
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
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">ติดต่อผม</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`} data-cta="footer-call" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">เบอร์หลัก</span>
                  {site.phone}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone2Tel}`} className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">เบอร์สำรอง</span>
                  {site.phone2}
                </span>
              </a>
            </li>
            <li>
              <a href={site.lineUrl} target="_blank" rel="noopener" data-cta="footer-line" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconLine className="mt-0.5 h-5 w-5 shrink-0 text-[#06C755]" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">LINE จองคิวงานแอร์</span>
                  {site.lineId}
                </span>
              </a>
            </li>
            <li>
              <a href={site.lineUrl2} target="_blank" rel="noopener" data-cta="footer-washer-line" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconLine className="mt-0.5 h-5 w-5 shrink-0 text-[#06C755]" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">LINE จองคิวล้างถังซักผ้า</span>
                  {site.lineId2}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-ink-soft">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              {site.daysLabel} {site.hours}
              <br />
              {site.closedNote}
            </li>
            <li className="flex items-start gap-2.5 text-ink-soft">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>
                {site.address.street}
                <br />
                {site.address.subDistrict} {site.address.district}
                <br />
                จ.{site.address.province} {site.address.postalCode}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName} · {site.displayUrl}
            {site.taxId && <> · เลขประจำตัวผู้เสียภาษี {site.taxId}</>}
          </p>
          <p>{site.legalNameEn} · ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ ย้ายแอร์ ล้างเครื่องซักผ้า · สันกำแพง เชียงใหม่</p>
        </div>
      </div>
    </footer>
  );
}
