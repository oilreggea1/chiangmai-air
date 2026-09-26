import Image from "next/image";
import { beforeAfter, type BeforeAfter } from "@/lib/before-after";
import { thaiDate } from "@/lib/lastmod";

/**
 * กริดคู่ภาพก่อน–หลัง ใช้ข้อมูลจาก lib/before-after.ts ซึ่งตรวจด้วยตาแล้วทุกคู่
 *
 * รูปสองใบวางคู่กันเสมอทุกขนาดจอ เพราะการเทียบคือสาระทั้งหมด
 * ถ้าปล่อยให้ซ้อนกันบนมือถือ คนจะเห็นทีละใบแล้วเทียบไม่ออก
 */
export function BeforeAfterGrid({
  items = beforeAfter,
  columns = 2,
  tone = "white",
}: {
  items?: BeforeAfter[];
  columns?: 2 | 3;
  tone?: "white" | "sand" | "dark";
}) {
  if (items.length === 0) return null;
  const dark = tone === "dark";
  return (
    <ul className={`grid gap-5 ${columns === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2"}`}>
      {items.map((b) => (
        <li
          key={b.id}
          className={
            dark
              ? "flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/15"
              : "card flex h-full flex-col overflow-hidden"
          }
        >
          <div className="grid grid-cols-2 gap-0.5 bg-slate-300">
            {[
              { src: `/work/ba/ba-${b.id}-before.jpg`, alt: b.beforeAlt, label: "ก่อน" },
              { src: `/work/ba/ba-${b.id}-after.jpg`, alt: b.afterAlt, label: "หลัง" },
            ].map((im) => (
              <div key={im.label} className="relative">
                <Image
                  src={im.src}
                  alt={im.alt}
                  width={640}
                  height={640}
                  loading="lazy"
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="aspect-square w-full object-cover"
                />
                <span className="absolute top-2 left-2 rounded-lg bg-[#04121F]/85 px-2.5 py-1 text-xs font-bold text-white">
                  {im.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col p-5">
            <span className="text-xs font-bold text-accent">
              {b.service} · {thaiDate(b.date)}
            </span>
            <span className={`mt-1.5 block text-[15px] leading-7 font-bold ${dark ? "text-white" : "text-ink"}`}>
              {b.part}
            </span>
            <span className={`mt-2 block text-sm leading-7 ${dark ? "text-brand-100" : "text-ink-soft"}`}>
              {b.beforeAlt}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
