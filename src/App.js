import "./App.css";
import Contact from "./Contact.js";
import Navigation from "./Navigation.js";
import Projects from "./Projects.js";
import About from "./About.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Navigation />
        <header className="App-header">
          <p>Hello, my name is</p>
          <h1>Aubrey</h1>
          <h4>A front-end developer based in London, Ontario</h4>
        </header>
        <main>
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
      <footer>
        This website is coded with 🤍 by Aubrey Jamison & is{" "}
        <a
          href="https://github.com/aubreyjustine713/ajamison-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          open sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
