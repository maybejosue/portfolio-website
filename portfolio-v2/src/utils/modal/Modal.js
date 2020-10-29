import React from "react";
import "./Modal.css";
import { Exit } from "../index.js";

export const Modal = (props) => {
  console.log(props);
  return (
    <div className="modal">
      <div className="modal-exit-btn" onClick={props.toggle}>
        <Exit />
      </div>
      <div>
        <div className="modal-img-container">
          <img src={props.project.img} className="modal-img" alt="project" />
        </div>

        <h4>{props.project.name}</h4>
        <p>
          <span>App Desc:</span>
          {props.project.appDesc}
        </p>
        <br />

        <p>
          <span>Tech Stack:</span>
          {props.project.techStack}
        </p>
      </div>
      <div>{/* responsibilites in here */}</div>
    </div>
  );
};
