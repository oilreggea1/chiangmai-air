import type { Metadata } from "next";
import Link from "next/link";
import { site, p, btu, coverage, coverageTotal } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { share } from "@/lib/seo";
import { Breadcrumbs, CtaBand } from "./Blocks";
import { IconCheck, IconChevron, IconLine, IconPhone } from "./Icons";

/**
 * ตารางเงื่อนไขบริการ: รวมอะไร ประกันกี่วัน ค่าใช้จ่ายที่อาจเพิ่ม ค่าเดินทาง (4 ต.ค. 2569)
 *
 * ทำเพราะวัดฝั่ง AI แล้วพบว่า ChatGPT / Perplexity / Google AI Mode เลือกร้านเรา
 * เฉพาะเมื่อคำถามเป็นเรื่องราคาและความชัดเจนของเงื่อนไข จึงรวมข้อเท็จจริงทั้งหมดไว้ในตารางเดียว
 * ให้ AI และลูกค้าหยิบไปเทียบได้ทันที
 *
 * กติกา:
 * - ราคาดึงจาก p / btu เท่านั้น
 * - ประกันใช้ตามที่เจ้าของกำหนด 29 ก.ย. 2569 ขอบเขตคือ "น้ำหยด" ห้ามขยาย
 * - งานย้ายแอร์และเติมน้ำยารับประกัน 30 วัน (เจ้าของกำหนด 4 ต.ค. 2569) เติมน้ำยาครอบคลุมอาการเดิมกลับมาและน้ำหยด ส่วนงานย้ายยังไม่ได้ระบุขอบเขต
 * - ห้ามพาดพิงร้านอื่น ส่วน "คำถามก่อนนัด" เขียนเป็นคำถามกลางที่ใช้ถามช่างเจ้าใดก็ได้
 */

export type TermsLang = "th" | "en" | "zh";

const PATH: Record<TermsLang, string> = { th: "/ngueankhai-borikan", en: "/en/service-terms", zh: "/zh/service-terms" };
const languages = { "th-TH": PATH.th, "en-US": PATH.en, "zh-CN": PATH.zh, "x-default": PATH.th };

type Row = { name: string; price: string; includes: string; warranty: string };

const cur = { th: (x: string) => `${x} บาท`, en: (x: string) => `${x} THB`, zh: (x: string) => `${x} 泰铢` };

