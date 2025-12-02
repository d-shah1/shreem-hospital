/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Card, CardBody } from "@material-tailwind/react";

const WhyChooseUs = () => {
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
              Why choose us for Joint Replacement Needs?
            </h2>
            <h5 className="mt-2 text-xl font-source-regular text-greyText">
              At Shreem Hospital, we bring together the best of expertise,
              technology, and compassionate care. Here's why patients across
              India trust us:
            </h5>
          </div>
        </div>

        {/* BODY */}
        <div className="mt-5 xl:mt-8 lg:mt-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-5">
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <h5 className="text-xl font-source-semibold text-black">
                  Expert care
                </h5>
                <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                  Our team consists of highly qualified doctor and experienced
                  nurses specializing in joint replacement procedures.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <h5 className="text-xl font-source-semibold text-black">
                  Best facilities
                </h5>
                <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                  We use advanced techniques, including minimally invasive
                  procedures, ensuring quicker recovery and better outcomes.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <h5 className="text-xl font-source-semibold text-black">
                  Affordable Care
                </h5>
                <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                  We offer world-class treatment at costs tailored to suit the
                  needs of Indian families without compromising quality.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <h5 className="text-xl font-source-semibold text-black">
                  Rehabilitation Program
                </h5>
                <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                  We provide a comprehensive rehabilitation program to help you
                  get back on your feet as quickly and safely as possible.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WhyChooseUsEye = () => {
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
              Why choose us for Eye Treatments?
            </h2>
            <h5 className="mt-2 text-xl font-source-regular text-greyText">
              At Shreem Hospital, we bring together the best of expertise,
              technology, and compassionate care. Here's why patients across
              India trust us:
            </h5>
          </div>
        </div>

        {/* BODY */}
        <div className="mt-5 xl:mt-8 lg:mt-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-5">
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <h5 className="text-xl font-source-semibold text-black">
                  Expert Team
                </h5>
                <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                  Our team is equipped with the latest advancements to provide
                  accurate diagnostics and effective treatment.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <h5 className="text-xl font-source-semibold text-black">
                  Best facilities
                </h5>
                <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                  We use advanced techniques, including minimally invasive
                  procedures, ensuring quicker recovery and better outcomes.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <h5 className="text-xl font-source-semibold text-black">
                  Affordable Care
                </h5>
                <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                  We ensure that you understand your condition and treatment to
                  make informed decisions about your eye health.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-white shadow-md border border-greyBorder rounded-lg">
              <CardBody className="p-5">
                <h5 className="text-xl font-source-semibold text-black">
                  Accessible and Affordable Services
                </h5>
                <p className="mt-2 text-base font-source-regular text-greyText leading-relaxed">
                  Our transparent pricing, and compassionate care make Shreem
                  Hospital a trusted choice for glaucoma management in the
                  community.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { WhyChooseUs, WhyChooseUsEye };
