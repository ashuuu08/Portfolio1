import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiMysql, SiSupabase } from "react-icons/si";

// Placeholders for images - I'll use gradients or abstract shapes if images aren't available
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      {/* Project Image/Visual */}
      <div className="relative h-56 overflow-hidden bg-slate-800">
        <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${project.color}`}></div>
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
          {project.mainIcon}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
              <FaGithub size={20} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>

        {project.deployed && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Deployed</span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-8 flex flex-col flex-grow space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 text-slate-500">
            {project.icons.map((icon, i) => <span key={i}>{icon}</span>)}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2.5 py-1 bg-white/5 rounded-md text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function Portfolio() {
  const projects = [
    {
      title: "Checklist Delegation System",
      desc: "Real-time task delegation platform where managers create, assign, and monitor checklists with live progress tracking. Integrated WhatsApp notifications and live sync.",
      tech: ["Node.js", "React.js", "Supabase", "PostgreSQL"],
      icons: [<FaNodeJs />, <FaReact />, <SiSupabase />, <SiPostgresql />],
      mainIcon: "📋",
      color: "from-blue-600 to-indigo-600",
      deployed: true,
      live: "https://checklist-delegation.netlify.app/",
      code: "#",
    },
    {
      title: "Internship Management Platform",
      desc: "End-to-end enrollment system with Razorpay payment gateway and automated certificate generation with QR code verification via Apache PDFBox.",
      tech: ["Spring Boot", "React.js", "MySQL", "Hibernate"],
      icons: [<SiSpringboot />, <FaReact />, <SiMysql />],
      mainIcon: "🎓",
      color: "from-emerald-600 to-teal-600",
      deployed: false,
      code: "#",
    },
    {
      title: "Mail Promotion Campaign System",
      desc: "Full-featured email marketing platform with customizable templates, audience segmentation, scheduling, and delivery tracking analytics.",
      tech: ["Node.js", "React.js", "Supabase", "PostgreSQL"],
      icons: [<FaNodeJs />, <FaReact />, <SiSupabase />],
      mainIcon: "📧",
      color: "from-purple-600 to-blue-600",
      deployed: true,
      code: "#",
    },
    {
      title: "Education Material App",
      desc: "Platform for uploading and organizing study materials with subject-wise management and role-based access for students and admins.",
      tech: ["React.js", "Node.js", "MySQL"],
      icons: [<FaReact />, <FaNodeJs />, <SiMysql />],
      mainIcon: "📚",
      color: "from-orange-600 to-red-600",
      deployed: false,
      code: "#",
    },
    {
      title: "ShopEase - E-Commerce",
      desc: "Complete shopping platform with product management, cart system, and secure payment integration built with microservices architecture.",
      tech: ["Spring Boot", "React", "MySQL", "JWT"],
      icons: [<SiSpringboot />, <FaReact />, <SiMysql />],
      mainIcon: "🛒",
      color: "from-indigo-600 to-purple-600",
      deployed: false,
      code: "https://github.com/ashuuu08/shopEase-e-Commerce",
    },
    {
      title: "University Portal",
      desc: "Responsive institutional website with course management, faculty profiles, and student resource integration.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      icons: [<FaCode />],
      mainIcon: "🏛️",
      color: "from-blue-400 to-cyan-500",
      deployed: true,
      live: "https://ptsns.netlify.app/",
    }
  ];

  return (
    <section
      name="Projects"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative"
    >
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title !mb-0"
            >
              Selected Projects
            </motion.h2>
            <p className="text-slate-500 max-w-xl">
              A curated collection of my work, ranging from complex enterprise systems to elegant frontend experiences.
              Each project represents a unique challenge solved with clean code.
            </p>
          </div>

          <motion.a
            href="https://github.com/ashuuu08"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold flex items-center gap-2 group"
          >
            View all on GitHub
            <FaGithub className="group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;