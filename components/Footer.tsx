import Link from "next/link";
import { site, services, areas } from "@/lib/site";
import { IconPhone, IconLine, IconPin, IconClock, IconSnow } from "./Icons";

/**
 * ฟุตเตอร์ของหน้าอังกฤษและจีน (19 ส.ค. 2569)
 *
 * ของเดิมทุกภาษาใช้ฟุตเตอร์ไทยชุดเดียว คนอ่านอังกฤษหรือจีนจึงเจอลิงก์ไทย 50 กว่าอัน
 * รวมชื่อตำบล 36 ตำบลเป็นอักษรไทย ซึ่งอ่านไม่ออกและกดไปก็เจอหน้าไทยอีก
 *
 * ชุดนี้เหลือเฉพาะสิ่งที่ใช้ได้จริง: หน้าในภาษานั้น ช่องทางติดต่อ เวลาทำการ
 * และข้อมูลนิติบุคคลซึ่งลูกค้าองค์กรต้องใช้ตอนตั้งเบิก
 */
function IntlFooter({ lang, year }: { lang: "en" | "zh-CN"; year: number }) {
  const en = lang === "en";
  const links = en
    ? [
        { href: "/en", label: "Home" },
        { href: "/en/pricing", label: "Full price list" },
        { href: "/en/areas", label: "Areas I cover" },
        { href: "/en/airbnb", label: "Airbnb and rentals" },
      ]
    : [
        { href: "/zh", label: "首页" },
        { href: "/zh/pricing", label: "完整价目表" },
      ];

  return (
    <footer className="mt-4 border-t border-slate-200 bg-sand" lang={lang}>
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <IconSnow className="h-6 w-6" />
            </span>
            <span className="text-base font-extrabold">Pro Fresh Care</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            {en
              ? "Aircon cleaning, repair, installation and relocation across Chiang Mai, plus washing machine drum cleaning. Arm does the work himself and quotes before starting."
              : "清迈空调清洗、维修、安装、移机，以及洗衣机内桶清洗。由 Arm 本人上门施工，开工前先报价。"}
          </p>
          <a href={site.facebook} target="_blank" rel="noopener" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">
            {en ? "See more work on Facebook →" : "在 Facebook 查看更多实拍 →"}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">{en ? "Pages" : "页面"}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-soft hover:text-brand-700 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={en ? "/zh" : "/en"} className="text-ink-soft hover:text-brand-700 hover:underline" hrefLang={en ? "zh-CN" : "en"}>
                {en ? "中文" : "English"}
              </Link>
            </li>
            <li>
              <Link href="/" className="text-ink-soft hover:text-brand-700 hover:underline" hrefLang="th">
                {en ? "Thai site" : "泰文版"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">{en ? "Contact" : "联系方式"}</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`} data-cta="intl-footer-call" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">{en ? "Phone" : "电话"}</span>
                  {site.phone}
                </span>
              </a>
            </li>
            <li>
              <a href={site.lineUrl} target="_blank" rel="noopener" data-cta="intl-footer-line" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconLine className="mt-0.5 h-5 w-5 shrink-0 text-[#06C755]" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">{en ? "LINE · aircon" : "LINE · 空调"}</span>
                  {site.lineId}
                </span>
              </a>
            </li>
            <li>
              <a href={site.lineUrl2} target="_blank" rel="noopener" data-cta="intl-footer-washer-line" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconLine className="mt-0.5 h-5 w-5 shrink-0 text-[#06C755]" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">{en ? "LINE · washing machines" : "LINE · 洗衣机"}</span>
                  {site.lineId2}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-ink-soft">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              {en ? "Mon–Sat 08:00–18:00 · closed Sunday" : "周一至周六 08:00–18:00 · 周日休息"}
            </li>
            <li className="flex items-start gap-2.5 text-ink-soft">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>
                {en
                  ? "Based in San Kamphaeng, Chiang Mai 50130"
                  : "位于清迈 San Kamphaeng 县 50130"}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalNameEn}
            {site.taxId && <> · {en ? "Tax ID" : "税号"} {site.taxId}</>}
          </p>
          <p>{en ? "Aircon cleaning · repair · installation · relocation · washing machine cleaning" : "空调清洗 · 维修 · 安装 · 移机 · 洗衣机清洗"}</p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer({ lang = "th" }: { lang?: "th" | "en" | "zh-CN" }) {
  const year = new Date().getFullYear() + 543; // พ.ศ.
  // ปีคริสต์ศักราชสำหรับหน้าต่างประเทศ ลูกค้าต่างชาติไม่ได้ใช้ พ.ศ.
  if (lang !== "th") return <IntlFooter lang={lang} year={year - 543} />;

  return (
    <footer className="mt-4 border-t border-slate-200 bg-sand">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <IconSnow className="h-6 w-6" />
            </span>
            <span className="text-base font-extrabold">ช่างแอร์เชียงใหม่</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            ผมช่างอาร์ม รับล้างแอร์ ซ่อมแอร์ ติดตั้ง ย้ายแอร์ และล้างเครื่องซักผ้าถึงบ้านทั่วเชียงใหม่
            ดูราคา ขั้นตอน และหลักฐานผลงานจริงได้ก่อนติดต่อ
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline"
          >
            ดูผลงานเพิ่มเติมบน Facebook →
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">งานที่ผมรับ</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/service/${s.slug}`} className="text-ink-soft hover:text-brand-700 hover:underline">
                  {s.name}เชียงใหม่
                </Link>
              </li>
            ))}
            <li>
              <Link href="/price" className="text-ink-soft hover:text-brand-700 hover:underline">
                ตารางราคาทั้งหมด
              </Link>
            </li>
            <li>
              <Link href="/price/repair" className="text-ink-soft hover:text-brand-700 hover:underline">
                ราคาซ่อมแอร์แยกตามอาการ
              </Link>
            </li>
            <li>
              {/*
                ลิงก์นี้ต้องอยู่ในฟุตเตอร์ ห้ามย้ายไปไว้ในเมนูอย่างเดียว (18 ส.ค. 2569)

                หน้า /duan เคยถูกวางไว้แค่ในดรอปดาวน์ "บริการ" กับเมนูมือถือของ Header
                ซึ่งทั้งสองที่เรนเดอร์ต่อเมื่อผู้ใช้กดเปิดเมนูแล้วเท่านั้น ลิงก์จึงไม่เคย
                ติดไปกับ HTML ที่เซิร์ฟเวอร์ส่งออก ตรวจ HTML จริงทั้ง 137 หน้าแล้วพบคำว่า
                duan ศูนย์ครั้ง แปลว่า Googlebot ไม่เคยเห็นหน้านี้จากการไล่ลิงก์เลยสักครั้ง
                ทั้งที่หน้าอยู่ในไซต์แมปและตั้ง index ไว้

                ฟุตเตอร์เป็น Server Component จึงติดไปกับ HTML ทุกหน้าโดยไม่ต้องรอ JS
              */}
              <Link href="/duan" className="text-ink-soft hover:text-brand-700 hover:underline">
                เรียกช่างด่วน นอกเวลา
              </Link>
            </li>
            <li>
              <Link href="/pm25" className="text-ink-soft hover:text-brand-700 hover:underline">
                ล้างแอร์สู้ฝุ่น PM2.5
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-ink-soft hover:text-brand-700 hover:underline">
                ภาพผลงานจริง
              </Link>
            </li>
            <li>
              <Link href="/case-study" className="text-ink-soft hover:text-brand-700 hover:underline">
                Case Study รายงานงานจริง
              </Link>
            </li>
          </ul>

          <h2 className="mt-8 text-sm font-bold tracking-wide text-ink uppercase">อื่น ๆ</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/answers" className="text-ink-soft hover:text-brand-700 hover:underline">
                คำตอบราคาและบริการจากช่าง
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ink-soft hover:text-brand-700 hover:underline">
                คลังความรู้เรื่องแอร์
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ink-soft hover:text-brand-700 hover:underline">
                รู้จักช่างอาร์ม
              </Link>
            </li>
            <li>
              <Link href="/en" className="text-ink-soft hover:text-brand-700 hover:underline">
                English
              </Link>
            </li>
            <li>
              <Link href="/zh" className="text-ink-soft hover:text-brand-700 hover:underline">
                中文
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">พื้นที่ให้บริการ</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/area/${a.slug}`} className="text-ink-soft hover:text-brand-700 hover:underline">
                  ช่างแอร์{a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">ติดต่อผม</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`} data-cta="footer-call" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">เบอร์หลัก</span>
                  {site.phone}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone2Tel}`} className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">เบอร์สำรอง</span>
                  {site.phone2}
                </span>
              </a>
            </li>
            <li>
              <a href={site.lineUrl} target="_blank" rel="noopener" data-cta="footer-line" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconLine className="mt-0.5 h-5 w-5 shrink-0 text-[#06C755]" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">LINE จองคิวงานแอร์</span>
                  {site.lineId}
                </span>
              </a>
            </li>
            <li>
              <a href={site.lineUrl2} target="_blank" rel="noopener" data-cta="footer-washer-line" className="flex items-start gap-2.5 font-semibold text-ink hover:text-brand-700">
                <IconLine className="mt-0.5 h-5 w-5 shrink-0 text-[#06C755]" />
                <span>
                  <span className="block text-xs font-normal text-ink-soft">LINE จองคิวล้างถังซักผ้า</span>
                  {site.lineId2}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-ink-soft">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              {site.daysLabel} {site.hours}
              <br />
              {site.closedNote}
            </li>
            <li className="flex items-start gap-2.5 text-ink-soft">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>
                {site.address.street}
                <br />
                {site.address.subDistrict} {site.address.district}
                <br />
                จ.{site.address.province} {site.address.postalCode}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName} · {site.displayUrl}
            {site.taxId && <> · เลขประจำตัวผู้เสียภาษี {site.taxId}</>}
          </p>
          <p>{site.legalNameEn} · ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ ย้ายแอร์ ล้างเครื่องซักผ้า · เชียงใหม่</p>
        </div>
      </div>
    </footer>
  );
}
