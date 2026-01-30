import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectCard = ({ project, mirror = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const vidRef = useRef(null);

  useEffect(() => {
    let hideTimer;
    if (showControls) {
      hideTimer = setTimeout(() => setShowControls(false), 1500);
    }
    return () => clearTimeout(hideTimer);
  }, [showControls]);

  // Preload video
  useEffect(() => {
    if (project.video) {
      const preload = document.createElement("video");
      preload.src = project.video;
      preload.preload = "auto";
    }
  }, [project.video]);

  const handleToggle = () => {
    const v = vidRef.current;
    if (!v) return;

    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      v.muted = false;
      v.play().catch(() => {});
      setIsPlaying(true);
    }

    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 800);
  };

  return (
    <motion.article
      className={`relative flex flex-col lg:flex-row items-center justify-center py-20 gap-14 lg:gap-16 ${
        mirror ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Elegant separator line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-stone-300/50 dark:via-stone-700/30 to-transparent" />

      {/* MEDIA SECTION */}
      <motion.div
        className="flex flex-col items-center justify-center w-full lg:w-[50%] xl:w-[55%]"
        initial={{ opacity: 0, x: mirror ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {project.images ? (
          <div className="relative w-[90%] max-w-[700px]">
            {/* Premium glow behind swiper */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/20 via-transparent to-amber-300/10 dark:from-amber-500/10 dark:to-amber-600/5 blur-2xl rounded-3xl" />
            
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              loop
              className="relative rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-stone-200/50 dark:ring-stone-800/50"
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${project.title}-${i}`}
                    className="w-[90%] h-auto max-h-[550px] object-contain bg-stone-900 rounded-2xl mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : project.video ? (
          <div className="relative flex flex-col items-center justify-center w-full max-w-[700px] mx-auto px-4">
            {/* Premium glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-amber-200/20 via-transparent to-amber-300/10 dark:from-amber-500/10 dark:to-amber-600/5 blur-3xl rounded-[32px]" />
            
            <div className="relative bg-white/95 dark:bg-[#141414]/95 rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.5)] ring-1 ring-stone-200/60 dark:ring-stone-800/50 p-[4px] md:p-[6px] w-full">

              <video
                ref={vidRef}
                src={project.video}
                poster={project.cover}
                preload="auto"
                className={`w-full aspect-video max-h-[500px] object-contain rounded-[18px] transition-all duration-500 hover:scale-[1.01]
                  ${showControls ? "" : "[&::-webkit-media-controls]:opacity-0"}`}
                playsInline
                controls={showControls}
                controlsList="nodownload noremoteplayback"
                onClick={handleToggle}
                onMouseMove={() => setShowControls(true)}
                onTouchStart={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              />

              {showIcon && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1.1, 1],
                    filter: [
                      "drop-shadow(0 0 0px rgba(0,0,0,0))",
                      "drop-shadow(0 0 15px rgba(212, 168, 40, 0.9))",
                      "drop-shadow(0 0 25px rgba(249, 212, 75, 0.7))",
                      "drop-shadow(0 0 0px rgba(0,0,0,0))",
                    ],
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </motion.div>
              )}

              <p
                onClick={handleToggle}
                className="mt-2 text-xs sm:text-sm font-body font-medium italic select-none cursor-pointer
                          bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600
                          bg-clip-text text-transparent
                          opacity-80 hover:opacity-100
                          tracking-wide
                          transition-all duration-300 ease-out text-center"
              >
                🎬 Tap to Play / Pause
              </p>

            </div>
          </div>
        ) : null}
      </motion.div>

      {/* TEXT SECTION */}
      <div className="max-w-[500px] text-center lg:text-left">
        <motion.h3 
          className="font-heading text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="font-body mt-5 text-sm md:text-[15px] text-stone-600 dark:text-stone-300 text-justify leading-[1.9] tracking-[0.01em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {project.description}
        </motion.p>

        <motion.ul 
          className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {project.tech.map((t) => (
            <li
              key={t}
              className="font-body px-3.5 py-1.5 rounded-full bg-stone-100/80 text-stone-700 text-xs md:text-sm ring-1 ring-stone-200/80 dark:bg-stone-800/50 dark:text-stone-300 dark:ring-stone-700/50 transition-all duration-300 hover:bg-amber-50 hover:ring-amber-300/50 hover:text-amber-700 dark:hover:bg-amber-900/20 dark:hover:text-amber-400"
            >
              {t}
            </li>
          ))}
        </motion.ul>

        <motion.div 
          className="mt-8 flex gap-3 flex-wrap justify-center lg:justify-start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 py-2.5 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-heading text-xs md:text-sm font-medium tracking-wide shadow-lg shadow-stone-900/15 dark:shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View Code</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/90 text-stone-800 font-heading text-xs md:text-sm font-medium tracking-wide ring-1 ring-stone-200/80 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:ring-amber-400/50 dark:bg-stone-800/80 dark:text-white dark:ring-stone-700/50 dark:hover:ring-amber-500/30 transition-all duration-300"
            >
              Live Demo
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;