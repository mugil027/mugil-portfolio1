import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, Moon, Download, ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript / TypeScript", "SQL", "HTML5", "CSS3"],
    color: "blue",
  },
  {
    label: "Frontend",
    skills: ["React.js & Next.js", "Vue.js & Nuxt.js", "AngularJS", "Tailwind CSS", "Framer Motion", "PWA", "Responsive Design"],
    color: "blue",
  },
  {
    label: "Backend & APIs",
    skills: ["FastAPI", "Node.js (Express)", "RESTful APIs", "GraphQL", "WebSockets", "Microservices", "JWT", "OAuth2", "Rate Limiting"],
    color: "emerald",
  },
  {
    label: "Database & Caching",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis (caching, pub/sub)", "Distributed Systems"],
    color: "purple",
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS (EC2, S3)", "Cloudflare (R2, CDN)", "Docker", "Nginx", "GitHub Actions", "CI/CD"],
    color: "cyan",
  },
  {
    label: "Data Engineering",
    skills: ["Apache Airflow", "dbt", "Snowflake", "Apache Kafka", "ELT / ETL Pipelines", "Power BI"],
    color: "orange",
  },
  {
    label: "Mobile",
    skills: ["Flutter (cross-platform)", "Android (Kotlin)", "iOS (Swift)"],
    color: "pink",
  },
];

const badgeColors = {
  blue: "bg-blue-100/80 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-700/30",
  emerald: "bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-700/30",
  purple: "bg-purple-100/80 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/30",
  cyan: "bg-cyan-100/80 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-700/30",
  orange: "bg-orange-100/80 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 border border-orange-200/60 dark:border-orange-700/30",
  pink: "bg-pink-100/80 dark:bg-pink-900/40 text-pink-800 dark:text-pink-300 border border-pink-200/60 dark:border-pink-700/30",
};

const experience = [
  {
    company: "Socionn",
    companyUrl: "https://www.socionn.com",
    role: "Founding Full Stack Engineer",
    type: "Founder · Sole Architect",
    stack: ["React.js", "Next.js", "FastAPI", "TypeScript", "PostgreSQL", "RESTful APIs", "WebSockets", "Redis", "Docker", "FFmpeg"],
    description: "Sole architect and engineer of a real-time social media platform across web, Android, iOS, backend, and infrastructure. Owned the entire product lifecycle from system design to production operations.",
    bullets: [
      { bold: "10K+ concurrent users · 100K+ daily API requests · <200ms p95 latency", text: " - Architected an end-to-end distributed platform, designing service boundaries across feeds, chat, notifications, media, and authentication domains." },
      { bold: "25+ table PostgreSQL schema", text: " - Modeled and optimized for social graph queries and feed generation at scale." },
      { bold: "70% database load reduction", text: " - Achieved via multi-layer caching (Redis + in-process LRU), enabling 3× traffic spike tolerance." },
      { bold: "5K+ concurrent WebSocket sessions", text: " - Built real-time messaging system with delivery guarantees and <50ms notification latency." },
      { bold: "500+ video uploads/day · 60% buffering reduction", text: " - Engineered async video processing pipeline (FFmpeg + HLS/DASH)." },
      { bold: "99.9% uptime · zero-downtime deployments", text: " - Containerized with Docker and implemented CI/CD pipelines." },
      { bold: "Zero critical vulnerabilities", text: " - Implemented authentication, OAuth2 flows, rate limiting, and abuse protection - passed full security review." },
    ],
  },
];

