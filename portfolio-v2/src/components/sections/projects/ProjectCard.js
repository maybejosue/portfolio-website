import React, { useState } from "react";
import "./ProjectCard.css";
// import { useHistory } from "react-router-dom";
import { Modal } from "../../../utils/modal/Modal.js";

// SVGs
import { Expand } from "../../../utils/index.js";

export const ProjectCard = ({ project }) => {
  const { name, img, id } = project;
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="card-container" key={id}>
        <div className="card-img-container">
          <img src={img} className="card-img" alt="project" />
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
    </>
  );
};
