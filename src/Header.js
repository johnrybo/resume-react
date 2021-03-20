import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="Header">
      <div className="HeaderContainer">
        <motion.span whileHover={{ scale: 1.2 }}>
          <Link to="/">Hem</Link>
        </motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>
          <Link to="/cv">CV</Link>
        </motion.span>
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
      </div>
    </div>
  );
}

export default Header;
