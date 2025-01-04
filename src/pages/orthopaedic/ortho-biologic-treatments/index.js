/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/orthopaedic/ortho-biologic-treatments/banner";
import About from "components/orthopaedic/ortho-biologic-treatments/about";
import WhyChooseUs from "components/common/why-choose-us";
import OtherContent from "components/orthopaedic/ortho-biologic-treatments/content";

const OrthoBiologicTreatments = () => {
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

export default OrthoBiologicTreatments;
