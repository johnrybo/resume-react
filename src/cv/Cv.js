import React from "react";

import Education from "./Education";
import Work from "./Work";
import About from "./About";

export default function Cv() {
  return (
    <div className="Cv">
      <Education />
      <Work />
      <About />
    </div>
  );
}
