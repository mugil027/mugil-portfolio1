import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2021",
    title: "BSc Computer Science",
    subtitle: "St. Joseph's College, Bengaluru",
    description:
      "Graduated with Computer Science fundamentals — algorithms, data structures, and software engineering principles that became the foundation of everything built since.",
    tag: "Education",
    tagClass: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-800/30",
    nodeGradient: "from-blue-500 to-blue-700",
    icon: "graduation",
  },
  {
    year: "2024",
    title: "MSc Big Data Analytics",
    subtitle: "St. Joseph's University, Bengaluru · Real-Time Engineering",
    description:
      "Joined MSc in Big Data Analytics and immediately started shipping production-grade real-time applications — an AI-powered email client with LLM function calling & Gmail API, and a full-stack Expense Tracker with JWT auth, automated email alerts, and budget analytics.",
    tag: "Education · Engineering",
    tagClass: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/30",
    nodeGradient: "from-purple-500 to-purple-700",
    icon: "brain",
  },
  {
    year: "2024",
    title: "Data Engineering & AI Pipelines",
    subtitle: "ELT · Kafka · OCR + LLM · Air Traffic · Analytics",
    description:
      "Built a suite of production data systems: automated ELT pipeline (AWS S3 → Snowflake, 50K+ daily transactions, Airflow 12+ DAGs, dbt 3-layer star schema); real-time Kafka air traffic monitor (10K+ flight records/min, sub-100ms, 300% throughput via 8-partition strategy); Land Deed Scrutinizer (OCR + LLaMA3 LLM, 500+ docs/day, 92% field-level accuracy, 85% manual entry reduction); and Bird Species CNN Classifier (DenseNet121, transfer learning).",
    tag: "Data Engineering · AI",
    tagClass: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/50 dark:border-cyan-800/30",
    nodeGradient: "from-cyan-500 to-teal-600",
    icon: "data",
  },
  {
    year: "2025",
    title: "Founded Socionn",
    subtitle: "Sole Architect · Full-Stack Social Media Platform",
    description:
      "Founded and solo-engineered Socionn — a production-grade social media platform with full backend, web, and mobile apps. Designed service boundaries across feeds, chat, notifications, media, and auth. Built real-time WebSocket messaging (5K+ concurrent sessions, <50ms latency), async FFmpeg video pipeline (500+ uploads/day, HLS/DASH), 25+ table PostgreSQL schema, multi-layer Redis caching (70% DB load reduction), OAuth2, rate limiting, and zero-downtime Docker CI/CD — supporting 10K+ concurrent users and 100K+ daily API requests at <200ms p95.",
    tag: "Founder · Full Stack",
    tagClass: "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-700/30",
    nodeGradient: "from-amber-500 to-yellow-500",
    highlight: true,
    icon: "star",
  },
  {
    year: "2026",
    title: "Socionn Launches on Android & iOS",
    subtitle: "Live on Play Store & App Store · Scaling · Full Stack",
    description:
      "Socionn goes live on both Android (Google Play) and iOS (App Store) — sole-shipped across Flutter, Kotlin, and Swift. Currently scaling the platform, completing MSc in Big Data Analytics, and continuously building AI-integrated full-stack systems.",
    tag: "Current · Mobile · Scaling",
    tagClass: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200/50 dark:border-rose-800/30",
    nodeGradient: "from-rose-500 to-rose-700",
    isCurrent: true,
    icon: "rocket",
  },
];

