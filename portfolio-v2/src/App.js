import React from "react";
import "./App.css";

// components
import MobileNav from "./components/MobileNav.js";
import Home from "./components/Home.js";
import AboutMe from "./components/AboutMe.js";
import Skill from "./components/Skill.js";

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Home />
      <AboutMe />
      <Skill />
    </div>
  );
}

export default App;