import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaCheck, FaTerminal, FaLayerGroup } from "react-icons/fa";
import { projectsData } from "../../data/portfolioData";
import { useCinematicScroll } from "../../animations/useCinematicScroll";

export default function SectionProjects() {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".projects-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".project-case-study",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const toggleDrawer = (id) => {
    setActiveDrawer(activeDrawer === id ? null : id);
  };

  return (
    <section id="projects" ref={containerRef} className="sec-industrial bg-[#111111]">
      <div className="wrap">
        
        {/* Editorial Section Header */}
        <div className="projects-header max-w-4xl mb-20">
          <div className="badge-acid mb-4">
            SECTION 03 // CASE STUDIES
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SELECTED WORKS. <br />
            <span className="text-[#E8FF36]">ENGINEERED CASE STUDIES.</span>
          </h2>
          <p className="mt-6 text-[#929292] text-base sm:text-lg leading-relaxed max-w-3xl">
            Detailed engineering overviews of production and client applications. Each case study details the core architecture, real problems solved, technology stack, and critical engineering decisions.
          </p>
        </div>

        {/* Case Studies List (Alternating Editorial Layouts) */}
        <div className="projects-list space-y-24">
          {projectsData.map((project, idx) => {
            const isDrawerOpen = activeDrawer === project.id;
            const isEven = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="project-case-study border-t border-white/[0.12] pt-12"
              >
                {/* Meta Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-[#E8FF36] font-bold">
                      CASE {project.number} // 04
                    </span>
                    <span className="text-[#929292]">•</span>
                    <span className="px-2.5 py-0.5 rounded bg-[#181818] border border-white/10 text-[#F5F4EF]">
                      {project.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#929292] hover:text-[#E8FF36] transition-colors"
                      >
                        <FaGithub size={13} />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#E8FF36] hover:underline"
                      >
                        <FaExternalLinkAlt size={11} />
                        <span>LIVE DEPLOYMENT</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* 2-Column Asymmetric Case Layout */}
                <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Visual Presentation Frame (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {project.image ? (
                      <div className="relative rounded overflow-hidden border border-white/10 bg-[#161616] group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover max-h-[460px] group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 font-mono text-[11px] text-[#E8FF36] bg-[#111111]/90 px-3 py-1 rounded border border-white/10">
                          FIG. 0{idx + 1} // ACTUAL PRODUCTION UI
                        </div>
                      </div>
                    ) : (
                      <div className="rounded border border-white/10 bg-[#161616] p-8 min-h-[340px] flex flex-col justify-between relative overflow-hidden font-mono">
                        <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-[#929292]">
                          <span>BACKEND SYSTEM ARCHITECTURE // AR-0{idx + 1}</span>
                          <span className="text-[#E8FF36]">RESTFUL SERVICE</span>
                        </div>

                        <div className="my-8 space-y-3">
                          <div className="p-4 rounded bg-[#101010] border border-white/5 text-xs text-[#F5F4EF] leading-relaxed">
                            <span className="text-[#E8FF36] block mb-1 font-bold">API CONTRACT & DATA FLOW:</span>
                            Request ➔ Spring Security (JWT Validator) ➔ Controller ➔ Transactional Service ➔ HikariCP Connection Pool ➔ MySQL Engine.
                          </div>
                          <div className="text-[11px] text-[#929292]">
                            Verified with automated Postman integration test collections.
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                          <span className="text-[#929292]">Deployment Target: Cloud Vercel & Production Host</span>
                          <span className="text-[#E8FF36] font-bold">100% RELIABLE</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Specification & Narrative Details (5 cols) */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <h3
                        className="text-2xl sm:text-3xl font-black text-[#F5F4EF] tracking-tight leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#E8FF36] mt-1.5 uppercase tracking-wider">
                        {project.sub}
                      </p>
                    </div>

                    <p className="text-sm text-[#929292] leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Tech Badges */}
                    <div>
                      <span className="text-[10px] font-mono text-[#929292] uppercase tracking-widest block mb-2">
                        TECHNOLOGY STACK
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded bg-[#181818] text-[#F5F4EF] border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Critical Engineering Decision Callout */}
                    <div className="p-4 rounded bg-[#181818] border border-white/10 font-mono text-xs">
                      <span className="text-[#E8FF36] font-bold block mb-1 flex items-center gap-1.5">
                        <FaTerminal size={10} /> KEY ARCHITECTURAL DECISION:
                      </span>
                      <p className="text-[#929292] leading-relaxed font-sans text-xs">
                        {project.decisions}
                      </p>
                    </div>

                    {/* Expand Details Trigger */}
                    <div>
                      <button
                        onClick={() => toggleDrawer(project.id)}
                        className="btn-outline w-full justify-between py-2.5 px-4 text-xs font-mono"
                      >
                        <span>{isDrawerOpen ? "COLLAPSE SPECIFICATIONS" : "INSPECT CORE CAPABILITIES"}</span>
                        <FaChevronDown
                          size={11}
                          className={`transition-transform duration-300 ${isDrawerOpen ? "rotate-180 text-[#E8FF36]" : ""}`}
                        />
                      </button>
                    </div>

                  </div>

                </div>

                {/* Collapsible Feature Drawer */}
                {isDrawerOpen && (
                  <div className="mt-8 p-6 rounded bg-[#161616] border border-[#E8FF36]/30 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#E8FF36] font-bold">
                      <FaLayerGroup size={12} />
                      <span>ENGINEERING CAPABILITIES & DELIVERED FEATURES</span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3 rounded bg-[#111111] border border-white/5 text-xs text-[#F5F4EF] flex items-start gap-2.5"
                        >
                          <FaCheck size={11} className="text-[#E8FF36] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

