import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "ngeaplikasiyuk — Mengubah Ide Menjadi Produk Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Logo dibaca dari /public saat build dan disematkan sebagai data URI
// (ImageResponse tidak bisa fetch URL relatif saat static generation).
const logoSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "logo.png")
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          padding: "90px",
          background: "#561C24",
          color: "#FDF8F3",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={320} height={320} style={{ borderRadius: 56 }} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, letterSpacing: 6, color: "#C7B7A3", textTransform: "uppercase" }}>
            Software Studio · Bandung
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 20 }}>
            ngeaplikasiyuk
          </div>
          <div style={{ fontSize: 34, marginTop: 20, color: "#E8D8C4", lineHeight: 1.3 }}>
            Mengubah Ide Menjadi Produk Digital Berkualitas
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
