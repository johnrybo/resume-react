import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="Header">
      <div className="HeaderContainer">
        <motion.a whileHover={{ scale: 1.2 }}>
          <Link to="/">Hem</Link>
        </motion.a>
        <span style={{fontSize: '1.5rem'}}>&nbsp;|&nbsp;</span>
        <motion.a whileHover={{ scale: 1.2 }}>
          <Link to="/cv">CV</Link>
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
