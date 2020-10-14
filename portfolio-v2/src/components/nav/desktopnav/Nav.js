import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import "./Nav.css";
import { useHistory } from "react-router-dom";

// Image
import MyPic from "../../../img/professional-pic.png";

//react headroom
import Headroom from "react-headroom";

import {navdata} from '../../../data/navdata.js'

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
            {navdata.map((data)=>(
              <Link key={data.id} smooth duration={850} to={data.goingTo} className="nav-anchor">
              {data.sectionHeading}
            </Link>
  ))}
            
          </div>
        </div>
        <div className="nav-contact" onClick={() => history.push("/resume")}>
          Resume
        </div>
      </div>
    </Headroom>
  );
}
