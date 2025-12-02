/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* IMAGES */
import BannerImage from "assets/images/banners/banner.png";

const Banner = () => {
  return (
    <motion.div variants={animation} className="relative">
      <img
        src={BannerImage}
        className="w-full h-[30vh] xl:h-[25vh] lg:h-[25vh] object-cover"
        alt="About our doctors"
      />

      {/* GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent py-5 xl:py-10 lg:py-10">
        <div className="container h-full flex items-end">
          <div className="p-0">
            <h1 className="text-3xl xl:text-5xl lg:text-5xl font-inter-black text-white leading-snug xl:leading-tight lg:leading-tight uppercase">
              Pixee Medical Knee+ AR System
            </h1>
            <h2 className="mt-3 w-full xl:w-3/5 lg:w-3/5 text-xl font-source-regular text-white/80">
              Next-generation augmented reality navigation for knee replacement,
              delivering robotic-level accuracy with minimal invasiveness and
              faster recovery.
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
