"use client";

import { useEffect } from "react";

/**
 * Error boundary level-route (App Router). Menangkap error tak terduga saat
 * render dan memberi tombol untuk mencoba render ulang segmen.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Detail dicatat di console; ke user hanya pesan generik (jangan bocorkan stack trace).
    console.error("Route error:", error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "var(--background)",
        padding: "var(--margin-mobile)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "440px" }}>
        <h1 style={{ color: "var(--primary)", marginBottom: "12px" }}>
          Terjadi kesalahan
        </h1>
        <p style={{ color: "var(--on-background)", marginBottom: "24px" }}>
          Maaf, ada yang tidak beres di sisi kami. Silakan coba lagi.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            minHeight: "44px",
            padding: "12px 28px",
            fontWeight: 600,
            color: "var(--on-primary)",
            background: "var(--primary)",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
