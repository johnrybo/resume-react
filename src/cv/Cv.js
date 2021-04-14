import React from "react";
import styled from "styled-components";

import FadeInWhenVisible from "../components/FadeInWhenVisible";
import ReactFullpageWrapper from "../components/ReactFullpageWrapper";

import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import About from "./About";

export default function Cv() {
  return (
    <ReactFullpageWrapper>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <FadeInWhenVisible>
          <Skills />
        </FadeInWhenVisible>
      </div>
      <div className="section">
        <FadeInWhenVisible>
          <Education />
        </FadeInWhenVisible>
      </div>
      <div className="section">
        <FadeInWhenVisible>
          <Work />
        </FadeInWhenVisible>
      </div>
    </ReactFullpageWrapper>
  );
}

export const CvContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  max-height: -webkit-fill-available;
`;

export const CvCardContainer = styled.div`
  width: 30rem;
  padding: 0rem 2rem 1rem 2rem;
  margin-top: 2rem;
  background-color: #e6e3df;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  @media (max-width: 650px) {
    width: 75vw;
  }

  h2 {
    font-size: 1.8rem;
    background-color: #f2efeb;
    margin-left: -2rem;
    margin-right: -2rem;
    margin-bottom: 1.5rem;
    margin-top: -1rem;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: var(--main-text-color-darker);

    @media (max-width: 850px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    margin: 1rem 0 1rem 0;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--main-text-color-darker);

    @media (max-width: 650px) {
      font-size: 0.9rem;
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--main-text-color-darker);

    @media (max-width: 650px) {
      font-size: 0.9rem;
    }
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: var(--main-text-color-darker);

    &:last-child {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 650px) {
      font-size: 0.7rem;
      font-weight: 400;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  h6 {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--main-text-color-darker);

    @media (max-width: 650px) {
      font-size: 0.7rem;
      font-weight: 400;
      margin-top: 0.5rem;
    }
  }

  p {
    line-height: 1.5;
    font-size: 1rem;
    color: var(--main-text-color-darker);

    @media (max-width: 850px) {
      line-height: 1.5;
      font-size: 0.9rem;
    }
  }
`;
