import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          color: "#ecf1f8",
          backgroundColor: "#071323",
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(212, 187, 145, 0.2), transparent 40%)"
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 4, color: "#d4bb91", marginBottom: 26 }}>RIMASANFER LTD</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
          Embedded business management and growth execution
        </div>
        <div style={{ fontSize: 30, marginTop: 26, color: "#b9c6d8" }}>
          Senior operators for companies that need execution, not slides.
        </div>
      </div>
    ),
    size
  );
}
