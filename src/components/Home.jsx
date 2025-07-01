import React from "react";
import { motion } from "motion/react";

const Home = () => {
  return (
    <>
      <motion.div className="h-auto mt-15 transition-all duration-300 ease-in w-full  flex justify-center pt-1 items-center flex-col">
        <div className="rounded-full h-60 w-60  bg-indigo-600 hover:shadow-xl hover:shadow-indigo-700 hover:scale-105 transition-all duration-300   1s ease-in-out ">
          <img
            src="https://avatars.githubusercontent.com/u/175534940?s=400&u=5ab341f9a8771411b76c9fe05fce3b3d45b737ac&v=4"
            alt="img "
            className="object-cover rounded-full  h-full w-full  "
          />
        </div>
        <div className=" h-40 w-full pt-10 flex items-center justify-center">
          <h1 className="bg-clip-text text-transparent  w-auto text-5xl font-extrabold  bg-gradient-to-r  70% from-indigo-600 to-cyan-500 text-center">
            I am Gagan,<p className="text-white text-4xl font-semibold">Full Stack Web Developer</p>
          </h1>
        </div>
        <div className="flex flex-row gap-3">
         <a target="_blank"href="https://drive.google.com/file/d/1Uh2Cy_cydahhaffEo4JoFsgbw6BpUYT4/view?usp=sharing"><button className="text-white p-3 cursor-pointer rounded-full hover:bg-gradient-to-r from-blue-700 to-cyan-800 opacity-90 hover:opacity-100 "><p className="text-white font-semibold">My Resume</p></button></a>
          <a href="#contact"><button className="text-white p-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-700 to-cyan-800 opacity-100 "><p className="text-white font-semibold">Get in Touch </p></button></a>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
