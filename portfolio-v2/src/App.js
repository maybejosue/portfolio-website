import React from "react";
import "./App.css";

// components
import MobileNav from "./components/MobileNav.js";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Home />
    </div>
  );
}

export default App;
