import React from "react";
import "./Social.css";

// social data
import { socialdata } from "../../../data/socialdata.js";

export default function Social() {
  return (
    <section id="social">
      <div className="social-container">
        
        <h5 className="section-heading">Contact / Media</h5>
        <div className='cards-section'>
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
      </div>
    </section>
  );
}
