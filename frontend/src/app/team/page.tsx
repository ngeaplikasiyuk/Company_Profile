"use client";

import { useState, useEffect } from "react";
import TeamSection from "@/components/TeamSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { TeamMember } from "@/lib/api";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/team`)
      .then((r) => r.json())
      .then(setTeam);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "128px" }}>
        {team.length > 0 && <TeamSection members={team} />}
      </main>
      <Footer />
    </>
  );
}
