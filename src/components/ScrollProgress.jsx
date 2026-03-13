import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9990] pointer-events-none"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #1D4ED8 0%, #2563EB 30%, #93C5FD 50%, #2563EB 70%, #1D4ED8 100%)",
      }}
    />
  );
};

export default ScrollProgress;
