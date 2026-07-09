import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Leadership from './components/Leadership/Leadership';
// import Certificates from './components/Certificates/Certificates'; // hidden until ready
import Contact from './components/Contact/Contact';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        {/* <Certificates /> */}{/* hidden until ready */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
