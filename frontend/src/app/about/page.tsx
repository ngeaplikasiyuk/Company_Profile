import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tentang Kami | ngeaplikasiyuk",
  description: "Tentang ngeaplikasiyuk — kolektif kreator, insinyur, dan pemikir strategis.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "128px" }}>
        <AboutSection
          stats={{
            products_released: "10+",
            client_satisfaction: "98%",
            expert_support: "24/7",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
