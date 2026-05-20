"use client";

import { useState, useEffect } from "react";
import PortfolioSection from "@/components/PortfolioSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { PortfolioItem } from "@/lib/api";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/portfolio`)
      .then((r) => r.json())
      .then(setPortfolio);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "128px" }}>
        {portfolio.length > 0 && <PortfolioSection items={portfolio} />}
      </main>
      <Footer />
    </>
  );
}
