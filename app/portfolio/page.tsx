import type { Metadata } from "next";
import Image from "next/image";
import { site, gallery, washerGallery, reviews } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { CtaBand, Breadcrumbs, ReviewCard } from "@/components/Blocks";

const title = "ผลงานล้างแอร์ ซ่อมแอร์ เชียงใหม่ ภาพหน้างานจริง";
const description =
  "รวมภาพผลงานจริงของช่างแอร์เชียงใหม่ โปรเฟรชแคร์ ทั้งงานล้างแอร์ ซ่อมแอร์ ติดตั้ง และย้ายแอร์ ในสันกำแพง ต้นเปา และอำเภอเมืองเชียงใหม่";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title,
    description,
    url: `${site.url}/portfolio`,
    type: "article",
    images: [{ url: gallery[0].src }],
  },
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "ผลงานของเรา", path: "/portfolio" },
];

export default function Portfolio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: title,
          description,
          url: `${site.url}/portfolio`,
          image: [...gallery, ...washerGallery].map((g) => `${site.url}${g.src}`),
        })}
      />

      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-14 text-center">
          <p className="eyebrow">ภาพจากหน้างานจริง</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">
            ภาพผลงานช่างแอร์เชียงใหม่
          </h1>
          <p className="lead mt-5">
            ภาพทั้งหมดถ่ายจากหน้างานจริงในเชียงใหม่ ครอบคลุมงานถอดล้าง งานซ่อม งานติดตั้ง งานย้ายแอร์
            และงานล้างถังเครื่องซักผ้า แสดงทั้งขั้นตอนการปูผ้าใบและสภาพชิ้นส่วนขณะถอดล้าง
          </p>
        </section>
      </div>

      <section className="section pt-4">
        <div className="wrap">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <li key={g.src} className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={800}
                  priority={i < 4}
                  loading={i < 4 ? undefined : "lazy"}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>

          {/* งานเครื่องซักผ้าแยกกลุ่ม เพราะ alt คนละชุดกับงานแอร์ */}
          <h2 className="h2 mt-14">งานล้างถังเครื่องซักผ้า</h2>
          <p className="lead mt-3 max-w-2xl">
            ภาพชิ้นส่วนที่ถอดออกมาและสภาพก่อนล้าง ซึ่งเป็นบริเวณที่มองไม่เห็นขณะเครื่องประกอบอยู่
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {washerGallery.map((g) => (
              <li key={g.src} className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap">
          <h2 className="h2 text-center">เสียงจากลูกค้าที่ใช้บริการจริง</h2>
          <div className="mx-auto mt-9 grid max-w-4xl gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="ต้องการให้เครื่องที่บ้านของคุณอยู่ในสภาพนี้"
        subtitle="ติดต่อจองคิวเข้ามาได้ครับ ผมแจ้งราคาให้ครบถ้วนก่อนเริ่มงานเสมอ"
      />
    </>
  );
}
