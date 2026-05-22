import type { Metadata } from "next";
import TeamSection from "@/components/TeamSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FetchErrorState from "@/components/FetchErrorState";
import { getTeam } from "@/lib/api";

export const metadata: Metadata = {
  title: "Tim Kami",
  description:
    "Kenali tim di balik ngeaplikasiyuk — profesional yang siap mewujudkan visi digital Anda.",
};

export default async function TeamPage() {
  let team;
  try {
    team = await getTeam();
  } catch (err) {
    console.error("Failed to fetch team data:", err);
    return <FetchErrorState />;
  }

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "128px" }}>
        {team.length > 0 && <TeamSection members={team} />}
      </main>
      <Footer />
    </>
  );
}
