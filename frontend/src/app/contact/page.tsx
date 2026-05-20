"use client";

import { useState, useEffect } from "react";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ContactInfo } from "@/lib/api";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/contact-info`)
      .then((r) => r.json())
      .then(setContactInfo);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "128px" }}>
        {contactInfo && (
          <ContactSection
            contactInfo={contactInfo}
            officeImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBfvKs4mGio93JiGs4KBRY6mVlA8tZADJcmFktEdRt8vVT7l8Qv-xw7AfFktgL-OZUFP5MGoWmQLwy9r6FuHSAmMvQ-VHmUoRFumL64vtUapFnszUHh4Kyyj_pFvomLOUxqLJ46APhpxqzFOcH6pnxtn4H0gPW-KMfeKUaO73MYvSv3HjvoSBeKbgKJsN49EqKP6FUK8QqcjpZq9VqKyzJU6iGAAQvaUnucl3tMXiieArjAF9bnxHj8OpdvJMtUygxoPhh_P_hUIUQ"
          />
        )}
      </main>
      <Footer />
    </>
  );
}
