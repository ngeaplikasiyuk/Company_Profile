import styles from "@/styles/Hero.module.css";

interface HeroProps {
  heroImageUrl: string;
}

export default function Hero({ heroImageUrl }: HeroProps) {
  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.heading}>
        Mengubah Ide Menjadi{" "}
        <span className={styles.highlight}>Produk Digital</span> Berkualitas
      </h1>
      <p className={styles.subtext}>
        Studio pengembangan perangkat lunak butik yang berfokus pada estetika
        premium dan performa tanpa kompromi untuk startup masa depan.
      </p>
      <div className={styles.buttons}>
        <a href="#produk" className={styles.primaryBtn}>
          lihat detil produk
        </a>
        <a href="#servis" className={styles.secondaryBtn}>
          servis kami
        </a>
      </div>
      <div className={styles.heroImage}>
        <img
          src={heroImageUrl}
          alt="Dashboard digital ngeaplikasiyuk dengan visualisasi data modern"
          loading="eager"
        />
      </div>
    </section>
  );
}
