import "./App.css";
import { Header } from "./features/header/Header";
import { Hero } from "./features/hero/Hero";
import { PrimaryNav } from "./features/navigation/PrimaryNav";
 

function App() {
  return (
    <div className="App container-fluid text-light">
      <div className="scroll-watcher"></div>
        <Header/>
        <Hero/>
        <div className="row vh-100"></div>
        <div className="row vh-100"></div>
        <div className="row vh-100"></div>
    </div>
  );
}

export default App;
