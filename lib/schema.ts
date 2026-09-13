import { site, services, areas, heroPhotos, p } from "./site";

const ID = `${site.url}/#business`;
export const PERSON_ID = `${site.url}/about#chang-arm`;

function priceNumber(value: string) {
  return Number.parseInt(value.replaceAll(",", ""), 10);
}

/** ตัวตนผู้ให้ความรู้และผู้รับผิดชอบงาน ช่วยเชื่อมประสบการณ์จริงกับบทความและธุรกิจ */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.leadTech,
    alternateName: "ช่างอาร์ม โปรเฟรชแคร์",
    jobTitle: "ช่างเครื่องปรับอากาศ",
    description: `ช่างผู้รับผิดชอบงานของ${site.name} มีประสบการณ์งานล้าง ซ่อม ติดตั้ง และย้ายแอร์${site.experience}`,
    url: `${site.url}/about`,
    // ดึงจาก heroPhotos.about ที่เดียว เพราะ Person schema ชี้ url ไปหน้า /about
    // ถ้าภาพใน schema กับภาพที่คนเห็นบนหน้าเป็นคนละใบ Google ถือว่าข้อมูลไม่ตรงกัน
    image: `${site.url}${heroPhotos.about.src}`,
    worksFor: { "@id": ID },
    knowsAbout: services.map((service) => service.name),
  };
}

/**
 * ราคาของบริการเป็นช่วง ไม่ใช่ตัวเลขตายตัว
 * ถ้าประกาศเป็น price เดี่ยว Google จะเข้าใจว่าเป็นราคาสุดท้าย ซึ่งไม่ตรงกับตารางบนหน้าเว็บ
 */
function offerPrice(s: (typeof services)[number]) {
  if (s.slug === "lang-air") {
    return [
      {
        "@type": "UnitPriceSpecification",
        priceCurrency: "THB",
        price: priceNumber(p.wash.std),
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 2,
          unitText: "เครื่อง",
        },
        description: `ล้างแอร์ติดผนังเครื่องละ ${p.wash.std} บาท เมื่อใช้บริการ 1–2 เครื่อง`,
      },
      {
        "@type": "UnitPriceSpecification",
        priceCurrency: "THB",
        price: priceNumber(p.wash.stdBulk),
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          minValue: 3,
          unitText: "เครื่อง",
        },
        description: `ล้างแอร์ติดผนังเครื่องละ ${p.wash.stdBulk} บาท เมื่อใช้บริการตั้งแต่ 3 เครื่องขึ้นไป`,
      },
      {
        "@type": "PriceSpecification",
        priceCurrency: "THB",
        minPrice: priceNumber(p.wash.premium.split("–")[0]),
        maxPrice: priceNumber(p.wash.premium.split("–")[1]),
        description: `Premium Full Wash ถอดล้าง 100% ราคา ${p.wash.premium} บาท ขึ้นอยู่กับขนาด BTU`,
      },
    ];
  }

  return {
    "@type": "PriceSpecification",
    priceCurrency: "THB",
    minPrice: s.priceFrom,
    ...(s.priceTo ? { maxPrice: s.priceTo } : {}),
    ...(s.priceNote ? { description: s.priceNote } : {}),
  };
}


