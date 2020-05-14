import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// components
import MobileNav from "./components/MobileNav.js";
import Home from "./components/Home.js";
import Aboutme from "./components/Aboutme.js";
import Skill from "./components/Skill.js";
import ProjectList from "./components/ProjectList.js";
import Social from "./components/Social.js";
import CloserLook from "./components/CloserLook.js";

function App() {
  const [closeNav, setCloseNav] = useState(true);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div>
            <MobileNav closeNav={closeNav} setCloseNav={setCloseNav} />

            <div onClick={() => setCloseNav(true)}>
              <Home />
              <Aboutme />
              <Skill />
              <ProjectList />
              <Social />
            </div>
          </div>
        </Route>
        <Route path="/closerlook/:name">
          <div>
            <CloserLook />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
