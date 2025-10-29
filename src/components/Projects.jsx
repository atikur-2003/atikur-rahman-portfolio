import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// If this import fails for you, see the fallback note below.
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

import project1Img2 from "../assets/project1-img2.png";
import project1Img3 from "../assets/project1-img3.png";
import project1Img1 from "../assets/project1-img1.png";

import project2Img1 from "../assets/project2-img1.png";
import project2Img2 from "../assets/project2-img2.png";
import project2Img3 from "../assets/project2-img3.png";

import project3Img1 from "../assets/project3-img1.png";
import project3Img2 from "../assets/project3-img2.png";
import project3Img3 from "../assets/project3-img3.png";

import project4Img1 from "../assets/project4-img1.png";
import project4Img2 from "../assets/project4-img2.png";
import project4Img3 from "../assets/project4-img3.png";

const Projects = () => {
  const project1Images = [project1Img1, project1Img2, project1Img3];
  const project2Images = [project2Img1, project2Img2, project2Img3];
  const project3Images = [project3Img1, project3Img2, project3Img3];
  const project4Images = [project4Img1, project4Img2, project4Img3];

  return (
    <div id="projects" className="py-10 px-7 md:px-10 lg:px-20">
      <div className="text-center text-gray-300 mb-16">
        <h1 className="text-3xl md:text-5xl font-bold">
          Featured <span className="text-purple-500">Projects</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 rounded-xl border border-gray-400/30 overflow-hidden hover:scale-105 hover:border-blue-400/40 transition-all duration-500"
        >
          {/* Image slider (top of card) */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            slidesPerView={1}
          >
            {project1Images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`screenshot-${idx}`}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Static text (bottom of card) */}
          <div className="p-5">
            <h3 className="text-2xl font-bold text-gray-300 mb-3">MealMate</h3>
            <p className="text-gray-400 text-base font-medium mb-6">
              A meal management website with secure login, meal filter, stripe
              payment method, separate dashboard for admin and user.
            </p>
            <div className="text-gray-300 space-x-2 mt-4 text-sm">
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                React
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Tailwind
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Express
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Stripe
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Firebase
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Mongodb
              </span>
            </div>
            <div className="my-7 flex gap-5">
              <a
                href="https://mealmate-84e00.web.app/"
                target="_blank"
                className="flex items-center gap-2 text-blue-300"
              >
                <HiMiniArrowTopRightOnSquare size={20} />
                Live Site
              </a>
              <a
                href="https://github.com/atikur-2003/mealmate-client"
                target="_blank"
                className="flex items-center gap-2 text-gray-300"
              >
                <FaGithub size={20} />
                Github
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 rounded-xl border border-gray-400/30 overflow-hidden hover:scale-105 hover:border-blue-400/40 transition-all duration-500"
        >
          {/* Image slider (top of card) */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            slidesPerView={1}
          >
            {project2Images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`screenshot-${idx}`}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Static text (bottom of card) */}
          <div className="p-5">
            <h3 className="text-2xl font-bold text-gray-300 mb-3">
              Expense Tracker
            </h3>
            <p className="text-gray-400 text-base font-medium mb-6">
              A product modern income and expense management website with secure
              login, income and expense post, income-expense download.
            </p>
            <div className="text-gray-300 space-x-2 mt-4 text-sm">
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                React
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Tailwind
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Express
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Firebase
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Mongodb
              </span>
            </div>
            <div className="my-7 flex gap-5">
              <a
                href="https://expense-tracker-77573.web.app/"
                target="_blank"
                className="flex items-center gap-2 text-blue-300"
              >
                <HiMiniArrowTopRightOnSquare size={20} />
                Live Site
              </a>
              <a
                href="https://github.com/atikur-2003/expense-tracker-client"
                target="_blank"
                className="flex items-center gap-2 text-gray-300"
              >
                <FaGithub size={20} />
                Github
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 rounded-xl border border-gray-400/30 overflow-hidden hover:scale-105 hover:border-blue-400/40 transition-all duration-500"
        >
          {/* Image slider (top of card) */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            slidesPerView={1}
          >
            {project3Images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`screenshot-${idx}`}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Static text (bottom of card) */}
          <div className="p-5">
            <h3 className="text-2xl font-bold text-gray-300 mb-3">QueryNest</h3>
            <p className="text-gray-400 text-base font-medium mb-6">
              A product recommendation website with secure login, query post,
              product recommendation, dark theme toggle.
            </p>
            <div className="text-gray-300 space-x-2 mt-4 text-sm">
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                React
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Tailwind
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Express
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Firebase
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Mongodb
              </span>
            </div>
            <div className="my-7 flex gap-5">
              <a
                href="https://querynest-aa129.web.app/"
                target="_blank"
                className="flex items-center gap-2 text-blue-300"
              >
                <HiMiniArrowTopRightOnSquare size={20} />
                Live Site
              </a>
              <a
                href="https://github.com/atikur-2003/querynest-client"
                target="_blank"
                className="flex items-center gap-2 text-gray-300"
              >
                <FaGithub size={20} />
                Github
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 rounded-xl border border-gray-400/30 overflow-hidden hover:scale-105 hover:border-blue-400/40 transition-all duration-500"
        >
          {/* Image slider (top of card) */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            slidesPerView={1}
          >
            {project4Images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`screenshot-${idx}`}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Static text (bottom of card) */}
          <div className="p-5">
            <h3 className="text-2xl font-bold text-gray-300 mb-3">EasyBills</h3>
            <p className="text-gray-400 text-base font-medium mb-6">
              A utility bills payment website with secure login, bill payments
              option.
            </p>
            <div className="text-gray-300 space-x-2 mt-4 text-sm">
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                React
              </span>
              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Tailwind
              </span>

              <span className="px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300">
                Firebase
              </span>
            </div>
            <div className="my-7 flex gap-5">
              <a
                href="https://assignment-8-9bfd2.web.app/"
                target="_blank"
                className="flex items-center gap-2 text-blue-300"
              >
                <HiMiniArrowTopRightOnSquare size={20} />
                Live Site
              </a>
              <a
                href="https://github.com/atikur-2003/easybills"
                target="_blank"
                className="flex items-center gap-2 text-gray-300"
              >
                <FaGithub size={20} />
                Github
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
