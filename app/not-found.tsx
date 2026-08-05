import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { site, services, areas } from "@/lib/site";
import { IconPhone, IconChevron } from "@/components/Icons";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "ไม่พบหน้าที่คุณค้นหา",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  // เว็บมี root layout สามชุด หน้า 404 กลางจึงไม่มี layout ครอบ ต้องเรียก Shell เอง
  return (
    <Shell lang="th">
    <section className="section">
      <div className="wrap max-w-2xl text-center">
        <p className="text-6xl font-extrabold text-brand-200">404</p>
        <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">ไม่พบหน้าที่คุณค้นหา</h1>
        <p className="lead mt-4">
          หน้านี้อาจถูกย้ายหรือลบไปแล้ว กรุณาเลือกจากรายการด้านล่าง
          หรือติดต่อทางโทรศัพท์ได้โดยตรง
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`tel:${site.phoneTel}`} data-cta="404-call" className="btn-call">
            <IconPhone className="h-5 w-5" />
            โทร {site.phone}
          </a>
          <Link href="/" className="btn-ghost">
            กลับหน้าแรก
          </Link>
        </div>

        <ul className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/service/${s.slug}`}
                className="card flex items-center justify-between gap-3 px-5 py-4 transition-all hover:shadow-lift"
              >
                <span className="font-semibold">{s.name}เชียงใหม่</span>
                <IconChevron className="h-4 w-4 shrink-0 text-brand-500" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-7 text-ink-soft">
          พื้นที่ให้บริการ:{" "}
          {areas.map((a, i) => (
            <span key={a.slug}>
              {i > 0 && " · "}
              <Link href={`/area/${a.slug}`} className="text-brand-700 hover:underline">
                {a.name}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </section>
    </Shell>
  );
}
