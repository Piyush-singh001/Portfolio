import Navbar from "./component/navbar";
import Hero from "./component/hero";
import About from "./component/about";
import Services from "./component/services";
import SpringString from "./component/spting";
import SkillSection from "./component/skills";
import Projects from "./component/projects";
import Contact from "./component/contact";
import SkillSections from "./component/ss";
function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <SkillSection />
      <Services />
      <SpringString />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
