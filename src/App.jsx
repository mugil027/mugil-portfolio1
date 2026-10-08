import useTheme from "./ui/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
