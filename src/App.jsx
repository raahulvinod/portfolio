import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Featured from './components/Featured';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      {/* <Skills /> */}
      <Featured />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
