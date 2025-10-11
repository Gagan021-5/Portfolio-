import React from "react";
import { motion } from "framer-motion";

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.3 } },
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: {
      scale: 1.1, 
      boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  

  const stats = [
    { value: "10+", label: "Personal Projects" },
    { value: "4+", label: "Web Apps Built" },
    { value: "10+", label: "APIs Developed" },
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 relative"
      
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 mb-8"
        variants={itemVariants}
      >
        About Me
      </motion.h1>

      
      <motion.div
        className="w-full max-w-4xl relative rounded-3xl p-8 sm:p-12 shadow-2xl  overflow-hidden"
        variants={itemVariants}
      >
      
        <div className="absolute inset-0 bg-gray-900/80  rounded-3xl pointer-events-none"></div>

  
        <motion.p
          className="text-gray-300/70 text-base sm:text-lg lg:text-xl font-medium text-center leading-relaxed max-w-3xl mx-auto relative z-10"
          variants={itemVariants}
        >
          I am a passionate{" "}
          <span className="text-white font-semibold opacity-90">Full Stack Developer</span>{" "}
          building modern web applications. I have completed{" "}
          <span className="text-cyan-400 font-bold opacity-90">10+ personal projects</span>{" "}
          that showcase my skills in{" "}
          <span className="text-white font-semibold opacity-90">React, Node.js, and MongoDB</span>. 
          I enjoy experimenting, solving problems, and creating scalable, user-friendly web solutions.
        </motion.p>

    
        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 relative z-10"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6  bg-gradient-to-b from-[#14184b]/90 to-[#0f1236]/90  border-indigo-400/20  backdrop-blur-md rounded-2xl border  shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
              variants={statVariants}
              whileHover="hover"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white/90">
                {stat.value}
              </span>
              <span className="text-gray-200/80 text-sm sm:text-base mt-2 text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
