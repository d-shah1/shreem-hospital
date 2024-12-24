import { Link } from "react-router-dom";

/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import Hospital from "assets/images/banners/about-hospital.jpg";

const AboutHospital = () => {
  return (
    <motion.div
      variants={animation}
      className="py-6 xl:py-12 lg:py-12 bg-greyBackground bg-opacity-60 shadow-inner"
    >
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20">
          <div className="col-span-1 relative">
            <img
              src={Hospital}
              className="w-full h-[25vh] xl:h-[45vh] lg:h-[45vh] rounded-xl shadow-md"
              alt="Shreem Hospital"
            />
          </div>
          <div className="col-span-1">
            {/* BADGE */}
            <div className="w-fit bg-orange-400 border-2 border-white shadow-md rounded-full px-4 py-2">
              <p className="text-base font-source-medium text-white">
                ABOUT OUR HOSPITAL
              </p>
            </div>
            <h2 className="mt-5 text-3xl xl:text-3xl lg:text-3xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
              Best Eye and Orthopaedic hospital in Vadodara
            </h2>
            <div className="mt-5">
              <p className="text-base font-source-regular text-greyText leading-relaxed">
                Shreem Eye and Orthopaedic Hospital features eye and orthopaedic
                care, supported by experienced professionals and
                state-of-the-art infrastructure. Recognized as a leading
                orthopedic hospital in Vadodara, it offers round-the-clock
                emergency services, an in-house pharmacy, and advanced
                diagnostic facilities to ensure patients receive comprehensive
                care under one roof.
              </p>
              <p className="mt-5 text-base font-source-regular text-greyText leading-relaxed">
                The hospital's design incorporates natural elements such as
                ample light and ventilation, creating a welcoming environment
                that promotes the well-being of both patients and visitors.sure
                patients receive comprehensive care under one roof.
              </p>
              <Link to="/book-appointment" className="mt-5 block">
                <Button className="shadow-none hover:shadow-none bg-logoPrimary border border-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
                  Book an appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutHospital;
