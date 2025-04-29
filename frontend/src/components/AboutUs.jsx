import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TopWave from "./ui/TopWave";
import BottomWave from "./ui/BottomWave";

export default function AboutUs() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-24" id="about">
      <TopWave/>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Logo Image */}
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img 
            src="Aboutus.png" 
            alt="About Us Illustration" 
            className="w-52 sm:w-64 md:w-80 lg:w-96 drop-shadow-2xl"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 50 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-purple-300">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            At <span className="text-purple-400 font-semibold">wAt</span>, we blend innovation with magic.
            Our goal is to create impactful solutions with a touch of wonder—where technology meets imagination.
            Whether it's transforming ideas into powerful applications or designing seamless experiences,
            we’re here to build the future, one magical moment at a time.
          </p>
        </motion.div>

      </div>
      <BottomWave/>
    </section>
  );
}
