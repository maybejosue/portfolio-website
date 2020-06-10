import React from "react";

//logo images
import linkedin from "../img/linkedin-logo-x2.png";
import github from "../img/github-logo-x2.png";
import email from "../img/email-communication-x2.png";

export default function Social() {
  return (
    <section id="social">
      <div className="social-container">
        <h5 className="section-heading">Social Media</h5>

        <a
          href="https://www.linkedin.com/in/josue-rodriguez-e90210"
          target="_blank"
          className="social-card-container"
        >
          <div className="social-img-container linkedin">
            <img src={linkedin} />
          </div>
          <div className="social-text-content-container">
            <h6>Linkedin</h6>
            <p>www.linkedin.com/in/josue-rodriguez-e90210</p>
          </div>
        </a>

        <a
          className="social-card-container"
          href="https://github.com/JosueRodriguez-webdev"
          target="_blank"
        >
          <div className="social-img-container github">
            <img src={github} />
          </div>
          <div className="social-text-content-container">
            <h6>Github</h6>
            <p>https://github.com/JosueRodriguez-webdev</p>
          </div>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=wm&ogbl#inbox?compose=DmwnWrRsqQCRHtCkcJQnVKLFJxgKXMnpKjTvNZVkjBGfHsxQdqXNrLDGnRvCntHKbRmcttBRRScG"
          target="_blank"
          className="social-card-container"
        >
          <div className="social-img-container email">
            <img src={email} />
          </div>
          <div className="social-text-content-container">
            <h6>Email</h6>
            <p>jr2589213@gmail.com</p>
          </div>
        </a>
      </div>
    </section>
  );
}
