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
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiRedux, 
  SiTailwindcss, 
  SiPostgresql,
  SiPostman 
} from "react-icons/si";

function About() {
  const skills = [
    { icon: <FaJava size={40} />, label: "Java", category: "backend" },
    { icon: <SiSpringboot size={40} />, label: "Spring Boot", category: "backend" },
    { icon: <FaReact size={40} />, label: "React", category: "frontend" },
    { icon: <SiJavascript size={40} />, label: "JavaScript", category: "frontend" },
    { icon: <SiMysql size={40} />, label: "MySQL", category: "database" },
    { icon: <SiPostgresql size={40} />, label: "PostgreSQL", category: "database" },
    { icon: <FaGitAlt size={40} />, label: "Git", category: "tools" },
    { icon: <FaDocker size={40} />, label: "Docker", category: "tools" },
    { icon: <FaHtml5 size={40} />, label: "HTML5", category: "frontend" },
    { icon: <FaCss3Alt size={40} />, label: "CSS3", category: "frontend" },
    { icon: <SiRedux size={40} />, label: "Redux", category: "frontend" },
    { icon: <SiPostman size={40} />, label: "Postman", category: "tools" },
  ];

  const stats = [
    { number: "9+", label: "Projects Built", icon: "🚀" },
    { number: "150+", label: "DSA Solved", icon: "💡" },
    { number: "2+", label: "Years Coding", icon: "⚡" },
    { number: "3", label: "Major Apps", icon: "🎯" },
  ];

  const expertise = [
    {
      title: "Backend Development",
      description: "Building robust REST APIs with Spring Boot, implementing JWT authentication, and designing scalable microservices architecture.",
      tech: ["Java", "Spring Boot", "Hibernate", "JPA", "Spring Security"],
      icon: "🔧"
    },
    {
      title: "Frontend Development",
      description: "Creating responsive, user-friendly interfaces with React.js, managing state efficiently, and ensuring smooth user experiences.",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
      icon: "🎨"
    },
    {
      title: "Database Management",
      description: "Designing normalized database schemas, writing optimized queries, and ensuring data integrity across applications.",
      tech: ["MySQL", "PostgreSQL", "Database Design", "SQL Optimization"],
      icon: "💾"
    },
  ];

  const achievements = [
    "Built 3 production-ready full-stack applications with payment integration",
    "Implemented secure authentication systems with JWT and Spring Security",
    "Solved 150+ algorithmic problems focusing on optimization and efficiency",
    "Deployed applications handling real-world business requirements",
  ];

  return (
    <div
      id="About"
      className=" bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 px-6 py-14 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">
              Get To Know
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Me</span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            A passionate full-stack developer crafting scalable solutions with modern technologies
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-800 rounded-2xl blur opacity-20 group-hover:opacity-29 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-1xl p-5 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-200 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Who I Am
                </h2>
                <div className="space-y-3 text-gray-300 leading-relaxed text-sm">
                  <p>
                    Hi, I'm <span className="text-blue-400 font-semibold">Ashish Kumar Rathour</span>, 
                    a Java Full Stack Developer with a proven track record of building 
                    <span className="text-cyan-400"> production-ready web applications</span> that solve real business problems.
                  </p>
                  <p>
                    My expertise lies in architecting scalable backend systems with 
                    <span className="text-blue-400"> Spring Boot</span> and creating intuitive user interfaces with 
                    <span className="text-blue-400"> React.js</span>. I've successfully delivered complete solutions 
                    including E-Commerce platforms, Job Portals, and Internship Management Systems.
                  </p>
                  <p>
                    What sets me apart is my focus on <span className="text-cyan-400">clean, maintainable code</span> and 
                    my strong foundation in <span className="text-cyan-400">Data Structures & Algorithms</span>, 
                    having solved 150+ problems to sharpen my problem-solving abilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform"
                    >
                      <span className="text-blue-500 mt-1 text-xl">▹</span>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DSA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">💻</div>
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  DSA & Problem Solving
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-gray-300">
                  <p>
                    Strong foundation in <span className="text-purple-400 font-semibold">Data Structures and Algorithms</span>, 
                    demonstrated through solving <span className="text-pink-400 font-bold">150+ problems</span> on 
                    competitive coding platforms like LeetCode and GeeksforGeeks.
                  </p>
                  <p>
                    This intensive practice has sharpened my ability to design 
                    <span className="text-purple-400"> efficient algorithms</span>, 
                    optimize time and space complexity, and think critically about scalability.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-4">Core Topics Mastered:</h4>
                  {[
                    "Arrays & Strings",
                    "Linked Lists & Trees",
                    "Graphs & Hashing",
                    "Dynamic Programming",
                    "Sliding Window & Two Pointers",
                    "System Design (LLD)"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-3 group/topic">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover/topic:scale-150 transition-transform"></div>
                      <span className="text-gray-300 group-hover/topic:text-white transition-colors">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-12">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Arsenal</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 transition-all h-full">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 text-sm font-medium text-center">
                    {skill.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Background</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎓</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Bachelor of Technology
                    </h3>
                    <p className="text-blue-400 text-sm font-semibold mb-1">
                      Computer Science Engineering
                    </p>
                    <p className="text-gray-400 text-sm mb-2">
                      Bansal Institute of Research & Technology, Bhopal
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>📅</span>
                      <span>2021 - 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📚</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Higher Secondary (12th)
                    </h3>
                    <p className="text-cyan-400 text-sm font-semibold mb-1">
                      90.8% Score
                    </p>
                    <p className="text-gray-400 text-sm mb-2">
                      Govt Excellence H.S. School, Anuppur (M.P)
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>📅</span>
                      <span>2019 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;