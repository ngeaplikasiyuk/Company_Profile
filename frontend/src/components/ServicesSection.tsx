import styles from "@/styles/ServicesSection.module.css";
import { Service } from "@/lib/api";

interface ServicesProps {
  services: Service[];
  techStack: string[];
}

export default function ServicesSection({ services, techStack }: ServicesProps) {
  return (
    <section className={styles.section} id="servis">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>servis</h2>
          <p className={styles.subtitle}>
            Solusi teknologi ujung-ke-ujung yang dirancang khusus untuk
            pertumbuhan bisnis Anda.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <h4 className={styles.cardTitle}>{service.title}</h4>
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--primary)",
                  fontSize: "36px",
                  alignSelf: "flex-end",
                }}
              >
                {service.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className={styles.techStack}>
          <h3 className={styles.techStackLabel}>Tech Stack Handalan Kami</h3>
          <div className={styles.techItems}>
            {techStack.map((tech, index) => (
              <span key={index} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
