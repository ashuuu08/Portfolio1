import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaInstagram, FaTelegram, FaGithub, FaLinkedin, FaReact, FaJava } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  // Cursor motion values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring for cursor
  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [cursorX, cursorY]);

  return (
    <section
      name="Home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-950 to-blue-900 px-6 md:px-20 overflow-hidden"
    >
      {/* Animated Background Circles */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: cursorX.get() / 10 - 250, y: cursorY.get() / 10 - 250 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: cursorX.get() / 15 - 200, y: cursorY.get() / 15 - 200 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Smooth Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 rounded-full bg-blue-500/40 border-2 border-blue-400"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Main Content */}
      <div className="max-w-screen-xl flex flex-col items-center space-y-8 z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-400"
        >
          Welcome to my world 👋
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Hi, I’m <span className="text-[#3b82f6]">Ashish Kumar Rathour</span>
        </motion.h1>

        <div className="text-2xl md:text-4xl flex items-center justify-center space-x-2 font-semibold text-white">
          <span>I’m a</span>
          <ReactTyped
            strings={["Full Stack Developer", "Programmer", "Problem Solver"]}
            typeSpeed={50}
            backSpeed={40}
            loop
            className="text-[#d26552]"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Passionate B.Tech Graduate specializing in Full Stack Development. Skilled in
          <span className="text-[#3b82f6]"> Java, Spring Boot, React.js, MySQL</span> 
          and building scalable, real-world applications with clean code.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="src/assets/ashish2.22.pdf"
          download="src/assets/ashish2.22.pdf"
          className="px-8 py-3 border border-[#f0eeec] text-[#3b82f6] font-semibold rounded-md hover:bg-[#3b82f6] hover:text-black transition-all duration-300 hover:shadow-lg"
        >
          Download Resume
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center space-x-6 mt-6"
        >
          {[ 
            { icon: <FaGithub />, link: "https://github.com/ashuuu08" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/itzashu08/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/itzashu_08" },
            { icon: <FaTelegram />, link: "https://t.me/" },
          ].map(({ icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-[#3b82f6] hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center space-x-6 mt-6"
        >
          {[SiSpringboot, FaJava, FaReact, SiMysql].map((Icon, i) => (
            <Icon
              key={i}
              className="text-4xl text-white border border-gray-700 rounded-full p-2 hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 hover:shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
