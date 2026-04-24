import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaComments } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import resume from "../assets/ashish_resum.pdf";

/* ── helpers ───────────────────────────── */
const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: .12 } } },
  item: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: [.16, 1, .3, 1] } } },
};



export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* ── full-bleed bg artwork ── */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] blob opacity-20"
        style={{ background: "radial-gradient(circle,#FFDE59 0%,transparent 75%)" }} />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] blob opacity-15"
        style={{ background: "radial-gradient(circle,#FF6B9D 0%,transparent 75%)", animationDelay: "4s" }} />
      <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] blob opacity-15"
        style={{ background: "radial-gradient(circle,#3DD6A3 0%,transparent 75%)", animationDelay: "8s" }} />

      <div className="wrap w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-10 lg:pt-0">

          {/* ── LEFT ── */}
          <motion.div variants={stagger.container} initial="hidden" animate="show" className="space-y-7 relative z-20 flex-1 w-full max-w-2xl">

            {/* status badge */}
            <motion.div variants={stagger.item}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
                style={{ background: "rgba(61,214,163,.14)", border: "1.5px solid #3DD6A3", color: "#1CB887" }}>
                <HiSparkles className="text-[#3DD6A3]" /> Open to Full-Time Roles
              </span>
            </motion.div>

            {/* name */}
            <motion.div variants={stagger.item} className="space-y-2">
              <h1 className="h-xl text-[#0D0D0D]">
                Hey, I'm<br />
                <span className="relative inline-block">
                  <span style={{ color: "var(--yh)" }}>Ashish</span>
                </span>{" "}
                <span className="cursor">Rathour</span>
              </h1>
              <div className="text-2xl md:text-3xl font-bold text-gray-400 flex flex-wrap items-center gap-3">
                <span>Full Stack</span>
                <ReactTyped
                  strings={["Developer ⚡", "Engineer 🛠️", "Architect 🏗️", "Problem Solver 🔥"]}
                  typeSpeed={60} backSpeed={35} loop
                  style={{ color: "var(--ph)" }}
                />
              </div>
            </motion.div>

            {/* tagline */}
            <motion.p variants={stagger.item} className="text-gray-500 text-lg max-w-xl leading-relaxed">
              I build <span className="font-bold text-gray-800">fast, scalable web applications</span> using{" "}
              <span style={{ color: "var(--ph)" }} className="font-bold">Java · Spring Boot</span>,{" "}
              <span style={{ color: "var(--yh)" }} className="font-bold">Node.js · Express</span> and{" "}
              <span style={{ color: "var(--mh)" }} className="font-bold">React</span>.
              Production-ready code, clean architecture, real-world impact.
            </motion.p>

            {/* skill marquee */}
            <motion.div variants={stagger.item} className="overflow-hidden rounded-2xl border py-3 max-w-lg" style={{ borderColor: "var(--bdr)", background: "var(--bg2)" }}>
              <div className="flex marquee-track gap-3 w-max">
                {["Java", "Spring Boot", "React", "Node.js", "PostgreSQL", "Supabase", "MySQL", "REST APIs", "Hibernate", "Git", "Docker"].concat(
                  ["Java", "Spring Boot", "React", "Node.js", "PostgreSQL", "Supabase", "MySQL", "REST APIs", "Hibernate", "Git", "Docker"]
                ).map((t, i) => (
                  <span key={i} className="whitespace-nowrap text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl"
                    style={{ background: `${i % 3 === 0 ? "#FFDE59" : i % 3 === 1 ? "#FFD6E0" : "#D4F5E9"}`, color: "var(--ink)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-3">
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-y group">
                View Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href={resume} download="Ashish_Rathour_Resume.pdf" className="btn btn-ghost">
                <FaDownload /> Resume
              </a>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-p">
                <FaComments /> Hire Me
              </button>
            </motion.div>

            {/* socials */}
            <motion.div variants={stagger.item} className="flex items-center gap-4 hidden sm:flex">
              {[
                { icon: <FaGithub size={18} />, href: "https://github.com/ashuuu08", label: "GitHub" },
                { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/itzashu08", label: "LinkedIn" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="w-11 h-11 rounded-2xl flex items-center justify-center border font-medium text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all glow-y"
                  style={{ borderColor: "var(--bdr)", background: "var(--bg2)" }}>
                  {s.icon}
                </a>
              ))}
              <span className="text-xs text-gray-400 ml-2">/ Find me online</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Premium Animated Tech Cluster ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [.16, 1, .3, 1], delay: 0.3 }}
            className="flex-1 w-full max-w-[520px] flex items-center justify-center relative min-h-[520px] z-10"
          >
            {/* ── CLUSTER STAGE ── */}
            <div className="relative w-[420px] h-[420px]">

              {/* ── ORBIT RINGS ── */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[380px] h-[380px] rounded-full"
                  style={{ border: "1.5px dashed rgba(255,222,89,0.25)" }}
                />
                {/* Mid orbit */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[280px] h-[280px] rounded-full"
                  style={{ border: "1.5px dashed rgba(255,107,157,0.2)" }}
                />
                {/* Inner orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[180px] h-[180px] rounded-full"
                  style={{ border: "1px dashed rgba(61,214,163,0.3)" }}
                />
              </div>

              {/* ── CENTRAL GLOWING ORB ── */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 40px 10px rgba(255,222,89,0.18)", "0 0 80px 24px rgba(255,107,157,0.22)", "0 0 40px 10px rgba(61,214,163,0.18)", "0 0 40px 10px rgba(255,222,89,0.18)"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-full flex items-center justify-center z-20 relative"
                  style={{ background: "linear-gradient(135deg,#FFDE59 0%,#FF6B9D 50%,#3DD6A3 100%)" }}
                >
                  <span className="text-3xl">⚡</span>
                  {/* Pulse rings */}
                  <motion.div animate={{ scale: [1, 1.8], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-full bg-[#FFDE59]" />
                  <motion.div animate={{ scale: [1, 2.4], opacity: [0.3, 0] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-[#FF6B9D]" />
                </motion.div>
              </div>

              {/* ── ORBITING TECH DOTS ── */}
              {/* Yellow dot on outer orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-start justify-center"
              >
                <div className="w-4 h-4 rounded-full bg-[#FFDE59] shadow-lg mt-1" style={{ boxShadow: "0 0 12px 4px rgba(255,222,89,0.5)" }} />
              </motion.div>
              {/* Pink dot on mid orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-end justify-center"
              >
                <div className="mb-1 w-3 h-3 rounded-full bg-[#FF6B9D]" style={{ boxShadow: "0 0 10px 4px rgba(255,107,157,0.45)" }} />
              </motion.div>
              {/* Mint dot on inner orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-start"
              >
                <div className="ml-4 w-2.5 h-2.5 rounded-full bg-[#3DD6A3]" style={{ boxShadow: "0 0 8px 3px rgba(61,214,163,0.5)" }} />
              </motion.div>

              {/* ── FLOATING CARD: System Status (top-right) ── */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                className="absolute top-[-10px] right-[-30px] w-[200px] card p-4 shadow-2xl bg-white/95 backdrop-blur-xl z-30 cursor-default"
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-[#3DD6A3]" />
                  <span className="text-[10px] font-black text-gray-700 tracking-widest uppercase">Live Status</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "API Gateway", val: "OK", color: "#3DD6A3", bg: "#EAFAF5" },
                    { label: "DB Response", val: "4ms", color: "#FF6B9D", bg: "#FFF0F5" },
                    { label: "Auth", val: "Active", color: "#F5C800", bg: "#FFFBDD" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-[10px] text-gray-500 font-medium">{row.label}</span>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-lg" style={{ color: row.color, background: row.bg }}>{row.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Uptime</span>
                  <span className="text-sm font-black text-gray-900" style={{ fontFamily: "Space Grotesk,sans-serif" }}>99.9%</span>
                </div>
              </motion.div>

              {/* ── FLOATING CARD: Skills Bar (bottom-right) ── */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                className="absolute bottom-[-20px] right-[-20px] w-[185px] card p-4 shadow-2xl bg-white/95 backdrop-blur-xl z-30 cursor-default"
              >
                <div className="text-[10px] font-black text-gray-600 tracking-widest uppercase mb-3">Skills</div>
                <div className="space-y-2">
                  {[
                    { label: "Java / Spring", pct: 90, color: "#FF6B9D" },
                    { label: "React / Node", pct: 85, color: "#FFDE59" },
                    { label: "PostgreSQL", pct: 78, color: "#3DD6A3" },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-0.5">
                        <span className="text-[9px] text-gray-500 font-semibold">{s.label}</span>
                        <span className="text-[9px] font-bold" style={{ color: s.color }}>{s.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.pct}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: s.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── FLOATING CARD: Terminal (bottom-left) ── */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                className="absolute bottom-[10px] left-[-40px] w-[195px] p-4 rounded-2xl shadow-2xl z-30 cursor-default"
                style={{ background: "#0D0D0D", border: "1px solid #2a2a2a" }}
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                  <span className="text-[9px] text-gray-500 ml-1 font-mono">terminal</span>
                </div>
                <div className="font-mono text-[10px] leading-relaxed" style={{ color: "#3DD6A3" }}>
                  <span className="text-gray-500">$ </span>
                  <ReactTyped
                    strings={[
                      "git push origin main^Done ✓",
                      "mvn clean install^Build SUCCESS ✓",
                      "docker build .^Image built ✓",
                    ]}
                    typeSpeed={40} backSpeed={15} loop
                    style={{ color: "#3DD6A3" }}
                  />
                </div>
              </motion.div>

              {/* ── FLOATING CARD: Commits (top-left) ── */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                className="absolute top-[10px] left-[-50px] w-[160px] card p-3.5 shadow-2xl bg-white/95 backdrop-blur-xl z-30 cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-gray-600 tracking-widest uppercase">Commits</span>
                  <motion.span
                    animate={{ color: ["#3DD6A3", "#FF6B9D", "#FFDE59", "#3DD6A3"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-xs font-black"
                  >↑ 12</motion.span>
                </div>
                <div className="flex items-end gap-0.5 h-10">
                  {[3, 7, 5, 9, 4, 8, 6, 10, 5, 7, 9, 6, 8, 11].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h * 9}%`, opacity: [0.5, 1, 0.7] }}
                      transition={{ duration: 1, delay: i * 0.06, opacity: { duration: 2, repeat: Infinity, delay: i * 0.1 } }}
                      className="flex-1 rounded-sm"
                      style={{ background: i > 9 ? "#FFDE59" : i % 2 === 0 ? "#3DD6A3" : "#FF6B9D", opacity: 0.7 }}
                    />
                  ))}
                </div>
                <div className="mt-2 text-[9px] text-gray-400 font-semibold">Last 14 days</div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* ── STATS BAR ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8, duration: .6 }}
          className="grid grid-cols-3 gap-4 mt-20 max-w-lg">
          {[
            { n: "10+", l: "Projects Built", c: "var(--y)" },
            { n: "150+", l: "DSA Solved", c: "var(--p)" },
            { n: "2+", l: "Internships", c: "var(--m)" },
          ].map((s, i) => (
            <div key={i} className="card p-5 text-center hover:scale-105 transition-transform">
              <div className="text-3xl font-black" style={{ fontFamily: "Syne,sans-serif", color: s.c === "var(--m)" ? "var(--mh)" : s.c === "var(--p)" ? "var(--ph)" : "var(--yh)" }}>{s.n}</div>
              <div className="text-xs text-gray-400 font-medium mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
