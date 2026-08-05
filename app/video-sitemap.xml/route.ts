import { reels } from "@/components/ReelsShowcase";
import { site } from "@/lib/site";

function xml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const videos = reels
    .map(
      (video) => `
    <video:video>
      <video:thumbnail_loc>${xml(`${site.url}/videos/reels/${video.id}.jpg`)}</video:thumbnail_loc>
      <video:title>${xml(video.title)}</video:title>
      <video:description>${xml(`${video.title} ผลงานจริงของช่างอาร์ม โปรเฟรชแคร์ ในจังหวัดเชียงใหม่`)}</video:description>
      <video:content_loc>${xml(`${site.url}/videos/reels/${video.id}.mp4`)}</video:content_loc>
    </video:video>`,
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${xml(`${site.url}/videos`)}</loc>${videos}
  </url>
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
