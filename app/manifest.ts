import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Web app manifest — เดิมเว็บไม่มีไฟล์นี้เลย
 *
 * ผลคือเวลาลูกค้ากด "เพิ่มไปยังหน้าจอโฮม" บนมือถือ ซึ่งเป็นอุปกรณ์ของลูกค้าเกือบทั้งหมด
 * ไอคอนจะเป็นภาพหน้าจอที่เบราว์เซอร์จับเอง และชื่อที่ขึ้นคือ <title> ของหน้าที่กดตอนนั้น
 * ซึ่งอาจเป็นชื่อบทความหรือชื่อตำบล ไม่ใช่ชื่อร้าน
 *
 * ชื่อและสีดึงจากแหล่งเดียวกับ schema และ themeColor ใน Shell เพื่อไม่ให้หลุดจากกัน
 * ไม่ประกาศ display: "standalone" เพราะเว็บนี้เป็นเว็บข้อมูล ไม่ใช่แอป
 * การซ่อนแถบ URL ทำให้ลูกค้าคัดลอกลิงก์ส่งต่อใน LINE ได้ยากขึ้นโดยไม่จำเป็น
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} ช่างแอร์เชียงใหม่`,
    short_name: site.name,
    description: `ช่างแอร์เชียงใหม่ ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ ย้ายแอร์ และล้างเครื่องซักผ้าถึงบ้าน โดยช่างอาร์ม ${site.address.district} จ.${site.address.province}`,
    start_url: "/",
    scope: "/",
    display: "browser",
    lang: "th-TH",
    dir: "ltr",
    background_color: "#ffffff",
    theme_color: "#1d2c56",
    categories: ["business", "utilities"],
    icons: [
      {
        // สร้างจาก app/icon.tsx เป็น PNG 64×64 ใช้ไฟล์เดียวกับ favicon
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
