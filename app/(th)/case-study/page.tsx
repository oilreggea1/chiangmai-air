import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Blocks";
import { IconChevron } from "@/components/Icons";
import { workCases } from "@/lib/work-cases";

export const metadata: Metadata = {
  title: "Case Study ผลงานช่างแอร์เชียงใหม่ จากหน้างานจริง",
  description: "รวมผลงานจริงของช่างอาร์ม พร้อมสภาพก่อนทำ จุดที่ตรวจพบ ขั้นตอนการทำงาน และภาพผลลัพธ์หลังให้บริการ",
  alternates: { canonical: "/case-study" },
};

const trail = [{ name: "หน้าแรก", path: "/" }, { name: "Case Study", path: "/case-study" }];

export default function CaseStudyIndex() {
  return (
    <>
      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <header className="wrap max-w-4xl pt-8 pb-14">
          <p className="eyebrow">รวมผลงานจากหน้างานจริง</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.5rem]">ผลงานจริงจากช่างอาร์ม</h1>
          <p className="lead mt-5">รวมเคสจากหน้างานจริง ทั้งงานล้างแอร์ ซ่อมแอร์ ติดตั้ง และล้างเครื่องซักผ้า ดูสภาพที่พบ ขั้นตอนการทำงาน และผลหลังให้บริการ เพื่อช่วยให้คุณเลือกบริการได้ตรงกับเครื่องที่บ้าน</p>
        </header>
      </div>
      <section className="section pt-5">
        <ul className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workCases.map((item) => (
            <li key={item.slug}>
              <Link href={`/case-study/${item.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
                <Image src={item.images[0].src} alt={item.images[0].alt} width={720} height={540} sizes="(max-width: 640px) 100vw, 33vw" className="aspect-[4/3] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold text-brand-600">{item.service}</span>
                  <h2 className="mt-2 font-bold leading-7 group-hover:text-brand-700">{item.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-7 text-ink-soft">{item.finding}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">อ่านรายงาน<IconChevron className="h-4 w-4" /></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
