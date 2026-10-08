import Reveal, { SectionHead } from "../ui/Reveal";
import { achievements } from "../data/profile";

export default function Impact() {
  return (
    <section id="impact" className="section border-t border-line bg-surface">
      <div className="wrap">
        <SectionHead index="05" label="Impact · By the Numbers" title="Results, in numbers." intro="Production metrics across the platforms and pipelines I've built." />
        <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
          {achievements.map(a => (
            <div key={a.label} className="bg-bg p-6 transition hover:bg-surface">
              <p className="font-display text-5xl font-medium tracking-tight text-accent">{a.value}</p>
              <p className="mt-3 text-sm font-medium">{a.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-faint">{a.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
