import React, { useState } from "react";
import { FaCode, FaXmark } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [menubar, setMenubar] = useState(false);

  const navLinks = (
    <>
      <a
        onClick={() => setMenubar(!menubar)}
        href="#home"
        className="relative font-semibold transition-all duration-300 text-gray-300 hover:text-purple-500 group"
      >
        Home
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        onClick={() => setMenubar(!menubar)}
        href="#about"
        className="relative font-semibold transition-all duration-300 text-gray-300 hover:text-purple-500 group"
      >
        About
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        onClick={() => setMenubar(!menubar)}
        href="#skills"
        className="relative font-semibold transition-all duration-300 text-gray-300 hover:text-purple-500 group"
      >
        Skills
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        onClick={() => setMenubar(!menubar)}
        href="#education"
        className="relative font-semibold transition-all duration-300 text-gray-300 hover:text-purple-500 group"
      >
        Education
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        onClick={() => setMenubar(!menubar)}
        href="#projects"
        className="relative font-semibold transition-all duration-300 text-gray-300 hover:text-purple-500 group"
      >
        Projects
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        onClick={() => setMenubar(!menubar)}
        href="#contact"
        className="relative font-semibold transition-all duration-300 text-gray-300 hover:text-purple-500 group"
      >
        Contact
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </>
  );

  return (
    <nav className="fixed  w-full top-0 z-50 bg-black/95 backdrop-blur-xl px-4 md:px-10 lg:px-20 py-4 border-b border-gray-700/50 shadow-2xl shadow-gray-900/50">
      <div className="flex items-center justify-between">
        <div className="">
          <a href="/" className=" flex items-center gap-2">
            <FaCode size={30} className="text-purple-400" />
            <span className="text-3xl font-bold text-gray-300">Atikur</span>
          </a>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex space-x-9">{navLinks}</div>

        {/* desktop resume button */}
        <div className="hidden lg:block">
          <a
            href="https://drive.google.com/file/d/1P14yp2N_TxUQyBWGVr6HwtgOp7VuXOHe/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer border-2 border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition"
          >
            Resume
          </a>
        </div>

        {/* mobile screen menubar */}
        <div className="text-gray-300 md:hidden border border-gray-600 rounded-full p-2">
          {menubar ? (
            <FaXmark onClick={() => setMenubar(!menubar)} size={30} />
          ) : (
            <IoMenuSharp onClick={() => setMenubar(!menubar)} size={30} />
          )}
        </div>
      </div>

      {/* mobile menu */}

      {menubar && (
        <div className="md:hidden mt-2 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
          <div className="flex flex-col px-4 pt-4 pb-7 space-y-4">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
