import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Header(props) {

  return (
    <HeaderContainer>
      <LargeHeader>
        <LeftHeaderContainer>
          <motion.span whileHover={{ scale: 1.2 }}>
            <Link to={props.link}>{props.title}</Link>
          </motion.span>
        </LeftHeaderContainer>
        <RightHeaderContainer>
          <motion.a
            href="mailto:johnrybo@gmail.com"
            whileHover={{ scale: 1.2 }}
          >
            <MdMail />
          </motion.a>

          <motion.a
            href="https://github.com/johnrybo"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/johnrybo/"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
        </RightHeaderContainer>
      </LargeHeader>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.nav`
  height: 10vh;
  position: fixed;
  width: 100%;
  z-index: 9;
`;

const LargeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const LeftHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  height: 100%;
  text-decoration: none;
  color: var(--main-text-color);
  font-weight: 400;
  vertical-align: middle;

  a {
    text-decoration: none;
    color: var(--main-text-color);
    font-family: "Italiana", serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  height: 100%;
  text-decoration: none;
  color: var(--main-text-color);
  font-weight: 400;
  vertical-align: middle;

  a {
    text-decoration: none;
    color: var(--main-text-color);
    font-family: "Italiana", serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
    margin-left: 1rem;
  }
`;
