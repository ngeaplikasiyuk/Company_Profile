"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/StatsCounter.module.css";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function StatsCounter({
  end,
  suffix = "",
  duration = 2000,
  className = "",
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * eased);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className={`${styles.counter} ${className}`}>
      <span className={styles.value}>{count}</span>
      <span className={styles.suffix}>{suffix}</span>
    </div>
  );
}
