import React from "react";

const qualities = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Git",
  "GitHub",
];

export default function About() {
  return (
    <div className="about">
      <h2 className="resumeH2_2">Grejer jag kan:</h2>
      {qualities.map((quality) => (
        <h4 className="resumeH4">{quality}</h4>
      ))}
    </div>
  );
}
