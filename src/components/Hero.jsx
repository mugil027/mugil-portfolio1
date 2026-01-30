import { motion } from "framer-motion";
import mugilPhoto from "../assets/Mypic.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-16">
      {/* Premium Background with subtle texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6] via-white to-[#f5f3ef] dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#141414]" />
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNyIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]" />
        {/* Elegant accent glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 via-transparent to-transparent dark:from-amber-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* LEFT: Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="font-body text-[11px] uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Portfolio · Data Engineering · AI
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
            <span className="text-stone-800 dark:text-stone-100">Welcome To</span>{" "}
            <motion.span 
              className="block mt-2 font-medium bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              My Portfolio
            </motion.span>
          </h1>

          <motion.p 
            className="font-body mt-6 text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-xl md:max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            An Aspiring Data Engineer leveraging AI and analytics to solve
            complex problems with precision and creativity.
          </motion.p>

          <motion.p 
            className="font-display mt-4 text-sm md:text-base text-stone-500 dark:text-stone-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building intelligent systems that merge AI, creativity, and
            precision.
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-7 py-3 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-heading text-sm font-medium tracking-wide shadow-lg shadow-stone-900/20 dark:shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Projects</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-stone-300 dark:border-stone-700 font-heading text-sm font-medium tracking-wide text-stone-700 dark:text-stone-200 bg-white/60 dark:bg-stone-900/60 backdrop-blur-sm hover:border-amber-500/50 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Profile Card */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md">
            <div className="relative rounded-[32px] bg-white/90 dark:bg-[#141414]/95 border border-stone-200/80 dark:border-stone-800/50 p-10 flex flex-col items-center gap-6 shadow-[0_25px_80px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              
              {/* Subtle inner texture */}
              <div className="absolute inset-0 rounded-[32px] opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNyIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]" />
              
              {/* Premium DP with gold border - glow removed */}
              <div className="relative">
                <div className="h-44 w-44 rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 p-[3px] shadow-lg shadow-amber-500/10">
                  <div className="h-full w-full rounded-full overflow-hidden bg-stone-900/90">
                    <img
                      src={mugilPhoto}
                      alt="Mugil M"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center space-y-2 relative z-10">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
                  MUGIL M
                </h2>

                <p className="font-body text-[12px] uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
                  Aspiring Data Engineer
                </p>

                <p className="font-display text-[22px] font-semibold tracking-wide bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent">
                  Founder of Socionn
                </p>

                <div className="mt-3 flex flex-col items-center gap-1.5 md:flex-row md:justify-center md:gap-4 text-[11px] text-stone-400 dark:text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-amber-500/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 4h20v16H2V4zm10 9L3.5 6.5h17L12 13z" />
                    </svg>
                    mugilwork27@gmail.com
                  </span>

                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-amber-500/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8a15.4 15.4 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.36 2.3.56 3.6.56a1 1 0 011 1V21a1 1 0 01-1 1C9.4 22 2 14.6 2 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.5.6 3.6a1 1 0 01-.25 1l-2.25 2.2z"/>
                    </svg>
                    +91 9880451553
                  </span>
                </div>
              </div>

              {/* Elegant Line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 dark:via-amber-500/20 to-transparent" />

              {/* Bio */}
              <p className="font-body text-sm text-stone-600 dark:text-stone-300 text-center leading-relaxed max-w-sm relative z-10">
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