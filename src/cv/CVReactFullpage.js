import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FadeInWhenVisible from "../FadeInWhenVisible";

import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import About from "./About";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    y: "100vh",
    transition: { ease: "easeInOut" },
  },
};

export default function CVFullpageWrapper() {
  return (
    <ReactFullpage
      licenseKey={"8F15EDB4-2CFC4019-AFB2C191-710C6599"}
      render={() => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <FadeInWhenVisible>
                <About />
              </FadeInWhenVisible>
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
          </div>
        );
      }}
    />
  );
}
