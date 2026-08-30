import type { Metadata } from "next";
import { breadcrumbSchema, jsonLd, videoSchema } from "@/lib/schema";
import { share } from "@/lib/seo";
import { Breadcrumbs, CtaBand } from "@/components/Blocks";
import { reels, ReelsShowcase } from "@/components/ReelsShowcase";

const title = "วิดีโอผลงานช่างแอร์เชียงใหม่ ล้าง ติดตั้ง ซ่อม";
const description = "รวมวิดีโอหน้างานจริงของช่างอาร์ม โปรเฟรชแคร์ เชียงใหม่ งานติดตั้งแอร์ ล้างแอร์ ซ่อมแอร์ แผงวงจร และคอยล์ร้อน";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/videos" },
  ...share({ title, description, path: `/videos`, type: "website" }),
};

const trail = [
  { name: "หน้าแรก", path: "/" },
  { name: "วิดีโอผลงาน", path: "/videos" },
];

export default function VideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(videoSchema(reels))} />
      <div className="bg-gradient-to-b from-brand-50 to-white">
        <Breadcrumbs trail={trail} />
        <section className="wrap max-w-3xl pt-8 pb-10 text-center">
          <p className="eyebrow">คลิปจากหน้างานในเชียงใหม่</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">วิดีโอผลงานช่างแอร์เชียงใหม่</h1>
          {/* หมายเหตุเชิงเทคนิค: วิดีโอเป็น lazy-load โหลดเมื่อกดเล่นเท่านั้น จึงไม่ถ่วงหน้าเว็บ (ดูรายละเอียดใน ReelCard) — เป็นข้อมูลสำหรับคนแก้โค้ด ห้ามเอาไปเขียนบนหน้าเว็บ */}
          <p className="lead mt-5">คลิปจากหน้างานจริงในเชียงใหม่ ตั้งแต่ปูผ้าใบจนถึงชิ้นส่วนที่ถอดล้าง</p>
        </section>
      </div>
      <ReelsShowcase />
      <CtaBand title="ต้องการให้ผมเข้าไปดูอาการที่หน้างาน" subtitle="ส่งรูปเครื่อง รุ่น และอาการทาง LINE ได้ครับ ผมประเมินเบื้องต้นและแจ้งค่าใช้จ่ายก่อนนัด" />
    </>
  );
}
