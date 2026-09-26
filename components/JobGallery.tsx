import Image from "next/image";
import { type Job, type JobPhoto, jobPhotoCount } from "@/lib/jobs";
import { thaiDate } from "@/lib/lastmod";

/**
 * รูปงานหนึ่งงาน แสดงเป็นกอง ก่อนล้าง ระหว่างล้าง และหลังล้าง
 *
 * ไม่จับคู่รูปต่อรูป เพราะการจับคู่ชิ้นต่อชิ้นเคยผิดมาแล้ว
 * ป้ายกำกับอยู่บนหัวกอง ไม่ใช่บนรูป เพื่อไม่ให้เข้าใจว่ารูปบนกับรูปล่างเป็นคู่กัน
 *
 * โชว์ครบทุกใบ ห้ามตัดจำนวน เพราะจำนวนรูปคือสิ่งที่บอกว่างานละเอียดแค่ไหน
 * จอเล็กใช้ 3 ช่อง จอใหญ่ 6 ช่อง เพื่อให้รูป 20-30 ใบยังดูไหวในหน้าเดียว
 */
function Row({
  label,
  tone,
  photos,
}: {
  label: string;
  tone: "before" | "during" | "after";
  photos: JobPhoto[];
}) {
  if (photos.length === 0) return null;
  const chip =
    tone === "before"
      ? "bg-brand-600 text-white"
      : tone === "during"
        ? "bg-brand-200 text-brand-900"
        : "bg-gradient-to-b from-ice to-accent text-[#04121F]";
  return (
    <div>
      <p className="flex flex-wrap items-center gap-2 text-sm font-bold">
        <span className={`inline-block rounded-lg px-2.5 py-1 text-xs ${chip}`}>{label}</span>
        <span className="text-ink-soft">{photos.length} รูป</span>
      </p>
      <ul className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {photos.map((p) => (
          <li key={p.src} className="overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={p.src}
              alt={p.alt}
              width={520}
              height={520}
              loading="lazy"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 11vw"
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
      <p className="flex flex-wrap items-center gap-x-2 text-xs font-bold text-accent">
        <span>{job.service}</span>
        <span className="text-ink-soft">·</span>
        <span>{thaiDate(job.date)}</span>
        <span className="text-ink-soft">·</span>
        <span className="text-ink-soft">งานนี้ถ่ายไว้ {jobPhotoCount(job)} รูป</span>
      </p>
      {job.summary && <p className="mt-2 text-[15px] leading-8 text-ink-soft">{job.summary}</p>}
      <div className="mt-6 space-y-6">
        <Row label="ก่อนล้าง" tone="before" photos={job.before} />
        <Row label="ระหว่างล้าง" tone="during" photos={job.during} />
        <Row label="หลังล้าง" tone="after" photos={job.after} />
      </div>
    </article>
  );
}
