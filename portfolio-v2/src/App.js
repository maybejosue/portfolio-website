import React, { useState} from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// components
import Nav from "./components/nav/desktopnav/Nav.js";
import MobileNav from "./components/nav/mobilenav/MobileNav.js";
import Home from "./components/sections/home/Home.js";
import Aboutme from "./components/sections/aboutme/Aboutme.js";
import ProjectList from "./components/sections/projects/ProjectList.js";
import Social from "./components/sections/social/Social.js";
import CloserLook from "./components/sections/closerlook/CloserLook.js";
import Resume from "./components/sections/resume/Resume.js";

import {Headroom} from './utils/index'

function App() {
  const [closeNav, setCloseNav] = useState(true);
  const [mobileNav, setMobileNav] = useState(window.innerWidth)

   window.addEventListener('resize', () => {
  var newWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   
  setMobileNav(newWidth)
})


  window.onscroll = Headroom



  return (
    <section id='home'>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div>
            {/* Keeps tabs in window width in order to switch between mobile and desktop navbar */}
          {mobileNav > 850 ? (<Nav />):(<MobileNav closeNav={closeNav} setCloseNav={setCloseNav} />)}

            <div onClick={() => setCloseNav(true)}>
              <Home />
              <Aboutme />
              <ProjectList />
              <Social />
            </div>
          </div>
        </Route>
        <Route path="/cl/:id" component={CloserLook} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
    </section>
  );
}

export default App;
