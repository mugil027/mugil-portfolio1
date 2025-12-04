import { motion } from "framer-motion";
import mugilPhoto from "../assets/mugil.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-bgLight via-white to-slate-100 dark:from-bg dark:via-bg dark:to-slate-900 -z-10" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* LEFT: Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 mb-4">
            Portfolio · Data Engineering · AI
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Welcome To{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-gray-300 max-w-xl md:max-w-2xl">
            An Aspiring Data Engineer leveraging AI and analytics to solve
            complex problems with precision and creativity.
          </p>

          <p className="mt-3 text-sm md:text-base text-slate-500 dark:text-gray-400 italic">
            Building intelligent systems that merge AI, creativity, and
            precision.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-300/90 text-sm font-medium text-slate-800 bg-white/70 backdrop-blur hover:border-slate-500 dark:border-white/30 dark:bg-card/70 dark:text-white transition-all"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Profile Card */}
       <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md">
            {/* Outer Glow */}
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-pink-500/40 via-indigo-500/40 to-purple-500/40 blur-2xl opacity-50" />

            <div className="relative rounded-[32px] bg-white dark:bg-card/90 border border-slate-200/70 dark:border-white/10 p-10 flex flex-col items-center gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              
              {/* Bigger DP */}
              <div className="relative">
                <div className="h-44 w-44 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-[4px] shadow-2xl">
                  <div className="h-full w-full rounded-full overflow-hidden bg-slate-900/80">
                    <img
                      src={mugilPhoto}
                      alt="Mugil M"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center space-y-1">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  MUGIL M
                </h2>

                <p className="text-[13px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Aspiring Data Engineer
                </p>

                <p className="text-[16px] font-semibold tracking-wide
                    bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                    bg-clip-text text-transparent
                    drop-shadow-[0_0_4px_rgba(0,0,0,0.35)]
                    dark:drop-shadow-[0_0_6px_rgba(0,0,0,0.55)]
                ">
                  Founder of Socionn
                </p>


              </div>

              {/* Line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300/70 dark:via-white/10 to-transparent" />

              {/* Bio */}
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center leading-relaxed max-w-sm">
                Passionate about building data pipelines, intelligent systems, and 
                real-world applications that connect AI with impactful user experiences.
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
