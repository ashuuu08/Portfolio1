import React from "react";
import { FaServer, FaCode, FaDatabase, FaTools, FaLayerGroup, FaCheckSquare } from "react-icons/fa";
import { skillsCategories } from "../../data/portfolioData";
import { useCinematicScroll } from "../../animations/useCinematicScroll";

export default function SectionExpertise() {
  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".expertise-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#expertise",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".expertise-category-card",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".expertise-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="expertise" ref={containerRef} className="sec-industrial bg-[#111111]">
      <div className="wrap">
        
        {/* Section Header */}
        <div className="expertise-header max-w-4xl mb-16">
          <div className="badge-acid mb-4">
            SECTION 06 // TECHNICAL EXPERTISE
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            TECHNICAL CAPABILITIES. <br />
            <span className="text-[#E8FF36]">PROFICIENCY MATRIX.</span>
          </h2>
          <p className="mt-6 text-[#929292] text-base sm:text-lg leading-relaxed max-w-3xl">
            A transparent breakdown of primary languages, enterprise frameworks, databases, and tooling. Self-assessed relative comfort levels across production environments.
          </p>
        </div>

        {/* Categorized Skills Grid with Horizontal Acid Progress Gauges */}
        <div className="expertise-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="expertise-category-card card-industrial p-7 border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <h3
                    className="text-lg font-bold text-[#F5F4EF]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cat.name}
                  </h3>
                  <span className="text-xs font-mono text-[#E8FF36] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#F5F4EF] font-semibold">{skill.name}</span>
                        <span className="text-[#E8FF36]">{skill.level}%</span>
                      </div>

                      {/* Precision Horizontal Gauge */}
                      <div className="w-full h-1.5 rounded-full bg-[#1F1F1F] overflow-hidden">
                        <div
                          className="h-full bg-[#E8FF36] transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] text-[10px] font-mono text-[#929292] flex items-center justify-between">
                <span>BENCHMARK // PRODUCTION</span>
                <span className="text-[#E8FF36]">ACTIVE USE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Transparency Note */}
        <div className="mt-8 p-4 rounded bg-[#161616] border border-white/10 font-mono text-xs text-[#929292] flex items-center gap-3">
          <FaCheckSquare className="text-[#E8FF36] shrink-0" size={14} />
          <span>
            Proficiency values reflect self-assessed confidence across commercial enterprise workloads, production deployments, and academic immersion.
          </span>
        </div>

      </div>
    </section>
  );
}

