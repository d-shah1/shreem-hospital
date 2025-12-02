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
                  Why you should consider Joint Replacement Surgery?
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  You might be a candidate for joint replacement surgery if you
                  experience:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Persistent joint pain that does not respond to medication or
                    physical therapy.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty in performing everyday activities like walking or
                    climbing stairs.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Joint stiffness that limits your range of motion.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Advanced arthritis or injury that has significantly damaged
                    the joint.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Myths About Joint Replacement Surgery
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  We understand that there are many misconceptions about knee
                  and joint replacement in India, such as:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    “Surgery is only for the elderly.”
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    “The implants don’t last long.”
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    “Recovery is too painful and slow.”
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
