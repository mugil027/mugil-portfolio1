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
  const vidRef = useRef(null);

  // 🔹 Preload video for smoother playback
  useEffect(() => {
    if (project.video) {
      const preload = document.createElement("video");
      preload.src = project.video;
      preload.preload = "auto";
    }
  }, [project.video]);

  // 🔹 Toggle play/pause
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

    // 👇 Brief play/pause icon animation
    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 800);
  };

  return (
    <motion.article
      className={`flex flex-col lg:flex-row items-center justify-center py-20 border-b border-white/20 gap-12 ${
        mirror ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ---------- MEDIA SECTION ---------- */}
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
            className="w-[90%] max-w-[700px] rounded-2xl"
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
          <div className="relative flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto bg-[#1b1b1b]/70 rounded-[25px] shadow-[0_0_40px_rgba(255,255,255,0.15)] ring-1 ring-white/10 p-[4px] md:p-[6px]">
            <video
              ref={vidRef}
              src={project.video}
              preload="auto"
              className="w-full h-auto object-contain rounded-[20px] transition-transform duration-500 hover:scale-[1.02]"
              playsInline
              controls={true}
              controlsList="nodownload noremoteplayback"
              onClick={handleToggle}
            />

            {/* 🔘 Play / Pause Icon */}
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
                    // ⏸️ Pause icon (black center, glowing edge)
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-20 h-20 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                    ) : (
                    // ▶️ Play icon (black center, glowing edge)
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-20 h-20 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    )}
                </motion.div>
                )}



            {/* Caption */}
            <p
              onClick={handleToggle}
              className="mt-4 text-lg text-[#00B4DB] font-medium tracking-wide italic opacity-90 hover:opacity-100 transition cursor-pointer select-none"
            >
              🎬 Tap to Play / Pause the Video
            </p>
          </div>


        ) : null}
      </div>

      {/* ---------- TEXT SECTION ---------- */}
      <div className="max-w-[480px] text-center lg:text-left">
        <h3 className="text-3xl md:text-4xl font-semibold">{project.title}</h3>
        <p className="mt-4 text-white/80 text-justify leading-[1.8] tracking-[0.02em]">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
          {project.tech.map((t) => (
            <li
              key={t}
              className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm ring-1 ring-white/10"
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
              className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium"
            >
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/10 ring-1 ring-white/20 text-sm"
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
