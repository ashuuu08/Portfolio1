import React from "react";
import { FaArrowRight, FaFileAlt, FaTerminal, FaJava, FaReact, FaShieldAlt } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiDocker } from "react-icons/si";
import resume from "../assets/ashish_resum.pdf";
import { useCinematicScroll } from "../animations/useCinematicScroll";

export default function Scene1Hero() {
  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Entrance sequence
    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: -20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 }
    )
      .fromTo(
        ".hero-title-line",
        { opacity: 0, y: 40, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.15 },
        "-=0.4"
      )
      .fromTo(
        ".hero-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ".hero-cta-group",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ".hero-stat-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      )
      .fromTo(
        ".hero-hud-element",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1, stagger: 0.1 },
        "-=0.8"
      );

    // Subtle scroll parallax on desktop only
    if (isDesktop && window.ScrollTrigger) {
      gsap.to(".hero-parallax-bg", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
        y: 120,
        opacity: 0.3,
      });

      gsap.to(".hero-content-wrap", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom 30%",
          scrub: 0.8,
        },
        y: -40,
        opacity: 0.85,
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05070B] pt-28 pb-20 border-b border-white/5"
    >
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-cinematic-grid pointer-events-none opacity-40 hero-parallax-bg" />
      <div className="ambient-orb w-[500px] h-[500px] bg-cyan-500/10 top-1/4 -left-48 hero-parallax-bg" />
      <div className="ambient-orb w-[450px] h-[450px] bg-blue-600/10 bottom-10 -right-32 hero-parallax-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070B]/60 to-[#05070B] pointer-events-none" />

      {/* Background HUD Vector Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <svg
          className="w-full h-full max-w-7xl opacity-20 hero-hud-element"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="600" cy="400" r="320" stroke="rgba(34, 211, 238, 0.2)" strokeDasharray="6 6" />
          <circle cx="600" cy="400" r="240" stroke="rgba(255, 255, 255, 0.08)" />
          <circle cx="600" cy="400" r="420" stroke="rgba(56, 189, 248, 0.1)" strokeDasharray="12 12" />
          <line x1="100" y1="400" x2="1100" y2="400" stroke="rgba(255, 255, 255, 0.04)" />
          <line x1="600" y1="50" x2="600" y2="750" stroke="rgba(255, 255, 255, 0.04)" />
        </svg>
      </div>

      <div className="wrap relative z-10 hero-content-wrap flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="hero-badge mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block -ml-3.5" />
          <span>PRODUCTION-READY SYSTEMS ENGINEER</span>
        </div>

        {/* Cinematic Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] max-w-5xl mx-auto"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="hero-title-line block">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Resilient</span>
          </span>
          <span className="hero-title-line block text-gray-200 mt-1">
            Backend & Web Systems.
          </span>
        </h1>

        {/* Narrative Lead */}
        <p className="hero-desc mt-8 text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal">
          I am <strong className="text-white font-semibold">Ashish Rathour</strong>, a Full Stack Developer specializing in high-throughput enterprise backends with{" "}
          <span className="text-cyan-300 font-medium">Java & Spring Boot</span>, paired with pixel-crafted, accessible interfaces in{" "}
          <span className="text-cyan-300 font-medium">React</span>. Focused on low-latency microservices, rock-solid security, and measurable product impact.
        </p>

        {/* Tech Stack Pills in Hero */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-gray-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <FaJava className="text-amber-400" /> Java / Spring Boot
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <FaReact className="text-cyan-400" /> React 18 & Vite
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <SiPostgresql className="text-sky-400" /> PostgreSQL & Supabase
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <FaShieldAlt className="text-emerald-400" /> Spring Security & JWT
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <SiDocker className="text-blue-400" /> Docker & Cloud
          </span>
        </div>

        {/* Primary Call to Actions */}
        <div className="hero-cta-group mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary w-full sm:w-auto"
          >
            Explore Projects
            <FaArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary w-full sm:w-auto"
          >
            <FaTerminal size={12} className="text-cyan-400" />
            Inspect Architecture
          </button>

          <a
            href={resume}
            download="Ashish_Rathour_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 w-full sm:w-auto"
          >
            <FaFileAlt size={13} />
            CV
          </a>
        </div>

        {/* Real Stats Bento Grid */}
        <div className="mt-16 sm:mt-20 w-full max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { metric: "20+", label: "Engineered Projects", note: "Production, SaaS & Open-Source" },
            { metric: "150+", label: "DSA Problems Solved", note: "Optimized Algorithms & Patterns" },
            { metric: "1+ Yrs", label: "Commercial Experience", note: "Botivate & CypherBYTE" },
            { metric: "5+", label: "Freelance Platforms", note: "Shipped & Deployed End-to-End" },
          ].map((item, index) => (
            <div
              key={index}
              className="hero-stat-card card-cinematic p-5 text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/15 transition-colors" />
              <div
                className="text-3xl sm:text-4xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.metric}
              </div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-gray-400 mt-2 font-sans leading-snug">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

