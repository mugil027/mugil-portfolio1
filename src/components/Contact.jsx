import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Reveal from "../ui/Reveal";
import { links, contactPitch } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-line">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-4">06 — Contact · Let's Connect</p>
          <h2 className="font-display text-[clamp(2.5rem,6.5vw,5rem)] font-medium leading-[1.02] tracking-tight">
            Ready to <em className="text-accent">build</em> something?
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted">{contactPitch}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          <a href={links.emailCompose} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {links.email} <ArrowUpRight size={15} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FaLinkedin size={15} /> LinkedIn</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FaGithub size={15} /> GitHub</a>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FaInstagram size={15} /> Instagram</a>
        </Reveal>

        <Reveal delay={0.15} as="dl" className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          {[
            ["Location", "India"],
            ["Email", links.email],
            ["Phone", links.phone],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow mb-1.5">{k}</dt>
              <dd className="text-sm">{v}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
