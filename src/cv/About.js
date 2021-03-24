import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import profilePic from "../images/foto-480w.png";

import { CvContainer, CvCardContainer } from "./Cv";

export default function About() {
  return (
    <CvContainer>
      <ProfilePic
        className="profile-pic"
        src={profilePic}
        alt=""
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
      ></ProfilePic>
      <CvCardContainer>
        <h2>Om mig</h2>
        <p>
          Blivande frontend-utvecklare som studerar på Medieinstitutet i
          Göteborg. Jag har sedan tidigare en kandidatexamen från
          systemvetenskapsprogrammet på Göteborgs universitet och är mycket
          intresserad av användarvänlig design och alla de möjligheter som
          skapas med samhällets digitalisering.
        </p>
      </CvCardContainer>
    </CvContainer>
  );
}

const ProfilePic = styled(motion.img)`
  height: 13rem;
  width: auto;
  border-radius: 50%;
  padding: 0;
  margin-bottom: 2rem;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  @media (max-width: 650px) {
    height: 7rem;
    width: auto;
  }
`;
