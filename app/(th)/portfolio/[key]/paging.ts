import type { PortfolioCategory } from "@/lib/site";

/** จำนวนภาพต่อหนึ่งหน้าของหมวด — คุมไม่ให้ HTML หน้าเดียวหนักเกินไป */
export const PER_PAGE = 96;

export function pageCount(total: number) {
  return Math.max(1, Math.ceil(total / PER_PAGE));
}

export function pageSlice(photos: PortfolioCategory["photos"], page: number) {
  return photos.slice((page - 1) * PER_PAGE, page * PER_PAGE);
}
