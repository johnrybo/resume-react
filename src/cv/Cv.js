import React from "react";
import { motion } from "framer-motion";

import profilePic from "../images/foto-480w.png";
import Education from "./Education";
import Work from "./Work";
import About from "./About";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    y: "100vh",
    transition: { ease: "easeInOut" },
  },
};

export default function Cv() {
  return (
    <motion.div
      className="Cv"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.img
        className="profilePic"
        src={profilePic}
        alt=""
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
      ></motion.img>
      <Education />
      <Work />
      <About />
    </motion.div>
  );
}
