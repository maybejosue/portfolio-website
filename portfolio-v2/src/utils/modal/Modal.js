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
        <div>
          <div className="modal-img-container">
            <img src={props.project.img} className="modal-img" alt="project" />
          </div>

          <h4 className="modal-title">{props.project.name}</h4>
          <p className="modal-techstack">{props.project.techStack}</p>

          <h5>Description:</h5>

          <p className="modal-app-desc">{props.project.appDesc}</p>
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
        <div>{/* responsibilites in here */}</div>
      </div>
    </div>
  );
};
