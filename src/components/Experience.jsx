import React from "react";
import { motion } from "framer-motion";
import { HiBriefcase, HiLocationMarker, HiCalendar, HiChevronRight } from "react-icons/hi";

const into = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
});

const experiences = [
  {
    company: "Botivate",
    logo: "🤖",
    role: "Web Developer Intern",
    status: "Current",
    duration: "Jan 2026 — Present",
    location: "Raipur, Chhattisgarh",
    c: "#FFDE59", cl: "#FFFBDD",
    highlights: [
      "Maintained production Node.js + React web app — resolved 30+ bugs, reducing issues by 40%.",
      "Architected a Checklist Delegation System with real-time monitoring, WhatsApp API notifications for 3+ manager roles.",
      "Built Mail Promotion Campaign System with 10+ email templates, audience segmentation and analytics — cut manual effort 60%.",
    ],
    tech: ["Node.js", "React.js", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    company: "CypherBYTE",
    logo: "💻",
    role: "Web Developer Intern",
    status: "Completed",
    duration: "May 2024 — Jun 2024",
    location: "Bhopal, Madhya Pradesh",
    c: "#FF6B9D", cl: "#FFF0F5",
    highlights: [
      "Developed 5+ responsive React.js interfaces integrated with RESTful APIs with 100% on-time delivery.",
      "Optimized React component rendering — 25% improvement in page load performance.",
      "Integrated Razorpay payment gateway for secure transaction handling.",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="sec-alt">
      <div className="wrap">
        <motion.div {...into(0)} className="mb-14">
          <p className="badge">💼 CAREER</p>
          <h2 className="h-lg">Work <span className="hy">Experience</span></h2>
          <p className="text-gray-500 max-w-xl">
            Production systems, real teams, measurable impact — internships that count.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative max-w-4xl mx-auto space-y-10">
          {/* line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: "linear-gradient(to bottom, #FFDE59, #FF6B9D, #3DD6A3)" }} />

          {experiences.map((exp, i) => (
            <motion.div key={i} {...into(i * 0.15)}
              className="relative md:pl-24">

              {/* timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 300 }}
                className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-3xl items-center justify-center text-2xl shadow-lg z-10"
                style={{ background: exp.cl, border: `2px solid ${exp.c}` }}>
                {exp.logo}
              </motion.div>

              {/* card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card p-7">

                {/* header */}
                <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                      style={{ background: exp.cl, color: exp.c === "#FFDE59" ? "#C49A00" : "#E0507F" }}>
                      {exp.status}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Syne,sans-serif" }}>
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 font-semibold text-gray-700">
                      <HiBriefcase size={14} style={{ color: exp.c === "#FFDE59" ? "#C49A00" : "#E0507F" }} />
                      {exp.company}
                    </div>
                  </div>
                  {/* mobile logo */}
                  <div className="md:hidden w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                    style={{ background: exp.cl }}>
                    {exp.logo}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-5">
                  <span className="flex items-center gap-1.5">
                    <HiCalendar size={13} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker size={13} /> {exp.location}
                  </span>
                </div>

                {/* highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <HiChevronRight size={16} className="shrink-0 mt-0.5"
                        style={{ color: exp.c === "#FFDE59" ? "#C49A00" : "#E0507F" }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* tech */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1 rounded-xl text-xs font-semibold"
                      style={{ background: exp.cl, color: "#374151", border: `1px solid ${exp.c}` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
