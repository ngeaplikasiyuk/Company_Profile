import styles from "@/styles/AboutSection.module.css";

interface AboutProps {
  stats: {
    products_released: string;
    client_satisfaction: string;
    expert_support: string;
  };
}

export default function AboutSection({ stats }: AboutProps) {
  return (
    <section className={styles.section} id="tentang">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>Tentang Kami</span>
            <h2 className={styles.title}>ngeaplikasiyuk</h2>
          </div>
          <p className={styles.description}>
            Kami adalah kolektif kreator, insinyur, dan pemikir strategis yang
            mendedikasikan diri untuk membangun infrastruktur digital yang
            elegan dan fungsional.
          </p>
        </div>

        <div className={styles.cards}>
          {/* PENGEMBANGAN Card */}
          <div className={`${styles.card} ${styles.cardDefault}`}>
            <div className={`${styles.iconWrapper} ${styles.iconDefault}`}>
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--primary)",
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                code
              </span>
            </div>
            <h3 className={styles.cardTitle}>PENGEMBANGAN</h3>
            <p className={`${styles.cardDesc}`}>
              Membangun logika yang kuat dengan teknologi terkini untuk
              skalabilitas tanpa batas.
            </p>
            <div>
              <span className={`${styles.statValue} ${styles.statValuePrimary}`}>
                {stats.products_released}
              </span>
              <span className={`${styles.statLabel} ${styles.statLabelMuted}`}>
                Produk Rilis
              </span>
            </div>
          </div>

          {/* DESAIN UI/UX Card */}
          <div className={`${styles.card} ${styles.cardPrimary}`}>
            <div className={`${styles.iconWrapper} ${styles.iconPrimary}`}>
              <span
                className="material-symbols-outlined"
                style={{
                  color: "#ffffff",
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                palette
              </span>
            </div>
            <h3 className={styles.cardTitle}>DESAIN UI/UX</h3>
            <p className={`${styles.cardDesc} ${styles.cardDescMuted}`}>
              Menciptakan pengalaman visual yang intuitif dan berkesan bagi
              pengguna Anda.
            </p>
            <div>
              <span className={`${styles.statValue} ${styles.statValueLight}`}>
                {stats.client_satisfaction}
              </span>
              <span className={`${styles.statLabel} ${styles.statLabelLight}`}>
                Kepuasan Klien
              </span>
            </div>
          </div>

          {/* STRATEGI Card */}
          <div className={`${styles.card} ${styles.cardSecondary}`}>
            <div className={`${styles.iconWrapper} ${styles.iconSecondary}`}>
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--on-primary)",
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                insights
              </span>
            </div>
            <h3 className={styles.cardTitle}>STRATEGI</h3>
            <p className={`${styles.cardDesc} ${styles.cardDescMuted}`}>
              Merumuskan langkah taktis untuk memastikan produk Anda
              memenangkan pasar.
            </p>
            <div>
              <span className={`${styles.statValue} ${styles.statValueLight}`}>
                {stats.expert_support}
              </span>
              <span className={`${styles.statLabel} ${styles.statLabelMuted}`}>
                Dukungan Ahli
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
