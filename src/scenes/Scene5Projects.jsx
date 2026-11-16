import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaCheck, FaTools, FaBolt } from "react-icons/fa";
import { useCinematicScroll } from "../animations/useCinematicScroll";

import checklistImg from "../assets/checklist.png";
import inventrymImg from "../assets/inventrym.png";

const projectsData = [
  {
    id: "amigo",
    category: "client",
    tag: "Commercial Client",
    title: "Amigo Associate",
    sub: "Professional Corporate Services Platform",
    desc: "Engineered a high-performance full-stack web platform using MongoDB, Express, React, and Node.js. Focused on responsive layout, semantic accessibility, and asset caching.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    live: "https://www.amigoassociate.com/",
    role: "Lead Full-Stack Engineer",
    impact: "Improved page load times by 35% and increased signups by 18% post UX revamp.",
    optimizations: "Image lazy-loading, WebP asset delivery, and route code-splitting.",
    challenge: "Frequent DB timeouts under load resolved by connection pooling and query indexing.",
  },
  {
    id: "checklist",
    category: "fullstack",
    tag: "Production SaaS",
    image: checklistImg,
    title: "Checklist Delegation System",
    sub: "Real-Time Task Delegation with WhatsApp API",
    desc: "Real-time task delegation system with live progress tracking, WhatsApp API notifications for managerial status alerts, and Supabase real-time sync.",
    tech: ["Node.js", "React", "Supabase", "PostgreSQL", "WhatsApp API"],
    role: "Full Stack Developer",
    impact: "Reduced managerial team follow-up overhead by 50%.",
    optimizations: "Supabase real-time channel subscriptions with optimistic UI updates.",
    challenge: "Handling unreliable WhatsApp webhooks through an idempotent retry queue.",
  },
  {
    id: "ngo",
    category: "backend",
    tag: "Backend & Security",
    title: "NGO Management Financial API",
    sub: "Spring Security 6 & JWT Architecture",
    desc: "Robust backend system for non-profit financial governance. Built with Spring Boot, Spring Security, stateless JWT tokens, and an embedded H2/MySQL database with full Postman verification.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "H2 Database"],
    code: "https://github.com/ashuuu08/ngo_finance.git",
    role: "Backend Lead",
    impact: "Automated manual finance audits, saving 6 administrative hours per week.",
    optimizations: "HikariCP database connection pooling and prepared statements for high query throughput.",
    challenge: "Stateless token revocation resolved via an in-memory TTL token blacklist.",
  },
  {
    id: "inventrym",
    category: "fullstack",
    tag: "Enterprise System",
    image: inventrymImg,
    title: "Inventrym System",
    sub: "Real-Time Enterprise Inventory Engine",
    desc: "Full-stack inventory management system featuring real-time stock monitoring, automated deficit alerts, barcode scanning, and multi-warehouse tracking.",
    tech: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    role: "Full Stack Engineer",
    impact: "Automated reorder triggers reduced stockout events by 22%.",
    optimizations: "Indexed database lookups with Row Level Security (RLS) enforcement.",
    challenge: "Synchronizing concurrent inventory decrements prevented via row-level locks.",
  },
  {
    id: "internmaker",
    category: "backend",
    tag: "Deployed Platform",
    title: "Internship Verification Platform",
    sub: "Enrollment & QR-Verified PDF Certificates",
    desc: "Secure enrollment platform with Razorpay payment gateway integration and automated cryptographic QR-verified PDF certificate generation via Spring Boot.",
    tech: ["Spring Boot", "React", "MySQL", "Hibernate", "Razorpay"],
    live: "https://internmaker.vercel.app/",
    code: "https://github.com/ashuuu08/internmaker_backend",
    role: "Backend & DevOps Engineer",
    impact: "Handled 1,000+ students during initial pilot launch with zero payment failures.",
    optimizations: "Asynchronous certificate rendering thread pool with background mail dispatch.",
    challenge: "Payment webhook replay attempts mitigated using idempotency tokens.",
  },
  {
    id: "vaidure",
    category: "client",
    tag: "Commercial Client",
    title: "Vaidure Application",
    sub: "Dynamic Scalable MERN Application",
    desc: "Engineered scalable web application for Vaidure. Designed with server-side rendering for search engine optimization and asset caching pipelines.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "SSR"],
    live: "https://www.vaidure.com/",
    role: "MERN Engineer",
    impact: "Reduced search latency by 40% and improved Google SEO visibility.",
    optimizations: "Server-side rendering for high-value landing routes.",
    challenge: "SPA routing SEO limitations resolved by pre-rendering public paths.",
  },
  {
    id: "ashbit",
    category: "client",
    tag: "Commercial Client",
    title: "AshbitSoft Consultancy",
    sub: "Official Agency Web Platform",
    desc: "Engineered official website for AshbitSoft consultancy. Built with React and Tailwind CSS for rapid sub-second render times and zero unnecessary layout shift.",
    tech: ["React", "Tailwind CSS", "Vite", "Netlify"],
    live: "https://ashbit.in",
    role: "Frontend Engineer",
    impact: "CSS bundle compressed to 20KB; First Contentful Paint improved by 0.8s.",
    optimizations: "Tailwind CSS purge rules and Edge CDN caching policies.",
    challenge: "Large uncompressed CSS stylesheets eliminated via tree-shaking.",
  },
  {
    id: "mailcampaign",
    category: "fullstack",
    tag: "Internal Automation",
    title: "Mail Promotion Campaign OS",
    sub: "Automated Marketing & Analytics Suite",
    desc: "Automated email broadcast engine built with Node.js and Supabase. Supports audience segmentation, scheduled queues, and deliverability tracking.",
    tech: ["Node.js", "React", "Supabase", "PostgreSQL"],
    role: "Full Stack Engineer",
    impact: "Eliminated 60% of manual effort required for weekly customer outreach.",
    optimizations: "Batch queue workers with throttling to respect provider rate limits.",
    challenge: "Spam score penalties prevented through DKIM/SPF header verification.",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "backend", label: "Backend & Java" },
  { id: "fullstack", label: "Full Stack & SaaS" },
  { id: "client", label: "Production Clients" },
];

