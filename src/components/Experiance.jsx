import { motion } from "framer-motion";

import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

const Experience = () => {
  const skills = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: java, name: "Java" },
    { id: 5, logo: spring, name: "Spring" },
    { id: 6, logo: springBoot, name: "Spring Boot" },
    { id: 7, logo: oracle, name: "MySQL / Oracle" },
  ];

  // Duplicate array for seamless loop
  const looped = [...skills, ...skills, ...skills];

  return (
    <section id="Experiance" className="relative bg-gradient-to-br from-[#0a0a1a]  to-[#000006] text-gray-100 py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-wide"
      >
        tech <span className="text-blue-500">Stacks</span>
      </motion.h1>
        <p className="text-gray-400 mb-12">
          Over a year of hands-on experience with modern full-stack technologies.
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Infinite scroll container */}
          <div className="flex animate-scroll space-x-8">
            {looped.map(({ id, logo, name }, i) => (
              <div
                key={i}
                className="flex-none bg-[#111] rounded-xl border border-gray-800 p-5 w-[130px] sm:w-[150px] h-[150px] flex flex-col items-center justify-center shadow-md hover:shadow-indigo-600/20 hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-14 h-14 object-contain mb-3 transition duration-300"
                />
                <h3 className="text-sm font-semibold text-gray-300">
                  {name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes for smooth infinite animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default Experience;
