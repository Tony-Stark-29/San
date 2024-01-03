import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App container-flex text-light">
      <Navbar />
      <Header />
      <main className="container">
        <AboutMe />
        <Skills />
        <Education />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
