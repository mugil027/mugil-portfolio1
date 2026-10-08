import { ArrowUpRight } from "lucide-react";
import Reveal, { SectionHead } from "../ui/Reveal";
import { experience, education } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="wrap">
        <SectionHead index="02" label="Experience" title="Experience & education" />

        {experience.map(job => (
          <Reveal key={job.company} className="card p-6 md:p-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{job.role}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                  <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                    {job.company} <ArrowUpRight size={13} />
                  </a>
                  <span aria-hidden>·</span> {job.type}
                </p>
              </div>
              <p className="font-mono text-xs text-faint md:pt-2">{job.period} · Production · Live</p>
            </div>

            <p className="mt-6 max-w-3xl text-muted">{job.description}</p>

            <ul className="mt-8 divide-y divide-line border-y border-line">
              {job.bullets.map((b, i) => (
                <li key={i} className="grid gap-1 py-4 md:grid-cols-12 md:gap-8">
                  <span className="text-sm font-medium md:col-span-5">{b.bold}</span>
                  <span className="text-sm text-muted md:col-span-7">{b.text.replace(/^ - /, "")}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {job.stack.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </Reveal>
        ))}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06} className="card flex flex-col justify-between gap-6 p-6">
              <div>
                <p className="eyebrow mb-3">Education</p>
                <h3 className="text-lg font-medium">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted">{e.institution} · {e.location}</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-faint">{e.period}</span>
                <span className={`chip ${e.status === "In Progress" ? "!border-accent/40 !text-accent" : ""}`}>{e.status}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
