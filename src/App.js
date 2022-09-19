import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/github";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Github/>
      <Projects />
      <Contact />
    </main>
  );
}
