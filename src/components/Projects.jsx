import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  
  {
    title: "📝 Blog App",
    description:
      "A dynamic and responsive blog application built with React that allows users to read, browse, and interact with blog posts.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Render"],
    github: "https://github.com/Priyanshu11singh/Blog-App",
    live: "https://blog-app-client-5e8l.onrender.com/",
  },
  {
    title: "📈 Trading Platform",
    description:
      "A full-stack trading platform that allows users to analyze market data, manage trades, and track performance.",
    tech: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Priyanshu11singh",
    live: "#",
  },
  {
    title: "🎨 Portfolio Website",
    description:
      "A modern personal portfolio built using React and Tailwind CSS showcasing skills and projects.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Priyanshu11singh",
    live: "#",
  },
  {
    title: "🖥️ Web Application UI",
    description:
      "A responsive and clean UI built with reusable components and optimized performance.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Priyanshu11singh",
    live: "#",
  },
  {
    title: "🛒 Grocery Website",
    description:
      "A multi-page grocery shopping website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Priyanshu11singh/Multipage-Grocery-Website-with-React-Tailwind-CSS",
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
            A showcase of my work, skills, and experience in frontend development.
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
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
