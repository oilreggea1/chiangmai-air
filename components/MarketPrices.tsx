import Image from "next/image";
import { marketPrices, marketPricesAsOf } from "@/lib/market-prices";
import { thaiDate } from "@/lib/lastmod";

/**
 * ตารางราคากลางแอร์ติดผนังอินเวอร์เตอร์ บนหน้าร้านแอร์ (29 ก.ย. 2569)
 * เจ้าของสั่งให้ใช้คำว่า "ราคากลาง" และบอกให้ชัดว่าราคาเปลี่ยนแปลงตลอดเวลา
 * ห้ามเขียนให้เข้าใจว่าเป็นราคาขายของร้าน และห้ามใส่ชื่อร้านต้นทาง
 *
 * image = รูปประกอบที่ไม่ติดโลโก้ยี่ห้อ (เจ้าของสั่ง) ถ้าไม่ส่งมาจะไม่แสดงรูป
 */
const fmt = (n: number) => n.toLocaleString("en-US");

export function MarketPrices({ image }: { image?: { src: string; alt: string; credit?: string } }) {
  const asOf = thaiDate(marketPricesAsOf);
  return (
    <section className="section bg-sand" id="market-price">
      <div className="wrap">
        <div className={image ? "grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" : ""}>
          <div className="max-w-3xl">
            <p className="eyebrow">ราคากลาง ณ {asOf}</p>
            <h2 className="h2 mt-4">ราคากลางแอร์ติดผนังอินเวอร์เตอร์ ปี 2569</h2>
            <p className="lead mt-3">
              ราคากลางจากร้านค้าปลีกเครื่องใช้ไฟฟ้ารายใหญ่ รวมค่าติดตั้งมาตรฐานแล้ว
              ใช้เทียบงบประมาณเบื้องต้นก่อนเลือกรุ่น
            </p>
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">
              ราคามีการเปลี่ยนแปลงตลอดเวลาตามรุ่นและโปรโมชั่นของแต่ละช่วง
              ราคาในตารางเป็นราคากลาง ณ วันที่ {asOf} ไม่ใช่ราคาขายของร้าน
              ราคาเครื่องที่ผมจำหน่ายแจ้งตามรุ่นทาง LINE ก่อนสั่งซื้อทุกครั้ง
            </p>
          </div>
          {image && (
            <figure className="overflow-hidden rounded-3xl ring-1 ring-slate-200">
              <Image src={image.src} alt={image.alt} width={1260} height={840} sizes="(max-width: 1024px) 100vw, 35vw" className="aspect-[4/3] w-full object-cover" />
              {image.credit && <figcaption className="bg-white px-4 py-2 text-xs text-ink-soft">{image.credit}</figcaption>}
            </figure>
          )}
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {marketPrices.map((b) => {
            const lo = Math.min(...b.units.map((u) => u.price));
            const hi = Math.max(...b.units.map((u) => u.price));
            return (
              <div key={b.size} className="card p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold">{b.size} BTU</h3>
                  <span className="text-sm font-semibold text-brand-700">
                    {fmt(lo)}–{fmt(hi)} บาท
                  </span>
                </div>
                <ul className="mt-3 divide-y divide-slate-100">
                  {b.units.map((u) => (
                    <li key={u.model} className="flex items-center justify-between gap-3 py-2">
                      <span className="min-w-0">
                        <span className="block text-[15px] font-semibold text-ink">{u.brand}</span>
                        <span className="block text-xs text-ink-soft">
                          {u.model} · {fmt(u.btu)} BTU
                        </span>
                      </span>
                      <span className="shrink-0 text-[15px] font-bold tabular-nums text-ink">{fmt(u.price)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm leading-7 text-ink-soft">
          ราคากลางรวมค่าติดตั้งมาตรฐานของร้านค้าปลีก ส่วนค่าติดตั้งของผมอยู่ในตารางค่าติดตั้งด้านบน
          หากซื้อเครื่องมาเองจากร้านใดก็ตาม ผมรับติดตั้งในอัตราเดียวกัน
        </p>
      </div>
    </section>
  );
}
