import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand } from "@/components/Blocks";
import { IconCheck, IconChevron } from "@/components/Icons";
import { JobGallery } from "@/components/JobGallery";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { jobs, jobPhotoCount } from "@/lib/jobs";
import { casesForJob, coverOf, getJob, groups, jobGroup, jobsIn } from "@/lib/job-stories";
import { thaiDate } from "@/lib/lastmod";

/**
 * หน้าเรื่องของงานหนึ่งงาน รูปครบทุกใบ (29 ก.ย. 2569)
 *
 * ชื่องานมาจากโพสต์ส่งงานของร้าน สิ่งที่พบและสิ่งที่ทำมาจากรายงานเคสที่ผูกกับงานนี้ด้วยลายภาพ
 * งานที่ไม่มีรายงานเคสจะมีแค่ชื่องาน วันที่ และรูป ห้ามแต่งเนื้อเรื่องเพิ่มเอง
 */
type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJob((await params).id);
  if (!job) return {};
  const title = `${job.summary} ${thaiDate(job.date)}`;
  const description = `รูปจากหน้างานจริงในเชียงใหม่ ${jobPhotoCount(job)} รูป ${job.summary} ตั้งแต่สภาพเครื่องก่อน${job.verb} ระหว่าง${job.verb} จนถึงหลัง${job.verb}`;
  const cover = coverOf(job);
  return {
    title,
    description,
    alternates: { canonical: `/kon-lang/${job.id}` },
    ...share({ title, description, path: `/kon-lang/${job.id}`, image: cover }),
  };
}

export default async function JobPage({ params }: Props) {
  const job = getJob((await params).id);
  if (!job) notFound();
  const g = jobGroup(job);
  const group = groups[g];
  const list = jobsIn(g);
  const at = list.findIndex((j) => j.id === job.id);
  const newer = at > 0 ? list[at - 1] : undefined;
  const older = at < list.length - 1 ? list[at + 1] : undefined;
  const reports = casesForJob(job.id);
  const trail = [
    { name: "หน้าแรก", path: "/" },
    { name: "รูปงานก่อน–หลัง", path: "/kon-lang" },
    { name: job.summary, path: `/kon-lang/${job.id}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap pt-8 pb-10">
          <p className="eyebrow">
            {group.label} · {thaiDate(job.date)}
          </p>
          <h1 className="mt-5 max-w-3xl text-[clamp(1.8rem,1.25rem+2.2vw,2.6rem)] leading-[1.35] font-extrabold">
            {job.summary}
          </h1>
          <p className="lead mt-5 max-w-3xl">
            รูปจากงานนี้ทั้งหมด {jobPhotoCount(job)} รูป เรียงตั้งแต่สภาพเครื่องตอนผมไปถึง
            ระหว่าง{job.verb} จนถึงตอน{job.verb}เสร็จ
          </p>
        </section>
      </div>

      {reports.length > 0 && (
        <section className="section pt-2">
          <div className="wrap max-w-4xl space-y-5">
            <h2 className="h2">สิ่งที่พบและสิ่งที่ผมทำ</h2>
            {reports.map((r) => (
              <div key={r.slug} className="card p-6 sm:p-7">
                <h3 className="text-lg leading-[1.5] font-bold text-ink">{r.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-ink-soft">{r.finding}</p>
                <ul className="mt-4 space-y-2.5">
                  {r.actions.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                      <span className="text-[15px] leading-7 text-ink-soft">{a}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[15px] leading-8 font-semibold text-ink">{r.result}</p>
                <Link href={`/case-study/${r.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
                  อ่านรายงานเคสนี้ฉบับเต็ม
                  <IconChevron className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={reports.length > 0 ? "section bg-sand" : "section pt-2"}>
        <div className="wrap">
          <h2 className="h2 mb-6">รูปจากงานนี้ครบ {jobPhotoCount(job)} รูป</h2>
          <JobGallery job={job} bare />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {newer ? (
              <Link href={`/kon-lang/${newer.id}`} className="card group p-5 transition-all hover:shadow-lift">
                <span className="block text-xs font-bold text-accent">งานถัดไป · {thaiDate(newer.date)}</span>
                <span className="mt-1 block font-semibold text-ink group-hover:underline">{newer.summary}</span>
              </Link>
            ) : (
              <span />
            )}
            {older && (
              <Link href={`/kon-lang/${older.id}`} className="card group p-5 text-right transition-all hover:shadow-lift">
                <span className="block text-xs font-bold text-accent">งานก่อนหน้า · {thaiDate(older.date)}</span>
                <span className="mt-1 block font-semibold text-ink group-hover:underline">{older.summary}</span>
              </Link>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/kon-lang#${g}`} className="btn-ghost">
              ดู{group.label}ทั้งหมด {list.length} งาน
              <IconChevron className="h-4 w-4" />
            </Link>
            <Link href={`/service/${job.serviceSlug}`} className="btn-ghost">
              ราคาและรายละเอียดบริการ{job.service}
              <IconChevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="ให้เครื่องที่บ้านกลับมาสะอาดแบบนี้"
        subtitle="ส่งรูปเครื่องที่บ้านมาทาง LINE ได้ครับ ผมประเมินให้ก่อนโดยไม่คิดค่าใช้จ่าย และแจ้งราคาครบก่อนเริ่มงาน"
      />
    </>
  );
}
