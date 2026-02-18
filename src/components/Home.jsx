import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaCode, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import resume from "../assets/ashish2.22.pdf";

function Home() {
  const socialLinks = [
    {
      icon: <FaGithub size={22} />,
      link: "https://github.com/ashuuu08",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={22} />,
      link: "https://www.linkedin.com/in/itzashu08/",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope size={22} />,
      link: "mailto:rajpootashishd@gmail.com",
      label: "Email"
    },
  ];

  const stats = [
    { number: "9+", label: "Projects" },
    { number: "150+", label: "DSA Solved" },
    { number: "2+", label: "Experience" },
  ];

  return (
    <section
      name="Home"
      className="relative min-h-screen flex items-center bg-[#0f172a] pt-20 overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Available for Hire</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
                <span className="text-white">Ashish</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
                  Rathour
                </span>
              </h1>

              <div className="flex items-center space-x-4 text-2xl md:text-3xl text-slate-400 font-medium">
                <div className="h-0.5 w-12 bg-blue-600"></div>
                <ReactTyped
                  strings={[
                    "Full Stack Developer",
                    "Software Engineer",
                    "Backend Specialist",
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                  className="text-white"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              Passionate developer building scalable, production-ready web applications.
              Skilled in <span className="text-white font-semibold">Spring Boot</span>,
              <span className="text-white font-semibold"> React.js</span>, and
              <span className="text-white font-semibold"> System Design</span>.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center space-x-12 py-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#Projects" className="btn-primary flex items-center gap-2">
                <FaCode size={18} />
                Explore Projects
              </a>
              <a
                href={resume}
                download="Ashish_Rathour_Resume.pdf"
                className="btn-outline flex items-center gap-2"
              >
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center space-x-6 pt-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 glass-card p-1 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0f172a] rounded-xl p-8 space-y-6 font-mono text-sm leading-relaxed border border-white/5">
                  <div className="flex items-center space-x-2 border-b border-white/10 pb-4 mb-4">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-slate-500 text-xs px-2">profile.json</span>
                  </div>

                  <div>
                    <span className="text-indigo-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = {"{"}
                  </div>
                  <div className="pl-6">
                    <span className="text-slate-300">name:</span>{" "}
                    <span className="text-emerald-400">"Ashish Rathour"</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-slate-300">stack:</span> [
                    <span className="text-emerald-400">"Spring Boot"</span>,{" "}
                    <span className="text-emerald-400">"React"</span>
                    ],
                  </div>
                  <div className="pl-6">
                    <span className="text-slate-300">experience:</span>{" "}
                    <span className="text-amber-400">"Intern @ Botivate"</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-slate-300">focus:</span>{" "}
                    <span className="text-emerald-400">"Scalability"</span>
                  </div>
                  <div>{"}"};</div>

                  <div className="pt-4 flex items-center space-x-2">
                    <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-slate-500 italic">// Building future-ready solutions</span>
                  </div>
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/10 rounded-full pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-indigo-500/5 rounded-full pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-blue-600 to-transparent"></div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] [writing-mode:vertical-lr]">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
