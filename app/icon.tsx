import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#33508f,#1d2c56)",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none"
          stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v20M4.2 6.5l15.6 9M19.8 6.5l-15.6 9" />
          <path d="M9.5 4.2 12 6.6l2.5-2.4M9.5 19.8 12 17.4l2.5 2.4" />
        </svg>
      </div>
    ),
    size,
  );
}
