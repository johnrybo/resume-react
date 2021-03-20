import React from "react";
import profilePic from "../images/foto-480w.png";
import { motion } from "framer-motion";

import { AiOutlineArrowDown } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Presentation() {
  return (
    <div className="Presentation">
      <div className="Container">
        <motion.img
          className="profilePic"
          src={profilePic}
          alt=""
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        ></motion.img>
        <div className="Container2">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
          >
            John Rybo
          </motion.h1>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
          >
            FRONTEND-UTVECKLARE
          </motion.h2>

          <div className="PresentationLinks">
            <motion.a
              href="https://github.com/johnrybo"
              whileHover={{ scale: 1.2 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/johnrybo/"
              whileHover={{ scale: 1.2 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </div>
      <p>Scrolla vidare för att se mina projekt</p>

      <motion.span
        animate={{
          y: [0, 25, 0],
          transition: { repeat: Infinity, duration: 2 },
        }}
      >
        <AiOutlineArrowDown />
      </motion.span>
    </div>
  );
}

export default Presentation;
