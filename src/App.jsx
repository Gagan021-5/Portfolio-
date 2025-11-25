import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useEffect } from "react";
function App() {
    useEffect(() => {
    const ribbon = document.getElementById("liquid-ribbon");

    const move = (e) => {
    ribbon.style.left = `${e.clientX}px`;
    ribbon.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
          <div id="liquid-ribbon"></div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="min-h-screen w-full bg-opacity-30 ">
        <Navbar />
        <section id="home" className="pt-50">
          <Home />
        </section>
      </div>

      <section id="about" >
        <About />
      </section>
      <section id="skills" >
        <Skill />
      </section>
      <section id="project" className="pt-24">
        <Project />
      </section>
      <section id="contact" className="pt-24">
        <Contact />
      </section>
    </>
  );
}

export default App;