import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { experienceData } from "../../data/portfolioData";
import { useCinematicScroll } from "../../animations/useCinematicScroll";

export default function SectionExperience() {
  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".exp-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#experience",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".exp-timeline-entry",
      { opacity: 0, x: isDesktop ? -25 : 0, y: isDesktop ? 0 : 25 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".exp-timeline-list",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="experience" ref={containerRef} className="sec-industrial bg-[#111111]">
      <div className="wrap">
        
        {/* Section Header */}
        <div className="exp-header max-w-4xl mb-20">
          <div className="badge-acid mb-4">
            SECTION 05 // CAREER TIMELINE
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            PROFESSIONAL EXPERIENCE. <br />
            <span className="text-[#E8FF36]">CAREER PROGRESSION.</span>
          </h2>
          <p className="mt-6 text-[#929292] text-base sm:text-lg leading-relaxed max-w-3xl">
            A chronological ledger of real-world commercial employment and engineering internships. Focused on production systems, enterprise backend services, and verified responsibilities.
          </p>
        </div>

        {/* Vertical Timeline with Continuous Acid Yellow Line */}
        <div className="exp-timeline-list relative max-w-5xl pl-6 sm:pl-10 border-l-2 border-[#E8FF36]/40 space-y-12">
          {experienceData.map((exp, idx) => {
            const isLeadAngelRole = exp.company === "LeadAngel";
            const isPromotion = exp.status === "Promoted to Developer";

            return (
              <div
                key={idx}
                className="exp-timeline-entry relative"
              >
                {/* Timeline Acid Yellow Node Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#111111] border-2 border-[#E8FF36] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8FF36]" />
                </div>

                {/* Experience Card */}
                <div className="card-industrial p-7 sm:p-8 border-white/10 relative">
                  
                  {/* Top Meta Line */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 font-mono text-xs">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded bg-[#E8FF36]/10 text-[#E8FF36] border border-[#E8FF36]/30 font-bold uppercase">
                        {exp.status}
                      </span>
                      {isPromotion && (
                        <span className="px-2 py-0.5 rounded bg-[#181818] text-[#E8FF36] border border-[#E8FF36]/20 flex items-center gap-1">
                          <FaArrowUp size={9} /> Promotion Track
                        </span>
                      )}
                      <span className="text-[#929292] flex items-center gap-1.5">
                        <FaCalendarAlt size={10} className="text-[#E8FF36]" />
                        {exp.duration}
                      </span>
                    </div>

                    <span className="text-[#929292] flex items-center gap-1.5">
                      <FaMapMarkerAlt size={10} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="mb-6">
                    <h3
                      className="text-2xl sm:text-3xl font-black text-[#F5F4EF]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {exp.company}
                    </h3>
                    <p className="text-sm font-mono text-[#E8FF36] font-semibold mt-1">
                      {exp.role} • {exp.type}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-sm text-[#929292] leading-relaxed flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8FF36] shrink-0 mt-2" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 font-mono text-xs">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#161616] text-[#F5F4EF] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

