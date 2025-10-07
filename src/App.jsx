import { useState } from "react";
<<<<<<< HEAD
=======
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 43c36c3 (Initial commit of portfolio project)
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-opacity-30">       
        <Navbar />
        <Home/>
        </div>
        <About/>
        <Skill/>
        <Project/>
        
    </>
  );
}

export default App;
