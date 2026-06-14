import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Signalyze — RF Signal Classifier",
    badge: null,
    description:
      "CNN-LSTM hybrid model for Automatic Modulation Classification trained on RadioML 2016.10a (220K+ samples, 11 modulation classes). Achieves 90%+ accuracy at SNR ≥ 0 dB. Deployed as a Flask web app with an oscilloscope-style UI.",
    tech: ["CNN-LSTM", "TensorFlow", "Flask", "RadioML", "Python", "Deep Learning"],
    github: "https://github.com/TheRidhaminani/Signalyze",
    live: null,
    
  },
  {
    title: "Medical Chatbot — RAG System",
    badge: null,
    description:
      "Retrieval-Augmented Generation chatbot for medical Q&A. Combines vector embeddings with an LLM to answer domain-specific queries from medical documents with high relevance.",
    tech: ["Python", "LangChain", "RAG", "Vector DB", "NLP", "LLM"],
    github: "https://github.com/TheRidhaminani/Medical-Chatbot",
    live: null,
  },
  {
    title: "Lung Disease Diagnosis",
    badge: null,
    description:
      "ML pipeline that predicts lung diseases from medical data using classification algorithms with full data preprocessing, feature engineering, and model evaluation.",
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn", "EDA"],
    github: "https://github.com/TheRidhaminani/Lung-Disease-Classification",
    live: null,
  },
  {
    title: "Credit Card Fraud Detection",
    badge: null,
    description:
      "Fraud detection system using supervised learning with imbalanced data handling (SMOTE). Achieves high precision and recall on skewed transaction datasets.",
    tech: ["Python", "Scikit-learn", "SMOTE", "Logistic Regression", "Decision Trees"],
    github: "https://github.com/TheRidhaminani/Credit-Card-Fraud-Detection",
    live: null,
  },
  {
    title: "IMDb Sentiment Analysis",
    badge: null,
    description:
      "NLP pipeline for binary sentiment classification on IMDb reviews using TF-IDF and machine learning classifiers, with full text preprocessing.",
    tech: ["Python", "NLP", "TF-IDF", "Scikit-learn", "NLTK"],
    github: "https://github.com/TheRidhaminani/IMDB-Sentiment-Analysis",
    live: null,
  },
  {
    title: "Blinkit Sales Dashboard",
    badge: "📊 Power BI",
    description:
      "End-to-end Power BI dashboard analyzing Blinkit's sales performance across outlets, item types, and fat content categories with interactive slicers.",
    tech: ["Power BI", "DAX", "Data Modeling", "Business Analytics"],
    github: "https://github.com/TheRidhaminani/Blinkit-Sales-Dashboard",
    live: null,
  },
  {
    title: "Sensor Fault Detection",
    badge: null,
    description:
      "Predictive maintenance model to detect faulty sensors using anomaly detection and classification techniques for industrial IoT systems.",
    tech: ["Python", "Pandas", "Machine Learning", "Anomaly Detection"],
    github: "https://github.com/TheRidhaminani/Sensor-Fault-Detection",
    live: null,
  },
  {
    title: "Phishing Website Classifier",
    badge: null,
    description:
      "Classification model detecting phishing websites using URL-based and domain-based features. Combines multiple classifiers for robust cybersecurity detection.",
    tech: ["Python", "Random Forest", "Logistic Regression", "EDA", "Feature Engineering"],
    github: "https://github.com/TheRidhaminani/Phishing-Website-Detection",
    live: null,
  },
  {
    title: "Pothole Detection",
    badge: "👁️ Computer Vision",
    description:
      "Computer vision model for real-time pothole detection in road imagery using object detection techniques to assist smart city infrastructure.",
    tech: ["Python", "OpenCV", "Deep Learning", "Object Detection", "CV"],
    github: "https://github.com/TheRidhaminani/Pothole-Detection",
    live: null,
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0f172a] py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-orange-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            From RF signal classification to RAG chatbots — end-to-end ML systems, Power BI dashboards, and computer vision pipelines.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="relative bg-[#020617] rounded-xl p-6 flex flex-col
                transition-all duration-300 group
                border border-gray-800 hover:border-orange-400/60 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
            >
              {/* Badge */}
              {project.badge && (
                <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full
                  bg-orange-500/15 text-orange-400 border border-orange-500/30 w-fit">
                  {project.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-orange-500/10 text-orange-300 px-3 py-1 rounded-full border border-orange-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400
                    hover:text-orange-400 transition-colors duration-200"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>

                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400
                      hover:text-orange-400 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/TheRidhaminani"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-orange-500/50
              text-orange-400 rounded-lg hover:bg-orange-500 hover:text-black hover:border-orange-500
              hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]
              transition-all duration-300 font-medium"
          >
            <FaGithub className="text-lg" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}