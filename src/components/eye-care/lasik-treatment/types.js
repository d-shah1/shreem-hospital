/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Card, CardBody } from "@material-tailwind/react";

const LasikTypes = () => {
  return (
    <motion.div
      variants={animation}
      className="py-6 xl:py-12 lg:py-12 bg-greyBackground bg-opacity-50 shadow-inner"
    >
      <div className="container">
        {/* HEADING */}
        <div className="p-0">
          {/* BADGE */}
          <div className="w-fit bg-orange-400 border-2 border-white shadow-md rounded-full px-4 py-2">
            <p className="text-base font-source-medium text-white">
              SHREEM EYE AND ORTHOPAEDIC HOSPITAL
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-3xl xl:text-3xl lg:text-3xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
              Types of Vision Correction Procedures
            </h2>
          </div>
        </div>

        {/* BODY */}
        <div className="mt-5 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-5">
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <div className="w-16 h-16 bg-logoPrimary border-2 border-white shadow-md rounded-full flex items-center justify-center">
                  <p className="text-2xl font-source-semibold text-white">01</p>
                </div>
                <div className="mt-5">
                  <h5 className="text-xl font-source-semibold text-black">
                    LASIK
                  </h5>
                  <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                    A flap is created in the cornea, and the underlying tissue
                    is reshaped using the laser treatment.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <div className="w-16 h-16 bg-logoPrimary border-2 border-white shadow-md rounded-full flex items-center justify-center">
                  <p className="text-2xl font-source-semibold text-white">02</p>
                </div>
                <div className="mt-5">
                  <h5 className="text-xl font-source-semibold text-black">
                    LASEK
                  </h5>
                  <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                    We use advanced techniques, including minimally invasive
                    procedures, ensuring quicker recovery and better outcomes.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <div className="w-16 h-16 bg-logoPrimary border-2 border-white shadow-md rounded-full flex items-center justify-center">
                  <p className="text-2xl font-source-semibold text-white">03</p>
                </div>
                <div className="mt-5">
                  <h5 className="text-xl font-source-semibold text-black">
                    PRK
                  </h5>
                  <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                    The outer layer of the cornea is removed, and the underlying
                    tissue is reshaped. The outer layer regenerates naturally.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <div className="w-16 h-16 bg-logoPrimary border-2 border-white shadow-md rounded-full flex items-center justify-center">
                  <p className="text-2xl font-source-semibold text-white">04</p>
                </div>
                <div className="mt-5">
                  <h5 className="text-xl font-source-semibold text-black">
                    FEMTO LASIK
                  </h5>
                  <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                    A blade-free, highly precise technique that uses femtosecond
                    laser technology to create the corneal flap.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LasikTypes;
