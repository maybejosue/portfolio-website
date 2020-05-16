import React from "react";
import "../App.css";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

// Image
import MyPic from "../img/professional-pic.png";

//react headroom
import Headroom from "react-headroom";

export default function Nav() {
  return (
    <Headroom>
      <div id="home" id="nav">
        <div className="nav-normal-link-container">
          <div className="nav-img-container">
            <img src={MyPic} className="img" />
          </div>
          <div className="nav-links ">
            <Link className="nav-anchor">Home</Link>
            <Link className="nav-anchor">About</Link>
            <Link className="nav-anchor">Skills</Link>
            <Link className="nav-anchor">Projects</Link>
            <Link className="nav-anchor">Resume</Link>
            <Link className="nav-anchor">Social</Link>
          </div>
        </div>
        <div className="nav-contact">
          <Link>Contact</Link>
        </div>
      </div>
    </Headroom>
  );
}
