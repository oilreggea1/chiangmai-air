/**
 * เคสไหนมาจากงานไหน เพื่อดึงรูปทั้งงานมาแสดงในหน้ารายงานเคส
 *
 * **ที่มา** จับคู่ด้วยการเทียบลายภาพ (perceptual hash) ระหว่างรูปในเคส
 * กับรูปงานที่ลงเว็บจริง ไม่ใช่การเดาจากวันที่ ทุกเคสในตารางตรงอย่างน้อย 86%
 *
 * งานหนึ่งงานจับคู่กับเคสได้เคสเดียว ถ้ามีสองเคสแย่งงานเดียวกัน
 * (เพราะเป็นบ้านหลังเดียวที่มีหลายเครื่อง) จะให้เคสที่ตรงมากที่สุดไป
 * อีกเคสใช้รูปชุดเดิมของตัวเองต่อไป กันไม่ให้รูปชุดเดียวกันโผล่สองหน้า
 *
 * สร้างจาก /Users/mac/case-to-job.json ห้ามแก้ด้วยมือ
 */
export const caseToJob: Record<string, string> = {
  "beko-premium-strip-wash-2569-06": "06",
  "foam-coil-wash-2569-05": "04",
  "haier-outdoor-coil-wash-2569-05": "02",
  "hangdong-electrolux-frontload-2569-07": "52",
  "hangdong-hitachi-topload-2569-08": "55",
  "lg-dual-inverter-wash-2569-06": "10",
  "lg-frontload-2569-08": "56",
  "lg-smart-inverter-topload-2569-07": "53",
  "maejo-samsung-topload-2569-08": "59",
  "midea-chione-install-2569-06": "07",
  "midea-two-units-install-2569-06": "09",
  "mueang-haier-topload-2569-08": "58",
  "mueang-premium-strip-wash-2569-06": "11",
  "mueang-samsung-wash-2569-05": "03",
  "mueang-sharp-gauge-check-wash-2569-05": "01",
  "nong-pa-khrang-ceiling-unit-check-2569-06": "14",
  "padaet-topload-2569-08": "60",
  "san-kamphaeng-midea-multi-wash-2569-06": "12",
  "shophouse-lg-wash-2569-05": "05",
  "topload-2569-07": "54",
};
