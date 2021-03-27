import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import { useHistory } from "react-router-dom";

// Image
import { professionalPic } from "../../../media/img/index.js";

// data structure for nav tabs
import { navdata } from "../../../data/navdata.js";

export default function Nav() {
  const history = useHistory();

  return (
    <div className="headroom">
      <div id="home" id="nav">
        <div className="nav-normal-link-container">
          <div className="nav-img-container">
            <Link smooth duration={850} to="home">
              <img
                src={professionalPic}
                className="img"
                alt="Josue Rodriguez"
              />
            </Link>
          </div>
          {/* maps thru navdata data structure in order to display all basic tabs to desktop nav bar */}
          <div className="nav-links">
            {navdata.map((data) => (
              <Link
                key={data.id}
                smooth
                duration={850}
                to={data.goingTo}
                className="nav-anchor"
              >
                {data.sectionHeading}
              </Link>
            ))}
          </div>
        </div>
        <div className="nav-contact" onClick={() => history.push("/resume")}>
          Resume
        </div>
      </div>
    </div>
  );
}
