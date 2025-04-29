import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedWave() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <motion.div
      className="relative -mt-20 z-0 overflow-hidden"
      style={{ y }}
    >
      <svg
        className="w-full"
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#waveGradient)"
          d="M0,120 C360,180 1080,60 1440,120 L1440,200 L0,200 Z"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
