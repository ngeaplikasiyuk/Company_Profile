/**
 * Konfigurasi situs terpusat — dipakai oleh metadata, sitemap, robots, dan JSON-LD.
 * Override domain produksi via env NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ngeaplikasiyuk.com"
).replace(/\/$/, "");

export const SITE_NAME = "ngeaplikasiyuk";

export const SITE_DESCRIPTION =
  "Studio pengembangan perangkat lunak butik yang berfokus pada estetika premium dan performa tanpa kompromi untuk startup masa depan.";
