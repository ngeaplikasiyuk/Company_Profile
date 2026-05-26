"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/FaqSection.module.css";
import { FAQ } from "@/lib/api";

interface FaqProps {
  faqs: FAQ[];
}

export default function FaqSection({ faqs }: FaqProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>FAQ</h2>
        <div className={styles.list}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  className={styles.summaryButton}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined ${styles.chevron} ${
                      isOpen ? styles.chevronRotated : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.answerWrapper}
                    >
                      <p className={styles.answer}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
