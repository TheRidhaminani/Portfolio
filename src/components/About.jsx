import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaRocket,
  FaPuzzlePiece,
  FaLayerGroup,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0b0f1a] 
      flex items-center justify-center"
    >
      {/* CENTER WRAPPER (IMPORTANT) */}
      <div className="w-full flex justify-center">
        {/* CONTENT BOX (MATCHES SKILLS WIDTH) */}
        <div className="max-w-6xl w-full px-6 py-24">
          {/* TITLE — CENTERED LIKE SKILLS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            About <span className="text-orange-500">Me</span>
          </motion.h2>

          {/* TWO COLUMN CONTENT */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                Hi, I’m{" "}
                <span className="text-white font-semibold">
                  Priyanshu Kumar
                </span>{" "}
                — a{" "}
                <span className="text-orange-400">MERN Stack Developer</span>{" "}
                passionate about building fast, scalable, and user-centric web
                applications.
              </p>

              <p>
                Over the past year, I’ve built and deployed full-stack
                applications with authentication, APIs, and database integration
                using{" "}
                <span className="text-orange-400">
                  React, Node.js, Express, MongoDB, and Tailwind CSS
                </span>
                .
              </p>

              <p>
                I enjoy turning ideas into smooth, functional products and
                continuously improving my craft as a{" "}
                <span className="text-white">developer and problem-solver</span>
                .
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border border-orange-500/30 rounded-xl p-5 text-center">
                  <h3 className="text-3xl font-bold text-orange-400">10+</h3>
                  <p className="text-gray-400 mt-1">Projects Completed</p>
                </div>

                <div className="border border-orange-500/30 rounded-xl p-5 text-center">
                  <h3 className="text-3xl font-bold text-orange-400">2+</h3>
                  <p className="text-gray-400 mt-1">Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="max-w-md w-full rounded-2xl p-8
  border border-orange-500/40
  backdrop-blur-md bg-white/5
  hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]
  transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  What I Do 🚀
                </h3>

                <ul className="space-y-5 text-gray-300">
                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaLaptopCode />
                    </span>
                    <span>Build responsive web applications</span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaServer />
                    </span>
                    <span>Design & develop RESTful APIs</span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaRocket />
                    </span>
                    <span>Optimize UI performance & speed</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaPuzzlePiece />
                    </span>
                    <span>Create reusable, scalable components</span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaLayerGroup />
                    </span>
                    <span>Maintain clean & maintainable code</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
