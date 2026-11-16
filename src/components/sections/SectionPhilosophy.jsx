import React from "react";
import { FaShieldAlt, FaDatabase, FaBolt, FaBug, FaPuzzlePiece, FaLayerGroup } from "react-icons/fa";
import { useCinematicScroll } from "../../animations/useCinematicScroll";

const philosophyPillars = [
  {
    code: "01",
    title: "Backend Architecture & REST APIs",
    icon: <FaLayerGroup className="text-[#E8FF36]" size={18} />,
    description:
      "Designing decoupled, stateless microservices and RESTful endpoints adhering to strict HTTP semantics, sensible rate-limiting, and predictable JSON DTO contracts.",
  },
  {
    code: "02",
    title: "Database Design & Query Tuning",
    icon: <FaDatabase className="text-[#E8FF36]" size={18} />,
    description:
      "Structuring normalized relational schemas (PostgreSQL, MySQL), configuring connection pooling with HikariCP, and eliminating slow table scans with indexed B-Trees.",
  },
  {
    code: "03",
    title: "Application Security & Defense",
    icon: <FaShieldAlt className="text-[#E8FF36]" size={18} />,
    description:
      "Enforcing zero-trust boundaries with Spring Security, cryptographic JWT token verification, role-based authorization (@PreAuthorize), and defensive input sanitization.",
  },
  {
    code: "04",
    title: "Production Debugging & Observability",
    icon: <FaBug className="text-[#E8FF36]" size={18} />,
    description:
      "Diagnosing critical production bugs through structured log analysis, tracing root causes, preventing memory leaks, and engineering automated regression test suites.",
  },
  {
    code: "05",
    title: "Third-Party Microservice Integrations",
    icon: <FaPuzzlePiece className="text-[#E8FF36]" size={18} />,
    description:
      "Integrating external webhooks, CRM platforms (Salesforce, Microsoft Dynamics 365, HubSpot), WhatsApp APIs, and payment gateways with idempotent retry logic.",
  },
  {
    code: "06",
    title: "Full-Stack Product Cohesion",
    icon: <FaBolt className="text-[#E8FF36]" size={18} />,
    description:
      "Bridging rock-solid backend services with snappy, accessible React interfaces. No unnecessary layout shifts, optimized Core Web Vitals, and intuitive workflows.",
  },
];

export default function SectionPhilosophy() {
  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".philosophy-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#philosophy",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".philosophy-grid-cell",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".philosophy-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="sec-industrial bg-[#111111]">
      <div className="wrap">
        
        {/* Editorial Section Header */}
        <div className="philosophy-header max-w-4xl mb-16">
          <div className="badge-acid mb-4">
            SECTION 02 // ENGINEERING ETHOS
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GOOD SOFTWARE IS NOT JUST WRITTEN. <br />
            <span className="text-[#E8FF36]">IT IS ENGINEERED.</span>
          </h2>
          <p className="mt-6 text-[#929292] text-base sm:text-lg leading-relaxed max-w-3xl">
            Software craftsmanship is measured not by how quickly code compiles, but by how reliably it behaves under stress, concurrent mutations, and edge conditions. I focus on predictability, low latency, and clear engineering trade-offs.
          </p>
        </div>

        {/* 6-Cell Swiss Industrial Engineering Matrix */}
        <div className="philosophy-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophyPillars.map((pillar) => (
            <div
              key={pillar.code}
              className="philosophy-grid-cell card-industrial p-7 flex flex-col justify-between group border-white/[0.08] hover:border-[#E8FF36]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-[#E8FF36] font-bold">
                    SYSTEM DOMAIN // {pillar.code}
                  </span>
                  <div className="p-2 rounded bg-[#181818] border border-white/5 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                </div>

                <h3
                  className="text-lg font-bold text-[#F5F4EF] mb-3 group-hover:text-[#E8FF36] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#929292] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#929292]">
                <span>STANDARDS COMPLIANT</span>
                <span className="text-[#E8FF36]">● VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

