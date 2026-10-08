import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(n => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 border-b border-line bg-bg/95 backdrop-blur-xl ${scrolled ? "shadow-sm" : ""}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded bg-[#0a1a33] font-mono text-xs font-medium text-white">MM</span>
          <span className="hidden font-display text-base sm:inline">Mugil Muraleedharan</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`}
              className={`rounded px-3.5 py-1.5 text-sm transition ${active === n.id ? "bg-accent-soft font-medium text-accent" : "text-muted hover:text-fg"}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Link to="/resume" className="btn-primary hidden !py-2 md:inline-flex">Resume</Link>
          <button onClick={() => setOpen(v => !v)} aria-label="Menu" aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded border border-line md:hidden">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-16 bottom-0 bg-bg px-6 py-8 md:hidden" aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV.map(n => (
                <li key={n.id} className="border-b border-line">
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-4 font-display text-3xl">{n.label}</a>
                </li>
              ))}
              <li className="pt-6"><Link to="/resume" className="btn-primary w-full">Resume</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
