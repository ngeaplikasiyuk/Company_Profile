import Image from "next/image";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className={styles.logoImg}
            />
            <span>ngeaplikasiyuk</span>
          </div>
          <p className={styles.brandDesc}>
            Membangun masa depan digital satu baris kode dalam satu waktu.
            Studio pengembangan butik dengan hati.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <p className={styles.linkGroupTitle}>Navigasi</p>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#tentang">Tentang</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#produk">Produk</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servis">Servis</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#kontak">Kontak</a>
              </li>
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.linkGroupTitle}>Legal</p>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Privacy Policy</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.infoTitle}>Jam Operasional</p>
          <p className={styles.hours}>
            Senin - Jumat
            <br />
            09:00 - 18:00 WIB
          </p>
          <div className={styles.socials}>
            <button className={styles.socialBtn} aria-label="Share" id="social-share">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                share
              </span>
            </button>
            <button className={styles.socialBtn} aria-label="Email" id="social-email">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                alternate_email
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {currentYear} ngeaplikasiyuk. All rights reserved
        </p>
        <div className={styles.values}>
          <span className={styles.value}>Inovasi</span>
          <span className={styles.value}>Kualitas</span>
          <span className={styles.value}>Presisi</span>
        </div>
      </div>
    </footer>
  );
}
