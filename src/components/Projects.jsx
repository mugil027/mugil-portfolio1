import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 py-28 bg-gradient-to-b from-transparent via-[#faf9f6]/50 to-[#f5f3ef]/80 dark:via-[#0a0a0a]/50 dark:to-[#0f0f0f]/80"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
      <div className="absolute top-20 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-amber-400/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Premium Heading */}
        <motion.div
          className="text-center md:text-left mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block font-body text-[11px] uppercase tracking-[0.4em] text-amber-600/80 dark:text-amber-400/70 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Selected Work
          </motion.span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] tracking-tight text-stone-800 dark:text-stone-100">
            Recent work & interactive web apps
            <motion.span 
              className="block font-body text-stone-500 dark:text-stone-400 text-base md:text-lg font-normal mt-3 tracking-normal"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              A glimpse into what I love building.
            </motion.span>
          </h2>

          {/* Elegant divider with gold accent */}
          <motion.div 
            className="mt-8 h-px bg-gradient-to-r from-transparent via-amber-500/40 dark:via-amber-400/30 to-transparent max-w-md"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} mirror={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;