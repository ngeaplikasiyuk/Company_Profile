import styles from "@/styles/CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.glow} />
        <h2 className={styles.title}>
          Siap Membangun Aplikasi Impian Anda?
        </h2>
        <p className={styles.subtitle}>
          Jadwalkan konsultasi gratis hari ini dan wujudkan visi digital Anda
          bersama kami.
        </p>
        <a href="#kontak" className={styles.button}>
          Konsultasi Sekarang
        </a>
      </div>
    </section>
  );
}
