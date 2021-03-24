import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import pattern2 from "../images/pattern2.jpg";

export default function Presentation() {
  return (
    <PresentationContainer>
      <PresOuterContainer>
        <PresInnerContainer>
          <motion.h1
            className="pres-h1"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
          >
            John Rybo
          </motion.h1>

          <motion.h2
            className="pres-h2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
          >
            FRONTEND-UTVECKLARE
          </motion.h2>
        </PresInnerContainer>
      </PresOuterContainer>
      <p className="pres-p">Scrolla vidare för att se mina projekt</p>

      <motion.span
        className="pres-span"
        animate={{
          y: [0, 15, 0],
          transition: { repeat: Infinity, duration: 2 },
        }}
      >
        <AiOutlineArrowDown />
      </motion.span>
    </PresentationContainer>
  );
}

const PresentationContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  font-family: "Italiana", serif;
  font-weight: 600;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  max-height: -webkit-fill-available;

  p {
    font-size: 1rem;
    margin-top: 3rem;
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
      margin-top: 2rem;
    }
  }

  span {
    font-size: 1.5rem;
  }
`;

const PresOuterContainer = styled.div`
  width: 50%;
  height: 65%;
  background-image: url(${pattern2});
  background-size: cover;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  @media (max-width: 1600px) {
    width: 50%;
  }

  @media (max-width: 950px) {
    width: 60%;
    height: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;

const PresInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--pres-outer-container-bg-color);
  opacity: 0.8;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  h1 {
    font-size: 9rem;
    font-weight: 400;
    margin: 0;
    color: var(--pres-outer-container-text-color);

    @media (max-width: 1600px) {
      font-size: 6rem;
    }

    @media (max-width: 1200px) {
      font-size: 5rem;
    }

    @media (max-width: 900px) {
      margin-top: 1.5rem;
    }

    @media (max-width: 600px) {
      font-size: 4rem;
    }

    @media (max-width: 450px) {
      font-size: 3.3rem;
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-top: 1rem;
    color: var(--pres-outer-container-text-color);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    @media (max-width: 1600px) {
      font-size: 1.2rem;
    }

    @media (max-width: 950px) {
      margin-bottom: 1.5rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;
