import React, { useState } from "react";
import "./ProjectCard.css";
import { Modal } from "../../modal/Modal.js";

// SVGs
import { Expand } from "../../../media/icons/index.js";

export const ProjectCard = ({ project }) => {
  const { name, img, id } = project;
  const [modal, setModal] = useState(false);

  const stopOverflow = () => {
    var body = document.getElementsByTagName("body")[0];
    if (
      body.getAttribute("style") == null ||
      body.getAttribute("style") == ""
    ) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "";
    }
  };

  const toggle = () => {
    setModal(!modal);
    stopOverflow();
  };

  return (
    <React.Fragment>
      <div className="card-container" key={id}>
        <div className="card-img-container">
          <div className="card-img-overflow">
            <img src={img} className="card-img" alt="project" />
          </div>
        </div>

        <div className="card-text-content-container">
          <div className="card-btn-container">
            <h6>{name}</h6>

            <div
              className="card-btn"
              title="More info - Expand"
              onClick={() => {
                toggle();
              }}
            >
              <Expand />
            </div>
          </div>
        </div>
      </div>
      {modal ? <Modal project={project} toggle={toggle} /> : null}
    </React.Fragment>
  );
};
