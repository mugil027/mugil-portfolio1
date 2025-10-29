import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <main className="font-sans bg-bg">
      {/* ---------- NAVBAR ---------- */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-white">
          <a href="#" className="font-semibold text-lg">MUGIL M</a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>

            <a
              href="https://www.linkedin.com/in/mugil-m-47597a352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] 
                        drop-shadow-[0_0_6px_rgba(10,102,194,0.8)] 
                        hover:drop-shadow-[0_0_14px_rgba(10,102,194,1)] 
                        hover:text-[#1a75d1]
                        transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EA4335] 
                        drop-shadow-[0_0_6px_rgba(234,67,53,0.8)] 
                        hover:drop-shadow-[0_0_14px_rgba(234,67,53,1)] 
                        hover:text-[#ff6b6b]
                        transition-all duration-300"
            >
              <SiGmail className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/mugil027"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white 
                        drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] 
                        hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.9)]
                        hover:text-gray-300
                        transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/mugil.27/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 
                        drop-shadow-[0_0_6px_rgba(216,70,239,0.7)] 
                        hover:drop-shadow-[0_0_14px_rgba(216,70,239,1)] 
                        hover:text-purple-400
                        transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
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
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[40%] sm:w-[20%] bg-[#111]/95 z-50 flex flex-col p-8 text-white space-y-8 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <button onClick={toggleMenu} className="self-end mb-6">
                <X size={26} />
              </button>

              <a href="#" onClick={toggleMenu} className="text-lg hover:text-blue-400">Home</a>
              <a href="#projects" onClick={toggleMenu} className="text-lg hover:text-blue-400">Projects</a>
              <a href="#contact" onClick={toggleMenu} className="text-lg hover:text-blue-400">Contact</a>

              <a
                href="https://www.linkedin.com/in/mugil-m-47597a352/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] 
                          drop-shadow-[0_0_6px_rgba(10,102,194,0.8)] 
                          hover:drop-shadow-[0_0_14px_rgba(10,102,194,1)] 
                          hover:text-[#1a75d1]
                          transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EA4335] 
                          drop-shadow-[0_0_6px_rgba(234,67,53,0.8)] 
                          hover:drop-shadow-[0_0_14px_rgba(234,67,53,1)] 
                          hover:text-[#ff6b6b]
                          transition-all duration-300"
              >
                <SiGmail className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/mugil027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white 
                          drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] 
                          hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.9)]
                          hover:text-gray-300
                          transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/mugil.27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 
                          drop-shadow-[0_0_6px_rgba(216,70,239,0.7)] 
                          hover:drop-shadow-[0_0_14px_rgba(216,70,239,1)] 
                          hover:text-purple-400
                          transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ---------- MAIN SECTIONS ---------- */}
      <Hero />
      <Projects />

      {/* ---------- CONTACT SECTION ---------- */}
      <section id="contact" className="pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let’s work together
          </h2>
          <p className="text-white/80 max-w-2xl">
            I build data-driven, AI-powered applications end-to-end. Reach out
            for collaborations, roles, or project discussions.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-black font-medium
                        ring-1 ring-white/30 shadow-[0_0_20px_rgba(255,255,255,0.4)]
                        hover:shadow-[0_0_40px_rgba(255,255,255,0.8)]
                        transition-all duration-500 ease-out"
            >
              <SiGmail className="w-5 h-5 text-[#EA4335]" />
              Email Me
            </a>

            <a
              href="https://github.com/mugil027"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#0d1117] text-white font-medium
                        ring-1 ring-white/10 shadow-[0_0_15px_rgba(0,0,0,0.6)]
                        hover:shadow-[0_0_35px_rgba(255,255,255,0.8)]
                        transition-all duration-500 ease-out"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mugil-m-47597a352/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-[#0A66C2] text-white font-medium 
                        shadow-[0_0_20px_rgba(10,102,194,0.8)] 
                        ring-1 ring-[#0A66C2]/70 
                        hover:shadow-[0_0_50px_rgba(10,102,194,1)] 
                        transition-all duration-500 ease-out"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/mugil.27/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaInstagram
                className="w-10 h-10 text-pink-600 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)] 
                          group-hover:drop-shadow-[0_0_50px_rgba(236,72,153,1)] 
                          group-hover:text-pink-400 transition-all duration-500"
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
