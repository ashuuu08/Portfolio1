import React, { useState, useEffect } from "react";
import pic from "../assets/code.png";
import resume from "../assets/ashish2.22.pdf";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent py-4"
        }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <img
                src={pic}
                className="h-10 w-10 rounded-xl transition-all duration-300 group-hover:rotate-12"
                alt="logo"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-xl blur group-hover:blur-md transition-all"></div>
            </div>
            <h1 className="font-bold text-2xl tracking-tight">
              <span className="text-white">Ashish</span>
              <span className="text-blue-500">.</span>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-slate-300 hover:text-white font-medium cursor-pointer transition-colors duration-300 relative group"
              >
                {text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Resume Button */}
            <a
              href={resume}
              download="Ashish_Rathour_Resume.pdf"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-semibold shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden text-white cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-all">
            {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 shadow-2xl py-8 animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col items-center space-y-6">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-xl text-slate-300 hover:text-white font-medium transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={resume}
                  download="Ashish_Rathour_Resume.pdf"
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-500/30"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

