import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaDatabase, FaBrain, FaTools, FaLayerGroup } from "react-icons/fa";

const into = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
});

const skills = [
  {
    label: "Backend",
    icon: <FaServer />,
    c: "#FFDE59", cl: "#FFFBDD",
    items: ["Java", "Spring Boot", "Node.js", "Express", "Spring MVC", "Spring Security", "Hibernate", "REST APIs"],
  },
  {
    label: "Frontend",
    icon: <FaCode />,
    c: "#FF6B9D", cl: "#FFF0F5",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
  },
  {
    label: "Database",
    icon: <FaDatabase />,
    c: "#3DD6A3", cl: "#EAFAF5",
    items: ["MySQL", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    label: "AI Tools",
    icon: <FaBrain />,
    c: "#FFDE59", cl: "#FFFBDD",
    items: ["GitHub Copilot", "ChatGPT", "Claude AI", "Cursor IDE", "Gemini"],
  },
  {
    label: "Dev Tools",
    icon: <FaTools />,
    c: "#FF6B9D", cl: "#FFF0F5",
    items: ["Git", "GitHub", "Docker", "Postman", "Maven", "IntelliJ", "VS Code"],
  },
  {
    label: "CS Core",
    icon: <FaLayerGroup />,
    c: "#3DD6A3", cl: "#EAFAF5",
    items: ["DSA (150+ problems)", "OOP", "Design Patterns", "System Design", "Microservices"],
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science",
    school: "Bansal Institute of Science & Technology",
    year: "Sep 2021 — Jul 2025",
    c: "#FFDE59",
  },
  {
    degree: "10th & 12th — Science",
    school: "Govt. Excellence Higher Secondary School",
    year: "2017 — 2021",
    c: "#FF6B9D",
  },
];

export default function About() {
  return (
    <>
      {/* ══ ABOUT ══ */}
      <section id="about" className="sec-alt">
        <div className="wrap">
          <motion.div {...into(0)} className="max-w-3xl mx-auto text-center mb-16">
            <p className="badge">👋 ABOUT ME</p>
            <h2 className="h-lg">
              The <span className="hp">Developer</span> Behind the Work
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              I'm a passionate <strong className="text-gray-800">Full Stack Developer</strong> who loves turning complex problems
              into clean, scalable software. I build backends that don't break and frontends people love to use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* LEFT */}
            <motion.div {...into(0.1)} className="space-y-5">
              {/* expertise */}
              <div className="card p-7">
                <h3 className="font-bold text-gray-900 mb-5 text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                  Core Expertise
                </h3>
                <div className="space-y-3">
                  {[
                    { t: "Java, Spring Boot & Node.js — Backend", c: "#FFDE59" },
                    { t: "React.js — Modern Frontend", c: "#FF6B9D" },
                    { t: "REST API Design & Integration", c: "#3DD6A3" },
                    { t: "Database — MySQL, PostgreSQL, Supabase", c: "#FFDE59" },
                    { t: "System Design & Scalable Architecture", c: "#FF6B9D" },
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: x.c }}>✓</div>
                      <span className="text-gray-600 text-sm font-medium">{x.t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* education */}
              <div className="card p-7">
                <h3 className="font-bold text-gray-900 mb-5 text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                  Education
                </h3>
                <div className="space-y-5">
                  {education.map((e, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-3 h-3 rounded-full mt-2 shrink-0" style={{ background: e.c }} />
                      <div>
                        <p className="text-xs font-bold tracking-widest" style={{ color: e.c === "#FFDE59" ? "#C49A00" : "#E0507F" }}>
                          {e.year}
                        </p>
                        <p className="font-bold text-gray-900 text-sm mt-0.5">{e.degree}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{e.school}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div {...into(0.2)} className="space-y-5">
              {/* stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "10+", l: "Projects Built", c: "#FFDE59", cl: "#FFFBDD" },
                  { n: "150+", l: "DSA Problems", c: "#FF6B9D", cl: "#FFF0F5" },
                  { n: "2+", l: "Internships", c: "#3DD6A3", cl: "#EAFAF5" },
                  { n: "130+", l: "GitHub Pushes", c: "#FFDE59", cl: "#FFFBDD" },
                ].map((s, i) => (
                  <motion.div key={i}
                    whileHover={{ scale: 1.04, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card p-5 text-center cursor-default"
                    style={{ border: `2px solid ${s.c}`, background: s.cl }}>
                    <div className="text-3xl font-black" style={{ fontFamily: "Syne,sans-serif" }}>{s.n}</div>
                    <div className="text-xs text-gray-500 font-semibold mt-1">{s.l}</div>
                  </motion.div>
                ))}
              </div>

              {/* open to work card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="card p-7 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #FFFBDD 0%, #FFF0F5 100%)", borderColor: "#FFDE59", borderWidth: 2 }}
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-20" style={{ background: "#FFDE59" }} />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "Syne,sans-serif" }}>
                    Open to Opportunities
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Seeking <strong>Full Stack / Backend</strong> roles. Open to Remote, Hybrid, or Relocation.
                    Freelance contracts also welcome.
                  </p>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="btn btn-y mt-5 text-xs"
                  >
                    Let's Talk →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" className="sec">
        <div className="wrap">
          <motion.div {...into(0)} className="mb-14">
            <p className="badge">🛠️ TECH STACK</p>
            <h2 className="h-lg">
              Skills & <span className="hm">Arsenal</span>
            </h2>
            <p className="text-gray-500 max-w-xl">
              A full toolkit for building modern end-to-end systems — from REST APIs to pixel-perfect UIs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((cat, i) => (
              <motion.div key={i} {...into(i * 0.07)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card p-6 group cursor-default">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ background: cat.cl }}>
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-gray-900" style={{ fontFamily: "Syne,sans-serif" }}>{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span key={j}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold hover:-translate-y-0.5 transition-transform cursor-default"
                      style={{ background: cat.cl, color: "#374151", border: `1px solid ${cat.c}` }}>
                      {item}
                    </span>
                  ))}
                </div>
                {/* accent bottom bar */}
                <div className="mt-5 h-1 rounded-full w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: cat.c }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}