import "./App.css";
import About from "./components/about";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import SocialLinks from "./components/socialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