const featuredProjects = [
  {
    title: "AI-Powered Mail Client",
    subtitle: "Autonomous UI Control via LLM Function Calling",
    demo: "https://mailappfrontend.vercel.app/",
    stack: ["Next.js (TypeScript)", "FastAPI", "Gmail API", "OAuth2", "SSE", "Zustand", "OpenAI Function Calling"],
    bullets: [
      { bold: "Deterministic LLM function-calling pipeline", text: " - enabling natural language → typed UI state transitions." },
      { bold: "Real-time inbox sync", text: " - using Server-Sent Events, Gmail History API, and resilient polling fallback." },
      { bold: "RFC-compliant email threading", text: " - MIME parsing and token auto-refresh for long-lived sessions." },
      { bold: "Finite state machine + action dispatcher", text: " - for single-cycle command execution and idempotent updates." },
      { bold: "OAuth2 authorization flow", text: " - secure token storage and refresh rotation." },
      { bold: "Zustand state management", text: " - optimized to prevent redundant renders and race conditions." },
    ],
  },
];

const infraProjects = [
  {
    title: "E-Commerce Intelligence Analytics System",
    stack: ["Python", "Airflow", "AWS S3", "Snowflake", "dbt", "Docker", "Power BI"],
    bullets: [
      "Architected fully automated ELT pipeline processing 50K+ daily transactions from AWS S3 to Snowflake, reducing manual processing by 90%.",
      "Designed 3-layer dbt transformation architecture (staging → intermediate → marts) with 25+ models implementing star schema for analytics.",
      "Orchestrated workflows using Apache Airflow with 12+ DAGs, implementing task dependencies, retry logic, and SLA monitoring.",
    ],
  },
  {
    title: "Live Air Traffic Monitoring Pipeline",
    stack: ["Apache Kafka", "Python", "FastAPI", "PostgreSQL", "Docker"],
    bullets: [
      "Engineered high-throughput Kafka pipeline processing 10K+ flight telemetry records per minute with sub-100ms latency.",
      "Designed Kafka topic architecture with 8-partition strategy achieving parallel processing and 300% throughput improvement.",
      "Implemented real-time data enrichment (geocoding, airline mapping) using Python consumer groups, transforming raw data to analytics-ready format.",
    ],
  },
  {
    title: "Land Deed Extraction Pipeline (OCR + LLM)",
    stack: ["Python", "FastAPI", "Tesseract OCR", "GPT-4 API", "PostgreSQL"],
    bullets: [
      "Designed multi-stage automated pipeline (ingestion → OCR → cleaning → LLM parsing → validation) processing 500+ documents daily, reducing manual entry by 85%.",
      "Leveraged LLM APIs with engineered prompts to extract structured fields from unstructured OCR text with 92% field-level accuracy.",
    ],
  },
];

const achievements = [
  { value: "10K+", label: "Concurrent Users", desc: "Sole-architected production distributed platform with <200ms p95 latency" },
  { value: "99.9%", label: "Uptime", desc: "Maintained SLA across 6 months of continuous production operation" },
  { value: "70%", label: "DB Load Reduction", desc: "Multi-layer caching (Redis + LRU), enabling 3× traffic spike tolerance" },
  { value: "100K+", label: "Daily API Requests", desc: "Handled at scale across feeds, chat, notifications, media & auth" },
  { value: "500+", label: "Video Uploads/Day", desc: "Async FFmpeg pipeline with HLS/DASH, reducing buffering by 60%" },
  { value: "5K+", label: "Concurrent Chat Sessions", desc: "WebSocket messaging with <50ms delivery latency & guarantees" },
  { value: "90%", label: "Manual Processing Cut", desc: "ELT pipeline processing 50K+ daily transactions (S3 → Snowflake)" },
  { value: "92%", label: "Field-Level Accuracy", desc: "OCR + LLM extraction pipeline processing 500+ documents/day" },
  { value: "300%", label: "Throughput Boost", desc: "Kafka 8-partition architecture for 10K+ flight records/min" },
  { value: "Zero", label: "Critical Vulnerabilities", desc: "Auth, OAuth2, rate limiting & abuse prevention passed security review" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
};

const SectionTitle = ({ label, title, accent }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="mb-10">
      <motion.p
        className="font-body text-[11px] uppercase tracking-[0.4em] text-blue-600/80 dark:text-blue-400/70 mb-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {label}
      </motion.p>
      <motion.h2
        className="font-display text-2xl sm:text-3xl font-light text-stone-800 dark:text-stone-100"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {title}{" "}
        {accent && (
          <span className="font-medium bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
            {accent}
          </span>
        )}
      </motion.h2>
      <motion.div
        className="mt-4 h-px w-16 bg-gradient-to-r from-blue-500 to-blue-400"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.25, duration: 0.6 }}
      />
    </div>
  );
};

