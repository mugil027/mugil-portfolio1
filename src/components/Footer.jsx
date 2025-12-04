const Footer = () => (
  <footer className="py-10 border-t border-slate-200/80 dark:border-white/10 bg-cardLight/80 dark:bg-bg/80">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
      <p className="text-slate-500 dark:text-white/60">
        © {new Date().getFullYear()} Mugil M · All rights reserved
      </p>
      <div className="flex gap-4">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com&su=Let's%20Collaborate&body=Hi%20Mugil%2C%20I%20found%20your%20portfolio%20and..."
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-white/80 hover:text-accent transition-colors"
        >
          Email
        </a>
        <a
          href="https://github.com/mugil027"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-white/80 hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mugil-m-47597a352/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-white/80 hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
