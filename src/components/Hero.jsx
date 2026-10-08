import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import portrait from "../assets/Mypic.jpeg";
import { links, roles, heroBio, heroMetrics } from "../data/profile";

const socials = [
  { href: links.github, label: "GitHub", icon: FaGithub },
  { href: links.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: links.emailCompose, label: "Email", icon: SiGmail },
  { href: links.instagram, label: "Instagram", icon: FaInstagram },
];

const rise = (i) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="top" className="relative bg-[#0a1a33] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(70% 90% at 85% 10%, rgba(120,170,255,0.22), transparent 60%)" }} />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="wrap relative grid items-center gap-12 pb-44 pt-36 lg:grid-cols-12 lg:pb-52">
        <div className="lg:col-span-7">
          <motion.p {...rise(0)} className="mb-6 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.p>

          <motion.h1 {...rise(1)} className="font-display text-[clamp(2.75rem,6.5vw,5.25rem)] font-medium leading-[1.02] tracking-tight">
            Mugil Muraleedharan
          </motion.h1>

          <motion.ul {...rise(2)} className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-base text-[#9cc0ff] md:text-lg" aria-label="Roles">
            {roles.map((r, i) => (
              <li key={r} className="flex items-center gap-3">
                {r}{i < roles.length - 1 && <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden />}
              </li>
            ))}
          </motion.ul>

          <motion.p {...rise(3)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{heroBio}</motion.p>

          <motion.div {...rise(4)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn bg-white text-[#0a1a33] hover:bg-white/90">View selected work <ArrowDown size={15} /></a>
            <Link to="/resume" className="btn border border-white/30 text-white hover:bg-white/10">Resume <ArrowUpRight size={15} /></Link>
            <div className="ml-2 flex items-center gap-1">
              {socials.map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...rise(2)} className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-white/15" aria-hidden />
            <img src={portrait} alt="Portrait of Mugil Muraleedharan" width="1639" height="2000"
              className="relative aspect-[4/5] w-full rounded-xl object-cover object-[50%_20%]" />
            <div className="absolute -bottom-5 left-5 right-5 rounded-lg bg-white px-5 py-3.5 text-[#0a1a33] shadow-xl">
              <p className="text-sm font-semibold">Founder, Socionn</p>
              <p className="text-xs text-[#4a5568]">MSc Big Data Analytics · Bengaluru, India</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics strip */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
        <div className="wrap">
          <dl className="grid grid-cols-2 divide-line overflow-hidden rounded-xl border border-line bg-bg text-fg shadow-[0_20px_50px_-20px_rgba(10,26,51,0.45)] md:grid-cols-4 md:divide-x">
            {heroMetrics.map((m, i) => (
              <div key={m.label} className={`px-6 py-5 ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i % 2 ? "border-l border-line md:border-l-0" : ""}`}>
                <dd className="font-display text-3xl font-medium tracking-tight text-accent md:text-4xl">{m.value}</dd>
                <dt className="mt-1 text-sm font-medium">{m.label}</dt>
                <p className="text-xs text-faint">{m.sub}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
