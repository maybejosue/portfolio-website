import React from "react";
import "./Modal.css";
import { Exit, LiveView, SourceCode } from "../index.js";

export const Modal = (props) => {
  console.log(props);
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-exit-btn" onClick={props.toggle}>
          <Exit />
        </div>
        <div className="modal-desktop-content">
          <div className="modal-mobile">
            <div className="modal-img-container">
              <img
                src={props.project.img}
                className="modal-img"
                alt="project"
              />
            </div>
            <div className="modal-mobile-content">
              <h4 className="modal-title">{props.project.name}</h4>

              <p className="modal-app-desc">
                <span>
                  <h6>Description:</h6>
                </span>
                <br />
                {props.project.appDesc}
              </p>
              <p className="modal-techstack">{props.project.techStack}</p>

              <br />
              <div className="modal-btn-container">
                <div className="modal-code-info-btn">
                  <SourceCode />
                </div>
                <div className="modal-code-info-btn">
                  <LiveView />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-responsibilites-content">
            <h6>Responsibilites:</h6>

            {props.project.responsibility.map((task) => (
              <li>{task}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
