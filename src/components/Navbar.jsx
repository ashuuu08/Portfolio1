import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/ashish_resum.pdf";

const navItems = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "skills",     label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services",   label: "Services" },
  { id: "contact",    label: "Contact" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // update active section
      const ids = navItems.map(n => n.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-4 md:mx-auto md:max-w-6xl rounded-2xl px-5 flex items-center justify-between
        transition-all duration-500 ${scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-lg shadow-black/5 border border-[#EBEBEB]"
          : "bg-transparent"}`}>

        {/* LOGO */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 group py-3">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-gray-900"
            style={{ background: "#FFDE59" }}>
            AR
          </motion.div>
          <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "Syne,sans-serif" }}>
            Ashish<span style={{ color: "#FF6B9D" }}>.</span>
          </span>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200
                ${active === id ? "text-gray-900" : "text-gray-400 hover:text-gray-700"}`}>
              {label}
              {active === id && (
                <motion.div layoutId="nav-pill"
                  className="absolute inset-0 rounded-xl -z-10"
                  style={{ background: "#FFDE59" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
            </button>
          ))}
        </nav>

        {/* RESUME CTA */}
        <div className="hidden md:block">
          <a href={resume} download="Ashish_Rathour_Resume.pdf"
            className="btn btn-y text-xs py-2.5 px-5">
            Resume ↓
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-700 my-2">
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: .96, y: -8 }}
            animate={{ opacity: 1, scale: 1,   y: 0   }}
            exit={{   opacity: 0, scale: .96, y: -8   }}
            transition={{ duration: .2 }}
            className="md:hidden absolute top-full mt-2 left-4 right-4 bg-white rounded-3xl shadow-2xl border overflow-hidden"
            style={{ borderColor: "#EBEBEB" }}>
            <div className="p-5 space-y-1">
              {navItems.map(({ id, label }) => (
                <button key={id} onClick={() => { scrollTo(id); setOpen(false); }}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-colors text-sm
                    ${active === id ? "font-bold text-gray-900" : "text-gray-500 hover:bg-gray-50"}`}
                  style={active === id ? { background: "#FFFBDD", color: "#0D0D0D" } : {}}>
                  {label}
                </button>
              ))}
              <div className="pt-3 border-t" style={{ borderColor: "#EBEBEB" }}>
                <a href={resume} download="Ashish_Rathour_Resume.pdf"
                  className="btn btn-y w-full justify-center text-sm">
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
