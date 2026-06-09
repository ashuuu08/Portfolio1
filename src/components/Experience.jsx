import React from "react";
import { motion } from "framer-motion";

const into = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
});

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
    tech: ["Node.js", "React", "Supabase", "PostgreSQL"],
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
    tech: ["React.js", "JavaScript", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="sec bg-gray-50 border-y border-gray-200">
      <div className="wrap">
        <motion.div {...into(0)} className="mb-20">
          <p className="badge">Experience</p>
          <h2 className="text-5xl md:text-6xl font-black text-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
            Career History.
          </h2>
          <p className="text-gray-500 max-w-xl text-lg mt-6">
            Production systems, enterprise architecture, and measurable impact.
          </p>
        </motion.div>

        <div className="max-w-5xl">
          {experiences.map((exp, i) => (
            <motion.div key={i} {...into(i * 0.1)} className="relative pl-6 md:pl-0 border-l border-gray-200 md:border-none pb-16 last:pb-0">
              
              <div className="absolute left-[-5px] top-2 md:hidden w-2.5 h-2.5 rounded-full bg-black border-2 border-white" />

              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                
                {/* Left side timeline info */}
                <div className="md:w-1/3 flex flex-col md:items-end text-left md:text-right relative">
                  <div className="hidden md:block absolute right-[-32px] top-2 w-3 h-3 rounded-full bg-white border-2 border-black z-10" />
                  <div className="hidden md:block absolute right-[-27px] top-2 bottom-[-80px] w-px bg-gray-200" />
                  
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">
                    {exp.duration}
                  </p>
                  <h3 className="text-2xl font-bold text-black" style={{ fontFamily: "var(--font-display)" }}>
                    {exp.company}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm mt-1">{exp.location}</p>
                </div>

                {/* Right side content */}
                <div className="md:w-2/3">
                  <div className="mb-6 flex items-center gap-4">
                    <h4 className="text-xl font-bold text-black">{exp.role}</h4>
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-gray-200 text-gray-700 rounded-sm font-mono">
                      {exp.status}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-gray-600 leading-relaxed text-lg flex items-start">
                        <span className="text-gray-300 mr-4 mt-1">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <span key={j} className="text-xs font-medium text-gray-500 bg-white px-2.5 py-1 rounded-sm border border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
