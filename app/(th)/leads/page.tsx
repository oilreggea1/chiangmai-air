import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { getSummary, channelLabel, CONTACT_CHANNELS, type LeadChannel } from "@/lib/leads";

/**
 * หน้าดูสถิติการกดปุ่มโทรและปุ่ม LINE — สำหรับเจ้าของร้านเท่านั้น
 *
 * ป้องกันด้วยรหัสผ่านจาก env LEADS_PASSWORD แล้วจำไว้ในคุกกี้
 * ไม่ใช้รหัสผ่านต่อท้าย URL เพราะ URL ติดอยู่ในประวัติเบราว์เซอร์และ referrer
 * ส่งต่อให้คนอื่นโดยไม่ตั้งใจได้ง่าย
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "สถิติการติดต่อ",
  robots: { index: false, follow: false },
};

const COOKIE = "leads_auth";

/** อายุของการล็อกอินหนึ่งครั้ง — หมดแล้วต้องกรอกรหัสใหม่ */
const SESSION_DAYS = 14;

/**
 * คุกกี้เป็น "เวลาออกบัตร + ลายเซ็น" ไม่ใช่ค่าคงที่ (13 ก.ย. 2569)
 *
 * ของเดิมเก็บ sha256 ของรหัสผ่านตรง ๆ ซึ่งเป็นค่าเดียวตลอดชีวิตของรหัสนั้น
 * ถ้าคุกกี้หลุดไป (ยืมเครื่องดู ส่งภาพหน้าจอ ฯลฯ) คนที่ได้ไปใช้ได้ตลอดไป
 * และเพิกถอนไม่ได้เลยนอกจากเปลี่ยนรหัสผ่าน
 *
 * แบบใหม่ลายเซ็นผูกกับเวลาออกบัตร จึงหมดอายุเองใน 14 วัน
 * และถ้าตั้ง LEADS_COOKIE_SECRET ไว้ การเปลี่ยนค่านั้นคือการเตะทุกเครื่องออกทันที
 * โดยไม่ต้องเปลี่ยนรหัสผ่านที่เจ้าของจำไว้
 */
function secret(password: string) {
  return process.env.LEADS_COOKIE_SECRET ?? `leads:${password}`;
}

function signToken(password: string, issuedAt: number) {
  const sig = createHmac("sha256", secret(password)).update(String(issuedAt)).digest("hex");
  return `${issuedAt}.${sig}`;
}

function tokenValid(password: string, token: string | undefined) {
  if (!token) return false;
  const [issued, sig] = token.split(".");
  const issuedAt = Number(issued);
  if (!Number.isFinite(issuedAt) || !sig) return false;
  if (Date.now() - issuedAt > SESSION_DAYS * 24 * 60 * 60 * 1000) return false;
  return safeEqual(token, signToken(password, issuedAt));
}

function safeEqual(a: string, b: string) {
  // แฮชก่อนเทียบ เพื่อให้สองฝั่งยาวเท่ากันเสมอ timingSafeEqual จึงไม่โยน error
  // เมื่อความยาวไม่เท่ากัน และความยาวของรหัสจริงก็ไม่รั่วออกทางเวลาที่ใช้เทียบ
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

/**
 * เพดานการเดารหัสผ่าน (13 ก.ย. 2569)
 *
 * หน้านี้เป็นที่เดียวบนเว็บที่มีข้อมูลธุรกิจ และของเดิมกรอกผิดได้ไม่จำกัดครั้ง
 * เก็บสถิติไว้ในหน่วยความจำของอินสแตนซ์ ไม่ใช่ฐานข้อมูล เพราะไม่อยากให้หน้าล็อกอิน
 * ต้องพึ่ง Neon (ถ้า DB ล่มต้องยังเข้าได้) และการเดารหัสจริงจะมาจาก IP เดียวรัว ๆ
 * ซึ่งมักถูกส่งไปที่อินสแตนซ์เดิม ข้อจำกัดคือถ้า Vercel กระจายไปหลายอินสแตนซ์
 * เพดานจะหย่อนลงตามจำนวนอินสแตนซ์ แต่ยังตัดการยิงรัวแบบอัตโนมัติได้
 */
const MAX_TRIES = 5;
const WINDOW_MS = 15 * 60 * 1000;
const attempts = new Map<string, { count: number; first: number }>();

function tooManyTries(ip: string) {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now - rec.first > WINDOW_MS) return false;
  return rec.count >= MAX_TRIES;
}

