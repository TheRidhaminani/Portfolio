import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electronics and Communication Engineering",
      institution: "Roorkee Institute of Technology",
      duration: "2022 – Present",
      score: "CGPA: 7.53",
    },
    {
      degree: "CBSE Class XII",
      field: "",
      institution: "Central Academy, Chittorgarh",
      duration: "2021 – 2022",
      score: "91.6%",
    },
    {
      degree: "CBSE Class X",
      field: "",
      institution: "St. Paul’s Sr. Sec. School, Chittorgarh",
      duration: "2019 – 2020",
      score: "88.4%",
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen bg-[#0A0F1F] py-28"
    >
      {/* Cyan Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          My <span className="text-cyan-400">Education</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-cyan-400/30 ml-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-14 ml-6"
            >
              {/* Icon */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/40">
                <FaGraduationCap />
              </span>

              {/* Card */}
              <div className="bg-white/5 border border-cyan-400/30 rounded-2xl p-6 backdrop-blur-md
                              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                              transition duration-300">

                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>

                {edu.field && (
                  <p className="text-cyan-400 text-sm mt-1">
                    {edu.field}
                  </p>
                )}

                <p className="text-gray-400 text-sm mt-1">
                  {edu.institution}
                </p>

                <p className="text-gray-400 text-sm">
                  {edu.duration}
                </p>

                <p className="text-cyan-300 font-medium mt-3">
                  {edu.score}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}