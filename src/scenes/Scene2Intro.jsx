import React from "react";
import { 
  FaServer, 
  FaReact, 
  FaDatabase, 
  FaTools, 
  FaLayerGroup, 
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaCogs
} from "react-icons/fa";
import { useCinematicScroll } from "../animations/useCinematicScroll";

const pillars = [
  {
    icon: <FaBolt className="text-cyan-400" size={20} />,
    title: "Performance & Low Latency",
    desc: "Optimizing critical rendering paths, query caching, connection pooling with HikariCP, and code-splitting to guarantee sub-second interaction.",
  },
  {
    icon: <FaShieldAlt className="text-emerald-400" size={20} />,
    title: "Defensive Security",
    desc: "Hardening APIs with Spring Security, stateless JWT auth tokens, rate-limiting, CSRF guards, and secure credential delegation.",
  },
  {
    icon: <FaCogs className="text-amber-400" size={20} />,
    title: "Scalable Abstractions",
    desc: "Clean layered domain models, microservice communication, database indexing, and decoupled state management in React.",
  },
];

const skillCategories = [
  {
    name: "Backend Architecture",
    icon: <FaServer className="text-cyan-400" />,
    items: ["Java", "Spring Boot", "Spring Security", "Node.js", "Express.js", "REST APIs", "Microservices", "Hibernate"],
  },
  {
    name: "Modern Frontend",
    icon: <FaReact className="text-sky-400" />,
    items: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion", "Responsive UX", "HTML5 & CSS3"],
  },
  {
    name: "Databases & Storage",
    icon: <FaDatabase className="text-emerald-400" />,
    items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB", "H2 Database", "Schema Design", "Query Indexing"],
  },
  {
    name: "DevOps, Cloud & Tools",
    icon: <FaTools className="text-amber-400" />,
    items: ["Docker", "AWS", "Git & GitHub", "Postman", "Maven", "Linux", "Netlify & Vercel"],
  },
  {
    name: "Computer Science Core",
    icon: <FaLayerGroup className="text-purple-400" />,
    items: ["Data Structures & Algorithms", "System Design", "OOP Principles", "Design Patterns", "Concurrency"],
  },
];

export default function Scene2Intro() {
  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    // Header reveal
    gsap.fromTo(
      ".intro-header",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#intro",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Pillar cards stagger
    gsap.fromTo(
      ".intro-pillar-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".intro-pillars-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Skills stagger
    gsap.fromTo(
      ".intro-skill-group",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".intro-skills-wrap",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="intro" ref={containerRef} className="sec-cinematic bg-[#070A11]">
      <div className="ambient-orb w-[400px] h-[400px] bg-cyan-500/5 top-1/2 -right-48" />

      <div className="wrap relative z-10">
        {/* Section Header */}
        <div className="intro-header max-w-3xl">
          <div className="badge-cinematic mb-4">Scene 02 — Engineering Ethos</div>
          <h2
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for Reliability, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              Measurable Performance
            </span>{" "}
            & Precision.
          </h2>
          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
            I don't just write code that executes; I architect systems engineered to endure real traffic, 
            unexpected failures, and scaling demands. Every interface is designed with user friction in mind, 
            and every backend endpoint is engineered with throughput, caching, and security constraints at the forefront.
          </p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="intro-pillars-grid grid md:grid-cols-3 gap-6 mt-14">
          {pillars.map((p, i) => (
            <div key={i} className="intro-pillar-card card-cinematic p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <FaCheckCircle size={12} />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Taxonomy */}
        <div className="intro-skills-wrap mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Technical Taxonomy</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Core Technology Stack & Capabilities
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              A comprehensive toolkit tested through enterprise internships, production client websites, and scalable SaaS builds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <div key={i} className="intro-skill-group card-cinematic p-6 border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-lg">
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-base text-gray-200">
                    {cat.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-300 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

