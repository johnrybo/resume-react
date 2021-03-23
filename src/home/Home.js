import { motion } from "framer-motion";
import Presentation from "./Presentation";
import ProjectGrid from "./ProjectGrid";
import HomeFullpageWrapper from "./HomeReactFullpage";

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

export default function Home() {
  return (
    <motion.div
      className="Home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <Presentation />
      <ProjectGrid /> */}
      <HomeFullpageWrapper />
    </motion.div>
  );
}