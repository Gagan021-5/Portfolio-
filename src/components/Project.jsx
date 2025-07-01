import React from "react";
import netflix from "../assets/n22.png";
import garc from "../assets/gamearrc.png";
import moviesai from "../assets/moviescam.png";
const Project = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center ">
        <h1 className="text-5xl pb-3 text-center font-bold text-transparent bg-gradient-to-r  from-indigo-600 to-blue-300 bg-clip-text  ">
          Projects
        </h1>
        <div className=" h-[98vh] w-full p-4 flex flex-col gap-5">
          <div className="pro1 h-full w-full flex justify-end   ">
            <div className="h-full w-[70%] flex flex-row  backdrop-blur-sm shadow-2xl bg-white/5 rounded-2xl ">
              <div className="w-65 h-full rounded-lg bg-green-700">
                <img
                  src={garc}
                  alt="img"
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
              <div className="">

              </div>
              <div>
              </div>
            </div>
          </div>
          <div className="pro1 h-full w-full flex justify-start  ">
            <div className="h-full w-[70%] flex flex-row backdrop-blur-sm shadow-2xl bg-white/5  rounded-2xl">
              <div className="w-65 h-full rounded-lg bg-green-700">
                <img
                  src={moviesai}
                  alt="img"
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
              <div className="w-[70%] p-2  bg-blue-900 h-full">
                   <h1 className="text-2xl  text-start font-semibold text-white/90">
                  Netflix Clone
                </h1>
                <span className="text-gray-300">
                  An AI-driven movie recommendation web app that allows users to
                  get smart, natural language-based movie suggestions.
                  Integrates Google’s Gemini API for understanding user prompts
                  (e.g., "emotional thrillers like Interstellar") and fetches
                  detailed metadata via the OMDb API. Built using React and
                  styled with Tailwind CSS for a clean UI experience.
                </span>
              </div>
            </div>
          </div>
          <div className="pro1 h-full w-full flex justify-end">
            <div className="h-full w-[70%] flex flex-row  backdrop-blur-sm shadow-2xl bg-white/5 rounded-2xl">
              <div className="w-65 h-full rounded-lg bg-green-700">
                <img
                  src={netflix}
                  alt="img"
                  className="object-cover h-full w-full rounded-lg "
                />
              </div>

              <div className="w-[70%] p-2  bg-blue-900 h-full">
                <h1 className="text-2xl  text-start font-semibold text-white/90">
                  Netflix Clone
                </h1>
                <span className="text-gray-300">
                  A visually accurate and responsive clone of Netflix built
                  using vanilla HTML, CSS, and JavaScript. Designed to replicate
                  core UI features like horizontal scrolling carousels,
                  interactive cards, mobile responsiveness, and modern layout
                  styling. Optimized for performance with a Lighthouse score of
                  90+.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
