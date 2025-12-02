/* PACKAGE IMPORTS */
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

/* CONFIG */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import Main01 from "assets/images/banners/banner-01.jpeg";
import Main02 from "assets/images/banners/banner-02.jpeg";
import Main03 from "assets/images/banners/banner-03.jpeg";
import Main04 from "assets/images/banners/banner-04.jpeg";
import Main06 from "assets/images/banners/banner-06.jpeg";
import Main07 from "assets/images/banners/banner-07.jpeg";
import Main08 from "assets/images/banners/banner-08.jpeg";
import Main09 from "assets/images/banners/banner-09.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <motion.div variants={animation}>
      {/* TOP SECTION */}
      <div className="py-6 xl:py-12 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20">
            <div className="col-span-1">
              {/* BADGE */}
              <div className="w-fit bg-logoPrimary border-2 border-white shadow-md rounded-full px-4 py-2">
                <p className="text-base font-source-medium text-white">
                  CARING BEYOND HEALING
                </p>
              </div>

              <div className="mt-4">
                <h1 className="text-3xl xl:text-5xl lg:text-5xl font-playfair font-bold text-black leading-tight">
                  Precision Driven, AR - Powered Knee Replacement with{" "}
                  <span className="text-[#FFA726]">Pixee Medical System</span>
                </h1>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pb-5 border-b border-greyBorder">
                <p className="text-md xl:text-lg lg:text-lg font-source-regular text-greyText">
                  Our advanced AR-guided knee replacement technology delivers
                  precision, reduced pain, and faster rehabilitation for
                  patients seeking long-lasting mobility and confidence.
                </p>
                <p className="mt-2 text-md xl:text-lg lg:text-lg font-source-regular text-greyText">
                  Surgeon-led augmented-reality navigation ensures personalized
                  alignment, superior implant positioning, and smoother
                  recovery, transforming every knee procedure into a predictable
                  outcome.
                </p>
              </div>
              <div className="pt-5">
                <div className="flex items-center gap-5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.link/8p18eb"
                    className="block"
                  >
                    <Button className="shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
                      Book an appointment
                    </Button>
                  </a>
                  <Link to="/pixee-medical-system" className="block">
                    <Button className="shadow-none hover:shadow-none bg-logoPrimary border border-logoPrimary border-opacity-20 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-logoPrimary font-source-regular">
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="pt-0">
        <Marquee>
          <div className="px-2.5">
            <img
              src={Main01}
              className="w-[40vh] h-[40vh] object-cover rounded-xl"
              alt="Shreem Hospital"
            />
          </div>
          <div className="px-2.5">
            <img
              src={Main02}
              className="w-[40vh] h-[40vh] object-cover rounded-xl"
              alt="Shreem Hospital"
            />
          </div>
          <div className="px-2.5">
            <img
              src={Main03}
              className="w-[40vh] h-[40vh] object-cover rounded-xl"
              alt="Shreem Hospital"
            />
          </div>
          <div className="px-2.5">
            <img
              src={Main04}
              className="w-[40vh] h-[40vh] object-cover rounded-xl"
              alt="Shreem Hospital"
            />
          </div>

          <div className="px-2.5">
            <img
              src={Main06}
              className="w-[40vh] h-[40vh] object-cover rounded-xl"
              alt="Shreem Hospital"
            />
          </div>
          <div className="px-2.5">
            <img
              src={Main07}
              className="w-[40vh] h-[40vh] object-cover rounded-xl"
              alt="Shreem Hospital"
            />
          </div>
          <div className="px-2.5">
            <img
              src={Main08}
              className="w-[40vh] h-[40vh] object-cover rounded-xl"
              alt="Shreem Hospital"
            />
          </div>
          <div className="px-2.5">
            <img
              src={Main09}
              className="w-[40vh] h-[40vh] object-cover rounded-xl"
              alt="Shreem Hospital"
            />
          </div>
        </Marquee>
      </div>
    </motion.div>
  );
};

export default Banner;
