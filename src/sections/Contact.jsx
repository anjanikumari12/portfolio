import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

import portfolioData from "../data/portfolioData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#0B1120]"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold text-white">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Feel free to connect with me for internships,
            collaborations or exciting opportunities.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700 p-8"
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Let's Connect 🚀
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-2xl text-blue-400"/>

                <div>

                  <p className="text-slate-400">
                    Email
                  </p>

                  <p className="text-white">
                    {portfolioData.personal.email}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaPhone className="text-2xl text-blue-400"/>

                <div>

                  <p className="text-slate-400">
                    Phone
                  </p>

                  <p className="text-white">
                    {portfolioData.personal.phone}
                  </p>

                </div>

              </div>

              <div className="flex gap-5 mt-10">

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </motion.div>          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700 p-8 space-y-6"
          >

            <div>

              <label className="block text-slate-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 text-white"
              />

            </div>

            <div>

              <label className="block text-slate-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 text-white"
              />

            </div>

            <div>

              <label className="block text-slate-300 mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 text-white resize-none"
              />

            </div>

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                font-semibold
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;