"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type {
  CompanyInfo,
  Service,
  PortfolioItem,
  TeamMember,
  Testimonial,
  FAQ,
  ContactInfo,
  TechStack,
} from "@/lib/api";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function Home() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [techStack, setTechStack] = useState<TechStack | null>(null);
  const [loading, setLoading] = useState(true);

  useScrollAnimation();

  useEffect(() => {
    async function fetchData() {
      try {
        const [companyRes, servicesRes, portfolioRes, teamRes, testimonialsRes, faqsRes, contactRes, techRes] =
          await Promise.all([
            fetch(`${API_BASE}/api/company`),
            fetch(`${API_BASE}/api/services`),
            fetch(`${API_BASE}/api/portfolio`),
            fetch(`${API_BASE}/api/team`),
            fetch(`${API_BASE}/api/testimonials`),
            fetch(`${API_BASE}/api/faqs`),
            fetch(`${API_BASE}/api/contact-info`),
            fetch(`${API_BASE}/api/tech-stack`),
          ]);

        const [company, svc, port, tm, testi, faq, contact, tech] = await Promise.all([
          companyRes.json(),
          servicesRes.json(),
          portfolioRes.json(),
          teamRes.json(),
          testimonialsRes.json(),
          faqsRes.json(),
          contactRes.json(),
          techRes.json(),
        ]);

        setCompanyInfo(company);
        setServices(svc);
        setPortfolio(port);
        setTeam(tm);
        setTestimonials(testi);
        setFaqs(faq);
        setContactInfo(contact);
        setTechStack(tech);
      } catch (error) {
        console.error("Failed to fetch data from API:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "var(--background)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "var(--primary)",
              marginBottom: "16px",
            }}
          >
            ngeaplikasiyuk
          </div>
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "3px solid var(--outline-variant)",
              borderTopColor: "var(--primary)",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "128px" }}>
        <div className="fade-in-up">
          <Hero
            heroImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCUa7E_QyS0zTo5yis11P80RoCd9kYtHOKWHAqSzbxR_AEe-C8YQtN6uADDI4saAbuVOYWGqTUyW1YWciAllFVvnBhZZin0kxbgAxx2Mbu0T-pTakpTuZ_vGTQuaScvPhhRqlW8rzIzA6RoMkV7LQYEx0BtHB-xc9ilMwX4Owbpkuh-jHy3cmM-eYTmsr8WXmDxyxXPWniK_u0opGTIvpQ1RLlKc6udLADctSmlHn8jzrhAkVJwyJ8l-cut7e3xtAgus3jpXq2aJaY"
          />
        </div>

        {companyInfo && (
          <div className="fade-in-up">
            <AboutSection stats={companyInfo.stats} />
          </div>
        )}

        {portfolio.length > 0 && (
          <div className="fade-in-up">
            <PortfolioSection items={portfolio} />
          </div>
        )}

        {services.length > 0 && techStack && (
          <div className="fade-in-up">
            <ServicesSection services={services} techStack={techStack.items} />
          </div>
        )}

        {team.length > 0 && (
          <div className="fade-in-up">
            <TeamSection members={team} />
          </div>
        )}

        {testimonials.length > 0 && (
          <div className="fade-in-up">
            <TestimonialSection testimonials={testimonials} />
          </div>
        )}

        {faqs.length > 0 && (
          <div className="fade-in-up">
            <FaqSection faqs={faqs} />
          </div>
        )}

        <div className="fade-in-up">
          <CtaSection />
        </div>

        {contactInfo && (
          <div className="fade-in-up">
            <ContactSection
              contactInfo={contactInfo}
              officeImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBfvKs4mGio93JiGs4KBRY6mVlA8tZADJcmFktEdRt8vVT7l8Qv-xw7AfFktgL-OZUFP5MGoWmQLwy9r6FuHSAmMvQ-VHmUoRFumL64vtUapFnszUHh4Kyyj_pFvomLOUxqLJ46APhpxqzFOcH6pnxtn4H0gPW-KMfeKUaO73MYvSv3HjvoSBeKbgKJsN49EqKP6FUK8QqcjpZq9VqKyzJU6iGAAQvaUnucl3tMXiieArjAF9bnxHj8OpdvJMtUygxoPhh_P_hUIUQ"
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
