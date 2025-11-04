import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="px-4 md:px-10 lg:px-20 py-10 lg:py-24">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-300 text-center mb-7">
          About <span className="text-purple-500">Me</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-6xl mx-auto text-center mb-5"
        >
          I'm{" "}
          <span className="text-purple-500 font-semibold">
            Md. Atikur Rahman
          </span>
          , a passionate Frontend and MERN Stack Developer from Bangladesh. I
          have successfully completed my Diploma in Engineering degree in
          Computer Technology. I've also dived deep into the world of web
          development to build responsive, full-stack applications that solve
          real-world problems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-6xl mx-auto text-center mb-5"
        >
          With hands-on experience in JavaScript, React, Node.js, Express,
          MongoDB, and Firebase, I enjoy bringing ideas to life through clean
          code and intuitive interfaces. Whether it's developing a personal
          project or collaborating on a team, I strive for functionality,
          performance, and accessibility in everything I build.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-6xl mx-auto text-center "
        >
          I am constantly learning new technologies and my goal is to be a
          confident and well skilled Full-Stack Developer.I want to contribute
          to the development world with my skills and expertise and share my
          knowledge with the community.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
