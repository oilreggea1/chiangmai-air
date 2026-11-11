import Link from "next/link";
import { p } from "@/lib/site";
import { bookPreSmokeUrl } from "@/lib/line-book";
import { IconChevron, IconClock, IconLine } from "./Icons";

/**
 * การ์ด "จองคิวล้างแอร์ก่อนหมอกควัน" (11 พ.ย. 2569)
 *
 * เจ้าของให้จัดการเอง จึงทำแบบราคาปกติ ไม่มีส่วนลด และไม่รับปากวันที่แน่นอน
 * (ส่วนลด/โปรต้องให้เจ้าของกำหนดก่อนเท่านั้น) ราคาดึงจาก p ห้ามพิมพ์ตัวเลขเอง
 * ไม่เขียนอ้างผลต่อสุขภาพ — บอกแค่เรื่องคิวและความพร้อมของเครื่อง
 * ใช้ที่หน้าแรก (ห่อ PromoWindow) และหน้า /pm25
 */
export function PreSmokeBooking({ showPm25Link = true }: { showPm25Link?: boolean }) {
  return (
    <div className="card overflow-hidden border-2 border-brand-200 bg-brand-50/60 p-6 sm:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2"><IconClock className="h-4 w-4" />ก่อนเข้าฤดูหมอกควัน</p>
          <h2 className="mt-3 text-xl font-extrabold sm:text-2xl">จองคิวล้างแอร์ช่วง ธ.ค.–ม.ค. ก่อนคิวแน่น</h2>
          <p className="mt-3 text-[15px] leading-8 text-ink-soft">
            ช่วง ก.พ.–เม.ย. คิวล้างแอร์แน่นทั้งจังหวัด ล้างก่อนช่วงนั้นเลือกวันได้ง่ายกว่า
            และแอร์พร้อมใช้งานหนักเมื่อต้องปิดห้องเปิดแอร์ทั้งวัน
            ราคาปกติ ล้างแอร์ติดผนังเครื่องละ {p.wash.std} บาท ตั้งแต่ 3 เครื่องขึ้นไปเครื่องละ {p.wash.stdBulk} บาท
            ไม่คิดค่าเดินทาง ผมยืนยันวันที่ว่างจริงให้ทาง LINE
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={bookPreSmokeUrl} target="_blank" rel="noopener" className="btn-line" data-cta="presmoke-line">
            <IconLine className="h-5 w-5" />
            จองคิวทาง LINE
          </a>
          {showPm25Link && (
            <Link href="/pm25" className="btn-ghost" data-cta="presmoke-pm25">
              ดูการดูแลแอร์ช่วงหมอกควัน
              <IconChevron className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
