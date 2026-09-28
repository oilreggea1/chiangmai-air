import Image from "next/image";
import Link from "next/link";
import { type Job, jobPhotoCount } from "@/lib/jobs";
import { casesForJob, coverOf } from "@/lib/job-stories";
import { thaiDate } from "@/lib/lastmod";
import { IconChevron } from "./Icons";

/**
 * การ์ดเล่าเรื่องหนึ่งงาน (29 ก.ย. 2569) ใช้บนหน้าแรกและหน้ารวม /kon-lang
 * รูปครบทุกใบอยู่ในหน้างานนั้น /kon-lang/[id] การ์ดนี้จึงไม่ได้ตัดรูปทิ้ง แค่พาไปดู
 *
 * รูปปกใช้รูปเดียว ไม่วางก่อน–หลังคู่กัน เพราะเคยจับคู่รูปชิ้นต่อชิ้นผิดมาแล้ว
 */
export function JobStoryCard({ job }: { job: Job }) {
  const cover = coverOf(job);
  const n = jobPhotoCount(job);
  const report = casesForJob(job.id)[0];
  return (
    <Link
      href={`/kon-lang/${job.id}`}
      id={`job-${job.id}`}
      className="card group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift"
    >
      {cover && (
        <div className="relative">
          <Image
            src={cover.src}
            alt={cover.alt}
            width={640}
            height={480}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="aspect-[4/3] w-full object-cover"
          />
          <span className="absolute top-3 left-3 rounded-lg bg-brand-600 px-2.5 py-1 text-xs font-bold text-white">
            ก่อน{job.verb}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-x-2 text-xs font-bold text-accent">
          <span>{job.service}</span>
          <span className="text-ink-soft">·</span>
          <span>{thaiDate(job.date)}</span>
        </p>
        <h3 className="mt-2 text-lg leading-[1.5] font-bold text-ink">{job.summary}</h3>
        {report && <p className="mt-2 text-[15px] leading-7 text-ink-soft">{report.finding}</p>}
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          ก่อน{job.verb} {job.before.length} รูป
          {job.during.length > 0 && ` · ระหว่าง${job.verb} ${job.during.length} รูป`}
          {` · หลัง${job.verb} ${job.after.length} รูป`}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-700">
          ดูงานนี้ครบทั้ง {n} รูป
          <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
