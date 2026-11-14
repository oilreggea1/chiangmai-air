/**
 * ราคาแอร์ติดผนังอินเวอร์เตอร์ "พร้อมติดตั้ง" ของร้าน
 *
 * 14 พ.ย. 2569 เจ้าของสั่ง "ไปเอาราคาเดียวกับ homepro ได้เลย" → ตารางนี้เป็นราคาขายของร้านแล้ว (ไม่ใช่ราคากลาง)
 * ที่มา: ราคาขายหน้าเว็บโฮมโปร หมวดแอร์ติดผนัง (ป้าย "ฟรีติดตั้ง") ใช้ราคาขายบนป้าย ไม่ใช่ "ราคาสุดท้าย" หลังคูปอง/บัตร
 * รุ่นที่โฮมโปรไม่มีขายแล้วตัดออก ห้ามเดาราคา · ห้ามเขียนชื่อห้างต้นทางบนเว็บ
 * ราคารวมงานติดตั้งมาตรฐานของร้าน (ขาแขวน ท่อไม่เกิน 4 ม. รางครอบ แวคคั่ม) ประกันงานติดตั้ง 1 ปี
 * ราคาเปลี่ยนตามรอบ ต้องสำรวจใหม่อย่างน้อยเดือนละครั้งแล้วแก้ asOf (งานตั้งเวลา chiangmai-air-market-price-monthly)
 * ไฟล์นี้อยู่ใน SKIP_FILES ของ scripts/check-prices.mjs เพราะเป็นราคารายรุ่น แหล่งเดียวของตัวเลขชุดนี้คือไฟล์นี้
 */
export const marketPricesAsOf = "2026-11-14";

/** url = หน้าผลิตภัณฑ์ทางการของแบรนด์ (ตรวจแล้วว่าหน้านั้นมีรหัสรุ่นนี้จริง) ห้ามใส่ลิงก์เว็บร้านค้า */
export type MarketUnit = { brand: string; model: string; btu: number; price: number; url?: string };
export type MarketBand = { size: string; units: MarketUnit[] };

