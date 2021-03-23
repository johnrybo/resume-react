import React from "react";
import { motion } from "framer-motion";

import CVFullpageWrapper from './CVReactFullpage';
import FadeInWhenVisible from "../FadeInWhenVisible";

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
    x: "100vw",
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
      <CVFullpageWrapper />
    </motion.div>
  );
}
