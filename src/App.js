import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Designs from "./components/Designs";

function App() {
  return (
    <div className="scroll-smooth font-sans">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Designs />
      <Contact />
    </div>
  );
}

export default App;
