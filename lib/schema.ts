import { site, services, areas, heroPhotos } from "./site";

const ID = `${site.url}/#business`;
export const PERSON_ID = `${site.url}/about#chang-arm`;

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

export function videoSchema(list: { id: string; title: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": list.map((video) => ({
      "@type": "VideoObject",
      "@id": `${site.url}/videos#video-${video.id}`,
      name: video.title,
      description: `${video.title} ผลงานจริงของช่างอาร์ม โปรเฟรชแคร์ ในจังหวัดเชียงใหม่`,
      thumbnailUrl: `${site.url}/videos/reels/${video.id}.jpg`,
      contentUrl: `${site.url}/videos/reels/${video.id}.mp4`,
      embedUrl: `${site.url}/videos#video-${video.id}`,
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
