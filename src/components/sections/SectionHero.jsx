import React from "react";
import { FaArrowDown, FaFileAlt, FaGithub, FaLinkedin, FaEnvelope, FaServer } from "react-icons/fa";
import { profileData } from "../../data/portfolioData";
import SignatureSculpture from "../ui/SignatureSculpture";
import { useCinematicScroll } from "../../animations/useCinematicScroll";

export default function SectionHero() {
  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-meta-badge",
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
    )
      .fromTo(
        ".hero-main-title",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(
        ".hero-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        ".hero-ctas",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-sculpture-col",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.7"
      )
      .fromTo(
        ".hero-metric-cell",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center bg-[#111111] bg-industrial-grid pt-32 pb-20 border-b border-white/[0.08] overflow-hidden"
    >
      <div className="wrap relative z-10">
        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typographic Monolith (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Metadata Badge */}
            <div className="hero-meta-badge flex flex-wrap items-center gap-3">
              <span className="badge-acid">
                ● CURRENT: Java Developer @ LeadAngel
              </span>
              <span className="text-xs font-mono text-[#929292] uppercase tracking-widest hidden sm:inline-block">
                Location: Bhopal / Raipur, IN
              </span>
            </div>

            {/* Oversized Swiss Headline */}
            <h1
              className="hero-main-title text-4xl sm:text-6xl md:text-7xl font-black text-[#F5F4EF] tracking-tight leading-[1.04]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ENGINEERING <br />
              <span className="text-[#E8FF36]">BEYOND</span> <br />
              THE CODE.
            </h1>

            {/* Supporting Statement */}
            <p className="hero-description text-base sm:text-lg text-[#929292] leading-relaxed max-w-2xl font-sans">
              I am <strong className="text-[#F5F4EF] font-semibold">Ashish Rathour</strong>, a Java Developer & Software Engineer.{" "}
              {profileData.supportingStatement} From high-throughput Spring Boot microservices and RESTful API architecture to database optimization and reactive user interfaces.
            </p>

            {/* Action CTA Block */}
            <div className="hero-ctas pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-acid"
              >
                <span>EXPLORE SELECTED WORK</span>
                <FaArrowDown size={11} />
              </button>

              <a
                href={profileData.contact.resume}
                download="Ashish_Rathour_Resume.pdf"
                className="btn-outline"
              >
                <FaFileAlt size={12} className="text-[#E8FF36]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded bg-[#181818] border border-white/10 text-[#929292] hover:text-[#E8FF36] hover:border-[#E8FF36]/40 transition-colors"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin size={15} />
                </a>
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded bg-[#181818] border border-white/10 text-[#929292] hover:text-[#E8FF36] hover:border-[#E8FF36]/40 transition-colors"
                  title="GitHub Repositories"
                >
                  <FaGithub size={15} />
                </a>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="p-3 rounded bg-[#181818] border border-white/10 text-[#929292] hover:text-[#E8FF36] hover:border-[#E8FF36]/40 transition-colors"
                  title="Direct Email"
                >
                  <FaEnvelope size={15} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Signature Dimensional Sculpture & System Telemetry (5 cols) */}
          <div className="hero-sculpture-col lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative w-full">
            <div className="relative p-5 sm:p-6 rounded border border-white/[0.12] bg-[#141414]/90 backdrop-blur-xl w-full max-w-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              
              {/* Sculpture Frame Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] font-mono text-[11px]">
                <span className="flex items-center gap-2 text-[#E8FF36] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#E8FF36] animate-ping inline-block" />
                  <span className="w-2 h-2 rounded-full bg-[#E8FF36] inline-block -ml-4" />
                  <span>WEBGL 2.0 // GPU ACCELERATED</span>
                </span>
                <span className="text-[#929292] text-[10px] uppercase tracking-wider">
                  DRAG TO ROTATE 3D
                </span>
              </div>

              {/* Real Three.js WebGL 3D Canvas */}
              <div className="relative w-full flex items-center justify-center overflow-hidden rounded bg-[#0D0D0D] border border-white/5">
                <SignatureSculpture height={400} />
                
                {/* Floating 3D Interaction Hint */}
                <div className="absolute bottom-3 right-3 font-mono text-[10px] text-[#E8FF36] bg-[#111111]/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 pointer-events-none">
                  INTERACTIVE 3D MESH
                </div>
              </div>

              {/* Telemetry Index Bar */}
              <div className="pt-3 mt-3 border-t border-white/[0.08] grid grid-cols-2 gap-3 font-mono text-[11px]">
                <div>
                  <span className="text-[#929292] block uppercase tracking-wider text-[10px]">FACET SHADING</span>
                  <span className="text-[#F5F4EF] font-semibold">Metallic Obsidian // #161616</span>
                </div>
                <div>
                  <span className="text-[#929292] block uppercase tracking-wider text-[10px]">CORE ILLUMINATION</span>
                  <span className="text-[#E8FF36] font-semibold">Acid Yellow // #E8FF36</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Editorial Metric Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.metrics.map((item, idx) => (
            <div key={idx} className="hero-metric-cell">
              <div
                className="text-3xl sm:text-4xl font-black text-[#F5F4EF] tracking-tight flex items-baseline gap-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span>{item.value}</span>
                <span className="text-[#E8FF36] text-xl font-mono">•</span>
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8FF36] mt-1">
                {item.label}
              </div>
              <div className="text-xs text-[#929292] mt-0.5">
                {item.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

