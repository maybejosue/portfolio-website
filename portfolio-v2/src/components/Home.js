import React from "react";

//animation
import SoftwareEngineer from "./animations/SoftwareEngineer.js";

export default function Home(props) {
  return (
    <section>
      <div className="home-container">
        <div className="main-header">
          <h1>Josue Rodriguez</h1>
          <SoftwareEngineer />
          <h1>Portfolio</h1>
        </div>
        <div className="sub-header">
          <p
            style={{
              fontStyle: "italic",
              lineHeight: "25px",
              fontSize: "1.2rem",
            }}
          >
            "When I let go of what I am,
            <br /> I become what I might be." - Lao Tsu
          </p>
        </div>
        <div className="get-started-btn">
          <a href="#aboutme" style={{ textDecoration: "none", color: "black" }}>
            <p className="btn">Get To Know Me</p>
          </a>
        </div>
      </div>
    </section>
  );
}
