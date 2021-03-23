import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Presentation() {
  return (
    <div className="presentation">
      <div className="pres-outer-container">
        <div className="pres-inner-container">
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
        </div>
      </div>
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
    </div>
  );
}
