import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {
  // ---------- THEME STATE ----------
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((v) => !v);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <main className="font-sans min-h-screen bg-bgLight text-slate-900 dark:bg-bg dark:text-white transition-colors duration-500">
      {/* ---------- NAVBAR ---------- */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/70 dark:border-white/10 bg-cardLight/80 dark:bg-bg/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <a
            href="#"
            className="font-semibold text-lg tracking-tight flex items-center gap-2"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-bold">
              MM
            </span>
            <span className="hidden sm:inline">MUGIL M</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-white/80">
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border border-slate-200 dark:border-white/20 bg-white/70 dark:bg-card/70 shadow-sm hover:shadow-md transition-all"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span>Dark</span>
                </>
              )}
            </button>

            {/* Social icons */}
            <div className="flex items-center gap-3 pl-2 border-l border-slate-200/60 dark:border-white/10">
              <a
                href="https://www.linkedin.com/in/mugil-m-47597a352/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:scale-110 transition-transform"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EA4335] hover:scale-110 transition-transform"
              >
                <SiGmail className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/mugil027"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/mugil.27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-110 transition-transform"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile: theme + menu */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-full p-2 border border-slate-200 dark:border-white/20 bg-white/70 dark:bg-card/70"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-1 rounded-full border border-slate-200 dark:border-white/20 bg-white/60 dark:bg-card/80"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- MOBILE SLIDE-IN MENU ---------- */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-[65%] xs:w-[55%] sm:w-[45%] bg-cardLight dark:bg-card z-50 flex flex-col p-6 text-sm text-slate-800 dark:text-white gap-6 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Menu</span>
                <button onClick={toggleMenu}>
                  <X size={22} />
                </button>
              </div>

              <a
                href="#"
                onClick={toggleMenu}
                className="py-1 hover:text-accent"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="py-1 hover:text-accent"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="py-1 hover:text-accent"
              >
                Contact
              </a>

              <div className="h-px bg-slate-200/70 dark:bg-white/10 my-2" />

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mugil-m-47597a352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2]"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EA4335]"
                >
                  <SiGmail className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/mugil027"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/mugil.27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ---------- MAIN SECTIONS ---------- */}
      <Hero />
      <Projects />

      {/* ---------- CONTACT SECTION ---------- */}
      <section
        id="contact"
        className="pt-8 pb-20 bg-gradient-to-b from-transparent to-slate-100/80 dark:to-slate-900/70"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex flex-col gap-2 mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Let’s work together
            </h2>
          </div>

          <p className="text-slate-600 dark:text-white/80 max-w-2xl">
            I build data-driven, AI-powered applications end-to-end. Reach out
            for collaborations, roles, or project discussions.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-medium
                        ring-1 ring-black/10 dark:ring-white/20 shadow-md
                        hover:shadow-lg hover:-translate-y-[1px]
                        transition-all duration-300"
            >
              <SiGmail className="w-5 h-5 text-[#EA4335]" />
              Email Me
            </a>

            <a
              href="https://github.com/mugil027"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-cardLight text-slate-900 font-medium
                        ring-1 ring-slate-200 shadow-sm
                        hover:shadow-md hover:-translate-y-[1px]
                        dark:bg-card dark:text-white dark:ring-white/10
                        transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mugil-m-47597a352/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-[#0A66C2] text-white font-medium 
                        shadow-md ring-1 ring-[#0A66C2]/70 
                        hover:shadow-lg hover:-translate-y-[1px]
                        transition-all duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/mugil.27/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full p-2 border border-pink-400/60 bg-pink-50/40 dark:bg-pink-500/10"
            >
              <FaInstagram
                className="w-6 h-6 text-pink-600 
                          group-hover:scale-110 
                          transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
