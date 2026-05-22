"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface MagneticWrapProps {
  children: ReactNode;
  /** Max pull distance in pixels — default 18 */
  strength?: number;
  /** Trigger area expansion in pixels — default 40 */
  padding?: number;
  className?: string;
}

/**
 * Wrap a button/link so it gently follows the cursor when nearby.
 * Pure rAF + transform; no library.
 */
export default function MagneticWrap({
  children,
  strength = 18,
  padding = 40,
  className,
}: MagneticWrapProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const animating = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;

      el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;

      const dx = Math.abs(target.current.x - current.current.x);
      const dy = Math.abs(target.current.y - current.current.y);
      if (dx < 0.05 && dy < 0.05 && target.current.x === 0 && target.current.y === 0) {
        animating.current = false;
        el.style.transform = "translate3d(0, 0, 0)";
        return;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const startAnimating = () => {
      if (!animating.current) {
        animating.current = true;
        rafId.current = requestAnimationFrame(tick);
      }
    };

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const halfW = rect.width / 2 + padding;
      const halfH = rect.height / 2 + padding;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      if (Math.abs(dx) < halfW && Math.abs(dy) < halfH) {
        target.current.x = (dx / halfW) * strength;
        target.current.y = (dy / halfH) * strength;
      } else {
        target.current.x = 0;
        target.current.y = 0;
      }
      startAnimating();
    };

    const handleLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
      startAnimating();
    };

    window.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength, padding]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block", willChange: "transform" }}
    >
      {children}
    </span>
  );
}
