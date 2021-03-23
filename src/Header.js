import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail, MdMenu, MdClose } from "react-icons/md";
import MobileMenu from "./MobileMenu";

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const toggleHamburgerMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="Header">
      <div className="LargeHeader">
        <nav className="LeftHeaderContainer">
          <motion.span whileHover={{ scale: 1.2 }}>
            <Link to={props.link}>{props.title}</Link>
          </motion.span>
        </nav>
        <nav className="RightHeaderContainer">
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

      <div className="SmallHeader">
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
