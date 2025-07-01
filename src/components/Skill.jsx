import React from "react";
import htmlsvg from "../assets/html-5-svgrepo-com.svg";
import csssvg from "../assets/css-svgrepo-com.svg";
import jssvg from "../assets/javascript-svgrepo-com.svg";
import reactsvg from "../assets/react-svgrepo-com.svg";
import tailwindsvg from "../assets/tailwind-svgrepo-com.svg";
import nodesvg from "../assets/nodejs-icon-svgrepo-com.svg";
import expressvg from "../assets/express-svgrepo-com.svg";
import postsqlsvg from "../assets/postgresql-svgrepo-com.svg";
import mongodbsvg from "../assets/mongo-svgrepo-com.svg";
import firebasesvg from "../assets/firebase-svgrepo-com.svg";

const Skill = () => {
  return (
    <>
      <div className="min-h-screen w-full  flex flex-col items-center justify-center ">
        <h1 className="text-5xl pb-3 text-center font-bold text-transparent bg-gradient-to-r  from-indigo-700  to-blue-300 bg-clip-text ">
          Skills
        </h1>
        <div className="h-98 w-[80%] p-4 bg-white/5 backdrop-blur-sm shadow-2xl rounded-2xl">
          <h2 className="text-3xl   text-center font-bold text-transparent bg-gradient-to-tr from-blue-700 to-indigo-500 bg-clip-text">
            Core Skill
          </h2>
          <div className="core  gap-2   h-1/2 w-full flex items-center sm:flex-col lg:flex-row justify-center  ">
            <img src={htmlsvg} className="size-18 " alt="img" />
            <img src={csssvg} className="size-18 " alt="img" />
            <img src={jssvg} className="size-16 p-1 " alt="img" />
            <img src={reactsvg} className="size-18" alt="img" />
            <img src={tailwindsvg} className="size-18" alt="img" />
          </div>
          <div className="gap-2   h-1/2 w-full flex items-center sm:flex-col lg:flex-row justify-center">
            <img src={htmlsvg} className="size-18 " alt="img" />
            <img src={csssvg} className="size-18 " alt="img" />
            <img src={jssvg} className="size-16 p-1 " alt="img" />
            <img src={reactsvg} className="size-18" alt="img" />
            <img src={tailwindsvg} className="size-18" alt="img" />
            <img src={nodesvg} className="size-18" alt="img" />
            <img src={expressvg} className="size-18 " alt="img" />
            <img src={postsqlsvg} className="size-18 " alt="img" />
            <img src={mongodbsvg} className="size-18 " alt="img" />
            <img src={firebasesvg} className="size-18 " alt="img" />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Skill;
