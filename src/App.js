import { useEffect } from "react";
import "./App.css";
import { AboutMe } from "./features/aboutMe/AboutMe";
import { ContactMe } from "./features/contactMe/ContactMe";
import { Header } from "./features/header/Header";
import { Hero } from "./features/hero/Hero";
import { MyWork } from "./features/myworks/MyWork";
import { PrimaryNav } from "./features/navigation/PrimaryNav";
import { Skills } from "./features/skills/Skills";

function App() {
  // useEffect(() => {
  //   const sections = document.querySelectorAll(".App > section");

  //   const handleScroll = () => {
  //     sections.forEach((sec) => {
  //       let top = window.scrollY ;
  //       let offset = sec.offsetTop;
  //       let height = sec.offsetHeight;
  //       console.log(top, offset, height);
  //       if (top >= offset && top < offset + height) {
  //         sec.classList.add("show-animate");
  //       } else {
  //         sec.classList.remove("show-animate");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="App container-fluid text-light">
      <div className="scroll-watcher"></div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;
