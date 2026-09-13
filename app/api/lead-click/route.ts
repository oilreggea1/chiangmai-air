import { CHANNELS, recordClick } from "@/lib/leads";
import { site } from "@/lib/site";

/**
 * รับสัญญาณตอนลูกค้ากดปุ่มโทรหรือปุ่ม LINE
 *
 * ต้องเป็น dynamic เพราะเขียนฐานข้อมูลทุกครั้ง ห้ามให้ Next แคช
 */
export const dynamic = "force-dynamic";

/** เพดานขนาด body — ค่าจริงที่หน้าเว็บส่งยาวไม่เกิน ~150 ไบต์ */
const MAX_BODY = 1024;

/**
 * รับเฉพาะคำขอที่มาจากหน้าเว็บตัวเอง (13 ก.ย. 2569)
 *
 * เส้นทางนี้เขียนฐานข้อมูลได้โดยไม่ต้องล็อกอิน ใครก็ยิงซ้ำ ๆ จากนอกเว็บได้
 * ผลเสียไม่ใช่ข้อมูลรั่ว แต่คือตัวเลขที่เจ้าของใช้ตัดสินใจเพี้ยน และแถวขยะในฐานข้อมูล
 * เบราว์เซอร์ใส่ Origin มาให้เองทั้ง sendBeacon และ fetch จึงกันของนอกเว็บได้โดยไม่กระทบปุ่มจริง
 * ยังกันคนตั้งใจยิงด้วย curl ไม่ได้ (ปลอม Origin ได้) แต่ตัดการยิงข้ามเว็บทั้งหมดออกไป
 */
function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(site.url).host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!sameOrigin(request)) return new Response(null, { status: 204 });

    const raw = await request.text();
    if (raw.length > MAX_BODY) return new Response(null, { status: 204 });

    const body = JSON.parse(raw);
    const channel = String(body?.channel ?? "");
    const cta = String(body?.cta ?? "unknown");
    const page = String(body?.page ?? "/");

    // รับเฉพาะช่องทางที่รู้จัก กันคนยิงค่ามั่วเข้ามาทำให้ตัวเลขเพี้ยน
    if (!CHANNELS.includes(channel as never)) {
      return new Response(null, { status: 204 });
    }

    await recordClick({ channel, cta, page });
    return new Response(null, { status: 204 });
  } catch {
    // ห้ามให้การเก็บสถิติล้มเหลวไปกระทบลูกค้าที่กำลังจะโทร
    // ปุ่มต้องทำงานต่อได้เสมอแม้ฐานข้อมูลล่ม จึงตอบ 204 เหมือนเดิม
    return new Response(null, { status: 204 });
  }
}
