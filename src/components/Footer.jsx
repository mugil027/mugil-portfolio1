import { Link } from "react-router-dom";
import { links } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-col items-center justify-between gap-4 text-sm text-faint md:flex-row">
        <p>© {new Date().getFullYear()} Mugil Muraleedharan. Designed &amp; built by hand.</p>
        <nav className="flex items-center gap-6" aria-label="Footer">
          <Link to="/resume" className="transition hover:text-fg">Resume</Link>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-fg">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-fg">LinkedIn</a>
          <a href="#top" className="transition hover:text-fg">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
