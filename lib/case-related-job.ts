/**
 * เคสแอร์ -> งานเต็มในหน้า /kon-lang ของการเข้าบริการครั้งเดียวกัน (29 ก.ย. 2569)
 *
 * เคสแอร์ส่วนใหญ่พูดถึงเครื่องเดียว แต่การเข้าบริการครั้งนั้นล้างหลายเครื่อง
 * จึงห้ามยกรูปทั้งงานมาใส่ในหน้าเคส (รูปจะไม่ตรงชื่อเคส เจ้าของทักแล้ว 28 ก.ย.)
 * ใช้วิธีวางลิงก์ไปดูรูปครบทั้งงานแทน ชื่องานที่โชว์มาจากโพสต์ส่งงานของร้าน
 *
 * จับคู่ด้วยลายภาพของรูปในเคสเทียบกับรูปต้นทางของแต่ละโพสต์ ทุกเคสตรงกับโพสต์เดียว
 * เคสที่ผูกรูปทั้งงานไว้แล้วใน case-to-job.ts ไม่ต้องอยู่ในตารางนี้
 */
export const caseRelatedJob: Record<string, string> = {
  "air-drain-hose-sediment": "a05",
  "air-drain-tray-clean-result": "a09",
  "beko-wall-wash-2569-06": "a06",
  "foam-coil-wash-2569-05": "a04",
  "haier-outdoor-coil-wash-2569-05": "a02",
  "lg-dual-inverter-wash-2569-06": "a09",
  "midea-new-unit-install-2569-06": "a08",
  "mitsubishi-mr-slim-wash-2569-06": "a06",
  "mueang-four-units-wash-2569-06": "a10",
  "mueang-samsung-wash-2569-05": "a03",
  "mueang-sharp-gauge-check-wash-2569-05": "a01",
  "nong-pa-khrang-ceiling-unit-check-2569-06": "a13",
  "outdoor-condenser-pressure-wash": "a10",
  "san-kamphaeng-midea-multi-wash-2569-06": "a11",
  "shophouse-lg-wash-2569-05": "a05",
  "standard-air-wash-room-protection": "a06",
  "toshiba-inverter-wash-2569-05": "a02",
  "wall-air-evaporator-dark-deposit": "a02",
  "wall-air-filter-heavy-dust": "a06",
};
