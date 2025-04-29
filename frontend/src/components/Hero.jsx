import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { useRef } from "react";

export default function Hero() {
  const portfolioRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonInView = useInView(buttonRef, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    scrollToSection("portfolio");
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-black to-[#0a0a0a] text-white py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            We Are <span className="text-purple-500">wAt</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl"
          >
            Crafting cutting-edge websites with style and strategy.
          </motion.p>

          <motion.div
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={buttonInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-block"
          >
            <Button
              onClick={handleClick}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg"
            >
              See Our Work
            </Button>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1"
        >
          <img
            src="/hero-illustration.png"
            alt="Design Illustration"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
