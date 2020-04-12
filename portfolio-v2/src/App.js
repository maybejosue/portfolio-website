import React from "react";
import "./App.css";

// components
import MobileNav from "./components/MobileNav.js";
import Home from "./components/Home.js";
import AboutMe from "./components/AboutMe.js";

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
