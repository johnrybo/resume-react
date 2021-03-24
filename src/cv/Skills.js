import React from "react";
import { CvContainer, CvCardContainer } from "./CVReactFullpage";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Git",
  "GitHub",
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
