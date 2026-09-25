import Image from "next/image";
import Link from "next/link";
import { resolvePair, type FeaturedPair } from "@/lib/featured-pairs";
import { IconChevron } from "./Icons";

/**
 * แถบเทียบภาพก่อน–หลังบนหน้าแรก
 *
 * รูปสองใบวางคู่กันเสมอ ทั้งบนมือถือและจอใหญ่ เพราะการเทียบคือสาระทั้งหมดของบล็อกนี้
 * ถ้าปล่อยให้ซ้อนกันบนมือถือ คนจะเห็นทีละใบแล้วเทียบไม่ออก
 * ป้าย "ก่อน" กับ "หลัง" อยู่บนรูปเสมอ ไม่ใช่ใต้รูป กันการอ่านสลับเมื่อรูปสูงไม่เท่ากัน
 */
export function BeforeAfterPairs({
  pairs,
  eyebrow,
  heading,
  lead,
  tone = "white",
  columns = 2,
  ctaHref = "/case-study",
  ctaLabel = "อ่านรายงานก่อน–หลังทุกเคส",
}: {
  pairs: FeaturedPair[];
  eyebrow: string;
  heading: string;
  lead: string;
  tone?: "white" | "sand" | "dark";
  columns?: 2 | 3;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const items = pairs.map(resolvePair).filter((x) => x !== null);
  if (items.length === 0) return null;

  const dark = tone === "dark";
  const sectionClass = dark ? "section band-dark" : tone === "sand" ? "section bg-sand" : "section";
  const headClass = dark ? "text-white" : "";
  const leadClass = dark ? "text-brand-100" : "text-ink-soft";
  const cardClass = dark
    ? "flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/15"
    : "card flex h-full flex-col overflow-hidden";
  const partClass = dark ? "text-white" : "text-ink";
  const capClass = dark ? "text-brand-100" : "text-ink-soft";

  return (
    <section className={sectionClass}>
      <div className="wrap">
        <div className={columns === 3 ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className={`h2 mt-4 ${headClass}`}>{heading}</h2>
          <p className={`lead mt-3 ${leadClass}`}>{lead}</p>
        </div>

        <ul className={`mt-10 grid gap-5 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {items.map((it) => (
            <li key={`${it.slug}-${it.beforeIndex}`}>
              <Link href={`/case-study/${it.slug}`} className={`${cardClass} group transition-all hover:-translate-y-1`}>
                {/* กริดสองช่องคงที่ทุกขนาดจอ เพื่อให้เทียบภาพได้ตลอด */}
                <div className="grid grid-cols-2 gap-0.5 bg-slate-300">
                  {[
                    { img: it.before, label: "ก่อน" },
                    { img: it.after, label: "หลัง" },
                  ].map(({ img, label }) => (
                    <div key={label} className="relative">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={640}
                        height={640}
                        loading="lazy"
                        sizes="(max-width: 1023px) 50vw, 25vw"
                        className="aspect-square w-full object-cover"
                      />
                      <span className="absolute top-2 left-2 rounded-lg bg-[#04121F]/85 px-2.5 py-1 text-xs font-bold text-white">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold text-accent">{it.service}</span>
                  <span className={`mt-1.5 block text-[15px] leading-7 font-bold ${partClass}`}>{it.part}</span>
                  <span className={`mt-2 block text-sm leading-7 ${capClass}`}>{it.caption}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    อ่านรายงานเคสนี้
                    <IconChevron className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link href={ctaHref} className="btn-ghost">
            {ctaLabel}
            <IconChevron className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
