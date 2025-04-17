import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-20" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Logo Image */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://i.postimg.cc/RhnvJnVk/Logo.png" 
            alt="WAT Logo" 
            className="w-64 md:w-80 drop-shadow-2xl"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-purple-300">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            At <span className="text-purple-400 font-semibold">WAT</span>, we blend innovation with magic. 
            Our goal is to create impactful solutions with a touch of wonder—where technology meets imagination. 
            Whether it's transforming ideas into powerful applications or designing seamless experiences, 
            we’re here to build the future, one magical moment at a time.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
