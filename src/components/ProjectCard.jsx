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
      className={`flex flex-col lg:flex-row items-center justify-center py-16 border-b border-slate-200/60 dark:border-white/10 gap-12 ${
        mirror ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* MEDIA */}
      <div className="flex flex-col items-center justify-center w-full lg:w-[50%] xl:w-[55%]">
        {project.images ? (
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="w-[90%] max-w-[700px] rounded-2xl shadow-lg"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`${project.title}-${i}`}
                  className="w-[90%] h-auto max-h-[550px] object-contain bg-black rounded-2xl mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : project.video ? (
          <div className="relative flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto bg-cardLight/90 dark:bg-[#1b1b1b]/80 rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/80 dark:ring-white/10 p-[4px] md:p-[6px] aspect-video">
            <video
              ref={vidRef}
              src={project.video}
              poster={project.cover}
              preload="auto"
              className={`w-full aspect-video max-h-[720px] object-contain md:object-cover rounded-[18px] transition-all duration-500 hover:scale-[1.02]
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
                    "drop-shadow(0 0 10px rgba(0, 81, 211, 0.92))",
                    "drop-shadow(0 0 18px rgba(125,211,252,0.8))",
                    "drop-shadow(0 0 0px rgba(0,0,0,0))",
                  ],
                }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-black"
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
              className="mt-1 text-xs sm:text-sm text-sky-500/90 font-normal italic opacity-80 hover:opacity-100 transition cursor-pointer select-none"
            >
              🎬 Tap to Play / Pause
            </p>
          </div>
        ) : null}
      </div>

      {/* TEXT */}
      <div className="max-w-[480px] text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold">
          {project.title}
        </h3>
        <p className="mt-4 text-sm md:text-base text-slate-600 dark:text-white/80 text-justify leading-[1.8] tracking-[0.01em]">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
          {project.tech.map((t) => (
            <li
              key={t}
              className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs md:text-sm ring-1 ring-slate-200 dark:bg-white/5 dark:text-white/80 dark:ring-white/10"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3 flex-wrap justify-center lg:justify-start">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-black text-white text-xs md:text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all"
            >
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/80 text-slate-900 text-xs md:text-sm font-medium ring-1 ring-slate-200 shadow-sm hover:shadow-md hover:-translate-y-[1px] dark:bg-white/10 dark:text-white dark:ring-white/20 transition-all"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
