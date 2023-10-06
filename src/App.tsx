import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Articles from "./components/articles/Articles";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import DarkModeToggle from "./features/DarkToggleMode";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <DarkModeToggle />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