export const marketPrices: MarketBand[] = [
  {
    size: "9,000",
    units: [
      { brand: "AUX", model: "ASW-09/DIC-1S", btu: 9500, price: 10990, url: "https://www.auxair.com/th/en/product/ca2026.html" },
      { brand: "Comfee", model: "CFS-10VGSF", btu: 9360, price: 10490 },
      { brand: "Samsung", model: "AR60H09D1DWNST", btu: 9000, price: 12890, url: "https://www.samsung.com/th/support/model/AR60H09D1DWNST/" },
      { brand: "Hitachi", model: "RAK-PH10PCEST", btu: 9260, price: 14490, url: "https://www.hitachi-homeappliances.com/th-th/products/air-conditioners/standard-inverter-series/rak-ph10pcest.html" },
      { brand: "Carrier", model: "42TVDB010", btu: 9200, price: 15900, url: "https://carrierthailand.com/copper-seal/" },
      { brand: "Daikin", model: "FTKD09ZV2S", btu: 9200, price: 18430, url: "https://www.daikin.co.th/th/product/FTKD-ZV2S" },
      { brand: "Mitsubishi Electric", model: "MSY-KA09VF", btu: 9212, price: 18600, url: "https://www.mitsubishi-kyw.co.th/Product/For-Home/conditioner/KT-Series/5527.aspx" },
    ],
  },
  {
    size: "12,000",
    units: [
      { brand: "TCL", model: "TAC-SA13CSV/ZB", btu: 12300, price: 10290, url: "https://www.tcl.com/th/th/air-conditioners/savein-series" },
      { brand: "Comfee", model: "CFS-13VGSF", btu: 12000, price: 11490 },
      { brand: "Midea", model: "MSNE13CRFN8", btu: 12000, price: 11990, url: "https://www.midea.com/th/air-conditioner/residential/single-split/12-000-btu-numen-series-residential-air-conditioner.msne-13crfn8-id-msne-13crfn8-od" },
      { brand: "Hisense", model: "AS13TRKD2T0", btu: 12010, price: 11990 },
      { brand: "Samsung", model: "AR60H12D1DWNST", btu: 12000, price: 12990, url: "https://www.samsung.com/th/air-conditioners/wall-mount/ar60h-ai-windfree-eco-f-ar60h12d1dwn/" },
      { brand: "LG", model: "IVY13AN.JU1", btu: 12283, price: 13990, url: "https://www.lg.com/th/support/product-support/cs-IVY13AN.JU1/" },
      { brand: "Hitachi", model: "RAK-QH13PCEST", btu: 12100, price: 16490, url: "https://www.hitachi-homeappliances.com/th-th/products/air-conditioners/standard-inverter-series/rak-qh13pcest.html" },
      { brand: "Carrier", model: "42TVDB013", btu: 12000, price: 16900, url: "https://carrierthailand.com/copper-seal/" },
      { brand: "Mitsubishi Electric", model: "MSY-KA13VF", btu: 12283, price: 18900, url: "https://www.mitsubishi-kyw.co.th/Product/For-Home/conditioner/KT-Series/5528.aspx" },
      { brand: "Daikin", model: "FTKD12ZV2S", btu: 12300, price: 20515, url: "https://www.daikin.co.th/th/product/FTKD-ZV2S" },
    ],
  },
  {
    size: "18,000",
    units: [
      { brand: "Hisense", model: "AS18TRKD2T0", btu: 18000, price: 15390 },
      { brand: "TCL", model: "TAC-SA19CSV/ZB", btu: 18100, price: 15490, url: "https://www.tcl.com/th/th/air-conditioners/savein-series" },
      { brand: "AUX", model: "ASW-18/DIC-1S", btu: 18700, price: 16490, url: "https://www.auxair.com/th/en/product/ca2026.html" },
      { brand: "Samsung", model: "AR60H18D1DWNST", btu: 18000, price: 18990 },
      { brand: "Haier", model: "HSU-18VQEC05", btu: 18000, price: 19990, url: "https://www.haier.com/th/air-conditioners/hsu-18vqec05.shtml" },
      { brand: "LG", model: "IVY18AN.KU1", btu: 18084, price: 19990, url: "https://www.lg.com/th/support/product-support/cs-IVY18AN.KU1/" },
      { brand: "Sharp", model: "AH-X18BB", btu: 18000, price: 20290, url: "https://th.sharp/th/aircare/airconditioner/non-pci/AH-X18BB" },
      { brand: "Carrier", model: "42TVDB018", btu: 18000, price: 24900, url: "https://carrierthailand.com/copper-seal/" },
      { brand: "Daikin", model: "FTKD18ZV2S", btu: 18100, price: 30825, url: "https://www.daikin.co.th/th/product/FTKD-ZV2S" },
    ],
  },
  {
    size: "24,000",
    units: [
      { brand: "Hisense", model: "AS24TRKD2T", btu: 23500, price: 20390 },
      { brand: "Comfee", model: "CFS-25VGSF", btu: 24000, price: 20400, url: "https://www.feelcomfee.com/th/products/airconditioner/cfs-25vgsf" },
      { brand: "TCL", model: "TAC-PRO24PE", btu: 23884, price: 25490, url: "https://www.tcl.com/th/th/air-conditioners/t-prope" },
      { brand: "Hitachi", model: "RAK-QH24PCEST", btu: 22000, price: 28990, url: "https://www.hitachi-homeappliances.com/th-th/products/air-conditioners/standard-inverter-series/rak-qh24pcest.html" },
      { brand: "Carrier", model: "42TVDB026", btu: 24000, price: 34900, url: "https://carrierthailand.com/copper-seal/" },
      { brand: "Mitsubishi Electric", model: "MSY-KA24VF", btu: 22519, price: 40000, url: "https://www.mitsubishi-kyw.co.th/Product/For-Home/conditioner/KT-Series/5530-(1).aspx" },
      { brand: "Daikin", model: "FTKD24ZV2S", btu: 20500, price: 46390, url: "https://www.daikin.co.th/th/product/FTKD-ZV2S" },
    ],
  },
];
