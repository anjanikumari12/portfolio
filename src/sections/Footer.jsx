import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

import portfolioData from "../data/portfolioData";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#08101d] border-t border-slate-800 py-14">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              {portfolioData.personal.name}
            </h2>

            <p className="text-slate-400 mt-4 leading-8">
              Java Developer • Full Stack Developer • AI Enthusiast
            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a href="#home" className="block text-slate-400 hover:text-blue-400 transition">
                Home
              </a>

              <a href="#about" className="block text-slate-400 hover:text-blue-400 transition">
                About
              </a>

              <a href="#education" className="block text-slate-400 hover:text-blue-400 transition">
                Education
              </a>

              <a href="#skills" className="block text-slate-400 hover:text-blue-400 transition">
                Skills
              </a>

              <a href="#projects" className="block text-slate-400 hover:text-blue-400 transition">
                Projects
              </a>

              <a href="#contact" className="block text-slate-400 hover:text-blue-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-center">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="mt-6 md:mt-0 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
          >
            <FaArrowUp className="text-white" />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;