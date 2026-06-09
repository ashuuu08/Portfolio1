import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaDatabase, FaBrain, FaTools, FaLayerGroup } from "react-icons/fa";

const into = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
});

const skills = [
  {
    label: "Backend",
    icon: <FaServer size={18} />,
    items: ["Java", "Spring Boot", "Node.js", "Express", "Spring MVC", "Spring Security", "Hibernate", "REST APIs"],
  },
  {
    label: "Frontend",
    icon: <FaCode size={18} />,
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Database",
    icon: <FaDatabase size={18} />,
    items: ["MySQL", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    label: "AI Tools",
    icon: <FaBrain size={18} />,
    items: ["GitHub Copilot", "ChatGPT", "Claude AI", "Cursor IDE", "Gemini", "LLM APIs"],
  },
  {
    label: "Dev Tools",
    icon: <FaTools size={18} />,
    items: ["Git", "GitHub", "Docker", "Postman", "Maven", "IntelliJ", "VS Code", "AWS"],
  },
  {
    label: "CS Core",
    icon: <FaLayerGroup size={18} />,
    items: ["DSA", "OOP", "Design Patterns", "System Design", "Microservices"],
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science",
    school: "Bansal Institute of Science & Technology",
    year: "Sep 2021 — Jul 2025",
  },
  {
    degree: "10th & 12th — Science",
    school: "Govt. Excellence Higher Secondary School",
    year: "2017 — 2021",
  },
];

export default function About() {
  return (
    <>
      {/* ══ ABOUT ══ */}
      <section id="about" className="sec-alt">
        <div className="wrap">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* LEFT TEXT */}
            <motion.div {...into(0)} className="flex-1 space-y-8">
              <p className="badge">About Me</p>
              <h2 className="text-4xl md:text-5xl font-black text-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                The Developer <br />Behind the Work.
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  I'm a passionate <strong className="text-black">Full Stack Developer</strong> who loves turning complex problems
                  into clean, scalable software. I focus on building backends that don't break and frontends people love to use.
                </p>
                <p>
                  My philosophy is simple: write clean code, keep the architecture simple, and ship fast. Whether it's an enterprise Java application or a sleek React interface, I take pride in the details.
                </p>
              </div>
              
              <div className="pt-4">
                <a href="mailto:rajpootashishd@gmail.com" className="group inline-flex items-center gap-2 font-semibold text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                  Let's Collaborate <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* RIGHT INFO */}
            <motion.div {...into(0.1)} className="flex-1 space-y-12">
              
              {/* expertise */}
              <div>
                <h3 className="font-bold text-black mb-6 text-xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Core Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    "Java, Spring Boot, Node.js & Express.js — Backend",
                    "React.js & Vite — Modern Frontend",
                    "REST API Design & Integration",
                    "SQL & NoSQL Databases",
                    "System Design & Scalable Architecture",
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span className="text-gray-700 font-medium">{x}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* education */}
              <div>
                <h3 className="font-bold text-black mb-6 text-xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Education
                </h3>
                <div className="space-y-6 border-l-2 border-gray-200 pl-6 ml-1">
                  {education.map((e, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-black" />
                      <p className="text-xs font-bold tracking-widest text-gray-400 font-mono mb-1">
                        {e.year}
                      </p>
                      <p className="font-bold text-black text-lg">{e.degree}</p>
                      <p className="text-gray-500 mt-1">{e.school}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" className="sec border-b border-gray-200">
        <div className="wrap">
          <motion.div {...into(0)} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="badge">Tech Stack</p>
              <h2 className="text-4xl md:text-5xl font-black text-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                Skills & Arsenal
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm font-medium">
              A comprehensive toolkit for building modern end-to-end systems — from high-performance APIs to pixel-perfect UIs.
            </p>
          </motion.div>

          <div className="flex flex-col border-t border-gray-200">
            {skills.map((cat, i) => (
              <motion.div key={i} {...into(i * 0.1)}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors px-4 -mx-4">
                <div className="flex items-center gap-6 mb-4 md:mb-0 md:w-1/3">
                  <span className="text-gray-300 group-hover:text-black transition-colors">{cat.icon}</span>
                  <h3 className="font-bold text-black text-xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2 md:w-2/3">
                  {cat.items.map((item, j) => (
                    <span key={j} className="text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                      {item}{j < cat.items.length - 1 ? <span className="text-gray-300 mx-2">•</span> : ""}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}