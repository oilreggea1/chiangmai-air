import { CHANNELS, recordClick } from "@/lib/leads";

/**
 * รับสัญญาณตอนลูกค้ากดปุ่มโทรหรือปุ่ม LINE
 *
 * ต้องเป็น dynamic เพราะเขียนฐานข้อมูลทุกครั้ง ห้ามให้ Next แคช
 */
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
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
