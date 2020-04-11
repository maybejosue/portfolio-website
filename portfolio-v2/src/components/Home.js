import React from "react";

//animation
import SoftwareEnginner from "./animations/SoftwareEnginner.js";

export default function Home(props) {
  console.log(props);
  return (
    <section id="home">
      <div className="home-container">
        <div className="main-header">
          <h1>Josue Rodriguez</h1>
          <SoftwareEnginner />
          <h1>Portfolio</h1>
        </div>
        <div className="sub-header">
          <p>
            'When I let go of what I am,
            <br /> I become what I might be.' - Lao Tsu
          </p>
        </div>
        <div className="get-started-btn">
          <p className="btn">Get To Know Me</p>
        </div>
      </div>
    </section>
  );
}
