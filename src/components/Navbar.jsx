import React, { useState } from "react";
import pic from "../assets/code.png";
import resume from "../assets/ashish2.22.pdf";

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 
        bg-gradient-to-r from-[#3b82f6] to-[black] shadow-lg backdrop-blur-md border-b border-[#ffa500]/20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={pic}
              className="h-10 w-10 rounded-full  transition-all cursor-pointer"
              alt="logo"
            />
            <h1 className="font-semibold text-xl text-[#ffa500] cursor-pointer">
              Ashis<span className="text-white">h</span>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center space-x-8 text-gray-100">
            {navItems.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-[#ffa500] transition-colors duration-300"
              >
                {text}
              </Link>
            ))}

            {/* Resume Button */}
            <a
              href={resume}
              download={resume}
              className="px-4 py-2 border border-[#ffa500] text-[#ffa500] rounded-md 
              hover:bg-[#ffa500] hover:text-black transition-all duration-300 font-semibold shadow-[0_0_10px_#ffa500aa] hover:shadow-[0_0_25px_#ffa500]"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden text-[#ffa500] cursor-pointer">
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="md:hidden bg-[#0f1729] border-t border-[#000000]/20 shadow-lg animate-fade-in-down">
            <ul className="flex flex-col items-center justify-center space-y-6 py-10 text-lg text-gray-100">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer hover:text-[#ffeb99] transition-colors duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="public/project/ashish2.22.pdf"
                  download="public/project/ashish2.22.pdf"
                  className="px-4 py-2 border border-[#ffa500] text-[#ffa500] rounded-md 
                  hover:bg-[#ffa500] hover:text-black transition-all duration-300 font-semibold shadow-[0_0_15px_#ffa500aa]"
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