export default function Scene5Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".projects-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".project-card-item",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [activeFilter]);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={containerRef} className="sec-cinematic bg-[#05070B]">
      <div className="wrap relative z-10">
        {/* Header */}
        <div className="projects-header max-w-3xl mb-10">
          <div className="badge-cinematic mb-4">Scene 05 — Production Works</div>
          <h2
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Verified Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Shipped to Production.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Real enterprise APIs, commercial client sites, and deployed applications. No mock metrics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  : "bg-white/5 text-gray-400 border border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="project-card-item card-cinematic p-6 sm:p-7 flex flex-col justify-between group border-white/10"
              >
                <div>
                  {/* Image / Graphic Preview */}
                  {project.image ? (
                    <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-black/40 border border-white/5 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F18] via-transparent to-transparent opacity-80" />
                      <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                        {project.tag}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full h-28 rounded-xl mb-6 bg-gradient-to-br from-cyan-950/30 via-slate-900/40 to-black/60 border border-white/5 p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/70 text-cyan-300 border border-white/10">
                          {project.tag}
                        </span>
                        <span className="text-[11px] font-mono text-gray-400">Production Code</span>
                      </div>
                      <div className="font-mono text-xs text-gray-300 font-semibold truncate">
                        {project.sub}
                      </div>
                    </div>
                  )}

                  {/* Title & Headline */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>

                    {/* External links */}
                    <div className="flex items-center gap-2 shrink-0">
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <FaGithub size={15} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-colors"
                          title="Open Live Platform"
                        >
                          <FaExternalLinkAlt size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-mono text-cyan-400/90 mb-3">{project.sub}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.desc}</p>

                  {/* Real Impact Metric Pill */}
                  <div className="mb-5 p-3 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/20 text-xs font-mono text-cyan-200 flex items-start gap-2">
                    <FaBolt className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Measurable Outcome:</strong> {project.impact}</span>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Engineering Deep Dive (Isolated Framer Motion) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 border-t border-white/5 space-y-3 font-mono text-xs"
                      >
                        {project.optimizations && (
                          <div className="text-gray-300">
                            <span className="text-cyan-400 font-semibold block mb-0.5">Optimizations:</span>
                            <span className="text-gray-400">{project.optimizations}</span>
                          </div>
                        )}
                        {project.challenge && (
                          <div className="text-gray-300">
                            <span className="text-amber-400 font-semibold block mb-0.5">Core Challenge & Resolution:</span>
                            <span className="text-gray-400">{project.challenge}</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Footer toggle */}
                <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{isExpanded ? "Hide Technical Specs" : "Inspect Engineering Details"}</span>
                    <FaChevronDown
                      size={10}
                      className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  <span className="text-[11px] font-mono text-gray-400">{project.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

