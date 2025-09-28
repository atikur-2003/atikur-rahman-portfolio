import React from "react";
const Skills = () => {
  return (
    <div id="skills" className="py-10 px-7 md:px-10 lg:px-20">
      <div className="text-center text-gray-300">
        <h1 className="text-3xl md:text-5xl font-bold ">
          My <span className="text-purple-500">Skills</span>
        </h1>
        <p className="text-lg font-medium text-gray-300 my-7 max-w-4xl mx-auto">
          Technologies and frameworks I use to craft exceptional digital
          experiences and scalable solutions
        </p>
      </div>

      {/* skills item section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

        {/* html card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center gap-3 items-center">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="" className="w-20"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">HTML 5</p>
          </div>
        </div>

        {/* css card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="90"
                height="90"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0277BD"
                  d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                ></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path
                  fill="#FFF"
                  d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                ></path>
                <path
                  fill="#EEE"
                  d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                ></path>
              </svg>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">CSS 3</p>
          </div>
        </div>

        {/* javascript card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="" className="w-20"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">JavaScript</p>
          </div>
        </div>

        {/* react card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" className="w-20"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">React</p>
          </div>
        </div>

        {/* tailwind card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" className="w-24"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">Tailwind CSS</p>
          </div>
        </div>

        {/* bootstrap card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" alt="" className="w-24"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">BootStrap</p>
          </div>
        </div>

        {/* node js card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="" className="w-20"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">Node.js</p>
          </div>
        </div>

        {/* express js card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="" className="w-20"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">Express.js</p>
          </div>
        </div>

        {/* mongodb card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="" className="w-20"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">MongoDB</p>
          </div>
        </div>

        {/* firebase card */}
        <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 p-5 rounded-2xl flex justify-center border border-gray-500/50 cursor-pointer hover:border-gray-400/70 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3>
              <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="" className="w-20"/>
            </h3>
            <p className="text-gray-300 font-semibold text-xl">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
