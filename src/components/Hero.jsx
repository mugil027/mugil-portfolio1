import { motion } from "framer-motion";
import mugilPhoto from "../assets/Mypic.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col pt-24 pb-16">
      {/* Premium Background with subtle texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6] via-white to-[#f5f3ef] dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#141414]" />
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNyIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]" />
        {/* Elegant accent glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 via-transparent to-transparent dark:from-amber-500/10 blur-3xl rounded-full" />
      </div>

      {/* Hero Section */}
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
            Data Engineer · Backend Architect · Builder
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
            <span className="text-stone-800 dark:text-stone-100">I Build Systems</span>{" "}
            <motion.span 
              className="block mt-2 font-medium bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              From Ground Up
            </motion.span>
          </h1>

          <motion.p 
            className="font-body mt-6 text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-xl md:max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Data Engineer & Backend Engineer who designed, implemented, optimized, 
            and deployed an entire social media mobile application from scratch — 
            every feature, every layer, every system.
          </motion.p>

          <motion.p 
            className="font-display mt-4 text-sm md:text-base text-stone-500 dark:text-stone-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            No templates. No boilerplate. No external team. Just engineering.
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
              
              {/* Premium DP with gold border */}
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
                  Data & Backend Engineer
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

      {/* About Me Section */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 mt-24 md:mt-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.p 
              className="font-body text-[11px] uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About Me
            </motion.p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-800 dark:text-stone-100">
              The Engineer Behind{" "}
              <span className="font-medium bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent">
                Socionn
              </span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Socionn */}
            <motion.div
              className="relative rounded-[24px] bg-white/80 dark:bg-[#141414]/90 border border-stone-200/80 dark:border-stone-800/50 p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-stone-900 dark:text-white">
                  Socionn — Full-Scale Social Media App
                </h3>
              </div>

              <p className="font-body text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                I am the sole architect and engineer behind Socionn, a full-scale social media app 
                built for both Android and iOS, with functionality comparable to Instagram:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Reels system with highly optimized video transcoding pipelines",
                  "Feed ranking, pagination, and efficient data fetching strategies",
                  "Real-time interactions using WebSockets",
                  "Authentication, authorization, and secure APIs",
                  "Backend services, database schema design, indexing & performance tuning",
                  "Media storage, CDN-style delivery, and scalable infrastructure",
                  "Deployment, monitoring, and production optimization"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200/50 dark:border-amber-800/30">
                <p className="font-display text-sm font-medium text-amber-800 dark:text-amber-300 italic text-center">
                  Every backend service, database model, API, and optimization was built by me from the ground up.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Data Engineering */}
            <motion.div
              className="relative rounded-[24px] bg-white/80 dark:bg-[#141414]/90 border border-stone-200/80 dark:border-stone-800/50 p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-stone-900 dark:text-white">
                  Data Engineering Excellence
                </h3>
              </div>

              <p className="font-body text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                On the data side, I design and deliver production-grade data engineering systems:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Cloud ELT platforms using AWS, Snowflake, dbt, and Airflow",
                  "Real-time streaming pipelines with Kafka",
                  "Analytics-ready data modeling and warehouse optimization",
                  "OCR + LLM pipelines converting unstructured documents into structured, queryable datasets"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-700 to-transparent my-6" />

              <div className="space-y-4">
                <p className="font-body text-stone-600 dark:text-stone-300 leading-relaxed">
                  Currently pursuing an <span className="font-medium text-stone-800 dark:text-stone-100">MSc in Big Data Analytics</span> while 
                  continuously building, shipping, and scaling real-world engineering products.
                </p>
                
                <p className="font-display text-base font-semibold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent">
                  I don't just "work with data" or "build features" — I own systems, from design to production.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <p className="font-body text-lg text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
              If you're looking for someone who can take an idea and turn it into a fully working, 
              scalable product — <span className="font-medium text-stone-800 dark:text-stone-100">I'm that engineer.</span>
            </p>

            {/* App Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <p className="font-body text-sm text-stone-500 dark:text-stone-400">
                Check out Socionn — the future of social connection:
              </p>
              <div className="flex gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.socionn.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-heading text-xs font-medium tracking-wide hover:scale-105 transition-transform duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  Android
                </a>
                <a
                  href="https://apps.apple.com/app/6757596007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-heading text-xs font-medium tracking-wide hover:scale-105 transition-transform duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  iOS
                </a>
              </div>
            </div>

            {/* Learn More Link */}
            <a
              href="https://www.socionn.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors duration-300"
            >
              Want to know more about Socionn and its future goals?
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;