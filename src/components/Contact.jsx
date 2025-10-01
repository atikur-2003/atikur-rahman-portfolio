import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    emailjs
      .sendForm(
        "service_rz54rmq",
        "template_lf1lcd8",
        form.current,
        "ipBpibNKXu-fXyX_s"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSent(true);

          // reset form
          form.current.reset();

          // reset "Message Sent" back to normal button after few seconds
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="py-10 px-7 md:px-10 lg:px-20">
      <div className="text-center text-gray-300 my-7">
        <h1 className="text-3xl md:text-5xl font-bold  mb-4">
          Contact <span className="text-purple-500">Me</span>
        </h1>
        <p>
          Ready to bring your ideas to reality? Let's create something amazing
          together
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 p-5 bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 rounded-xl border border-gray-400/30 overflow-hidden transition-all duration-500"
        >
          <div className="text-gray-300">
            <h3 className="text-2xl font-semibold mb-3">Get In Touch</h3>
            <p>
              Feel free to reach out! I'm always open to discussing new
              opportunities, interesting projects, or just having a chat about
              technology and development.
            </p>
          </div>

          <div className="text-gray-300 mt-7 space-y-5">
            <p className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-purple-500/40 transition-all duration-300">
              <span className="text-purple-500 p-2 text-sm md:text-2xl rounded-xl border border-purple-400/30 bg-purple-400/20">
                <CgMail />{" "}
              </span>{" "}
              <span className="text-sm md:text-base">
                atikur947382@gmail.com
              </span>
            </p>

            <p className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-green-500/40 transition-all duration-300">
              <span className="text-green-500 p-2 rounded-xl border border-green-400/30 bg-green-400/20">
                <FaWhatsapp size={25} />{" "}
              </span>{" "}
              +8801780947382
            </p>

            <p className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-blue-500/40 transition-all duration-300">
              <span className="text-blue-500 p-2 rounded-xl border border-blue-400/30 bg-blue-400/20">
                <IoLocationOutline size={25} />{" "}
              </span>{" "}
              Gazipur, Bangladesh (Remote Available)
            </p>
          </div>

          <div className="flex items-center gap-5 mt-7">
            <span className="text-gray-300 font-semibold">Follow Me : </span>
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
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 p-5 bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 rounded-xl border border-gray-400/30 overflow-hidden transition-all duration-500"
        >
          <div className="text-gray-300">
            <h3 className="text-2xl font-semibold mb-3">Send Me a Message</h3>
            <p>I'll get back to you as soon as possible</p>
          </div>
          <div className="mt-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="max-w-3xl mx-auto space-y-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-300 focus:ring-0.5 focus:ring-purple-300 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-300 focus:ring-0.5 focus:ring-purple-300 outline-none"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-300 focus:ring-0.5 focus:ring-purple-300 outline-none resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer flex items-center justify-center gap-2 p-3 bg-purple-500 hover:bg-purple-700 rounded-lg text-white font-semibold transition duration-300 disabled:opacity-70"
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {sent
                  ? "✅ Message Sent!"
                  : loading
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
