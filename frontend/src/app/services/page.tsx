"use client";

import { useState, useEffect } from "react";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Service, TechStack } from "@/lib/api";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [techStack, setTechStack] = useState<TechStack | null>(null);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/api/services`).then((r) => r.json()),
      fetch(`${API_BASE}/api/tech-stack`).then((r) => r.json()),
    ]).then(([svc, tech]) => {
      setServices(svc);
      setTechStack(tech);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "128px" }}>
        {services.length > 0 && techStack && (
          <ServicesSection services={services} techStack={techStack.items} />
        )}
      </main>
      <Footer />
    </>
  );
}
