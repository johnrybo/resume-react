import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail, MdMenu, MdClose } from "react-icons/md";

export default function MobileMenu(props) {
  const [open, setOpen] = useState(false);
  const toggleHamburgerMenu = () => {
    setOpen(!open);
  };

  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      {open ? (
        <motion.div className="mobileMenu">
          <div className="mobileMenuTop">
            <MdClose
              style={{ marginRight: "2rem" }}
              onClick={toggleHamburgerMenu}
            />
          </div>
          <div className="mobileMenuMain">
            <Link to={props.link}>{props.title}</Link>
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
          </div>
        </motion.div>
      ) : (
        <div onClick={toggleHamburgerMenu}>
          <MdMenu />
        </div>
      )}
    </motion.div>
  );
}
