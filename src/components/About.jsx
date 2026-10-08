import Reveal, { SectionHead } from "../ui/Reveal";
import { about, journey } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section pt-40 md:pt-48">
      <div className="wrap">
        <SectionHead index="01" label="About / My Chronicle" title="One engineer, end to end." intro="Every system architect has an origin story. Here's mine." />

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="font-display text-2xl leading-snug md:text-3xl">{about.lead}</p>
            <p className="mt-6 text-muted">{about.body}</p>
          </Reveal>

          <ol className="relative lg:col-span-6 lg:col-start-7">
            <span className="absolute bottom-2 left-[5px] top-2 w-px bg-line" aria-hidden />
            {journey.map((j, i) => (
              <Reveal as="li" key={j.year} delay={i * 0.06} className="relative pb-10 pl-9 last:pb-0">
                <span className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 ${j.current ? "border-accent bg-accent" : "border-faint bg-bg"}`} />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-sm text-accent">{j.year}</span>
                  <h3 className="text-lg font-medium">{j.title}</h3>
                  {j.flagship && <span className="chip !border-accent/40 !text-accent">Flagship</span>}
                  {j.current && <span className="chip !border-accent/40 !text-accent">Now</span>}
                </div>
                <p className="mt-0.5 text-sm text-faint">{j.subtitle}</p>
                <p className="mt-3 text-sm text-muted">{j.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {j.tech.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
