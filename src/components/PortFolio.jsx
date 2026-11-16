import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";
import { HiOutlineArrowRight, HiX, HiSparkles, HiCheckCircle, HiLightningBolt, HiCode } from "react-icons/hi";

import checklistImg from "../assets/checklist.png";
import inventrymImg from "../assets/inventrym.png";

const into = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
});

const projects = [
  {
    id: "amigo-associate",
    tag: "Freelance",
    category: ["Freelance", "Full Stack / SaaS", "Featured"],
    title: "Amigo Associate",
    sub: "Professional Services Platform",
    desc: "Developed a robust full-stack web platform for Amigo Associate using MongoDB, Express, React, and Node.js. Focused on performance and responsive design.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "https://www.amigoassociate.com/",
    freelance: true,
    featured: true,
    role: "Lead Full-Stack Engineer",
    specification: ["MERN stack", "JWT auth", "Responsive + accessibility"],
    impact: ["Improved load times by 35%", "Increased signups by 18% after UX fixes"],
    responsibilities: ["API design and implementation", "Responsive UI and accessibility", "Deployment and CI setup"],
    optimizations: [
      "Image lazy-loading and CDN for faster load",
      "Reduced bundle size by code-splitting routes",
    ],
    challenges: [
      { problem: "Slow initial paint on mobile", solution: "Implemented critical CSS and deferred non-critical scripts" },
      { problem: "Frequent DB timeouts under load", solution: "Added request queuing and optimized DB indices" },
    ],
  },
  {
    id: "vaidure",
    tag: "Freelance",
    category: ["Freelance", "Full Stack / SaaS"],
    title: "Vaidure",
    sub: "Modern Web Application",
    desc: "Built a dynamic MERN stack application for Vaidure. Designed for scalability and high performance to support rapid business scaling.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "https://www.vaidure.com/",
    freelance: true,
    featured: false,
    role: "MERN Engineer",
    specification: ["MERN stack", "Server-side rendering for SEO", "Optimized asset pipeline"],
    impact: ["Search latency reduced by 40%", "SEO visibility improved via SSR"],
    optimizations: ["Implemented SSR for core pages", "Optimized images and used modern formats"],
    challenges: [
      { problem: "SEO issues due to SPA routing", solution: "Added server-side rendering for key pages" },
    ],
  },
  {
    id: "ashbitsoft",
    tag: "Freelance",
    category: ["Freelance"],
    title: "AshbitSoft",
    sub: "IT Solutions Company Site",
    desc: "Engineered the official website for AshbitSoft consultancy. Built with React and Tailwind for blazing fast load times and clean UI.",
    tech: ["React", "Tailwind CSS", "Vite", "Netlify"],
    live: "https://ashbit.in",
    freelance: true,
    featured: false,
    role: "Frontend Engineer",
    specification: ["React + Tailwind", "Edge CDN deployment", "Accessibility-first"],
    impact: ["CSS bundle reduced to 20KB", "First contentful paint improved by 0.8s"],
    optimizations: ["Tailwind purge to reduce CSS", "Deployed with edge CDN"],
    challenges: [
      { problem: "Slow stylesheet delivery", solution: "Enabled tree-shaking and purgeCSS" },
    ],
  },
  {
    id: "ngo-management",
    tag: "Backend API",
    category: ["Backend & APIs", "Featured"],
    title: "NGO Management",
    sub: "Finance & Auth System",
    desc: "Secure backend architecture for NGO management. Features Spring Security with JWT authentication and embedded H2 database for robust data handling.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "H2 Database", "Postman"],
    code: "https://github.com/ashuuu08/ngo_finance.git",
    featured: true,
    role: "Backend Lead",
    specification: ["Spring Boot API", "JWT auth", "H2 for testing / MySQL for prod"],
    impact: ["Automated finance reports, saving 6 hours/week"],
    optimizations: ["Database connection pooling", "Prepared statements for heavy queries"],
    challenges: [
      { problem: "Auth token revocation issues", solution: "Added token blacklist and shorter token TTLs" },
    ],
  },
  {
    id: "checklist-delegation",
    tag: "SaaS",
    category: ["Full Stack / SaaS", "Featured"],
    image: checklistImg,
    title: "Checklist Delegation",
    sub: "Real-time Task Delegation",
    desc: "Real-time task delegation with WhatsApp notifications, live progress tracking and Supabase real-time sync. Reduced team follow-up time by 50%.",
    tech: ["Node.js", "React", "Supabase", "PostgreSQL"],
    featured: true,
    role: "Full Stack Developer",
    specification: ["Real-time sync with Supabase", "WhatsApp notifications integration"],
    impact: ["Reduced team follow-up time by 50%"],
    optimizations: ["Optimized Supabase realtime subscriptions", "Debounced user input updates"],
    challenges: [
      { problem: "Delayed task status updates across devices", solution: "Implemented Supabase webhooks & optimistic UI updates" },
    ],
  },
  {
    id: "inventrym",
    tag: "Enterprise",
    category: ["Full Stack / SaaS", "Featured"],
    image: inventrymImg,
    title: "Inventrym",
    sub: "Inventory Management System",
    desc: "Full-stack inventory system with real-time stock alerts, barcode scanning, and automated notifications.",
    tech: ["React", "Supabase", "PostgreSQL"],
    featured: true,
    role: "Full Stack Engineer",
    specification: ["Barcode scanning", "Real-time stock alerts", "Automated notifications"],
    impact: ["Automated stock alerts, reducing stockouts by 22%"],
    optimizations: ["Batched stock query reads", "Client-side barcode cache"],
    challenges: [
      { problem: "Low scanning speeds on mobile camera", solution: "Integrated lightweight WASM barcode parser" },
    ],
  },
  {
    id: "internship-platform",
    tag: "Deployed",
    category: ["Backend & APIs", "Full Stack / SaaS", "Featured"],
    title: "Internship Platform",
    sub: "Enrollment & QR Verification",
    desc: "Secure enrollment system with Razorpay integration and automated QR-verified PDF certificate generation via Spring Boot.",
    tech: ["Spring Boot", "React", "MySQL", "Hibernate"],
    live: "https://internmaker.vercel.app/",
    code: "https://github.com/ashuuu08/internmaker_backend",
    featured: true,
    role: "Backend & DevOps",
    specification: ["Razorpay integration", "QR-verified PDF certificates", "Asynchronous processing"],
    impact: ["Served 1000+ students during pilot launch"],
    optimizations: ["Cached heavy DB joins", "Asynchronous certificate generation"],
    challenges: [
      { problem: "Payment verification edge-cases", solution: "Added webhook replay protection and idempotency keys" },
    ],
  },
  {
    id: "mail-campaign-os",
    tag: "Tool",
    category: ["Full Stack / SaaS"],
    title: "Mail Campaign OS",
    sub: "Automated Marketing Suite",
    desc: "Email marketing platform with audience segmentation and open-rate analytics. Cut manual campaign effort by 60%.",
    tech: ["Node.js", "React", "Supabase", "PostgreSQL"],
    featured: false,
    role: "Full Stack Developer",
    specification: ["Audience segmentation engine", "Open-rate analytics tracking", "Queue-based mail dispatch"],
    impact: ["Cut manual campaign creation effort by 60%"],
    optimizations: ["Background task queuing with Redis", "Email template pre-rendering"],
  },
  {
    id: "academy-portal",
    tag: "Deployed",
    category: ["Full Stack / SaaS"],
    title: "Academy Portal",
    sub: "Role-Based Study Platform",
    desc: "Secure hub with admin/student roles, subject management, and file preview. Deployed on Vercel.",
    tech: ["React", "Node.js", "MySQL"],
    live: "https://gharhischool.vercel.app/",
    code: "https://github.com/ashuuu08/gharhischool",
    featured: false,
    role: "Full Stack Engineer",
    specification: ["Role-based access control", "Document preview engine", "RESTful backend"],
  },
  {
    id: "ecommerce-micro",
    tag: "OSS",
    category: ["Backend & APIs"],
    title: "E-Commerce Micro",
    sub: "Microservices Architecture",
    desc: "Scalable shopping architecture featuring microservices, JWT auth, and Razorpay payment integration.",
    tech: ["Spring Boot", "React", "Microservices"],
    code: "https://github.com/ashuuu08/shopEase-e-Commerce",
    featured: false,
    role: "Backend Architect",
    specification: ["Microservices architecture", "API Gateway & Eureka Discovery", "JWT Security"],
  },
];

