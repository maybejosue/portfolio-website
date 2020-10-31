import React from "react";
import "./Modal.css";
import { Exit, LiveView, SourceCode } from "../index.js";

export const Modal = ({ project, toggle }) => {
  const {
    img,
    name,
    appDesc,
    techStack,
    responsibility,
    liveSite,
    githubRepoToLive,
  } = project;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-exit-btn" onClick={toggle}>
          <Exit />
        </div>
        <div className="modal-desktop-content">
          <div className="modal-mobile">
            <div className="modal-img-container">
              <img src={img} className="modal-img" alt="project" />
            </div>
            <div className="modal-mobile-content">
              <h4 className="modal-title">{name}</h4>

              <p className="modal-app-desc">
                <h6>Description:</h6>

                <br />
                {appDesc}
              </p>
              <p className="modal-techstack">{techStack}</p>

              <br />
              <div className="modal-btn-container">
                <div className="modal-code-info-btn">
                  <a
                    href={githubRepoToLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live View"
                  >
                    <SourceCode />
                  </a>
                </div>
                <div className="modal-code-info-btn">
                  <a
                    href={liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live View"
                  >
                    <LiveView />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-responsibilites-content">
            <h6>Responsibilites:</h6>
            {responsibility.map((task) => (
              <li>{task}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
