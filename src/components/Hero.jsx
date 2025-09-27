import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile-image.png";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <motion.div
      id="home"
      className="min-h-screen  pt-28 pb-24 px-7 md:px-10 lg:px-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* hero content  */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h3 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 via-pink-400 to-cyan-400 tracking-[0.3em] uppercase mb-6 animate-pulse">
            ✦ Welcome to my portfolio ✦
          </h3>
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-300">
            I'm <span className="text-purple-500 ">Md. Atikur Rahman</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-300 my-7 font-semibold">
            <Typewriter
              words={["Frontend Developer", "MERN Stack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </h2>

          {/* hero content social links */}
          <div className="flex gap-5 my-8">
            <a
              href="https://github.com/atikur-2003"
              target="_blank"
              className="p-3 border border-gray-500 rounded-full text-gray-400 hover:text-white hover:border-gray-300 transition"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/atikur2004/"
              target="_blank"
              className="p-3 border border-gray-500 rounded-full text-gray-400 hover:text-white hover:border-gray-300 transition"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://www.facebook.com/md.atikur.50702769/"
              target="_blank"
              className="p-3 border border-gray-500 rounded-full text-gray-400 hover:text-white hover:border-gray-300 transition"
            >
              <FaFacebook size={25} />
            </a>
          </div>

          {/* hero content button */}
          <div className="flex gap-7">
            <a
              href=""
              className="px-4 py-2 rounded-full cursor-pointer border-2 border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1WLrQjzhHeIoLzlzqBqiXhpuTJzeT_xiW/view?usp=drive_link"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer border-2 border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition"
            >
              <FiDownload /> Resume
            </a>
          </div>
        </motion.div>

        {/* hero profile image */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={profileImage}
            alt=""
            className="w-60 lg:w-72 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
