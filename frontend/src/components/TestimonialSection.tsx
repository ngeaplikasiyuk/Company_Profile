"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/TestimonialSection.module.css";
import { Testimonial } from "@/lib/api";

interface TestimonialProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return null;

  return (
    <section className={styles.section} id="testimoni">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimoni</span>
          <h2 className={styles.title}>Apa Kata Klien Kami</h2>
        </div>

        <div className={styles.carousel}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.quoteIcon}>&ldquo;</div>

                  <div className={styles.rating}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined"
                        style={{
                          color: i < t.rating ? "#f59e0b" : "var(--outline-variant)",
                          fontSize: "20px",
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  <p className={styles.content}>&ldquo;{t.content}&rdquo;</p>

                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      <Image
                        src={t.avatar_url}
                        alt={`Foto ${t.name}`}
                        fill
                        sizes="56px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.authorInfo}>
                      <p className={styles.authorName}>{t.name}</p>
                      <p className={styles.authorCompany}>
                        {t.position}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <button
              className={styles.controlBtn}
              onClick={prev}
              aria-label="Previous testimonial"
              id="testimonial-prev"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              className={styles.controlBtn}
              onClick={next}
              aria-label="Next testimonial"
              id="testimonial-next"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
