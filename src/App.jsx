import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="bg-bg text-ink min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Achievements />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
