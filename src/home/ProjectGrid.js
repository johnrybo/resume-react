import React from "react";
import { projects } from "../projects";
import { motion } from "framer-motion";

function ProjectGrid() {
  return (
    <div className="ProjectGrid">
      {projects.map((project) => (
        <motion.div className="Project" whileHover={{ scale: 1.05 }}>
          <img className="projectImage" src={project.image} alt="" />
          <h2>{project.title}</h2>
          <div className="projectLinks">
            <span>
              <a href={project.gitHub}>GitHub</a>
            </span>
            <span style={{fontSize: '2rem'}}>&nbsp;|&nbsp;</span>
            <span>
              <a href={project.demo}>Demo</a>
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectGrid;
