import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  {
    url: "/",
    content: "Hem",
  },
  {
    url: "/cv",
    content: "CV",
  },
  {
    url: "https://github.com/johnrybo",
    content: <i class="fab fa-github"></i>,
  },
  {
    url: "https://www.linkedin.com/in/johnrybo/",
    content: <i class="fab fa-linkedin"></i>,
  },
];

function Header() {
  return (
    <div className="Header">
      <div className="HeaderContainer">
        {menuItems.map((menuItem) => (
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={menuItem.url}>{menuItem.content}</Link>
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Header;
