import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/layout/Navbar";
import SectionHero from "./components/sections/SectionHero";
import SectionPhilosophy from "./components/sections/SectionPhilosophy";
import SectionProjects from "./components/sections/SectionProjects";
import SectionArchitecture from "./components/sections/SectionArchitecture";
import SectionExperience from "./components/sections/SectionExperience";
import SectionExpertise from "./components/sections/SectionExpertise";
import SectionEducation from "./components/sections/SectionEducation";
import SectionContact from "./components/sections/SectionContact";

export default function App() {
  return (
    <Router>
      <div className="bg-[#111111] text-[#F5F4EF] min-h-screen overflow-x-hidden selection:bg-[#E8FF36] selection:text-[#111111]">
        {/* Navigation Masthead */}
        <Navbar />

        {/* 8 Complete Storyboard Sections */}
        <main>
          {/* SECTION 01 — INTRODUCTION / HERO */}
          <SectionHero />

          {/* SECTION 02 — PROFESSIONAL INTRODUCTION & PHILOSOPHY */}
          <SectionPhilosophy />

          {/* SECTION 03 — SELECTED PROJECTS AS CASE STUDIES */}
          <SectionProjects />

          {/* SECTION 04 — HOW SYSTEMS WORK & CODE LABORATORY */}
          <SectionArchitecture />

          {/* SECTION 05 — PROFESSIONAL EXPERIENCE & CAREER PROGRESSION */}
          <SectionExperience />

          {/* SECTION 06 — TECHNICAL EXPERTISE PROFICIENCY MATRIX */}
          <SectionExpertise />

          {/* SECTION 07 — EDUCATION & VERIFIED ACHIEVEMENTS */}
          <SectionEducation />

          {/* SECTION 08 — DIRECT CONTACT & FINALE */}
          <SectionContact />
        </main>

        {/* Industrial Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              borderRadius: "4px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              fontWeight: 600,
              background: "#181818",
              color: "#F5F4EF",
              border: "1px solid rgba(245, 244, 239, 0.12)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
            },
            success: {
              style: { borderColor: "#E8FF36", color: "#E8FF36" },
              iconTheme: { primary: "#E8FF36", secondary: "#111111" },
            },
            error: {
              style: { borderColor: "#FF4D4D", color: "#FF4D4D" },
              iconTheme: { primary: "#FF4D4D", secondary: "#111111" },
            },
          }}
        />
      </div>
    </Router>
  );
}
