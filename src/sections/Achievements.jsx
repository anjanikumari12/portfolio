import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 px-6 bg-[#0B1120]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Achievements{" "}
            <span className="text-blue-500">& Leadership</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-8">
            Highlights of competitions, leadership roles, hackathons and
            academic accomplishments.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {portfolioData.achievements.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-700 bg-slate-900/50 backdrop-blur-xl p-8 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,.25)] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
                <FaTrophy className="text-white text-xl" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-8">
                {item.description}
              </p>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;