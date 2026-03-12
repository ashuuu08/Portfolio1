import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from "react-icons/fa";

const year = new Date().getFullYear();

const sections = ["home", "about", "skills", "projects", "experience", "services", "contact"];

export default function Footer() {
  return (
    <footer style={{ background: "#0D0D0D" }} className="text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-gray-900 text-sm"
                style={{ background: "#FFDE59" }}>
                AR
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "Syne,sans-serif" }}>
                Ashish<span style={{ color: "#FF6B9D" }}>.</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Full Stack Developer building fast, scalable, production-ready web applications with Java, Spring Boot & React.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaGithub />,   href: "https://github.com/ashuuu08" },
                { icon: <FaLinkedin />, href: "https://linkedin.com/in/itzashu08" },
                { icon: <FaEnvelope />, href: "mailto:rajpootashishd@gmail.com" },
                { icon: <FaPhone />,    href: "tel:+919691207533" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center hover:-translate-y-1 transition-all text-gray-400 hover:text-white"
                  style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAV */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {sections.map(id => (
                <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left capitalize text-sm hover:text-white transition-colors py-1">
                  {id}
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">Contact</p>
            <div className="space-y-3">
              {[
                { icon: <FaEnvelope size={13} />, text: "rajpootashishd@gmail.com", href: "mailto:rajpootashishd@gmail.com" },
                { icon: <FaPhone    size={13} />, text: "+91 9691207533",            href: "tel:+919691207533" },
                { icon: <FaGithub  size={13} />, text: "github.com/ashuuu08",       href: "https://github.com/ashuuu08" },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                  <span style={{ color: "#FFDE59" }}>{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>

            {/* pulse badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
              style={{ background: "rgba(61,214,163,.1)", border: "1px solid rgba(61,214,163,.3)", color: "#3DD6A3" }}>
              <span className="w-2 h-2 rounded-full bg-[#3DD6A3] animate-pulse" />
              Open to Opportunities
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600"
          style={{ borderColor: "#1E1E1E" }}>
          <p>© {year} Ashish Rathour. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-[#FF6B9D]" size={10} /> using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
