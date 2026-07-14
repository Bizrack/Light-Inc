import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/seo";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBytes = await readFile(join(process.cwd(), "public/logo-light-inc.png"));
  const logoSrc = `data:image/png;base64,${Buffer.from(logoBytes).toString("base64")}`;

  const shortDesc =
    SITE_DESCRIPTION.length > 180
      ? `${SITE_DESCRIPTION.slice(0, 177)}…`
      : SITE_DESCRIPTION;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #000000 0%, #12100a 55%, #1a160c 100%)",
          padding: "56px 64px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={logoSrc} width={110} height={98} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontSize: 42,
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              {SITE_NAME}
            </div>
            <div
              style={{
                fontSize: 20,
                color: "#f0d78c",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              {SITE_TAGLINE}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.25,
              color: "#f6f0e4",
              fontWeight: 600,
            }}
          >
            Building Solutions That Power Businesses, Communities, and the Future.
          </div>
          <div style={{ fontSize: 22, lineHeight: 1.45, color: "#b7aa94" }}>{shortDesc}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(212,175,55,0.35)",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 22, color: "#d4af37" }}>{SITE_URL.replace(/^https?:\/\//, "")}</div>
          <div style={{ fontSize: 18, color: "#b7aa94" }}>Energy · Infrastructure · Industry</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
