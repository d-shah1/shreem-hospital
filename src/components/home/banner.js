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
                <h1 className="text-3xl xl:text-5xl lg:text-5xl font-inter-bold tracking-tight text-black leading-tight">
                  Your journey to exclusive wellness begins with Shreem Hospital
                </h1>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pb-5 border-b border-greyBorder">
                <p className="text-md xl:text-lg lg:text-lg font-source-regular text-greyText">
                  Compassionate care meets cutting-edge technology at Shreem Eye
                  and Orthopaedic Hospital. Trust us for exceptional healthcare,
                  world-class specialists, and a patient-first approach to your
                  well-being and recovery.
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
                  <a href="tel:+917990026506" className="block">
                    <Button className="shadow-none hover:shadow-none bg-logoPrimary border border-logoPrimary border-opacity-20 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-logoPrimary font-source-regular">
                      Reach out to us
                    </Button>
                  </a>
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
