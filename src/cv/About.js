import React from "react";
import { motion } from "framer-motion";
import profilePic from "../images/foto-480w.png";

export default function About() {
  return (
    <div className="about">
      <motion.img
          className="profile-pic"
          src={profilePic}
          alt=""
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
        ></motion.img>
      <div className="cv-container">
        <h2 className="cv-h2">Om mig</h2>
        <p>
          Blivande front end-utvecklare som studerar på Medieinstitutet i
          Göteborg. Jag har sedan tidigare en kandidatexamen från
          systemvetenskapsprogrammet på Göteborgs universitet och är mycket
          intresserad av användarvänlig design och alla de möjligheter som
          skapas med samhällets digitalisering.
        </p>
      </div>
    </div>
  );
}
