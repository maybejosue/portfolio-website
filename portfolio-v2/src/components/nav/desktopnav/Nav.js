import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import "./Nav.css";
import { useHistory } from "react-router-dom";

// Image
import MyPic from "../../../img/professional-pic.png";

//react headroom
import Headroom from "react-headroom";

export default function Nav() {
  const history = useHistory();
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
              <img src={MyPic} className="img" alt="Josue Rodriguez" />
            </Link>
          </div>
          <div className="nav-links">
            <Link smooth duration={850} onClick={goTop} className="nav-anchor">
              Home
            </Link>
            <Link smooth duration={850} to="aboutme" className="nav-anchor">
              About
            </Link>
            <Link smooth duration={850} to="projects" className="nav-anchor">
              Projects
            </Link>
            <div className="nav-anchor" >
            <Link smooth duration={850} to="social">
            Contact
          </Link>
            </div>
          </div>
        </div>
        <div className="nav-contact" onClick={() => history.push("/resume")}>
          Resume
        </div>
      </div>
    </Headroom>
  );
}
