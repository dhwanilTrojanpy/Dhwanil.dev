import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  useEffect(() => {
    // Cleanup function
    return () => {
      // Force garbage collection of Three.js resources
      if (window.THREE) {
        window.THREE.Cache.clear();
      }
    };
  }, []);

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
