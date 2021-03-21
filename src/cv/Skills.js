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

export default function Skills() {
  return (
    <div className="skills">
      <h2>Tekniska färdigheter:</h2>
      {qualities.map((quality) => (
        <h4>{quality}</h4>
      ))}
    </div>
  );
}
