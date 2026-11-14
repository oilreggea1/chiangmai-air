import Image from "next/image";
import Link from "next/link";
import { IconChevron, IconLine } from "./Icons";
import { marketPrices, marketPricesAsOf } from "@/lib/market-prices";
import { bookAirPackageUrl } from "@/lib/line-book";
import { thaiDate } from "@/lib/lastmod";
import { p, btu } from "@/lib/site";

/**
 * ตารางราคาแอร์ติดผนังอินเวอร์เตอร์พร้อมติดตั้ง ของร้าน
 *
 * 14 พ.ย. 2569 เจ้าของสั่งให้ขายราคาเดียวกับห้างค้าปลีกรายใหญ่ → ตารางนี้เป็นราคาขายของร้านแล้ว (เดิม 29 ก.ย. เป็น "ราคากลาง")
 * ห้ามใส่ชื่อห้างต้นทาง · ต้องบอกวันที่ของราคา และให้ยืนยันราคา/สต็อกทาง LINE ก่อนสั่งซื้อ
 * ข้อมูลรายรุ่นอยู่ที่ lib/market-prices.ts ที่เดียว
 *
 * image = รูปประกอบที่ไม่ติดโลโก้ยี่ห้อ (เจ้าของสั่ง) ถ้าไม่ส่งมาจะไม่แสดงรูป
 */
const fmt = (n: number) => n.toLocaleString("en-US");

export function MarketPrices({
  image,
  shopLink = false,
  pageLink = true,
}: {
  image?: { src: string; alt: string; credit?: string };
  shopLink?: boolean;
  /** ปุ่มไปหน้าราคาแอร์พร้อมติดตั้ง ปิดเมื่อแสดงบนหน้านั้นเอง */
  pageLink?: boolean;
}) {
  const asOf = thaiDate(marketPricesAsOf);
  return (
    <section className="section bg-sand" id="market-price">
      <div className="wrap">
        <div className={image ? "grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" : ""}>
          <div className="max-w-3xl">
            <p className="eyebrow">ราคา ณ {asOf}</p>
            <h2 className="h2 mt-4">ราคาแอร์ติดผนังอินเวอร์เตอร์ พร้อมติดตั้ง</h2>
            <p className="lead mt-3">
              ราคาในตารางรวมตัวเครื่องและงานติดตั้งมาตรฐานของผมแล้ว ได้แก่ ขาแขวน ท่อน้ำยาไม่เกิน 4 เมตร รางครอบ
              และแวคคั่มระบบครบทุกขั้นตอน งานติดตั้งรับประกัน 1 ปี ตัวเครื่องรับประกันตามเงื่อนไขของผู้ผลิต
            </p>
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">
              ราคาแอร์ปรับตามรอบโปรโมชั่นของแต่ละยี่ห้อ ราคาในตารางเป็นราคา ณ วันที่ {asOf}
              กดปุ่ม LINE ข้างรุ่นที่สนใจ ผมยืนยันราคาและวันติดตั้งให้ก่อนสั่งซื้อทุกครั้ง
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
                  {[...b.units].sort((x, y) => x.price - y.price).map((u) => (
                    <li key={u.model} className="flex items-center justify-between gap-3 py-2">
                      <span className="min-w-0">
                        <span className="block text-[15px] font-semibold text-ink">{u.brand}</span>
                        <span className="block text-xs text-ink-soft">
                          {/* ลิงก์หน้าทางการของแบรนด์ให้ลูกค้าดูรูปและสเปกเอง แทนการเอารูปสินค้ามาใช้ (ติดลิขสิทธิ์) */}
                          {u.url ? (
                            <a href={u.url} target="_blank" rel="noopener nofollow" className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-700">
                              {u.model}
                            </a>
                          ) : (
                            u.model
                          )}{" "}
                          · {fmt(u.btu)} BTU
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="text-[15px] font-bold tabular-nums text-ink">{fmt(u.price)}</span>
                        <a
                          href={bookAirPackageUrl(u)}
                          target="_blank"
                          rel="noopener"
                          data-cta="air-package-line"
                          aria-label={`สั่ง ${u.brand} ${u.model} พร้อมติดตั้งทาง LINE`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#06C755] text-white hover:brightness-95"
                        >
                          <IconLine className="h-4 w-4" />
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm leading-7 text-ink-soft">
          กดที่รหัสรุ่นเพื่อดูรูปและสเปกจากเว็บไซต์ทางการของแต่ละแบรนด์ หน้างานที่ต้องเดินท่อยาวกว่า 4 เมตร
          ผมวัดระยะและแจ้งส่วนเกินให้ทราบก่อนเริ่มงาน รุ่นที่ไม่มีในตารางสอบถามทาง LINE ได้
          หากซื้อเครื่องมาเองจากร้านใดก็ตาม ผมรับติดตั้ง {btu.installSmall} BTU จุดละ {p.install.small} บาท
          และ {btu.installLarge} BTU จุดละ {p.install.large} บาท
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {pageLink && (
            <Link href="/price/air-install" className="btn-ghost" data-cta="market-to-air-install">
              ดูเงื่อนไขแอร์พร้อมติดตั้งทั้งหมด
              <IconChevron className="h-4 w-4" />
            </Link>
          )}
          {shopLink && (
            <Link href="/service/khai-air" className="btn-ghost" data-cta="market-to-khai-air">
              ร้านแอร์ ใหม่และมือสอง
              <IconChevron className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
