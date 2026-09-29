/**
 * คอนโด 3 แบรนด์ที่เจ้าของสั่งทำหน้าเฉพาะ (29 ก.ย. 2569): ศุภาลัย อรสิริน ดีคอนโด
 * ข้อมูลโครงการตรวจจากเว็บผู้พัฒนา (supalai.com, ornsirin.co.th, sansiri.com) ก่อน แล้วจึง fazwaz/zmyhome
 * ใส่ตัวเลขเฉพาะที่แหล่งตรงกัน ตัวไหนแหล่งขัดกันให้เว้นว่าง หรือบอกไว้ใน tambonNote
 * ร้านไม่ได้เป็นตัวแทนหรือพันธมิตรของผู้พัฒนา ห้ามเขียนว่าเป็นช่างประจำโครงการ
 * ห้ามเติมกฎนิติบุคคลรายอาคาร (เวลาเข้า ลงทะเบียน ฯลฯ) จนกว่าช่างจะยืนยันจากหน้างานจริง
 */
export type BrandProject = {
  th: string;
  en: string;
  /** ตำบลตามที่อยู่โครงการ (ชื่อไทยตรงกับ coverage) */
  tambon: string;
  /** เมื่อแหล่งระบุตำบลขัดกัน */
  tambonAlt?: string;
  road: string;
  roadEn: string;
  buildings?: number;
  floors?: number;
  units?: number;
  year?: number;
  /** built = เปิดใช้งานแล้ว, upcoming = ยังไม่แล้วเสร็จ */
  status: "built" | "upcoming";
  sources: string[];
};

export type CondoBrand = {
  slug: "supalai" | "ornsirin" | "dcondo";
  th: string;
  en: string;
  zh: string;
  developerTh: string;
  developerEn: string;
  projects: BrandProject[];
};

