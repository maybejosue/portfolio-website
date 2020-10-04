import React from "react";

import "./Aboutme.css";

//images
import home from "../../../img/home.jpg";

// icon
import { Carrot } from "../../../utils/index.js";

//recent technology worked with
import { recenttech } from "../../../data/recenttech.js";

export default function Aboutme() {
  return (
    <section id="aboutme">
      <div className="about-me-container">
        <h5 className="section-heading">About Me</h5>
        <div className="about-me-content-container">
          <div className="about-me-img-container">
            <img src={home} className="about-me-img" alt="Josue Rodriguez" />
          </div>
          <div>
            <div className="about-me-paragraph-container">
              <p>
                Hey, my name is Josue Rodriguez and my professional career
                started when I dropped out of college to attend{" "}
                <span href="https://lambdaschool.com/about">Lambda School</span>
                , a coding boot camp for Full Stack Web Development and Data
                Science.
                <br />
                <br />
                Over the past year, I’ve studied intensively on a remote team
                building real products with other engineers, sharpening my
                skills to understand, plan, execute, reflect but most
                importantly think like a Developer -- producing creative ideas
                and solutions to solve programming problems.
                <br />
                <br />
                As for myself, I've been selling vintage and brand-name men's
                clothing, hard-to-find sneakers, and accessories as a side
                hustle / hobby for a couple of years now. I also enjoy watching
                anime, reading manga, and one day hope to visit Japan with my
                older brother. Ultimately, however, I would love to join a
                friendly developer team to consider a second family.
                <br />
                <br />
                All in all, my mission is to excel in everything I put my mind
                too!
              </p>
            </div>
            <div className="technologies">
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <div className="skills">
                {recenttech.map((skill) => (
                  <li className="skill">
                    {Carrot()}
                    {skill}{" "}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
