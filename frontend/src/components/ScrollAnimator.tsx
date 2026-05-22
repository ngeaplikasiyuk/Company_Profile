"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Menjalankan IntersectionObserver untuk animasi `.fade-in-up`.
 * Dipisah jadi komponen client agar halaman bisa tetap Server Component.
 */
export default function ScrollAnimator() {
  useScrollAnimation();
  return null;
}
