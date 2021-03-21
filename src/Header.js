import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header(props) {
  return (
    <nav className="Header">
        <motion.a whileHover={{ scale: 1.2 }}>
          <Link to={props.link}>{props.title}</Link>
        </motion.a>
    </nav>
  );
}

export default Header;
