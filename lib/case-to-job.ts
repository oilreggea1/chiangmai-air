/**
 * เคสไหนมาจากโพสต์ไหน เพื่อดึงรูปทั้งงานมาแสดงในหน้ารายงานเคส
 *
 * **ที่มา** จับคู่ด้วยการเทียบลายภาพ (perceptual hash) ระหว่างรูปในเคส
 * กับรูปที่ดึงมาจากเพจแบบทีละโพสต์ ทุกเคสในตารางนี้ตรงครบทุกใบ ไม่ใช่การเดาจากวันที่
 *
 * เคสที่ไม่อยู่ในตารางคือเคสที่ยังผูกไม่ได้ เช่นโพสต์เดียวมีสองเคส (จะได้รูปซ้ำกันสองหน้า)
 * หรือโพสต์นั้นมีรูปก่อน/หลังน้อยเกินเกณฑ์ เคสพวกนั้นใช้รูปชุดเดิมของตัวเองไปก่อน
 *
 * สร้างจาก /Users/mac/case-to-job.json ห้ามแก้ด้วยมือ
 */
export const caseToJob: Record<string, string> = {
  "foam-coil-wash-2569-05": "04",
  "lg-dual-inverter-wash-2569-06": "09",
  "midea-chione-install-2569-06": "07",
  "midea-two-units-install-2569-06": "08",
  "mueang-premium-strip-wash-2569-06": "10",
  "mueang-samsung-wash-2569-05": "03",
  "mueang-sharp-gauge-check-wash-2569-05": "01",
  "nong-pa-khrang-ceiling-unit-check-2569-06": "13",
  "san-kamphaeng-midea-multi-wash-2569-06": "11",
  "shophouse-lg-wash-2569-05": "05",
};
