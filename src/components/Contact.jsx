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
        "service_0e84pmb",        // Service ID
        "template_rbq426j",        // Template ID
        formRef.current,
        "-3M5vSi61s7qTIcL-"        // Public Key
      )
      .then(() => {
        setLoading(false);
        alert("✅ Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("❌ Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-[#020617] py-28"
    >
      {/* Glow Effect */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

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
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate?  
            Let’s build something amazing together.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-14 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-500/20 text-orange-400">
                <FaEnvelope />
              </div>
              <p className="text-gray-300">rpriyanshusingh56@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-500/20 text-orange-400">
                <FaPhoneAlt />
              </div>
              <p className="text-gray-300">+91 9608529833</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-500/20 text-orange-400">
                <FaMapMarkerAlt />
              </div>
              <p className="text-gray-300">India</p>
            </div>

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
                  link: "https://www.linkedin.com/in/your-linkedin-username",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/Priyanshu11singh",
                },
                {
                  icon: <FaTwitter />,
                  link: "https://twitter.com/your-twitter-username",
                },
                {
                  icon: <FaEnvelope />,
                  link: "https://mail.google.com/mail/?view=cm&fs=1&to=rpriyanshusingh56@gmail.com",
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
                  border border-orange-500/40 text-orange-400
                  hover:bg-orange-500 hover:text-black
                  hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
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
            className="bg-white/5 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-lg"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full mb-4 bg-transparent border border-orange-500/30 rounded-lg px-4 py-3
              text-white focus:outline-none focus:border-orange-500
              focus:shadow-[0_0_12px_rgba(249,115,22,0.4)] transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full mb-4 bg-transparent border border-orange-500/30 rounded-lg px-4 py-3
              text-white focus:outline-none focus:border-orange-500
              focus:shadow-[0_0_12px_rgba(249,115,22,0.4)] transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full mb-6 bg-transparent border border-orange-500/30 rounded-lg px-4 py-3
              text-white focus:outline-none focus:border-orange-500
              focus:shadow-[0_0_12px_rgba(249,115,22,0.4)] transition"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-orange-500 text-black font-semibold rounded-lg
              hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
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
