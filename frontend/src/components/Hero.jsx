import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="text-center py-24 px-4 bg-gradient-to-b from-black to-[#0a0a0a]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
      >
        We Are <span className="text-purple-500">wAt</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-8"
      >
        Web Design with an Edge
      </motion.p>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button onClick={() => scrollToSection("portfolio")} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 text-lg rounded-2xl">
          See Our Work
        </Button>
      </motion.div>
    </section>
  );
}
