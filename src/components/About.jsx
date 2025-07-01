import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen  w-full  flex flex-col items-center justify-center ">
        <h1 className="text-5xl pb-3 text-center font-bold text-transparent bg-gradient-to-r from-indigo-700 to-blue-300 bg-clip-text ">
          About Me
        </h1>

        <div className="about w-[75%] h-80 shadow-xl p-9 flex gap-1  bg-white/5 backdrop-blur-md  rounded-xl">
            <div className="h-60 w-full  p-1 flex flex-col justify-center items-center gap-3">
            <span className="text-gray-300 font-semibold text-center text-lg">
              I am a Web Developer with a strong foundation in JavaScript, and
              modern web technologies including React, Node.js, and MongoDB. I
              enjoy building full-stack applications, automating workflows, and
              Implementing Restful API.Enthusiastic about problem-solving,
              automating workflows, and crafting scalable, user-friendly web
              solutions.
            </span>
            <div className="h-60 w-full flex justify-around ">
              <div className="text-white text-5xl">5+</div>
              <div className="text-white text-5xl">10+</div>
              <div className="text-white text-5xl">2+ </div>
            </div>
          </div>
          </div>
        </div>
      
    </>
  );
};

export default About;
