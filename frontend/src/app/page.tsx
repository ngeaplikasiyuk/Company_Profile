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
import ScrollAnimator from "@/components/ScrollAnimator";
import FetchErrorState from "@/components/FetchErrorState";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import {
  getCompanyInfo,
  getServices,
  getPortfolio,
  getTeam,
  getTestimonials,
  getFaqs,
  getContactInfo,
  getTechStack,
} from "@/lib/api";

const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUa7E_QyS0zTo5yis11P80RoCd9kYtHOKWHAqSzbxR_AEe-C8YQtN6uADDI4saAbuVOYWGqTUyW1YWciAllFVvnBhZZin0kxbgAxx2Mbu0T-pTakpTuZ_vGTQuaScvPhhRqlW8rzIzA6RoMkV7LQYEx0BtHB-xc9ilMwX4Owbpkuh-jHy3cmM-eYTmsr8WXmDxyxXPWniK_u0opGTIvpQ1RLlKc6udLADctSmlHn8jzrhAkVJwyJ8l-cut7e3xtAgus3jpXq2aJaY";
const OFFICE_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfvKs4mGio93JiGs4KBRY6mVlA8tZADJcmFktEdRt8vVT7l8Qv-xw7AfFktgL-OZUFP5MGoWmQLwy9r6FuHSAmMvQ-VHmUoRFumL64vtUapFnszUHh4Kyyj_pFvomLOUxqLJ46APhpxqzFOcH6pnxtn4H0gPW-KMfeKUaO73MYvSv3HjvoSBeKbgKJsN49EqKP6FUK8QqcjpZq9VqKyzJU6iGAAQvaUnucl3tMXiieArjAF9bnxHj8OpdvJMtUygxoPhh_P_hUIUQ";

export default async function Home() {
  let data;
  try {
    const [companyInfo, services, portfolio, team, testimonials, faqs, contactInfo, techStack] =
      await Promise.all([
        getCompanyInfo(),
        getServices(),
        getPortfolio(),
        getTeam(),
        getTestimonials(),
        getFaqs(),
        getContactInfo(),
        getTechStack(),
      ]);
    data = { companyInfo, services, portfolio, team, testimonials, faqs, contactInfo, techStack };
  } catch (err) {
    console.error("Failed to fetch data from API:", err);
    return <FetchErrorState />;
  }

  const { companyInfo, services, portfolio, team, testimonials, faqs, contactInfo, techStack } = data;

  // JSON-LD Organization untuk rich result Google. Data berasal dari API kita
  // sendiri, di-stringify di server — pola standar & aman untuk structured data.
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name || SITE_NAME,
    url: SITE_URL,
    description: companyInfo.description,
    logo: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
    email: contactInfo.email,
    telephone: contactInfo.phone,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <ScrollAnimator />
      <Navbar />
      <main id="main-content" style={{ paddingTop: "64px" }}>
        <div className="fade-in-up">
          <Hero heroImageUrl={HERO_IMAGE_URL} />
        </div>

        <div className="fade-in-up">
          <AboutSection stats={companyInfo.stats} />
        </div>

        {portfolio.length > 0 && (
          <div className="fade-in-up">
            <PortfolioSection items={portfolio} />
          </div>
        )}

        {services.length > 0 && (
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

        <div className="fade-in-up">
          <ContactSection contactInfo={contactInfo} officeImageUrl={OFFICE_IMAGE_URL} />
        </div>
      </main>
      <Footer />
    </>
  );
}