function rows(l: TermsLang): Row[] {
  const b = cur[l];
  if (l === "en")
    return [
      { name: `Wall unit clean, ${btu.washStd} BTU`, price: `${b(p.wash.std)} per unit · ${b(p.wash.stdBulk)} each for 3+`, includes: "Two-layer protective sheeting, filters and front panel, indoor and outdoor coils, blower wheel jet-washed, disinfectant spray, free refrigerant pressure check", warranty: "30 days against water dripping" },
      { name: `Large wall unit clean, ${btu.washBig} BTU`, price: `${b(p.wash.big)} per unit · ${b(p.wash.bigBulk)} each for 2+`, includes: "Same scope as the standard clean", warranty: "30 days against water dripping" },
      { name: "Premium Full Wash (full strip-down)", price: `${b(p.wash.premium)} per unit, depends on BTU`, includes: "Every part taken off and washed separately, blower wheel removed, coil cleaner and disinfectant spray", warranty: "60 days against water dripping" },
      { name: "Suspended / 4-way cassette clean", price: `From ${b(p.wash.suspended)} / from ${b(p.wash.cassette)}`, includes: "Floor and furniture covered, panels and filters washed separately, coil and drain tray washed, disinfectant spray, drain pump checked", warranty: "30 days against water dripping" },
      { name: "Repair", price: `Diagnostic ${b(p.repair.diagnostic)}, credited back if you go ahead`, includes: "Fault found on site, parts priced before any work starts", warranty: "30 days on the repair" },
      { name: "Refrigerant top-up (R32 / R410A)", price: `${b(p.repair.refrigerantPerLb)} per lb`, includes: "Pressure measured first, no top-up if the level is fine", warranty: "30 days if the same symptom returns or water drips" },
      { name: "Installation", price: `${btu.installSmall} BTU ${b(p.install.small)} · ${btu.installLarge} BTU ${b(p.install.large)}`, includes: "Mounting bracket, insulated pipe up to 4 m, trunking, full vacuum, cooling and leak test", warranty: "1 year if the unit is bought from us · 6 months for your own unit" },
      { name: "Relocation / removal", price: `Move ${b(p.install.relocate)} · removal only ${b(p.install.removeOnly)}`, includes: "Refrigerant pumped back first, old wall hole sealed, standard-length parts, vacuum and test at the new spot", warranty: "30 days" },
      { name: "Washing machine drum clean", price: `Top loader from ${b(p.washer.topLoad)} · front loader from ${b(p.washer.frontLoad)}`, includes: "Drum and parts taken out and washed, about 3 hours per machine", warranty: "30 days" },
      { name: "Used aircon", price: "Quoted per model", includes: "Checked and tested before handover", warranty: "1 month on the unit" },
    ];
  if (l === "zh")
    return [
      { name: `壁挂式清洗 ${btu.washStd} BTU`, price: `每台 ${b(p.wash.std)} · 3 台以上每台 ${b(p.wash.stdBulk)}`, includes: "铺两层防护布、清洗滤网和面板、室内外机盘管、冲洗贯流风轮、喷消毒剂、免费检测冷媒压力", warranty: "滴水保修 30 天" },
      { name: `大型壁挂式清洗 ${btu.washBig} BTU`, price: `每台 ${b(p.wash.big)} · 2 台以上每台 ${b(p.wash.bigBulk)}`, includes: "范围与标准清洗相同", warranty: "滴水保修 30 天" },
      { name: "深度拆洗 Premium Full Wash", price: `每台 ${b(p.wash.premium)}，视 BTU 而定`, includes: "所有部件拆下分别清洗、拆下风轮、喷盘管清洁剂和消毒剂", warranty: "滴水保修 60 天" },
      { name: "吊顶式 / 四面出风嵌入式清洗", price: `${b(p.wash.suspended)} 起 / ${b(p.wash.cassette)} 起`, includes: "遮盖地面和家具、面板与滤网拆下清洗、清洗盘管和接水盘、喷消毒剂、检查排水泵", warranty: "滴水保修 30 天" },
      { name: "维修", price: `检测费 ${b(p.repair.diagnostic)}，决定维修则全额抵扣`, includes: "现场查找故障，配件开工前报价", warranty: "维修保修 30 天" },
      { name: "补充冷媒（R32 / R410A）", price: `每磅 ${b(p.repair.refrigerantPerLb)}`, includes: "先测压力，不缺不加", warranty: "30 天，原症状复发或滴水" },
      { name: "安装", price: `${btu.installSmall} BTU ${b(p.install.small)} · ${btu.installLarge} BTU ${b(p.install.large)}`, includes: "支架、4 米以内保温铜管、线槽、完整抽真空、制冷与漏点测试", warranty: "在本店购机 1 年 · 自备机 6 个月" },
      { name: "移机 / 拆机", price: `移机 ${b(p.install.relocate)} · 仅拆机 ${b(p.install.removeOnly)}`, includes: "先回收冷媒、封补旧墙洞、标准长度配件、新位置抽真空并测试", warranty: "30 天" },
      { name: "洗衣机拆洗", price: `波轮式 ${b(p.washer.topLoad)} 起 · 滚筒式 ${b(p.washer.frontLoad)} 起`, includes: "拆出内桶和部件清洗，每台约 3 小时", warranty: "30 天" },
      { name: "二手空调", price: "按型号报价", includes: "交付前检查并试机", warranty: "整机保修 1 个月" },
    ];
  return [
    { name: `ล้างแอร์ติดผนัง ${btu.washStd} BTU`, price: `เครื่องละ ${b(p.wash.std)} · 3 เครื่องขึ้นไป เครื่องละ ${b(p.wash.stdBulk)}`, includes: "ปูผ้าใบ 2 ชั้น ล้างฟิลเตอร์และหน้ากาก คอยล์เย็น คอยล์ร้อน ฉีดล้างใบพัดกรงกระรอก ฉีดน้ำยาฆ่าเชื้อ ตรวจวัดน้ำยาโดยไม่คิดค่าใช้จ่าย", warranty: "น้ำหยด 30 วัน" },
    { name: `ล้างแอร์ติดผนัง ${btu.washBig} BTU`, price: `เครื่องละ ${b(p.wash.big)} · 2 เครื่องขึ้นไป เครื่องละ ${b(p.wash.bigBulk)}`, includes: "ขอบเขตงานเท่าการล้างมาตรฐาน", warranty: "น้ำหยด 30 วัน" },
    { name: "ถอดล้างทั้งชุด Premium Full Wash", price: `เครื่องละ ${b(p.wash.premium)} ${p.wash.premiumNote}`, includes: "ถอดชิ้นส่วนล้างแยกทุกชิ้น ถอดใบพัดกรงกระรอกออกมาล้าง ฉีดน้ำยาทำความสะอาดคอยล์และน้ำยาฆ่าเชื้อ", warranty: "น้ำหยด 60 วัน" },
    { name: "ล้างแอร์แขวน / แอร์ 4 ทิศทาง", price: `เริ่ม ${b(p.wash.suspended)} / เริ่ม ${b(p.wash.cassette)}`, includes: "คลุมพื้นและเฟอร์นิเจอร์ ถอดหน้ากากและแผ่นกรองล้างแยก ล้างคอยล์และถาดน้ำทิ้ง ฉีดน้ำยาฆ่าเชื้อ ตรวจปั๊มน้ำทิ้ง", warranty: "น้ำหยด 30 วัน" },
    { name: "ซ่อมแอร์", price: `ค่าตรวจเช็ค ${b(p.repair.diagnostic)} หักคืนเมื่อซ่อม`, includes: "ตรวจหาสาเหตุหน้างาน แจ้งราคาอะไหล่ก่อนเริ่มซ่อม", warranty: "งานซ่อม 30 วัน" },
    { name: "เติมน้ำยาแอร์ R32 / R410A", price: `ปอนด์ละ ${b(p.repair.refrigerantPerLb)}`, includes: "วัดแรงดันให้ดูก่อน ไม่พร่องไม่เติม", warranty: "30 วัน กรณีอาการเดิมกลับมาหรือน้ำหยด" },
    { name: "ติดตั้งแอร์", price: `${btu.installSmall} BTU ${b(p.install.small)} · ${btu.installLarge} BTU ${b(p.install.large)}`, includes: "ขาแขวน ท่อน้ำยาหุ้มฉนวนไม่เกิน 4 เมตร รางครอบ แวคคั่มระบบ ทดสอบความเย็นและรอยรั่ว", warranty: "ซื้อเครื่องกับร้าน 1 ปี · เครื่องของลูกค้า 6 เดือน" },
    { name: "ย้ายแอร์ / ถอดแอร์", price: `ถอดและติดตั้งที่ใหม่ ${b(p.install.relocate)} · ถอดอย่างเดียว ${b(p.install.removeOnly)}`, includes: "เก็บน้ำยากลับเข้าเครื่องก่อนถอด อุดรูผนังเดิม อุปกรณ์ระยะมาตรฐาน แวคคั่มและทดสอบที่จุดใหม่", warranty: "30 วัน" },
    { name: "ล้างเครื่องซักผ้า", price: `ฝาบนเริ่ม ${b(p.washer.topLoad)} · ฝาหน้าเริ่ม ${b(p.washer.frontLoad)}`, includes: "ถอดถังและชิ้นส่วนออกมาล้าง ใช้เวลาประมาณ 3 ชั่วโมงต่อเครื่อง", warranty: "30 วัน" },
    { name: "แอร์มือสอง", price: "แจ้งราคาตามรุ่น", includes: "ตรวจสภาพและทดสอบก่อนส่งมอบ", warranty: "ตัวเครื่อง 1 เดือน" },
  ];
}

