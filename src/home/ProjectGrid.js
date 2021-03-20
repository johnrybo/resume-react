import React from "react";
import { projects } from "../projects";
import { motion } from "framer-motion";

function ProjectGrid() {
  return (
    <div className="ProjectGrid">
      {projects.map((project) => (
        <div style={{backgroundColor: project.backgroundColor}} className="Project" >
          <img className="projectImage" src={project.image} alt="" />
          <h2>{project.title}</h2>
          <div className="projectLinks">
            <motion.span whileHover={{ scale: 1.1 }}>
              <a href={project.gitHub}>GitHub</a>
            </motion.span>
            <span style={{fontSize: '2rem'}}>&nbsp;|&nbsp;</span>
            <motion.span whileHover={{ scale: 1.1 }}>
              <a href={project.demo}>Demo</a>
            </motion.span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
