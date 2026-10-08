import { Link } from "react-router-dom";
import { ArrowLeft, Download, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import useTheme from "../ui/useTheme";
import ThemeToggle from "../ui/ThemeToggle";
import Reveal from "../ui/Reveal";
import {
  links, about, skillGroups, experience, featuredProject, infraProjects, achievements, education,
} from "../data/profile";

function Section({ label, title, children }) {
  return (
    <section className="border-t border-line py-14">
      <Reveal className="mb-8">
        <p className="eyebrow mb-3">{label}</p>
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

const Bullets = ({ items }) => (
  <ul className="space-y-3 text-sm text-muted">
    {items.map((b, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
        <span>
          {b.bold ? <><span className="font-medium text-fg">{b.bold}</span>{b.text}</> : b}
        </span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-1.5">{items.map(s => <span key={s} className="chip">{s}</span>)}</div>
);

export default function Resume() {
  const [theme, toggleTheme] = useTheme();

  const contact = [
    { icon: SiGmail, label: links.email, href: `mailto:${links.email}` },
    { icon: null, label: links.phone, href: `tel:${links.phone.replace(/\s/g, "")}` },
    { icon: FaLinkedin, label: "LinkedIn", href: links.linkedin },
    { icon: FaGithub, label: "GitHub", href: links.github },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
        <div className="wrap flex h-16 max-w-4xl items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
            <ArrowLeft size={15} /> Portfolio
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a href={links.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2">
              <Download size={14} /> Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="wrap max-w-4xl pb-20 pt-32">
        <Reveal>
          <p className="eyebrow mb-4">Curriculum Vitae</p>
          <h1 className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.98] tracking-tight">
            Mugil <em className="text-accent">Muraleedharan</em>
          </h1>
          <p className="mt-4 text-lg text-muted">Software Engineer · Full Stack · Data Engineering · Founder, Socionn</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {contact.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2">
                {Icon && <Icon size={14} />} {label}
              </a>
            ))}
          </div>
          <p className="card mt-10 p-6 text-[15px] leading-relaxed text-muted md:p-8">{about.summary}</p>
        </Reveal>

        <div className="mt-16">
          <Section label="Capabilities" title="Technical skills">
            <div className="divide-y divide-line">
              {skillGroups.map(g => (
                <div key={g.label} className="grid gap-3 py-4 md:grid-cols-12">
                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-faint md:col-span-3 md:pt-1.5">{g.label}</h3>
                  <div className="md:col-span-9"><Chips items={g.skills} /></div>
                </div>
              ))}
            </div>
          </Section>

          <Section label="Work" title="Professional experience">
            <div className="space-y-6">
              {experience.map(job => (
                <Reveal key={job.company} className="card p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-medium">{job.role}</h3>
                      <p className="mt-1 text-sm text-muted">
                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                          {job.company} <ArrowUpRight size={12} />
                        </a> · {job.type}
                      </p>
                    </div>
                    <span className="chip">Production · Live</span>
                  </div>
                  <div className="my-5"><Chips items={job.stack} /></div>
                  <p className="mb-5 text-sm italic text-muted">{job.description}</p>
                  <Bullets items={job.bullets} />
                </Reveal>
              ))}

              <Reveal className="card p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-medium">{featuredProject.title}</h3>
                    <p className="text-sm text-muted">{featuredProject.subtitle}</p>
                  </div>
                  <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-1.5">Live demo <ArrowUpRight size={13} /></a>
                </div>
                <div className="my-5"><Chips items={featuredProject.stack} /></div>
                <Bullets items={featuredProject.bullets} />
              </Reveal>
            </div>
          </Section>

          <Section label="Systems & pipelines" title="Backend & infrastructure">
            <div className="space-y-6">
              {infraProjects.map(p => (
                <Reveal key={p.title} className="card p-6 md:p-8">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <div className="my-4"><Chips items={p.stack} /></div>
                  <Bullets items={p.bullets} />
                </Reveal>
              ))}
            </div>
          </Section>

          <Section label="Impact" title="Key achievements">
            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map(a => (
                <Reveal key={a.label} className="card flex gap-4 p-5">
                  <span className="font-display min-w-[4.5rem] text-3xl text-accent">{a.value}</span>
                  <div>
                    <p className="text-sm font-medium">{a.label}</p>
                    <p className="mt-0.5 text-xs text-muted">{a.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section label="Academic background" title="Education">
            <div className="space-y-4">
              {education.map(e => (
                <Reveal key={e.degree} className="card flex flex-wrap items-center justify-between gap-3 p-6">
                  <div>
                    <h3 className="text-lg font-medium">{e.degree}</h3>
                    <p className="text-sm text-muted">{e.institution} · {e.location}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-mono text-faint">{e.period}</span>
                    <span className={`chip ${e.status === "In Progress" ? "!border-accent/40 !text-accent" : ""}`}>{e.status}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>

          <Reveal className="card mt-6 p-8 text-center md:p-12">
            <p className="eyebrow mb-3">Open to opportunities</p>
            <h2 className="font-display text-3xl md:text-4xl">Let's build something extraordinary</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Whether it's a senior engineering role, a technical co-founder position, or a challenging product - I'm ready to own it from day one.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={links.emailCompose} target="_blank" rel="noopener noreferrer" className="btn-primary">Get in touch</a>
              <a href={links.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Download size={14} /> Download PDF</a>
              <Link to="/" className="btn-ghost"><ArrowLeft size={14} /> View portfolio</Link>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