const categories = ["All", "Featured", "Full Stack / SaaS", "Freelance", "Backend & APIs"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "All") return true;
    return p.category.includes(activeTab);
  });

  return (
    <section id="projects" className="sec bg-white relative">
      <div className="wrap">
        
        {/* Section Header */}
        <motion.div {...into(0)} className="mb-12 text-center md:text-left">
          <span className="badge">
            <HiCode className="mr-1 text-black" /> Portfolio Showcase
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
            Featured Work.
          </h2>
          <p className="text-gray-500 max-w-2xl text-base sm:text-lg mt-4 leading-relaxed">
            A curated collection of full-stack web applications, scalable backend APIs, freelance solutions, and production software.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div {...into(0.05)} className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-gray-100">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-black bg-gray-100 shadow-sm border border-gray-300/80"
                    : "text-gray-500 hover:text-black hover:bg-gray-50 border border-transparent"
                }`}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="project-tab-pill"
                    className="absolute inset-0 rounded-lg border-2 border-black -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id || p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-black transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative overflow-hidden"
              >
                {/* Visual Image Preview if present */}
                {p.image && (
                  <div className="w-full h-44 mb-5 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden relative group-hover:border-gray-400 transition-colors">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}

                <div>
                  {/* Top Tag & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 rounded border border-gray-200 font-mono">
                      {p.tag}
                    </span>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-mono">
                        <HiSparkles size={11} /> Highlight
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className="text-xl sm:text-2xl font-bold text-black group-hover:text-gray-800 transition-colors"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-400 mt-1 mb-3">
                    {p.sub}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {p.desc}
                  </p>

                  {/* Impact Highlight Box if available */}
                  {p.impact && p.impact.length > 0 && (
                    <div className="mb-4 p-2.5 bg-gray-50 rounded-lg border border-gray-200/80 flex items-start gap-2">
                      <HiLightningBolt className="text-black shrink-0 mt-0.5" size={14} />
                      <span className="text-xs font-semibold text-gray-800 line-clamp-2">
                        {p.impact[0]}
                      </span>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-medium text-gray-600 bg-gray-100/80 px-2 py-0.5 rounded border border-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto gap-2">
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-gray-600 transition-colors group/btn cursor-pointer py-1"
                  >
                    Case Study <FaChevronRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors p-1"
                        title="View Source Code"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-black border-b border-black hover:text-gray-600 hover:border-gray-600 pb-0.5 transition-colors"
                      >
                        Live <FaExternalLinkAlt size={10} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Archive Callout */}
        <motion.div {...into(0.2)} className="mt-16 text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 font-medium">Looking for earlier repositories or full commits?</p>
          <a
            href="https://github.com/ashuuu08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 btn bg-black text-white hover:bg-gray-800 text-sm py-3 px-8 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
          >
            Explore Complete GitHub Repositories <HiOutlineArrowRight className="text-lg" />
          </a>
        </motion.div>

      </div>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 max-w-3xl w-full my-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <HiX size={22} />
              </button>

              {/* Tag & Title */}
              <div className="flex items-center gap-2 mb-2 font-mono">
                <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-gray-100 text-gray-800 rounded border border-gray-200">
                  {selectedProject.tag}
                </span>
                {selectedProject.role && (
                  <span className="text-xs font-semibold text-gray-500">
                    Role: <strong className="text-black font-sans">{selectedProject.role}</strong>
                  </span>
                )}
              </div>

              <h3
                className="text-2xl sm:text-4xl font-black text-black tracking-tight pr-8"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {selectedProject.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-gray-500 mt-1 mb-6">
                {selectedProject.sub}
              </p>

              {/* Screenshot Banner if present */}
              {selectedProject.image && (
                <div className="w-full h-56 sm:h-72 rounded-xl bg-gray-100 border border-gray-200 overflow-hidden mb-6 shadow-sm">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Overview */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {selectedProject.desc}
                </p>
              </div>

              {/* Impact Section */}
              {selectedProject.impact && selectedProject.impact.length > 0 && (
                <div className="mb-6 p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-800 font-mono mb-2 flex items-center gap-1.5">
                    <HiCheckCircle size={16} /> Measurable Impact & Achievements
                  </h4>
                  <ul className="space-y-1.5 text-sm sm:text-base font-medium text-emerald-950">
                    {selectedProject.impact.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Specifications / Responsibilities */}
              {selectedProject.specification && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">
                    Key Specifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(selectedProject.specification) ? (
                      selectedProject.specification.map((spec, sidx) => (
                        <span key={sidx} className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200">
                          {spec}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200">
                        {selectedProject.specification}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Optimizations */}
              {selectedProject.optimizations && selectedProject.optimizations.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">
                    Engineering Optimizations
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {selectedProject.optimizations.map((opt, oidx) => (
                      <li key={oidx} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                        <span className="text-black font-bold">✓</span>
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">
                    Technical Challenges & Solutions
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.challenges.map((c, cidx) => (
                      <div key={cidx} className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                        <p className="text-xs font-bold text-red-600 font-mono uppercase tracking-wide">
                          Problem: <span className="text-gray-900 font-sans font-medium text-sm">{c.problem}</span>
                        </p>
                        <p className="text-xs font-bold text-emerald-700 font-mono uppercase tracking-wide">
                          Solution: <span className="text-gray-800 font-sans font-medium text-sm">{c.solution}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Footer */}
              <div className="mb-8 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 font-mono">
                  {selectedProject.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-md border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-gray-200">
                {selectedProject.code && (
                  <a
                    href={selectedProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:text-black hover:border-black transition-colors"
                  >
                    <FaGithub size={16} /> Source Code
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md"
                  >
                    Launch Live Project <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}