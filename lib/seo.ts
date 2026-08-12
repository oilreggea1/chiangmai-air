import type { Metadata } from "next";
import { site } from "./site";

/**
 * ═══════════════════════════════════════════════════════════════════
 * ภาพแชร์และ twitter card ของทุกหน้า ต้องผ่านฟังก์ชัน share() ที่นี่ที่เดียว
 * ═══════════════════════════════════════════════════════════════════
 * ที่มา: 11 ส.ค. 2569 ตรวจ HTML ที่ build ออกมาจริงแล้วพบว่า 121 จาก 147 หน้า
 * ไม่มี og:image เลย ทั้งที่ layout ประกาศไว้ครบ
 *
 * สาเหตุคือ Next ไม่ได้ merge ฟิลด์ย่อยของ openGraph ข้าม segment
 * หน้าไหนประกาศ openGraph ของตัวเอง ก้อนของ layout จะถูกแทนที่ทั้งก้อน
 * รวมถึง images ที่หน้านั้นไม่ได้เขียนซ้ำ ผลคือแชร์หน้าบริการหรือบทความลง LINE
 * แล้วขึ้นเป็นลิงก์เปล่าไม่มีภาพ ซึ่งเป็นช่องทางที่ลูกค้าส่งต่อกันมากที่สุด
 *
 * ปัญหาเดียวกันทำให้ twitter:title กับ twitter:description ของทั้ง 147 หน้า
 * เป็นข้อความชุดเดียวกันหมด เพราะไม่มีหน้าไหนเขียนทับของ layout เลย
 *
 * วิธีใช้: ในหน้า ให้เขียน
 *   export const metadata: Metadata = {
 *     title, description,
 *     alternates: { canonical: "/path" },
 *     ...share({ title, description, path: "/path" }),
 *   };
 * ห้ามเขียน openGraph หรือ twitter ตรง ๆ ในหน้า เพราะจะหลุด images อีก
 */

/**
 * ภาพแชร์กลาง สร้างจาก app/opengraph-image.tsx เป็น PNG 1200×630
 * บนภาพมีคำว่าช่างแอร์เชียงใหม่ เบอร์โทร และราคาล้างแอร์ ซึ่งดึงจาก p อยู่แล้ว
 * ใช้สัดส่วนนี้เพราะ LINE และ Facebook ครอปภาพแนวตั้งเสียหมด
 * ส่วนภาพหน้างานจริงยังประกาศไว้ใน JSON-LD ของแต่ละหน้าเพื่อให้ Google Images เก็บ
 */
export const shareImage = {
  url: `${site.url}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "ช่างแอร์เชียงใหม่ โปรเฟรชแคร์ ล้างแอร์ ซ่อมแอร์ ถึงบ้าน",
} as const;

type ShareInput = {
  /** ใช้ทั้งกับ og:title และ twitter:title จึงควรเป็นข้อความเดียวกับ <title> ของหน้า */
  title: string;
  description: string;
  /** path ขึ้นต้นด้วย / เท่านั้น ฟังก์ชันจะเติมโดเมนให้เอง */
  path: string;
  type?: "website" | "article" | "profile";
  /** ใส่เฉพาะหน้าอังกฤษกับจีน หน้าไทยใช้ค่าเริ่มต้น */
  locale?: string;
  /** ใส่เฉพาะบทความที่มีวันที่แก้ไขจริง ห้ามเดาวันที่ */
  publishedTime?: string;
  modifiedTime?: string;
  /**
   * ภาพหน้างานจริงของหน้านั้น ใส่เฉพาะหน้าที่มีภาพเป็นของตัวเอง
   * เช่น บทความ หน้าผลงาน และ case study ซึ่งภาพสื่อเนื้อหาได้ตรงกว่าการ์ดกลาง
   * ภาพหน้างานจะถูกวางเป็นตัวแรก และคงการ์ดกลางไว้เป็นตัวสำรอง
   * เพราะภาพหน้างานเป็นแนวตั้งบ้างแนวนอนบ้าง แอปที่ครอปไม่สวยยังมีตัวสำรองให้ใช้
   */
  image?: { src: string; alt: string };
};

export function share({
  title,
  description,
  path,
  type = "article",
  locale = "th_TH",
  publishedTime,
  modifiedTime,
  image,
}: ShareInput): Pick<Metadata, "openGraph" | "twitter"> {
  const images = image
    ? [{ url: `${site.url}${image.src}`, alt: image.alt }, shareImage]
    : [shareImage];

  const common = {
    title,
    description,
    url: `${site.url}${path}`,
    siteName: site.name,
    locale,
    images,
  };

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? { ...common, type: "article", publishedTime, modifiedTime }
      : type === "profile"
        ? { ...common, type: "profile" }
        : { ...common, type: "website" };

  return {
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images[0].url],
    },
  };
}
