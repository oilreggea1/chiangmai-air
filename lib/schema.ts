import { site, services, areas, reviews } from "./site";

const ID = `${site.url}/#business`;

/** LocalBusiness หลัก — ต้องตรงกับ Google Business Profile เป๊ะ ๆ (NAP consistency) */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: [site.legalNameEn, "ช่างแอร์เชียงใหม่", site.shortName],
    description:
      "ช่างแอร์เชียงใหม่ รับล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ และย้ายแอร์ถึงบ้าน ครอบคลุมสันกำแพง ต้นเปา และอำเภอเมืองเชียงใหม่ บอกราคาก่อนลงมือ รับประกันผลงาน ออกใบกำกับภาษีได้",
    url: site.url,
    telephone: site.phoneRaw,
    priceRange: site.priceRange,
    // Google อยากได้รูปหน้างานจริง ไม่ใช่กราฟิก OG
    image: [
      `${site.url}/work/lang-air-chiangmai-01.webp`,
      `${site.url}/work/lang-air-chiangmai-02.jpg`,
      `${site.url}/work/lang-air-chiangmai-03.jpg`,
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
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: site.hoursOpen,
        closes: site.hoursClose,
      },
    ],
    sameAs: [site.facebook, site.lineUrl],
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
        price: s.priceFrom,
        priceCurrency: "THB",
        url: `${site.url}/service/${s.slug}`,
      })),
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    })),
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
      price: s.priceFrom,
      priceCurrency: "THB",
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

/** HowTo schema — ขั้นตอนการทำงาน ช่วยให้ได้ rich result */
export function howToSchema(s: (typeof services)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `ขั้นตอนการ${s.name}โดยช่างมืออาชีพ`,
    description: s.intro,
    totalTime: "PT1H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "THB",
      value: s.priceFrom,
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
