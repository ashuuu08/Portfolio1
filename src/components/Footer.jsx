import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3b82f6] to-[#000000] text-gray-100 py-10 px-6 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        {/* Social Links */}
        <div className="flex space-x-6">
          {[
            { Icon: FaFacebookF, link: "#" },
            { Icon: FaTwitter, link: "#" },
            { Icon: FaInstagram, link: "#" },
            { Icon: FaLinkedinIn, link: "#" },
            { Icon: FaGithub, link: "#" },
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[] hover:bg-[#3b82f6] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-20 border-t border-gray-300"></div>

        {/* Text Section */}
        <div>
          <p className="text-sm text-gray-100 tracking-wide">
            &copy; {new Date().getFullYear()} <span className="text-[#ffa500] font-semibold">Ashish Kumar Rathour</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-200 mt-1">
            Designed & Developed with 💻 and ❤️ by Ashish
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
