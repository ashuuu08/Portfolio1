import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const year = new Date().getFullYear();
const sections = ["home", "about", "skills", "projects", "services", "contact"];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-black bg-white rounded-sm text-sm">
                AR
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                Ashish Rathour
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Software Engineer crafting scalable web applications and enterprise systems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={18} />,   href: "https://github.com/ashuuu08" },
                { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/itzashu08" },
                { icon: <FaEnvelope size={18} />, href: "mailto:rajpootashishd@gmail.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAV */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600 font-mono mb-6">Sitemap</p>
            <div className="grid grid-cols-2 gap-3">
              {sections.map(id => (
               <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left capitalize text-sm text-gray-400 hover:text-white transition-colors">
                  {id}
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600 font-mono mb-6">Connect</p>
            <div className="space-y-4">
              {[
                { text: "rajpootashishd@gmail.com", href: "mailto:rajpootashishd@gmail.com" },
                { text: "+91 9691207533", href: "tel:+919691207533" },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {c.text}
                </a>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white font-mono">Available</span>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} Ashish Rathour. All rights reserved.</p>
          <p>
            Engineered with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
