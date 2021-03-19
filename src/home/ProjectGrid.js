import React from "react";
import { projects } from "../projects";
import { motion } from "framer-motion";

function ProjectGrid() {
  return (
    <div className="ProjectGrid">
      {projects.map((project) => (
        <motion.div className="Project" whileHover={{ scale: 1.1 }}>
          <h2>{project.title}</h2>
          <img className="projectImage" src={project.image} alt="" />
          <div
            style={{
              height: "4rem",
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <span>
              <a href={project.gitHub}>GitHub</a>
            </span>
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