const area = `${coverage.length}`;

const T = {
  th: {
    title: "ล้างแอร์ ซ่อม ติดตั้ง รวมอะไรบ้าง ประกันกี่วัน ค่าเดินทาง | เงื่อนไขบริการ",
    desc: `ตารางเงื่อนไขบริการของ${site.name}: ราคา รายการที่รวมในค่าบริการ ระยะรับประกัน ค่าใช้จ่ายที่อาจเพิ่ม และไม่มีค่าเดินทางใน ${area} อำเภอ ${coverageTotal} ตำบลของเชียงใหม่`,
    crumbs: [{ name: "หน้าแรก", path: "/" }, { name: "เงื่อนไขบริการ", path: PATH.th }],
    eyebrow: "ข้อมูลจากผู้ให้บริการโดยตรง",
    h1: "งานแต่ละแบบรวมอะไร รับประกันกี่วัน และมีค่าใช้จ่ายใดเพิ่มได้บ้าง",
    lead: `สรุปเงื่อนไขของงานล้าง ซ่อม ติดตั้ง ย้ายแอร์ และล้างเครื่องซักผ้าไว้ในตารางเดียว ราคาเป็นราคาที่ชำระจริง ไม่มีค่าเดินทางในพื้นที่บริการ ${area} อำเภอ ${coverageTotal} ตำบล`,
    head: ["งาน", "ราคา", "รวมอยู่ในค่าบริการ", "รับประกัน"],
    tableCaption: "เงื่อนไขบริการแยกตามประเภทงาน",
    extraH: "ค่าใช้จ่ายที่อาจเพิ่ม และแจ้งก่อนเริ่มงาน",
    extras: [
      "งานติดตั้งหรือย้ายที่ต้องใช้ท่อน้ำยายาวกว่า 4 เมตร หรืออุปกรณ์เพิ่ม",
      "ค่าอะไหล่งานซ่อม ขึ้นกับยี่ห้อ รุ่น และจุดเสีย",
      `น้ำยาแอร์ คิดตามที่เติมจริงปอนด์ละ ${p.repair.refrigerantPerLb} บาท`,
      "นัดนอกเวลาทำการหรือวันอาทิตย์ มีค่าบริการเพิ่มเติม",
      `ขนเครื่องซักผ้าออกไปล้างนอกสถานที่ เพิ่ม ${p.washer.offsiteSurcharge} บาท`,
    ],
    noFeeH: "ไม่มีค่าเดินทาง",
    noFee: `รับงานถึงบ้านใน ${area} อำเภอ ${coverageTotal} ตำบลของเชียงใหม่ ทุกตำบลใช้ราคาเดียวกัน`,
    areaLink: "ตรวจรายชื่อตำบล",
    infoH: "นัดหมายและเอกสาร",
    info: [
      `เวลาทำการ ${site.daysLabel} ${site.hours} ${site.afterHours}`,
      "ปกติเข้าหน้างานได้ภายใน 24 ชั่วโมง ยกเว้นช่วงกุมภาพันธ์ถึงเมษายนที่คิวหนาแน่น",
      `ออกใบกำกับภาษีเต็มรูปและใบเสร็จรับเงินในนาม ${site.legalName}`,
    ],
    askH: "คำถามที่ควรถามช่างก่อนนัด และคำตอบของเรา",
    askLead: "ใช้ถามช่างแอร์ได้ทุกเจ้า เพื่อให้รู้ยอดรวมและเงื่อนไขก่อนนัด",
    asks: [
      { q: "ราคานี้รวมค่าเดินทางแล้วหรือไม่?", a: `รวมแล้ว ไม่มีค่าเดินทางเพิ่มในพื้นที่บริการ ${area} อำเภอ ${coverageTotal} ตำบล` },
      { q: "ล้างแอร์แบบมาตรฐานรวมการฉีดน้ำยาฆ่าเชื้อหรือไม่?", a: "รวม ฉีดน้ำยาฆ่าเชื้อให้ทุกเครื่อง ทั้งแบบมาตรฐานและแบบถอดล้าง" },
      { q: "รับประกันกี่วัน ครอบคลุมอะไร?", a: "งานล้างมาตรฐานรับประกันน้ำหยด 30 วัน ถอดล้าง 60 วัน งานซ่อมและงานย้ายแอร์ 30 วัน งานเติมน้ำยา 30 วันกรณีอาการเดิมกลับมาหรือน้ำหยด งานติดตั้ง 1 ปีเมื่อซื้อเครื่องกับร้าน และ 6 เดือนสำหรับเครื่องของลูกค้า" },
      { q: "ถ้าต้องเติมน้ำยา คิดอย่างไร?", a: `วัดแรงดันให้ดูก่อน หากพร่องจริงคิดปอนด์ละ ${p.repair.refrigerantPerLb} บาท ถ้าไม่พร่องจะไม่เติม` },
      { q: "ค่าตรวจเช็คงานซ่อมคิดอย่างไร?", a: `ค่าตรวจเช็ค ${p.repair.diagnostic} บาท หักคืนเต็มจำนวนเมื่อตัดสินใจซ่อม` },
      { q: "ออกใบกำกับภาษีได้หรือไม่?", a: `ได้ ออกใบกำกับภาษีเต็มรูปในนาม ${site.legalName}` },
    ],
    ctaT: "ต้องการยอดรวมสำหรับงานของคุณ",
    ctaS: "ส่งจำนวนเครื่อง ขนาด BTU และพื้นที่ทาง LINE ผมสรุปยอดรวมให้ก่อนนัด",
    call: "โทร",
  },
  en: {
    title: "What's Included, Warranty and Travel Fees | Aircon Service Terms, Chiang Mai",
    desc: `Service terms in one table: price, what each job includes, warranty, extra costs that can apply, and no travel fee across ${area} districts and ${coverageTotal} sub-districts of Chiang Mai.`,
    crumbs: [{ name: "หน้าแรก", path: "/" }, { name: "English", path: "/en" }, { name: "Service terms", path: PATH.en }],
    eyebrow: "Straight from the provider",
    h1: "What each job includes, how long the warranty runs, and what can cost extra",
    lead: `Cleaning, repair, installation, relocation and washing machine jobs in one table. Prices are what you pay, with no travel fee inside the service area of ${area} districts and ${coverageTotal} sub-districts.`,
    head: ["Job", "Price", "Included", "Warranty"],
    tableCaption: "Service terms by job type",
    extraH: "Costs that can be added, always quoted before work starts",
    extras: [
      "Installation or relocation needing pipe longer than 4 m, or extra materials",
      "Repair parts, depending on brand, model and fault",
      `Refrigerant, charged for what is actually added at ${p.repair.refrigerantPerLb} THB per lb`,
      "Appointments outside working hours or on Sundays carry an extra charge",
      `Taking a washing machine away to clean off-site adds ${p.washer.offsiteSurcharge} THB`,
    ],
    noFeeH: "No travel fee",
    noFee: `Home visits across ${area} districts and ${coverageTotal} sub-districts of Chiang Mai, all at the same price.`,
    areaLink: "See the areas",
    infoH: "Booking and paperwork",
    info: [
      "Working hours Monday to Saturday, 08:00–18:00. Evenings and Sundays can be booked for an extra charge.",
      "A visit within 24 hours is normal, except February to April when queues are long across the province.",
      "Full VAT tax invoices and receipts issued in the company name, Cher Solutions Co., Ltd.",
    ],
    askH: "Questions worth asking before you book, and our answers",
    askLead: "Useful with any technician, so you know the total and the terms up front.",
    asks: [
      { q: "Is travel included in the price?", a: `Yes. No travel fee inside the service area of ${area} districts and ${coverageTotal} sub-districts.` },
      { q: "Does a standard clean include disinfectant?", a: "Yes, every unit is sprayed with disinfectant, on both the standard clean and the strip-down." },
      { q: "How long is the warranty and what does it cover?", a: "Standard clean: 30 days against water dripping. Strip-down: 60 days. Repairs and relocation: 30 days. Refrigerant top-up: 30 days if the same symptom returns or water drips. Installation: 1 year if you buy the unit from us, 6 months for your own unit." },
      { q: "How is a refrigerant top-up charged?", a: `The pressure is measured in front of you first. If it is genuinely low it is ${p.repair.refrigerantPerLb} THB per lb; if not, nothing is added.` },
      { q: "How is the repair diagnostic charged?", a: `${p.repair.diagnostic} THB, credited back in full if you go ahead with the repair.` },
      { q: "Can you issue a tax invoice?", a: "Yes, a full VAT tax invoice in the company name." },
    ],
    ctaT: "Want a total for your job?",
    ctaS: "Send the number of units, BTU size and your area on LINE and I will confirm the total before booking.",
    call: "Call",
  },
  zh: {
    title: "清迈空调服务包含什么、保修多久、有无上门费 | 服务条款",
    desc: `一张表看清价格、服务包含内容、保修期、可能增加的费用，清迈 ${area} 个县 ${coverageTotal} 个分区内上门不收路费。`,
    crumbs: [{ name: "หน้าแรก", path: "/" }, { name: "中文", path: "/zh" }, { name: "服务条款", path: PATH.zh }],
    eyebrow: "服务商直接提供的信息",
    h1: "每项服务包含什么、保修多久、哪些情况会加费",
    lead: `清洗、维修、安装、移机和洗衣机拆洗的条款汇总在一张表里。价格即实付价格，服务范围 ${area} 个县 ${coverageTotal} 个分区内不收路费。`,
    head: ["项目", "价格", "包含内容", "保修"],
    tableCaption: "按项目划分的服务条款",
    extraH: "可能增加的费用，开工前先告知",
    extras: [
      "安装或移机需要超过 4 米的铜管或额外材料",
      "维修配件，视品牌、型号和故障而定",
      `冷媒按实际加注量计费，每磅 ${p.repair.refrigerantPerLb} 泰铢`,
      "非营业时间或周日预约另收服务费",
      `洗衣机运走到店外清洗加收 ${p.washer.offsiteSurcharge} 泰铢`,
    ],
    noFeeH: "不收路费",
    noFee: `清迈 ${area} 个县 ${coverageTotal} 个分区上门服务，价格统一。`,
    areaLink: "查看服务区域",
    infoH: "预约与票据",
    info: [
      "营业时间周一至周六 08:00–18:00，傍晚和周日可预约，另收服务费。",
      "通常 24 小时内上门，2 月至 4 月全省排队较多时除外。",
      "可开具公司名义的增值税正式发票和收据。",
    ],
    askH: "预约前值得问技师的问题，以及我们的回答",
    askLead: "问任何一位技师都适用，先弄清总价和条款。",
    asks: [
      { q: "价格包含路费吗？", a: `包含。服务范围 ${area} 个县 ${coverageTotal} 个分区内不另收路费。` },
      { q: "标准清洗包含消毒吗？", a: "包含，标准清洗和深度拆洗每台都喷消毒剂。" },
      { q: "保修多久，保什么？", a: "标准清洗滴水保修 30 天，深度拆洗 60 天，维修和移机 30 天，补充冷媒 30 天（原症状复发或滴水），安装在本店购机 1 年、自备机 6 个月。" },
      { q: "补充冷媒怎么收费？", a: `先当面测压力，确实不足才按每磅 ${p.repair.refrigerantPerLb} 泰铢收费，不缺不加。` },
      { q: "维修检测费怎么算？", a: `检测费 ${p.repair.diagnostic} 泰铢，决定维修则全额抵扣。` },
      { q: "能开发票吗？", a: "可以，开具公司名义的增值税正式发票。" },
    ],
    ctaT: "想知道您的总价？",
    ctaS: "用 LINE 发来台数、BTU 和所在区域，预约前我会先告诉您总价。",
    call: "电话",
  },
} as const;

