import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaJava } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJavascript, SiHtml5 } from "react-icons/si";

import java from "../../public/project/Weater.png";
import mongoDB from "../../public/project/TODO.png";
import express from "../../public/project/univercity.png";
import reactjs from "../../public/project/Eoon.png";
import nodejs from "../../public/project/SopeEase.png";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: nodejs,
      title: "ShopEase - E-Commerce Platform",
      shortDesc: "Full-stack e-commerce solution",
      desc: "Complete shopping platform with product management, cart system, secure payment integration, and admin dashboard built with Spring Boot and React.",
      tech: ["Spring Boot", "React", "MySQL", "Payment Gateway"],
      icons: [<SiSpringboot />, <FaReact />, <SiMysql />],
      category: "fullstack",
      live: "https://shop-ease-theta.vercel.app/",
      code: "https://github.com/ashuuu08/shopEase-e-Commerce",
      featured: true,
    },
    {
      id: 2,
      image: express,
      title: "University Website",
      shortDesc: "Modern educational website",
      desc: "Responsive college website with course information, faculty profiles, and student resources using modern web technologies.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      icons: [<SiHtml5 />, <SiJavascript />],
      category: "frontend",
      live: "https://ptsns.netlify.app/",
      code: "https://github.com/ashuuu08/Univercy_website",
      featured: false,
    },
    {
      id: 3,
      image: reactjs,
      title: "Virtual Assistant",
      shortDesc: "AI-powered voice assistant",
      desc: "Voice-controlled personal assistant using Web Speech API with natural language processing and command recognition.",
      tech: ["JavaScript", "Speech API", "HTML5", "CSS3"],
      icons: [<SiJavascript />, <SiHtml5 />],
      category: "frontend",
      live: "https://todomy08.netlify.app/",
      code: "https://github.com/ashuuu08/Virtual_Assistant",
      featured: false,
    },
    {
      id: 4,
      image: mongoDB,
      title: "TODO List Manager",
      shortDesc: "Smart task management",
      desc: "Feature-rich task manager with persistent local storage, priority levels, and clean React UI for productivity.",
      tech: ["React", "Local Storage", "CSS3"],
      icons: [<FaReact />],
      category: "frontend",
      live: "https://todomy08.netlify.app/",
      code: "https://github.com/ashuuu08/To_do_app",
      featured: false,
    },
    {
      id: 5,
      image: java,
      title: "Weather Dashboard",
      shortDesc: "Real-time weather tracking",
      desc: "Live weather application with location-based forecasts, 5-day predictions using OpenWeather API.",
      tech: ["React", "OpenWeather API", "JavaScript"],
      icons: [<FaReact />, <SiJavascript />],
      category: "frontend",
      live: "https://todomy08.netlify.app/",
      code: "https://github.com/ashuuu08/To_do_app",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProject = projects.find(p => p.featured);

  return (
    <section
      id="Projects"
      className="relative bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            A collection of my best work showcasing full-stack development, clean code, and problem-solving skills
          </p>
        </motion.div>

        {/* Featured Project - Large Card */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden group-hover:border-blue-500/50 transition-all duration-500">
                
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-full">
                    ⭐ FEATURED
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {featuredProject.icons.map((icon, i) => (
                      <div key={i} className="text-3xl text-blue-400">
                        {icon}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
                    {featuredProject.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={featuredProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 bg-gray-800 border border-gray-700 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-gray-700 transition-all group/btn"
                    >
                      <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </a>
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all group/btn"
                    >
                      <FaExternalLinkAlt className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-10 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects
              .filter(p => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-1xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group-hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col">
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                      
                      {/* Overlay on Hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4"
                      >
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-gray-800 rounded-full text-white hover:bg-blue-600 transition-all hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={24} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-gray-800 rounded-full text-white hover:bg-blue-600 transition-all hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={24} />
                        </a>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        {project.icons.map((icon, i) => (
                          <div key={i} className="text-xl text-blue-400">
                            {icon}
                          </div>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/ashuuu08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all group"
          >
            <FaGithub size={24} />
            View All Projects on GitHub
            <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;