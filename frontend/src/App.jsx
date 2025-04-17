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

const services = [
  { name: "UX/UI Design", icon: "📱" },
  { name: "Branding", icon: "🔷" },
  { name: "Web Development", icon: "💻" },
  { name: "Prototyping", icon: "🎯" },
];

const portfolioItems = ["Project One", "Project Two", "Project Three", "Project Four"];

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
<section
  id="services"
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-16 py-16 bg-black"
>
  {services.map((service, index) => (
    <motion.div
      key={service.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
    >
      {/* Outer glow only on hover */}
      <div className="relative rounded-2xl transition duration-300 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.4)]">
        {/* Gradient border wrapper */}
        <div className="rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 to-purple-500">
          {/* Inner card */}
          <div className="rounded-2xl bg-zinc-900 text-white p-6 h-full flex flex-col items-center justify-center text-center hover:bg-zinc-800 transition duration-300">
            <div className="text-4xl mb-4 text-purple-400">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</section>


        {/* Portfolio */}
<section id="portfolio" className="px-6 md:px-16 py-16 bg-black">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-8 text-purple-300"
  >
    Portfolio
  </motion.h2>

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
    viewport={{ once: true }}
  >
    {portfolioItems.map((item, idx) => (
      <motion.div
        key={idx}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="bg-zinc-800 aspect-square rounded-xl flex items-center justify-center text-purple-300 text-lg font-semibold transition"
      >
        {item}
      </motion.div>
    ))}
  </motion.div>
</section>

        {/* Marquee */}
<MarqueeText />

        {/* How It Works */}
        <HowItWorks />

        {/* Contact */}
        <section id="contact" className="px-6 md:px-16 py-16 text-center">
          <h2 className="text-purple-400 uppercase text-xl mb-6">Get In Touch</h2>
          {submitted ? (
            <p className="text-green-400">Thanks for your message! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
              />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl">
                Send Message
              </Button>
            </form>
          )}
        </section>

        {/* Footer */}
        <footer className="bg-zinc-900 py-6 text-center text-gray-500">
          <p>&copy; 2025 wAt Agency. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
