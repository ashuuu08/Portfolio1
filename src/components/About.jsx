import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaServer,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiJavascript, SiSpringboot, SiMysql, SiMongodb, SiRedux, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { ReactTyped } from "react-typed";

function About() {
 const skills = [
  {
    icon: <FaJava size={40} />,
    label: "Java",
    repo: "https://github.com/ashuuu08"
  },
  {
    icon: <FaReact size={40} />,
    label: "React",
    repo: "https://github.com/ashuuu08/Univercy_website"
  },
  {
    icon: <SiSpringboot size={40} />,
    label: "Spring Boot",
    repo: "https://github.com/ashuuu08/shopEase-e-Commerce"
  },
  {
    icon: <SiMysql size={40} />,
    label: "MySQL",
    repo: "https://github.com/ashuuu08/SQL-Projects"
  },
  {
    icon: <FaServer size={40} />,
    label: "Node.js",
    repo: "https://github.com/ashuuu08/shopEase-e-Commerce"
  },
  {
    icon: <SiMongodb size={40} />,
    label: "MongoDB",
    repo: "https://github.com/ashuuu08/MongoDB-Projects"
  },
  {
    icon: <FaHtml5 size={40} />,
    label: "MongoDB",
    repo: "https://github.com/ashuuu08/MongoDB-Projects"
  },
  {
    icon: <FaGitAlt size={40} />,
    label: "MongoDB",
    repo: "https://github.com/ashuuu08/MongoDB-Projects"
  },
];

  return (
    <div
      id="About"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-wide"
      >
        About <span className="text-[rgb(59,130,246)]">Me</span>
      </motion.h1>

      {/* Typed Subtitle */}
      <ReactTyped
        strings={[
          "Java Full Stack Developer",
          "Frontend Enthusiast",
          "Backend Problem Solver",
          "Passionate about Scalable Systems",
        ]}
        typeSpeed={40}
        backSpeed={25}
        loop
        className="text-base sm:text-lg text-gray-300 mb-8 text-center"
      />

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg"
      >
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
          Hi, I’m <span className="text-[rgb(59,130,246)] font-semibold">Ashish Kumar Rathour</span>, 
          a passionate <span className="text-[rgb(59,130,246)]">Java Full Stack Developer</span> 
          focused on building fast, secure, and scalable web applications.
        </p>
        <p className="text-gray-400 text-sm sm:text-base">
          Skilled in <span className="text-[rgb(59,130,246)]">Java</span>, 
          <span className="text-[rgb(59,130,246)]"> Spring Boot</span>, 
          <span className="text-[rgb(59,130,246)]"> React.js</span>, 
          <span className="text-[rgb(59,130,246)]"> SQL</span>, and more.
        </p>
      </motion.div>

      {/* DSA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg mt-8"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-[rgb(59,130,246)] mb-4 text-center">
          DSA & Problem Solving
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
          I have a strong foundation in <span className="text-[rgb(59,130,246)]">Data Structures and Algorithms (DSA)</span>, 
          having solved over <span className="text-[rgb(59,130,246)]">150+ questions</span> on <span className="text-[rgb(59,130,246)]">LeetCode</span>. 
          This strengthened my problem-solving skills, optimized solutions, and enhanced analytical thinking.
        </p>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Experienced with key topics: <span className="text-[rgb(59,130,246)]">Arrays, Strings, Linked Lists, Trees, Graphs, Hashing, Sliding Window, Two Pointers</span>, and <span className="text-[rgb(59,130,246)]">Dynamic Programming</span>. 
          Regular practice improved coding speed and ability to design scalable solutions.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mt-12 w-full"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-[rgb(59,130,246)] mb-6 text-center">
          Education
        </h2>
        <div className="flex flex-col gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
            <h3 className="text-lg font-semibold">Bachelor of Technology (B.Tech)</h3>
            <p className="text-gray-400 text-sm"> Bansal Institute of Research & Technology, Bhopal</p>
            <p className="text-gray-500 text-sm mt-1">2021 - 2025 | Computer Science</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
            <h3 className="text-lg font-semibold">Higher Secondary (12th)</h3>
            <p className="text-gray-400 text-sm"> Govt Excellence H.S.School Anuppur(M.P)</p>
            <p className="text-gray-500 text-sm mt-1">2019-2021 || (90.8 %)</p>
          </div>
        </div>
      </motion.div>

 {/* Skills Section */}
<div className="max-w-4xl mt-12 w-full mx-auto">
  <h2 className="text-2xl sm:text-3xl font-semibold text-blue-500 mb-6 text-center">
    Skills
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mt-8">
    {skills.map((tech, i) => (
      <a
        key={i}
        href={tech.repo} // Link to the GitHub repo for this skill
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center bg-gray-800 rounded-lg border border-gray-700 p-4 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
      >
        <div className="text-4xl text-white mb-2">{tech.icon}</div>
        <p className="text-gray-300 text-sm font-medium">{tech.label}</p>
      </a>
    ))}
  </div>
</div>


    </div>
  );
}

export default About;
