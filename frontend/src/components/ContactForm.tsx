"use client";

import { useState } from "react";
import styles from "@/styles/ContactForm.module.css";
import { submitContact, type ContactMessage } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM: ContactMessage = { name: "", email: "", subject: "", message: "" };

function validate(form: ContactMessage): Partial<Record<keyof ContactMessage, string>> {
  const errors: Partial<Record<keyof ContactMessage, string>> = {};
  if (!form.name.trim()) errors.name = "Nama wajib diisi.";
  if (!form.email.trim()) errors.email = "Email wajib diisi.";
  else if (!EMAIL_REGEX.test(form.email)) errors.email = "Format email tidak valid.";
  if (!form.subject.trim()) errors.subject = "Subjek wajib diisi.";
  if (!form.message.trim()) errors.message = "Pesan wajib diisi.";
  else if (form.message.trim().length < 10) errors.message = "Pesan minimal 10 karakter.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactMessage>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactMessage, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof ContactMessage) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setFeedback("");
    try {
      const res = await submitContact(form);
      if (res.success) {
        setStatus("success");
        setFeedback(res.message);
        setForm(EMPTY_FORM);
      } else {
        setStatus("error");
        setFeedback(res.message || "Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch {
      setStatus("error");
      setFeedback("Tidak dapat terhubung ke server. Silakan coba lagi nanti.");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section className={styles.section} id="form-kontak" aria-labelledby="form-kontak-title">
      <h2 className={styles.title} id="form-kontak-title">
        Kirim Pesan
      </h2>
      <p className={styles.subtitle}>
        Ceritakan kebutuhan proyek Anda. Kami akan merespons dalam 1×24 jam.
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            value={form.name}
            onChange={update("name")}
            disabled={isSubmitting}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span className={styles.errorText} id="name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            value={form.email}
            onChange={update("email")}
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span className={styles.errorText} id="email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label className={styles.label} htmlFor="subject">
            Subjek
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
            value={form.subject}
            onChange={update("subject")}
            disabled={isSubmitting}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <span className={styles.errorText} id="subject-error">
              {errors.subject}
            </span>
          )}
        </div>

        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label className={styles.label} htmlFor="message">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
            value={form.message}
            onChange={update("message")}
            disabled={isSubmitting}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span className={styles.errorText} id="message-error">
              {errors.message}
            </span>
          )}
        </div>

        {feedback && (
          <p
            className={`${styles.feedback} ${
              status === "success" ? styles.feedbackSuccess : styles.feedbackError
            }`}
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        )}

        <button type="submit" className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? "Mengirim…" : "Kirim Pesan"}
        </button>
      </form>
    </section>
  );
}
