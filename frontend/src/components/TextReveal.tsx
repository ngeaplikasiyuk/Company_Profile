"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "@/styles/TextReveal.module.css";

interface TextRevealProps {
  children: string;
  /** Stagger per word in seconds — default 0.06 */
  stagger?: number;
  /** Animation kind */
  variant?: "rise" | "blur" | "tilt";
  className?: string;
  /** Element to render. Default: span (inline). */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  /** Trigger on mount instead of scroll-in */
  immediate?: boolean;
}

/**
 * Split a string into word-spans and reveal them with stagger when scrolled into view.
 * ReactBits-style "SplitText" animation, dependency-free.
 */
export default function TextReveal({
  children,
  stagger = 0.06,
  variant = "rise",
  className,
  as: Tag = "span",
  immediate = false,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (immediate) {
      el.classList.add(styles.visible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const words = children.split(" ");

  const setRef = (el: HTMLElement | null) => {
    ref.current = el;
  };

  return (
    <Tag
      ref={setRef}
      className={`${styles.wrap} ${styles[`variant_${variant}`]} ${className ?? ""}`}
    >
      {words.map((word, i) => (
        <span key={i} className={styles.wordOuter}>
          <span
            className={styles.wordInner}
            style={{ transitionDelay: `${i * stagger}s` }}
          >
            {word}
          </span>
          {i < words.length - 1 && <span className={styles.space}>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