export function serviceTermsMetadata(lang: TermsLang): Metadata {
  const t = T[lang];
  const locale = lang === "th" ? undefined : lang === "en" ? "en_US" : "zh_CN";
  return {
    title: { absolute: t.title },
    description: t.desc,
    alternates: { canonical: PATH[lang], languages },
    ...share({ title: t.title, description: t.desc, path: PATH[lang], ...(locale ? { locale } : {}) }),
  };
}

export function ServiceTermsView({ lang }: { lang: TermsLang }) {
  const t = T[lang];
  const list = rows(lang);
  const areaHref = lang === "th" ? "/area" : lang === "en" ? "/en/areas" : "/zh/areas";
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([...t.crumbs]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema([...t.asks]))} />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={[...t.crumbs]} />
        <section className="wrap max-w-5xl pt-8 pb-12">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-5 text-[clamp(1.9rem,1.25rem+2.4vw,2.8rem)] leading-[1.3] font-extrabold">{t.h1}</h1>
          <p className="lead mt-5 max-w-3xl">{t.lead}</p>
        </section>
      </div>

      <section className="section pt-4">
        <div className="wrap max-w-5xl">
          {/* มือถือ: การ์ดซ้อนป้ายหัวคอลัมน์ ไม่ตัดตาราง (กติกาตารางมือถือของเว็บนี้) */}
          <ul className="space-y-4 md:hidden">
            {list.map((r) => (
              <li key={r.name} className="card p-5">
                <h2 className="text-[16px] font-bold leading-7">{r.name}</h2>
                <dl className="mt-3 space-y-2.5 text-[14px] leading-6">
                  <div><dt className="text-xs font-semibold text-ink-soft">{t.head[1]}</dt><dd className="font-bold text-brand-700">{r.price}</dd></div>
                  <div><dt className="text-xs font-semibold text-ink-soft">{t.head[2]}</dt><dd className="text-ink-soft">{r.includes}</dd></div>
                  <div><dt className="text-xs font-semibold text-ink-soft">{t.head[3]}</dt><dd className="font-semibold">{r.warranty}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-left text-[15px]">
              <caption className="sr-only">{t.tableCaption}</caption>
              <thead>
                <tr className="border-b-2 border-brand-200 bg-brand-50/60">
                  {t.head.map((h) => <th key={h} scope="col" className="p-3 font-bold">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 align-top">
                {list.map((r) => (
                  <tr key={r.name}>
                    <th scope="row" className="w-[20%] p-3 font-semibold leading-7">{r.name}</th>
                    <td className="w-[24%] p-3 font-bold leading-7 text-brand-700">{r.price}</td>
                    <td className="p-3 leading-7 text-ink-soft">{r.includes}</td>
                    <td className="w-[16%] p-3 font-semibold leading-7">{r.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap max-w-5xl grid gap-6 md:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold leading-8">{t.extraH}</h2>
            <ul className="mt-4 space-y-3">
              {t.extras.map((x) => (
                <li key={x} className="flex items-start gap-2.5 text-[15px] leading-7 text-ink-soft">
                  <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-bold leading-8">{t.noFeeH}</h2>
              <p className="mt-3 text-[15px] leading-7 text-ink-soft">{t.noFee}</p>
              <Link href={areaHref} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
                {t.areaLink}<IconChevron className="h-4 w-4" />
              </Link>
            </div>
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-bold leading-8">{t.infoH}</h2>
              <ul className="mt-4 space-y-3">
                {t.info.map((x) => (
                  <li key={x} className="flex items-start gap-2.5 text-[15px] leading-7 text-ink-soft">
                    <IconCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />{x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-4xl">
          <h2 className="h2">{t.askH}</h2>
          <p className="lead mt-3">{t.askLead}</p>
          <div className="mt-8 space-y-4">
            {t.asks.map((x) => (
              <div key={x.q} className="card p-6">
                <h3 className="text-lg font-bold leading-8">{x.q}</h3>
                <p className="mt-2 text-[15px] leading-7 text-ink-soft">{x.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phoneTel}`} className="btn-call px-6 py-3.5" data-cta={`terms-call-${lang}`}>
              <IconPhone className="h-5 w-5" />{t.call} {lang === "th" ? site.phone : "+66 65 365 7673"}
            </a>
            <a href={site.lineUrl} target="_blank" rel="noopener" className="btn-line px-6 py-3.5" data-cta={`terms-line-${lang}`}>
              <IconLine className="h-5 w-5" />LINE {site.lineId}
            </a>
          </div>
        </div>
      </section>

      {lang === "th" && <CtaBand title={t.ctaT} subtitle={t.ctaS} />}
    </>
  );
}
