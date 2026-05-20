import styles from "@/styles/FaqSection.module.css";
import { FAQ } from "@/lib/api";

interface FaqProps {
  faqs: FAQ[];
}

export default function FaqSection({ faqs }: FaqProps) {
  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>FAQ</h2>
        <div className={styles.list}>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.item}>
              <details className={styles.details}>
                <summary className={styles.summary}>
                  {faq.question}
                  <span className={`material-symbols-outlined ${styles.chevron}`}>
                    expand_more
                  </span>
                </summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
