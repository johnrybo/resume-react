import React from "react";
import { projects } from "../projects";

function ProjectGrid() {
  return (
    <div className="ProjectGrid">
      {projects.map((project) => (
        <div className="Project">
          <h2>{project.title}</h2>
          <img className="projectImage" src={project.image} alt="" />
          <div style={{height: '4rem', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <span><a href={project.gitHub}>GitHub</a></span>
            <span><a href={project.demo}>Demo</a></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
