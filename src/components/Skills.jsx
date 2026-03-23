import { motion } from "framer-motion";

const skills = {
  "Programming & Core": [
    "Python",
    "SQL",
    "Data Structures",
    "Algorithms",
    "OOP",
  ],

  "Data Analysis & Visualization": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Power BI",
    "Exploratory Data Analysis (EDA)",
    "Data Cleaning",
    "Feature Engineering",
  ],

  "Machine Learning": [
    "Supervised Learning",
    "Unsupervised Learning",
    "Regression",
    "Classification",
    "Clustering (K-Means)",
    "Model Evaluation",
    "Scikit-learn",
  ],

  "Deep Learning": [
    "Neural Networks",
    "ANN",
    "CNN (Basics)",
    "TensorFlow",
    "Keras",
  ],

  "Tools & Platforms": [
    "Git & GitHub",
    "Jupyter Notebook",
    "Google Colab",
    "VS Code",
    "Kaggle",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-[#020617] py-28"
    >
      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold text-white"
        >
          My <span className="text-orange-500">Skills</span>
        </motion.h2>

        <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded"></div>

        {/* Skill Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([title, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white/5 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-xl 
                         hover:shadow-[0_0_45px_rgba(249,115,22,0.5)] transition"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-5">
                {title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-sm rounded-full 
                               bg-orange-500/10 
                               border border-orange-500/30 
                               text-orange-300
                               hover:bg-orange-500 hover:text-black
                               transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
