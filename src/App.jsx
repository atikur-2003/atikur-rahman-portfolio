import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
