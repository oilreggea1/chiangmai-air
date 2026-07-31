import Image from "next/image";
import { brands } from "@/lib/site";

/**
 * แถบยี่ห้อที่รับงาน
 *
 * โลโก้เป็นเครื่องหมายการค้าของผู้ผลิตแต่ละราย เว็บนี้ใช้เพื่อบอกว่ารับงานยี่ห้อใดบ้าง
 * ซึ่งเป็นการใช้เพื่อระบุตัวสินค้า ไม่ใช่การอ้างว่าเป็นตัวแทนหรือศูนย์บริการของแบรนด์
 * จึงต้องมีข้อความปฏิเสธความเกี่ยวข้องกำกับไว้เสมอ ห้ามตัดออก
 *
 * โลโก้ส่วนใหญ่เป็นตัวอักษรสีเข้ม จึงต้องวางบนแผ่นสีขาวเสมอ
 * ถ้าวางบนพื้นกรมท่าของ band-dark ตรง ๆ จะมองไม่เห็น
 */
export function BrandStrip({
  title = "ยี่ห้อที่ผมรับงาน",
  note = "ผมรับงานล้าง ซ่อม ติดตั้ง และย้ายแอร์ทุกยี่ห้อข้างต้น โดยไม่ได้เป็นตัวแทนจำหน่ายหรือศูนย์บริการของแบรนด์ใด เครื่องหมายการค้าทั้งหมดเป็นของเจ้าของแบรนด์นั้น ๆ",
}: {
  title?: string;
  note?: string;
}) {
  return (
    <div>
      <h3 className="text-center text-sm font-semibold tracking-wide uppercase opacity-80">{title}</h3>

      <ul className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
        {brands.map((b) => (
          <li
            key={b.name}
            className="flex h-16 items-center justify-center rounded-xl bg-white px-3 shadow-[0_1px_2px_rgb(17_26_46/0.06),0_6px_16px_-8px_rgb(17_26_46/0.25)] ring-1 ring-black/5"
          >
            {b.logo ? (
              <Image
                src={b.logo}
                alt={`โลโก้แอร์ ${b.name}`}
                width={160}
                height={48}
                loading="lazy"
                className="max-h-8 w-auto max-w-full object-contain"
              />
            ) : (
              <span className="text-center text-sm leading-tight font-bold text-ink">{b.name}</span>
            )}
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-6 opacity-70">{note}</p>
    </div>
  );
}
