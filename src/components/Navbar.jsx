import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

import resume from "../assets/resume/Anjani_Kumari_Resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/70 backdrop-blur-xl border-b border-slate-800">

      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-extrabold tracking-wide"
        >
          <span className="text-white">Anjani</span>
          <span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-10 text-slate-300 font-medium">

          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}

        </ul>

        {/* Resume */}

        <a
          href={resume}
          download
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"
        >
          <FaDownload />
          Resume
        </a>

        {/* Mobile */}

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-slate-800">

          <ul className="flex flex-col py-6 gap-6 text-center">

            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-blue-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>

              <a
                href={resume}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white"
              >
                <FaDownload />
                Resume
              </a>

            </li>

          </ul>

        </div>
      )}

    </header>
  );
};

export default Navbar;