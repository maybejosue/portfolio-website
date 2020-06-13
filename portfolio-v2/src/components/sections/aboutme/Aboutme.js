import React from "react";

import "./Aboutme.css";

//images
import fillerpic from "../../../img/filler-pic.jpg";

export default function Aboutme() {
  return (
    <section id="aboutme">
      <div className="about-me-container">
        <h5 className="section-heading">About Me</h5>
        <div className="about-me-content-container">
          <div className="about-me-img-container">
            <img src={fillerpic} className="about-me-img" />
          </div>
          <div className="about-me-paragraph-container">
            <p>
              Hey, my name is Josue Rodriguez and my professional career started
              when I dropped out of college to attend Lambda School, a coding
              boot camp for Full Stack Web Development, iOS Development, and
              Data Science.
              <br />
              <br />
              Over the past year, I’ve studied intensively on a remote team
              building real products with other software engineers, sharpening
              my skills to understand, plan, execute, reflect but most
              importantly think like a Developer -- producing creative ideas and
              solutions to solve programming problems.
              <br />
              <br />
              As for myself, I've been selling vintage and brand-name men's
              clothing, hard-to-find sneakers and accessories as a side hustle /
              hobby and it's grown into a passion for fashion overall. I also
              enjoy watching anime, reading manga, and one day hope to visit
              Japan with my brother.
              <br />
              <br />
              All in all, my mission is to excel in everything I put my mind
              too!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
