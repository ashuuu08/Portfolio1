import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaComments } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import resume from "../assets/ashish_resum.pdf";
import TechNetwork from "./TechNetwork";

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

          {/* ── RIGHT — Ultra-Premium Interactive Tech Network ── */}
          <div className="flex-1 w-full flex items-center justify-center relative z-10 pt-10 lg:pt-0">
            <TechNetwork />
          </div>
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
