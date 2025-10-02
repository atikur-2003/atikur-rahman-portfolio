import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";

const Education = () => {
  return (
    <div id="education" className="py-10 md:py-24 px-7 md:px-10 lg:px-20 ">
      <div className="text-center mb-10 text-gray-300">
        <h1 className="text-3xl md:text-5xl font-bold">
          My <span className="text-purple-500">Education</span>
        </h1>
        <p className="text-lg my-5">
          An overview of my academic and web development learning journey
        </p>
      </div>
      <div className="flex flex-col md:flex-row  gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8,  ease: "easeIn" }}
          viewport={{ once: true }}
          className="md:w-1/2 bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-7 rounded-xl border border-gray-400/30 relative transition-all duration-500 hover:border-blue-500/60 group overflow-hidden hover:scale-105"
        >
          <span className="absolute left-0 top-0 w-1 h-0 bg-blue-500/60 transition-all duration-500 group-hover:h-full"></span>

          <div className="flex justify-between items-center mb-7">
            <span className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-white">
              <FaGraduationCap size={30} />
            </span>
            <div>
              <span className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Completed
              </span>
            </div>
          </div>
          <div className="text-gray-300">
            <h1 className="text-xl lg:text-2xl font-semibold ">Diploma in Engineering</h1>
            <p className="text-lg my-2">
               Computer Technology
            </p>
            <p className="text-lg my-2">
              Rajshahi Polytechnic Institute <br />{" "}
              <span className="text-base">Rajshahi, Bangladesh</span>
            </p>
            <p className="mb-2 text-sm">CGPA : 3.77 (4.00)</p>
            <p className="mb-2 text-sm">Duration : 2020-2024</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: true }}
          className="md:w-1/2 bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-7 rounded-xl border border-gray-400/30 relative transition-all duration-500 hover:border-green-500/60 group overflow-hidden hover:scale-105"
        >
          <span className="absolute left-0 top-0 w-1 h-0 bg-green-500/60 transition-all duration-500 group-hover:h-full"></span>

          <div className="flex justify-between items-center mb-7">
            <span className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 text-white">
              <MdOutlineComputer size={30} />
            </span>
            <div>
              <span className="px-4 py-1 rounded-full text-sm font-bold border bg-green-500/10 border-green-400/20 text-green-400">
                Active
              </span>
            </div>
          </div>
          <div className="text-gray-300">
            <h1 className="text-xl lg:text-2xl font-semibold">
              Complete Web Development Course
            </h1>
            <h3 className="text-base lg:text-xl my-2">MERN Stack Web Development</h3>
            <p className="my-2">Programming Hero</p>
            <p className="text-sm">2025-Present</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
