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
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setOpen((v) => !v);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <main className="font-body min-h-screen bg-[#faf9f6] text-stone-900 dark:bg-[#0a0a0a] dark:text-white transition-colors duration-500 overflow-x-hidden">
      {/* ---------- PREMIUM NAVBAR ---------- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-2 border-b border-stone-200/50 dark:border-stone-800/30 bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-xl shadow-sm"
          : "py-4 bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
          <a
            href="#"
            className="group font-heading font-semibold text-lg tracking-tight flex items-center gap-3"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-stone-900 to-stone-800 text-white dark:from-white dark:to-stone-200 dark:text-stone-900 text-xs font-bold shadow-lg shadow-stone-900/20 dark:shadow-white/10 group-hover:shadow-xl transition-shadow duration-300">
              MM
            </span>
            <span className="hidden sm:inline font-heading tracking-wide">MUGIL M</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#projects" className="group relative font-body text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-yellow-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="group relative font-body text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-yellow-400 group-hover:w-full transition-all duration-300" />
            </a>

            {/* Premium Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-body font-medium border border-stone-200/80 dark:border-stone-700/50 bg-white/70 dark:bg-stone-900/70 shadow-sm hover:shadow-md hover:border-amber-400/50 dark:hover:border-amber-500/30 transition-all duration-300"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-amber-600" />
                  <span>Dark</span>
                </>
              )}
            </button>

            {/* Premium Social icons */}
            <div className="flex items-center gap-4 pl-4 border-l border-stone-200/60 dark:border-stone-700/40">
              <a
                href="https://www.linkedin.com/in/mugil-m-47597a352/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:scale-110 hover:drop-shadow-lg transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EA4335] hover:scale-110 hover:drop-shadow-lg transition-all duration-300"
              >
                <SiGmail className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/mugil027"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:drop-shadow-lg transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/mugil.27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-110 hover:drop-shadow-lg transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile: theme + menu */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-full p-2.5 border border-stone-200/80 dark:border-stone-700/50 bg-white/70 dark:bg-stone-900/70 shadow-sm"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-amber-600" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full border border-stone-200/80 dark:border-stone-700/50 bg-white/70 dark:bg-stone-900/70 shadow-sm"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- PREMIUM MOBILE SLIDE-IN MENU ---------- */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-stone-900 z-40"
              onClick={toggleMenu}
            />
            {/* Premium Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-0 right-0 h-full w-[70%] xs:w-[60%] sm:w-[50%] bg-[#faf9f6] dark:bg-[#0f0f0f] z-50 flex flex-col p-8 gap-6 shadow-[0_0_60px_rgba(0,0,0,0.3)]"
            >
              {/* Subtle grain texture */}
              <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNyIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]" />
              
              <div className="relative flex items-center justify-between mb-4">
                <span className="font-heading font-semibold text-lg tracking-wide">Menu</span>
                <button onClick={toggleMenu} className="p-1 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded-lg transition-colors">
                  <X size={22} />
                </button>
              </div>

              <nav className="relative flex flex-col gap-4">
                <a
                  href="#"
                  onClick={toggleMenu}
                  className="font-body text-lg py-2 text-stone-700 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#projects"
                  onClick={toggleMenu}
                  className="font-body text-lg py-2 text-stone-700 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="font-body text-lg py-2 text-stone-700 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </nav>

              <div className="relative h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-4" />

              <div className="relative flex gap-5">
                <a
                  href="https://www.linkedin.com/in/mugil-m-47597a352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:scale-110 transition-transform"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EA4335] hover:scale-110 transition-transform"
                >
                  <SiGmail className="w-6 h-6" />
                </a>

                <a
                  href="https://github.com/mugil027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaGithub className="w-6 h-6" />
                </a>

                <a
                  href="https://www.instagram.com/mugil.27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:scale-110 transition-transform"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ---------- MAIN SECTIONS ---------- */}
      <Hero />
      <Projects />

      {/* ---------- PREMIUM CONTACT SECTION ---------- */}
      <section
        id="contact"
        className="relative pt-12 pb-24 bg-gradient-to-b from-transparent via-[#faf9f6]/50 to-[#f5f3ef]/80 dark:via-[#0a0a0a]/50 dark:to-[#0f0f0f]/80"
      >
        {/* Decorative accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="inline-flex flex-col gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[11px] uppercase tracking-[0.4em] text-amber-600/80 dark:text-amber-400/70">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 dark:text-stone-100">
              Let's work together
            </h2>
          </motion.div>

          <motion.p 
            className="font-body text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I build data-driven, AI-powered applications end-to-end. Reach out
            for collaborations, roles, or project discussions.
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-heading font-medium tracking-wide shadow-lg shadow-stone-900/20 dark:shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <SiGmail className="w-5 h-5 text-[#EA4335] relative z-10" />
              <span className="relative z-10">Email Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <SiGmail className="absolute left-6 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <span className="absolute inset-0 flex items-center justify-center pl-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Email Me</span>
            </a>

            <a
              href="https://github.com/mugil027"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/90 text-stone-800 font-heading font-medium tracking-wide ring-1 ring-stone-200/80 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:ring-amber-400/50 dark:bg-stone-800/80 dark:text-white dark:ring-stone-700/50 dark:hover:ring-amber-500/30 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mugil-m-47597a352/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0A66C2] text-white font-heading font-medium tracking-wide shadow-lg shadow-[#0A66C2]/30 ring-1 ring-[#0A66C2]/70 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/mugil.27/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full p-3 border border-pink-300/60 bg-pink-50/40 dark:bg-pink-500/10 dark:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
            >
              <FaInstagram className="w-6 h-6 text-pink-600 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;