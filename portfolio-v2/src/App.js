import React, { useState } from "react";
import "./App.css";

// components
import MobileNav from "./components/MobileNav.js";
import Home from "./components/Home.js";
import Aboutme from "./components/Aboutme.js";
import Skill from "./components/Skill.js";
import ProjectList from "./components/ProjectList.js";
import Social from "./components/Social.js";

function App() {
  const [closeNav, setCloseNav] = useState(true);
  return (
    <div className="App">
      <MobileNav closeNav={closeNav} setCloseNav={setCloseNav} />
      <div onClick={() => setCloseNav(true)}>
        <Home />
        <Aboutme />
        <Skill />
        <ProjectList />
        <Social />
      </div>
    </div>
  );
}

export default App;
