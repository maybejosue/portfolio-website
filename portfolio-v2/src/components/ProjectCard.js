import React from "react";

export const ProjectCard = ({ project }) => {
  const { name, desc, img } = project;
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={img} className="card-img" />
      </div>
      <div className="card-text-content-container">
        <h6>{name}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};
