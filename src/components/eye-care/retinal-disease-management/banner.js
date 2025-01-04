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
        className="w-full h-[25vh] object-cover"
        alt="About our doctors"
      />

      {/* GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent py-5 xl:py-10 lg:py-10">
        <div className="container h-full flex items-end">
          <h1 className="text-3xl xl:text-5xl lg:text-5xl font-inter-black text-white leading-snug xl:leading-tight lg:leading-tight uppercase">
            Retinal Disease Management
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
