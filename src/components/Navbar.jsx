import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";



const Navbar = () => {
  return (
    <>
      <nav className="h-30 flex justify-between p-2 w-full ">
        <h1 className="font-bold text-3xl text-transparent  bg-clip-text  bg-gradient-to-r from-indigo-600 to-cyan-600 text-center">
          Welcome
        </h1>
        <ul className="flex flex-row text-lg font-semibold  gap-5 list-none ">
          <li>
            <a className=" text-gray-400 hover:transition-all duration-300 ease-in-out hover:text-white" href="#home">Home</a>
          </li>
          <li>
            <a  className=" text-gray-400 hover:transition-all duration-300 ease-in-out hover:text-white"href="#about">About</a>
          </li>
          <li>
            <a  className=" text-gray-400 hover:transition-all duration-300 ease-in-out hover:text-white"   href="#skills">Skills</a>
          </li>
          <li>
            <a  className="text-gray-400 hover:transition-all duration-300 ease-in-out hover:text-white"href="#project">Projects</a>
          </li>
         
        </ul>
        <div className="flex flex-row gap-4 h-auto w-40  ">
                  <a
          href="https://github.com/Gagan021-5"
          target="_blank"

        >
          <FaGithub className="fill-gray-500 hover:transition-all duration-300 ease-in-out hover:fill-gray-300 text-2xl" />
        </a>
        <a
          href="https://github.com/Gagan021-5"
          target="_blank"

        >
          <FaLinkedinIn className="fill-gray-500 hover:transition-all duration-300 ease-in-out hover:fill-gray-300 text-2xl"/>

        </a>
        <a
          href="https://leetcode.com/u/Gagan01217/"
          target="_blank"

        ><SiLeetcode className="fill-gray-500 hover:transition-all duration-300 ease-in-out  hover:fill-gray-300 text-2xl" />
         
        
        </a>
        <a
          href="https://x.com/Gagan_zs"
          target="_blank"

        ><RiTwitterXLine  className="fill-gray-500 hover:transition-all duration-300 ease-in-out  hover:fill-gray-300 text-2xl" />
         
        
        </a>
       
        </div>

      </nav>
    </>
  );
};

export default Navbar;
