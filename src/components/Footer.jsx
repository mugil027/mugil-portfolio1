const Footer = () => (
  <footer className="py-12 border-t border-white/10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-white/60 text-sm">© {new Date().getFullYear()} Mugil M</p>
      <div className="flex gap-4 text-sm">
        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com&su=Let's%20Collaborate&body=Hi%20Mugil%2C%20I%20found%20your%20portfolio%20and..." target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">Email</a>
        <a href="https://github.com/mugil027" target="_blank" className="text-white/80 hover:text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/mugil-m-47597a352/" target="_blank" className="text-white/80 hover:text-white">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
