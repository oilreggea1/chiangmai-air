import { site } from "@/lib/site";
import { IconChevron } from "./Icons";
import Link from "next/link";

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
];

/** วิดีโอไม่ดาวน์โหลดจนกดเล่น เพื่อลดการใช้ข้อมูลและรักษา Core Web Vitals */
export function ReelsShowcase({ limit = reels.length }: { limit?: number }) {
  const visibleReels = reels.slice(0, limit);
  return (
    <section className="section bg-sand" aria-labelledby="work-videos-title">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">วิดีโอจากหน้างานจริง</p>
          <h2 id="work-videos-title" className="h2 mt-4">ดูขั้นตอนการทำงานของช่างอาร์ม</h2>
          <p className="lead mt-3">
            คัดจากคลิปในเพจ Facebook ของผม วิดีโอจะโหลดเมื่อกดเล่นเท่านั้น จึงไม่ทำให้หน้าเว็บโหลดไฟล์วิดีโอพร้อมกัน
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleReels.map((reel) => (
            <li id={`video-${reel.id}`} key={reel.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <video
                controls
                playsInline
                preload="none"
                poster={`/videos/reels/${reel.id}.jpg`}
                className="aspect-[9/16] w-full bg-slate-950 object-cover"
                aria-label={reel.title}
              >
                <source src={`/videos/reels/${reel.id}.mp4`} type="video/mp4" />
                เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
              </video>
              <p className="px-4 py-4 font-semibold leading-7">{reel.title}</p>
            </li>
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
