import { useState } from "react";
import Reveal, { SectionHead } from "../ui/Reveal";
import { skillGroups, proficiency } from "../data/profile";

const CATS = ["All", ...new Set(proficiency.map(p => p.cat))];

export default function Skills() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? proficiency : proficiency.filter(p => p.cat === cat);

  return (
    <section id="skills" className="section border-t border-line bg-surface">
      <div className="wrap">
        <SectionHead index="03" label="Skills · Arsenal" title="Tech stack."
          intro="Tools and technologies I've mastered in production environments." />

        <Reveal className="card p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-medium">Core proficiency</h3>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by category">
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
                  className={`rounded border px-3 py-1 text-xs transition ${cat === c ? "border-accent bg-accent text-[color:var(--on-accent)]" : "border-line text-muted hover:text-fg"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <ul className="grid gap-x-12 gap-y-5 md:grid-cols-2">
            {shown.map(s => (
              <li key={s.name}>
                <div className="mb-1.5 flex items-baseline justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="font-mono text-xs text-faint">{s.cat} · {s.level}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-raised" role="meter" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={s.name}>
                  <div className="h-full rounded-full bg-accent transition-all duration-700" style={{ width: `${s.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.03} className="border-t border-line py-6">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-faint">{g.label}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {g.skills.map(s => <li key={s} className="chip !bg-bg !text-fg">{s}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
