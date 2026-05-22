import Link from "next/link";

export const metadata = {
  title: "Halaman Tidak Ditemukan",
};

/** Halaman 404 branded. */
export default function NotFound() {
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
        <p
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "var(--primary)",
            lineHeight: 1,
            marginBottom: "8px",
          }}
        >
          404
        </p>
        <h1 style={{ color: "var(--on-background)", marginBottom: "12px" }}>
          Halaman tidak ditemukan
        </h1>
        <p style={{ color: "var(--on-background)", marginBottom: "24px" }}>
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak ada.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            minHeight: "44px",
            padding: "12px 28px",
            fontWeight: 600,
            color: "var(--on-primary)",
            background: "var(--primary)",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
