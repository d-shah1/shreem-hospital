/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/eye-care/pediatric-eye-care/banner";
import About from "components/eye-care/pediatric-eye-care/about";
import { WhyChooseUsEye } from "components/common/why-choose-us";
import OtherContent from "components/eye-care/pediatric-eye-care/content";

const PediatricEyeCare = () => {
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

export default PediatricEyeCare;
