import { motion } from "framer-motion";

const skills = {
  "Programming & Core": [
    "Python",
    "SQL",
    "Data Structures",
    "Algorithms",
    "OOP",
    "Flask",
  ],

  "Data Analysis & Visualization": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Power BI",
    "DAX",
    "EDA",
    "Data Cleaning",
    "Feature Engineering",
  ],

  "Machine Learning": [
    "Supervised Learning",
    "Unsupervised Learning",
    "Regression",
    "Classification",
    "K-Means Clustering",
    "Anomaly Detection",
    "SMOTE",
    "Scikit-learn",
  ],

  "Deep Learning & AI": [
    "CNN",
    "LSTM",
    "CNN-LSTM Hybrid",
    "ANN",
    "TensorFlow",
    "Keras",
    "Signal Processing",
    "Computer Vision",
    "Object Detection",
  ],

  "NLP & GenAI": [
    "NLP",
    "TF-IDF",
    "NLTK",
    "LangChain",
    "RAG",
    "Vector Databases",
    "LLM Integration",
  ],

  "Tools & Platforms": [
    "Git & GitHub",
    "Jupyter Notebook",
    "Google Colab",
    "VS Code",
    "Kaggle",
    "Vercel",
    "Postman",
  ],
};

const categoryColors = {
  "Programming & Core": "text-blue-400",
  "Data Analysis & Visualization": "text-green-400",
  "Machine Learning": "text-purple-400",
  "Deep Learning & AI": "text-orange-400",
  "NLP & GenAI": "text-pink-400",
  "Tools & Platforms": "text-teal-400",
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
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            From deep learning systems to business dashboards — a full-stack ML toolkit.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([title, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-white/5 border border-orange-500/20 rounded-2xl p-7 backdrop-blur-xl
                         hover:border-orange-500/50 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]
                         transition-all duration-300"
            >
              <h3 className={`text-base font-semibold mb-5 ${categoryColors[title] || "text-orange-400"}`}>
                {title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full
                               bg-orange-500/10
                               border border-orange-500/25
                               text-orange-300
                               hover:bg-orange-500 hover:text-black hover:border-orange-500
                               transition-all duration-200 cursor-default"
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