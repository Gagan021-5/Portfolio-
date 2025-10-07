import netflix from "../assets/n22.png";
import garc from "../assets/gamearc.png";
import moviesai from "../assets/moviescam.png";
import whackmole from "../assets/whack.png";
import quiz from "../assets/quizapp.png";

const project = [
  {
    url: "https://gamearc-frontend2.onrender.com/",
    img: garc,
    title: "GameArc",
    description:
      "A complete gaming e-commerce platform where users can browse and purchase games. Features include product listings, filtering by category, user authentication, and Stripe payment integration. Built with a scalable full-stack architecture and mobile-friendly design.",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Firebase Auth",
      "Rest APIs",
    ],
  },
  {
    url: "https://moviesfront-q1wi.onrender.com/",
    img: moviesai,
    title: "Movies Cameo",
    description:
      "An AI-powered movie recommender web app that suggests movies based on user preferences using Gemini API for smart recommendations and OMDB API for real movie data. Features advanced filtering, search, and detailed movie pages with a modern, responsive design.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "Gemini API",
      "OMDB API",
      "Tailwind CSS",
    ],
  },
  {
    url: "https://moviestreammminng-phi.vercel.app/",
    img: netflix,
    title: "Netflix Clone",
    description:
      "A visually accurate and responsive Netflix clone built with vanilla HTML, CSS, and JavaScript. Replicates core UI features like carousels, interactive cards, and mobile-friendly design with a focus on performance.",
    skills: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    url: "https://elegant-otter-8da223.netlify.app/",
    img: whackmole,
    title: "Whack-a-Mole",
    description:
      "A fun, interactive Whack-a-Mole game built with HTML, CSS, and JavaScript. Features animated gameplay, score tracking, and responsive design for desktop and mobile devices.",
    skills: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    url: "https://quiz-k2hv0sckd-gustavos-projects-c0e43767.vercel.app/",
    img: quiz,
    title: "Quiz App",
    description:
      "A dynamic quiz application built with React and Tailwind CSS. Includes multiple-choice questions, scoring logic, and result screens, all within a responsive and intuitive interface.",
    skills: [" CSS", "React"],
  },
];

export { project };
