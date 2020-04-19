import React from "react";

// Components
import { ProjectCard } from "./ProjectCard.js";

// Data for cards being displayed
import { projectData } from "../data/projectdata.js";

export default function ProjectList() {
  return (
    <section id="projects">
      <div>
        <h5 className="section-heading">Projects</h5>
        <div>
          {projectData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
