import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FetchErrorState from "@/components/FetchErrorState";
import { getServices, getTechStack } from "@/lib/api";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan pengembangan produk digital ngeaplikasiyuk: web app, mobile app, dan UI/UX dengan tech stack modern.",
};

export default async function ServicesPage() {
  let services, techStack;
  try {
    [services, techStack] = await Promise.all([getServices(), getTechStack()]);
  } catch (err) {
    console.error("Failed to fetch services data:", err);
    return <FetchErrorState />;
  }

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "128px" }}>
        {services.length > 0 && (
          <ServicesSection services={services} techStack={techStack.items} />
        )}
      </main>
      <Footer />
    </>
  );
}
