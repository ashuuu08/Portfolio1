import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/ashish_resum.pdf";

const navItems = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "skills",     label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "freelance",  label: "Freelance" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? "py-2" : "py-6"}`}>
      <div className={`mx-4 md:mx-auto md:max-w-[1200px] rounded-md px-6 flex items-center justify-between
        transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-200"
          : "bg-transparent"}`}>

        {/* LOGO */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group py-3">
          <div className="w-8 h-8 flex items-center justify-center font-bold text-sm bg-black text-white rounded-sm">
            AR
          </div>
          <span className="text-xl font-bold text-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
            Ashish Rathour
          </span>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`relative px-4 py-2 text-[13px] font-semibold rounded-md transition-colors duration-200
                ${active === id ? "text-black" : "text-gray-500 hover:text-black"}`}>
              {label}
              {active === id && (
                <motion.div layoutId="nav-pill"
                  className="absolute inset-0 rounded-md bg-gray-100 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
            </button>
          ))}
        </nav>

        {/* RESUME CTA */}
        <div className="hidden md:block">
          <a href={resume} download="Ashish_Rathour_Resume.pdf"
            className="btn bg-black text-white hover:bg-gray-800 text-xs py-2.5 px-6">
            Resume 
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors text-black my-2">
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
            className="md:hidden absolute top-full mt-2 left-4 right-4 bg-white rounded-md shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-4 space-y-1">
              {navItems.map(({ id, label }) => (
                <button key={id} onClick={() => { scrollTo(id); setOpen(false); }}
                  className={`w-full text-left px-4 py-3 rounded-md font-medium transition-colors text-sm
                    ${active === id ? "bg-gray-50 text-black font-bold" : "text-gray-500 hover:bg-gray-50"}`}>
                  {label}
                </button>
              ))}
              <div className="pt-3 mt-1 border-t border-gray-100">
                <a href={resume} download="Ashish_Rathour_Resume.pdf"
                  className="btn bg-black text-white hover:bg-gray-800 w-full justify-center text-sm py-3">
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
