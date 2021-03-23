import React from "react";

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
    <div className="skills">
      <div className="cv-container">
        <h2 className="cv-h2">Tekniska färdigheter</h2>
        {skills.map((skill) => (
          <h4 key={skill}>{skill}</h4>
        ))}
      </div>
    </div>
  );
}
