/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Testimonials from "components/testimonials";

const Homepage = () => {
  return (
    <motion.section
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="p-0"
    >
      {/* HOMEPAGE */}
      <div className="p-0"></div>

      {/* TESTIMONIALS */}
      <Testimonials />
    </motion.section>
  );
};

export default Homepage;
