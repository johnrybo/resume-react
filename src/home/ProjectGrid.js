import React from "react";
import { projects } from "../projects";

function ProjectGrid() {
  return (
    <div className="ProjectGrid">
      {projects.map((project) => (
        <div className="Project">
          <h2>{project.title}</h2>
          <img src={project.image} alt="" width="600px"/>
          <a href={project.gitHub}>GitHub</a>
          <a href={project.demo}>Demo</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
