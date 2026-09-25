import { site } from "@/lib/site";
import { bookEveningUrl, bookSundayUrl } from "@/lib/line-book";
import { IconClock, IconLine } from "./Icons";

/**
 * กล่องจองคิวช่วงเย็นและวันอาทิตย์
 *
 * เหตุผลที่แยกปุ่มออกมาจากปุ่ม LINE ปกติ
 * ปุ่ม LINE เดิมเปิดแชทเปล่า คนส่วนใหญ่พิมพ์แค่ "สนใจครับ" แล้วต้องถามกลับหลายรอบ
 * ปุ่มสองปุ่มนี้เปิดแชทพร้อมแบบฟอร์มสั้นในช่องพิมพ์ ลูกค้าเติมวันกับงานแล้วกดส่งได้เลย
 * ยังแก้ข้อความได้ก่อนส่ง ไม่ใช่การส่งอัตโนมัติ
 *
 * วันอาทิตย์ต้องเขียนคำว่าจองล่วงหน้าติดไว้เสมอ ห้ามทำให้เข้าใจว่าโทรมาแล้วเข้าได้เลย
 */
export function SlotBooking({ className = "" }: { className?: string }) {
  return (
    <div className={`card p-6 sm:p-7 ${className}`}>
      <h3 className="flex items-start gap-2.5 text-lg leading-8 font-bold">
        <IconClock className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
        จองคิวนอกเวลางานไว้ล่วงหน้าได้เลย
      </h3>
      <p className="mt-3 text-[15px] leading-8 text-ink-soft">
        กดปุ่มที่ตรงกับช่วงที่คุณสะดวก แล้วเติมวันกับงานที่ต้องการในช่องพิมพ์ที่เตรียมไว้ให้
        ผมตอบกลับพร้อมคิวที่ว่างจริง และคิดราคาเท่ากับเวลาปกติทุกช่วง
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href={bookEveningUrl}
          target="_blank"
          rel="noopener"
          className="btn-line w-full px-5 py-3.5"
          data-cta="book-evening"
        >
          <IconLine className="h-5 w-5" />
          จองคิวเย็น 17:00 – 20:00
        </a>
        <a
          href={bookSundayUrl}
          target="_blank"
          rel="noopener"
          className="btn-ghost w-full px-5 py-3.5"
          data-cta="book-sunday"
        >
          <IconLine className="h-5 w-5 text-[#06C755]" />
          จองคิววันอาทิตย์
        </a>
      </div>

      <p className="mt-5 text-sm leading-7 text-ink-soft">
        สะดวกคุยทางโทรศัพท์มากกว่า โทรได้ที่{" "}
        <a href={`tel:${site.phoneTel}`} className="font-semibold text-brand-700 hover:underline" data-cta="book-call">
          {site.phone}
        </a>{" "}
        ในเวลา {site.daysLabel} {site.hours} · {site.sundayNote} จึงควรจองไว้ก่อนอย่างน้อยสองถึงสามวัน
      </p>
    </div>
  );
}

/**
 * รุ่นบรรทัดเดียวสำหรับวางบนพื้นเข้ม เช่นแถบ CTA ปิดท้ายทุกหน้า
 * ใช้เป็นลิงก์ข้อความ ไม่ใช่ปุ่ม เพื่อไม่ให้แย่งสายตาจากปุ่มโทรกับปุ่ม LINE ด้านบน
 */
export function SlotBookingLinks() {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
      <a
        href={bookEveningUrl}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1.5 font-semibold text-ice underline-offset-4 hover:underline"
        data-cta="band-book-evening"
      >
        <IconLine className="h-4 w-4" />
        จองคิวเย็นหลังเลิกงาน
      </a>
      <a
        href={bookSundayUrl}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1.5 font-semibold text-ice underline-offset-4 hover:underline"
        data-cta="band-book-sunday"
      >
        <IconLine className="h-4 w-4" />
        จองคิววันอาทิตย์ล่วงหน้า
      </a>
    </div>
  );
}
