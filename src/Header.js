import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header(props) {
  return (
    <nav className="Header">
      <nav className="LeftHeaderContainer">
        <motion.a
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <Link to={props.link}>{props.title}</Link>
        </motion.a>
      </nav>
      <nav className="RightHeaderContainer">
        <motion.a
          href="https://github.com/johnrybo"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/johnrybo/"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <FaLinkedin />
        </motion.a>
      </nav>
    </nav>
  );
}

export default Header;
