import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

import checklistImg from "../assets/checklist.png";
import inventrymImg from "../assets/inventrym.png";

const into = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
});

const projects = [
  {
    tag: "Freelance",
    title: "Amigo Associate",
    sub: "Professional Services Platform",
    desc: "Developed a robust full-stack web platform for Amigo Associate using MongoDB, Express, React, and Node.js. Focused on performance and responsive design.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "https://www.amigoassociate.com/",
    freelance: true,
  },
  {
    tag: "Freelance",
    title: "Vaidure",
    sub: "Modern Web Application",
    desc: "Built a dynamic MERN stack application for Vaidure. Designed for scalability and high performance to support rapid business scaling.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "https://www.vaidure.com/",
    freelance: true,
  },
  {
    tag: "Freelance",
    title: "AshbitSoft",
    sub: "IT Solutions Company Site",
    desc: "Engineered the official website for AshbitSoft consultancy. Built with React and Tailwind for blazing fast load times and clean UI.",
    tech: ["React", "Tailwind CSS", "Vite", "Netlify"],
    live: "https://ashbit.in",
    freelance: true,
  },
  {
    tag: "Backend API",
    title: "NGO Management",
    sub: "Finance & Auth System",
    desc: "Secure backend architecture for NGO management. Features Spring Security with JWT authentication and an embedded H2 database for robust data handling and API testing via Postman.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "H2 Database", "Postman"],
    code: "https://github.com/ashuuu08/ngo_finance.git",
  },
  {
    tag: "SaaS",
    image: checklistImg,
    title: "Checklist Delegation",
    sub: "Real-time task management",
    desc: "Real-time task delegation with WhatsApp notifications, live progress tracking and Supabase real-time sync. Reduced team follow-up time by 50%.",
    tech: ["Node.js", "React", "Supabase", "PostgreSQL"],
  },
  {
    tag: "Enterprise",
    image: inventrymImg,
    title: "Inventrym",
    sub: "Inventory Management System",
    desc: "Full-stack inventory system with real-time stock alerts, barcode scanning, and automated notifications.",
    tech: ["React", "Supabase", "PostgreSQL"],
  },
  {
    tag: "Deployed",
    title: "Internship Platform",
    sub: "Enrollment & QR certificates",
    desc: "Secure enrollment system with Razorpay integration and automated QR-verified PDF certificate generation via Spring Boot.",
    tech: ["Spring Boot", "React", "MySQL", "Hibernate"],
    live: "https://internmaker.vercel.app/",
    code: "https://github.com/ashuuu08/internmaker_backend",
  },
  {
    tag: "Tool",
    title: "Mail Campaign OS",
    sub: "Automated marketing suite",
    desc: "Email marketing platform with audience segmentation and open-rate analytics. Cut manual campaign effort by 60%.",
    tech: ["Node.js", "React", "Supabase", "PostgreSQL"],
  },
  {
    tag: "Deployed",
    title: "Academy Portal",
    sub: "Role-based study platform",
    desc: "Secure hub with admin/student roles, subject management, and file preview. Deployed on Vercel.",
    tech: ["React", "Node.js", "MySQL"],
    live: "https://gharhischool.vercel.app/",
    code: "https://github.com/ashuuu08/gharhischool",
  },
  {
    tag: "OSS",
    title: "E-Commerce Micro",
    sub: "Microservices architecture",
    desc: "Scalable shopping architecture featuring microservices, JWT auth, and Razorpay payment integration.",
    tech: ["Spring Boot", "React", "Microservices"],
    code: "https://github.com/ashuuu08/shopEase-e-Commerce",
  },
];

const ProjectAccordion = ({ p, i, isOpen, toggleOpen }) => {
  return (
    <motion.div {...into(i * 0.05)} className="border-b border-gray-200">
      <button 
        onClick={toggleOpen}
        className="w-full flex flex-col md:flex-row md:items-center justify-between py-8 text-left hover:bg-gray-50 transition-colors px-4 -mx-4 group"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-4 md:mb-0">
          <span className="text-gray-300 font-mono text-sm group-hover:text-black transition-colors">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-black group-hover:text-gray-600 transition-colors" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
            {p.title}
          </h3>
        </div>
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6">
           {p.freelance && <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 rounded-sm font-mono">Freelance</span>}
           <span className={`text-2xl font-light transition-transform duration-300 text-gray-400 group-hover:text-black ${isOpen ? "rotate-45" : ""}`}>
             +
           </span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-10 pt-4 md:pl-16 flex flex-col lg:flex-row gap-12">
              <div className="flex-1 space-y-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 font-mono mb-2">{p.tag}</p>
                  <p className="text-xl font-medium text-black">{p.sub}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg max-w-xl">{p.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span key={j} className="text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-sm border border-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-8 pt-4">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-bold text-black border-b border-black hover:text-gray-600 hover:border-gray-600 pb-0.5 transition-colors">
                      Live Site <FaExternalLinkAlt size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors">
                      Source Code <FaGithub size={14} className="group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
              
              {p.image && (
                <div className="flex-1">
                  <div className="w-full aspect-video bg-gray-100 border border-gray-200 rounded-md overflow-hidden shadow-sm">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="projects" className="sec bg-white">
      <div className="wrap">
        <motion.div {...into(0)} className="mb-20">
          <p className="badge">Portfolio</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
            Selected Works.
          </h2>
          <p className="text-gray-500 max-w-xl text-lg mt-6">
            A showcase of production-ready applications, freelance commissions, and open-source contributions.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-gray-200 mt-12">
          {projects.map((p, i) => (
            <ProjectAccordion 
              key={i} 
              p={p} 
              i={i} 
              isOpen={openIndex === i} 
              toggleOpen={() => toggleOpen(i)} 
            />
          ))}
        </div>

        <motion.div {...into(0.2)} className="mt-20 flex justify-center">
          <a href="https://github.com/ashuuu08" target="_blank" rel="noopener noreferrer" className="btn btn-ghost hover:bg-gray-50 border-gray-200 text-black">
            View full archive on GitHub <HiOutlineArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}