import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub, FaGooglePlay, FaApple } from "react-icons/fa";
import Reveal, { SectionHead } from "../ui/Reveal";
import { projects } from "../data/projects";
import { featuredProject, infraProjects } from "../data/profile";

const CATEGORIES = ["All", "Full Stack", "Data Engineering", "Mobile", "AI / ML"];

function categorize(p) {
  const t = p.tech.join(" ").toLowerCase();
  const tags = [];
  if (/(next|react|fastapi|node|flask)/.test(t)) tags.push("Full Stack");
  if (/(kafka|airflow|snowflake|dbt)/.test(t)) tags.push("Data Engineering");
  if (/(flutter|kotlin|swift)/.test(t)) tags.push("Mobile");
  if (/(tensorflow|llm|ai\/|groq|machine learning)/.test(t)) tags.push("AI / ML");
  return tags;
}

const thumb = (p) => (p.images && p.images[0]) || p.cover;

function ProjectLinks({ p, className = "" }) {
  const items = [
    p.demo && { href: p.demo, label: "Live demo", icon: ArrowUpRight },
    p.github && { href: p.github, label: "Source", icon: FaGithub },
    p.appLinks?.android && { href: p.appLinks.android, label: "Google Play", icon: FaGooglePlay },
    p.appLinks?.ios && { href: p.appLinks.ios, label: "App Store", icon: FaApple },
  ].filter(Boolean);
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map(({ href, label, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2">
          <Icon size={14} /> {label}
        </a>
      ))}
    </div>
  );
}

function Modal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm md:items-center md:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={project.title}
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl border border-line bg-surface md:rounded-2xl">
        <button onClick={onClose} aria-label="Close"
          className="sticky top-4 z-10 float-right mr-4 mt-4 grid h-9 w-9 place-items-center rounded-full border border-line bg-bg/80 backdrop-blur hover:bg-raised">
          <X size={16} />
        </button>

        {project.video ? (
          <video src={project.video} poster={project.cover} controls autoPlay muted loop playsInline preload="metadata"
            className="aspect-video w-full bg-black object-contain" />
        ) : (
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto bg-raised p-4">
            {project.images?.map((src, i) => (
              <img key={src} src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy"
                className="h-72 w-auto flex-none snap-center rounded-xl border border-line object-cover md:h-96" />
            ))}
          </div>
        )}

        <div className="p-6 md:p-10">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {categorize(project).map(c => <span key={c} className="chip !border-accent/40 !text-accent">{c}</span>)}
          </div>
          <h3 className="font-display text-3xl leading-tight md:text-4xl">{project.title}</h3>
          <p className="mt-5 text-muted">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tech.map(t => <span key={t} className="chip">{t}</span>)}
          </div>
          <ProjectLinks p={project} className="mt-8" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter(p => categorize(p).includes(filter))),
    [filter]
  );

  return (
    <section id="work" className="section border-t border-line">
      <div className="wrap">
        <SectionHead index="04" label="Selected work" title="Systems built with care, scale and craft."
          intro="Production platforms, data pipelines and AI products. Open any project for the full story, demo video and links." />

        <Reveal className="mb-10 flex flex-wrap gap-2" >
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setFilter(c)} aria-pressed={filter === c}
              className={`rounded border px-4 py-1.5 text-sm transition ${filter === c ? "border-accent bg-accent text-[color:var(--on-accent)]" : "border-line text-muted hover:text-fg hover:bg-raised"}`}>
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.button layout key={p.id} onClick={() => setSelected(p)}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.04 }}
                className="card group flex flex-col overflow-hidden text-left transition hover:border-faint">
                <div className="relative aspect-[16/10] overflow-hidden bg-raised">
                  {thumb(p) && (
                    <img src={thumb(p)} alt="" loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]" />
                  )}
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-bg/80 opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow mb-2">{categorize(p)[0] || "Project"}</p>
                  <h3 className="text-lg font-medium leading-snug">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{p.description}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.tech.slice(0, 4).map(t => <span key={t} className="chip">{t}</span>)}
                    {p.tech.length > 4 && <span className="chip">+{p.tech.length - 4}</span>}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Engineering detail: case notes preserved from resume */}
        <div className="mt-24">
          <Reveal className="mb-8">
            <p className="eyebrow mb-3">Engineering notes</p>
            <h3 className="font-display text-3xl">Under the hood</h3>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="card p-6 lg:col-span-2 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-medium">{featuredProject.title}</h4>
                  <p className="text-sm text-muted">{featuredProject.subtitle}</p>
                </div>
                <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">Live demo <ArrowUpRight size={14} /></a>
              </div>
              <ul className="mt-6 grid gap-x-10 gap-y-3 text-sm md:grid-cols-2">
                {featuredProject.bullets.map((b, i) => (
                  <li key={i}><span className="font-medium">{b.bold}</span><span className="text-muted">{b.text}</span></li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-1.5">{featuredProject.stack.map(s => <span key={s} className="chip">{s}</span>)}</div>
            </Reveal>
            {infraProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} className="card p-6 md:p-8">
                <h4 className="text-lg font-medium">{p.title}</h4>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {p.bullets.map((b, j) => <li key={j} className="flex gap-3"><span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />{b}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">{p.stack.map(s => <span key={s} className="chip">{s}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
