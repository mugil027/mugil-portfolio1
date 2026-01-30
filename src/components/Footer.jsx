const Footer = () => (
  <footer className="relative py-12 border-t border-stone-200/60 dark:border-stone-800/40 bg-[#faf9f6]/90 dark:bg-[#0a0a0a]/90">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-stone-100/50 to-transparent dark:from-stone-900/30 dark:to-transparent pointer-events-none" />
    
    <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left - Copyright */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <p className="font-display text-sm text-stone-500 dark:text-stone-400 tracking-wide">
          © {new Date().getFullYear()} <span className="font-medium text-stone-700 dark:text-stone-300">Mugil M</span> · All rights reserved
        </p>
        <p className="font-body text-[11px] text-stone-400 dark:text-stone-500 tracking-wider uppercase">
          Crafted with precision & passion
        </p>
      </div>

      {/* Center - Elegant divider (desktop only) */}
      <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />

      {/* Right - Links */}
      <div className="flex items-center gap-6">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com&su=Let's%20Collaborate&body=Hi%20Mugil%2C%20I%20found%20your%20portfolio%20and..."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative font-body text-sm text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
        >
          Email
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="https://github.com/mugil027"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative font-body text-sm text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
        >
          GitHub
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/mugil-m-47597a352/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative font-body text-sm text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
        >
          LinkedIn
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
      </div>
    </div>

    {/* Bottom decorative line */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
  </footer>
);

export default Footer;