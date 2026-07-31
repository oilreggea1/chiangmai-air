import Image from "next/image";
import type { PortfolioCategory } from "@/lib/site";

/**
 * ตารางภาพผลงานพร้อมคำบรรยายใต้ภาพ
 * คำบรรยายที่มองเห็นได้ช่วยทั้งคนอ่านและ Google Images เพราะ Google
 * ใช้ข้อความรอบ ๆ ภาพประกอบการเข้าใจว่าภาพนั้นคืออะไร ไม่ได้ดูแค่ alt
 */
export function PhotoGrid({ photos }: { photos: PortfolioCategory["photos"] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {photos.map((g, i) => (
        <li key={g.src} className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
          <figure>
            <Image
              src={g.src}
              alt={g.alt}
              width={800}
              height={800}
              priority={i < 4}
              loading={i < 4 ? undefined : "lazy"}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="aspect-square w-full bg-slate-100 object-cover"
            />
            <figcaption className="px-3 py-2.5 text-xs leading-5 text-ink-soft">
              {g.alt}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
