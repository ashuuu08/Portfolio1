import React from "react";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCheck, FaCogs } from "react-icons/fa";
import { useCinematicScroll } from "../animations/useCinematicScroll";

const experiences = [
  {
    company: "Botivate",
    role: "Full Stack Developer Intern",
    status: "Present",
    duration: "Jan 2026 — Present",
    location: "Raipur, Chhattisgarh",
    highlights: [
      "Maintained production Node.js + React web app — resolved 30+ critical bugs, reducing overall issues by 40%.",
      "Architected a Checklist Delegation System with real-time monitoring and WhatsApp API notifications for managerial roles.",
      "Built a Mail Promotion Campaign System with audience segmentation and analytics — cutting manual effort by 60%.",
    ],
    tech: ["Node.js", "React", "Supabase", "PostgreSQL", "WhatsApp API"],
  },
  {
    company: "CypherBYTE",
    role: "Web Developer Intern",
    status: "Completed",
    duration: "May 2024 — Jun 2024",
    location: "Bhopal, Madhya Pradesh",
    highlights: [
      "Developed responsive React interfaces integrated with secure RESTful APIs with 100% on-time delivery metrics.",
      "Optimized frontend component rendering resulting in a 25% improvement in Core Web Vitals and page load times.",
      "Integrated Razorpay payment gateway for secure transaction handling and automated receipt generation.",
    ],
    tech: ["React.js", "JavaScript", "REST APIs", "Razorpay"],
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Bansal Institute of Science & Technology",
    timeline: "Sep 2021 — Jul 2025",
    focus: "Distributed Systems, Data Structures & Algorithms, Database Engineering, OOP Architecture",
  },
  {
    degree: "10th & 12th — Science & Mathematics",
    institution: "Govt. Excellence Higher Secondary School",
    timeline: "2017 — 2021",
    focus: "Physics, Mathematics, Computer Foundations",
  },
];

const services = [
  { title: "Full Stack Web Apps", desc: "End-to-end applications built with Spring Boot, Node.js, and React. Production-ready and monitored." },
  { title: "REST API & Auth Architecture", desc: "Stateless security architecture using JWT, Spring Security 6, and OpenAPI standards." },
  { title: "Frontend Engineering", desc: "Accessible, pixel-perfect responsive interfaces with React focused on Core Web Vitals and sub-second paint." },
  { title: "Database & Performance Tuning", desc: "Schema design, connection pooling, and query indexing strategies for PostgreSQL, Supabase, and MySQL." },
];

export default function Scene6Experience() {
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
      ".exp-card",
      { opacity: 0, x: isDesktop ? -30 : 0, y: isDesktop ? 0 : 30 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".exp-timeline-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="experience" ref={containerRef} className="sec-cinematic bg-[#070A11]">
      <div className="ambient-orb w-[400px] h-[400px] bg-cyan-500/5 top-1/4 -right-48" />

      <div className="wrap relative z-10">
        {/* Header */}
        <div className="exp-header max-w-3xl mb-16">
          <div className="badge-cinematic mb-4">Scene 06 — Professional Journey</div>
          <h2
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Commercial Experience & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400">
              Technical Track Record.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Delivering measurable engineering impact across production startups and client engagements.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="exp-timeline-container space-y-8 max-w-5xl mb-20">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="exp-card card-cinematic p-6 sm:p-8 border-white/10 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {exp.status}
                    </span>
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                      <FaCalendarAlt size={11} className="text-cyan-400" />
                      {exp.duration}
                    </span>
                    <span className="text-xs font-mono text-gray-400 hidden sm:flex items-center gap-1.5">
                      <FaMapMarkerAlt size={11} className="text-gray-400" />
                      {exp.location}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-black text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {exp.company}
                  </h3>
                  <p className="text-sm font-mono text-cyan-300 mt-1">{exp.role}</p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech used */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column: Education + Capabilities */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
          {/* Education */}
          <div className="card-cinematic p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 text-cyan-400">
              <FaGraduationCap size={22} />
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Academic Foundation
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="pb-5 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="text-xs font-mono text-cyan-300">{edu.timeline}</span>
                  <h4 className="font-bold text-base text-gray-100 mt-1">{edu.degree}</h4>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">{edu.institution}</p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div className="card-cinematic p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 text-emerald-400">
              <FaCogs size={20} />
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Engineering Capabilities
              </h3>
            </div>

            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-semibold text-sm text-gray-200 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {s.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed pl-3.5">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

