import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white tracking-tighter">Ashish</span>
            <span className="text-xl font-bold text-blue-500 tracking-tighter">.</span>
          </div>
          <p className="text-slate-500 text-sm">Full Stack Developer & Software Engineer</p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="https://github.com/ashuuu08" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/itzashu08" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:rajpootashishd@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
            &copy; {currentYear} Ashish Rathour
          </p>
          <p className="text-slate-600 text-[10px] mt-1 italic">
            Built with React, Tailwind & Passion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
