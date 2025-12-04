import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 py-24 bg-gradient-to-b from-transparent to-slate-100/80 dark:to-slate-900/60"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center md:text-left mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Projects
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
            Recent work & interactive web apps —
            <span className="block text-slate-500 dark:text-slate-300 text-base font-normal mt-1">
              a glimpse into what I love building.
            </span>
          </h2>

          <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-300/80 dark:via-white/15 to-transparent" />
        </motion.div>

        {/* Project Cards */}
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} mirror={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
