import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// components
import Nav from "./components/nav/desktopnav/Nav.js";
import MobileNav from "./components/nav/mobilenav/MobileNav.js";
import Home from "./components/sections/home/Home.js";
import Aboutme from "./components/sections/aboutme/Aboutme.js";
import Skill from "./components/sections/skill/Skill.js";
import ProjectList from "./components/sections/projects/ProjectList.js";
import Social from "./components/sections/social/Social.js";
import CloserLook from "./components/sections/closerlook/CloserLook.js";
import Resume from "./components/sections/resume/Resume.js";

function App() {
  const [closeNav, setCloseNav] = useState(true);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div>
            <Nav />
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
        <Route path="/cl/:id" component={CloserLook} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
