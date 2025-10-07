import React, { useState } from "react";
import { project } from "../utils/Projects";
import { motion } from "framer-motion";

const Project = () => {
  const [data] = useState([...project]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      scale: 1.05,
      y: -6,
      boxShadow: "0 20px 40px rgba(79, 70, 229, 0.35)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.98 },
  });

  return (
    <motion.section
      id="project"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-10 sm:mb-14 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        variants={containerVariants}
      >
        {data.map((val, index) => (
          <motion.a
            key={index}
            href={val.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-auto cursor-pointer bg-gradient-to-b from-[#14184b]/90 to-[#0f1236]/90 backdrop-blur-md border border-indigo-400/10 shadow-lg rounded-2xl overflow-hidden hover:border-indigo-400/30 transition-all duration-300"
            variants={cardVariants(index)}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="w-full aspect-video">
              <img
                src={val.img}
                className="object-cover w-full h-full"
                alt={val.title}
                loading="lazy"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-white/95 tracking-wide">
                  {val.title}
                </h2>
                <p className="text-gray-300/80 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {val.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                {val.skills.map((e, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-200 text-xs sm:text-sm font-medium"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Project;
