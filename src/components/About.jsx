import { motion } from "framer-motion";
import {
  FaChartBar,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0b0f1a] 
      flex items-center justify-center"
    >
      {/* CENTER WRAPPER */}
      <div className="w-full flex justify-center">
        {/* CONTENT BOX */}
        <div className="max-w-6xl w-full px-6 py-24">
          
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            About <span className="text-orange-500">Me</span>
          </motion.h2>

          {/* TWO COLUMN */}
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
                  Ridham Inani
                </span>{" "}
                — a{" "}
                <span className="text-orange-400">
                  Data Analyst & Machine Learning Enthusiast
                </span>{" "}
                passionate about transforming raw data into actionable insights
                and building data-driven solutions.
              </p>

              <p>
                I have secured a{" "}
                <span className="text-orange-400 font-semibold">
                  GATE Score of 434 (AIR 4730)
                </span>
                , reflecting strong analytical thinking, problem-solving ability,
                and a solid grasp of core engineering concepts.
              </p>

              <p>
                Over the past year, I’ve analyzed complex datasets, built
                interactive dashboards, and developed machine learning models
                using{" "}
                <span className="text-orange-400">
                  Python, SQL, Power BI, Pandas, NumPy, and Scikit-learn
                </span>{" "}
                to uncover insights and support data-driven decision-making.
              </p>

              <p>
                I’m passionate about uncovering patterns in data, solving
                real-world problems, and continuously refining my expertise as a{" "}
                <span className="text-white">
                  data-driven problem solver
                </span>.
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                
                <div className="border border-orange-500/30 rounded-xl p-5 text-center">
                  <h3 className="text-3xl font-bold text-orange-400">10+</h3>
                  <p className="text-gray-400 mt-1">Projects Completed</p>
                </div>

                <div className="border border-orange-500/30 rounded-xl p-5 text-center">
                  <h3 className="text-3xl font-bold text-orange-400">434</h3>
                  <p className="text-gray-400 mt-1">GATE Score</p>
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
                      <FaChartBar />
                    </span>
                    <span>
                      Perform exploratory data analysis (EDA) to uncover trends & insights
                    </span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaDatabase />
                    </span>
                    <span>
                      Query and manage structured data using SQL
                    </span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaBrain />
                    </span>
                    <span>
                      Develop machine learning models for predictive analysis
                    </span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaChartLine />
                    </span>
                    <span>
                      Build interactive dashboards using Power BI
                    </span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="text-orange-400 text-lg">
                      <FaLightbulb />
                    </span>
                    <span>
                      Transform raw data into actionable business insights
                    </span>
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