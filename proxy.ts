import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * เก็บสัญญาณ SEO จาก URL WordPress เดิมและตัด query เดิมออก
 * - ?page_id=238 คือหน้าล้างเครื่องซักผ้าของเว็บเก่า ชี้ไปหน้าที่รับช่วงเนื้อหาต่อ
 * - ?p= ?cat= ?feed= ?s= คือซาก permalink/ฟีดของ WordPress ที่ Googlebot ยังตามเก็บอยู่
 *   (เจอในรายงาน "รวบรวมข้อมูลแล้ว - ยังไม่ได้จัดทำดัชนี" 31 ส.ค. 2569)
 *   ชี้กลับหน้าแรกแบบตัด query ทิ้ง จะได้พ้นสถานะค้างและไม่เปลืองโควตา crawl
 * ห้ามจับ query อื่น (เช่น utm_*) เพราะใช้วัดแคมเปญตามปกติ
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.searchParams.get("page_id") === "238") {
    return NextResponse.redirect(
      new URL("/service/lang-washing-machine", request.url),
      308,
    );
  }
  // new URL("/") ไม่พ่วง query เดิม จึงไม่เกิดลูป (หน้าแรกไร้ query ไม่เข้า matcher)
  return NextResponse.redirect(new URL("/", request.url), 308);
}

export const config = {
  matcher: [
    { source: "/", has: [{ type: "query", key: "page_id" }] },
    { source: "/", has: [{ type: "query", key: "p" }] },
    { source: "/", has: [{ type: "query", key: "cat" }] },
    { source: "/", has: [{ type: "query", key: "feed" }] },
    { source: "/", has: [{ type: "query", key: "s" }] },
  ],
};
