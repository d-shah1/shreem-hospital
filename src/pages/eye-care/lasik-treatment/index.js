/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/eye-care/lasik-treatment/banner";
import About from "components/eye-care/lasik-treatment/about";
import LasikTypes from "components/eye-care/lasik-treatment/types";
import { WhyChooseUsEye } from "components/common/why-choose-us";
import OtherContent from "components/eye-care/lasik-treatment/content";

const LasikTreatment = () => {
  return (
    <motion.section
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="p-0"
    >
      {/* BANNER */}
      <Banner />

      {/* ABOUT */}
      <About />

      {/* LASIK TYPES */}
      <LasikTypes />

      {/* OTHER CONTENT */}
      <OtherContent />

      {/* WHY CHOOSE US */}
      <WhyChooseUsEye />
    </motion.section>
  );
};

export default LasikTreatment;
