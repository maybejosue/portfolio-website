import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import "./Nav.css";

// Image
import MyPic from "../../../img/professional-pic.png";

//react headroom
import Headroom from "react-headroom";

export default function Nav() {
  const scroll = Scroll.animateScroll;

  function goTop() {
    scroll.scrollToTop();
  }
  return (
    <Headroom>
      <div id="home" id="nav">
        <div className="nav-normal-link-container">
          <div className="nav-img-container">
            <Link smooth duration={850} onClick={goTop}>
              <img
                src={MyPic}
                className="img"
                alt="Professional picture of Josue Rodriguez"
              />
            </Link>
          </div>
          <div className="nav-links">
            <Link smooth duration={850} onClick={goTop} className="nav-anchor">
              Home
            </Link>
            <Link smooth duration={850} to="aboutme" className="nav-anchor">
              About
            </Link>
            <Link smooth duration={850} to="skills" className="nav-anchor">
              Skills
            </Link>
            <Link smooth duration={850} to="projects" className="nav-anchor">
              Projects
            </Link>
            <Link smooth duration={850} to="resume" className="nav-anchor">
              Resume
            </Link>
            <Link smooth duration={850} to="social" className="nav-anchor">
              Social
            </Link>
          </div>
        </div>
        <div className="nav-contact">
          <Link smooth duration={850} to="contact">
            Contact
          </Link>
        </div>
      </div>
    </Headroom>
  );
}
