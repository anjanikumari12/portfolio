import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const SkillCard = ({ title, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group rounded-3xl border border-slate-700/40
      bg-slate-900/40 backdrop-blur-xl
      p-7 transition-all duration-500
      hover:border-blue-500/50
      hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
    >
      <h3
        className="text-2xl font-bold mb-6
        bg-gradient-to-r
        from-blue-400
        to-cyan-400
        bg-clip-text
        text-transparent"
      >
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{
              scale: 1.08,
            }}
            className="
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            border
            border-slate-600
            bg-slate-800/70
            text-slate-200
            transition-all
            duration-300
            hover:bg-blue-600
            hover:border-blue-500
            hover:text-white
            cursor-default
            "
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {  return (
    <section
      id="skills"
      className="relative py-28 px-6 lg:px-16 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div
          className="
          absolute
          top-20
          left-20
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
        />

        <div
          className="
          absolute
          bottom-20
          right-10
          h-72
          w-72
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2
          className="
          text-5xl
          font-extrabold
          bg-gradient-to-r
          from-white
          via-blue-300
          to-cyan-300
          bg-clip-text
          text-transparent
        "
        >
          My Skills
        </h2>

        <div className="mt-5 h-1 w-24 bg-blue-500 mx-auto rounded-full" />

        <p
          className="
          mt-6
          text-slate-400
          max-w-2xl
          mx-auto
          text-lg
        "
        >
          Technologies and tools I use to build modern, scalable and beautiful
          web applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        <SkillCard
          title="Programming"
          skills={portfolioData.skills.languages}
          delay={0}
        />

        <SkillCard
          title="Frontend"
          skills={portfolioData.skills.frontend}
          delay={0.1}
        />

        <SkillCard
          title="Backend"
          skills={portfolioData.skills.backend}
          delay={0.2}
        />

        <SkillCard
          title="Database"
          skills={portfolioData.skills.database}
          delay={0.3}
        />

        <SkillCard
          title="Tools"
          skills={portfolioData.skills.tools}
          delay={0.4}
        />        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            border-blue-500/30
            bg-gradient-to-br
            from-blue-500/10
            via-slate-900/40
            to-cyan-500/10
            backdrop-blur-xl
            p-8
            flex
            flex-col
            justify-center
          "
        >
          <h3 className="text-3xl font-bold text-white mb-5">
            Always Learning 🚀
          </h3>

          <p className="text-slate-300 leading-8">
            I enjoy learning new technologies and improving my problem-solving
            skills. Currently I am focusing on Full Stack Development,
            Data Structures & Algorithms, Artificial Intelligence, and modern
            web technologies to build scalable and impactful applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "DSA",
              "Java",
              "React",
              "Node.js",
              "MongoDB",
              "AI",
              "Git",
              "REST API",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;