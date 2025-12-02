/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Card, CardBody } from "@material-tailwind/react";

const OtherContent = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-10 lg:gap-10">
          <div className="col-span-1">
            <Card className="bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Who should consider Joint Replacement Surgery?
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  You may be a candidate for hip replacement surgery if you
                  experience:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Chronic hip pain that interferes with your daily activities.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Pain that persists even after medication and physical
                    therapy.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Stiffness in the hip joint that reduces your range of
                    motion.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Significant damage to the joint caused by arthritis, trauma,
                    or disease.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Busting Common Myths About Hip Replacement Surgery
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  We understand that many in India hesitate to opt for hip
                  replacement due to common myths, such as:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    “Surgery is risky and complicated.”
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    “Recovery takes too long and isn’t worth it.”
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    “Hip implants don’t last long.”
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OtherContent;
