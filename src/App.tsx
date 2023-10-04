import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
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
      <Experience />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
