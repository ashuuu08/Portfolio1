import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "Botivate",
      role: "Web Developer (Intern)",
      duration: "Jan 2026 — Present",
      location: "Raipur, Chhattisgarh",
      highlights: [
        "Maintaining and updating existing production web application, resolving bugs and implementing feature enhancements.",
        "Designed and developed a Checklist Delegation System enabling managers to assign, track, and monitor task checklists in real time.",
        "Built a Mail Promotion Campaign System to automate project-based email marketing with customizable templates and delivery tracking."
      ],
      color: "blue"
    },
    {
      company: "CypherBYTE",
      role: "Web Developer (Intern)",
      duration: "May 2024 — Jun 2024",
      location: "Bhopal, Madhya Pradesh",
      highlights: [
        "Developed 5+ responsive web interfaces using React.js, HTML5, CSS3, integrated with RESTful APIs.",
        "Optimized component rendering, improved UI performance and delivered client projects on time in an agile team."
      ],
      color: "indigo"
    }
  ];

  return (
    <section
      name="Experience"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24"
    >
      <div className="space-y-16">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Professional Experience
          </motion.h2>
          <p className="text-slate-500 max-w-2xl">
            My professional journey as a developer, focusing on high-impact internships and production-level development.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group lg:grid lg:grid-cols-12 gap-8 items-start"
            >
              {/* Timeline Indicator */}
              <div className="hidden lg:block lg:col-span-2 py-4">
                <div className="flex flex-col items-end text-right space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{exp.duration}</span>
                  <span className="text-[10px] text-slate-600 font-medium italic">{exp.location}</span>
                </div>
              </div>

              {/* Card */}
              <div className="lg:col-span-10 glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group-hover:border-blue-500/30 transition-all duration-500">
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-${exp.color}-500 group-hover:w-2 transition-all`}></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                      <FaBriefcase className="text-blue-500" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="lg:hidden flex flex-col space-y-2 text-slate-500 text-sm">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-4 group/item">
                      <span className="text-blue-500 mt-1.5 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity">
                        <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                      </span>
                      <p className="text-slate-400 leading-relaxed group-hover/item:text-slate-300 transition-colors">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
