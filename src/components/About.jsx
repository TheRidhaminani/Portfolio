import { motion } from "framer-motion";
import {
  FaChartBar,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaWaveSquare,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0b0f1a] flex items-center justify-center"
    >
      <div className="w-full flex justify-center">
        <div className="max-w-6xl w-full px-6 py-24">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          >
            About <span className="text-orange-500">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-16 rounded" />

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
                Hi, I'm{" "}
                <span className="text-white font-semibold">Ridham Inani</span>{" "}
                — a final-year B.Tech student and{" "}
                <span className="text-orange-400">
                  GATE-qualified Data Scientist & ML Engineer
                </span>{" "}
                from Roorkee Institute of Technology, passionate about building
                end-to-end AI systems that solve real problems.
              </p>

              <p>
                I built{" "}
                <span className="text-orange-400 font-semibold">Signalyze</span>
                {" "}— a CNN-LSTM hybrid model for RF signal classification trained
                on 220K+ samples, achieving{" "}
                <span className="text-white font-semibold">90%+ accuracy</span>{" "}
                at SNR ≥ 0 dB, deployed as a full Flask web app with an
                oscilloscope-style UI.
              </p>

              <p>
                I've built ML pipelines, RAG chatbots, computer vision systems,
                and interactive Power BI dashboards using{" "}
                <span className="text-orange-400">
                  Python, TensorFlow, SQL, Scikit-learn, LangChain, and Power BI
                </span>
                , with a focus on shipping complete, production-ready solutions.
              </p>

              <p>
                Secured a{" "}
                <span className="text-orange-400 font-semibold">
                  GATE Score of 434 (AIR 4730) in Data Science & AI
                </span>
                {" "}— reflecting strong analytical thinking and a solid grasp of
                core ML and CS concepts.
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="border border-orange-500/30 rounded-xl p-4 text-center">
                  <h3 className="text-3xl font-bold text-orange-400">15+</h3>
                  <p className="text-gray-400 mt-1 text-sm">Projects Built</p>
                </div>
                <div className="border border-orange-500/30 rounded-xl p-4 text-center">
                  <h3 className="text-3xl font-bold text-orange-400">90%+</h3>
                  <p className="text-gray-400 mt-1 text-sm">Signalyze Accuracy</p>
                </div>
                <div className="border border-orange-500/30 rounded-xl p-4 text-center">
                  <h3 className="text-3xl font-bold text-orange-400">434</h3>
                  <p className="text-gray-400 mt-1 text-sm">GATE Score DS&AI</p>
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
                whileHover={{ y: -6 }}
                className="max-w-md w-full rounded-2xl p-8
                border border-orange-500/40
                backdrop-blur-md bg-white/5
                hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]
                transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  What I Build
                </h3>

                <ul className="space-y-5 text-gray-300">
                  <li className="flex items-start gap-4">
                    <span className="text-orange-400 text-lg mt-0.5">
                      <FaWaveSquare />
                    </span>
                    <span>
                      Deep learning models for signal processing and computer vision
                      (CNN-LSTM, ANN, object detection)
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-orange-400 text-lg mt-0.5">
                      <FaBrain />
                    </span>
                    <span>
                      End-to-end ML pipelines and RAG chatbots with LangChain and
                      vector databases
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-orange-400 text-lg mt-0.5">
                      <FaChartBar />
                    </span>
                    <span>
                      Interactive Power BI dashboards turning raw business data
                      into clear, actionable insights
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-orange-400 text-lg mt-0.5">
                      <FaDatabase />
                    </span>
                    <span>
                      Data pipelines with SQL, Pandas, and feature engineering
                      for predictive modeling
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-orange-400 text-lg mt-0.5">
                      <FaChartLine />
                    </span>
                    <span>
                      Flask-deployed AI apps with clean UIs for real-world
                      usability
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