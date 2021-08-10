import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Components
import Nav from "./components/nav/desktopnav/Nav.js";
import MobileNav from "./components/nav/mobilenav/MobileNav.js";
import Home from "./components/sections/home/Home.js";
import Aboutme from "./components/sections/aboutme/Aboutme.js";
import ProjectList from "./components/sections/projects/ProjectList.js";
import Social from "./components/sections/social/Social.js";
import Resume from "./components/sections/resume/Resume.js";

// util helper functions
import { Headroom, TrackWindowWidth } from "./utils/index.js";

function App() {
  const [closeNav, setCloseNav] = useState(true);
  const [mobileNav, setMobileNav] = useState(window.innerWidth);

  // sets mobileNav to current window size
  window.addEventListener("resize", () => {
    TrackWindowWidth(setMobileNav);
  });

  // call headroom function on scroll
  window.onscroll = Headroom;

  return (
    <section id="home">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div>
              {/*  Switch between mobile and desktop navbar */}
              {mobileNav > 850 ? (
                <Nav />
              ) : (
                <MobileNav closeNav={closeNav} setCloseNav={setCloseNav} />
              )}

              <div className="port-sections" onClick={() => setCloseNav(true)}>
                <Home />
                <Aboutme />
                <ProjectList />
                <Social />
              </div>
            </div>
          </Route>
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </section>
  );
}

export default App;
