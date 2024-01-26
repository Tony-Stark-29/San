import "./App.css";
import { AboutMe } from "./features/aboutMe/AboutMe";
import { Header } from "./features/header/Header";
import { Hero } from "./features/hero/Hero";
import { MyWork } from "./features/myworks/MyWork";
import { PrimaryNav } from "./features/navigation/PrimaryNav";
import { Skills } from "./features/skills/Skills";

function App() {
  return (
    <div className="App container-fluid text-light">
      <div className="scroll-watcher"></div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <MyWork/>
    </div>
  );
}

export default App;
