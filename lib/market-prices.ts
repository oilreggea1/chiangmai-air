/**
 * ราคากลางแอร์ติดผนังอินเวอร์เตอร์ (เจ้าของสั่ง 29 ก.ย. 2569)
 *
 * **ไม่ใช่ราคาของร้าน** เป็นราคาขายปลีกรวมค่าติดตั้งมาตรฐานของร้านค้าปลีกเครื่องใช้ไฟฟ้ารายใหญ่ในกรุงเทพฯ
 * สำรวจจากหน้าเว็บร้านเมื่อ 29 ก.ย. 2569 (เจ้าของขอให้ใช้คำว่า "ราคากลาง" และไม่ระบุชื่อร้าน)
 * ร้านยังไม่ได้ให้ราคาขายเครื่องจริง ราคาของร้านแจ้งตามรุ่นทาง LINE เหมือนเดิม
 *
 * ชื่อรุ่นและราคาเป็นข้อเท็จจริง ไม่ได้คัดลอกรูปหรือคำบรรยายสินค้าของร้านนั้นมา
 * ราคาเปลี่ยนตามโปรโมชั่นทุกสัปดาห์ ควรสำรวจใหม่อย่างน้อยเดือนละครั้งแล้วแก้ asOf
 * ไฟล์นี้อยู่ใน SKIP_FILES ของ scripts/check-prices.mjs เพราะไม่ใช่ราคาที่ร้านคิด
 */
export const marketPricesAsOf = "2026-09-29";

export type MarketUnit = { brand: string; model: string; btu: number; price: number };
export type MarketBand = { size: string; units: MarketUnit[] };

export const marketPrices: MarketBand[] = [
  {
    size: "9,000",
    units: [
      { brand: "AUX", model: "ASW-09/DIC-1S", btu: 9500, price: 10990 },
      { brand: "Samsung", model: "AR60H09D1DWNST", btu: 9000, price: 13490 },
      { brand: "Carrier", model: "42TVDB010", btu: 9200, price: 14490 },
      { brand: "Hitachi", model: "RAK-PH10PCEST", btu: 9260, price: 14990 },
      { brand: "Mitsubishi Electric", model: "MSY-KA09VF", btu: 9212, price: 18600 },
      { brand: "Daikin", model: "FTKD09ZV2S", btu: 9200, price: 19390 },
    ],
  },
  {
    size: "12,000",
    units: [
      { brand: "TCL", model: "TAC-SA13CSV/ZB", btu: 12300, price: 10990 },
      { brand: "Midea", model: "MSNE13CRFN8", btu: 12000, price: 11990 },
      { brand: "Hisense", model: "AS13TRKD2T0", btu: 12010, price: 12190 },
      { brand: "Haier", model: "HSU-12VQEC05", btu: 12000, price: 12990 },
      { brand: "Samsung", model: "AR60H12D1DWNST", btu: 12000, price: 12990 },
      { brand: "LG", model: "IVY13AN.JU1", btu: 12283, price: 13990 },
      { brand: "Carrier", model: "42TVDB013", btu: 12000, price: 14690 },
      { brand: "Sharp", model: "AH-X13BB", btu: 12200, price: 15490 },
      { brand: "Hitachi", model: "RAK-QH13PCEST", btu: 12100, price: 15990 },
      { brand: "Mitsubishi Electric", model: "MSY-KA13VF", btu: 12283, price: 17900 },
      { brand: "Daikin", model: "FTKD12ZV2S", btu: 12300, price: 22290 },
    ],
  },
  {
    size: "18,000",
    units: [
      { brand: "Hisense", model: "AS18TRKD2T0", btu: 18000, price: 15590 },
      { brand: "TCL", model: "TAC-SA19CSV/ZB", btu: 18100, price: 15590 },
      { brand: "Midea", model: "MSNE19CRFN8", btu: 18000, price: 15990 },
      { brand: "AUX", model: "ASW-18/DIC-1S", btu: 18700, price: 16290 },
      { brand: "Haier", model: "HSU-18VQEC05", btu: 18000, price: 16990 },
      { brand: "LG", model: "IVY18AN.KU1", btu: 18084, price: 18990 },
      { brand: "Sharp", model: "AH-X18BB", btu: 18000, price: 20290 },
      { brand: "Carrier", model: "42TVDB018", btu: 18000, price: 21990 },
      { brand: "Hitachi", model: "RAK-QH18PCEST", btu: 18100, price: 22990 },
      { brand: "Samsung", model: "AR70F18D1DWNST", btu: 18000, price: 24990 },
      { brand: "Mitsubishi Electric", model: "MSY-KA18VF", btu: 17742, price: 25900 },
      { brand: "Daikin", model: "FTKD18ZV2S", btu: 18100, price: 31190 },
    ],
  },
  {
    size: "24,000",
    units: [
      { brand: "Comfee", model: "CFS-25VGSF", btu: 24000, price: 19990 },
      { brand: "AUX", model: "ASW-24/DIC-1S", btu: 24600, price: 21890 },
      { brand: "Haier", model: "HSU-24VQEC05", btu: 24000, price: 23990 },
      { brand: "TCL", model: "TAC-PRO24PE", btu: 23884, price: 25490 },
      { brand: "Hitachi", model: "RAK-QH24PCEST", btu: 22000, price: 27990 },
      { brand: "Carrier", model: "42TVDB026", btu: 24000, price: 31990 },
      { brand: "Mitsubishi Electric", model: "MSY-KA24VF", btu: 22519, price: 38500 },
      { brand: "Daikin", model: "FTKD24ZV2S", btu: 20500, price: 44990 },
    ],
  },
];
