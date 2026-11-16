import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFileAlt, FaTerminal } from "react-icons/fa";
import resume from "../assets/ashish_resum.pdf";

const navItems = [
  { id: "hero",         label: "Identity" },
  { id: "intro",        label: "Engineering" },
  { id: "code-lab",     label: "Code Lab" },
  { id: "architecture", label: "Architecture" },
  { id: "projects",     label: "Projects" },
  { id: "experience",   label: "Experience" },
  { id: "contact",      label: "Contact" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = navItems.map((n) => n.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-5"
      }`}
    >
      <div
        className={`mx-4 md:mx-auto max-w-7xl rounded-2xl px-5 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0F18]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 group py-3 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <FaTerminal size={12} />
          </div>
          <div className="flex flex-col">
            <span
              className="text-base sm:text-lg font-bold text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ashish Rathour
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 mt-1">
              Systems & Full Stack
            </span>
          </div>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 focus:outline-none ${
                active === id
                  ? "text-cyan-300 font-semibold"
                  : "text-gray-400 hover:text-gray-100 hover:bg-white/5"
              }`}
            >
              {label}
              {active === id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30 -z-10 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* RESUME CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={resume}
            download="Ashish_Rathour_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 hover:border-cyan-500/40 transition-all hover:text-cyan-300"
          >
            <FaFileAlt size={12} className="text-cyan-400" />
            Resume.pdf
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary text-xs py-2 px-4 rounded-xl"
          >
            Initiate Contact
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white bg-white/5 border border-white/10 my-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {open ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full mt-2 left-4 right-4 bg-[#0A0F18]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50 p-4 space-y-1"
          >
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  scrollTo(id);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors text-sm flex items-center justify-between ${
                  active === id
                    ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{label}</span>
                {active === id && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={resume}
                download="Ashish_Rathour_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-gray-200"
              >
                <FaFileAlt size={12} className="text-cyan-400" />
                Download Resume.pdf
              </a>
              <button
                onClick={() => {
                  scrollTo("contact");
                  setOpen(false);
                }}
                className="btn-primary w-full py-3 text-xs"
              >
                Initiate Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
