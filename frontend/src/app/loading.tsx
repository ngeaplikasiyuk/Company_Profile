import Image from "next/image";

/**
 * Loading UI level-route (App Router). Tampil saat Server Component
 * sedang mengambil data atau saat navigasi soft.
 */
export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "var(--background)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image
          src="/logo.png"
          alt="ngeaplikasiyuk"
          width={88}
          height={88}
          priority
          style={{ borderRadius: 20, marginBottom: 28 }}
        />
        <div
          style={{
            width: "44px",
            height: "44px",
            border: "3px solid var(--outline-variant)",
            borderTopColor: "var(--primary)",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
