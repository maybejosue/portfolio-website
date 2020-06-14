import React from "react";
import "./ProjectCard.css";
import { useHistory } from "react-router-dom";

// SVGs
import { Expand } from "../../../utils/index.js";

export const ProjectCard = ({ project }) => {
  const { name, img, id } = project;
  const history = useHistory();

  const sendToCloserLook = (siteName, projectData) => {
    history.push(`/cl/${siteName}`, projectData);
    window.scroll(0, 0);
  };

  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={img} className="card-img" />
      </div>

      <div className="card-text-content-container">
        <div className="card-btn-container">
          <h6>{name}</h6>

          <div
            className="card-btn"
            onClick={() => {
              sendToCloserLook(id, project);
            }}
          >
            <Expand />
          </div>
        </div>
      </div>
    </div>
  );
};
