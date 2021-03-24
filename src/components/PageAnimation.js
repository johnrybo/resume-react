import React from "react";
import { motion } from "framer-motion";

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

export default function PageAnimation(props) {
  return (
    <motion.div
      className="Cv"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
}
