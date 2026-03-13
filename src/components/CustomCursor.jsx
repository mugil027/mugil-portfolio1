import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { damping: 50, stiffness: 2000 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 2000 });
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    document.body.classList.add("cursor-none-global");

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      const el = e.target;
      const isPtr =
        el.closest("a") ||
        el.closest("button") ||
        el.getAttribute("role") === "button" ||
        el.tagName === "LABEL" ||
        el.tagName === "INPUT" ||
        el.tagName === "SELECT";
      setIsPointer(!!isPtr);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.classList.remove("cursor-none-global");
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-blue-500 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 7,
          height: 7,
        }}
        animate={{ scale: isPointer ? 0 : 1, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isPointer ? 52 : 34,
          height: isPointer ? 52 : 34,
          opacity: isVisible ? 0.55 : 0,
          borderColor: isPointer
            ? "rgba(37,99,235,0.9)"
            : "rgba(37,99,235,0.45)",
          backgroundColor: isPointer
            ? "rgba(37,99,235,0.08)"
            : "transparent",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
};

export default CustomCursor;
