import Image from "next/image";
import styles from "@/styles/TeamSection.module.css";
import { TeamMember } from "@/lib/api";

interface TeamProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamProps) {
  return (
    <section className={styles.section} id="tim">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Tim Kami</span>
          <h2 className={styles.title}>Orang-Orang di Balik Layar</h2>
          <p className={styles.subtitle}>
            Profesional berdedikasi yang siap mewujudkan visi digital Anda.
          </p>
        </div>

        <div className={styles.grid}>
          {members.map((member) => (
            <div key={member.id} className={styles.card}>
              <div className={styles.photoWrapper}>
                <Image
                  src={member.photo_url}
                  alt={`Foto ${member.name}, ${member.position}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.position}>{member.position}</p>
                {member.bio && <p className={styles.bio}>{member.bio}</p>}
                <div className={styles.socialLinks}>
                  {member.social_links?.linkedin && (
                    <a
                      href={member.social_links.linkedin}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      in
                    </a>
                  )}
                  {member.social_links?.github && (
                    <a
                      href={member.social_links.github}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub ${member.name}`}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                        code
                      </span>
                    </a>
                  )}
                  {member.social_links?.email && (
                    <a
                      href={`mailto:${member.social_links.email}`}
                      className={styles.socialLink}
                      aria-label={`Email ${member.name}`}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                        mail
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
