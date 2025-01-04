/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/eye-care/optic-nerve-related-disorders/banner";
import About from "components/eye-care/optic-nerve-related-disorders/about";
import { WhyChooseUsEye } from "components/common/why-choose-us";
import OtherContent from "components/eye-care/optic-nerve-related-disorders/content";

const OpticNerveDisorders = () => {
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

      {/* WHY CHOOSE US */}
      <WhyChooseUsEye />

      {/* OTHER CONTENT */}
      <OtherContent />
    </motion.section>
  );
};

export default OpticNerveDisorders;
