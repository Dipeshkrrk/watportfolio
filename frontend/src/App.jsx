import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import HowItWorks from "./components/HowItWorks";
import MarqueeText from "./components/Marquee";
import watBg from "./assets/watBackground.png";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import PortfolioSection from "./components/Portfolio";
import ContactSection from "./components/Contact";
import ServicesSection from "./components/ServicesSection";

const services = [
  { name: "UX/UI Design", icon: "📱" },
  { name: "Branding", icon: "🔷" },
  { name: "Web Development", icon: "💻" },
  { name: "Prototyping", icon: "🎯" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${watBg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 text-white font-sans min-h-screen">
      <nav className="backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800 sticky top-0 z-50 shadow-md">
  <div className="flex justify-between items-center px-6 md:px-16 py-4">
    <h1
      className="text-3xl font-bold text-purple-500 cursor-pointer tracking-widest"
      onClick={() => scrollToSection("hero")}
    >
      wAt
    </h1>

    {/* Mobile menu toggle */}
    <div className="md:hidden">
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>
    </div>

    {/* Desktop menu */}
    <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
      {["about", "services", "portfolio", "how-it-works", "contact"].map((section) => (
        <li
          key={section}
          className="relative cursor-pointer hover:text-white transition"
          onClick={() => scrollToSection(section)}
        >
          {section.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  </div>

  {/* Mobile menu dropdown */}
  <AnimatePresence>
    {menuOpen && (
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="md:hidden flex flex-col gap-4 text-center py-4 bg-zinc-950 text-gray-300 border-t border-zinc-800"
      >
        {["about", "services", "portfolio", "how-it-works", "contact"].map((section) => (
          <motion.li
            key={section}
            className="hover:text-white cursor-pointer transition"
            onClick={(e) => {
              e.preventDefault(); // Prevent default action to avoid interference
              setMenuOpen(false); // Close menu
              setTimeout(() => { // Add a small delay to ensure the menu closes after scroll
                scrollToSection(section); // Call scroll function after closing the menu
              }, 300); // Delay is equal to animation duration
            }}
          >
            {section.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</nav>

        <Hero/>
        {/* About */}
        <AboutUs/>

        {/* Services */}
<ServicesSection/>


       {/* Portfolio */}
<PortfolioSection/>

        {/* How It Works */}
        <HowItWorks />
{/* Marquee */}
<MarqueeText />
        {/* Contact */}
        <ContactSection/>

        {/* Footer */}
        <footer className="bg-zinc-900 py-6 text-center text-gray-500">
          <p>&copy; 2025 wAt Agency. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
