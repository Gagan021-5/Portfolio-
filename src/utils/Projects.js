import netflix from "../assets/n22.png";
import garc from "../assets/gamearc.png";
import moviesai from "../assets/moviescam.png";
import houseprice from "../assets/houseprice.png"
import nutrition from "../assets/nutrivigil.png";
import intentyt from "../assets/extension.png"
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
    url: "https://github.com/Gagan021-5/House-Price-Predictor-",
    img: houseprice,
    title: "House Price Predictor",
    description:
      "Developed a predictive model using linear regression and feature engineering to forecast house prices.Achieved 81% accuracy by optimizing key features and applying machine learning techniques.",
    skills: ["React", "Tailwind", "Flask", "Scikit-Learn"],
  },

  {
    url: "http://nutf.onrender.com/",
    img: nutrition,
    title: "NutriVigil",
    description:
      "Architected a privacy-first health scanner integrating Gemini 2.5 Pro and verified data streams, achieving sub-second latency and eliminating AI hallucinations for sensitive dietary queries.",
    skills: ["React", "Gemini 2.5 Pro", "Express", "API Ninjas (Nutrition)"],
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
    url: "https://github.com/Gagan021-5/IntentYoutube",
    img: intentyt,
    title: "IntentYoutube",
    description:
      "Watch YouTube with intent by controlling recommendations, shorts, and distractions without affecting the video you choose.",
    skills: ["React", "Chrome Extension APIs"],
  },
];

export { project };
