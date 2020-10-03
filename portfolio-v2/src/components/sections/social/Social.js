import React from "react";
import "./Social.css";

//logo images
import linkedin from "../../../img/linkedin-logo-x2.png";
import github from "../../../img/github-logo-x2.png";
import email from "../../../img/email-communication-x2.png";

// social data
import { socialdata } from "../../../data/socialdata.js";

export default function Social() {
  return (
    <section id="social">
      <div className="social-container">
        <h5 className="section-heading">Social Media</h5>

        {socialdata.map((data) => (
          <a
            key={data.id}
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card-container"
          >
            <div
              className="social-img-container"
              style={{ backgroundColor: `${data.color}` }}
            >
              <img src={data.iconImg} alt={`${data.heading} logo`} />
            </div>
            <div className="social-text-content-container">
              <h6>{data.heading}</h6>
              <p>{data.subHeading}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
