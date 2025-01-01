/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/about-us/banner";
import AboutAnshulDave from "components/about-us/anshul-dave";
import AboutPanktiDave from "components/about-us/pankti-dave";

const AboutUs = () => {
  return (
    <motion.section
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="p-0"
    >
      {/* BANNER */}
      <Banner />

      {/* ABOUT ANSHUL DAVE */}
      <AboutAnshulDave />

      {/* ABOUT PANKTI DAVE */}
      <AboutPanktiDave />
    </motion.section>
  );
};

export default AboutUs;
