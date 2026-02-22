import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0F1F]/80 backdrop-blur-md border-b border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-cyan-400">
          TheRidham<span className="text-white">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 text-xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0F1F] border-t border-cyan-400/10">
          <div className="flex flex-col items-center gap-6 py-6 text-gray-300">
            <a onClick={() => setMenuOpen(false)} href="#home" className="hover:text-cyan-400">
              Home
            </a>
            <a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a onClick={() => setMenuOpen(false)} href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a onClick={() => setMenuOpen(false)} href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a onClick={() => setMenuOpen(false)} href="#projects" className="hover:text-cyan-400">
              Education
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}