"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/ServicesSection.module.css";
import { Service } from "@/lib/api";
import LogoLoop from "./LogoLoop";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFigma, 
  SiPostgresql, 
  SiDocker,
  SiPrisma,
  SiFramer,
  SiVite,
  SiRedux
} from "react-icons/si";

interface ServicesProps {
  services: Service[];
  techStack: string[];
}

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiPrisma />, title: "Prisma" },
  { node: <SiFramer />, title: "Framer Motion" },
  { node: <SiVite />, title: "Vite" },
  { node: <SiRedux />, title: "Redux" },
];

export default function ServicesSection({ services, techStack }: ServicesProps) {
  const [selected, setSelected] = useState<Service | null>(null);
  // Portal butuh document — hanya tersedia setelah mount di client.
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Tutup modal dengan Escape + kunci scroll body saat modal terbuka.
  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <section className={styles.section} id="layanan">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Layanan Kami</h2>
          <p className={styles.subtitle}>
            Solusi teknologi ujung-ke-ujung yang dirancang khusus untuk
            pertumbuhan bisnis Anda.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              className={styles.card}
              onClick={() => setSelected(service)}
              aria-label={`Lihat detail layanan ${service.title}`}
            >
              <span className={styles.cardTitle}>{service.title}</span>
              <span className={`material-symbols-outlined ${styles.cardIcon}`}>
                {service.icon}
              </span>
            </button>
          ))}
        </div>

        {/* Tech Stack */}
        <div className={styles.techStack}>
          <h3 className={styles.techStackLabel}>Tech Stack Handalan Kami</h3>
          <div className={styles.techItems}>
            <LogoLoop
              logos={techLogos}
              speed={60}
              gap={64}
              logoHeight={48}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Tech Stack handalan ngeaplikasiyuk"
            />
          </div>
        </div>
      </div>

      {mounted &&
        selected &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setSelected(null)}
                aria-label="Tutup"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <span className={`material-symbols-outlined ${styles.modalIcon}`}>
                {selected.icon}
              </span>
              <h3 className={styles.modalTitle} id="service-modal-title">
                {selected.title}
              </h3>
              <p className={styles.modalDesc}>{selected.description}</p>

              {selected.features.length > 0 && (
                <ul className={styles.modalFeatures}>
                  {selected.features.map((feature, i) => (
                    <li key={i} className={styles.modalFeature}>
                      <span className={`material-symbols-outlined ${styles.modalFeatureIcon}`}>
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
