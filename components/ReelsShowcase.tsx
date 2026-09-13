import { site } from "@/lib/site";
import { IconChevron } from "./Icons";
import Link from "next/link";
import { ReelCard } from "./ReelCard";

export const reels = [
  { id: "1288260533386347", title: "ติดตั้งแอร์ฝังฝ้าโดยทีมช่าง" },
  { id: "1261789992704152", title: "เบื้องหลังงานติดตั้งแอร์" },
  { id: "3663347230638937", title: "ซ่อมแอร์ Panasonic ไฟ Timer กระพริบ" },
  { id: "1269611208233633", title: "งานติดตั้งแอร์ในพื้นที่สูง" },
  { id: "1151370080220641", title: "ตรวจซ่อมแผงวงจรแอร์" },
  { id: "1284322489799860", title: "ล้างคอยล์และชิ้นส่วนแอร์" },
  { id: "3177769309038728", title: "ล้างแอร์ติดผนัง ราคา 500 บาท" },
  { id: "1748747562375875", title: "ถอดล้างพิเศษ แก้ปัญหาน้ำหยด" },
  { id: "1232175024939599", title: "ล้างแอร์แขวนสำหรับร้านและสำนักงาน" },
  { id: "1336389494094369", title: "ล้างคอยล์ร้อนโดยทีมช่าง" },

  /**
   * คลิปงานเครื่องซักผ้า เพิ่ม 13 ก.ย. 2569 จากเพจงานเครื่องซักผ้าของเจ้าของ
   * topic ใช้เลือกคลิปให้ตรงกับหน้าที่แสดง หน้าเครื่องฝาบนไม่ควรขึ้นคลิปเครื่องฝาหน้า
   * คลิปงานแอร์ไม่มี topic จึงถือเป็นงานแอร์ทั้งหมด
   */
  { id: "wm-fa-na-khan-ton", title: "ขั้นตอนทำความสะอาดเครื่องซักผ้าฝาหน้า", desc: "ขั้นตอนทำความสะอาดเครื่องซักผ้าฝาหน้าถึงบ้านในเชียงใหม่ ตั้งแต่ถอดชิ้นส่วนจนล้างเสร็จ", topic: "washer-front" },
  { id: "wm-fa-na-thot-lang", title: "ถอดล้างถังเครื่องซักผ้าฝาหน้า", desc: "ถอดถังเครื่องซักผ้าฝาหน้าออกมาล้างถึงผิวด้านนอกถัง จากงานจริงในเชียงใหม่", topic: "washer-front" },
  { id: "wm-rakha-fa-na-vs-fa-bon", title: "เหตุใดค่าล้างเครื่องฝาหน้าจึงสูงกว่าฝาบน", desc: "เหตุใดค่าล้างเครื่องซักผ้าฝาหน้าจึงสูงกว่าฝาบน อธิบายจากขั้นตอนถอดจริงหน้างาน", topic: "washer-front" },
  { id: "wm-fa-bon-samsung", title: "ถอดล้างเครื่องซักผ้าฝาบนยี่ห้อซัมซุง", desc: "ถอดล้างเครื่องซักผ้าฝาบนยี่ห้อซัมซุงถึงบ้านในเชียงใหม่ ถอดถังในออกมาล้างแยก", topic: "washer-top" },
  { id: "wm-fa-bon-vs-fa-na", title: "ความต่างของเครื่องฝาบนกับฝาหน้าเมื่อถอดล้าง", desc: "เทียบโครงสร้างเครื่องซักผ้าฝาบนกับฝาหน้าในขั้นตอนถอดล้าง", topic: "washer" },
  { id: "wm-lang-thang-chiangmai", title: "ล้างถังเครื่องซักผ้าถึงบ้านในเชียงใหม่", desc: "ล้างถังเครื่องซักผ้าถึงบ้านในเชียงใหม่ ถอดถังออกมาล้างทุกชิ้นแล้วประกอบกลับ", topic: "washer" },

  /** ชุดที่สองจากคลิป Reels ของเพจเดียวกัน เพิ่ม 13 ก.ย. 2569 */
  { id: "wm-yot-rian-thot-lang", title: "ถอดล้างเครื่องซักผ้าหยอดเหรียญ", desc: "ถอดล้างเครื่องซักผ้าหยอดเหรียญ งานจริงในเชียงใหม่", topic: "washer-top" },
  { id: "wm-fa-na-thot-thang", title: "ถอดถังเครื่องซักผ้าฝาหน้าออกจากตัวเครื่อง", desc: "ถอดถังเครื่องซักผ้าฝาหน้าออกจากตัวเครื่องเพื่อล้างผิวด้านนอกถัง", topic: "washer-front" },
  { id: "wm-thang-stainless-lang-nok", title: "ถังสเตนเลสที่ถอดออกมาล้างนอกตัวเครื่อง", desc: "ถังสเตนเลสที่ถอดออกมาล้างนอกตัวเครื่อง", topic: "washer" },
  { id: "wm-khrap-fang-nae-thang", title: "คราบที่ฝังแน่นอยู่กับผนังถังซัก", desc: "คราบที่ฝังแน่นอยู่กับผนังถังซัก เห็นชัดเมื่อถอดถังออกมา", topic: "washer" },
  { id: "wm-khrap-phanang-thang", title: "สภาพผนังถังซักก่อนลงมือล้าง", desc: "สภาพผนังถังซักก่อนลงมือล้าง", topic: "washer" },
  { id: "wm-khat-lang-khrap-thang", title: "ขั้นตอนขัดล้างคราบในถังซัก", desc: "ขั้นตอนขัดล้างคราบภายในถังซักเครื่องซักผ้า", topic: "washer" },
];

/**
 * วิดีโอและภาพปกไม่ดาวน์โหลดจนกว่าจะจำเป็น
 * ภาพปกเป็น lazy อยู่ใน ReelCard ซึ่งอธิบายเหตุผลไว้ครบในไฟล์นั้น
 */
export function ReelsShowcase({ limit = reels.length }: { limit?: number }) {
  const visibleReels = reels.slice(0, limit);
  return (
    <section className="section bg-sand" aria-labelledby="work-videos-title">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">วิดีโอจากหน้างานจริง</p>
          <h2 id="work-videos-title" className="h2 mt-4">ดูขั้นตอนการทำงานของช่างอาร์ม</h2>
          {/* หมายเหตุเชิงเทคนิค: คลิปคัดมาจากเพจ Facebook และเป็น lazy-load — วิดีโอโหลดเมื่อกดเล่นเท่านั้น
              จึงไม่ทำให้หน้าเว็บโหลดไฟล์วิดีโอพร้อมกัน (รายละเอียดใน ReelCard) ห้ามเอาข้อความนี้ไปแสดงให้ลูกค้าอ่าน */}
          <p className="lead mt-3">
            คลิปจากหน้างานจริงในเชียงใหม่ ตั้งแต่ปูผ้าใบจนถึงชิ้นส่วนที่ถอดล้าง
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleReels.map((reel, i) => (
            <ReelCard key={reel.id} id={reel.id} title={reel.title} eager={i === 0} />
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {limit < reels.length && (
            <Link href="/videos" className="btn-ghost">
              ดูวิดีโอทั้งหมด {reels.length} คลิป
              <IconChevron className="h-4 w-4" />
            </Link>
          )}
          <a href={site.facebook} target="_blank" rel="noopener" className="btn-ghost">
            ดูคลิปเพิ่มเติมบน Facebook
            <IconChevron className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
