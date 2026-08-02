import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/images/profile.jpg";
import resume from "../assets/resume/Anjani_Kumari_Resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B1120] pt-28 pb-20 flex items-center"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[220px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="text-blue-400 font-medium text-lg mb-5">
            👋 Hey, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            <span className="text-white">
              Anjani
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Kumari
            </span>

          </h1>

          <div className="mt-8 min-h-[55px] text-2xl md:text-3xl font-semibold text-slate-200">

            <TypeAnimation
              sequence={[
                "Java Developer",
                1800,
                "Full Stack Developer",
                1800,
                "AI Enthusiast",
                1800,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 max-w-xl text-slate-400 leading-9 text-lg">

            Passionate Java & Full Stack Developer focused on building
            scalable web applications, solving real-world problems and
            creating clean, modern digital experiences using Java,
            React, Node.js and AI.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">
            <a href="#projects">
              View Projects
             </a>

              

              <FaArrowRight className="group-hover:translate-x-1 transition" />

            </button>

       <a
  href="#certificates"
  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
>
  📜 Certificates
</a>

          </div>

          <div className="flex items-center gap-5 mt-12">

            <a
              href="https://github.com/anjanikumari12"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/anjani-kumari-1451623a7"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:kumarianjani7060@gmail.com"
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">

            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-3xl animate-pulse"></div>

            {/* Decorative Rings */}
            <div className="absolute -inset-4 rounded-full border border-blue-500/20"></div>

            <div className="absolute -inset-8 rounded-full border border-cyan-500/10"></div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -top-6 -left-6 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-2 shadow-xl"
            >
              <p className="text-blue-400 font-semibold text-sm">
                Java Developer
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-6 -right-4 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-2 shadow-xl"
            >
              <p className="text-cyan-300 font-semibold text-sm">
                Open to Internship
              </p>
            </motion.div>

            {/* Profile Image */}

            <motion.img
              src={profile}
              alt="Anjani Kumari"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative w-[350px] h-[350px] md:w-[430px] md:h-[430px] object-cover rounded-full border-[6px] border-blue-500 shadow-[0_0_90px_rgba(59,130,246,.35)]"
            />

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <p className="text-slate-400 text-sm tracking-widest">
          SCROLL
        </p>

        <div className="mx-auto mt-2 w-[2px] h-10 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default Hero;