function noteFailure(ip: string) {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now - rec.first > WINDOW_MS) attempts.set(ip, { count: 1, first: now });
  else rec.count += 1;
  // กันแมปโตไม่จำกัดเมื่อมีคนยิงจากหลาย IP
  if (attempts.size > 500) {
    for (const [k, v] of attempts) if (now - v.first > WINDOW_MS) attempts.delete(k);
  }
}

async function clientIp() {
  const h = await headers();
  return (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
}

async function login(formData: FormData) {
  "use server";
  const password = process.env.LEADS_PASSWORD;
  if (!password) return;

  const ip = await clientIp();
  if (tooManyTries(ip)) redirect("/leads?e=wait");

  const entered = String(formData.get("password") ?? "");
  if (!safeEqual(entered, password)) {
    noteFailure(ip);
    redirect("/leads?e=bad");
  }

  attempts.delete(ip);
  const jar = await cookies();
  jar.set(COOKIE, signToken(password, Date.now()), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * SESSION_DAYS,
    path: "/leads",
  });
  // กันฟอร์มค้างพารามิเตอร์ ?e= เดิมไว้หลังเข้าสำเร็จ
  redirect("/leads");
}

function Bar({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <span className="ml-3 inline-block h-2 w-24 shrink-0 rounded-full bg-slate-200 align-middle">
      <span className="block h-2 rounded-full bg-brand-600" style={{ width: `${pct}%` }} />
    </span>
  );
}