/** LocalBusiness หลัก — ต้องตรงกับ Google Business Profile เป๊ะ ๆ (NAP consistency) */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: [site.legalNameEn, "โปรเฟรชแคร์ ช่างแอร์เชียงใหม่", "ช่างแอร์เชียงใหม่"],
    // เลขทะเบียนนิติบุคคล 13 หลัก
    // ไม่ใส่ vatID เพราะบริษัทยังไม่ได้จดทะเบียนภาษีมูลค่าเพิ่ม
    taxID: site.taxId,
    description:
      "ช่างแอร์เชียงใหม่ รับล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ ย้ายแอร์ และล้างเครื่องซักผ้าถึงบ้าน ครอบคลุมอำเภอเมืองเชียงใหม่ทุกตำบล สันกำแพง สารภี ดอยสะเก็ด และสันพระเนตร แจ้งราคาก่อนเริ่มงาน รับประกันผลงาน ออกใบเสร็จในนามบริษัทได้",
    url: site.url,
    // เบอร์หลักไว้ใน telephone ให้ตรงกับ Google Business Profile เบอร์สำรองแยกไว้ใน contactPoint
    telephone: site.phoneRaw,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phoneRaw,
        areaServed: "TH",
        availableLanguage: ["th", "en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone2Raw,
        areaServed: "TH",
        availableLanguage: ["th", "en"],
      },
    ],
    knowsAbout: services.map((s) => s.name),
    priceRange: site.priceRange,
    // Google อยากได้รูปหน้างานจริง ไม่ใช่กราฟิก OG
    image: [
      `${site.url}/work/air-2569-01.jpg`,
      `${site.url}/work/air-2569-02.jpg`,
      `${site.url}/work/air-2569-03.jpg`,
    ],
    logo: `${site.url}/icon`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street} ${site.address.subDistrict}`,
      addressLocality: site.address.district,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        // จันทร์–เสาร์เท่านั้น วันอาทิตย์หยุด จึงไม่อยู่ในรายการ
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday",
        ],
        opens: site.hoursOpen,
        closes: site.hoursClose,
      },
    ],
    // googleBusinessUrl ยังว่างจนกว่าโปรไฟล์จะยืนยันผ่าน จึงกรองออกก่อน
    // ถ้าปล่อยสตริงว่างเข้าไป Rich Results Test จะฟ้องว่า URL ไม่ถูกต้องทั้งก้อน
    sameAs: [site.facebook, site.lineUrl, site.lineUrl2, site.googleBusinessUrl].filter(Boolean),
    employee: { "@id": PERSON_ID },
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: `${a.full} จ.เชียงใหม่`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "บริการช่างแอร์เชียงใหม่",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.short },
        priceSpecification: offerPrice(s),
        url: `${site.url}/service/${s.slug}`,
      })),
    },
  };
}

/** Service schema สำหรับหน้าบริการแต่ละหน้า */
export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: `${site.url}/service/${s.slug}`,
    provider: { "@id": ID },
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: `${a.full} จ.เชียงใหม่`,
    })),
    offers: {
      "@type": "Offer",
      priceSpecification: offerPrice(s),
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqSchema(list: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "th-TH",
    publisher: { "@id": ID },
  };
}

/**
 * วันที่คลิปทั้งชุดขึ้นเว็บนี้ (วันที่ไฟล์เข้าโปรเจกต์จริง ตรวจจาก git log)
 * uploadDate เป็นฟิลด์บังคับของ VideoObject ตามเอกสารของ Google
 * ที่ขาดไปทำให้รายงาน "การเพิ่มประสิทธิภาพ > วิดีโอ" ใน Search Console
 * ขึ้นว่าไม่ถูกต้องทั้ง 10 รายการ (ตรวจพบ 13 ก.ย. 2569)
 * ถ้าเพิ่มคลิปชุดใหม่ที่ขึ้นเว็บคนละวัน ต้องแยกวันที่ต่อคลิป ห้ามใช้ค่านี้เหมารวม
 */
const REEL_PUBLISHED = "2026-08-05";

/** คลิปที่ขึ้นเว็บคนละวันกับชุดแรก ใส่วันของตัวเองไว้ที่นี่ */
const REEL_PUBLISHED_BY_ID: Record<string, string> = {
  "wm-fa-na-khan-ton": "2026-09-13",
  "wm-fa-na-thot-lang": "2026-09-13",
  "wm-rakha-fa-na-vs-fa-bon": "2026-09-13",
  "wm-fa-bon-samsung": "2026-09-13",
  "wm-fa-bon-vs-fa-na": "2026-09-13",
  "wm-lang-thang-chiangmai": "2026-09-13",
  "wm-yot-rian-thot-lang": "2026-09-13",
  "wm-fa-na-thot-thang": "2026-09-13",
  "wm-thang-stainless-lang-nok": "2026-09-13",
  "wm-khrap-fang-nae-thang": "2026-09-13",
  "wm-khrap-phanang-thang": "2026-09-13",
  "wm-khat-lang-khrap-thang": "2026-09-13",
};

/**
 * ความยาวคลิปแบบ ISO 8601 วัดจากไฟล์จริงด้วย ffprobe แล้วปัดขึ้นเป็นวินาที
 * Google ใช้ค่านี้แสดงความยาวใต้ผลการค้นหา ไม่ใส่ก็ไม่ผิด แต่ใส่แล้วผลดูสมบูรณ์กว่า
 * ห้ามเดาค่า ถ้าเพิ่มคลิปใหม่ให้วัดจากไฟล์ก่อน
 */
const REEL_DURATION: Record<string, string> = {
  "1151370080220641": "PT53S",
  "1232175024939599": "PT24S",
  "1261789992704152": "PT29S",
  "1269611208233633": "PT1M33S",
  "1284322489799860": "PT1M9S",
  "1288260533386347": "PT27S",
  "1336389494094369": "PT29S",
  "1748747562375875": "PT44S",
  "3177769309038728": "PT38S",
  "3663347230638937": "PT35S",
  "wm-fa-na-khan-ton": "PT30S",
  "wm-fa-na-thot-lang": "PT30S",
  "wm-rakha-fa-na-vs-fa-bon": "PT2M11S",
  "wm-fa-bon-samsung": "PT1M29S",
  "wm-fa-bon-vs-fa-na": "PT1M6S",
  "wm-lang-thang-chiangmai": "PT2M13S",
  "wm-yot-rian-thot-lang": "PT53S",
  "wm-fa-na-thot-thang": "PT25S",
  "wm-thang-stainless-lang-nok": "PT33S",
  "wm-khrap-fang-nae-thang": "PT32S",
  "wm-khrap-phanang-thang": "PT41S",
  "wm-khat-lang-khrap-thang": "PT31S",
};

export function videoSchema(list: { id: string; title: string; desc?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": list.map((video) => ({
      "@type": "VideoObject",
      "@id": `${site.url}/videos#video-${video.id}`,
      name: video.title,
      description: video.desc ?? `${video.title} ผลงานจริงของช่างอาร์ม โปรเฟรชแคร์ ในจังหวัดเชียงใหม่`,
      thumbnailUrl: `${site.url}/videos/reels/${video.id}.jpg`,
      contentUrl: `${site.url}/videos/reels/${video.id}.mp4`,
      embedUrl: `${site.url}/videos#video-${video.id}`,
      uploadDate: REEL_PUBLISHED_BY_ID[video.id] ?? REEL_PUBLISHED,
      ...(REEL_DURATION[video.id] ? { duration: REEL_DURATION[video.id] } : {}),
      inLanguage: "th-TH",
      publisher: { "@id": ID },
    })),
  };
}

/** HowTo schema — ขั้นตอนการทำงาน ช่วยให้ได้ rich result */
export function howToSchema(s: (typeof services)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `ขั้นตอนการ${s.name}โดยช่างมืออาชีพ`,
    description: s.intro,
    // ใส่เวลาเฉพาะบริการที่หน้าเว็บระบุไว้จริง ที่เหลือไม่ประกาศ ดีกว่าประกาศตัวเลขที่เดาเอา
    ...(s.durationISO ? { totalTime: s.durationISO } : {}),
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "THB",
      minValue: s.priceFrom,
      ...(s.priceTo ? { maxValue: s.priceTo } : {}),
    },
    step: s.steps.map((st, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: st.title,
      text: st.detail,
    })),
  };
}

/** helper สำหรับฝัง JSON-LD ลงหน้า */
export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
