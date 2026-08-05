import { neon } from "@neondatabase/serverless";

/**
 * เก็บสถิติการกดปุ่มโทรและปุ่ม LINE ลง Neon เอง
 *
 * ทำไมไม่ใช้ Vercel Analytics: บัญชีอยู่แผน Hobby ซึ่งไม่รองรับ custom event
 * คำสั่ง track() ที่เคยเรียกจึงถูกทิ้งทั้งหมด ไม่มีข้อมูลเก็บไว้เลย
 * (ดูตารางแผนที่ vercel.com/docs/analytics/limits-and-pricing — ช่อง Custom Events ของ Hobby เป็น "-")
 *
 * ข้อมูลที่เก็บตั้งใจให้น้อยที่สุดเท่าที่ตอบคำถามได้ ไม่เก็บ IP ไม่เก็บ user agent
 * ไม่มีอะไรที่ระบุตัวบุคคลได้ เพราะไม่จำเป็นต่อการนับว่ามีคนกดกี่ครั้ง
 */

export type LeadChannel = "phone" | "line_air" | "line_washing_machine";

/** ช่องทางที่ยอมรับ กันไม่ให้ยิงค่ามั่วเข้ามาทำให้ตัวเลขเพี้ยน */
export const CHANNELS: LeadChannel[] = ["phone", "line_air", "line_washing_machine"];

export const channelLabel: Record<LeadChannel, string> = {
  phone: "กดโทร",
  line_air: "กด LINE งานแอร์",
  line_washing_machine: "กด LINE ล้างเครื่องซักผ้า",
};

function db() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("ยังไม่ได้ตั้งค่า DATABASE_URL");
  return neon(url);
}

/**
 * สร้างตารางถ้ายังไม่มี เรียกก่อนอ่าน/เขียนทุกครั้ง
 * ใช้วิธีนี้แทนไฟล์ migration เพราะมีตารางเดียวและไม่มีการเปลี่ยนโครงสร้างบ่อย
 */
async function ensureTable(sql: ReturnType<typeof db>) {
  await sql`
    CREATE TABLE IF NOT EXISTS lead_clicks (
      id         bigserial PRIMARY KEY,
      channel    text        NOT NULL,
      cta        text        NOT NULL,
      page       text        NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  `;
  // ดัชนีตามเวลา เพราะทุกคำถามที่ถามคือ "ช่วงนี้กดกี่ครั้ง"
  await sql`CREATE INDEX IF NOT EXISTS lead_clicks_created_at_idx ON lead_clicks (created_at DESC)`;
}

export async function recordClick(input: { channel: string; cta: string; page: string }) {
  const sql = db();
  await ensureTable(sql);
  await sql`
    INSERT INTO lead_clicks (channel, cta, page)
    VALUES (${input.channel}, ${input.cta.slice(0, 60)}, ${input.page.slice(0, 200)})
  `;
}

export type Summary = {
  days: number;
  total: number;
  byChannel: { channel: string; clicks: number }[];
  byPage: { page: string; clicks: number }[];
  byCta: { cta: string; clicks: number }[];
  byDay: { day: string; clicks: number }[];
};

export async function getSummary(days: number): Promise<Summary> {
  const sql = db();
  await ensureTable(sql);
  const since = `${days} days`;

  const [total, byChannel, byPage, byCta, byDay] = await Promise.all([
    sql`SELECT count(*)::int AS n FROM lead_clicks WHERE created_at > now() - ${since}::interval`,
    sql`SELECT channel, count(*)::int AS clicks FROM lead_clicks
        WHERE created_at > now() - ${since}::interval
        GROUP BY channel ORDER BY clicks DESC`,
    sql`SELECT page, count(*)::int AS clicks FROM lead_clicks
        WHERE created_at > now() - ${since}::interval
        GROUP BY page ORDER BY clicks DESC LIMIT 15`,
    sql`SELECT cta, count(*)::int AS clicks FROM lead_clicks
        WHERE created_at > now() - ${since}::interval
        GROUP BY cta ORDER BY clicks DESC LIMIT 15`,
    // ตัดวันตามเวลาไทย ไม่ใช่ UTC ไม่งั้นยอดของช่วงเย็นจะถูกนับเป็นวันถัดไป
    sql`SELECT to_char(created_at AT TIME ZONE 'Asia/Bangkok', 'YYYY-MM-DD') AS day,
               count(*)::int AS clicks
        FROM lead_clicks
        WHERE created_at > now() - ${since}::interval
        GROUP BY day ORDER BY day DESC`,
  ]);

  return {
    days,
    total: (total[0]?.n as number) ?? 0,
    byChannel: byChannel as Summary["byChannel"],
    byPage: byPage as Summary["byPage"],
    byCta: byCta as Summary["byCta"],
    byDay: byDay as Summary["byDay"],
  };
}
