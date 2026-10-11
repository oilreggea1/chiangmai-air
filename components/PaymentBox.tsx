import { site } from "@/lib/site";
import { IconCheck } from "./Icons";

/**
 * กล่อง "จ่ายเงินยังไง / ได้เอกสารอะไร" ของหน้าราคาอังกฤษและจีน (11 ต.ค. 2569)
 *
 * ลูกค้าต่างชาติเพิ่มขึ้น และมักถามเรื่องนี้ทาง LINE ก่อนตัดสินใจ เดิมคำตอบซ่อนอยู่ในคำถามท้ายหน้า
 * ทุกบรรทัดเป็นข้อเท็จจริงที่เว็บยืนยันไว้แล้วที่อื่น (FAQ ราคา, หน้าเงื่อนไขบริการ, siteVat)
 * ห้ามเติมช่องทางที่ร้านยังไม่ได้ยืนยัน เช่น PromptPay บัตรเครดิต หรือใบเสร็จภาษาอังกฤษ
 */
const copy = {
  en: {
    h: "How payment works",
    lead: "No deposit and nothing to pay up front. You pay once, at the end, after you have checked the work.",
    rows: [
      ["When", "After the job is finished and you have seen the result."],
      ["How", "Cash in Thai baht, or a transfer to a Thai bank account. No Thai bank account? Cash is fine."],
      ["How much", "The total I quoted before starting. If I find something extra on site, I stop and ask you before doing it."],
      ["Documents", `A receipt in the company name (${site.legalNameEn}). VAT registered: a full VAT tax invoice is available — send the company name and tax ID before the visit.`],
    ],
  },
  "zh-CN": {
    h: "付款方式与单据",
    lead: "不收订金，不需要预付。完工后您检查满意，再一次付清。",
    rows: [
      ["什么时候付", "完工后，您看过结果再付款。"],
      ["怎么付", "泰铢现金，或转账到泰国银行账户。没有泰国银行账户也没关系，付现金即可。"],
      ["付多少", "开工前报给您的总价。现场若发现需要额外处理的问题，我会先停下来问您，同意后才做。"],
      ["单据", `开具公司抬头收据（${site.legalNameEn}）。已登记增值税，可开具增值税发票，请在上门前提供公司名称和税号。`],
    ],
  },
} as const;

export function PaymentBox({ lang }: { lang: "en" | "zh-CN" }) {
  const t = copy[lang];
  return (
    <section className="section pt-0" lang={lang} id="payment">
      <div className="wrap max-w-3xl">
        <h2 className="h2">{t.h}</h2>
        <p className="lead mt-3">{t.lead}</p>
        <dl className="card mt-7 divide-y divide-slate-100">
          {t.rows.map(([k, v]) => (
            <div key={k} className="flex items-start gap-3 p-5 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-5">
              <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint sm:hidden" />
              <div className="sm:contents">
                <dt className="font-bold text-ink">{k}</dt>
                <dd className="mt-1 text-[15px] leading-8 text-ink-soft sm:mt-0">{v}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
