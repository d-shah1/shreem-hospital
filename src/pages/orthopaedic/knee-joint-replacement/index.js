/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/orthopaedic/knee-joint-replacement/banner";
import About from "components/orthopaedic/knee-joint-replacement/about";
import WhyChooseUs from "components/common/why-choose-us";
import OtherContent from "components/orthopaedic/knee-joint-replacement/content";

const KneeJointReplacement = () => {
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
      <WhyChooseUs />

      {/* OTHER CONTENT */}
      <OtherContent />
    </motion.section>
  );
};

export default KneeJointReplacement;
