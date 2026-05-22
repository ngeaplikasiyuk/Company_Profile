import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FetchErrorState from "@/components/FetchErrorState";
import { getContactInfo } from "@/lib/api";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi ngeaplikasiyuk — lokasi, email, dan nomor telepon untuk memulai proyek digital Anda.",
};

const OFFICE_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfvKs4mGio93JiGs4KBRY6mVlA8tZADJcmFktEdRt8vVT7l8Qv-xw7AfFktgL-OZUFP5MGoWmQLwy9r6FuHSAmMvQ-VHmUoRFumL64vtUapFnszUHh4Kyyj_pFvomLOUxqLJ46APhpxqzFOcH6pnxtn4H0gPW-KMfeKUaO73MYvSv3HjvoSBeKbgKJsN49EqKP6FUK8QqcjpZq9VqKyzJU6iGAAQvaUnucl3tMXiieArjAF9bnxHj8OpdvJMtUygxoPhh_P_hUIUQ";

export default async function ContactPage() {
  let contactInfo;
  try {
    contactInfo = await getContactInfo();
  } catch (err) {
    console.error("Failed to fetch contact data:", err);
    return <FetchErrorState />;
  }

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "128px" }}>
        <ContactSection contactInfo={contactInfo} officeImageUrl={OFFICE_IMAGE_URL} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
