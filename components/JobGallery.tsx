import Image from "next/image";
import { type Job } from "@/lib/jobs";
import { thaiDate } from "@/lib/lastmod";

/**
 * รูปงานหนึ่งงาน แสดงเป็นสองแถว กองก่อนล้าง และกองหลังล้าง
 *
 * ไม่จับคู่รูปต่อรูป เพราะการจับคู่ชิ้นต่อชิ้นเคยผิดมาแล้ว
 * แถวบนคือสภาพก่อนลงมือ แถวล่างคือหลังทำเสร็จ ของงานเดียวกัน
 * ป้ายกำกับอยู่บนหัวแถว ไม่ใช่บนรูป เพื่อไม่ให้เข้าใจว่ารูปบนกับรูปล่างเป็นคู่กัน
 */
function Row({ label, tone, photos }: { label: string; tone: "before" | "after"; photos: Job["before"] }) {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-bold">
        <span
          className={
            tone === "before"
              ? "inline-block rounded-lg bg-brand-600 px-2.5 py-1 text-xs text-white"
              : "inline-block rounded-lg bg-gradient-to-b from-ice to-accent px-2.5 py-1 text-xs text-[#04121F]"
          }
        >
          {label}
        </span>
        <span className="text-ink-soft">{photos.length} รูป</span>
      </p>
      <ul className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {photos.map((p) => (
          <li key={p.src} className="overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={p.src}
              alt={p.alt}
              width={560}
              height={560}
              loading="lazy"
              sizes="(max-width: 640px) 33vw, 16vw"
              className="aspect-square w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function JobGallery({ job }: { job: Job }) {
  return (
    <article className="card p-5 sm:p-7">
      <p className="text-xs font-bold text-accent">
        {job.service} · {thaiDate(job.date)}
      </p>
      {job.summary && <p className="mt-2 text-[15px] leading-8 text-ink-soft">{job.summary}</p>}
      <div className="mt-6 space-y-6">
        <Row label="ก่อนล้าง" tone="before" photos={job.before} />
        <Row label="หลังล้าง" tone="after" photos={job.after} />
      </div>
    </article>
  );
}
