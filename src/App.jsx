import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
