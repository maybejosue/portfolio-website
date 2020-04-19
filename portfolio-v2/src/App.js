import React from "react";
import "./App.css";

// components
import MobileNav from "./components/MobileNav.js";
import Home from "./components/Home.js";
import AboutMe from "./components/AboutMe.js";
import Skill from "./components/Skill.js";
import ProjectList from "./components/ProjectList.js";
import Social from "./components/Social.js";

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Home />
      <AboutMe />
      <Skill />
      <ProjectList />
      <Social />
    </div>
  );
}

export default App;
