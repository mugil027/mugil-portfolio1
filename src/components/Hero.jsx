import { motion } from "framer-motion";
import mugilPhoto from "../assets/mugil.jpeg"; // 🧠 make sure this image exists in src/assets/
import InteractiveBackground from "./InteractiveBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-24 bg-[#0a0a0a] text-white gap-10 md:gap-20 overflow-hidden">
        <InteractiveBackground />  {/* 👈 Added line */}

      {/* 🌈 Floating Gradient Background Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 blur-[150px] opacity-10"
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* LEFT SIDE — Title Section */}
      {/* LEFT SIDE — Title Section */}
        <motion.div
        className="flex-1 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7, delay: 0.5, ease: "easeOut" }}
        >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-[0_5px_20px_rgba(255,255,255,0.25)]">
            Welcome To My Portfolio
        </h1>

        {/* Underline */}
        <motion.div
            className="h-[4px] w-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mt-4 rounded-full mx-auto md:mx-0"
            animate={{ width: "60%" }}
            transition={{ duration: 1.7, delay: 1.5, ease: "easeOut" }}
        />
        </motion.div>


      {/* RIGHT SIDE — Photo + Text Section */}
      <motion.div
        className="flex-1 text-center md:text-right flex flex-col items-center md:items-end z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3.7, delay: 0.8, ease: "easeOut" }}
      >
        {/* 🌀 Rotating Ring + Image */}
        <div className="relative w-52 h-52 md:w-64 md:h-64 mb-6">
          {/* rotating border ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-transparent bg-[conic-gradient(from_0deg,rgba(59,130,246,0.8),rgba(236,72,153,0.8),rgba(147,51,234,0.8),rgba(59,130,246,0.8))]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          {/* Your photo inside */}
          <img
            src={mugilPhoto}
            alt="Mugil M"
            className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          />
        </div>

        {/* Your name */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
          MUGIL M
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-lg md:ml-auto leading-relaxed">
          An Aspiring Data Engineer leveraging AI and analytics to solve complex
          problems with precision and creativity.
        </p>

        {/* Tagline */}
        <p className="text-md md:text-lg text-gray-400 mt-3 italic">
          Building intelligent systems that merge AI, creativity, and precision.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
