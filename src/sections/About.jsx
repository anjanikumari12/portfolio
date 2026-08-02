import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111827] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Get To Know Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl"></div>

              <img
                src={profile}
                alt="Anjani Kumari"
                className="relative w-[340px] rounded-3xl border border-slate-700 shadow-2xl"
              />

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-white">
              Java Developer & Full Stack Enthusiast
            </h3>

            <p className="text-slate-300 mt-8 leading-8 text-lg">

              I'm Anjani Kumari, a B.Tech student in Electronics and
              Communication Engineering at NIT Arunachal Pradesh.

              <br /><br />

              I enjoy solving coding problems, developing full-stack
              applications and exploring Artificial Intelligence.
              My goal is to become a skilled Software Engineer and
              build impactful digital products.

            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                <h4 className="text-blue-400 font-semibold">
                  College
                </h4>

                <p className="text-slate-300 mt-2">
                  NIT Arunachal Pradesh
                </p>
              </div>

              
              <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                <h4 className="text-blue-400 font-semibold">
                  Languages
                </h4>

                <p className="text-slate-300 mt-2">
                  Java, Python, C
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                <h4 className="text-blue-400 font-semibold">
                  Interest
                </h4>

                <p className="text-slate-300 mt-2">
                  AI & Web Development
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;