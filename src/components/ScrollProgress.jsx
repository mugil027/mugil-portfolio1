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
          "linear-gradient(90deg, #b8922d 0%, #d4a828 30%, #f9d44b 50%, #d4a828 70%, #b8922d 100%)",
      }}
    />
  );
};

export default ScrollProgress;
