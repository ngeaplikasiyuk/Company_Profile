import Image from "next/image";
import styles from "@/styles/ContactSection.module.css";
import { ContactInfo } from "@/lib/api";

interface ContactProps {
  contactInfo: ContactInfo;
  officeImageUrl: string;
}

export default function ContactSection({ contactInfo, officeImageUrl }: ContactProps) {
  return (
    <section className={styles.section} id="kontak">
      <div className={styles.grid}>
        <div>
          <h2 className={styles.title}>HUBUNGI KAMI</h2>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <span className="material-symbols-outlined" style={{ color: "#ffffff" }}>
                  location_on
                </span>
              </div>
              <div>
                <p className={styles.infoLabel}>LOKASI</p>
                <p className={styles.infoValue}>{contactInfo.address}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <span className="material-symbols-outlined" style={{ color: "#ffffff" }}>
                  mail
                </span>
              </div>
              <div>
                <p className={styles.infoLabel}>EMAIL</p>
                <p className={styles.infoValue}>{contactInfo.email}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <span className="material-symbols-outlined" style={{ color: "#ffffff" }}>
                  call
                </span>
              </div>
              <div>
                <p className={styles.infoLabel}>NO TELP</p>
                <p className={styles.infoValue}>{contactInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageFrame}>
          <div className={styles.imageInner}>
            <Image
              src={officeImageUrl}
              alt="Kantor ngeaplikasiyuk di Bandung"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
