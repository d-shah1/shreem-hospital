/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/eye-care/retinal-disease-management/banner";
import About from "components/eye-care/retinal-disease-management/about";
import { WhyChooseUsEye } from "components/common/why-choose-us";
import OtherContent from "components/eye-care/retinal-disease-management/content";

const RetinalDiseaseManagement = () => {
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

export default RetinalDiseaseManagement;
