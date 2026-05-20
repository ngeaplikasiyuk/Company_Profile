"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.logo}>ngeaplikasiyuk</div>

        <div className={styles.navLinks}>
          <a href="#tentang" className={styles.navLink}>
            Tentang
          </a>
          <a href="#produk" className={styles.navLink}>
            Produk
          </a>
          <a href="#servis" className={styles.navLink}>
            Servis
          </a>
          <a href="#kontak" className={styles.navLink}>
            Kontak
          </a>
        </div>

        <a href="#kontak" className={styles.ctaButton}>
          Hubungi Kami
        </a>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}
      >
        <a href="#tentang" className={styles.mobileNavLink} onClick={handleNavClick}>
          Tentang
        </a>
        <a href="#produk" className={styles.mobileNavLink} onClick={handleNavClick}>
          Produk
        </a>
        <a href="#servis" className={styles.mobileNavLink} onClick={handleNavClick}>
          Servis
        </a>
        <a href="#kontak" className={styles.mobileNavLink} onClick={handleNavClick}>
          Kontak
        </a>
      </div>
    </>
  );
}
