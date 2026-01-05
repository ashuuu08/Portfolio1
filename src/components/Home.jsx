import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTelegram, FaGithub, FaLinkedin, FaArrowDown, FaCode } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: <FaGithub size={20} />, 
      link: "https://github.com/ashuuu08",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin size={20} />, 
      link: "https://www.linkedin.com/in/itzashu08/",
      label: "LinkedIn"
    },
    { 
      icon: <FaInstagram size={20} />, 
      link: "https://www.instagram.com/itzashu_08",
      label: "Instagram"
    },
    { 
      icon: <FaTelegram size={20} />, 
      link: "https://t.me/",
      label: "Telegram"
    },
  ];

  const stats = [
    { number: "9+", label: "Projects" },
    { number: "150+", label: "DSA Solved" },
    { number: "3", label: "Tech Stacks" },
  ];

  return (
    <section
      name="Home"
      className="relative min-h-[85vh] flex items-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Diagonal Background Split */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"
          style={{
            clipPath: 'polygon(0 0, 50% 0, 30% 100%, 0 100%)',
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tl from-cyan-600/20 to-transparent"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 70% 100%, 50% 0)',
          }}
        ></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="text-4xl"
                >
                  👋
                </motion.div>
                <span className="text-gray-400 text-lg">Hello, I'm</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                <span className="block text-white">Ashish</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto] animate-gradient">
                  Rathour
                </span>
              </h1>
            </motion.div>

            {/* Role with Typed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 text-xl md:text-2xl font-semibold"
            >
              <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center md:gap-3">
                <ReactTyped
                  strings={[
                    "Full Stack Developer",
                    "Backend Engineer",
                    "Problem Solver",
                    "Tech Enthusiast",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  className="text-white"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-gray-400 text-base leading-relaxed max-w-xl border-l-4 pl-4 border-blue-500/50"
            >
              Crafting scalable web applications with expertise in{" "}
              <span className="text-blue-400 font-semibold">Java</span>,{" "}
              <span className="text-blue-400 font-semibold">Spring Boot</span>, and{" "}
              <span className="text-blue-400 font-semibold">React.js</span>. 
              Passionate about clean code, optimal performance, and innovative solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-6 pt-3"
            >
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-3"
            >
              <a
                href="#projects"
                className="group relative px-6 py-3 bg-blue-600 text-white font-semibold rounded-none overflow-hidden transition-all duration-300 hover:bg-blue-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaCode />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>

              <a
                href="public/project/ashish2.22.pdf"
                download="Ashish_Rathour_Resume.pdf"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-none hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-700"></div>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
              <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
            </motion.div>
          </div>

          {/* Right Visual - 5 columns */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-full flex items-center justify-center"
            >
              {/* Animated Code Editor */}
              <div className="relative w-full max-w-sm scale-90 hidden lg:block">
                {/* Window Frame */}
                <div className="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden shadow-2xl">
                  {/* Window Header */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-sm ml-4 font-mono">App.jsx</span>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">developer</span>{" "}
                      <span className="text-white">= {"{"}</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="pl-4"
                    >
                      <span className="text-cyan-400">name</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">"Ashish Rathour"</span>
                      <span className="text-white">,</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="pl-4"
                    >
                      <span className="text-cyan-400">role</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">"Full Stack Developer"</span>
                      <span className="text-white">,</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      className="pl-4"
                    >
                      <span className="text-cyan-400">skills</span>
                      <span className="text-white">: [</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                      className="pl-8"
                    >
                      <span className="text-green-400">"Spring Boot"</span>
                      <span className="text-white">,</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      className="pl-8"
                    >
                      <span className="text-green-400">"React.js"</span>
                      <span className="text-white">,</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                      className="pl-8"
                    >
                      <span className="text-green-400">"MySQL"</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.9 }}
                      className="pl-4"
                    >
                      <span className="text-white">],</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.1 }}
                      className="pl-4"
                    >
                      <span className="text-cyan-400">projects</span>
                      <span className="text-white">: </span>
                      <span className="text-orange-400">9</span>
                      <span className="text-white">,</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.3 }}
                      className="pl-4"
                    >
                      <span className="text-cyan-400">dsaSolved</span>
                      <span className="text-white">: </span>
                      <span className="text-orange-400">150</span>
                      <span className="text-white">,</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                      className="pl-4"
                    >
                      <span className="text-cyan-400">hireable</span>
                      <span className="text-white">: </span>
                      <span className="text-orange-400">true</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.7 }}
                    >
                      <span className="text-white">{"}"}</span>
                      <span className="text-white">;</span>
                    </motion.div>

                    {/* Blinking Cursor */}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-blue-400 ml-1"
                    />
                  </div>
                </div>

                {/* Floating Code Snippets */}
                <motion.div
                  className="absolute top-4 right-4 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg px-4 py-2 shadow-lg"
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-blue-400 font-mono text-xs font-bold">{"</>"}  code</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-4 py-2 shadow-lg"
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-cyan-400 font-mono text-xs font-bold">🚀 deploy</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 -right-20 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2 shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-purple-400 font-mono text-xs font-bold">☕ java</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/3 -left-16 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-lg px-4 py-2 shadow-lg"
                  animate={{ x: [-8, 8, -8] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
                >
                  <span className="text-green-400 font-mono text-xs font-bold">⚡ fast</span>
                </motion.div>
              </div>

              {/* Background Glow Effects */}
              <motion.div
                className="absolute top-1/4 -right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaArrowDown />
        </motion.div>
      </motion.div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default Home;