// ─── RESUME PAGE ──────────────────────────────────────────────────────────────

const Resume = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  return (
    <main className="font-body min-h-screen bg-[#F0F5FF] text-stone-900 dark:bg-[#070D1A] dark:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F5FF] to-[#E8EFFF] dark:from-[#070D1A] dark:to-[#0A1628]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-blue-200/15 via-transparent to-transparent dark:from-blue-800/10 blur-3xl rounded-full" />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 w-full z-50 py-3 border-b border-stone-200/50 dark:border-stone-800/30 bg-white/80 dark:bg-[#070D1A]/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="group flex items-center gap-3 font-heading font-semibold text-sm tracking-tight text-stone-600 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-stone-900 to-stone-800 text-white dark:from-white dark:to-stone-200 dark:text-stone-900 text-xs font-bold shadow-md">
              MM
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
              Back to Portfolio
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-body font-medium border border-stone-200/80 dark:border-stone-700/50 bg-white/70 dark:bg-stone-900/70 hover:border-blue-400/50 transition-all duration-300"
            >
              {theme === "dark" ? (
                <><Sun className="w-3.5 h-3.5 text-blue-500" /><span>Light</span></>
              ) : (
                <><Moon className="w-3.5 h-3.5 text-blue-600" /><span>Dark</span></>
              )}
            </button>
            <a
              href="/Mugil_M_FE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-heading font-medium tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
          </div>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Name */}
            <p className="font-body text-[11px] uppercase tracking-[0.4em] text-blue-600/80 dark:text-blue-400/70 mb-3">
              Curriculum Vitae
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-stone-800 dark:text-stone-100 leading-[1.05] mb-4">
              Mugil{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
                Muraleedharan
              </span>
            </h1>
            <p className="font-heading text-lg text-stone-500 dark:text-stone-400 tracking-wide mb-8">
              Software Engineer · Full Stack · Data Engineering · Founder, Socionn
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: <SiGmail className="w-3.5 h-3.5" />, label: "mugil272000@gmail.com", href: "mailto:mugil272000@gmail.com" },
                { icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8a15.4 15.4 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.36 2.3.56 3.6.56a1 1 0 011 1V21a1 1 0 01-1 1C9.4 22 2 14.6 2 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.5.6 3.6a1 1 0 01-.25 1l-2.25 2.2z"/></svg>, label: "+91 9880451553", href: "tel:+919880451553" },
                { icon: <FaLinkedin className="w-3.5 h-3.5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/mugil-m-47597a352/" },
                { icon: <FaGithub className="w-3.5 h-3.5" />, label: "GitHub", href: "https://github.com/mugil027" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full font-body text-xs text-stone-600 dark:text-stone-300 bg-white/80 dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-700/40 hover:border-blue-400/50 dark:hover:border-blue-600/30 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-250 shadow-sm"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>

            {/* Summary */}
            <div className="relative rounded-2xl bg-white/80 dark:bg-[#0F1E30]/90 border border-stone-200/70 dark:border-stone-800/40 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="absolute top-0 left-8 w-16 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400" />
              <p className="font-body text-stone-700 dark:text-stone-200 leading-relaxed text-[15px]">
                Software Engineer specializing in{" "}
                <span className="font-medium text-stone-900 dark:text-white">scalable distributed systems</span> and{" "}
                <span className="font-medium text-stone-900 dark:text-white">real-time infrastructure</span>. Sole architect of a production-grade social platform supporting{" "}
                <span className="font-medium text-blue-700 dark:text-blue-400">10K+ concurrent users</span> and{" "}
                <span className="font-medium text-blue-700 dark:text-blue-400">100K+ daily API requests</span> with{" "}
                <span className="font-medium text-blue-700 dark:text-blue-400">&lt;200ms p95 latency</span> and 99.9% uptime. Experienced in modern frontend frameworks including React.js & Next.js, Vue.js & Nuxt.js. Strong in backend architecture using FastAPI and Express, distributed system design, real-time messaging, and cloud-native deployment. Additionally built production ELT/ETL pipelines with Airflow, dbt, Snowflake, and Kafka, processing{" "}
                <span className="font-medium text-blue-700 dark:text-blue-400">100K+ records daily</span> with sub-100ms streaming latency.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-20">

        {/* ── TECHNICAL SKILLS ── */}
        <section>
          <SectionTitle label="Capabilities" title="Technical" accent="Skills" />
          <FadeIn>
            <div className="space-y-5">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: gi * 0.06, duration: 0.55 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-3"
                >
                  <span className="font-heading text-xs font-semibold text-stone-500 dark:text-stone-400 tracking-widest uppercase w-40 flex-shrink-0 pt-1.5">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {group.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: gi * 0.05 + si * 0.03 + 0.1 }}
                        className={`font-body text-xs px-3 py-1.5 rounded-lg ${badgeColors[group.color]}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <section>
          <SectionTitle label="Work" title="Professional" accent="Experience" />
          {experience.map((job, ji) => (
            <FadeIn key={ji} delay={0.05}>
              <div className="relative rounded-2xl bg-white/80 dark:bg-[#0F1E30]/90 border border-blue-300/40 dark:border-blue-700/30 p-8 shadow-[0_15px_50px_rgba(0,0,0,0.07)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl mb-8">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.04] to-transparent pointer-events-none" />
                <div className="relative">
                  {/* Job header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-stone-900 dark:text-white">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors"
                        >
                          {job.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-stone-300 dark:text-stone-700">·</span>
                        <span className="font-body text-xs text-stone-500 dark:text-stone-400">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <span className="font-body text-xs text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800/60 px-3 py-1.5 rounded-full flex-shrink-0">
                      Production · Live
                    </span>
                  </div>

                  {/* Stack chips */}
                  <div className="flex flex-wrap gap-2 mb-6 pb-5 border-b border-stone-100 dark:border-stone-800/60">
                    {job.stack.map((s) => (
                      <span key={s} className="font-body text-[11px] px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-stone-700/40">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-5 italic">
                    {job.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {job.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bi * 0.06, duration: 0.5 }}
                        className="flex items-start gap-3 font-body text-sm text-stone-600 dark:text-stone-300 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 flex-shrink-0" />
                        <span>
                          <span className="font-semibold text-stone-800 dark:text-stone-100">{b.bold}</span>
                          {b.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Featured Projects */}
          {featuredProjects.map((proj, pi) => (
            <FadeIn key={pi} delay={0.08}>
              <div className="relative rounded-2xl bg-white/80 dark:bg-[#0F1E30]/90 border border-stone-200/70 dark:border-stone-800/40 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-stone-900 dark:text-white">
                      {proj.title}
                    </h3>
                    <p className="font-body text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                      {proj.subtitle}
                    </p>
                  </div>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-xs font-heading font-medium border border-blue-200/60 dark:border-blue-700/30 hover:shadow-md transition-all duration-250 flex-shrink-0"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-stone-100 dark:border-stone-800/60">
                  {proj.stack.map((s) => (
                    <span key={s} className="font-body text-[11px] px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-stone-700/40">
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {proj.bullets.map((b, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: bi * 0.05, duration: 0.5 }}
                      className="flex items-start gap-3 font-body text-sm text-stone-600 dark:text-stone-300 leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 flex-shrink-0" />
                      <span>
                        <span className="font-semibold text-stone-800 dark:text-stone-100">{b.bold}</span>
                        {b.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </section>

        {/* ── BACKEND & INFRASTRUCTURE ── */}
        <section>
          <SectionTitle label="Systems & Pipelines" title="Backend &" accent="Infrastructure" />
          <div className="space-y-6">
            {infraProjects.map((proj, pi) => (
              <FadeIn key={pi} delay={pi * 0.05}>
                <div className="relative rounded-2xl bg-white/80 dark:bg-[#0F1E30]/90 border border-stone-200/70 dark:border-stone-800/40 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <div className="mb-4">
                    <h3 className="font-heading text-base font-bold text-stone-900 dark:text-white mb-2">
                      {proj.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((s) => (
                        <span key={s} className="font-body text-[10px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800/70 text-stone-500 dark:text-stone-400 border border-stone-200/50 dark:border-stone-700/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {proj.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-3 font-body text-sm text-stone-600 dark:text-stone-300 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── KEY ACHIEVEMENTS ── */}
        <section>
          <SectionTitle label="Impact" title="Key" accent="Achievements" />
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((a, ai) => (
                <motion.div
                  key={ai}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: ai * 0.05, duration: 0.55 }}
                  className="group flex items-start gap-4 rounded-2xl bg-white/70 dark:bg-[#0F1E30]/80 border border-stone-200/60 dark:border-stone-800/40 p-5 hover:border-blue-400/40 dark:hover:border-blue-600/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="font-display text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                      {a.value}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-stone-800 dark:text-stone-100 mb-0.5">
                      {a.label}
                    </p>
                    <p className="font-body text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── EDUCATION ── */}
        <section>
          <SectionTitle label="Academic Background" title="Education" />
          <div className="space-y-5">
            {[
              {
                degree: "MSc in Big Data Analytics",
                institution: "St. Joseph's University",
                location: "Bengaluru, India",
                period: "2024 – 2026",
                status: "In Progress",
                statusClass: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-700/30",
              },
              {
                degree: "BSc in Computer Science",
                institution: "St. Joseph's College",
                location: "Bengaluru, India",
                period: "2021",
                status: "Completed",
                statusClass: "bg-stone-100 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-stone-700/40",
              },
            ].map((edu, ei) => (
              <FadeIn key={ei} delay={ei * 0.08}>
                <div className="relative rounded-2xl bg-white/80 dark:bg-[#0F1E30]/90 border border-stone-200/70 dark:border-stone-800/40 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-stone-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="font-body text-sm text-stone-600 dark:text-stone-300 mt-1">
                        {edu.institution} · {edu.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="font-body text-sm text-stone-400 dark:text-stone-500">
                        {edu.period}
                      </span>
                      <span className={`font-body text-xs px-3 py-1.5 rounded-full ${edu.statusClass}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <FadeIn>
          <div className="relative rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 dark:from-[#0A1628] dark:via-[#0F1E30] dark:to-[#0A1628] p-10 text-center border border-stone-700/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 pointer-events-none" />
            <div className="relative">
              <p className="font-body text-[11px] uppercase tracking-[0.4em] text-blue-400/70 mb-3">
                Open to Opportunities
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-white mb-4">
                Let's build something{" "}
                <span className="font-medium bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                  extraordinary
                </span>
              </h2>
              <p className="font-body text-stone-400 max-w-lg mx-auto mb-8">
                Whether it's a senior engineering role, a technical co-founder position, or a challenging product - I'm ready to own it from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-heading text-sm font-medium tracking-wide shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <SiGmail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="/Mugil_M_FE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-heading text-sm font-medium tracking-wide border border-white/20 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-heading text-sm font-medium tracking-wide border border-white/20 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  );
};

export default Resume;
