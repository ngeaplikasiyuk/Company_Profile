import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FetchErrorState from "@/components/FetchErrorState";
import { getPortfolio } from "@/lib/api";

export const metadata: Metadata = {
  title: "Portofolio",
  description:
    "Karya dan proyek pilihan ngeaplikasiyuk — produk digital yang kami bangun untuk klien.",
};

export default async function PortfolioPage() {
  let portfolio;
  try {
    portfolio = await getPortfolio();
  } catch (err) {
    console.error("Failed to fetch portfolio data:", err);
    return <FetchErrorState />;
  }

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "128px" }}>
        {portfolio.length > 0 && <PortfolioSection items={portfolio} />}
      </main>
      <Footer />
    </>
  );
}
