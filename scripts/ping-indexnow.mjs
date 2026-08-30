/**
 * ยิง URL ทั้งเว็บเข้า Bing ผ่าน IndexNow หลัง deploy ทุกครั้ง
 * ใช้: node scripts/ping-indexnow.mjs
 *
 * ดึงรายการ URL จาก sitemap ของเว็บจริง (ไม่ใช่ไฟล์ในเครื่อง)
 * เพื่อให้แน่ใจว่ายิงเฉพาะหน้าที่ขึ้นเว็บแล้วจริง
 */
const HOST = "xn--72cahb0jef1en2cxb8ik9a5dn3d.com"; // ช่างแอร์เชียงใหม่.com (punycode เดียวกับ site.url ใน lib/site.ts)
const KEY = "f5c443ffb3fe4faa8599577c89d333db"; // ไฟล์คีย์อยู่ที่ public/<key>.txt

const sitemapRes = await fetch(`https://${HOST}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`ดึง sitemap ไม่ได้: HTTP ${sitemapRes.status}`);
  process.exit(1);
}
const xml = await sitemapRes.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error("ไม่พบ URL ใน sitemap");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});
console.log(`ส่ง ${urls.length} URL → IndexNow ตอบ HTTP ${res.status} (200/202 = สำเร็จ)`);
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
