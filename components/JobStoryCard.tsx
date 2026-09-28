import Image from "next/image";
import Link from "next/link";
import { type Job, jobPhotoCount } from "@/lib/jobs";
import { casesForJob, coverOf, photoAlt } from "@/lib/job-stories";
import { thaiDate } from "@/lib/lastmod";
import { IconChevron } from "./Icons";
import { type Lang, PHASE, intlDate, jobTitle } from "@/lib/intl";

/**
 * การ์ดเล่าเรื่องหนึ่งงาน (29 ก.ย. 2569) ใช้บนหน้าแรกและหน้ารวม /kon-lang
 * รูปครบทุกใบอยู่ในหน้างานนั้น /kon-lang/[id] การ์ดนี้จึงไม่ได้ตัดรูปทิ้ง แค่พาไปดู
 *
 * รูปปกใช้รูปเดียว ไม่วางก่อน–หลังคู่กัน เพราะเคยจับคู่รูปชิ้นต่อชิ้นผิดมาแล้ว
 */
export function JobStoryCard({ job, lang = "th" }: { job: Job; lang?: "th" | Lang }) {
  if (lang !== "th") return <IntlJobStoryCard job={job} lang={lang} />;
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
            alt={photoAlt(job, job.before[0] ? "before" : "after", 0, cover.alt)}
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

/**
 * การ์ดเดียวกันสำหรับหน้าอังกฤษ/จีน ชื่องานแปลจากโพสต์ส่งงานใน lib/intl.ts
 * ไม่โชว์ข้อความรายงานเคส เพราะรายงานมีเฉพาะภาษาไทย
 */
function IntlJobStoryCard({ job, lang }: { job: Job; lang: Lang }) {
  const cover = coverOf(job);
  const n = jobPhotoCount(job);
  const ph = PHASE[lang];
  const en = lang === "en";
  const title = jobTitle(job, lang);
  const base = en ? "/en/work" : "/zh/work";
  const svc = job.serviceSlug === "lang-washing-machine" ? (en ? "Washing machine" : "洗衣机") : job.serviceSlug === "tid-tang-air" ? (en ? "Installation" : "安装") : (en ? "Aircon" : "空调");
  return (
    <Link href={`${base}/${job.id}`} id={`job-${job.id}`} className="card group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift">
      {cover && (
        <div className="relative">
          <Image
            src={cover.src}
            alt={`${title}, ${intlDate(job.date, lang)}, ${ph.before}`}
            width={640}
            height={480}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="aspect-[4/3] w-full object-cover"
          />
          <span className="absolute top-3 left-3 rounded-lg bg-brand-600 px-2.5 py-1 text-xs font-bold text-white">{ph.before}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-x-2 text-xs font-bold text-accent">
          <span>{svc}</span>
          <span className="text-ink-soft">·</span>
          <span>{intlDate(job.date, lang)}</span>
        </p>
        <h3 className="mt-2 text-lg leading-[1.5] font-bold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          {ph.before} {job.before.length}
          {job.during.length > 0 && ` · ${ph.during} ${job.during.length}`}
          {` · ${ph.after} ${job.after.length}`}
          {en ? " photos" : " 张"}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-700">
          {en ? `See all ${n} photos` : `查看全部 ${n} 张照片`}
          <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
