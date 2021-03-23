import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

import '../css/Cv.css';

import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import About from "./About";

export default function CVReactFullpage() {
  return (
    <ReactFullpage
      licenseKey={"8F15EDB4-2CFC4019-AFB2C191-710C6599"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
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
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
