import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaDatabase, FaLayerGroup, FaRobot, FaTools, FaGraduationCap } from "react-icons/fa";

function About() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <FaServer className="text-blue-500" />,
      skills: "Java, Spring Boot, Spring MVC, Spring Security, JWT, Hibernate, JPA, JDBC, REST APIs, Node.js",
    },
    {
      title: "Frontend",
      icon: <FaCode className="text-indigo-500" />,
      skills: "React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design",
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-cyan-500" />,
      skills: "MySQL, PostgreSQL, Supabase, MongoDB",
    },
    {
      title: "AI Tools",
      icon: <FaRobot className="text-purple-500" />,
      skills: "ChatGPT, GitHub Copilot, Claude AI, Cursor IDE, Gemini, Antigravity",
    },
    {
      title: "Tools",
      icon: <FaTools className="text-slate-400" />,
      skills: "Git, GitHub, Docker, Postman, Maven, IntelliJ IDEA, VS Code",
    },
    {
      title: "CS Core",
      icon: <FaLayerGroup className="text-emerald-500" />,
      skills: "DSA (150+ problems), OOP, Design Patterns, System Design (LLD)",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science",
      institution: "Bansal Institute of Science & Technology, Bhopal",
      duration: "2021 — 2025",
    },
    {
      degree: "10th & 12th Standard",
      specialization: "Science",
      institution: "Government Excellence Higher Secondary School, India",
      duration: "2018 — 2021",
    },
  ];

  return (
    <div
      name="About"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24"
    >
      <div className="space-y-24">
        {/* Section Header */}
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm">01</span>
                  Professional Summary
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Passionate <span className="text-blue-500 font-semibold">Full Stack Developer</span> with hands-on experience building scalable, production-ready web applications.
                  Skilled in <span className="text-white">Spring Boot, React.js, Node.js, and REST APIs</span> with strong fundamentals in System Design and DSA.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  I specialize in architecting efficient backends and crafting intuitive, responsive frontends. My goal is to build software that not only works perfectly but also provides a premium experience for every user.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-2xl group">
                  <div className="text-3xl font-bold text-white group-hover:text-blue-500 transition-colors">150+</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">DSA Problems</div>
                </div>
                <div className="glass-card p-6 rounded-2xl group">
                  <div className="text-3xl font-bold text-white group-hover:text-blue-500 transition-colors">9+</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Projects Delivered</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-500 text-sm">02</span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l border-slate-800 space-y-2 group">
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors"></div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">{edu.duration}</div>
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                    <p className="text-slate-500 text-xs">{edu.specialization}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-sm">03</span>
              Technical Toolkit
            </h3>
            <p className="text-slate-500 max-w-2xl">A comprehensive list of technologies and tools I've mastered to build modern, high-performance applications.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-blue-500/10 transition-all"></div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{category.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                  {category.skills}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;