export const condoBrands: CondoBrand[] = [
  {
    slug: "supalai",
    th: "ศุภาลัย",
    en: "Supalai",
    zh: "Supalai（ศุภาลัย）",
    developerTh: "บริษัท ศุภาลัย จำกัด (มหาชน)",
    developerEn: "Supalai Public Company Limited",
    projects: [
      { th: "ศุภาลัย มอนเต้ @ เวียง เชียงใหม่", en: "Supalai Monte @ Viang Chiang Mai", tambon: "วัดเกต", road: "ถ.ซุปเปอร์ไฮเวย์ เชียงใหม่–ลำปาง", roadEn: "Superhighway (Chiang Mai–Lampang)", buildings: 1, floors: 32, units: 734, year: 2017, status: "built",
        sources: ["https://www.fazwaz.co.th/en/projects/thailand/chiang-mai/mueang-chiang-mai/wat-ket/supalai-monte-at-viang", "https://zmyhome.com/project/V744"] },
      { th: "ศุภาลัย มอนเต้ 2 เชียงใหม่", en: "Supalai Monte 2 Chiang Mai", tambon: "หนองป่าครั่ง", tambonAlt: "วัดเกต", road: "ถ.เชียงใหม่–ดอยสะเก็ด", roadEn: "Chiang Mai–Doi Saket Rd", buildings: 1, floors: 32, units: 734, status: "built",
        sources: ["https://www.fazwaz.co.th/en/projects/thailand/chiang-mai/mueang-chiang-mai/nong-pa-khrang/supalai-monte-2", "https://chiangmaibaan.com/supalai-monte-2/"] },
      { th: "ศุภาลัย ธาม เชียงใหม่", en: "Supalai Tyme Chiang Mai", tambon: "วัดเกต", road: "ย่านเซ็นทรัลเฟสติวัล", roadEn: "Central Festival area", status: "upcoming",
        sources: ["https://www.supalai.com/project/condo/supalai-tyme-chiang-mai"] },
    ],
  },
  {
    slug: "ornsirin",
    th: "อรสิริน",
    en: "Ornsirin",
    zh: "Ornsirin（อรสิริน）",
    developerTh: "กลุ่มบริษัท อรสิริน",
    developerEn: "Ornsirin Group",
    projects: [
      { th: "ดิ แอสตร้า", en: "The Astra Condo", tambon: "ช้างคลาน", road: "ถ.ช้างคลาน", roadEn: "Chang Khlan Rd", buildings: 2, floors: 17, units: 589, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-astra-changklan/", "https://www.fazwaz.co.th/en/projects/thailand/chiang-mai/mueang-chiang-mai/chang-khlan/the-astra-condo"] },
      { th: "แอสตร้า สกาย ริเวอร์", en: "The Astra Sky River", tambon: "ช้างคลาน", road: "ถ.ช้างคลาน", roadEn: "Chang Khlan Rd", buildings: 1, floors: 17, units: 520, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-astra-sky-river-changklan/", "https://www.fazwaz.co.th/en/projects/thailand/chiang-mai/mueang-chiang-mai/chang-khlan/astra-sky-river"] },
      { th: "อะไรซ์ คอนโด มหิดล", en: "Arise Condo @ Mahidol", tambon: "ป่าแดด", road: "ถ.มหิดล", roadEn: "Mahidol Rd", buildings: 10, floors: 5, units: 380, year: 2020, status: "built",
        sources: ["https://ornsirin.co.th/property-item/arise-mahidol/", "https://www.fazwaz.co.th/en/projects/thailand/chiang-mai/mueang-chiang-mai/pa-daet/arise-condo-at-mahidol"] },
      { th: "อะไรซ์ คอนโด เจริญเมือง", en: "Arise Charoenmueang", tambon: "ท่าศาลา", tambonAlt: "หนองป่าครั่ง", road: "ถ.เจริญเมือง", roadEn: "Charoen Mueang Rd", floors: 19, year: 2025, status: "built",
        sources: ["https://ornsirin.co.th/property-item/arise-charoenmueang/", "https://zmyhome.com/project/V16835"] },
      { th: "อะไรซ์ ฮิลล์ สันทราย", en: "Arise Hill San Sai", tambon: "สันทรายน้อย", road: "ถ.เชียงใหม่–ดอยสะเก็ด", roadEn: "Chiang Mai–Doi Saket Rd", buildings: 2, floors: 8, units: 368, year: 2026, status: "built",
        sources: ["https://ornsirin.co.th/property-item/arise-hill/", "https://zmyhome.com/project/V18095"] },
      { th: "เดอะ เน็กซ์ 1 รวมโชค", en: "The Next 1 Ruamchok", tambon: "ฟ้าฮ่าม", road: "ถ.เชียงใหม่–แม่โจ้ (กาดรวมโชค)", roadEn: "Chiang Mai–Mae Jo Rd (Ruamchok Market)", floors: 7, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-next-1-ruamchok/", "https://zmyhome.com/project/V15277"] },
      { th: "เดอะ เน็กซ์ 2 หนองประทีป", en: "The Next 2 Nong Prateep", tambon: "ท่าศาลา", road: "ถ.เชียงใหม่–ลำปาง (แยกหนองประทีป)", roadEn: "Chiang Mai–Lampang Rd (Nong Prateep junction)", floors: 7, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-next-2-nong-prateep/", "https://zmyhome.com/project/V15276"] },
      { th: "เดอะ เน็กซ์ 3 รวมโชค", en: "The Next 3 Ruamchok", tambon: "ฟ้าฮ่าม", road: "ถ.เชียงใหม่–แม่โจ้", roadEn: "Chiang Mai–Mae Jo Rd", buildings: 2, floors: 7, units: 117, year: 2014, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-next-3-ruam-chok/", "https://zmyhome.com/project/V15278"] },
      { th: "เดอะ เน็กซ์ พรีเมียร์ รวมโชค", en: "The Next Premier Ruamchok", tambon: "ฟ้าฮ่าม", road: "ถ.เชียงใหม่–แม่โจ้ (กาดรวมโชค)", roadEn: "Chiang Mai–Mae Jo Rd (Ruamchok Market)", floors: 7, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-next-premier-ruam-chok/", "https://zmyhome.com/project/V16633"] },
      { th: "เดอะ เน็กซ์ รวมโชค–ซิตี้ฮอลล์", en: "The Next Ruamchok–City Hall", tambon: "ฟ้าฮ่าม", tambonAlt: "สันผีเสื้อ", road: "ถ.สมโภชเชียงใหม่ 700 ปี", roadEn: "Chiang Mai 700th Anniversary Rd", buildings: 2, floors: 4, units: 79, year: 2024, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-next-city-hall/", "https://zmyhome.com/project/V17335"] },
      { th: "เดอะ เน็กซ์ เจ็ดยอด", en: "The Next Jedyod", tambon: "ช้างเผือก", road: "ซ.วัดเจ็ดยอด", roadEn: "Soi Wat Chet Yot", buildings: 1, floors: 4, units: 78, year: 2020, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-next-jedyod/", "https://zmyhome.com/project/V17344"] },
      { th: "เดอะ เน็กซ์ เจ็ดยอด 2", en: "The Next Jedyod 2", tambon: "ช้างเผือก", road: "ซ.วัดเจ็ดยอด", roadEn: "Soi Wat Chet Yot", buildings: 1, units: 72, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-next-jed-yod-2/", "https://zmyhome.com/project/V17345"] },
      { th: "เดอะ เน็กซ์ เจ็ดยอด 3", en: "The Next Jedyod 3", tambon: "ช้างเผือก", road: "ซ.วัดเจ็ดยอด", roadEn: "Soi Wat Chet Yot", buildings: 1, floors: 4, units: 62, year: 2026, status: "built",
        sources: ["https://ornsirin.co.th/property-item/the-next-jedyod-3/", "https://zmyhome.com/project/V18135"] },
      { th: "ดิ แอสตร้า อินฟินิท", en: "The Astra Infinite", tambon: "ช้างคลาน", road: "ถ.ระแกง", roadEn: "Ragang Rd", status: "upcoming",
        sources: ["https://ornsirin.co.th/property-item/the-astra-infinite/"] },
      { th: "เดอะ เน็กซ์ เจ็ดยอด 4", en: "The Next Jedyod 4", tambon: "ช้างเผือก", road: "ซ.วัดเจ็ดยอด", roadEn: "Soi Wat Chet Yot", status: "upcoming",
        sources: ["https://ornsirin.co.th/property-item/the-next-jedyod-4/"] },
    ],
  },
  {
    slug: "dcondo",
    th: "ดีคอนโด",
    en: "dcondo",
    zh: "dcondo（ดีคอนโด）",
    developerTh: "บริษัท แสนสิริ จำกัด (มหาชน)",
    developerEn: "Sansiri Public Company Limited",
    projects: [
      { th: "ดีคอนโด ซายน์ เชียงใหม่", en: "dcondo Sign Chiang Mai", tambon: "ฟ้าฮ่าม", road: "ถ.ซุปเปอร์ไฮเวย์ เชียงใหม่–ลำปาง", roadEn: "Superhighway (Chiang Mai–Lampang)", floors: 8, units: 813, year: 2014, status: "built",
        sources: ["https://www.sansiri.com/dcondo", "https://www.fazwaz.co.th/en/projects/thailand/chiang-mai/mueang-chiang-mai/fa-ham/d-condo-sign"] },
      { th: "ดีคอนโด นิม เชียงใหม่", en: "dcondo Nim Chiang Mai", tambon: "ฟ้าฮ่าม", road: "ถ.ซุปเปอร์ไฮเวย์ เชียงใหม่–ลำปาง (ทางคู่ขนาน)", roadEn: "Superhighway frontage road", buildings: 3, floors: 8, units: 514, year: 2016, status: "built",
        sources: ["https://www.sansiri.com/dcondo", "https://www.condonayoo.com/d-condo-nim-chiang-mai/"] },
      { th: "ดีคอนโด พิงค์ เชียงใหม่", en: "dcondo Ping Chiang Mai", tambon: "ฟ้าฮ่าม", road: "ถ.ซุปเปอร์ไฮเวย์ เชียงใหม่–ลำปาง", roadEn: "Superhighway (Chiang Mai–Lampang)", buildings: 4, floors: 8, units: 687, year: 2018, status: "built",
        sources: ["https://www.sansiri.com/dcondo", "https://www.sansiri.com/en/news/dcondo-ping-your-next-thailand-property-investment-in-asia-s-up-and-coming-city-chiang-mai-32/"] },
      { th: "ดีคอนโด ริน เชียงใหม่", en: "dcondo Rin Chiang Mai", tambon: "ฟ้าฮ่าม", road: "ถ.ซุปเปอร์ไฮเวย์ เชียงใหม่–ลำปาง", roadEn: "Superhighway (Chiang Mai–Lampang)", buildings: 2, floors: 8, units: 411, status: "built",
        sources: ["https://www.sansiri.com/cnt/condominium/dcondo-rin-chiangmai", "https://www.sansiri.com/dcondo"] },
      { th: "ดีคอนโด แคมปัส รีสอร์ท เชียงใหม่", en: "dcondo Campus Resort Chiang Mai", tambon: "สุเทพ", road: "ถ.สุเทพ", roadEn: "Suthep Rd", buildings: 3, floors: 6, units: 521, status: "built",
        sources: ["https://www.sansiri.com/dcondo", "https://www.fazwaz.co.th/en/projects/thailand/chiang-mai/mueang-chiang-mai/suthep/dcondo-campus-resort-chiang-mai"] },
      { th: "ดีเวียง สันติธรรม", en: "d'Vieng Santitham", tambon: "ช้างเผือก", road: "ถ.หัสดิเสวี", roadEn: "Hatsadisewi Rd", buildings: 2, units: 264, year: 2015, status: "built",
        sources: ["https://www.sansiri.com/dcondo", "https://zmyhome.com/project/V14814"] },
    ],
  },
];

export const getCondoBrand = (slug: string) => condoBrands.find((b) => b.slug === slug);
