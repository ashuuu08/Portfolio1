import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";
import { profileData } from "../../data/portfolioData";

const navLinks = [
  { id: "hero", label: "01 // Hero" },
  { id: "philosophy", label: "02 // Philosophy" },
  { id: "projects", label: "03 // Projects" },
  { id: "architecture", label: "04 // Architecture" },
  { id: "experience", label: "05 // Experience" },
  { id: "expertise", label: "06 // Expertise" },
  { id: "education", label: "07 // Education" },
  { id: "contact", label: "08 // Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map((l) => l.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/92 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="wrap flex items-center justify-between">
        {/* Monogram Brand */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-[#181818] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#E8FF36] group-hover:border-[#E8FF36] transition-colors">
            AR
          </div>
          <div className="flex flex-col">
            <span
              className="text-sm font-bold text-[#F5F4EF] tracking-tight group-hover:text-[#E8FF36] transition-colors leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ASHISH RATHOUR
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#929292] mt-0.5">
              JAVA DEVELOPER // ENGINEER
            </span>
          </div>
        </button>

        {/* Desktop Editorial Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`transition-colors focus:outline-none ${
                activeSection === link.id
                  ? "text-[#E8FF36] font-bold"
                  : "text-[#929292] hover:text-[#F5F4EF]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.contact.resume}
            download="Ashish_Rathour_Resume.pdf"
            className="btn-outline py-2 px-3 text-[11px]"
          >
            <FaFileAlt size={10} className="text-[#E8FF36]" />
            <span>RESUME.PDF</span>
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-acid py-2 px-4 text-[11px]"
          >
            <span>GET IN TOUCH</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded bg-[#181818] border border-white/10 text-[#F5F4EF] hover:text-[#E8FF36] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-[#111111]/98 border-b border-white/10 backdrop-blur-xl p-6 shadow-2xl animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-3 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left p-3 rounded font-mono text-xs border transition-colors ${
                  activeSection === link.id
                    ? "bg-[#181818] text-[#E8FF36] border-[#E8FF36]/40 font-bold"
                    : "bg-[#141414] text-[#929292] border-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3 font-mono text-xs">
            <a
              href={profileData.contact.resume}
              download="Ashish_Rathour_Resume.pdf"
              className="btn-outline justify-center py-3"
            >
              <FaFileAlt size={11} className="text-[#E8FF36]" />
              DOWNLOAD RESUME.PDF
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-acid justify-center py-3"
            >
              INITIALIZE INQUIRY
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