const icons = {
  graduation: (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  brain: (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
    </svg>
  ),
  data: (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  rocket: (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

const CardContent = ({ milestone, align }) => (
  <div
    className={`relative rounded-2xl bg-white dark:bg-[#141414]/90 border ${
      milestone.highlight
        ? "border-amber-300 dark:border-amber-700/50 shadow-[0_0_30px_rgba(212,168,40,0.12)]"
        : "border-stone-200 dark:border-stone-800/50"
    } p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)]`}
  >
    {milestone.highlight && (
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/80 to-yellow-50/40 dark:from-amber-500/5 dark:to-yellow-500/3 pointer-events-none" />
    )}
    <div className="relative">
      <div className={`flex items-center gap-2 mb-3 ${align === "right" ? "justify-end" : "justify-start"}`}>
        <span className={`font-body text-[10px] uppercase tracking-[0.3em] px-2.5 py-1 rounded-full ${milestone.tagClass}`}>
          {milestone.tag}
        </span>
      </div>
      <span className={`font-display text-5xl font-light text-stone-300 dark:text-stone-800 block mb-1 ${align === "right" ? "text-right" : "text-left"}`}>
        {milestone.year}
      </span>
      <h3
        className={`font-heading text-xl font-bold mb-1 ${
          milestone.highlight
            ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent"
            : "text-stone-900 dark:text-white"
        } ${align === "right" ? "text-right" : "text-left"}`}
      >
        {milestone.title}
      </h3>
      <p className={`font-body text-sm font-medium text-amber-700 dark:text-amber-400/80 mb-3 ${align === "right" ? "text-right" : "text-left"}`}>
        {milestone.subtitle}
      </p>
      <p className={`font-body text-sm text-stone-600 dark:text-stone-300 leading-relaxed ${align === "right" ? "text-right" : "text-left"}`}>
        {milestone.description}
      </p>
    </div>
  </div>
);

const TimelineItem = ({ milestone, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Mobile layout */}
      <div className="flex md:hidden gap-5 items-start">
        <div className="relative flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            className={`relative w-11 h-11 rounded-full bg-gradient-to-br ${milestone.nodeGradient} flex items-center justify-center shadow-xl z-10 flex-shrink-0`}
          >
            {icons[milestone.icon]}
            {milestone.isCurrent && (
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white dark:border-stone-900 animate-pulse" />
            )}
          </motion.div>
        </div>
        <motion.div
          className="flex-1 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <CardContent milestone={milestone} align="left" />
        </motion.div>
      </div>

      {/* Desktop layout: alternating */}
      <div className="hidden md:grid grid-cols-[1fr_80px_1fr] gap-6 items-center">
        {/* Left card slot */}
        <div className="flex justify-end">
          {isLeft && (
            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <CardContent milestone={milestone} align="right" />
            </motion.div>
          )}
        </div>

        {/* Center node */}
        <div className="flex justify-center relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${milestone.nodeGradient} flex items-center justify-center shadow-xl z-10`}
          >
            {icons[milestone.icon]}
            {milestone.isCurrent && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-stone-900 animate-pulse" />
            )}
          </motion.div>
        </div>

        {/* Right card slot */}
        <div className="flex justify-start">
          {!isLeft && (
            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <CardContent milestone={milestone} align="left" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const CareerTimeline = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden bg-[#f0eeea] dark:bg-transparent">
      {/* Section boundary lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-stone-800 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-stone-800 to-transparent" />
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/15 via-transparent to-transparent dark:from-amber-800/8 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div ref={sectionRef} className="text-center mb-20">
          <motion.p
            className="font-body text-[11px] uppercase tracking-[0.4em] text-amber-700 dark:text-amber-400 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            The Journey
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-800 dark:text-stone-100"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Career{" "}
            <span className="font-medium bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent">
              Roadmap
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 font-body text-stone-500 dark:text-stone-400 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            From BSc foundations to founding a production platform — every milestone that shaped the engineer I am today.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden md:block" style={{ transform: "translateX(-50%)", width: "2px" }}>
            <div className="h-full w-full bg-gradient-to-b from-transparent via-stone-300 dark:via-stone-700 to-transparent" />
          </div>
          {/* Vertical left line — mobile */}
          <div className="absolute left-5 top-0 bottom-0 md:hidden" style={{ width: "2px" }}>
            <div className="h-full w-full bg-gradient-to-b from-transparent via-stone-300 dark:via-stone-700 to-transparent" />
          </div>

          <div className="space-y-10 md:space-y-14">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
