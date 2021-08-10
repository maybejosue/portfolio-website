import React from "react";

import "./Aboutme.css";

//images
import { home } from "../../../media/img/index.js";

// icon
import { Carrot } from "../../../media/icons/index.js";

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
                Hey! I'm Josue Rodriguez, a software engineer based in Hemet,
                CA.
                <br />
                <br />
                My professional career started when I dropped out of college to
                attend{" "}
                <a
                  href="https://www.credly.com/badges/13c57035-cf72-4e2d-9e05-7dee0de2e8c3/public_url"
                  target="_blank"
                  alt="Certificate of Completion"
                >
                  Lambda School
                </a>
                , a 9+ month computer science and software engineering program
                that provides an immersive hands-on curriculum with a focus on
                computer science, and full-stack web development.
                <br />
                <br />
                As for myself, I really enjoy watching anime, reading manga,
                struggling through leetcode challenges, and immersing myself in
                the sneaker-twitter community (sneaker drops).
                <br />
                <br />
                I recently left my Project Reviewing position at Lambda to focus
                on finding a team whose products and projects I'm passionate
                about. My goal right now is to join an awesome engineering-team
                as a full-time Software Engineer!
                <br />
                <br />
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
