import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail, MdMenu } from "react-icons/md";
import MobileMenu from "./MobileMenu";

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const toggleHamburgerMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="header">
      <div className="large-header">
        <nav className="left-header-container">
          <motion.span whileHover={{ scale: 1.2 }}>
            <Link to={props.link}>{props.title}</Link>
          </motion.span>
        </nav>
        <nav className="right-header-container">
          <motion.a
            href="mailto:johnrybo@gmail.com"
            whileHover={{ scale: 1.2 }}
          >
            <MdMail />
          </motion.a>

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
        </nav>
      </div>


      {/* Funkar inte riktigt */}
      <div className="small-header">
        <motion.div whileHover={{ scale: 1.2 }}>
          {open ? (
            <MobileMenu title={props.title} link={props.link} />
          ) : (
            <div onClick={toggleHamburgerMenu}>
              <MdMenu />
            </div>
          )}
        </motion.div>
      </div>

    </nav>
  );
}
