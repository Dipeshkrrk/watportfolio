// components/BottomWave.jsx
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BottomWave() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 30]);

  return (
    <motion.div className="relative z-0 overflow-hidden" style={{ y }}>
      <svg
        className="w-full"
        viewBox="0 0 1440 180"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="0.9"
          d="M0,20 C480,120 960,-40 1440,20 L1440,0 L0,0 Z"
        />
      </svg>
    </motion.div>
  );
}
