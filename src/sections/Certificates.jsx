import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="certificates"
      className="py-24 px-6 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            My <span className="text-blue-500">Certificates</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            National Hackathons, AI Competitions,
            Coding Challenges, Student Ambassador Programs,
            Technical Quizzes and Innovation Events.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {portfolioData.certificates.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              onClick={() => setSelectedImage(certificate.image)}
              className="
                bg-slate-900
                rounded-3xl
                overflow-hidden
                border
                border-slate-700
                cursor-pointer
                hover:border-blue-500
                transition
                duration-300
                hover:shadow-[0_0_30px_rgba(59,130,246,.25)]
              "
            >

              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h3 className="text-white font-semibold text-lg">
                  {certificate.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Full Screen Preview */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            bg-black/90
            flex
            items-center
            justify-center
            z-50
            p-8
          "
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              top-8
              right-8
              text-white
              text-4xl
            "
          >
            <FaTimes />
          </button>

          <img
            src={selectedImage}
            alt="Certificate"
            className="
              max-h-[90vh]
              rounded-xl
              shadow-2xl
            "
          />

        </div>

      )}

    </section>
  );
};

export default Certificates;