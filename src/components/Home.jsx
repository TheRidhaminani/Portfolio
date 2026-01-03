import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.png";
import cv from "../assets/Priyanshu_Kumar_CV.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br 
      from-[#0b1020] via-[#0f172a] to-[#020617] flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 
      w-[600px] h-[600px] bg-orange-500/20 blur-[160px]" />

      {/* Social Icons */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-20">
        {[
          {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/priyanshukumar1105/",
          },
          {
            icon: <FaGithub />,
            link: "https://github.com/Priyanshu11singh",
          },
          {
            icon: <FaTwitter />,
            link: "https://twitter.com/your-twitter-username",
          },
          {
            icon: <FaEnvelope />,
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=rpriyanshusingh56@gmail.com",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 flex items-center justify-center rounded-full
            border border-orange-500/40 text-orange-400
            hover:bg-orange-500 hover:text-black
            hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
            transition-all duration-300"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 rounded-full 
          bg-orange-500/10 text-orange-400 text-sm tracking-wide">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 
            bg-clip-text text-transparent">
              Priyanshu Kumar
            </span>
          </h1>

          <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
            A <span className="text-white">MERN Stack Developer</span> crafting
            modern, scalable, and user-focused digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href={cv}
              download="Priyanshu_Kumar_CV.pdf"
              className="px-7 py-3 bg-orange-500 text-black rounded-lg font-semibold
              hover:bg-orange-600 hover:shadow-[0_0_25px_rgba(249,115,22,0.7)]
              active:scale-95 transition-all duration-300"
            >
              Download CV
            </a>

            <a
              href="#about"
              className="px-7 py-3 border border-orange-500 text-orange-400 
              rounded-lg hover:bg-orange-500 hover:text-black
              hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]
              transition-all duration-300"
            >
              About Me
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-64 h-80 rounded-2xl overflow-hidden"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-2xl 
            border-4 border-orange-500 
            shadow-[0_0_50px_rgba(249,115,22,0.6)]" />

            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 
        text-orange-400 text-sm tracking-wide"
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  );
}
