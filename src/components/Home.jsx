import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";
import { FiMonitor, FiHeadphones, FiServer, FiDatabase, FiMousePointer } from "react-icons/fi";
import resume from "../assets/ashish_resum.pdf";

const into = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0" />

      {/* Sketch Background Icons (Tech theme) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <FiMonitor className="absolute top-1/4 left-10 md:left-24 text-gray-100 w-48 h-48 md:w-64 md:h-64 -rotate-12 opacity-50" />
        <FiHeadphones className="absolute bottom-1/4 right-10 md:right-32 text-gray-100 w-40 h-40 md:w-56 md:h-56 rotate-12 opacity-50" />
        <FiServer className="absolute top-1/3 right-10 md:right-20 text-gray-100 w-32 h-32 md:w-48 md:h-48 rotate-6 opacity-30" />
        <FiDatabase className="absolute bottom-1/3 left-10 md:left-20 text-gray-100 w-40 h-40 md:w-52 md:h-52 -rotate-6 opacity-30" />
        <FiMousePointer className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-50 w-72 h-72 md:w-96 md:h-96 rotate-45 opacity-40 -z-10" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-screen">
        
        {/* Main Headline */}
        <motion.div {...into(0.1)} className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tight" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Engineering scalable 
            <br className="hidden md:block" />
            <span className="text-gray-400"> web solutions.</span>
          </h1>
        </motion.div>

        {/* Motivating Sub-headline */}
        <motion.div {...into(0.2)} className="mt-8 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
            I'm{" "}
            <strong className="text-black relative inline-block whitespace-nowrap">
              <span className="relative z-10">Ashish Rathour</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 rounded-sm -z-10 shadow-[0_3px_12px_rgba(253,224,71,0.8)]"></span>
            </strong>
            , a Full Stack Developer driven by the challenge of turning complex problems into elegant software. I specialize in building robust backends with Java & Spring Boot, and crafting pixel-perfect interfaces with React. Let's build something remarkable.
          </p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div {...into(0.3)} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-0.5">
            View My Work <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href={resume} download="Ashish_Rathour_Resume.pdf" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-black font-medium rounded-xl hover:border-black transition-colors shadow-sm hover:shadow-md">
            <FaFileAlt size={14} className="text-gray-400" /> Resume
          </a>
        </motion.div>

        {/* Stats Grid inside Hero */}
        <motion.div {...into(0.5)} className="w-full max-w-4xl mx-auto mt-24 pt-12 border-t border-gray-200 bg-white/50 backdrop-blur-sm rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "20+", l: "Projects" },
              { n: "150+", l: "DSA Solved" },
              { n: "1+", l: "Years Exp" },
              { n: "5+", l: "Freelance" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-black text-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{s.n}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-2 font-mono">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
