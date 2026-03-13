import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const statsData = [
  { value: 10, suffix: "K+", label: "Concurrent Users", sub: "<200ms p95 latency" },
  { value: 99.9, suffix: "%", label: "Platform Uptime", sub: "6 months continuous production" },
  { value: 100, suffix: "K+", label: "Daily API Requests", sub: "Across all services" },
  { value: 70, suffix: "%", label: "DB Load Reduction", sub: "Redis + in-process LRU" },
  { value: 500, suffix: "+", label: "Video Uploads/Day", sub: "FFmpeg + HLS/DASH pipeline" },
  { value: 5, suffix: "K+", label: "Concurrent Chat Sessions", sub: "<50ms delivery latency" },
  { value: 90, suffix: "%", label: "Manual Processing Cut", sub: "50K+ daily ELT transactions" },
  { value: 92, suffix: "%", label: "OCR Field Accuracy", sub: "OCR + LLM extraction pipeline" },
  { value: 300, suffix: "%", label: "Throughput Boost", sub: "Kafka 8-partition architecture" },
  { value: 0, suffix: "", label: "Critical Vulnerabilities", sub: "Full security review passed" },
];

const CounterValue = ({ target, suffix, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const isDecimal = !Number.isInteger(target);
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
      className="relative group rounded-2xl bg-white dark:bg-[#0F1E30]/80 border border-stone-200 dark:border-stone-800/50 p-6 hover:border-blue-500/50 dark:hover:border-blue-600/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/[0.03] group-hover:to-blue-500/[0.03] transition-all duration-400 rounded-2xl pointer-events-none" />
      <div className="relative">
        <div className="font-display text-4xl md:text-5xl font-semibold mb-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
          <CounterValue target={stat.value} suffix={stat.suffix} isInView={isInView} />
        </div>
        <p className="font-heading text-sm font-semibold text-stone-800 dark:text-stone-100 mb-1">
          {stat.label}
        </p>
        <p className="font-body text-xs text-stone-500 dark:text-stone-500 leading-relaxed">
          {stat.sub}
        </p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 bg-[#E8F0FE] dark:bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-stone-800 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-stone-800 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-14">
          <motion.p
            className="font-body text-[11px] uppercase tracking-[0.4em] text-blue-700 dark:text-blue-400 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            By the Numbers
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-800 dark:text-stone-100"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Key{" "}
            <span className="font-medium bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 font-body text-stone-500 dark:text-stone-400 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Real numbers from production systems - every metric earned through engineering, not estimation.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {statsData.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
