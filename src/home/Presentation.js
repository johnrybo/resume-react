import React from "react";

import { motion } from "framer-motion";

import { AiOutlineArrowDown } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Presentation() {
  return (
    <div className="Presentation">
      <div className="Container">

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
        </div>
      </div>
      <p>Scrolla vidare för att se mina projekt</p>

      <motion.span
        animate={{
          y: [0, 15, 0],
          transition: { repeat: Infinity, duration: 2 },
        }}
      >
        <AiOutlineArrowDown />
      </motion.span>
    </div>
  );
}

export default Presentation;
