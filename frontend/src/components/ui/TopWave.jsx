// components/TopWave.jsx
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TopWave() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <motion.div className="relative -mt-20 z-0 overflow-hidden" style={{ y }}>
      <svg
        className="w-full"
        viewBox="0 0 1440 180"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="0.9"
          d="M0,160 C480,100 960,220 1440,160 L1440,180 L0,180 Z"
        />
      </svg>
    </motion.div>
  );
}
