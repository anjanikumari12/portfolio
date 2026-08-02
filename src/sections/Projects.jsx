import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#0B1120]"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Featured
            <span className="text-blue-500"> Projects</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-8">
            Here are some of my featured projects built using
            Java, React, Node.js, MongoDB and Artificial Intelligence.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {portfolioData.projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .2
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                rounded-3xl
                overflow-hidden
                border
                border-slate-700
                bg-slate-900/50
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-blue-500
                hover:shadow-[0_0_35px_rgba(37,99,235,.25)]
              "
            >

              {/* Image */}

              <div className="h-56 overflow-hidden">

                <img
                  src="https://placehold.co/600x400/0f172a/ffffff?text=Project"
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {project.tech}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.split("•").map((tech, i) => (

                    <span
                      key={i}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-blue-600/20
                        border
                        border-blue-500/30
                        text-blue-300
                        text-sm
                      "
                    >
                      {tech.trim()}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      font-medium
                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      border
                      border-blue-500
                      text-blue-400
                      hover:bg-blue-600
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;