import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import java from "../../public/project/Weater.png";
import mongoDB from "../../public/project/TODO.png";
import express from "../../public/project/univercity.png";
import reactjs from "../../public/project/Eoon.png";
import nodejs from "../../public/project/SopeEase.png";

function Portfolio() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = window.innerWidth > 768 ? 500 : 300; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      id: 1,
      image: nodejs,
      title: "ShopEase",
      desc: "E-commerce app using React, Spring Boot & MySQL.",
      live: "https://shop-ease-theta.vercel.app/",
      code: "https://github.com/ashuuu08/shopEase-e-Commerce",
    },
    {
      id: 2,
      image: express,
      title: "University Website",
      desc: "Responsive college site using HTML, CSS, and JS.",
      live: "https://ptsns.netlify.app/",
      code: "https://github.com/ashuuu08/Univercy_website",
    },
    {
      id: 3,
      image: reactjs,
      title: "Virtual Assistant",
      desc: "Voice-controlled personal AI built with JS Speech API.",
      live: "https://todomy08.netlify.app/",
      code: "https://github.com/ashuuu08/Virtual_Assistant",
    },
    {
      id: 4,
      image: mongoDB,
      title: "TODO List",
      desc: "Task manager with persistent storage and React UI.",
      live: "https://todomy08.netlify.app/",
      code: "https://github.com/ashuuu08/To_do_app",
    },
    {
      id: 5,
      image: java,
      title: "Weather App",
      desc: "Weather dashboard using OpenWeather API.",
      live: "https://todomy08.netlify.app/",
      code: "https://github.com/ashuuu08/To_do_app",
    },
  ];

  return (
    <section
      id="Projects"
      className="relative bg-gradient-to-br from-[#000008] to-[#0a0a1a] text-gray-100 py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-2 text-center tracking-wide"
      >
        my <span className="text-blue-500">Projects</span>
      </motion.h1>
      <p className="text-gray-400 p-5 mb-10 text-center">
        Some of my <span className="text-blue-500">amazing</span> projects.
      </p>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0f0f15]/70 border border-gray-700 p-3 rounded-full hover:border-blue-500 hover:scale-110 transition-all z-20 shadow-md"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0f0f15]/70 border border-gray-700 p-3 rounded-full hover:border-blue-500 hover:scale-110 transition-all z-20 shadow-md"
      >
        <FaArrowRight size={20} />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scroll-smooth px-1 md:px-0 scrollbar-hide"
      >
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            className="min-w-[300px] md:min-w-[360px] bg-[#101018]/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-[0_0_50px_rgb(59,130,246)/0.3] cursor-pointer flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-40 overflow-hidden rounded-t-xl">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-5 flex flex-col justify-between h-44">
              <div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{p.desc}</p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={p.code}
                  target="_blank"
                  className="px-3 py-1 text-sm font-medium border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all shadow-sm"
                >
                  Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  className="px-3 py-1 text-sm font-medium border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all shadow-sm"
                >
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default Portfolio;
