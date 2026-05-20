"use client";

import { useEffect, useCallback } from "react";

export function useScrollAnimation() {
  const animate = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Re-run observer after a short delay to catch dynamically loaded content
    const cleanup = animate();
    const timer = setTimeout(() => {
      cleanup?.();
      animate();
    }, 500);

    // Also re-run on any DOM mutation (new sections appearing)
    const mutationObserver = new MutationObserver(() => {
      const elements = document.querySelectorAll(".fade-in-up:not(.visible)");
      if (elements.length > 0) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
        );
        elements.forEach((el) => io.observe(el));
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      cleanup?.();
      clearTimeout(timer);
      mutationObserver.disconnect();
    };
  }, [animate]);
}
