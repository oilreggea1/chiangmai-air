import Image from "next/image";
import { brands } from "@/lib/site";

/**
 * แถบยี่ห้อที่รับงาน
 *
 * โลโก้เป็นเครื่องหมายการค้าของผู้ผลิตแต่ละราย เว็บนี้ใช้เพื่อบอกว่ารับงานยี่ห้อใดบ้าง
 * ซึ่งเป็นการใช้เพื่อระบุตัวสินค้า ไม่ใช่การอ้างว่าเป็นตัวแทนหรือศูนย์บริการของแบรนด์
 * จึงต้องมีข้อความปฏิเสธความเกี่ยวข้องกำกับไว้เสมอ ห้ามตัดออก
 *
 * เดิมวางโลโก้สีเต็มบนแผ่นสีขาว 29 แผ่น ซึ่งบนจอคอมกลายเป็นลายพร้อยแย่งความสนใจ
 * จากเนื้อหาหลัก จึงเปลี่ยนเป็นทำทุกยี่ห้อให้เป็นสีเดียวกันแบบผนังโลโก้พาร์ทเนอร์
 * ได้ทั้งความสงบและทำให้ยี่ห้อที่ไม่มีไฟล์โลโก้ (แสดงเป็นชื่อ) กลืนไปกับตัวที่มีโลโก้
 *
 * filter brightness(0) ทำให้ทุกสีในไฟล์กลายเป็นดำก่อน แล้ว invert ตามถ้าอยู่บนพื้นเข้ม
 * วิธีนี้ใช้ได้กับทุกไฟล์ไม่ว่าต้นฉบับจะสีอะไร รวมถึง PNG ที่แก้สีทีละ path ไม่ได้
 */
export function BrandStrip({
  tone = "dark",
  title = "ยี่ห้อที่ผมรับงาน",
  note = "ผมรับงานล้าง ซ่อม ติดตั้ง และย้ายแอร์ทุกยี่ห้อข้างต้น โดยไม่ได้เป็นตัวแทนจำหน่ายหรือศูนย์บริการของแบรนด์ใด เครื่องหมายการค้าทั้งหมดเป็นของเจ้าของแบรนด์นั้น ๆ",
}: {
  tone?: "dark" | "light";
  title?: string;
  note?: string;
}) {
  const mark =
    tone === "dark"
      ? "opacity-85 [filter:brightness(0)_invert(1)]"
      : "opacity-75 [filter:brightness(0)]";
  // ชื่อยี่ห้อเป็นตัวหนังสือจริง ต้องผ่านคอนทราสต์ ไม่ใช่จางตามโลโก้ได้
  // ink ที่ 55% บนพื้น sand ได้แค่ 3.90 ต่ำกว่าเกณฑ์ 4.5 จึงต้องใช้ 70% (6.11)
  const label = tone === "dark" ? "text-white/70" : "text-ink/70";

  return (
    <div>
      <h3 className="text-center text-sm font-semibold tracking-wide text-ink-soft uppercase">{title}</h3>

      {/*
        มือถือไหลเป็น 2 แถวเลื่อนแนวนอน เพราะเรียงเป็นตารางแล้วสูงถึง 730px
        จอ sm ขึ้นไปกลับเป็นตารางที่เห็นครบในครั้งเดียว
      */}
      <ul
        className="mt-6 grid auto-cols-[6.5rem] grid-flow-col grid-rows-2 items-center gap-x-6 gap-y-5
                   overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                   sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-6 sm:grid-rows-none
                   sm:gap-x-5 sm:gap-y-4 sm:overflow-visible sm:pb-0 md:grid-cols-8 lg:grid-cols-10"
      >
        {brands.map((b) => (
          <li key={b.name} className="flex h-8 items-center justify-center sm:h-7">
            {b.logo ? (
              <Image
                src={b.logo}
                alt={`โลโก้แอร์ ${b.name}`}
                width={160}
                height={48}
                loading="lazy"
                className={`max-h-[1.375rem] w-auto max-w-full object-contain transition-opacity ${mark}`}
              />
            ) : (
              <span
                className={`text-center text-[0.72rem] leading-tight font-bold tracking-wide sm:text-[0.68rem] ${label}`}
              >
                {b.name}
              </span>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-center text-xs text-ink-soft sm:hidden">เลื่อนดูยี่ห้อทั้งหมดได้</p>

      <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-6 text-ink-soft">{note}</p>
    </div>
  );
}
