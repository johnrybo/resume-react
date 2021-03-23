import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { motion } from "framer-motion";

import Presentation from "./Presentation";
import { projects } from "../projects";

export default function HomeReactFullPage() {
  return (
    <ReactFullpage
      licenseKey={"8F15EDB4-2CFC4019-AFB2C191-710C6599"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Presentation />
            </div>

            {projects.map((project) => (
              <div key={project.title} className="section">
                <div
                  className="Project"
                  style={{ backgroundColor: project.backgroundColor }}
                >
                  <FadeInWhenVisible>
                    <img className="projectImage" src={project.image} alt="" />
                    <h2>{project.title}</h2>
                    <div className="projectLinks">
                      <motion.span whileHover={{ scale: 1.1 }}>
                        <a href={project.gitHub}>GitHub</a>
                      </motion.span>
                      <span className="Line">&nbsp;|&nbsp;</span>
                      <motion.span whileHover={{ scale: 1.1 }}>
                        <a href={project.demo}>Demo</a>
                      </motion.span>
                    </div>
                  </FadeInWhenVisible>
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
