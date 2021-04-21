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
          Göteborg. Sedan tidigare har jag en kandidatexamen i systemvetenskap
          och är väldigt intresserad av ny teknik och alla de
          möjligheter som skapas med digitaliseringen i samhället. Jag ser
          mycket fram emot att ta med mig allt jag lärt mig under mina studier
          in i arbetslivet och bidra till att bygga webbapplikationer och
          hemsidor med fokus på hög kreativitet och användarvänlig design.
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
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  @media (max-width: 650px) {
    height: 5.5rem;
    width: auto;
  }
`;
