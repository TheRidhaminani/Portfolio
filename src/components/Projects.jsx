import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "🫁 Lung Disease Diagnosis",
    description:
      "A machine learning project that predicts lung diseases using medical data and classification algorithms with data preprocessing, feature engineering, and model evaluation.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/TheRidhaminani",
    live: "#",
  },
  {
    title: "🎣 Phishing Website Classifier",
    description:
      "A classification model that detects phishing websites using URL-based and domain-based features to enhance cybersecurity detection.",
    tech: ["Python", "Scikit-learn", "Logistic Regression", "Random Forest", "EDA"],
    github: "https://github.com/TheRidhaminani",
    live: "#",
  },
  {
    title: "👥 Customer Segmentation",
    description:
      "Performed customer segmentation using clustering techniques to identify distinct customer groups and support targeted marketing strategies.",
    tech: ["Python", "Pandas", "K-Means", "Matplotlib", "Seaborn"],
    github: "https://github.com/TheRidhaminani",
    live: "#",
  },
  {
    title: "💳 Credit Card Fraud Detection",
    description:
      "Built a fraud detection system using supervised learning models to identify fraudulent transactions with high precision and recall.",
    tech: ["Python", "Scikit-learn", "Logistic Regression", "Decision Trees", "Imbalanced Data Handling"],
    github: "https://github.com/TheRidhaminani",
    live: "#",
  },
  {
    title: "⚙️ Sensor Fault Detection",
    description:
      "Developed a predictive maintenance model to detect faulty sensors using anomaly detection and classification techniques.",
    tech: ["Python", "Pandas", "NumPy", "Machine Learning", "Data Visualization"],
    github: "https://github.com/TheRidhaminani",
    live: "#",
  },
];
export default function Projects() {
  return (
    <section className="bg-[#0f172a] py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A showcase of my work in Data Analytics, Machine Learning, and predictive modeling.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#020617] border border-gray-800 rounded-xl p-6 hover:border-orange-400 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link Only */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
