import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* ---------- Animated Heading ---------- */}
        <motion.div
          className="text-center md:text-left mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-semibold leading-snug whitespace-nowrap overflow-hidden text-ellipsis"
            initial={{ backgroundPositionX: "200%" }}
            whileInView={{ backgroundPositionX: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              backgroundImage:
                "linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Check out my recent projects and interactive web apps —{" "}
            <br className="hidden md:block" />
            a glimpse into what I love building.
          </motion.h2>

          {/* ---------- Gradient Line Animation ---------- */}
          <motion.div className="relative mt-6 flex justify-start">
            <motion.div
              className="absolute left-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>

        {/* ---------- Project Cards ---------- */}
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} mirror={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
