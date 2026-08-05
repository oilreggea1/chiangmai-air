import { ImageResponse } from "next/og";
import { site, p } from "@/lib/site";

export const alt = "ช่างแอร์เชียงใหม่ โปรเฟรชแคร์ ล้างแอร์ ซ่อมแอร์ ถึงบ้าน";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #111a2e 0%, #1d2c56 52%, #33508f 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 22px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.16)",
            fontSize: 28,
          }}
        >
          สันกำแพง · เชียงใหม่
        </div>

        <div style={{ display: "flex", fontSize: 82, fontWeight: 800, marginTop: 34, lineHeight: 1.2 }}>
          ช่างแอร์เชียงใหม่
        </div>
        <div style={{ display: "flex", fontSize: 46, marginTop: 10, color: "#c6d4ee" }}>
          ล้างแอร์ · ซ่อมแอร์ · ติดตั้ง · ย้ายแอร์ ถึงบ้าน
        </div>

        <div style={{ display: "flex", gap: 20, marginTop: 48 }}>
          <div
            style={{
              display: "flex",
              padding: "18px 34px",
              borderRadius: 18,
              background: "#0e7490",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            โทร {site.phone}
          </div>
          <div
            style={{
              display: "flex",
              padding: "18px 34px",
              borderRadius: 18,
              background: "rgba(255,255,255,0.14)",
              fontSize: 40,
              fontWeight: 600,
            }}
          >
            ล้าง {p.wash.std}.- · 3 เครื่อง {p.wash.stdBulk}.-
          </div>
        </div>
      </div>
    ),
    size,
  );
}
