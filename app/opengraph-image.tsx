import { ImageResponse } from "next/og";

export const alt = "Strixora Labs — We build software your competitors can't replicate.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#080810",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Purple aurora glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -200,
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle at center, rgba(99,102,241,0.18) 0%, transparent 65%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle at center, rgba(139,92,246,0.10) 0%, transparent 65%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 60,
            height: 60,
            background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
            borderRadius: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 44,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: 800,
              display: "flex",
              letterSpacing: "-1px",
            }}
          >
            S
          </div>
        </div>

        {/* Label chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.28)",
              borderRadius: 100,
              padding: "7px 20px",
              color: "#a5b4fc",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.08em",
              display: "flex",
            }}
          >
            STRIXORA LABS
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 32,
            maxWidth: 860,
            display: "flex",
            flexWrap: "wrap",
            letterSpacing: "-1.5px",
          }}
        >
          We build software your competitors can't replicate.
        </div>

        {/* Separator line */}
        <div
          style={{
            width: 48,
            height: 2,
            background: "rgba(99,102,241,0.5)",
            marginBottom: 24,
            display: "flex",
            borderRadius: 2,
          }}
        />

        {/* Subline */}
        <div
          style={{
            fontSize: 21,
            color: "rgba(255,255,255,0.38)",
            lineHeight: 1.5,
            display: "flex",
            gap: 24,
          }}
        >
          <span style={{ display: "flex" }}>Senior-only engineers</span>
          <span style={{ display: "flex", color: "rgba(99,102,241,0.5)" }}>·</span>
          <span style={{ display: "flex" }}>Regulated industries</span>
          <span style={{ display: "flex", color: "rgba(99,102,241,0.5)" }}>·</span>
          <span style={{ display: "flex" }}>Production-grade delivery</span>
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            color: "rgba(255,255,255,0.16)",
            fontSize: 18,
            display: "flex",
            letterSpacing: "0.02em",
          }}
        >
          strixoralabs.com
        </div>
      </div>
    ),
    { ...size }
  );
}
