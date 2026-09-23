import { site, p } from "@/lib/site";
import { jsonLd, videoSchema } from "@/lib/schema";
import { IconChevron } from "./Icons";
import Link from "next/link";
import { ReelCard } from "./ReelCard";

/**
 * ชื่อคลิป 3 ภาษา (24 ก.ย. 2569) — หน้าอังกฤษ/จีนใช้ titleEn/titleZh ทั้งบนการ์ดและใน VideoObject
 * ห้ามพิมพ์ตัวเลขราคาในชื่อ ให้ดึงจาก p (คลิป 3177769309038728 เคยพิมพ์ 500 ตรง ๆ)
 */
export type Reel = { id: string; title: string; titleEn: string; titleZh: string; desc?: string; topic?: string };

export const reels: Reel[] = [
  { id: "1288260533386347", title: "ติดตั้งแอร์ฝังฝ้าโดยทีมช่าง", titleEn: "Installing a ceiling cassette unit", titleZh: "安装嵌入式天花板空调" },
  { id: "1261789992704152", title: "เบื้องหลังงานติดตั้งแอร์", titleEn: "Behind the scenes of an installation", titleZh: "空调安装施工现场" },
  { id: "3663347230638937", title: "ซ่อมแอร์ Panasonic ไฟ Timer กระพริบ", titleEn: "Repairing a Panasonic unit with a blinking timer light", titleZh: "维修 Panasonic 空调定时灯闪烁故障" },
  { id: "1269611208233633", title: "งานติดตั้งแอร์ในพื้นที่สูง", titleEn: "Installation work at height", titleZh: "高处空调安装作业" },
  { id: "1151370080220641", title: "ตรวจซ่อมแผงวงจรแอร์", titleEn: "Diagnosing a control board fault", titleZh: "检修空调电路板" },
  { id: "1284322489799860", title: "ล้างคอยล์และชิ้นส่วนแอร์", titleEn: "Washing the coil and removable parts", titleZh: "清洗蒸发器与可拆部件" },
  { id: "3177769309038728", title: `ล้างแอร์ติดผนัง ราคา ${p.wash.std} บาท`, titleEn: `Standard wall-unit clean, ${p.wash.std} THB`, titleZh: `壁挂机常规清洗，${p.wash.std} 泰铢` },
  { id: "1748747562375875", title: "ถอดล้างพิเศษ แก้ปัญหาน้ำหยด", titleEn: "Full strip-down clean to stop water dripping", titleZh: "深度拆洗，解决漏水问题" },
  { id: "1232175024939599", title: "ล้างแอร์แขวนสำหรับร้านและสำนักงาน", titleEn: "Cleaning a suspended unit in a shop", titleZh: "清洗商铺与办公室的吊顶机" },
  { id: "1336389494094369", title: "ล้างคอยล์ร้อนโดยทีมช่าง", titleEn: "Washing the outdoor condenser coil", titleZh: "清洗室外机冷凝器" },

  /**
   * คลิปงานเครื่องซักผ้า เพิ่ม 13 ก.ย. 2569 จากเพจงานเครื่องซักผ้าของเจ้าของ
   * topic ใช้เลือกคลิปให้ตรงกับหน้าที่แสดง หน้าเครื่องฝาบนไม่ควรขึ้นคลิปเครื่องฝาหน้า
   * คลิปงานแอร์ไม่มี topic จึงถือเป็นงานแอร์ทั้งหมด
   * ตรวจซ้ำ 24 ก.ย. 2569: เพจนี้มีคลิป 10 ตัว อยู่บนเว็บครบแล้ว (ยกเว้นคลิปโปรมกราคมที่หมดเขต)
   */
  { id: "wm-fa-na-khan-ton", title: "ขั้นตอนทำความสะอาดเครื่องซักผ้าฝาหน้า", titleEn: "Step by step: cleaning a front loader", titleZh: "前开式洗衣机清洗全过程", desc: "ขั้นตอนทำความสะอาดเครื่องซักผ้าฝาหน้าถึงบ้านในเชียงใหม่ ตั้งแต่ถอดชิ้นส่วนจนล้างเสร็จ", topic: "washer-front" },
  { id: "wm-fa-na-thot-lang", title: "ถอดล้างถังเครื่องซักผ้าฝาหน้า", titleEn: "Front-loader drum out and washed", titleZh: "拆洗前开式洗衣机内桶", desc: "ถอดถังเครื่องซักผ้าฝาหน้าออกมาล้างถึงผิวด้านนอกถัง จากงานจริงในเชียงใหม่", topic: "washer-front" },
  { id: "wm-rakha-fa-na-vs-fa-bon", title: "เหตุใดค่าล้างเครื่องฝาหน้าจึงสูงกว่าฝาบน", titleEn: "Why a front loader costs more to clean than a top loader", titleZh: "为什么前开式比上开式清洗费用高", desc: "เหตุใดค่าล้างเครื่องซักผ้าฝาหน้าจึงสูงกว่าฝาบน อธิบายจากขั้นตอนถอดจริงหน้างาน", topic: "washer-front" },
  { id: "wm-fa-bon-samsung", title: "ถอดล้างเครื่องซักผ้าฝาบนยี่ห้อซัมซุง", titleEn: "Strip-down clean of a Samsung top loader", titleZh: "拆洗三星上开式洗衣机", desc: "ถอดล้างเครื่องซักผ้าฝาบนยี่ห้อซัมซุงถึงบ้านในเชียงใหม่ ถอดถังในออกมาล้างแยก", topic: "washer-top" },
  { id: "wm-fa-bon-vs-fa-na", title: "ความต่างของเครื่องฝาบนกับฝาหน้าเมื่อถอดล้าง", titleEn: "Top loader vs front loader once they are apart", titleZh: "上开式与前开式拆开后的区别", desc: "เทียบโครงสร้างเครื่องซักผ้าฝาบนกับฝาหน้าในขั้นตอนถอดล้าง", topic: "washer" },
  { id: "wm-lang-thang-chiangmai", title: "ล้างถังเครื่องซักผ้าถึงบ้านในเชียงใหม่", titleEn: "Washing machine drum clean at a home in Chiang Mai", titleZh: "清迈上门清洗洗衣机内桶", desc: "ล้างถังเครื่องซักผ้าถึงบ้านในเชียงใหม่ ถอดถังออกมาล้างทุกชิ้นแล้วประกอบกลับ", topic: "washer" },

  /** ชุดที่สองจากคลิป Reels ของเพจเดียวกัน เพิ่ม 13 ก.ย. 2569 */
  { id: "wm-yot-rian-thot-lang", title: "ถอดล้างเครื่องซักผ้าหยอดเหรียญ", titleEn: "Strip-down clean of a coin-operated machine", titleZh: "拆洗投币式洗衣机", desc: "ถอดล้างเครื่องซักผ้าหยอดเหรียญ งานจริงในเชียงใหม่", topic: "washer-top" },
  { id: "wm-fa-na-thot-thang", title: "ถอดถังเครื่องซักผ้าฝาหน้าออกจากตัวเครื่อง", titleEn: "Lifting the drum out of a front loader", titleZh: "把前开式洗衣机内桶从机身取出", desc: "ถอดถังเครื่องซักผ้าฝาหน้าออกจากตัวเครื่องเพื่อล้างผิวด้านนอกถัง", topic: "washer-front" },
  { id: "wm-thang-stainless-lang-nok", title: "ถังสเตนเลสที่ถอดออกมาล้างนอกตัวเครื่อง", titleEn: "Stainless drum washed outside the machine", titleZh: "取出机外清洗的不锈钢内桶", desc: "ถังสเตนเลสที่ถอดออกมาล้างนอกตัวเครื่อง", topic: "washer" },
  { id: "wm-khrap-fang-nae-thang", title: "คราบที่ฝังแน่นอยู่กับผนังถังซัก", titleEn: "The build-up stuck to the drum wall", titleZh: "内桶壁上顽固的污垢", desc: "คราบที่ฝังแน่นอยู่กับผนังถังซัก เห็นชัดเมื่อถอดถังออกมา", topic: "washer" },
  { id: "wm-khrap-phanang-thang", title: "สภาพผนังถังซักก่อนลงมือล้าง", titleEn: "The drum wall before cleaning", titleZh: "清洗前的内桶壁状况", desc: "สภาพผนังถังซักก่อนลงมือล้าง", topic: "washer" },
  { id: "wm-khat-lang-khrap-thang", title: "ขั้นตอนขัดล้างคราบในถังซัก", titleEn: "Scrubbing the deposits off the drum", titleZh: "刷洗内桶污垢的过程", desc: "ขั้นตอนขัดล้างคราบภายในถังซักเครื่องซักผ้า", topic: "washer" },
];

