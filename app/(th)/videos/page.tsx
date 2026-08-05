import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema, jsonLd, videoSchema } from "@/lib/schema";
import { Breadcrumbs, CtaBand } from "@/components/Blocks";
import { reels, ReelsShowcase } from "@/components/ReelsShowcase";

const title = "วิดีโอผลงานช่างแอร์เชียงใหม่ ติดตั้ง ล้าง และซ่อมแอร์";
const description = "รวมวิดีโอหน้างานจริงของช่างอาร์ม โปรเฟรชแคร์ เชียงใหม่ งานติดตั้งแอร์ ล้างแอร์ ซ่อมแอร์ แผงวงจร และคอยล์ร้อน";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/videos" },
  openGraph: { title, description, url: `${site.url}/videos`, type: "website" },
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
          <p className="eyebrow">หลักฐานจากหน้างานจริง</p>
          <h1 className="mt-5 text-[1.9rem] leading-[1.3] font-extrabold sm:text-[2.4rem]">วิดีโอผลงานช่างแอร์เชียงใหม่</h1>
          <p className="lead mt-5">งานติดตั้ง ล้าง และซ่อมแอร์ที่ทีมงานลงมือทำจริง วิดีโอจะโหลดเมื่อกดเล่นเท่านั้น</p>
        </section>
      </div>
      <ReelsShowcase />
      <CtaBand title="ต้องการให้ผมเข้าไปดูอาการที่หน้างาน" subtitle="ส่งรูปเครื่อง รุ่น และอาการทาง LINE ได้ครับ ผมประเมินเบื้องต้นและแจ้งค่าใช้จ่ายก่อนนัด" />
    </>
  );
}
