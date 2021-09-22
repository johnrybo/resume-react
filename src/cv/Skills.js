import React from "react";
import { CvContainer, CvCardContainer } from "./Cv";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Git",
  "GitHub",
  "Figma",
  "Webflow"
];

export default function Skills() {
  return (
    <CvContainer>
      <CvCardContainer>
        <h2>Tekniska färdigheter</h2>
        {skills.map((skill) => (
          <h4 key={skill}>{skill}</h4>
        ))}
      </CvCardContainer>
    </CvContainer>
  );
}
