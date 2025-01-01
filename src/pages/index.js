/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/home/banner";
import Counters from "components/home/counters";
import AboutUs from "components/home/about-us";
import AboutHospital from "components/home/about-hospital";
import WhyChooseUs from "components/home/why-choose-us";
import Testimonials from "components/home/testimonials";

const Homepage = () => {
  return (
    <motion.section
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="p-0"
    >
      {/* BANNER */}
      <Banner />

      {/* COUNTERS */}
      <Counters />

      {/* ABOUT DOCTORS */}
      <AboutUs />

      {/* ABOUT HOSPITAL */}
      <AboutHospital />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* TESTIMONIALS */}
      <Testimonials />
    </motion.section>
  );
};

export default Homepage;
