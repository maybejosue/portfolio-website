import React, { useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import "./MobileNav.css";
import { useHistory } from "react-router-dom";

// Image
import MyPic from "../../../img/professional-pic.png";

//react headroom
import Headroom from "react-headroom";

export default function MobileNav(props) {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const scroll = Scroll.animateScroll;

  function open() {
    if (window.matchMedia("(min-width: 600px)").matches) {
      document.getElementById("sidebar-menu").style.width = "50%";
      setIsOpen(true);
    } else {
      document.getElementById("sidebar-menu").style.width = "60%";
      setIsOpen(true);
    }
  }

  function close() {
    document.getElementById("sidebar-menu").style.width = "0";
    setIsOpen(false);
  }

  function goTop() {
    scroll.scrollToTop();
    close();
  }

  return (
    <section id="home" id="mobileNav">
      <nav>
        <div className="mobile-nav-container">
          <Headroom>
            <div className="closed-nav-container">
              <div className="svg-container">
                <svg
                  width="24"
                  height="24"
                  onClick={() => (
                    open(), props.setCloseNav(false), setIsOpen(true)
                  )}
                >
                  <rect width="24" height="24" fill="none" rx="0" ry="0" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4 6.29985H3.6C3.27 6.29985 3 6.02985 3 5.69985C3 5.36985 3.27 5.09985 3.6 5.09985H20.4C20.73 5.09985 21 5.36985 21 5.69985C21 6.02985 20.73 6.29985 20.4 6.29985ZM20.4 10.4998H10.1C9.77 10.4998 9.5 10.2298 9.5 9.89981C9.5 9.56981 9.77 9.2998 10.1 9.2998H20.4C20.73 9.2998 21 9.56981 21 9.89981C21 10.2298 20.73 10.4998 20.4 10.4998ZM20.4 14.7H10.1C9.77 14.7 9.5 14.43 9.5 14.1C9.5 13.77 9.77 13.5 10.1 13.5H20.4C20.73 13.5 21 13.77 21 14.1C21 14.43 20.73 14.7 20.4 14.7ZM3.6 18.9H20.4C20.73 18.9 21 18.63 21 18.3C21 17.97 20.73 17.7 20.4 17.7H3.6C3.27 17.7 3 17.97 3 18.3C3 18.63 3.27 18.9 3.6 18.9ZM6.18007 15.42C6.29007 15.54 6.45007 15.6 6.60007 15.6C6.75007 15.6 6.91007 15.54 7.03007 15.43C7.26007 15.19 7.26007 14.81 7.03007 14.58L4.45007 12L7.03007 9.41996C7.26007 9.17996 7.26007 8.79996 7.03007 8.56996C6.79007 8.33996 6.41007 8.33996 6.18007 8.56996L3.18007 11.57C2.95007 11.81 2.95007 12.19 3.18007 12.42L6.18007 15.42Z"
                    fill="#FFF"
                  />
                </svg>
              </div>

              <div className="img-container">
                <Link smooth duration={850} onClick={goTop}>
                  <img className="img" src={MyPic} alt="Josue Rodriguez" />
                </Link>
              </div>
            </div>
          </Headroom>

          <div
            id="sidebar-menu"
            className="sidenav"
            onClick={isOpen && props.closeNav ? close() : null}
          >
            <div className="svg-container-open">
              <svg
                width="24"
                height="24"
                onClick={() => (close(), props.setCloseNav(true))}
              >
                <rect width="24" height="24" fill="none" rx="0" ry="0" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.4 6.29998H3.6C3.27 6.29998 3 6.02998 3 5.69998C3 5.36998 3.27 5.09998 3.6 5.09998H20.4C20.73 5.09998 21 5.36998 21 5.69998C21 6.02998 20.73 6.29998 20.4 6.29998ZM20.4 10.4999H10.1C9.77 10.4999 9.5 10.2299 9.5 9.89993C9.5 9.56993 9.77 9.29993 10.1 9.29993H20.4C20.73 9.29993 21 9.56993 21 9.89993C21 10.2299 20.73 10.4999 20.4 10.4999ZM20.4 14.7001H10.1C9.77 14.7001 9.5 14.4301 9.5 14.1001C9.5 13.7701 9.77 13.5001 10.1 13.5001H20.4C20.73 13.5001 21 13.7701 21 14.1001C21 14.4301 20.73 14.7001 20.4 14.7001ZM3.6 18.9001H20.4C20.73 18.9001 21 18.6301 21 18.3001C21 17.9701 20.73 17.7001 20.4 17.7001H3.6C3.27 17.7001 3 17.9701 3 18.3001C3 18.6301 3.27 18.9001 3.6 18.9001ZM3.18007 15.4201C3.29007 15.5401 3.45007 15.6001 3.60007 15.6001C3.75007 15.6001 3.91007 15.5401 4.03007 15.4201L7.03007 12.4201C7.26007 12.1801 7.26007 11.8001 7.03007 11.5701L4.03007 8.57008C3.79007 8.34008 3.41007 8.34008 3.18007 8.57008C2.95007 8.81008 2.95007 9.19008 3.18007 9.42008L5.75007 12.0001L3.18007 14.5701C2.95007 14.8101 2.95007 15.1901 3.18007 15.4201Z"
                  fill="#FFF"
                />
              </svg>
            </div>
            <div className="img-container-open">
              <Link smooth duration={850} onClick={goTop}>
                <img className="img-open" src={MyPic} alt="Josue Rodriguez" />
              </Link>
            </div>
            <div>
              <Link smooth duration={850} className="anchors" onClick={goTop}>
                Home
              </Link>
              <Link
                smooth
                duration={850}
                to="aboutme"
                className="anchors"
                onClick={close}
              >
                About
              </Link>
              <Link
                smooth
                duration={850}
                to="projects"
                className="anchors"
                onClick={close}
              >
                Projects
              </Link>
              <div className="anchors" >
              <Link
                smooth
                duration={850}
                to="social"
                className="mobile-contact-anchor"
                onClick={close}
              >
                Contact
              </Link>
              </div>
            </div>
            <div className="mobile-contact-container" onClick={() => history.push("/resume")}>
              Resume
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