function Table({
  title, note, rows, labelOf,
}: {
  title: string;
  note?: string;
  rows: { key: string; clicks: number }[];
  labelOf?: (k: string) => string;
}) {
  const max = rows[0]?.clicks ?? 0;
  return (
    <div className="card overflow-hidden">
      <h2 className="border-b border-slate-100 bg-slate-50 px-5 py-4 text-lg font-bold">{title}</h2>
      {note && <p className="border-b border-slate-100 px-5 py-3 text-sm text-ink-soft">{note}</p>}
      {rows.length === 0 ? (
        <p className="px-5 py-6 text-sm text-ink-soft">ยังไม่มีข้อมูลในช่วงนี้</p>
      ) : (
        <ul className="divide-y divide-slate-100">
          {rows.map((r) => (
            <li key={r.key} className="flex items-center justify-between gap-3 px-5 py-3.5">
              <span className="min-w-0 truncate text-[15px] text-ink-soft">
                {labelOf ? labelOf(r.key) : r.key}
              </span>
              <span className="flex shrink-0 items-center">
                <strong className="text-lg font-extrabold text-brand-700">{r.clicks}</strong>
                <Bar value={r.clicks} max={max} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ days?: string; e?: string }>;
}) {
  const password = process.env.LEADS_PASSWORD;
  const jar = await cookies();
  const authed = Boolean(password) && tokenValid(password!, jar.get(COOKIE)?.value);

  if (!password) {
    return (
      <section className="section">
        <div className="wrap max-w-lg">
          <h1 className="h2">ยังตั้งค่าไม่เสร็จ</h1>
          <p className="lead mt-4">
            ต้องตั้งค่า <code>LEADS_PASSWORD</code> และ <code>DATABASE_URL</code> ใน Vercel ก่อนจึงจะดูสถิติได้
          </p>
        </div>
      </section>
    );
  }

  if (!authed) {
    const error = (await searchParams).e;
    return (
      <section className="section">
        <div className="wrap max-w-sm">
          <h1 className="h2">สถิติการติดต่อ</h1>
          {error === "bad" && (
            <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
              รหัสผ่านไม่ถูกต้อง ถ้ากรอกผิดเกิน {MAX_TRIES} ครั้งในรอบเดียวกัน ระบบจะพักการกรอกไว้ชั่วคราว
            </p>
          )}
          {error === "wait" && (
            <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
              กรอกผิดหลายครั้งเกินไป รอ 15 นาทีแล้วลองใหม่
            </p>
          )}
          <form action={login} className="mt-6 space-y-3">
            <input
              type="password"
              name="password"
              placeholder="รหัสผ่าน"
              autoFocus
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
            <button type="submit" className="btn-call w-full justify-center py-3">เข้าดูสถิติ</button>
          </form>
        </div>
      </section>
    );
  }

  const params = await searchParams;
  const days = [7, 30, 90].includes(Number(params.days)) ? Number(params.days) : 30;

  let data;
  try {
    data = await getSummary(days);
  } catch {
    return (
      <section className="section">
        <div className="wrap max-w-lg">
          <h1 className="h2">เชื่อมฐานข้อมูลไม่ได้</h1>
          <p className="lead mt-4">ตรวจว่าตั้งค่า <code>DATABASE_URL</code> ใน Vercel แล้วหรือยัง</p>
        </div>
      </section>
    );
  }

  const phone = data.byChannel.find((c) => c.channel === "phone")?.clicks ?? 0;
  const lineTotal = data.byChannel
    .filter((c) => c.channel.startsWith("line"))
    .reduce((n, c) => n + c.clicks, 0);
  const priceViews = data.byChannel.find((c) => c.channel === "price_view")?.clicks ?? 0;
  // นับเฉพาะช่องทางติดต่อจริง ไม่รวมการกดดูราคา ไม่งั้นยอดจะพองขึ้นโดยที่สายจริงเท่าเดิม
  const contactTotal = data.byChannel
    .filter((c) => CONTACT_CHANNELS.includes(c.channel as LeadChannel))
    .reduce((n, c) => n + c.clicks, 0);
  const perDay = data.days > 0 ? (contactTotal / data.days).toFixed(1) : "0";

  return (
    <section className="section">
      <div className="wrap max-w-4xl">
        <h1 className="h2">สถิติการติดต่อ</h1>
        <p className="lead mt-3">
          นับจากการกดปุ่มบนเว็บ ไม่ใช่จำนวนสายที่รับจริง ยอดกดติดต่อนับเฉพาะปุ่มโทรและปุ่ม LINE
          ส่วนการกดดูราคาแยกไว้ต่างหากเพราะเป็นความสนใจ ยังไม่ใช่การติดต่อ
        </p>

        <div className="mt-6 flex gap-2">
          {[7, 30, 90].map((d) => (
            <a
              key={d}
              href={`/leads?days=${d}`}
              className={d === days ? "btn-call px-4 py-2 text-sm" : "btn-ghost px-4 py-2 text-sm"}
            >
              {d} วัน
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "กดติดต่อทั้งหมด", value: contactTotal },
            { label: "กดโทร", value: phone },
            { label: "กด LINE", value: lineTotal },
            { label: "กดดูราคา", value: priceViews },
          ].map((s) => (
            <div key={s.label} className="card p-5">
              <p className="text-sm text-ink-soft">{s.label}</p>
              <p className="mt-1 text-4xl font-extrabold text-brand-700">{s.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-ink-soft">เฉลี่ยวันละ {perDay} ครั้ง</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Table
            title="แยกตามช่องทาง"
            rows={data.byChannel.map((c) => ({ key: c.channel, clicks: c.clicks }))}
            labelOf={(k) => channelLabel[k as LeadChannel] ?? k}
          />
          <Table
            title="หน้าที่ทำให้คนกดติดต่อมากที่สุด"
            note="ใช้ตัดสินใจว่าควรทุ่มเนื้อหาและโฆษณาไปที่หน้าไหน"
            rows={data.byPage.map((r) => ({ key: r.page, clicks: r.clicks }))}
          />
          <Table
            title="ปุ่มที่ถูกกดมากที่สุด"
            note="ชื่อปุ่มมาจาก data-cta ในโค้ด บอกว่าคนกดจากตำแหน่งไหนของหน้า"
            rows={data.byCta.map((r) => ({ key: r.cta, clicks: r.clicks }))}
          />
          <Table
            title="รายวัน"
            note="วันตัดตามเวลาไทย"
            rows={data.byDay.map((r) => ({ key: r.day, clicks: r.clicks }))}
          />
        </div>
      </div>
    </section>
  );
}
