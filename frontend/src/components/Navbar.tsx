"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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

  // Di homepage: cukup scroll ke atas (tanpa reload). Di halaman lain: biarkan
  // link menavigasi ke beranda seperti biasa.
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <a
          href="/"
          className={styles.logo}
          aria-label="ngeaplikasiyuk — beranda"
          onClick={handleLogoClick}
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className={styles.logoImg}
            priority
          />
          <span className={styles.logoText}>ngeaplikasiyuk</span>
        </a>

        <div className={styles.navLinks}>
          <a href="#tentang" className={styles.navLink}>
            Tentang
          </a>
          <a href="#produk" className={styles.navLink}>
            Produk
          </a>
          <a href="#layanan" className={styles.navLink}>
            Layanan
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
        <a href="#layanan" className={styles.mobileNavLink} onClick={handleNavClick}>
          Layanan
        </a>
        <a href="#kontak" className={styles.mobileNavLink} onClick={handleNavClick}>
          Kontak
        </a>
      </div>
    </>
  );
}
