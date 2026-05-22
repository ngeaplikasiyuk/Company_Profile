import Image from "next/image";
import styles from "@/styles/PortfolioSection.module.css";
import { PortfolioItem } from "@/lib/api";

interface PortfolioProps {
  items: PortfolioItem[];
}

export default function PortfolioSection({ items }: PortfolioProps) {
  return (
    <section className={styles.section} id="produk">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>Portfolio</span>
            <h2 className={styles.title}>produk kami</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.card} ${index === 1 ? styles.cardTall : ""}`}
            >
              <div
                className={
                  index === 1 ? styles.imageWrapperFull : styles.imageWrapper
                }
              >
                <Image
                  src={item.image_url}
                  alt={item.image_alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.overlayTitle}>{item.title}</h3>
                <p className={styles.overlaySubtitle}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
