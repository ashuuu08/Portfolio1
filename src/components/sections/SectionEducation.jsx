import React from "react";
import { FaGraduationCap, FaTrophy, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { educationData, achievementsData } from "../../data/portfolioData";
import { useCinematicScroll } from "../../animations/useCinematicScroll";

export default function SectionEducation() {
  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".edu-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#education",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".edu-card",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".edu-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="education" ref={containerRef} className="sec-industrial bg-[#111111]">
      <div className="wrap">
        
        {/* Section Header */}
        <div className="edu-header max-w-4xl mb-16">
          <div className="badge-acid mb-4">
            SECTION 07 // FOUNDATION & RECOGNITION
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ACADEMIC FOUNDATION & <br />
            <span className="text-[#E8FF36]">TECHNICAL MILESTONES.</span>
          </h2>
          <p className="mt-6 text-[#929292] text-base sm:text-lg leading-relaxed max-w-3xl">
            Computer science degree credentials, academic honors, and dedicated problem-solving milestones in algorithms and data structures.
          </p>
        </div>

        {/* 2-Column Split: Education & Verified Achievements */}
        <div className="edu-grid grid lg:grid-cols-2 gap-8">
          
          {/* Education Box */}
          <div className="edu-card card-industrial p-8 border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/[0.08] text-[#E8FF36]">
                <FaGraduationCap size={20} />
                <h3
                  className="text-xl font-bold text-[#F5F4EF]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Academic Credentials
                </h3>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="pb-6 border-b border-white/[0.06] last:border-0 last:pb-0">
                    <span className="text-xs font-mono text-[#E8FF36] block mb-1 flex items-center gap-1.5">
                      <FaCalendarAlt size={10} /> {edu.duration}
                    </span>
                    <h4 className="text-base font-bold text-[#F5F4EF] mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-[#929292] mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-[#929292] leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] font-mono text-[11px] text-[#929292] flex items-center justify-between">
              <span>BACHELOR OF TECHNOLOGY</span>
              <span className="text-[#E8FF36]">CGPA / HONORS</span>
            </div>
          </div>

          {/* Achievements & Certifications Box */}
          <div className="edu-card card-industrial p-8 border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/[0.08] text-[#E8FF36]">
                <FaTrophy size={18} />
                <h3
                  className="text-xl font-bold text-[#F5F4EF]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Verified Achievements
                </h3>
              </div>

              <div className="space-y-6">
                {achievementsData.map((ach, idx) => (
                  <div key={idx} className="p-5 rounded bg-[#161616] border border-white/5 space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#E8FF36] font-bold">{ach.platform}</span>
                      <FaCheckCircle className="text-[#E8FF36]" size={12} />
                    </div>
                    <h4 className="text-base font-bold text-[#F5F4EF]">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-[#929292] leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] font-mono text-[11px] text-[#929292] flex items-center justify-between">
              <span>PROBLEM SOLVING & DSA</span>
              <span className="text-[#E8FF36]">LEETCODE // GFG</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

