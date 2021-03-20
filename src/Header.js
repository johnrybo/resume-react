import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
          <i class="fab fa-github"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/johnrybo/"
          whileHover={{ scale: 1.2 }}
        >
          <i class="fab fa-linkedin"></i>
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
