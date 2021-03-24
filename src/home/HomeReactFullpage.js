import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { motion } from "framer-motion";
import styled from "styled-components";

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
                <Project style={{ backgroundColor: project.backgroundColor }}>
                  <FadeInWhenVisible>
                    <img src={project.image} alt="" />
                    <h2>{project.title}</h2>
                    <ProjectLinks>
                      <motion.span whileHover={{ scale: 1.1 }}>
                        <a className="project-a" href={project.gitHub}>
                          GitHub
                        </a>
                      </motion.span>
                      <span className="line">&nbsp;|&nbsp;</span>
                      <motion.span whileHover={{ scale: 1.1 }}>
                        <a className="project-a" href={project.demo}>
                          Demo
                        </a>
                      </motion.span>
                    </ProjectLinks>
                  </FadeInWhenVisible>
                </Project>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--projects-text-color);
  width: 100%;
  height: 100vh;
  max-height: -webkit-fill-available;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  img {
    width: 40vw;
    height: auto;
    display: block;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);

    @media (max-width: 950px) {
      width: 60vw;
    }

    @media (max-width: 600px) {
      width: 85vw;
    }
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: lighter;
    margin-top: 2rem;
    margin-bottom: 1rem;

    @media (max-width: 950px) {
      font-size: 2.5rem;
    }

    @media (max-width: 600px) {
      font-size: 2rem;
      margin-bottom: 0.6rem;
    }
  }
`;

const ProjectLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
    text-decoration: none;
    color: var(--projects-text-color);

    @media (max-width: 950px) {
      font-size: 1.3rem;
    }
  }

  span {
    font-size: 2rem;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;
