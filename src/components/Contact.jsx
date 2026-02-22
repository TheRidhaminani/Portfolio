import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ki0a48n",
        "template_h7bx9sg",
        formRef.current,
        "w88_Wq3NPxN9enjyU"
      )
      .then(() => {
        setLoading(false);
        alert("✅ Message sent successfully!!");
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("❌ Failed to send messages");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-[#0A0F1F] via-[#0F172A] to-[#020617] py-28"
    >
      {/* Cyan Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Open to data analytics, machine learning and dashboard development opportunities. 
            Let’s connect and create something impactful together.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-14 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: <FaEnvelope />, text: "inaniridham@gmail.com" },
              { icon: <FaPhoneAlt />, text: "+91 9680715444" },
              { icon: <FaMapMarkerAlt />, text: "India" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                  {item.icon}
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pt-6"
            >
              {[
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/theridhaminani",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/TheRidhaminani",
                },
                {
                  icon: <FaTwitter />,
                  link: "https://twitter.com/your-twitter-username",
                },
                {
                  icon: <FaEnvelope />,
                  link: "https://mail.google.com/mail/?view=cm&fs=1&to=inaniridham@gmail.com",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full
                  border border-cyan-400/40 text-cyan-400
                  hover:bg-cyan-400 hover:text-black
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
                  transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-lg"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full mb-4 bg-transparent border border-cyan-400/30 rounded-lg px-4 py-3
              text-white focus:outline-none focus:border-cyan-400
              focus:shadow-[0_0_12px_rgba(34,211,238,0.4)] transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full mb-4 bg-transparent border border-cyan-400/30 rounded-lg px-4 py-3
              text-white focus:outline-none focus:border-cyan-400
              focus:shadow-[0_0_12px_rgba(34,211,238,0.4)] transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full mb-6 bg-transparent border border-cyan-400/30 rounded-lg px-4 py-3
              text-white focus:outline-none focus:border-cyan-400
              focus:shadow-[0_0_12px_rgba(34,211,238,0.4)] transition"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg
              hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
              active:scale-95 transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
