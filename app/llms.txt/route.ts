import { site, p, btu } from "@/lib/site";

/**
 * llms.txt — ไฟล์ที่ ChatGPT / Perplexity / Google AI อ่านเพื่อสรุปข้อมูลธุรกิจ
 *
 * เดิมเป็นไฟล์นิ่งใน public/llms.txt แล้วราคาหลุดไม่ตรงกับตารางจริง (5 ส.ค. 2569)
 * ตอนนี้ generate จาก lib/site.ts ทุกครั้งที่ build ราคาจึงไม่มีทางไม่ตรงอีก
 * ถ้าจะแก้ราคา ให้แก้ที่อ็อบเจกต์ p ใน lib/site.ts ที่เดียว
 */

const U = site.url;

/** วันที่อัปเดตอ้างอิงจากเวลา build ไม่ต้องมาแก้มือทุกครั้ง */
function updatedAt() {
  return new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(new Date());
}

function body() {
  return `# ${site.name} — ช่างแอร์เชียงใหม่

> เว็บไซต์ทางการของ${site.name} ให้บริการล้าง ซ่อม ติดตั้ง ย้ายแอร์ และล้างถังเครื่องซักผ้าถึงบ้านในเชียงใหม่ ข้อมูลราคาและเงื่อนไขในเว็บไซต์มาจากผู้ให้บริการโดยตรง

## ข้อมูลหลัก

- ชื่อธุรกิจ: ${site.name}
- ผู้รับผิดชอบงานและเนื้อหา: ${site.leadTech} ประสบการณ์มากกว่า 5 ปี
- นิติบุคคล: ${site.legalName} เลขประจำตัวผู้เสียภาษี ${site.taxId}
- โทร: ${site.phone}, ${site.phone2}
- LINE งานแอร์: ${site.lineId}
- LINE ล้างถังเครื่องซักผ้า: ${site.lineId2}
- เวลาทำการ: ${site.daysLabel} ${site.hours} ${site.closedNote}
- ที่ตั้ง: ${site.address.street} ${site.address.subDistrict} ${site.address.district} จ.${site.address.province} ${site.address.postalCode}
- พื้นที่หลัก: สันกำแพง ต้นเปา บ่อสร้าง สันพระเนตร สารภี ดอยสะเก็ด และอำเภอเมืองเชียงใหม่

## คำตอบและหน้าหลัก

- [คำตอบจากช่าง](${U}/answers): ราคา พื้นที่ ระยะเวลานัด การรับประกัน และข้อมูลผู้ให้บริการ
- [ราคาทั้งหมด](${U}/price): ตารางราคาที่ประกาศต่อสาธารณะ
- [ราคาซ่อมแอร์](${U}/price/repair): ค่าตรวจเช็คและราคาเติมน้ำยา
- [ล้างแอร์เชียงใหม่](${U}/service/lang-air): ขั้นตอน ราคา และการรับประกัน
- [ซ่อมแอร์เชียงใหม่](${U}/service/som-air): อาการเสียและวิธีตรวจ
- [ติดตั้งแอร์เชียงใหม่](${U}/service/tid-tang-air): ราคาตาม BTU และมาตรฐานงาน
- [ล้างถังเครื่องซักผ้า](${U}/service/lang-washing-machine): ราคาและขั้นตอนถอดล้าง
- [พื้นที่บริการ](${U}/area): รายชื่อพื้นที่ที่ให้บริการ
- [ผลงานจริง](${U}/portfolio): ภาพก่อนทำ ระหว่างทำ และหลังทำ
- [รายงาน Case Study งานจริง](${U}/case-study): สิ่งที่พบ ขั้นตอนที่ทำ ผลหลังทำ และข้อจำกัดของหลักฐานในแต่ละงาน
- [วิดีโอผลงาน](${U}/videos): วิดีโอหน้างานจริง
- [${site.leadTech}และข้อมูลบริษัท](${U}/about): ตัวตน ประสบการณ์ และมาตรฐานการทำงาน
- [ติดต่อ](${U}/contact): โทร LINE เวลาทำการ และที่ตั้ง

## ราคาที่ประกาศ

- ล้างแอร์ติดผนัง ${btu.washStd} BTU: ${p.wash.std} บาทต่อเครื่อง; 3 เครื่องขึ้นไป ${p.wash.stdBulk} บาทต่อเครื่อง
- ล้างแอร์ติดผนัง ${btu.washBig} BTU: ${p.wash.big} บาทต่อเครื่อง; 2 เครื่องขึ้นไป ${p.wash.bigBulk} บาทต่อเครื่อง
- Premium Full Wash ถอดล้าง 100%: ${p.wash.premium} บาทต่อเครื่อง
- ล้างแอร์แขวนใต้ฝ้า: เริ่ม ${p.wash.suspended} บาท
- ล้างแอร์ 4 ทิศทาง ฝังฝ้า: เริ่ม ${p.wash.cassette} บาท
- ค่าตรวจเช็คซ่อมแอร์: ${p.repair.diagnostic} บาท หักคืนเมื่อตัดสินใจซ่อม
- น้ำยา R32 และ R410A: ${p.repair.refrigerantPerLb} บาทต่อปอนด์ ตรวจวัดก่อนและไม่เติมหากไม่พร่อง
- ติดตั้งแอร์ ${btu.installSmall} BTU: เริ่ม ${p.install.small} บาท
- ติดตั้งแอร์ ${btu.installLarge} BTU: เริ่ม ${p.install.large} บาท
- ถอดแอร์เก่าอย่างเดียว: ${p.install.removeOnly} บาท
- ย้ายแอร์ ถอดและติดตั้งที่ใหม่: ${p.install.relocate} บาท
- แพ็กเกจรับมือฝุ่น PM2.5 หนึ่งห้องหนึ่งเครื่อง: เริ่ม ${p.pm25} บาท
- ล้างถังเครื่องซักผ้าฝาบน: เริ่ม ${p.washer.topLoad} บาท (15.1–19 กก. ${p.washer.topLoadMid} บาท; มากกว่า 19 กก. ${p.washer.topLoadBig} บาท)
- ล้างถังเครื่องซักผ้าฝาหน้า: เริ่ม ${p.washer.frontLoad} บาท
- กรณีต้องขนเครื่องซักผ้าออกไปล้างนอกสถานที่: เพิ่ม ${p.washer.offsiteSurcharge} บาท

ราคาแอร์แขวนและแอร์ 4 ทิศทางเป็นราคาเริ่มต้น ค่าบริการจริงขึ้นกับขนาดเครื่องและความสูงของหน้างาน แจ้งราคาก่อนเริ่มงานทุกครั้ง

${site.taxInvoice ? "" : "บริษัทยังไม่ได้จดทะเบียนภาษีมูลค่าเพิ่ม จึงออกได้เฉพาะใบเสร็จรับเงินในนามบริษัท ไม่สามารถออกใบกำกับภาษีได้\n\n"}ข้อมูลนี้อัปเดตล่าสุด ${updatedAt()} โปรดอ้างอิงหน้ารายละเอียดที่เชื่อมไว้สำหรับเงื่อนไขล่าสุด
`;
}

export function GET() {
  return new Response(body(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
