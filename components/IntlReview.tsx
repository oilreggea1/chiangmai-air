import { reviews } from "@/lib/site";

/**
 * ความเห็นลูกค้าสำหรับหน้าอังกฤษ/จีน (29 ก.ย. 2569) ใช้เฉพาะรีวิวที่มีต้นฉบับบน Facebook เท่านั้น
 * ห้ามแปลหรือแต่งข้อความรีวิว แสดงตามต้นฉบับ (ตอนนี้มีใบเดียว เป็นภาษาอังกฤษอยู่แล้ว)
 */
export function IntlReview({ lang }: { lang: "en" | "zh-CN" }) {
  const list = reviews.filter((r) => "sourceUrl" in r && r.sourceUrl);
  if (list.length === 0) return null;
  const en = lang === "en";
  return (
    <section className="section" lang={lang}>
      <div className="wrap max-w-3xl">
        <p className="eyebrow">{en ? "From a customer" : "客户评价"}</p>
        <h2 className="h2 mt-4">{en ? "What a customer wrote" : "客户在 Facebook 上的评价"}</h2>
        <div className="mt-7 space-y-5">
          {list.map((r) => (
            <figure key={r.name} className="card p-6 sm:p-7">
              <p className="text-amber-500" aria-label={en ? `${r.rating} out of 5` : `${r.rating} 星（满分 5 星）`}>{"★".repeat(r.rating)}</p>
              <blockquote className="mt-3 text-[15px] leading-8 text-ink" lang={"lang" in r ? r.lang : undefined}>“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-ink-soft">
                {r.name} ·{" "}
                <a href={"sourceUrl" in r ? r.sourceUrl : undefined} target="_blank" rel="noopener" className="font-semibold text-brand-700 hover:underline">
                  {en ? "see the original review on Facebook" : "在 Facebook 查看原文（英文）"}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
