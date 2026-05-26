"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";
import TextReveal from "./TextReveal";
import MagneticWrap from "./MagneticWrap";
import DotField from "./DotField";

interface HeroProps {
  heroImageUrl: string;
}

export default function Hero({ heroImageUrl }: HeroProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    let raf = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      el.style.transform = `perspective(1200px) rotateX(${-current.y}deg) rotateY(${current.x}deg)`;
      raf = requestAnimationFrame(tick);
    };

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      target.x = dx * 4; // max ~4deg
      target.y = dy * 3;
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", handleMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.dotFieldWrapper}>
        <DotField
          dotRadius={2.8}
          dotSpacing={26}
          bulgeStrength={85}
          glowRadius={600}
          glowColor="rgba(86, 28, 36, 0.18)"
          gradientFrom="rgba(86, 28, 36, 0.65)"
          gradientTo="rgba(109, 41, 50, 0.35)"
        />
      </div>
      <div className={styles.heroInner}>
        <h1 className={styles.heading}>
          <TextReveal as="span" stagger={0.07} immediate>
            Mengubah Ide Menjadi
          </TextReveal>{" "}
          <span className={styles.highlight}>
            <TextReveal as="span" stagger={0.07} variant="blur" immediate>
              Produk Digital
            </TextReveal>
          </span>{" "}
          <TextReveal as="span" stagger={0.07} immediate>
            Berkualitas
          </TextReveal>
        </h1>
        <p className={styles.subtext}>
          Studio pengembangan perangkat lunak butik yang berfokus pada estetika
          premium dan performa tanpa kompromi untuk startup masa depan.
        </p>
        <div className={styles.buttons}>
          <MagneticWrap strength={14}>
            <a href="#produk" className={styles.primaryBtn}>
              Lihat Detail Produk
            </a>
          </MagneticWrap>
          <MagneticWrap strength={14}>
            <a href="#layanan" className={styles.secondaryBtn}>
              Layanan kami
            </a>
          </MagneticWrap>
        </div>
        <div ref={imageRef} className={styles.heroImage} data-cursor="view">
          <Image
            src={heroImageUrl}
            alt="Dashboard digital ngeaplikasiyuk dengan visualisasi data modern"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
