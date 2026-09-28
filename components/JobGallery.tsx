import Image from "next/image";
import { type Job, type JobPhoto, jobPhotoCount } from "@/lib/jobs";
import { thaiDate } from "@/lib/lastmod";
import { photoAlt } from "@/lib/job-stories";
import { type Lang, PHASE, intlDate, jobTitle } from "@/lib/intl";

/**
 * รูปงานหนึ่งงาน แสดงเป็นกอง ก่อนล้าง ระหว่างล้าง และหลังล้าง
 *
 * ไม่จับคู่รูปต่อรูป เพราะการจับคู่ชิ้นต่อชิ้นเคยผิดมาแล้ว
 * ป้ายกำกับอยู่บนหัวกอง ไม่ใช่บนรูป เพื่อไม่ให้เข้าใจว่ารูปบนกับรูปล่างเป็นคู่กัน
 *
 * โชว์ครบทุกใบ ห้ามตัดจำนวน เพราะจำนวนรูปคือสิ่งที่บอกว่างานละเอียดแค่ไหน
 *
 * ไม่มีคำบรรยายใต้รูปแล้ว เพราะคำบรรยายชิ้นส่วนที่เคยใส่ไว้ผิดเยอะ
 * เจ้าของตรวจเองแล้วสั่งให้เอาออก รูปพูดแทนตัวเองได้อยู่แล้ว
 * จอเล็กใช้ 3 ช่อง จอใหญ่ 6 ช่อง เพื่อให้รูป 20-30 ใบยังดูไหวในหน้าเดียว
 */
function Row({
  label,
  tone,
  photos,
  unit = "รูป",
}: {
  unit?: string;
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
        <span className="text-ink-soft">{photos.length} {unit}</span>
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

/** bare = ไม่โชว์หัวการ์ด (ใช้ในหน้างานที่มีหัวเรื่องเดียวกันอยู่ด้านบนแล้ว) */
export function JobGallery({ job, bare = false, lang = "th" }: { job: Job; bare?: boolean; lang?: "th" | Lang }) {
  if (lang !== "th") return <IntlJobGallery job={job} lang={lang} />;
  return (
    // ใช้ในหน้างาน /kon-lang/[id] ส่วนหน้ารวมใช้การ์ด JobStoryCard ซึ่งถือ id job-xx ไว้แทน กันลิงก์เก่าแบบ #job-xx พัง
    <article className="card p-5 sm:p-7">
      {!bare && (<>
      <p className="flex flex-wrap items-center gap-x-2 text-xs font-bold text-accent">
        <span>{job.service}</span>
        <span className="text-ink-soft">·</span>
        <span>{thaiDate(job.date)}</span>
        <span className="text-ink-soft">·</span>
        <span className="text-ink-soft">งานนี้ถ่ายไว้ {jobPhotoCount(job)} รูป</span>
      </p>
      {/* ชื่องานมาจากข้อความในโพสต์ส่งงานของร้าน ไม่ใช่ให้ AI เดาจากรูป */}
      {job.summary && <h3 className="mt-2 text-lg leading-[1.5] font-bold text-ink">{job.summary}</h3>}
      </>)}
      <div className={bare ? "space-y-6" : "mt-6 space-y-6"}>
        {/* ป้ายกองใช้คำกริยาของงานนั้น งานติดตั้งจะได้ไม่ถูกเขียนว่าก่อนล้าง */}
        <Row label={`ก่อน${job.verb}`} tone="before" photos={job.before.map((x, i) => ({ ...x, alt: photoAlt(job, "before", i, x.alt) }))} />
        <Row label={`ระหว่าง${job.verb}`} tone="during" photos={job.during.map((x, i) => ({ ...x, alt: photoAlt(job, "during", i, x.alt) }))} />
        <Row label={`หลัง${job.verb}`} tone="after" photos={job.after.map((x, i) => ({ ...x, alt: photoAlt(job, "after", i, x.alt) }))} />
      </div>
    </article>
  );
}

/** แกลเลอรีเดียวกันสำหรับหน้าอังกฤษ/จีน (หัวเรื่องอยู่ในหน้าแล้ว จึงไม่มีหัวการ์ด) */
function IntlJobGallery({ job, lang }: { job: Job; lang: Lang }) {
  const ph = PHASE[lang];
  const unit = lang === "en" ? "photos" : "张";
  const base = `${jobTitle(job, lang)}, ${intlDate(job.date, lang)}`;
  const alt = (k: keyof typeof ph) => (x: JobPhoto, i: number) => ({ ...x, alt: `${base}, ${ph[k]} ${i + 1}` });
  return (
    <article className="card p-5 sm:p-7">
      <div className="space-y-6">
        <Row unit={unit} label={ph.before} tone="before" photos={job.before.map(alt("before"))} />
        <Row unit={unit} label={ph.during} tone="during" photos={job.during.map(alt("during"))} />
        <Row unit={unit} label={ph.after} tone="after" photos={job.after.map(alt("after"))} />
      </div>
    </article>
  );
}
