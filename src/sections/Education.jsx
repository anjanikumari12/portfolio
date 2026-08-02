import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0B1120] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[4px]">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Academic Journey
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {portfolioData.education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
              className="mb-14 ml-8 relative"
            >

              <div className="absolute -left-[42px] w-5 h-5 rounded-full bg-blue-500 border-4 border-[#0B1120]"></div>

              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition">

                <p className="text-blue-400 font-semibold">
                  {item.year}
                </p>

                <h3 className="text-2xl text-white font-bold mt-3">
                  {item.college}
                </h3>

                <p className="text-slate-300 mt-4">
                  {item.degree}
                </p>

                <p className="mt-4 text-slate-400">
                
                  <span className="text-blue-400 font-semibold">
                    {" "}
                   
                  </span>
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;