/** ชื่อคลิปตามภาษาของหน้า ใช้ทั้งบนการ์ดและใน VideoObject schema */
export function reelTitle(r: Reel, lang: "th" | "en" | "zh-CN") {
  return lang === "en" ? r.titleEn : lang === "zh-CN" ? r.titleZh : r.title;
}

/** คลิปที่หน้าอังกฤษ/จีนเลือกใช้ ระบุด้วยรหัสตรง ๆ (เหตุผลเดียวกับ langAirReelIds ในหน้าบริการ) */
export const intlReelSets = {
  cleaning: ["3177769309038728", "1284322489799860", "1748747562375875"],
  install: ["1288260533386347", "1261789992704152", "1269611208233633"],
  washer: ["wm-fa-na-khan-ton", "wm-fa-na-thot-lang", "wm-fa-bon-samsung", "wm-lang-thang-chiangmai", "wm-thang-stainless-lang-nok", "wm-khat-lang-khrap-thang"],
} as const;

export function reelsByIds(ids: readonly string[]) {
  return ids.map((id) => reels.find((r) => r.id === id)).filter((r): r is Reel => Boolean(r));
}

/**
 * กริดคลิปสำหรับหน้าอังกฤษและจีน (24 ก.ย. 2569)
 * ReelsShowcase ด้านล่างเป็นภาษาไทยล้วน หน้าต่างประเทศจึงใช้ตัวนี้ พร้อมหัวข้อของตัวเองและ VideoObject ชื่อภาษานั้น
 */
export function IntlReels({
  lang, items, eyebrow, heading, lead, moreLabel,
}: { lang: "en" | "zh-CN"; items: Reel[]; eyebrow: string; heading: string; lead: string; moreLabel: string }) {
  const named = items.map((r) => ({ id: r.id, title: reelTitle(r, lang), desc: reelTitle(r, lang) }));
  return (
    <section className="section bg-sand" lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(videoSchema(named))} />
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2 mt-4">{heading}</h2>
          <p className="lead mt-3">{lead}</p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {named.map((reel, i) => (
            <ReelCard key={reel.id} id={reel.id} title={reel.title} eager={i === 0} lang={lang} />
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a href={site.facebook} target="_blank" rel="noopener" className="btn-ghost">
            {moreLabel}
            <IconChevron className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

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
